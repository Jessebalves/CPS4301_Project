const gpsSearchBar = document.getElementById("destination-input");
const navbarEntryDescription = document.getElementById("descriptions");
// Attach click for one place
function attachLocationHandler(place) {
    if (!place || !place.id) return;
    const el = document.getElementById(place.id);
    if (!el) return; // if there's no matching HTML element, skip
    el.addEventListener("click", () => {
        gpsSearchBar.value = place.address || "";// Fill search bar
        navbarEntryDescription.innerHTML = place.description || "No description available.";// Description
        //Location ready
        if (!userLocation) {
            alert("Waiting for your location…");
            return;
        }
        // Clean the address
        const cleanAddress = (place.address || "").trim();
        if (!cleanAddress) {
            alert("This destination has no address.");
            return;
        }
        // Geocode to turn address to coordenates
        geocoder.geocode({ address: cleanAddress }, (results, status) => {
            if (status === "OK" && results[0]) {
                const loc = results[0].geometry.location;
                const destination = {
                    lat: loc.lat(),
                    lng: loc.lng()
                };
                const mode = document.querySelector("input[name='mode']:checked").value;
                // Route directly
                calculateAndDisplayRoute(userLocation, destination, mode);
            } else {
                console.error("Geocode failed:", status, cleanAddress);
                alert("Google couldn't find this address: " + cleanAddress);
            }
        });
    });
}
//Loop through all categories
Object.values(locations).forEach(category => {
    //category is an object like
    Object.values(category).forEach(place => {
        attachLocationHandler(place);
    });
});