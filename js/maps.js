var mapCenter = {
  lat: 52.510820,
  lng: 13.459674
};

var mapInitializer = function() {
  'use strict';
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: { lat: mapCenter.lat, lng: mapCenter.lng},
    zoom: 15
  });
};

google.maps.event.addDomListener(window, 'load', mapInitializer);
