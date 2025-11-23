const gpsSearchBar = document.getElementById("destination-input");
const navbarEntryDescription = document.getElementById("descriptions");
// Attach click behavior for one place
function attachLocationHandler(place) {
    if (!place || !place.id) return;
    const el = document.getElementById(place.id);
    if (!el) return; // if there's no matching HTML element, skip
    el.addEventListener("click", () => {
        gpsSearchBar.value = place.address || "";
        navbarEntryDescription.innerHTML = place.description || "No description available.";
    });
}
//Loop through all categories
Object.values(locations).forEach(category => {
    //category is an object like
    Object.values(category).forEach(place => {
        attachLocationHandler(place);
    });
});