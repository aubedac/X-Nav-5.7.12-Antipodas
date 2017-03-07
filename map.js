if(Modernizr.geolocation) {
  alert('Geolocation not supported!');
} else {
  var mapAnti = document.getElementById('map2');
  var mapDiv = document.getElementById("map");
  function initMap(){
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 40.283743650362996, lng: -3.8191530513763428},
      zoom: 15
    });
    var map2 = new google.maps.Map(mapAnti, {
      center: {lat: -40.283743650362996, lng: 180 + -3.8191530513763428},
      zoom: 7
    });
  }
}
