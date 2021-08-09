function add(a,b){
    return a+b;
}

console.log(add(3,2));
console.log(add(2,7));
console.log(add(3,10));


function max(a,b,c){
    let max = a;
    if(max<b) max = b;
    if(max<c) max = c;
    return max;
}

// console.log(max(5,9,2));


function samoGlasnici(a,b,c){
    var countA = 0, countB = 0, countC = 0;
    for(let i = 0; i<a.length;i++){
        if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i'|| a[i] == 'o' || a[i] == 'u' )
        countA ++;
    }
    for(let i = 0; i<b.length;i++){
        if(b[i] == 'a' || b[i] == 'e' || b[i] == 'i'|| b[i] == 'o' || b[i] == 'u' )
        countB ++;
    }
    for(let i = 0; i<c.length;i++){
        if(c[i] == 'a' || c[i] == 'e' || c[i] == 'i'|| c[i] == 'o' || c[i] == 'u' )
        countC ++;
    }
    console.log(max(countA, countB, countC));
}

samoGlasnici("ja sam","kako ste","preskocio sam vijacu");