let getal = parseInt(prompt("geef een getal in"))
let j = true
//let priemgettallen = []
for (let i= getal - 1 ; i > 1; i--) {
    if (getal % i == 0) {
        console.log(`${getal} is geen priemgetal`)
        j = false
        break
    }
}
if (j == true) {
    console.log(`${getal} is een priemgetal`)
    //priemgettallen += getal
}
