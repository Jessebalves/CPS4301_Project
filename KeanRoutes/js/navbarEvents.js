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

//Center for Academic Success(CAS)
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

//Downs Hall
document.getElementById("downs_hall").addEventListener("click", function() {
    gpsSearchBar.value = "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Meeting rooms, health services, counseling services, campus ministry, and police headquarters.";
});

//Greenlane Academic Building(GLAB)
document.getElementById("glab").addEventListener("click", function(){
    gpsSearchBar.value = "Green Lane Academic Building [GLAB], Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "GLAB has houses classrooms, faculty offices, and a full-service bookstore/library.";
});

//Harwood Arena
document.getElementById("harwood_arena").addEventListener("click", function(){
    gpsSearchBar.value = "Harwood Arena, Harwood Arena, Morris Ave, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Harwood arena has administrative offices for sports teams and three basketball courts.";
});

//Dorothy Grant Hennings Hall (default Hennings Hall, no distinction between George and Dorothy)
document.getElementById("dghh").addEventListener("click", function(){
    gpsSearchBar.value = "Hennings Hall, Kean University, Hennings Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms connected to the Hutchinson Hall and George Hennings Hall";
});

//Technology Building (No location provided in list)
document.getElementById("tech_building").addEventListener("click",function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Contains classrooms, faculty offices, and a Child Care and Development Center.";
});

//Wilkins Threatre-Performing Arts
document.getElementById("wilkins_theatre").addEventListener("click", function(){
    gpsSearchBar.value = "Wilkins Theatre, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "A 956-seat theatre that hosts various performances and events.";
});

//Nancy Thompson Library
document.getElementById("nancy_thompson_library").addEventListener("click", function(){
    gpsSearchBar.value = "Nancy Thompson Library, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Contains a library and a Starbucks.";
});

//Hutchinson Hall
document.getElementById("hutchinson_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Hutchinson Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Department of Political, Social and Cultural Sciences,  School of Public Architecture, Robert Busch School of Design Television Studio, Instructional Resource Center.";
});

//Hynes Hall
document.getElementById("hynes_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Hynes Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Meeting rooms, classrooms, presentations + areas for fairs.";
});

//Miron Student Center
document.getElementById("miron_student_center").addEventListener("click", function(){
    gpsSearchBar.value = "Miron Student Center, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Food court, game room, convenience store.";
});

//Whiteman Hall
document.getElementById("whiteman_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Whiteman Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Freshmen dormitories, residential mailroom.";
});

//Freshman Residence Hall
document.getElementById("freshman_residence_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Freshman Residence Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Freshmen dormitories.";
});

//Upperclassman Residence Hall
document.getElementById("upperclassman_residence_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Upperclass Residence Hall, Kean University, Morris Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Upperclassmen dormitories + Kean Kitchen - all you can eat buffet.";
});

//Dougall Hall
document.getElementById("dougall_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Dougall Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Freshmen dormitories, Cougar Cardio Room.";
});

//Burch Hall
document.getElementById("burch_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Burch Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Dormitories.";
});

//Rogers Hall
document.getElementById("rogers_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Rogers Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Dormitories.";
});

//George Hennings Hall
document.getElementById("george_hennings_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Hennings Hall, Kean University, Hennings Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms, faculty offices, computer labs.";
});

//North Avenue Academic Building
document.getElementById("north_ave_building").addEventListener("click", function(){
    gpsSearchBar.value = "North Avenue Academic Building [NAAB], Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms, faculty offices, computer labs.";
});

//STEM Building
document.getElementById("stem_building").addEventListener("click", function(){
    gpsSearchBar.value = "Kean University STEM Building, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Stem courses available.";
});

//Townsend Hall
document.getElementById("townsend_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Townsend Hall, Kean University 1000, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Classrooms and lockers.";
});

//Liberty Hall
document.getElementById("liberty_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Liberty Hall Academic Center, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Miscellaneous courses ie history etc.";
});

//Sozio Hall
document.getElementById("sozio_hall").addEventListener("click", function(){
    gpsSearchBar.value = "Sozio Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Dormitories.";
});

//Nathan Weiss
document.getElementById("nathan_weiss").addEventListener("click", function(){
    gpsSearchBar.value = "Nathan Weiss Graduate College, North Avenue, Kean University, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "East campus graduate college building that is connected to Enlow Recital Hall.";
});

//Kean East Soccer Field
document.getElementById("kean_e_soccer_field").addEventListener("click", function(){
    gpsSearchBar.value = "Kean East Soccer Field, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "Soccer field in East Campus.";
});





//Chipotle
document.getElementById("chipotle").addEventListener("click", function(){
    gpsSearchBar.value = "Chipotle Mexican Grill, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Chipotle has mexican food in a build your own meal style. Burritos, Quesadillas, Bowls.";
});

//Coldstone
document.getElementById("coldstone").addEventListener("click", function(){
    gpsSearchBar.value = "Cold Stone Creamery, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Has ice cream, milkshakes, smoothies, frappes, cakes, and cookies.";
});

//Kean Kitchen
document.getElementById("kean_kitchen").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "This is Kean's dining hall, offering a variety of fresh salads, fruits, grilled entrees, pasta, and diverse full meals.";
});

//Tropicana Diner
document.getElementById("tropicana_diner").addEventListener("click", function(){
    gpsSearchBar.value = "Tropicana Diner and Bakery, Morris Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Tropicana Diner: Lunch, Brunch, Breakfast, Dinner.";
});

//Mark Twain Diner & Restaurant
document.getElementById("mark_twain").addEventListener("click", function(){
    gpsSearchBar.value = "Mark Twain Diner & Restaurant, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Mark Twain Diner & Restaurant,Breakfast,Lunch,Dinner.";
});

//Valença Restaurant
document.getElementById("valenca").addEventListener("click", function(){
    gpsSearchBar.value = "Valenca Restaurant, Monroe Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Valencas restaurant offers Portuguese food and Spanish food.";
});

//Smash Burger
document.getElementById("smash_burger").addEventListener("click", function(){
    gpsSearchBar.value = "Smashburger, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "1000 Morris Ave, Union, NJ 07083.";
});

//Tacobell
document.getElementById("taco_bell").addEventListener("click", function(){
    gpsSearchBar.value = "Taco Bell, U.S. 22, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "Taco Bell Quesadillas, tacos, burritos, and much more.";
});

//China Star
document.getElementById("china_star").addEventListener("click", function(){
    gpsSearchBar.value = "China Star, North Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Offers General Tso's chicken, dumplings, spring rolls, crab rangoons etc.";
});

//Dairy Queen
document.getElementById("dairy_queen").addEventListener("click", function(){
    gpsSearchBar.value = "Dairy Queen Grill & Chill, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Offers icecream and various fastfood staples.";
});

//Dunkin
document.getElementById("dunkin").addEventListener("click", function(){
    gpsSearchBar.value = "Dunkin', Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Offers Coffee, Breakfast, sandwiches.";
});

//Soul Food Factory
document.getElementById("soul_factory").addEventListener("click", function(){
    gpsSearchBar.value = "Soul Food Factory, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Offers Southern stlye food.";
});






//MBB vs Albright College
document.getElementById("basketball1").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Mens Basketball December 16th,2025. 6:00PM. Union NJ.";
});

//Speech Club Meeting
document.getElementById("speech_meeting").addEventListener("click", function(){
    gpsSearchBar.value = "Kean University East Campus, North Avenue, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "Speech Club Meeting December 16th,2025. 3:30PM. East Campus 146.";
});

//General Body Meeting
document.getElementById("body_meeting").addEventListener("click", function(){
    gpsSearchBar.value = "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "General Body Meeting December 16th,2025. 3:30PM. CAS 247.";
});

//Resident Assistance
document.getElementById("residence_assistance").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Resident Assistance Information Session December 16th,2025. 5:00PM. Held online virtually.";
});

//Get Yourself Tested
document.getElementById("get_tested").addEventListener("click", function(){
    gpsSearchBar.value = "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Get Yourself Tested December 17th,2025. 11:00AM. Wellness Center-Downs Hall.";
});

//FUNK General Body
document.getElementById("funk").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "FUNK General Body Meeting December 18th,2025. 7:30PM. MSC 228.";
});

//Jewish Legacy Broadway
document.getElementById("legacy_broadway").addEventListener("click", function(){
    gpsSearchBar.value = "Enlow Recital Hall, North Avenue, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "L'Chaim A Toast to the Jewish Legacy of Broadway December 20th,2025. 7:30PM. Enclow Recital Hall.";
});

//Breakfast With Santa
document.getElementById("breakfast_with_santa").addEventListener("click", function(){
    gpsSearchBar.value = "Liberty Hall Museum, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Breakfast with Santa December 21st,2025. 8:30AM & 11:30AM. Liberty Hall Museum. Volunteers needed.";
});

//MBB vs Ithaca College
document.getElementById("basketball2").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "MBB vs Ithaca College Mens Basketball Tournament. January 2,2025. 6:00PM Hoboken NJ.";
});

//MBB vs Stevens College
document.getElementById("basketball3").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "MBB vs Stevens College Mens Basketball Tournament. January 4,2025. 4:00PM Hoboken NJ.";
});

//WBB vs William Patterson
document.getElementById("basketball4").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "WBB vs William Patterson Womens Basketball January 7th,2025. 5:30PM. Union NJ.";
});

//MBB vs William Patterson
document.getElementById("basketball5").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "MBB vs William Patterson Mens Basketball January 7th,2025. 7:30PM. Union NJ.";
});






//711
document.getElementById("711").addEventListener("click", function(){
    gpsSearchBar.value = "7-Eleven, Galloping Hill Road, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Pit stop for snacks and drinks.";
});

//Bruce Hall Parking Lot
document.getElementById("bruce_hall_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Bruce Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking closest to the Bruce Hall entrance and side entrance of George Hennings Hall. Yellow line parking spaces near the sidewalk are Staff parking only.";
});

//Charging Station (Hutchinson Hall)
document.getElementById("charging_station1").addEventListener("click", function(){
    gpsSearchBar.value = "Hutchinson Hall, Kean University, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "There are six charging station in front of the Hutchinson Hall on the Main Campus";
});

//Charging Station (East Campus)
document.getElementById("charging_station2").addEventListener("click", function(){
    gpsSearchBar.value = "Kean University East Campus, North Avenue, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "There are six charging station in the East Campus parking lot on the East Campus";
});

//Cougar Hall Parking Lot
document.getElementById("cougar_hall_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Cougar Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Staff parking lot only behind the Cougar Hall dorm.";
});

//CVS (Union)
document.getElementById("cvs1").addEventListener("click", function(){
    gpsSearchBar.value = "CVS, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Closest pharmacy and retail store to get daily essentials and medicines for campus life.";
});

//CVS (Elizabeth)
document.getElementById("cvs2").addEventListener("click", function(){
    gpsSearchBar.value = "CVS, Westfield Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "A pharmacy and retail store offering daily essentials, prescriptions, and photo services.";
});

//D'Angola Gymnasium Parking Lot
document.getElementById("dang_gym_parking_lot").addEventListener("click", function(){
    gpsSearchBar.value = "D’Angola Gym, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Staff parking lot next to the D'Angola Gymnasium. There is also a small Staff parking lot across D'Angola Gymnasium.";
});

//Delta (Union)
document.getElementById("delta").addEventListener("click", function(){
    gpsSearchBar.value = "Delta, Magie Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station.";
});

//East Campus Parking Lot
document.getElementById("e_campus_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Parking lot near the Nathan Weiss Graduate College Building on the East Campus.";
});

//East Campus Overflow Parking Lot
document.getElementById("e_campus_overflow_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Extra packing space on the East Campus.";
});

//East Campus Upper Parking Lot
document.getElementById("e_campus_upper_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Enlow Recital Hall, North Avenue, Hillside, NJ, USA";
    navbarEntryDescription.innerHTML = "Staff parking lot near the Enlow Recital Hall.";
});

//Enrite
document.getElementById("enrite").addEventListener("click", function(){
    gpsSearchBar.value = "Enrite, West Grand Street, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station.";
});

//Exxon
document.getElementById("exxon").addEventListener("click", function(){
    gpsSearchBar.value = "Exxon, Westfield Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station + convenience store.";
});

//EZ Quick
document.getElementById("ez_quick").addEventListener("click", function(){
    gpsSearchBar.value = "EZ QUICK, Morris Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station.";
});

//Fuel 4 Gas & Diesel
document.getElementById("fuel").addEventListener("click", function(){
    gpsSearchBar.value = "Fuel 4 Gas & Diesel, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station.";
});

//Green Lane(GLAB) Parking Lot
document.getElementById("glab_parking").addEventListener("click", function(){
    gpsSearchBar.value = "GLAB Parking, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking lot next to the Green Lane Academic Building (GLAB) is for attending classes or shopping at the bookstore.";
});

//Harwood Area Parking Lot
document.getElementById("harwood_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Harwood Arena, Harwood Arena, Morris Ave, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking lot next to the Harwood Area.";
});

//Hennings Hall Parking Lot
document.getElementById("hennings_hall_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Hennings Hall, Kean University, Hennings Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking front of the George Hennings Hall and Dorothy Grant Hennings Hall. Yellow line parking spaces are Staff parking only.";
});

//Hynes Hall Parking Lot
document.getElementById("hynes_hall_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Parking around the Hynes Hall.";
});

//Hynes Hall Overflow Parking Lot
document.getElementById("hynes_hall_overflow_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Extra packing space nearby the Hynes Hall.";
});

//Jabes Mini Market & Deli
document.getElementById("jabes").addEventListener("click", function(){
    gpsSearchBar.value = "Jabes Mini Market & Deli, Magie Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Jabes Mini Market & Deli A neighborhood convenience store and deli.";
});

//Kean Hall Parking Lot
document.getElementById("kean_hall_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Kean Hall Lot, Green Lane, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking lot near the Green Lane entrance and across from the Green Lane Academic Building(GLAB).";
});

//Kean Parking Deck
document.getElementById("kean_parking_deck").addEventListener("click", function(){
    gpsSearchBar.value = "Kean Parking Garage, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "The parking deck is to the right of Hynes Hall.";
});

//Liberty Hall(LMAC) Parking Lot
document.getElementById("lmac_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Parking next to the Liberty Hall Academic Center.";
});

//Quick Shop
document.getElementById("quick_shop").addEventListener("click", function(){
    gpsSearchBar.value = "Quick Shop, North Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Small business convenience store.";
});

//Shell
document.getElementById("shell").addEventListener("click", function(){
    gpsSearchBar.value = "Shell, Newark Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Gas station + Convenience store.";
});

//Shoprite
document.getElementById("shoprite").addEventListener("click", function(){
    gpsSearchBar.value = "ShopRite of Elizabeth, West Grand Street, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "Supermarket offering snacks, bakery goods, and daily supplies.";
});

//Stem Parking
document.getElementById("stem_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Kean University STEM Building, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking in front of the STEM building.";
});

//Vaughn-Eames Parking Lot
document.getElementById("vaughn_eames_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Vaughn-Eames Hall, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Parking near the Vaughn-Eames Hall and North Avenue Academic Building. Overnight parking, 24-hour parking, is beyond the orange curb/barrier.";
});

//Visitor Parking
document.getElementById("visitor_parking").addEventListener("click", function(){
    gpsSearchBar.value = "";
    navbarEntryDescription.innerHTML = "Parking lot is for visitors without a parking permit or those visiting campus.";
});

//Walgreens
document.getElementById("walgreens").addEventListener("click", function(){
    gpsSearchBar.value = "Walgreens, Newark Avenue, Elizabeth, NJ, USA";
    navbarEntryDescription.innerHTML = "A pharmacy and retail store offering prescriptions, immunizations, photo services, and daily essentials.";
});

//Wilkins Theatre Parking Lot
document.getElementById("wilkins_parking").addEventListener("click", function(){
    gpsSearchBar.value = "Wilkins Theatre, Morris Avenue, Union, NJ, USA";
    navbarEntryDescription.innerHTML = "Staff parking lot between the Hutchinson Hall and Wilkins Theatre.";
});