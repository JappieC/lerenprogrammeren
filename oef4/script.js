//for loop  facultijten
/*
let getal = parseInt(prompt("geef een getal in"));
let som = 0;
let tekst = getal + '! = '

for (let i = getal; i >= 1; i-- ) {
    som = som + i;
    if (i > 1) {
        tekst = tekst + i + " + "
    } else {
        console.log(`${tekst}1 = ${som}`)
    }
}
//console.log(`${getal}! = ${som}`)
//console.log(`${tekst} = ${som}`)
*/



//armstrong getal
///*
//let getal = parseInt(prompt("geef een getal in"));
let collection = "0, 1"
for (let i = 0; i < 1000; i++) {
    let getal = Array.from(String(i))
    console.log(i)
    console.log(getal)
    //console.log(getal.length)
    if (i >= 10 && i < 100){
        //console.log(getal[0])
        let calculation = Math.pow(getal[0], getal.length) + Math.pow(getal[1], getal.length)
        console.log(calculation);
        if (i === calculation) {
            collection = collection + ", " + i;
        }
        console.log(collection)
    }
    if (i >= 100 && i < 1000){
        //console.log(getal[0])
        let calculation = Math.pow(getal[0], getal.length) + Math.pow(getal[1], getal.length) + Math.pow(getal[2], getal.length)
        console.log(calculation);
        if (i === calculation) {
            collection = collection + ", " + i;
        }
        console.log(collection)
    }

}
//*/
