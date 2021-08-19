// Parallax

var velocity = 1;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.container').each(function() { 
        var $element = $(this);
        var height = $element.height()-15;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);


function hoverPortfolio(x){
    document.getElementById(x).style.visibility = "visible";
}

function notHover(x){
    document.getElementById(x).style.visibility = "hidden";
}

function hambToX(){
    document.getElementById("hamb").style.visibility = "hidden";
    document.getElementById("x").style.visibility = "visible";
    document.getElementById("etc").style.visibility ="visible"
}

function xToHamb(){
    document.getElementById("x").style.visibility = "hidden";
    document.getElementById("hamb").style.visibility = "visible";
    document.getElementById("etc").style.visibility ="hidden";
}