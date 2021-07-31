var iterate = 5;
for(let i=0; i < iterate; i++)
    console.log(i+1 +" Volim js");

var number = 1000, novi = 0;

while(novi != number){
    console.log(novi);
    novi += 10;
    console.log(novi);
}

// var number = 100, novi = 0;
while(novi <= number){
    novi += 10;
    if((novi /10)%2 != 0)
        continue;
    console.log(novi);
}
    

for(let i = 57; i < 100; i++){
    if(i%4 === 0)
        break;
    console.log(i);
}

var resenje = 55;
var pomocni = 0;
var niz = [10,1,4,3,2,5,6,7,9,0];
for(let i = 0; i<niz.length; i++){
    pomocni += niz[i];
}
console.log(resenje-pomocni);

//  Nova verzija
var resenjeJe = 0;
var resenjeDv = 0;
var nizB = [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17];
for(let i = 0; i<nizB.length+1;i++)
    resenjeJe += i;
for(let i =0; i<nizB.length;i++)
    resenjeDv += nizB[i];
console.log(resenjeJe - resenjeDv);


// jedan for
var resenjeJ = 0;
var resenjeD = 0;
var nizB = [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17];
for(var i = 0; i<nizB.length;i++){
    resenjeJ += i;
    resenjeD += nizB[i];
}
    resenjeJ += i;
console.log(resenjeJ - resenjeD);

var zvezdica = "*"
for(let i = 0; i < 5; i++){
    console.log(zvezdica);
    zvezdica += " *"
    console.log("\n");
}
