document.getElementById("navSearch").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase().trim();
  const nav = document.getElementById("navigation_bar");
  const li = nav.getElementsByTagName("li");
  const cmon = document.getElementById("cmon");
  console.log(cmon);


  for (let i = 0; i < li.length; i++) {
      const text = li[i].textContent || links[i].innerText;
      const parentLi = li[i].closest("li"); 

      if (text.toLowerCase().includes(filter)) {
      parentLi.style.display = "";
      cmon.style.overflow="visible";
      } 
      
      else {
      parentLi.style.display = "none";
      }
  }
  if(filter==""){
    for(let i = 0; i < li.length;i++){
      cmon.style.overflow="scroll";
    }
  }
});
