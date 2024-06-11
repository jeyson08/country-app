// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
// 3 - Passer les données à une variable
const container = document.querySelector(".countries-container");
let countries = [];
const fetchCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries);
};
fetchCountry();

const displayCountry = async () => {
  await fetchCountry();
  container.innerHTML = countries.map((country) => {
    `
    <img src="${country.flag}" alt="${country.name.common}">
    <h2>${country.name.common}</h2>
    <h3>${country.capital[0]}</h3>
    <p>Population : ${country.population}</p>
    `;
  });
};

displayCountry();
// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
