const bodySeletor = document.querySelector("body"),
sideBar = bodySeletor.querySelector(".sideBar"),
toggle = bodySeletor.querySelector(".toggle"),
searchBar = bodySeletor.querySelector(".search-box"),
modeSwitch = bodySeletor.querySelector(".toggle-switch"),
modeText = bodySeletor.querySelector(".mode-text");

toggle.addEventListener("click", () =>{
    sideBar.classList.toggle("close");
});

searchBar.addEventListener("click", () =>{
    sideBar.classList.remove("close");
});

modeSwitch.addEventListener("click", () =>{
    bodySeletor.classList.toggle("dark");
    if (bodySeletor.classList.contains("dark")) {
        modeText.textContent = "Light Mode";
    }
    else
    {
        modeText.textContent = "Dark Mode";
    }
});