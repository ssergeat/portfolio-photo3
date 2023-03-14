

const galery = document.getElementById("gallery");
const url = 'http://localhost:5678/api/works';

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let work = data;
    return work.map(function (work) {
      console.log(work);


      let images = document.createElement("img")
      images.src = work.imageUrl;
      images.alt = work.title;
      images.crossorigin = "anonymous";

      let fig = document.createElement("figurecaption");
      fig.innerHTML = work.title;

      let figure = document.createElement("figure");
      figure.appendChild(images);
      figure.appendChild(fig);
      galery.appendChild(figure);

      //récupération tous les projets//
      [
        {
          Identité: 1,
          titre: " Abajour Tahina ",
          imageUrl: " http://localhost:5678/images/abajour-tahina1651286843956.png ",
          catégorieId: 1,
          ID: 1,
          Catégorie: {
            Identité: 1,
            nom: " Objets "
          }
        },
        {
          Identité: 2,
          intitulé: " Appartement Paris V ",
          imageUrl: " http://localhost:5678/images/appartement-paris-v1651287270508.png ",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements "
          }
        },
        {
          Identité: 3,
          titre: " Restaurant Sushisen - Londres ",
          imageUrl: " http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png ",
          catégorieId: 3,
          ID: 1,
          Catégorie: {
            Identité: 3,
            nom: " Hôtels & restaurants "
          }
        },
        {
          Identité: 4,
          titre: " Villa « La Balisière » - Port Louis ",
          imageUrl: " http://localhost:5678/images/la-balisiere1651287350102.png ",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements "
          }
        },
        {
          Identité: 5,
          titre: " Structures Thermopolis ",
          imageUrl: " http://localhost:5678/images/structures-thermopolis1651287380258.png ",
          catégorieId: 1,
          ID: 1,
          Catégorie: {
            Identité: 1,
            nom: " Objets "
          }
        },
        {
          Identité: 6,
          intitulé: " Appartement Paris X ",
          imageUrl: " http://localhost:5678/images/appartement-paris-x1651287435459.png",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements "
          }
        },
        {
          Identité: 7,
          titre: " Pavillon « Le coteau »  - Cassis ",
          imageUrl: " http://localhost:5678/images/le-coteau-cassis1651287469876.png ",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements "
          }
        },
        {
          Identité: 8,
          titre: " Villa Ferneze - Île d’Elbe ",
          imageUrl: " http://localhost:5678/images/villa-ferneze1651287511604.png ",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements "
          }
        },
        {
          Identité: 9,
          intitulé: " Appartement Paris XVIII ",
          imageUrl: " http://localhost:5678/images/appartement-paris-xviii1651287541053.png ",
          catégorieId: 2,
          ID: 1,
          Catégorie: {
            Identité: 2,
            nom: " Appartements"
          }
        },
        {
          Identité: 10,
          titre: " Bar « Berceuse » - Paris ",
          imageUrl: " http://localhost:5678/images/bar-lullaby-paris1651287567130.png ",
          catégorieId: 3,
          ID: 1,
          Catégorie: {
            Identité: 3,
            nom: " Hôtels & restaurants"
          }
        },
        {
          Identité: 11,
          titre: " Hotel First Arte - New Delhi",
          imageUrl: " http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png ",
          catégorieId: 3,
          ID: 1,
          Catégorie: {
            Identité: 3,
            nom: " Hôtels & restaurants"
          }
        }
      ]
      //récupération des catégories:3//
      const url = 'http://localhost:5678/api/categories'

      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          let work = data;
          return work.map(function (work) {
            console.log(work);

          }
          [
            {
              id: 1,
              name: "Objets"
            },
            {
              id: 2,
              name: "Appartements"
            },
            {
              id: 3,
              name: "Hotels & restaurants"
            }
          ]

          // ajout des noms  de filtres//

          [
            function addElement() {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Tous");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div-tous");
              document.body.insertBefore(newDiv, currentDiv);
            }
          
           function addElement() {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Objets");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div1");
              document.body.insertBefore(newDiv, currentDiv);
            }
        
        
            function addElement() {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("Appartements");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div2");
              document.body.insertBefore(newDiv, currentDiv);
            }
          
          
            function addElement() {
              const newDiv = document.createElement("div");
              const newContent = document.createTextNode("HôtelS & Restaurants");
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("div3");
              document.body.insertBefore(newDiv, currentDiv);
            }
            