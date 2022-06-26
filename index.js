const animeImage1 = document.querySelector(".animeImage1");
const animeImage2 = document.querySelector(".animeImage2");
const animeImage3 = document.querySelector(".animeImage3");
const animeImage4 = document.querySelector(".animeImage4");

const addEventToObject = (animeImageNumber) => {
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
};

addEventToObject(animeImage1);
addEventToObject(animeImage2);
addEventToObject(animeImage3);
addEventToObject(animeImage4);

// Make page to scroll smooth to Specific Part

const fachrichtungTeil = document.querySelector("#fachrichtungTeil");
const contactTeil = document.querySelector("#kontaktSection");
const etageteil = document.querySelector("#etageplan");
const impressum = document.querySelector("#go-to-impressum");
const fachRichtungButton = document.querySelector(".FACHRICHTUNGEN");
const kontaktButton = document.querySelector("#kontakt-link");
const etageButton = document.querySelector("#etageLink");
const impressumButton = document.querySelector("#impressum");


const gotToSection = () => {
  fachrichtungTeil.scrollIntoView({ behavior: "smooth" });
};

const gotToKontakt = () => {
  contactTeil.scrollIntoView({ behavior: "smooth" });
};

const gotToEtagePlan = () => {
  etageteil.scrollIntoView({ behavior: "smooth" });
};

const gotToImpressum = () => {
  impressum.scrollIntoView({ behavior: "smooth" });
};


fachRichtungButton.addEventListener("click", gotToSection);
kontaktButton.addEventListener("click", gotToKontakt);
etageButton.addEventListener("click", gotToEtagePlan);
impressumButton.addEventListener("click", gotToImpressum);
