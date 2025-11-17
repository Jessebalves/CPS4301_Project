document.getElementById("navSearch").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase().trim();
  const nav = document.getElementById("navigation_bar");
  const li = nav.getElementsByTagName("li");
  const Building_scroll = document.getElementById("Academic_Building_scrollin");
  const Food_scroll = document.getElementById("Food_scrollin");
  const Events_scroll = document.getElementById("Events_scrollin");
  const Other_scroll = document.getElementById("Other_scrollin");
  console.log(filter);
  console.log(nav);
  console.log(li);



  for (let i = 0; i < li.length; i++) {
      const text = li[i].textContent || links[i].innerText;
      const parentLi = li[i].closest("li"); 

      if (text.toLowerCase().includes(filter)) {
      parentLi.style.display = "";
      Building_scroll.style.overflow="visible";
      Food_scroll.style.overflow = "visible";
      Events_scroll.style.overflow = "visible";
      Other_scroll.style.overflow = "visible";
      } 
      
      else {
      parentLi.style.display = "none";
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