function afficherDivAvecNomEtPrixNounours(nounours) {
  const names =  document.getElementById("cards")

  for (let elem of nounours) {
    let division = document.createElement("div")
    division.classList.add("col-12","col-lg-4", "col-md-6", "product")
    names.appendChild(division)

    let pic = document.createElement("img")
    pic.setAttribute("src", elem.imageUrl)
    pic.classList.add("border","border-dark","border-bottom-0")
    division.appendChild(pic) 

    let para = document.createElement("p")
    para.classList.add("py-3","border","border-dark","border-top-0")
    para.innerHTML = `Nom : ${elem.name} </br> Prix : ${elem.price/100}€ </br>`
    division.appendChild(para)

    let button = document.createElement("button")
    button.classList.add("btn")
    button.innerHTML = "Voir plus"
    para.appendChild(button)
    console.log(division)
  }
}
                 
async function fillProducts() {
  await fetch('http://localhost:3000/api/teddies') 
    .then((response) => response.json()) 
    .then((nounours) => afficherDivAvecNomEtPrixNounours(nounours))
}
      
fillProducts()

const queryString = url ? url.split('?')[1] : window.location.search.slice(1);
console.log(queryString);