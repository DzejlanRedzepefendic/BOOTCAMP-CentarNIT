'use strict'
// ES6 * 

let niz = [1,2,"","",4,5,"",7,8,9,"sta hocete"];
let object = {name:"Ivan", surname:"Slavkovic", ocupation:"Tutor"}
let key = 'age';
let value = 24;
Object.freeze(object);
function printArray(parms){
    let leng = niz.length
    for(let i = 0; i < leng; i++)
        console.log(parms[i]);
}

printArray(niz);


function min(params) {
    let min = Infinity;
    for (let index = 0; index < params.length; index++) {
        if(params[index] < min)
            min = params[index];
        if(typeof params[index] == string){
            params.splice(index, 1);
        }
    }
    return min;
}

console.log(min(niz));



function izbrisi(){
    let nesto = niz.length;
    for (let index = 0; index < nesto; index++) {
    if(typeof niz[index] === "string"){
            niz.splice(index, 1);
            index--;}
    }
    console.log(niz);
}

izbrisi();

function printObject(object,key,value){
    object[key] = value;
    delete object.ocupation;
}

printObject(object,key,value);
console.log(object);



const nesto = (a) => a;
console.log(nesto(5)); 