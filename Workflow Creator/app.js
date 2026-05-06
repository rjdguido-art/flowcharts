const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const nodeNames = {
  start: "Start",
  task: "Task",
  decision: "Decision",
  data: "Data",
  delay: "Delay",
  end: "End"
};

const NODE_WIDTH = 176;
const NODE_HEIGHT = 96;
let renderFrame = null;

const state = {
  mapName: "Untitled Workflow",
  nodes: [],
  edges: [],
  selected: null,
  selectedNodeIds: [],
  mode: "select",
  connectSource: null,
  edgeStyle: "smooth",
  snap: true,
  showGrid: true,
  theme: "light",
  view: { x: 260, y: 120, scale: 1 },
  history: [],
  future: [],
  drag: null,
  priorMode: null,
  editSnapshot: null
};

const els = {
  app: $(".app"),
  canvasWrap: $("#canvasWrap"),
  gridLayer: $("#gridLayer"),
  edgeLayer: $("#edgeLayer"),
  nodeLayer: $("#nodeLayer"),
  selectionBox: $("#selectionBox"),
  statusText: $("#statusText"),
  zoomRange: $("#zoomRange"),
  zoomOutput: $("#zoomOutput"),
  gridToggle: $("#gridToggle"),
  snapToggle: $("#snapToggle"),
  edgeStyle: $("#edgeStyle"),
  searchInput: $("#searchInput"),
  searchResults: $("#searchResults"),
  mapName: $("#mapName"),
  nodeInspector: $("#nodeInspector"),
  edgeInspector: $("#edgeInspector"),
  emptyInspector: $("#emptyInspector"),
  multiInspector: $("#multiInspector"),
  selectedCount: $("#selectedCount"),
  nodeTitle: $("#nodeTitle"),
  nodeType: $("#nodeType"),
  nodeNotes: $("#nodeNotes"),
  nodeX: $("#nodeX"),
  nodeY: $("#nodeY"),
  edgeLabel: $("#edgeLabel"),
  edgeTone: $("#edgeTone"),
  nodeCount: $("#nodeCount"),
  edgeCount: $("#edgeCount"),
  miniMap: $("#miniMap"),
  outlineList: $("#outlineList")
};

function uid(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

function cloneData() {
  return JSON.parse(JSON.stringify({
    mapName: state.mapName,
    nodes: state.nodes,
    edges: state.edges,
    edgeStyle: state.edgeStyle,
    snap: state.snap,
    showGrid: state.showGrid,
    theme: state.theme,
    view: state.view
  }));
}

function clampScale(scale) {
  return Math.min(1.8, Math.max(0.35, Number(scale) || 1));
}

function normalizeNode(node, index = 0) {
  const type = nodeNames[node?.type] ? node.type : "task";
  return {
    id: typeof node?.id === "string" && node.id ? node.id : uid("node"),
    type,
    title: String(node?.title || nodeNames[type]),
    notes: String(node?.notes || ""),
    x: Number.isFinite(Number(node?.x)) ? Number(node.x) : index * 240,
    y: Number.isFinite(Number(node?.y)) ? Number(node.y) : 0,
    width: NODE_WIDTH,
    height: NODE_HEIGHT
  };
}

function normalizeEdge(edge, index, validNodeIds) {
  if (!validNodeIds.has(edge?.from) || !validNodeIds.has(edge?.to) || edge.from === edge.to) return null;
  return {
    id: typeof edge?.id === "string" && edge.id ? edge.id : uid("edge"),
    from: edge.from,
    to: edge.to,
    label: String(edge?.label || ""),
    tone: ["default", "success", "warning", "danger"].includes(edge?.tone) ? edge.tone : "default"
  };
}

function restoreData(data) {
  state.mapName = data.mapName || "Untitled Workflow";
  state.nodes = Array.isArray(data.nodes) ? data.nodes.map(normalizeNode) : [];
  const validNodeIds = new Set(state.nodes.map((node) => node.id));
  state.edges = Array.isArray(data.edges)
    ? data.edges.map((edge, index) => normalizeEdge(edge, index, validNodeIds)).filter(Boolean)
    : [];
  state.edgeStyle = data.edgeStyle || "smooth";
  state.snap = data.snap !== false;
  state.showGrid = data.showGrid !== false;
  state.theme = data.theme || "light";
  state.view = {
    x: Number(data.view?.x) || 260,
    y: Number(data.view?.y) || 120,
    scale: clampScale(data.view?.scale)
  };
  state.selected = null;
  state.selectedNodeIds = [];
  state.connectSource = null;
  state.editSnapshot = null;
  syncControls();
  render();
}

function snapshotsMatch(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function saveHistory(snapshot = cloneData(), skipIfCurrent = false) {
  if (skipIfCurrent && snapshotsMatch(snapshot, cloneData())) return;
  state.history.push(snapshot);
  if (state.history.length > 80) state.history.shift();
  state.future = [];
  updateHistoryButtons();
}

function beginEdit() {
  if (!state.editSnapshot) state.editSnapshot = cloneData();
}

function commitEdit() {
  if (!state.editSnapshot) return;
  saveHistory(state.editSnapshot, true);
  state.editSnapshot = null;
}

function undo() {
  if (!state.history.length) return;
  state.future.push(cloneData());
  restoreData(state.history.pop());
  setStatus("Undid last change");
  updateHistoryButtons();
}

function redo() {
  if (!state.future.length) return;
  state.history.push(cloneData());
  restoreData(state.future.pop());
  setStatus("Redid change");
  updateHistoryButtons();
}

function updateHistoryButtons() {
  $("#undoBtn").disabled = state.history.length === 0;
  $("#redoBtn").disabled = state.future.length === 0;
}

function setStatus(text) {
  els.statusText.textContent = text;
}

function snapValue(value) {
  return state.snap ? Math.round(value / 16) * 16 : Math.round(value);
}

function screenToWorld(clientX, clientY) {
  const rect = els.canvasWrap.getBoundingClientRect();
  return {
    x: (clientX - rect.left - state.view.x) / state.view.scale,
    y: (clientY - rect.top - state.view.y) / state.view.scale
  };
}

function applyView() {
  const transform = `translate3d(${state.view.x}px, ${state.view.y}px, 0) scale(${state.view.scale})`;
  els.nodeLayer.style.transform = transform;
  els.edgeLayer.style.transform = transform;
  els.gridLayer.style.backgroundSize = `${32 * state.view.scale}px ${32 * state.view.scale}px`;
  els.gridLayer.style.backgroundPosition = `${state.view.x}px ${state.view.y}px`;
  els.zoomRange.value = Math.round(state.view.scale * 100);
  els.zoomOutput.textContent = `${Math.round(state.view.scale * 100)}%`;
}

function getNode(id) {
  return state.nodes.find((node) => node.id === id);
}

function getSelectedNodeIds() {
  return state.selectedNodeIds.filter((id) => Boolean(getNode(id)));
}

function selectNodes(ids) {
  commitEdit();
  const uniqueIds = [...new Set(ids)].filter((id) => Boolean(getNode(id)));
  state.selectedNodeIds = uniqueIds;
  state.selected = uniqueIds.length ? { type: "node", id: uniqueIds[0] } : null;
  state.connectSource = null;
  render();
}

function toggleNodeSelection(id) {
  const current = new Set(getSelectedNodeIds());
  current.has(id) ? current.delete(id) : current.add(id);
  selectNodes([...current]);
}

function createNode(type, x, y, title) {
  saveHistory();
  const node = {
    id: uid("node"),
    type,
    title: title || nodeNames[type],
    notes: "",
    x: snapValue(x),
    y: snapValue(y),
    width: NODE_WIDTH,
    height: NODE_HEIGHT
  };
  state.nodes.push(node);
  selectItem("node", node.id);
  setStatus(`Added ${nodeNames[type]} node`);
  render();
}

function addEdge(from, to) {
  if (!from || !to || from === to) return;
  const exists = state.edges.some((edge) => edge.from === from && edge.to === to);
  if (exists) {
    setStatus("That connection already exists");
    return;
  }
  saveHistory();
  const edge = { id: uid("edge"), from, to, label: "", tone: "default" };
  state.edges.push(edge);
  state.connectSource = null;
  selectItem("edge", edge.id);
  setStatus("Connected nodes");
  render();
}

function selectItem(type, id) {
  commitEdit();
  state.selected = type && id ? { type, id } : null;
  state.selectedNodeIds = type === "node" && id ? [id] : [];
  if (type !== "node") state.connectSource = null;
  render();
}

function deleteSelected() {
  if (!state.selected) return;
  commitEdit();
  saveHistory();
  if (state.selected.type === "node") {
    const ids = new Set(getSelectedNodeIds());
    state.nodes = state.nodes.filter((node) => !ids.has(node.id));
    state.edges = state.edges.filter((edge) => !ids.has(edge.from) && !ids.has(edge.to));
  } else {
    state.edges = state.edges.filter((edge) => edge.id !== state.selected.id);
  }
  state.selected = null;
  state.selectedNodeIds = [];
  setStatus("Deleted selection");
  render();
}

function duplicateSelected() {
  if (!state.selected || state.selected.type !== "node") return;
  const originals = getSelectedNodeIds().map(getNode).filter(Boolean);
  if (!originals.length) return;
  commitEdit();
  saveHistory();
  const copies = originals.map((original) => ({
    ...JSON.parse(JSON.stringify(original)),
    id: uid("node"),
    title: originals.length === 1 ? `${original.title} copy` : original.title,
    x: original.x + 40,
    y: original.y + 40
  }));
  state.nodes.push(...copies);
  selectNodes(copies.map((node) => node.id));
  setStatus(`Duplicated ${copies.length} node${copies.length === 1 ? "" : "s"}`);
}

function findOpenPosition(x, y) {
  let nextY = y;
  const overlaps = (left, top) => state.nodes.some((node) => (
    left < node.x + node.width + 24 &&
    left + NODE_WIDTH + 24 > node.x &&
    top < node.y + node.height + 24 &&
    top + NODE_HEIGHT + 24 > node.y
  ));
  while (overlaps(x, nextY)) nextY += 128;
  return { x, y: nextY };
}

function addLinkedNode() {
  if (state.selected?.type !== "node" || getSelectedNodeIds().length !== 1) return;
  const parent = getNode(state.selected.id);
  if (!parent) return;
  commitEdit();
  saveHistory();
  const position = findOpenPosition(parent.x + 260, parent.y);
  const child = {
    id: uid("node"),
    type: "task",
    title: "Next step",
    notes: "",
    x: snapValue(position.x),
    y: snapValue(position.y),
    width: NODE_WIDTH,
    height: NODE_HEIGHT
  };
  state.nodes.push(child);
  state.edges.push({ id: uid("edge"), from: parent.id, to: child.id, label: "", tone: "default" });
  selectItem("node", child.id);
  setStatus("Added linked child node");
}

function nodeCenter(node) {
  return { x: node.x + node.width / 2, y: node.y + node.height / 2 };
}

function edgePath(fromNode, toNode) {
  const from = nodeCenter(fromNode);
  const to = nodeCenter(toNode);
  if (state.edgeStyle === "straight") return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  if (state.edgeStyle === "step") {
    const midX = from.x + (to.x - from.x) / 2;
    return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
  }
  const distance = Math.max(90, Math.abs(to.x - from.x) * 0.45);
  return `M ${from.x} ${from.y} C ${from.x + distance} ${from.y}, ${to.x - distance} ${to.y}, ${to.x} ${to.y}`;
}

function renderEdges() {
  els.edgeLayer.innerHTML = "";
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = [
    ["default", "#315f74"],
    ["success", "#008b8f"],
    ["warning", "#5f8697"],
    ["danger", "#8f3141"],
    ["selected", "#25e2cc"]
  ].map(([tone, color]) => `
    <marker id="arrow-${tone}" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="${color}"></path>
    </marker>`).join("");
  els.edgeLayer.append(defs);

  state.edges.forEach((edge) => {
    const from = getNode(edge.from);
    const to = getNode(edge.to);
    if (!from || !to) return;
    const selected = state.selected?.type === "edge" && state.selected.id === edge.id;
    const d = edgePath(from, to);
    const hitPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    hitPath.setAttribute("d", d);
    hitPath.classList.add("edge-hit");
    hitPath.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      selectItem("edge", edge.id);
    });
    els.edgeLayer.append(hitPath);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("marker-end", `url(#arrow-${selected ? "selected" : edge.tone || "default"})`);
    path.classList.add("edge-path", edge.tone || "default");
    if (selected) path.classList.add("selected");
    els.edgeLayer.append(path);

    if (edge.label) {
      const a = nodeCenter(from);
      const b = nodeCenter(to);
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", (a.x + b.x) / 2);
      label.setAttribute("y", (a.y + b.y) / 2 - 8);
      label.setAttribute("text-anchor", "middle");
      label.classList.add("edge-label");
      label.textContent = edge.label;
      els.edgeLayer.append(label);
    }
  });
}

function renderNodes() {
  els.nodeLayer.innerHTML = "";
  state.nodes.forEach((node) => {
    const el = document.createElement("article");
    el.className = `node ${node.type}`;
    el.dataset.id = node.id;
    el.style.transform = `translate(${node.x}px, ${node.y}px)`;
    if (state.selectedNodeIds.includes(node.id)) el.classList.add("selected");
    if (state.connectSource === node.id) el.classList.add("connect-source");
    el.innerHTML = `
      <div class="node-type"><span class="swatch ${node.type}"></span>${nodeNames[node.type] || node.type}</div>
      <h3></h3>
      <p></p>
    `;
    el.querySelector("h3").textContent = node.title;
    el.querySelector("p").textContent = node.notes || "No notes";
    el.addEventListener("pointerdown", (event) => onNodePointerDown(event, node));
    el.addEventListener("dblclick", () => {
      selectItem("node", node.id);
      els.nodeTitle.focus();
      els.nodeTitle.select();
    });
    els.nodeLayer.append(el);
  });
}

function renderInspector() {
  els.nodeInspector.classList.add("hidden");
  els.edgeInspector.classList.add("hidden");
  els.multiInspector.classList.add("hidden");
  els.emptyInspector.classList.remove("hidden");
  if (!state.selected) return;

  if (state.selected.type === "node") {
    const selectedIds = getSelectedNodeIds();
    if (selectedIds.length > 1) {
      els.emptyInspector.classList.add("hidden");
      els.multiInspector.classList.remove("hidden");
      els.selectedCount.textContent = selectedIds.length;
      return;
    }
    const node = getNode(state.selected.id);
    if (!node) return;
    els.emptyInspector.classList.add("hidden");
    els.nodeInspector.classList.remove("hidden");
    if (document.activeElement !== els.nodeTitle) els.nodeTitle.value = node.title;
    if (document.activeElement !== els.nodeType) els.nodeType.value = node.type;
    if (document.activeElement !== els.nodeNotes) els.nodeNotes.value = node.notes;
    if (document.activeElement !== els.nodeX) els.nodeX.value = Math.round(node.x);
    if (document.activeElement !== els.nodeY) els.nodeY.value = Math.round(node.y);
    return;
  }

  const edge = state.edges.find((item) => item.id === state.selected.id);
  if (!edge) return;
  els.emptyInspector.classList.add("hidden");
  els.edgeInspector.classList.remove("hidden");
  if (document.activeElement !== els.edgeLabel) els.edgeLabel.value = edge.label || "";
  if (document.activeElement !== els.edgeTone) els.edgeTone.value = edge.tone || "default";
}

function renderMiniMap() {
  els.miniMap.innerHTML = "";
  if (!state.nodes.length) return;
  const xs = state.nodes.flatMap((node) => [node.x, node.x + node.width]);
  const ys = state.nodes.flatMap((node) => [node.y, node.y + node.height]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  const width = Math.max(1, maxX - minX);
  const height = Math.max(1, maxY - minY);
  const scale = Math.min(250 / width, 128 / height);
  const padX = (els.miniMap.clientWidth - width * scale) / 2;
  const padY = (els.miniMap.clientHeight - height * scale) / 2;

  state.edges.forEach((edge) => {
    const from = getNode(edge.from);
    const to = getNode(edge.to);
    if (!from || !to) return;
    const a = nodeCenter(from);
    const b = nodeCenter(to);
    const x1 = padX + (a.x - minX) * scale;
    const y1 = padY + (a.y - minY) * scale;
    const x2 = padX + (b.x - minX) * scale;
    const y2 = padY + (b.y - minY) * scale;
    const link = document.createElement("span");
    const length = Math.hypot(x2 - x1, y2 - y1);
    link.className = "mini-link";
    link.style.left = `${x1}px`;
    link.style.top = `${y1}px`;
    link.style.width = `${length}px`;
    link.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
    els.miniMap.append(link);
  });

  state.nodes.forEach((node) => {
    const mini = document.createElement("span");
    mini.className = "mini-node";
    mini.style.left = `${padX + (node.x - minX) * scale}px`;
    mini.style.top = `${padY + (node.y - minY) * scale}px`;
    mini.style.width = `${Math.max(7, node.width * scale)}px`;
    mini.style.height = `${Math.max(5, node.height * scale)}px`;
    els.miniMap.append(mini);
  });
}

function renderSearch() {
  const term = els.searchInput.value.trim().toLowerCase();
  els.searchResults.innerHTML = "";
  if (!term) return;
  state.nodes
    .filter((node) => `${node.title} ${node.notes} ${node.type}`.toLowerCase().includes(term))
    .slice(0, 8)
    .forEach((node) => {
      const button = document.createElement("button");
      button.textContent = node.title;
      button.addEventListener("click", () => {
        selectItem("node", node.id);
        focusNode(node);
      });
      els.searchResults.append(button);
    });
}

function renderOutline() {
  if (!els.outlineList) return;
  els.outlineList.innerHTML = "";
  if (!state.nodes.length) {
    const empty = document.createElement("div");
    empty.className = "outline-empty";
    empty.textContent = "No nodes yet.";
    els.outlineList.append(empty);
    return;
  }

  state.nodes.forEach((node, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "outline-item";
    if (state.selected?.type === "node" && state.selected.id === node.id) button.classList.add("active");
    button.innerHTML = `<span class="swatch ${node.type}"></span><span></span>`;
    button.querySelector("span:last-child").textContent = `${index + 1}. ${node.title}`;
    button.addEventListener("click", () => {
      selectItem("node", node.id);
      focusNode(node);
      setActiveTab("right", "inspectTab");
    });
    els.outlineList.append(button);
  });
}

function render() {
  if (renderFrame) {
    cancelAnimationFrame(renderFrame);
    renderFrame = null;
  }
  els.app.dataset.theme = state.theme;
  els.app.classList.toggle("has-selection", Boolean(state.selected));
  els.gridLayer.classList.toggle("hidden", !state.showGrid);
  renderEdges();
  renderNodes();
  renderInspector();
  renderMiniMap();
  renderSearch();
  renderOutline();
  applyView();
  els.nodeCount.textContent = state.nodes.length;
  els.edgeCount.textContent = state.edges.length;
}

function requestRender() {
  if (renderFrame) return;
  renderFrame = requestAnimationFrame(render);
}

function syncControls() {
  els.mapName.value = state.mapName;
  els.gridToggle.checked = state.showGrid;
  els.snapToggle.checked = state.snap;
  els.edgeStyle.value = state.edgeStyle;
}

function onNodePointerDown(event, node) {
  event.stopPropagation();
  if (state.mode === "pan" || event.button === 1 || event.altKey) {
    state.drag = { type: "pan", clientX: event.clientX, clientY: event.clientY, x: state.view.x, y: state.view.y };
    els.canvasWrap.classList.add("dragging");
    return;
  }

  if (state.mode === "connect") {
    if (!state.connectSource) {
      state.connectSource = node.id;
      selectItem("node", node.id);
      setStatus("Choose the node to connect to");
      render();
    } else {
      addEdge(state.connectSource, node.id);
    }
    return;
  }

  if (event.shiftKey) {
    toggleNodeSelection(node.id);
    setStatus(`${getSelectedNodeIds().length} node${getSelectedNodeIds().length === 1 ? "" : "s"} selected`);
    return;
  }

  if (!state.selectedNodeIds.includes(node.id)) {
    selectItem("node", node.id);
  } else {
    commitEdit();
  }
  const selectedIds = getSelectedNodeIds();
  const start = screenToWorld(event.clientX, event.clientY);
  state.drag = {
    type: "nodes",
    ids: selectedIds,
    startX: start.x,
    startY: start.y,
    before: cloneData(),
    moved: false,
    originals: selectedIds.map((id) => {
      const item = getNode(id);
      return { id, x: item.x, y: item.y };
    })
  };
  els.canvasWrap.classList.add("dragging");
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onCanvasPointerDown(event) {
  if (event.target !== els.canvasWrap && event.target !== els.gridLayer && event.target !== els.nodeLayer) return;
  if (state.mode === "select" && !event.shiftKey) selectItem(null, null);
  const point = screenToWorld(event.clientX, event.clientY);
  if (state.mode === "pan" || event.button === 1 || event.altKey) {
    state.drag = { type: "pan", clientX: event.clientX, clientY: event.clientY, x: state.view.x, y: state.view.y };
    els.canvasWrap.classList.add("dragging");
    return;
  }
  if (state.mode === "select" && event.shiftKey) {
    state.drag = { type: "box", start: point, current: point };
    els.selectionBox.style.display = "block";
  }
}

function onPointerMove(event) {
  if (!state.drag) return;
  if (state.drag.type === "nodes") {
    const point = screenToWorld(event.clientX, event.clientY);
    const dx = point.x - state.drag.startX;
    const dy = point.y - state.drag.startY;
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) state.drag.moved = true;
    state.drag.originals.forEach((original) => {
      const node = getNode(original.id);
      if (!node) return;
      node.x = snapValue(original.x + dx);
      node.y = snapValue(original.y + dy);
    });
    requestRender();
  }
  if (state.drag.type === "pan") {
    state.view.x = state.drag.x + event.clientX - state.drag.clientX;
    state.view.y = state.drag.y + event.clientY - state.drag.clientY;
    applyView();
  }
  if (state.drag.type === "box") {
    state.drag.current = screenToWorld(event.clientX, event.clientY);
    const a = state.drag.start;
    const b = state.drag.current;
    els.selectionBox.style.left = `${Math.min(a.x, b.x) * state.view.scale + state.view.x}px`;
    els.selectionBox.style.top = `${Math.min(a.y, b.y) * state.view.scale + state.view.y}px`;
    els.selectionBox.style.width = `${Math.abs(a.x - b.x) * state.view.scale}px`;
    els.selectionBox.style.height = `${Math.abs(a.y - b.y) * state.view.scale}px`;
  }
}

function onPointerUp() {
  if (state.drag?.type === "box") {
    const a = state.drag.start;
    const b = state.drag.current;
    const minX = Math.min(a.x, b.x);
    const maxX = Math.max(a.x, b.x);
    const minY = Math.min(a.y, b.y);
    const maxY = Math.max(a.y, b.y);
    const found = state.nodes.filter((node) => (
      node.x < maxX &&
      node.x + node.width > minX &&
      node.y < maxY &&
      node.y + node.height > minY
    ));
    if (found.length) {
      selectNodes(found.map((node) => node.id));
      setStatus(`${found.length} node${found.length === 1 ? "" : "s"} selected`);
    }
    els.selectionBox.style.display = "none";
  }
  if (state.drag?.type === "nodes" && state.drag.moved) {
    saveHistory(state.drag.before, true);
    setStatus(`Moved ${state.drag.ids.length} node${state.drag.ids.length === 1 ? "" : "s"}`);
  }
  state.drag = null;
  els.canvasWrap.classList.remove("dragging");
}

function zoomAt(clientX, clientY, nextScale) {
  const rect = els.canvasWrap.getBoundingClientRect();
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  const worldX = (px - state.view.x) / state.view.scale;
  const worldY = (py - state.view.y) / state.view.scale;
  state.view.scale = Math.min(1.8, Math.max(0.35, nextScale));
  state.view.x = px - worldX * state.view.scale;
  state.view.y = py - worldY * state.view.scale;
  applyView();
}

function focusNode(node) {
  const rect = els.canvasWrap.getBoundingClientRect();
  state.view.x = rect.width / 2 - (node.x + node.width / 2) * state.view.scale;
  state.view.y = rect.height / 2 - (node.y + node.height / 2) * state.view.scale;
  applyView();
}

function fitView() {
  if (!state.nodes.length) return;
  const rect = els.canvasWrap.getBoundingClientRect();
  const xs = state.nodes.flatMap((node) => [node.x, node.x + node.width]);
  const ys = state.nodes.flatMap((node) => [node.y, node.y + node.height]);
  const minX = Math.min(...xs) - 80;
  const minY = Math.min(...ys) - 80;
  const width = Math.max(1, Math.max(...xs) - minX + 80);
  const height = Math.max(1, Math.max(...ys) - minY + 80);
  state.view.scale = Math.min(1.25, Math.max(0.35, Math.min(rect.width / width, rect.height / height)));
  state.view.x = (rect.width - width * state.view.scale) / 2 - minX * state.view.scale;
  state.view.y = (rect.height - height * state.view.scale) / 2 - minY * state.view.scale;
  applyView();
}

function centerOrigin() {
  state.view = { x: 260, y: 120, scale: 1 };
  applyView();
}

function autoLayout() {
  saveHistory();
  const byId = new Map(state.nodes.map((node) => [node.id, node]));
  const indegree = new Map(state.nodes.map((node) => [node.id, 0]));
  state.edges.forEach((edge) => indegree.set(edge.to, (indegree.get(edge.to) || 0) + 1));
  const roots = state.nodes.filter((node) => (indegree.get(node.id) || 0) === 0);
  const ordered = [...roots, ...state.nodes.filter((node) => !roots.includes(node))];
  ordered.forEach((node, index) => {
    node.x = (index % 3) * 260;
    node.y = Math.floor(index / 3) * 170;
  });
  state.edges.forEach((edge) => {
    const from = byId.get(edge.from);
    const to = byId.get(edge.to);
    if (from && to && to.x <= from.x) to.x = from.x + 260;
  });
  fitView();
  setStatus("Arranged workflow");
  render();
}

function updateSelectedNode(patch) {
  if (state.selected?.type !== "node") return;
  const node = getNode(state.selected.id);
  if (!node) return;
  Object.assign(node, patch);
  render();
}

function updateSelectedEdge(patch) {
  if (state.selected?.type !== "edge") return;
  const edge = state.edges.find((item) => item.id === state.selected.id);
  if (!edge) return;
  Object.assign(edge, patch);
  render();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(cloneData(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${state.mapName.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "workflow-map"}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  setStatus("Exported JSON");
}

async function importJsonFromInput(input) {
  const file = input.files[0];
  if (!file) return;
  try {
    saveHistory();
    restoreData(JSON.parse(await file.text()));
    setStatus("Imported workflow");
  } catch {
    setStatus("Import failed");
  }
  input.value = "";
}

function setActiveTab(scope, targetId) {
  $$(`[data-tab-scope="${scope}"]`).forEach((button) => {
    const active = button.dataset.tabTarget === targetId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  $$(`[data-tab-panel="${scope}"]`).forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId);
  });
  renderMiniMap();
}

function bindTabs() {
  $$(".tab-button").forEach((button) => {
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(button.classList.contains("active")));
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tabScope, button.dataset.tabTarget);
    });
  });
  $$(".tab-bar").forEach((bar) => bar.setAttribute("role", "tablist"));
}

function loadDemo() {
  state.nodes = [
    { id: "node_start", type: "start", title: "Intake request", notes: "New workflow enters the system.", x: 0, y: 120, width: NODE_WIDTH, height: NODE_HEIGHT },
    { id: "node_triage", type: "task", title: "Triage details", notes: "Assign owner, priority, and needed inputs.", x: 280, y: 120, width: NODE_WIDTH, height: NODE_HEIGHT },
    { id: "node_decide", type: "decision", title: "Approved?", notes: "Route by approval result.", x: 560, y: 120, width: NODE_WIDTH, height: NODE_HEIGHT },
    { id: "node_build", type: "task", title: "Build workflow", notes: "Create tasks, automations, and documentation.", x: 840, y: 40, width: NODE_WIDTH, height: NODE_HEIGHT },
    { id: "node_return", type: "data", title: "Request changes", notes: "Send feedback and collect missing data.", x: 840, y: 220, width: NODE_WIDTH, height: NODE_HEIGHT },
    { id: "node_done", type: "end", title: "Publish", notes: "Workflow is ready for use.", x: 1120, y: 40, width: NODE_WIDTH, height: NODE_HEIGHT }
  ];
  state.edges = [
    { id: "edge_1", from: "node_start", to: "node_triage", label: "", tone: "default" },
    { id: "edge_2", from: "node_triage", to: "node_decide", label: "", tone: "default" },
    { id: "edge_3", from: "node_decide", to: "node_build", label: "Yes", tone: "success" },
    { id: "edge_4", from: "node_decide", to: "node_return", label: "No", tone: "warning" },
    { id: "edge_5", from: "node_build", to: "node_done", label: "", tone: "success" }
  ];
  fitView();
}

function bindEvents() {
  $$(".node-template").forEach((button) => {
    button.addEventListener("click", () => {
      const rect = els.canvasWrap.getBoundingClientRect();
      const point = screenToWorld(rect.left + rect.width / 2, rect.top + rect.height / 2);
      createNode(button.dataset.type, point.x - 88, point.y - 43);
    });
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("application/workflow-node", button.dataset.type);
      event.dataTransfer.effectAllowed = "copy";
    });
  });

  $$(".tool-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      state.connectSource = null;
      $$(".tool-button").forEach((item) => item.classList.toggle("active", item === button));
      els.canvasWrap.classList.toggle("panning", state.mode === "pan");
      setStatus(`${button.textContent} mode`);
      render();
    });
  });

  els.canvasWrap.addEventListener("pointerdown", onCanvasPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  els.canvasWrap.addEventListener("dblclick", (event) => {
    if (event.target.closest(".node")) return;
    const point = screenToWorld(event.clientX, event.clientY);
    createNode("task", point.x - 88, point.y - 43, "New task");
  });
  els.canvasWrap.addEventListener("dragover", (event) => {
    if (!Array.from(event.dataTransfer.types).includes("application/workflow-node")) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });
  els.canvasWrap.addEventListener("drop", (event) => {
    const type = event.dataTransfer.getData("application/workflow-node");
    if (!nodeNames[type]) return;
    event.preventDefault();
    const point = screenToWorld(event.clientX, event.clientY);
    createNode(type, point.x - NODE_WIDTH / 2, point.y - NODE_HEIGHT / 2);
  });
  els.canvasWrap.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomAt(event.clientX, event.clientY, state.view.scale * (event.deltaY > 0 ? 0.92 : 1.08));
  }, { passive: false });

  els.zoomRange.addEventListener("input", () => {
    const rect = els.canvasWrap.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, Number(els.zoomRange.value) / 100);
  });
  els.gridToggle.addEventListener("change", () => {
    state.showGrid = els.gridToggle.checked;
    render();
  });
  els.snapToggle.addEventListener("change", () => {
    state.snap = els.snapToggle.checked;
  });
  els.edgeStyle.addEventListener("change", () => {
    state.edgeStyle = els.edgeStyle.value;
    render();
  });
  els.mapName.addEventListener("input", () => {
    state.mapName = els.mapName.value;
  });
  els.searchInput.addEventListener("input", renderSearch);

  $("#fitBtn").addEventListener("click", fitView);
  $("#fitPanelBtn").addEventListener("click", fitView);
  $("#centerBtn").addEventListener("click", centerOrigin);
  $("#centerPanelBtn").addEventListener("click", centerOrigin);
  $("#themeBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    render();
  });
  $("#autoLayoutBtn").addEventListener("click", autoLayout);
  $$(".zoom-preset").forEach((button) => {
    button.addEventListener("click", () => {
      const rect = els.canvasWrap.getBoundingClientRect();
      zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, Number(button.dataset.zoom) / 100);
    });
  });
  $("#undoBtn").addEventListener("click", undo);
  $("#redoBtn").addEventListener("click", redo);
  $("#duplicateBtn").addEventListener("click", duplicateSelected);
  $("#duplicateMultiBtn").addEventListener("click", duplicateSelected);
  $("#addLinkedBtn").addEventListener("click", addLinkedNode);
  $("#deleteNodeBtn").addEventListener("click", deleteSelected);
  $("#deleteMultiBtn").addEventListener("click", deleteSelected);
  $("#deleteEdgeBtn").addEventListener("click", deleteSelected);
  $("#clearBtn").addEventListener("click", () => {
    if (!confirm("Clear this workflow map?")) return;
    saveHistory();
    state.nodes = [];
    state.edges = [];
    state.selected = null;
    render();
  });
  $("#exportBtn").addEventListener("click", exportJson);
  $("#exportPanelBtn").addEventListener("click", exportJson);
  $("#importInput").addEventListener("change", (event) => importJsonFromInput(event.target));
  $("#importPanelInput").addEventListener("change", (event) => importJsonFromInput(event.target));
  $("#saveLocalBtn").addEventListener("click", () => {
    localStorage.setItem("workflow-map-creator", JSON.stringify(cloneData()));
    setStatus("Saved locally");
  });
  $("#loadLocalBtn").addEventListener("click", () => {
    const saved = localStorage.getItem("workflow-map-creator");
    if (saved) {
      try {
        saveHistory();
        restoreData(JSON.parse(saved));
        setStatus("Loaded saved map");
      } catch {
        setStatus("Saved map could not be loaded");
      }
    }
  });

  ["input", "change"].forEach((eventName) => {
    els.nodeTitle.addEventListener(eventName, () => updateSelectedNode({ title: els.nodeTitle.value || "Untitled" }));
    els.nodeType.addEventListener(eventName, () => updateSelectedNode({ type: els.nodeType.value }));
    els.nodeNotes.addEventListener(eventName, () => updateSelectedNode({ notes: els.nodeNotes.value }));
    els.nodeX.addEventListener(eventName, () => updateSelectedNode({ x: Number(els.nodeX.value) || 0 }));
    els.nodeY.addEventListener(eventName, () => updateSelectedNode({ y: Number(els.nodeY.value) || 0 }));
    els.edgeLabel.addEventListener(eventName, () => updateSelectedEdge({ label: els.edgeLabel.value }));
    els.edgeTone.addEventListener(eventName, () => updateSelectedEdge({ tone: els.edgeTone.value }));
  });

  [
    els.nodeTitle,
    els.nodeType,
    els.nodeNotes,
    els.nodeX,
    els.nodeY,
    els.edgeLabel,
    els.edgeTone
  ].forEach((field) => {
    field.addEventListener("focus", beginEdit);
    field.addEventListener("blur", commitEdit);
  });

  document.addEventListener("keydown", (event) => {
    const targetTag = event.target.tagName;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(targetTag)) return;
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      event.shiftKey ? redo() : undo();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") {
      event.preventDefault();
      redo();
    }
    if (event.key === "Delete" || event.key === "Backspace") deleteSelected();
    if (event.key.toLowerCase() === "c") $("[data-mode='connect']").click();
    if (event.key.toLowerCase() === "v") $("[data-mode='select']").click();
    if (event.key === " ") {
      event.preventDefault();
      if (state.mode !== "pan") state.priorMode = state.mode;
      state.mode = "pan";
      els.canvasWrap.classList.add("panning");
      $$(".tool-button").forEach((button) => button.classList.toggle("active", button.dataset.mode === "pan"));
    }
    if (event.key === "Escape") {
      state.connectSource = null;
      selectItem(null, null);
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === " " && state.priorMode) {
      state.mode = state.priorMode;
      state.priorMode = null;
      els.canvasWrap.classList.toggle("panning", state.mode === "pan");
      $$(".tool-button").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.mode));
    }
  });
}

bindTabs();
bindEvents();
syncControls();
loadDemo();
render();
updateHistoryButtons();
