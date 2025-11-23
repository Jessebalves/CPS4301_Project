function createCategory(name, items) {
    //Create <li> element that holds the categories
    const li = document.createElement("li");
    li.id = "highlight_nav"; //keeps existing styling
    //Create clickable header
    const a = document.createElement("a");
    a.textContent = name; //label to show in navbar
    li.appendChild(a); //add <a> to <li>
    //This <ul> will contain all items inside the category
    const ul = document.createElement("ul");
    //Loop through every place in this category, "items" is an object from data.js
    Object.values(items).forEach(place => {
        //Create an <li> for each item
        const childLi = document.createElement("li");
        childLi.id = "highlight_nav";   //styling
        childLi.classList.add("testing"); //formatting
        const childA = document.createElement("a"); //clickable item
        childA.id = place.id; //ID from data.js
        const paragraph_tag = document.createElement("p"); //Hidden description
        paragraph_tag.style.display="none"; //Hide the text so it doesnt appear in entry
        paragraph_tag.innerHTML = place.description; //Assign descriptions from data.js to p tag
        childA.textContent = place.name; //display name from data.js
        childLi.appendChild(childA); //add <a> inside item <li>
        childLi.appendChild(paragraph_tag); // add <p style = "display:none;"
        ul.appendChild(childLi); //add this item to the category <ul>
    });
    li.appendChild(ul); //add the full item <ul> into the main category <li>
    return li; //Return full category block
}
function generateNavbar() {
    const navBar = document.getElementById("navigation_bar"); //Get empty <ul is="navigatrion_bar">
    navBar.innerHTML = ""; //check for empty slot
    const categories = [ //Group categories using data.js and getting names and descriptions
        ["Buildings", locations.building],
        ["Food", locations.food],
        ["Events", locations.events],
        ["Other", { //merge 4 categories into "other"
            ...locations.gasStation,
            ...locations.parking,
            ...locations.chargingStations,
            ...locations.convenienceStores
        }]
    ];
    categories.forEach(([label, group]) => { //Loop through each category and add blocks to the navbar
        navBar.appendChild(createCategory(label, group));
    });
}
generateNavbar(); //Build navbar on page load