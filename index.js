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

// Make page to scroll smooth to Soecific Part

// Part Fachrichtung
const fachrichtungTeil = document.querySelector("#fachrichtungTeil");

function gotToSection() {
  fachrichtungTeil.scrollIntoView({ behavior: "smooth" });
}
const fachRichtungButton = document.querySelector(".FACHRICHTUNGEN");

fachRichtungButton.addEventListener("click", gotToSection);

// Part Kontakt


const contactTeil=document.querySelector('#kontaktSection')

function gotToKontakt() {
  contactTeil.scrollIntoView({ behavior: "smooth" });
}
const kontaktButton=document.querySelector("body > div.container > div.menuPart > div.menuBrownPart > a.href.KONTAKT");

kontaktButton.addEventListener("click",gotToKontakt)

// Part EtagePlan
const etageteil = document.querySelector('#etageplan')

function gotToEtagePlan() {
  etageteil.scrollIntoView({ behavior: "smooth" });
}
const etageButton = document.querySelector("#etageLink");

etageButton.addEventListener("click",gotToEtagePlan)

// Part Impressum
const impressum = document.querySelector('#go-to-impressum')

function gotToImpressum() {
  etageteil.scrollIntoView({ behavior: "smooth" });
}
const impressumButton = document.querySelector("#impressum");

impressumButton.addEventListener("click",gotToEtagePlan)
