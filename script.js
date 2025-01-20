// Opprett kartet
const map = L.map('map', {
    crs: L.CRS.Simple, // Bruk en enkel koordinatreferanse
    minZoom: -2,
    maxZoom: 2
});

// Størrelsen på kartbildet
const bounds = [[0, 0], [1000, 1000]]; // Juster etter bildeforhold

// Legg til kartbildet
const image = L.imageOverlay('gta_map_image.jpg', bounds).addTo(map);

// Tilpass kartet til å vise hele bildet
map.fitBounds(bounds);

// Marker lokasjoner med sjekkbokser
const locations = [
    { name: "Los Santos", coords: [500, 500] },
    { name: "Paleto Bay", coords: [200, 800] },
    { name: "Sandy Shores", coords: [700, 300] },
];

locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`<label><input type="checkbox" /> ${location.name}</label>`);
});
