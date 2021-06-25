const age = 27;
const firstName = "sarah";
const isFemale = false;
const driverStatus = "bob";
const totalAmount = 100;
// // deel 1

if (age >= 18) {

    console.log("you are 18 or older and granted access!! :)")
}
else {

    console.log("you are too youngh and shall not pass!! :(")
}

// // deel 2


if (isFemale) {

    console.log("you may enter for free");

}

else {

    console.log("you have to pay 10 euro's")
}

// deel 3 


if (driverStatus === "bob") {

    console.log("you can drive home")

}
else {
    console.log("you connot drive and have to stay for another drink :)")
}
// nieuwe opdracht
// deel 1 

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")
} else {
    console.log("jammer je krijg geen korting")
}
// deel 2 

if (firstName === "bram" || firstName === "sarah") {
    console.log("omdat je bram of sarah heet krijg je een gratis biertje!!!!")

} else {
    console.log("jammer maar je doet niet mee aan de naam-actie.")
}
// deel 3

if (totalAmount >= 100) {
    console.log("je hebt 100 euro of meer uitgegeven en krijgt daarom gratis fles champagne!!")

} else if (totalAmount >= 50) {
    console.log("je hebt 50 euro of meer uitgegeven en krijgt daarom gratis nacho's!!")

} else if (totalAmount >= 25) {
    console.log("je hebt 25 euro of meer uitgegeven en krijgt daarom gratis (vega) biterballen!!")

} else {
    console.log("als je iets meer uitgeeft dan krijg je gratis eten of drinken")
}