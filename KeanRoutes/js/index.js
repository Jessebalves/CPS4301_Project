//Function that runs everytime a character is entered into
//Navigation Bar Search Bar
document.getElementById("navigationBarSearchBar").addEventListener("keyup", function() {
  const navKeywordEnteredRaw = this.value.toLowerCase();
  const navKeywordEnteredClean = navKeywordEnteredRaw.trim();
  const navigation_bar = document.getElementById("navigation_bar");
  const li = navigation_bar.getElementsByTagName("li");
  const Building_scroll = document.getElementById("Academic_Building_scrollin");
  const Food_scroll = document.getElementById("Food_scrollin");
  const Events_scroll = document.getElementById("Events_scrollin");
  const Other_scroll = document.getElementById("Other_scrollin");
  console.log(navKeywordEnteredRaw);
  console.log(navKeywordEnteredClean);
  console.log(li);
 
  for (let i = 0; i < li.length; i++) {
      //variable associated with title & description of entry
      const navbarText = li[i].textContent;
      const navbarEntry = li[i].closest("li"); 
      console.log(navbarText);
      console.log(navbarEntry);

      //If an entry includes word entered by user
      //We show the entry
      if (navbarText.toLowerCase().includes(navKeywordEnteredClean)) {
      navbarEntry.style.display = "";
      //navigation_bar.style.overflow="visible";
      //Food_scroll.style.overflow = "visible";
      //Events_scroll.style.overflow = "visible";
      //Other_scroll.style.overflow = "visible";
      } 
      
      //If the entry does not contain the word entered by user
      //Hide the entry
      else {
      navbarEntry.style.display = "none";
      }
  }

  //If the navigation bar searchbar is empty
  //turn main tabs in navbar back to scroll
  if(navKeywordEnteredClean==""){
    for(let i = 0; i < li.length;i++){
      Building_scroll.style.overflow="scroll";
      Building_scroll.style.overflow="hidden";
      Food_scroll.style.overflow = "scroll";
      Food_scroll.style.overflow="hidden";
      Events_scroll.style.overflow = "scroll";
      Other_scroll.style.overflow = "hidden";
    }
  }

});