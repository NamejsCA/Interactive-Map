const panel = document.getElementById("panel");
const toggleButton = document.getElementById("panel-toggle");

toggleButton.addEventListener("click", () => {
    panel.classList.toggle("collapsed");
});
// ─────────────────────────────────────────
// Tilemap config
// ─────────────────────────────────────────
const WORLD_MIN_X = -4000;
const WORLD_MAX_X = 3000;
const WORLD_MIN_Z = -4000;
const WORLD_MAX_Z = 1000;

const MAX_COLS = 54;
const MAX_ROWS = 76;
const NUM_LEVELS = 5;
const TILE_SIZE = 256;

const zoomGrids = [
    {cols:3, rows:4},
    {cols:6, rows:9},
    {cols:13, rows:19},
    {cols:27, rows:38},
    {cols:54, rows:76}
];

const maxZoom = NUM_LEVELS - 1;

const highest = zoomGrids[zoomGrids.length - 1];

const mapW = highest.cols * TILE_SIZE;
const mapH = highest.rows * TILE_SIZE;

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: maxZoom,
    zoomSnap: 1,
    zoomDelta: 1,
    attributionControl: false,
});

// Custom scroll zoom anchored to cursor
map.getContainer().addEventListener('wheel', (e) => {
    e.preventDefault();

    const delta = e.deltaY < 0 ? 1 : -1;
    const currentZoom = map.getZoom();
    const newZoom = Math.min(Math.max(currentZoom + delta, map.getMinZoom()), map.getMaxZoom());

    if (newZoom === currentZoom) return;

    // Get cursor position relative to map container
    const containerPoint = map.mouseEventToContainerPoint(e);
    const latlng = map.containerPointToLatLng(containerPoint);

    map.setZoomAround(latlng, newZoom);
}, { passive: false });

// Add this so the map canvas background shows through empty tile slots
map.getContainer().style.background = '#cae0fc'; // match your page background

map.getContainer().addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    const currentZoom = map.getZoom();
    const newZoom = Math.min(Math.max(currentZoom + delta, map.getMinZoom()), map.getMaxZoom());
    if (newZoom === currentZoom) return;
    const latlng = map.containerPointToLatLng(map.mouseEventToContainerPoint(e));
    map.setZoomAround(latlng, newZoom);
}, { passive: false });

// Custom tile layer
L.TileLayer.Custom = L.TileLayer.extend({
    getTileUrl(coords) {
        const grid = zoomGrids[coords.z];
        if (!grid) return '';
        if (coords.x < 0 || coords.x >= grid.cols) return '';
        if (coords.y < 0 || coords.y >= grid.rows) return '';
        return `${coords.z}/${coords.x}/${coords.y}.png`;
    },
    createTile(coords, done) {
        const tile = document.createElement('img');
        const grid = zoomGrids[coords.z];
        if (!grid || coords.x >= grid.cols || coords.y >= grid.rows || coords.x < 0 || coords.y < 0) {
            tile.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            setTimeout(() => done(null, tile), 0);
            return tile;
        }
        tile.src = this.getTileUrl(coords);
        tile.onload = () => done(null, tile);
        tile.onerror = () => {
            tile.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            done(null, tile);
        };
        return tile;
    }
});

new L.TileLayer.Custom('', {
    tileSize: TILE_SIZE,
    minZoom: 0,
    maxZoom: maxZoom,
    noWrap: true,
    keepBuffer: 4
}).addTo(map);

// Start centered
map.setView(
    map.unproject([mapW * 0.25, mapH * 0.25], maxZoom),
    0
);

// ─────────────────────────────────────────
// Game coord conversion
// ─────────────────────────────────────────
const worldW = WORLD_MAX_X - WORLD_MIN_X;
const worldH = WORLD_MAX_Z - WORLD_MIN_Z;

function gameToLatLng(x, z) {
    const px = (x - WORLD_MIN_X) / worldW * mapW;
    const py = (z - WORLD_MIN_Z) / worldH * mapH;
    return map.unproject([px, py], maxZoom);
}

// Coords display
map.on('mousemove', e => {
    const px = map.project(e.latlng, maxZoom);
    const gameX = WORLD_MIN_X + (px.x / mapW) * worldW;
    const gameZ = WORLD_MIN_Z + (px.y / mapH) * worldH;
    document.getElementById('coords').textContent =
        `Game X: ${gameX.toFixed(1)}  Z: ${gameZ.toFixed(1)}`;
});

// ─────────────────────────────────────────
// Spawner markers
// ─────────────────────────────────────────
const fallbackIcon = L.divIcon({
    className: '',
    html: '<div style="width:10px;height:10px;background:#4f8ef7;border-radius:50%;border:1px solid rgba(0,0,0,0.5)"></div>',
    iconSize: [10, 10],
    iconAnchor: [5, 5]
});

const layerList = document.getElementById('layer-list');
const layerSearch = document.getElementById('layer-search');
const layerRows = [];
const categoryTitles = [];
const categoryLayers = {};

for (const mainCategory in data) {
    categoryLayers[mainCategory] = [];

    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = mainCategory;
    layerList.appendChild(title);
    categoryTitles.push({ name: mainCategory.toLowerCase(), element: title });

    for (const subCategory in data[mainCategory]) {
        const subGroup = L.layerGroup();

        data[mainCategory][subCategory].forEach(([x, z]) => {
            const marker = L.marker(gameToLatLng(x, z), { icon: fallbackIcon });

            const imagePath = `Images/${mainCategory}/${subCategory}.webp`;
            const img = new Image();
            img.onload = () => {
                marker.setIcon(L.icon({
                    iconUrl: imagePath,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                    popupAnchor: [0, -12]
                }));
            };
            img.src = imagePath;

            marker.bindPopup(`${subCategory}<br>X: ${x.toFixed(2)}, Z: ${z.toFixed(2)}`);
            subGroup.addLayer(marker);
        });

        const row = document.createElement('div');
        row.className = 'layer-item';

        const dot = document.createElement('img');
        dot.className = 'layer-icon';
        dot.src = `Images/${mainCategory}/${subCategory}.webp`;
        dot.alt = subCategory;

        const label = document.createElement('span');
        label.className = 'layer-label';
        label.textContent = subCategory;

        const count = document.createElement('span');
        count.className = 'layer-count';
        count.textContent = data[mainCategory][subCategory].length;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'layer-check';

        function toggle(cb, group) {
            cb.checked = !cb.checked;
            cb.checked ? map.addLayer(group) : map.removeLayer(group);
        }

        row.onclick = (e) => { if (e.target !== checkbox) toggle(checkbox, subGroup); };
        checkbox.onclick = (e) => e.stopPropagation();
        checkbox.onchange = () => checkbox.checked ? map.addLayer(subGroup) : map.removeLayer(subGroup);

// Automatically enable first 50 marker groups
if (categoryLayers._enabledCount === undefined) {
    categoryLayers._enabledCount = 0;
}

if (categoryLayers._enabledCount < 0) {
    checkbox.checked = true;
    map.addLayer(subGroup);
    categoryLayers._enabledCount++;
}

categoryLayers[mainCategory].push({ group: subGroup, checkbox });

        row.appendChild(dot);
        row.appendChild(label);
        row.appendChild(count);
        row.appendChild(checkbox);
        layerList.appendChild(row);

        layerRows.push({ name: subCategory.toLowerCase(), category: mainCategory.toLowerCase(), element: row });
    }
}

layerSearch.addEventListener('input', () => {
    const search = layerSearch.value.toLowerCase();
    layerRows.forEach(item => {
        const match = item.name.includes(search) || item.category.includes(search);
        item.element.style.display = match ? 'flex' : 'none';
    });
    categoryTitles.forEach(item => {
        const hasVisible = layerRows.some(row => row.category === item.name && row.element.style.display !== 'none');
        item.element.style.display = hasVisible ? 'block' : 'none';
    });
});