let map, directionsService, directionsRenderer, autocomplete;
let userLocation = null;
function initMap() {
    //Generating map, route, and displaying route.
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    //Location of the map on the site
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 40.6799, lng: -74.2454 },
    });
    directionsRenderer.setMap(map);
    const input = document.getElementById("destination-input");
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);
    document.getElementById("route-btn").addEventListener("click", getRoute);
    //Trying to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0,
        });
    } else {
        document.getElementById("output").textContent = "Geolocation not supported.";
    }
    //Markers
    Object.values(locations).forEach(category => {
        Object.values(category).forEach(loc => {
            // Place markers with data that has lng and lat
            if (loc.lat && loc.lng) {
                const marker = new google.maps.Marker({ //Google's markers
                    position: { lat: loc.lat, lng: loc.lng },
                    map,
                    title: loc.name
                });
                const infoWindow = new google.maps.InfoWindow({
                    content: `<strong>${loc.name}</strong>`
                });
                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });
            }
        });
    });
}
//Setting marker on your current location
function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    userLocation = { lat, lng };
    map.setCenter(userLocation);
    new google.maps.Marker({
        position: userLocation,
        map,
        title: "Your location",
    });
    document.getElementById("output").innerHTML = `
        <b>Latitude:</b> ${lat.toFixed(5)}<br>
        <b>Longitude:</b> ${lng.toFixed(5)}
        `;
}
function error() {
    document.getElementById("output").textContent = "Unable to retrieve your location.";
    alert("Please allow access to geolocation");
}
function getRoute() {
    if (!userLocation) {
        alert("User location not available yet.");
        return;
    }
    //Places library setting route
    const place = autocomplete.getPlace();
    if (!place || !place.geometry) {
        alert("Please select a valid destination from the list.");
        return;
    }
    const destination = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
    };
    calculateAndDisplayRoute(userLocation, destination);
}
function calculateAndDisplayRoute(origin, destination) {
    directionsService.route(
    {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING, //Set by default, we can change it later, or make the user select what they want.
    },
    (response, status) => {
        if (status === "OK") {
        directionsRenderer.setDirections(response);
        const route = response.routes[0].legs[0];
        document.getElementById("time").textContent = "Time: " + route.duration.text;
        document.getElementById("distance").textContent = "Distance: " + route.distance.text;
        } else {
        alert("Directions request failed due to " + status);
        }
    }
    );
}