var i = 0;
function myFunction(){
    var help = document.getElementById("new");
    if(i % 2 == 0){
        help.style.visibility = "visible";    
        i++;
    }
    else{
        help.style.visibility = "hidden";
        i++;
    }
}