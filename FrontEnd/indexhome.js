

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
           
const filters=["Tous","Objets","Appartements","Hôtels & Restaurants"];
  
//Récupération de l'élément grâce à Queryselector//
console.log (document.querySelector ("#filters"));

// @param{PointerEvent} event//

function onButtonClick(event){
  console.log(event.currentTarget)
}

document.querySelectorAll(('button').forEach(button=>){
button.addEventListener('click,' onButtonClick )
}




  





