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


function hoverPortfolio(x, y){
    document.getElementById(x).style.visibility = "visible";
    document.getElementById(y).style.opacity = "0.5";
}

function notHover(x, y){
    document.getElementById(x).style.visibility = "hidden";
    document.getElementById(y).style.opacity = "1";
}