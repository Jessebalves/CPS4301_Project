const gpsSearchBar = document.getElementById("destination-input");
const navbarEntryDescription = document.getElementById("descriptions");

//Administration Building
document.getElementById("admin_building").addEventListener("click",function() {
    gpsSearchBar.value = "Administration Building, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Offers assistance with registration, financial questions + tuition.";
});

//Admissions Office
document.getElementById("admissions_office").addEventListener("click",function() {
    gpsSearchBar.value = "Office of Admissions, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "1000 Morris Ave Ste 1, Union, NJ 07083";
});

//Barlett Hall
document.getElementById("barlett_hall").addEventListener("click",function() {
    gpsSearchBar.value = "Bartlett Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Upperclassmen Residence Halls 1000 Morris Avenue"
});

//Bruce Hall
document.getElementById("bruce_hall").addEventListener("click",function() {
    gpsSearchBar.value = "Bruce Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms + scientific labs biology and medical.";
});

//Carole Hynes Field House
document.getElementById("carole_hynes").addEventListener("click",function() {
    gpsSearchBar.value ="";
    navbarEntryDescription.innerHTML = "Restrooms + weight room, concessions food";
});

//Center for Academic Success
document.getElementById("cas").addEventListener("click",function() {
    gpsSearchBar.value = "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms mostly for history,english,writing etc.";
});

//Cougar Hall
document.getElementById("cougar_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Cougar Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Cougar Hall has residence dorms, cafe, great room lounge, game room, business center, warming room (for food).";
});

//D'Angola Gymnasium
document.getElementById("dang_gym").addEventListener("click", function(){
    gpsSearchBar.value = "D'Angola Gymnasium, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Main fitness center that has circuit weight training machines, free weights, cardio equipment, and a pool.";
});
