
// // necessaire pour certains types d'API (on pourrait mettre les infos d'authentification à l'interieur)
// var requestOptions = {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//   };

// /* Allons chercher un fichier JSON */



document.addEventListener("click", function (_data) {
    fetch("pizzas.json")
        .then((wrapper) => /* Une fois que le fichier est chargé */
            wrapper.json()) /* Convertissons le en json */
        .then((dataMenu) => {/* Une fois le fichier converti */
            console.log(dataMenu);
            menuPizzas(dataMenu);/* Appelons notre fonction */

        })
});



const menuPizzas = function (_dataMenu) {
    let boutton = document.getElementsByClassName("button")[0];
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let preview = document.getElementsByClassName("preview")[0];
    preview.innerHTML = "";
};


