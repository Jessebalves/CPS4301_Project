const teamMembers = [
    { img: "KeanRoutes_Images/Jesse.PNG", name: "Jesse Alves", role: "Team Lead", width: "51%" },
    { img: "KeanRoutes_Images/Ryan.PNG", name: "Ryan Guillen", role: "UI Designer", width: "48%" },
    { img: "KeanRoutes_Images/Bryan.PNG", name: "Bryan Ortega", role: "GPS Developer", width: "52%" },
    { img: "KeanRoutes_Images/Alex.PNG", name: "Alexander Ribau", role: "Data Analyst", width: "48%" },
    { img: "KeanRoutes_Images/Tiff.PNG", name: "Tiffany Choi", role: "Dev & Tester", width: "45%" }
];
const container = document.getElementById("teamContainer");
teamMembers.forEach(member => {
    container.innerHTML += `
    <div class = "dev_contain>
    <div class="person_container">
        <img src="${member.img}" style="border-radius:50%; width:${member.width}; border:3px solid white">
        <p>${member.name}</p>
        <small><p><i>${member.role}</i></p></small>
    </div>
    </div>
    `;
    }
);