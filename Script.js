// Initialize the map
var map = L.map('map').setView([0, 0], 1); // Set the initial view to center and zoom level

// Create marker groups
var RisingStarMushroom = L.layerGroup();
var TheObjectFromEarth = L.layerGroup();
var GorbaCabbage = L.layerGroup();
var TravelerPlant = L.layerGroup();
var GreatfulFrog = L.layerGroup();

// Add markers to the RisingStarMushroom group
var markersRisingStarMushroom = [
  {
    latlng: [83.7968, 94.3945],
    popupContent: 'Friged Waste Edge',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/2/29/Screen_Shot_2020-01-22_at_5.48.51_pm.png/revision/latest/scale-to-width-down/320?cb=20200122070305', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
  {
    latlng: [28.7677, 55.0195],
    popupContent: 'Starry Point Rocks',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
  {
    latlng: [37.7186, 64.1382],
    popupContent: 'Deep Forest Rock',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/0/08/Rising_Star_Mushroom_Deep_Forest.png/revision/latest?cb=20180923041355', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [42.4559, 56.4148],
    popupContent: 'Deep Forest Pillar',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/3/32/Rising_star_mushroom_deepforest_spirit.webp/revision/latest?cb=20221226165736&format=original', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [62.4717, 84.5068],
    popupContent: 'Topple Tower',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/a/af/Rising_Star_%40_Topple_Town.png/revision/latest/scale-to-width-down/320?cb=20180722054345', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [64.8209, 86.9019],
    popupContent: 'Topple Outside Plane',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/0/09/Rising_star_mushroom_outside_topple.png/revision/latest/scale-to-width-down/320?cb=20221226162347', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [61.4178, 90.0439],
    popupContent: 'Topple Castle',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/0/02/RisingStar.png/revision/latest/scale-to-width-down/320?cb=20180220060640', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [62.1039, 106.1719],
    popupContent: 'Ancient Bridge',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/5/53/RisingStarMushroomAncientBridge.png/revision/latest/scale-to-width-down/320?cb=20170729011408', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [81.8082, 92.9224],
    popupContent: 'Fridged Waste Arch',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/b/b3/F30194546aec6a8206b18a27632090c4.png/revision/latest/scale-to-width-down/320?cb=20180104162317', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [46.2862, 149.7437],
    popupContent: 'Celestial Flat',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/1/14/RisingStarMushroomCelestialPeak.png/revision/latest/scale-to-width-down/320?cb=20170729011420', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [48.5174, 151.1196],
    popupContent: 'Celestial Spike Can be on top aswell',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/a/ab/RSMCelestialPeak.png/revision/latest/scale-to-width-down/320?cb=20230629180214', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [58.6312, 98.3936],
    popupContent: 'Cliff between the lake and topple',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e6/RobloxScreenShot20181116_163236633.png/revision/latest/scale-to-width-down/320?cb=20181116154126', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [44.7779, 159.3018],
    popupContent: 'Celestial Field',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [55.8506, 163.3008],
    popupContent: 'Dragon Field Mound',
    imageUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/5/54/RobloxScreenShot20180423_211959521.png/revision/latest/scale-to-width-down/320?cb=20180423134002', // Optional image URL for the marker
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [47.3388, 171.3867],
    popupContent: 'R&W House',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [43.8979, 139.3066],
    popupContent: 'Pits Hill',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [37.4051, 138.8232],
    popupContent: 'Rolling Road',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [61.9183, 66.1816],
    popupContent: 'Collectus',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [75.4531, 94.1309],
    popupContent: 'Blackrock Mountain',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [76.0055, 73.7402],
    popupContent: 'Ring Sellers House',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
 {
    latlng: [62.2884, 146.7773],
    popupContent: 'Maze Woods',
    markerIcon: L.icon({
      iconUrl: 'https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/e3/Rising_Star_Mushroom.png/revision/latest?cb=20170728231314', // URL of the custom marker icon for RisingStarMushroom markers
      iconSize: [32, 32], // Size of the custom marker icon
      popupAnchor: [0, -16] // Popup anchor offset
    })
  },
];
markersRisingStarMushroom.forEach(function (markerData) {
  var marker = L.marker(markerData.latlng, { icon: markerData.markerIcon }).bindPopup(getMarkerDescription(markerData.latlng));
  if (markerData.imageUrl) {
    marker.on('popupopen', function () {
      var image = document.createElement('img');
      image.src = markerData.imageUrl;
      marker.getPopup().setContent(markerData.popupContent + '<br>' + image.outerHTML);
    });
  }
  RisingStarMushroom.addLayer(marker);
});

// Add markers to the other groups (TheObjectFromEarth, GorbaCabbage, TravelerPlant, GreatfulFrog) - Replace with your own marker data

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
