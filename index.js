const animeImage1 = document.querySelector(".animeImage1");
const animeImage2 = document.querySelector(".animeImage2");
const animeImage3 = document.querySelector(".animeImage3");
const animeImage4 = document.querySelector(".animeImage4");

function addEventToObject(animeImageNumber) {
  animeImageNumber.addEventListener("click", () => {
    if (!animeImageNumber.classList.contains("anime")) {
      animeImageNumber.classList.remove("animeReset");
      animeImageNumber.classList.add("anime");
    } else {
      if (animeImageNumber.classList.contains("anime")) {
        animeImageNumber.classList.remove("anime");
        animeImageNumber.classList.add("animeReset");
      }
    }
  });
}

addEventToObject(animeImage1);
addEventToObject(animeImage2);
addEventToObject(animeImage3);
addEventToObject(animeImage4);



