const CirclesOptionSelector = document.querySelector(".color-option"),
CirclesSelector = CirclesOptionSelector.querySelector(".circles");

CirclesSelector.addEventListener("click", (e) =>{
    const MainTarget = e.target;
    if (MainTarget.classList.contains("circle")) {
        CirclesSelector.querySelector(".active").classList.remove("active");
        MainTarget.classList.add("active");
        document.querySelector(".main-images .active").classList.remove("active");
        let NameOfSelector = '.main-images .circle.' + MainTarget.id;
        console.log(NameOfSelector);
        document.querySelector(NameOfSelector).classList.add("active");
        }
    }
);
