// ! don't forget to wait for DOM content to be loaded!
//when the window is loaded , gor to rest Country and download..
//Elemento:
const countriesElement = document.querySelector("#js-countries");
//Evento:
window.addEventListener("DOMContentLoaded", getCountries);

async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    displayCountries(countries);
  } catch (error) {
    console.error(error);
  }
}

function displayCountries(countries) {
  countries.forEach((country) => {
    const {
      name: { common },
      flags: { svg },
    } = country;
    /*
    const name = country.name.common;
    const svg = country.flags.svg;
    */
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    h2.innerText = common;
    section.appendChild(h2);
    section.appendChild(picture);
    picture.appendChild(img);
    img.src = svg;
    countriesElement.appendChild(section);
  });
}
