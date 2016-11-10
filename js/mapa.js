var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 17,
    center: {lat: -2.1444129, lng: -79.9661926}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    position: {lat: -2.144002, lng: -79.966963} 
  });
}

window.onload = initMap;