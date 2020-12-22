const nounours = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_3.jpg"},{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_5.jpg"}]
const content = document.querySelector(".noms");

function afficher () {
    let total = 0
    let descript = 0
    
    for (let elem of nounours){
        console.log(elem.price )
        console.log(elem.name + " "+ "à -50% est à "+ " " + elem.price/200 + "€")
        total = total + elem.price
        console.log(elem.name + " " + "est disponible en" + " " + elem.colors.length + " "+ "couleurs") 
        if (elem.price/100 > 30){
            console.log(elem.name +" "+ "coüte plus de 30€"+ " "+"(il coüte "+ " "+ elem.price/100 + "€)")
        }
        else {
            console.log(elem.name +" "+ "est abordable (il coüte que "+" "+ elem.price/100 +"€)")
        }
        descript = descript + elem.description
        if (elem.colors.length >= 3){
            console.log(elem.colors[2])
        }
        else if (elem.colors.length === 2){
            console.log(elem.colors[1])
        }
        else {
            console.log(elem.colors[0])
        }
    }
    console.log(total)
    console.log(descript)
}

afficher ()


function addTenToAge(age) {
    return age + 10
}


let ageJulie = 12
let agePaul = 24
console.log(addTenToAge(ageJulie)) 
console.log(addTenToAge(agePaul)) 

addTenToAge()

function afficherNounoursNameParagraphe(nounours) {
    
    for (let elem of nounours){
    return content.innerHTML = elem.name
    
    }
    
}é

afficherNounoursNameParagraphe(nounours)