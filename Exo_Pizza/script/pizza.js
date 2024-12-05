

let btnPizza = document.getElementsByClassName("button")[0];
let sloganPizza = document.getElementsByClassName("wrapper")[0];
let previewPizza = document.getElementsByClassName("preview")[0];

btnPizza.addEventListener("click", function () {
    fetch("pizzas.json")
        .then((sloganPizza) => /* Une fois que le fichier est chargé */
            sloganPizza.json()) /* Convertissons le en json */
        .then((dataMenu) => {/* Une fois le fichier converti */
            console.log(dataMenu);
            menuPizzas(dataMenu);/* Appelons notre fonction */

        });
});



function menuPizzas(dataMenu) {
    /*Avant de commencer à ajouter de nouvelles pizzas, on vide le contenu 
    de l'élément 'menuPizza' pour éviter d'accumuler les anciennes informations 
    à chaque clic.*/
    previewPizza.innerHTML = "";
    /* On crée des éléments HTML (comme des titres <h1> et <h2>) 
    pour afficher le nom du restaurant (dataMenu.Name) et son slogan
     (dataMenu.Slogan).
     */
    let name = document.createElement("h1");
    name.class = "entete";
    name.innerHTML = dataMenu.Name;
    previewPizza.appendChild(name)
    //pour le second titre
    let slogan = document.createElement("h2");
    slogan.class = "entete";
    slogan.innerHTML = dataMenu.Slogan;
    previewPizza.appendChild(slogan);
    //On crée une section qui va contenir toutes les informations sur les pizzas.
    let section = document.createElement("section");
    section.id = "section";

    /*d. Boucle pour chaque pizza
La première boucle for sert à parcourir toutes les pizzas présentes dans 
le fichier JSON (dans slo_pizza2.Pizzas), et pour chaque pizza, on va créer un élément <article> qui contient :
Le nom de la pizza (avec un <h1>)
Le prix de la pizza (avec un <h2>)
Une image de la pizza (avec un <img>)
 */
    for (let a = 0; a < dataMenu.Pizzas.length; a++) {
        //Je crée un article avec une variable article qui contiendra chaque pizza
        let article = document.createElement('article');
        article.setAttribute("class", "pizzaInfo");
        //Je crée un titre h1 pour mettre le nom de la pizza 
        let pizzaName = document.createElement("h1");
        pizzaName.innerHTML = dataMenu.Pizzas[a].Nom;
        article.appendChild(pizzaName);
        //Je crée un titre h2 pour mettre le prix de la pizza 
        let pizzaPrice = document.createElement("h2");
        article.innerHTML = dataMenu.Pizzas[a].Prix;
        article.appendChild(pizzaPrice);
        //Je crée une variable img_Pizza qui ira chercher l'url de nos images dans le fichier json
        let img_Pizza = document.createElement("img");
        img_Pizza.src = dataMenu.Pizzas[a].Image;
        img_Pizza.class = "img";
        //Je fais apparaitre mes images
      
      
        article.appendChild(img_Pizza);
        //Je crée ma variable ul qui sera la liste des ingrédients des pizzas
        let list = document.createElement('ul');

        //Ensuite j'ai ma deuxième boucle toujours à l'intérieur de ma première qui va me permetre d'afficher un li par ingrédient
        for (let b = 0; b < dataMenu.Pizzas[a].Ingredients.length; b++) {

            let listIngredients = document.createElement('li');
            listIngredients.innerHTML = dataMenu.Pizzas[a].Ingredients[b];
            list.appendChild(listIngredients);

        }
        /*. Ajouter la pizza à la section
        Une fois l'article complet pour une pizza (nom, prix, image, ingrédients), on l'ajoute à la section 'section'.
        */
        article.appendChild(list)
        section.appendChild(article);
       

    }
    // Je fais apparaître le menu qui s'affichera quand l'utilisateur cliquera sur le bouton"CliqueZ_Menu"
    previewPizza.appendChild(section);
    console.log(section);
}

