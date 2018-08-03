
function initMap() {
    var caracas = {lat: 10.4806, lng: -66.9036};
    var newYork = {lat: 40.7128, lng: -74.0059};
    var paris = {lat: 48.856, lng: 2.352};
    var losAngeles ={lat: 34.05, lng: -118.2437};
    var locations = [caracas, newYork, paris, losAngeles]
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 2, center: caracas});
    
    
    locations.forEach(function(city){
        var marker = new google.maps.Marker({position:city, map: map});
        
        var infoWindow = new google.maps.InfoWindow({
            content:'Latitude: ' + locations.lat() +
            '<br>Longitude: ' + locations.lng()
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    })

}
