// Initialize the map
var map = L.map('map').setView([0, 0], 1); // Set the initial view to center and zoom level

// Create an object to store the markers
var markers = {};

// Function to add a marker
function addMarker(latlng) {
  var marker = L.marker(latlng).addTo(map).bindPopup('New Marker');
  var markerId = marker._leaflet_id;
  markers[markerId] = marker;
  saveMarkers(); // Save the markers to local storage
}

// Function to remove a marker
function removeMarker(markerId) {
  var marker = markers[markerId];
  if (marker) {
    map.removeLayer(marker);
    delete markers[markerId];
    saveMarkers(); // Save the markers to local storage
  }
}

// Function to handle left-click events on the map
function handleLeftClick(event) {
  var latlng = event.latlng;

  // Add a marker at the clicked location
  addMarker(latlng);
}

// Function to handle right-click events on markers
function handleRightClick(markerId) {
  removeMarker(markerId);
}

// Add event listener for left-click events on the map
map.on('click', handleLeftClick);

// Function to save the markers to local storage
function saveMarkers() {
  var markersData = {};
  for (var markerId in markers) {
    var marker = markers[markerId];
    markersData[markerId] = marker.getLatLng();
  }
  localStorage.setItem('markers', JSON.stringify(markersData));
}

// Function to load the markers from local storage
function loadMarkers() {
  var markersData = localStorage.getItem('markers');
  if (markersData) {
    markersData = JSON.parse(markersData);
    for (var markerId in markersData) {
      var latlng = markersData[markerId];
      addMarker(latlng);
    }
  }
}

// Load the markers from local storage
loadMarkers();

// Add custom map image overlay
var imageUrl = 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/a/a2/Map_Blank.png/revision/latest?cb=20180830202757';
var imageWidth = 200; // Width of your custom map image
var imageHeight = 1117; // Height of your custom map image

// Calculate the bounds based on image width and height
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Create the image overlay
var customMap = L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Adjust the map view to fit the image bounds
map.fitBounds(imageBounds);

// Event listener for marker right-click events
function handleMarkerRightClick(event) {
  var marker = event.target;
  var markerId = marker._leaflet_id;
  handleRightClick(markerId);
}

// Add event listener to each marker for right-click events
for (var markerId in markers) {
  var marker = markers[markerId];
  marker.on('contextmenu', handleMarkerRightClick);
}

// Function to add a marker
function addMarker(latlng) {
  var lat = latlng.lat;
  var lng = latlng.lng;

  var marker = L.marker(latlng).addTo(map).bindPopup('Latitude: ' + lat + '<br>Longitude: ' + lng + '<br>New Marker');
  var markerId = marker._leaflet_id;
  markers[markerId] = marker;
  saveMarkers(); // Save the markers to local storage
}
