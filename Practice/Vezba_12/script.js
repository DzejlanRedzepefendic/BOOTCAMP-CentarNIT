function izmeniContent(){
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var range = document.getElementById("range").value;
    var date = document.getElementById("date").value;
    var dropdown = document.getElementById("dropdown").value;
    document.getElementById("prost1").innerHTML = ime;
    document.getElementById("prost2").innerHTML = prezime;
    document.getElementById("prost3").innerHTML = range;
    document.getElementById("prost4").innerHTML = date;
    document.getElementById("prost6").innerHTML = dropdown;
}

const showIme = () => {
    document.getElementById('prost11').innerHTML = 
        document.getElementById('ime').value;
}

const showPrezime = () => {
    document.getElementById('prost22').innerHTML =
        document.getElementById('prezime').value;
}

const showRange = () => {
    document.getElementById('prost33').innerHTML =
        document.getElementById('range').value;
}

const showDate = () => {
    document.getElementById('prost44').innerHTML =
        document.getElementById('date').value;
}


const showDropdown = () => {
    document.getElementById('prost66').innerHTML = 
        document.getElementById('dropdown').value.toUpperCase();
}


function showOption(){
    var pom = document.getElementById("prost55");
    
}