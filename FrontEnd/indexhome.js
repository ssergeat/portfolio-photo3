

const galery = document.getElementById("gallery");
const url = 'http://localhost:5678/api/works';

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let work = data;
    return work.map(function (work) {
      console.log(work);


      let images = document.createElement("img");
      images.src = work.imageUrl;
      images.alt = work.title;
      images.crossorigin = "anonymous";

      let fig = document.createElement("figurecaption");
      fig.innerHTML = work.title;

      let figure = document.createElement("figure");
      figure.appendChild(images);
      figure.appendChild(fig);
      galery.appendChild(figure);
  }
  );
}
  );
// Fonction pour afficher tous les projets
function tout() {
  fetch("http://localhost:5678/api/works").then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        console.log(data); // Affichage des données dans la console
        document.querySelector(".gallery").innerHTML = ""; // Effacement de l'élément HTML avec la classe .gallery
        // Boucle pour afficher tous les projets
        for (let i = 0; i <= data.length - 1; i++) {
          info(data[i]); // Appel de la fonction info pour afficher les informations sur chaque projet
        }
      });
    }
  });
  


      //récupération des catégories:3//

       url = 'http://localhost:5678/api/categories';

      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          let work = data;
          return work.map(function (work) {
            console.log(work);

          }
          );
        }
        );

        
         
           {

          // ajout des noms  de filtres//

          
            function addElement(title,div) {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Tous");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div-tous");
              document.body.insertBefore(newDiv, currentDiv);
            }
          
           function addElement(Objets,div1) {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Objets");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div1");
              document.body.insertBefore(newDiv, currentDiv);
            }
        
        
            function addElement(Appartements,div2) {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Appartements");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div2");
              document.body.insertBefore(newDiv, currentDiv);
            }
          
          
            function addElement(Hôtels,div3) {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Hôtels & Restaurants");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div3");
              document.body.insertBefore(newDiv, currentDiv);
            }
  //création des catégories//    
           
const catégorieid=["Tous","Objets","Appartements","Hôtels & Restaurants"];
  
//Récupération de l'élément grâce à Queryselector//
console.log (document.querySelector ("#filters"));

// @param{PointerEvent} event//

function onButtonClick(event){
  console.log(event.currentTarget)
}

document.querySelectorAll(('button').forEach(button=>){
button.addEventListener('click,' onButtonClick )}
);

let TousSet=new Set();
TousSet add({catégorieid1,catégorieid2,catétegorieid3});

let ObjetsSet=new Set();
ObjetsSet add(catégorieid1);

let AppartementsSet=new Set();
AppartementsSet add (catégorieid2);

let Hôtels & RestaurantsSet= new Set();
Hôtels & RestaurantsSet add (catégorieid3);
           }
          }
// Fonction pour afficher tous les projets
function tout() {
  fetch("http://localhost:5678/api/works").then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        console.log(data); // Affichage des données dans la console
        document.querySelector(".gallery").innerHTML = ""; // Effacement de l'élément HTML avec la classe .gallery
        // Boucle pour afficher tous les projets
        for (let i = 0; i <= data.length - 1; i++) {
          info(data[i]); // Appel de la fonction info pour afficher les informations sur chaque projet
        }
      });
    }
  });
  var feature={all works}
  
  var extract = feature.works.filter(function(el){
    return el.catégorieid=catégorieid1;
});
console.log(extract);

var extract = feature.works.filter(function(el){
  return el.catégorieid=catégorieid2;
});

console.log(extract);
var extract = feature.works.filter(function(el){
  return el.catégorieid=catégorieid3;
});

console.log(extract);  url = 'http://localhost:5678/api/categories';

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let work = data;
    return work.map(function (work) {
      console.log(work);
      for (let i = 0; i <= data.length - 1; i++) {
        info(data[i]);}
        