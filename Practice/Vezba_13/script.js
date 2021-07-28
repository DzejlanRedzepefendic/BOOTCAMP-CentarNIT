var ocena = 72;
// if(ocena >= 55 && ocena <= 65)
    // console.log("Ocena je 6");
// else if(ocena >= 65 && ocena <= 75)
    // console.log("Ocena je 7");
// else if(ocena >= 75 && ocena <= 85)
    // console.log("Ocena je 8");
// else if(ocena >= 85 && ocena <= 95)
    // console.log("Ocena je 9");
// else if(ocena > 95 && ocena < 101)
    // console.log("Ocena je 10");
// else
    // console.log("Niste polozili ili ocena koju ste uneli je veca od 100 ");

if(ocena < 55)
    console.log("5");
else if(ocena<=65)
    console.log("6");
else if(ocena<=75)
    console.log("7");
else if(ocena<=85)
    console.log("8");
else if(ocena<=95)
    console.log("9");
else if(ocena<=100)
    console.log("10");
else
    console.log("Nije vazeci broj poena");


var day = "Mon"

switch(day){
    case "Mon":
        console.log("Ponedeljak");
        break;
    case "Tue":
        console.log("Utorak");
        break;
    case "Wen":
        console.log("Sreda");
        break;
    case "Thr":
        console.log("Cetvrtak");
        break;
    case "Fri":
        console.log("Petak");
        break;
    case "Sat":
        console.log("Subota");
        break;
    case "Sun":
        console.log("Nedelja");
        break;
}

var a = 6, b = 6;
    if(typeof a === "string" && typeof b === "string")
        console.log(parseInt(a) * parseInt(b));
    else if(typeof a ==="number" && typeof b === "string")
        console.log(a + parseInt(b));
    else if(typeof a ==="string" && typeof b === "number")
        console.log(parseInt(a) - b);
    else
        console.log(a/b);