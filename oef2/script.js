// let, var, const
//blockscoped, universeel, vast

//DATATYPES
let getal=5;
let tekst="Tom";
let keuze=1; //1=true 0=false //BOOLEAN
Object
Array



let strNum="123";
let strNum1="123";

let resultaat= strNum+strNum1;
console.log(resultaat);
console.log(typeof(resultaat));

strNum= parseInt(strNum);
strNum1= parseInt(strNum1);

resultaat= strNum+strNum1;
console.log(resultaat);
console.log(typeof(resultaat));



let persoon={
    name:"Jane",
    age:30,
    isStudent:false
};
console.log(typeof(persoon));
console.log(persoon.name);



/*
let familieNaam="Vanhoutte";
let geboorteJaar=1974;
let huidigJaar=2024;

let leeftijd=huidigJaar - geboorteJaar;
console.log(leeftijd);

console.log("de leeftijd van " + familieNaam + "is " + leeftijd);
console.log("de leeftijd van", familieNaam, "is", leeftijd);
console.log(`de leeftijd van ${familieNaam} is ${leeftijd}`);
 */



/*
let getal1 =parseInt(prompt("voer je eerste getal in"));
let getal2 =parseInt(prompt("voer je tweede getal in"));

console.log(`${getal1} + ${getal2} = ${getal1+getal2}`);
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`);
console.log(`${getal1} * ${getal2} = ${getal1*getal2}`);
console.log(`${getal1} / ${getal2} = ${getal1/getal2}`);
console.log(`${getal1} % ${getal2} = ${getal1%getal2}`); //rest
console.log(`${getal1} ** ${getal2} = ${getal1**getal2}`); //macht
console.log(`${getal1} ++ = ${getal1++}`);
console.log(getal1)
getal1 ++;
console.log("getal1 ++")
console.log(getal1);
*/



let getal3 =5
//getal3 = getal3 + 1
getal3+=1;

console.log(getal3);