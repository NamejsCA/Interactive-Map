// Initialize the map
var map = L.map('map').setView([0, 0], 1); // Set the initial view to center and zoom level

// Create marker groups
var RisingStarMushroom = L.layerGroup();
var TheObjectFromEarth = L.layerGroup();
var GorbaCabbage = L.layerGroup();
var TravelerPlant = L.layerGroup();
var GreatfulFrog = L.layerGroup();

// Add markers to group 1
var markersGreatfulFrog = [
  {
    latlng: [51.5074, -0.1278],
    popupContent: 'Marker 1',
    imageUrl: 'marker1.png' // Optional image URL for the marker
  },
  {
    latlng: [48.8566, 2.3522],
    popupContent: 'Marker 2'
    // imageUrl not specified for this marker
  }
];
markersGreatfulFrog.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  GreatfulFrog.addLayer(marker);
});

// Add markers to group 1
var markersTravelerPlant = [
  {
    latlng: [51.5074, -0.1278],
    popupContent: 'Marker 1',
    imageUrl: 'marker1.png' // Optional image URL for the marker
  },
  {
    latlng: [48.8566, 2.3522],
    popupContent: 'Marker 2'
    // imageUrl not specified for this marker
  }
];
markersTravelerPlant.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  TravelerPlant.addLayer(marker);
});

// Add markers to group 1
var markersGorbaCabbage = [
  {
    latlng: [51.5074, -0.1278],
    popupContent: 'Marker 1',
    imageUrl: 'marker1.png' // Optional image URL for the marker
  },
  {
    latlng: [48.8566, 2.3522],
    popupContent: 'Marker 2'
    // imageUrl not specified for this marker
  }
];
markersGorbaCabbage.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  GorbaCabbage.addLayer(marker);
});

// Add markers to group 1
var markersRisingStarMushroom = [
  {
    latlng: [83.7155, 94.3945],
    popupContent: 'Marker 1',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/2/29/Screen_Shot_2020-01-22_at_5.48.51_pm.png/revision/latest/scale-to-width-down/320?cb=20200122070305' // Optional image URL for the marker
  },
  {
    latlng: [48.8566, 2.3522],
    popupContent: 'Marker 2'
    // imageUrl not specified for this marker
  }
];
markersRisingStarMushroom.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  RisingStarMushroom.addLayer(marker);
});

// Add markers to group 2
var markersTheObjectFromEarth = [
  {
    latlng: [40.7128, -74.0060],
    popupContent: 'Marker 3',
    imageUrl: 'marker3.png' // Optional image URL for the marker
  },
  {
    latlng: [37.7749, -122.4194],
    popupContent: 'Marker 4'
    // imageUrl not specified for this marker
  }
];
markersTheObjectFromEarth.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  TheObjectFromEarth.addLayer(marker);
});

// Create an object to store the marker groups
var markerGroups = {
  'Rising Star Mushroom': RisingStarMushroom,
  'The Object From Earth': TheObjectFromEarth,
  'Gorbacabbage': GorbaCabbage,
  'Greatful Frog': GreatfulFrog,
  'Traveler Plant': TravelerPlant
};

// Add marker groups to the map
L.control.layers(null, markerGroups).addTo(map);

// Add custom map image overlay
var imageUrl = 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/a/a2/Map_Blank.png/revision/latest?cb=20180830202757';
var imageWidth = 230; // Width of your custom map image
var imageHeight = 1117; // Height of your custom map image

// Calculate the bounds based on image width and height
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Create the image overlay
var customMap = L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Adjust the map view to fit the image bounds
map.fitBounds(imageBounds);

// Function to get marker description with latitude and longitude
function getMarkerDescription(latlng) {
  return 'Latitude: ' + latlng[0].toFixed(4) + '<br>Longitude: ' + latlng[1].toFixed(4);
}
