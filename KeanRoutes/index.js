//document.getElementById("testo").textContent = "This is the main section of the body";
/*
if (!navigator.geolocation) {
    throw new Error("No geolocation available");
    }

        function success(pos) {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const markup = `
                <a href="https://www.openstreetmap.org/#map=16/${lat}/${lng}">
                Current position: latitude: ${lat}, longitude: ${lng}.
                </a>
            `;
            document.getElementById('output').innerHTML = markup;
        }

        function error() {
            document.getElementById('output').textContent = "Unable to retrieve your location.";
            alert("Please allow access to geolocation");
        }

        const options = {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0,
        };

        navigator.geolocation.watchPosition(success, error, options);


*/


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






document.getElementById("buildingSearch").addEventListener("keyup", function() {
  //const buildingList = document.getElementById("buildings_list");
  //const filter = this.value.toLowerCase().trim();
  //const buildingList = document.getElementById("buildings_list");
  //const topLevelItems = buildingList.querySelectorAll(":scope > li"); 

  topLevelItems.forEach(li => {
    //const textContent = li.textContent.toLowerCase(); 
    if (textContent.includes(filter)) {
      li.style.display = ""; 
    } else {
      li.style.display = "none"; 
    }
  });
});

