const gpsSearchBar = document.getElementById("destination-input");
const navbarEntryDescription = document.getElementById("descriptions");

document.getElementById("admin_building").addEventListener("click",function() {
    gpsSearchBar.value = "Administration Building, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "offers assistance with registration, financial questions + tuition.";
});

document.getElementById("admissions_office").addEventListener("click",function() {
    gpsSearchBar.value = "Office of Admissions, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "1000 Morris Ave Ste 1, Union, NJ 07083";
});

