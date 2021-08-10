var niz = [12,2,5,6,19,9,3,2,5,3]
function ucitajNiz(noviNiz){
    for(let i = 0; i<noviNiz.length; i++)
        console.log(noviNiz[i])
}

ucitajNiz(niz);


function promeniElement(arr, elem, broj){
        arr[elem] = broj;
}

promeniElement(niz,3,5);
console.log(niz);


var niz2 = [5,3,4,1,2,3,4,6,9,11]

function skloniVrednost(index, vrednost){
    if(niz2[index] == vrednost) return niz2.splice(index,1);
}

skloniVrednost(4,2);
console.log(niz2);

function ukloniString(string, value){
    var index = string.indexOf(value);
    var index2 = index + value.length;
    console.log(index, index2);
}
ukloniString("Takotijeto","ti");

var arrayNovi = [[1,2,3],2,[3,2,1]];

function prikaziNested(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        if(Array.isArray(arr[i])){
            for(let j = 0; j < arr[i].length; j++)
            console.log(arr[i][j]);
        }
    }
    
}

prikaziNested(arrayNovi);