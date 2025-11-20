document.getElementById("navSearch").addEventListener("keyup", function() {
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
      const navbarText = li[i].textContent;
      const navbarEntry = li[i].closest("li"); 

      if (navbarText.toLowerCase().includes(navKeywordEnteredClean)) {
      navbarEntry.style.display = "";
      Building_scroll.style.overflow="visible";
      Food_scroll.style.overflow = "visible";
      Events_scroll.style.overflow = "visible";
      Other_scroll.style.overflow = "visible";
      } 
      
      else {
      navbarEntry.style.display = "none";
      }
  }

  if(filter==""){
    for(let i = 0; i < li.length;i++){
      Building_scroll.style.overflow="scroll";
      Building_scroll.style.overflowX= "hidden";
      Food_scroll.style.overflow = "scroll";
      Food_scroll.style.overflowX = "hidden";
      Events_scroll.style.overflow = "scroll";
      Events_scroll.style.overflowX = "hidden";
      Other_scroll.style.overflow = "scroll";
      Other_scroll.style.overflowX = "hidden";
    }
  }
});