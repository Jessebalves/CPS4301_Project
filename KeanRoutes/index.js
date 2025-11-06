document.getElementById("navSearch").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase().trim();
  const nav = document.getElementById("navigation_bar");
  const li = nav.getElementsByTagName("li");
  const Events_scroll = document.getElementById("Events_scrollin");
  console.log(filter);
  console.log(nav);
  console.log(li);
  console.log(Events_scroll);


  for (let i = 0; i < li.length; i++) {
      const text = li[i].textContent || links[i].innerText;
      const parentLi = li[i].closest("li"); 

      if (text.toLowerCase().includes(filter)) {
      parentLi.style.display = "";
      Events_scroll.style.overflow="visible";
      } 
      
      else {
      parentLi.style.display = "none";
      }
  }
  if(filter==""){
    for(let i = 0; i < li.length;i++){
      Events_scroll.style.overflow="scroll";
      Events_scroll.style.overflowX= "hidden";
    }
  }
});