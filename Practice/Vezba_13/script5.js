var musicRecords = {
    name: "hardCancer",
    year: "1997",
    author: "Ivan Slavkovic",
    numberSold: 200,
    adress: {
        street: 'Jalija',
        number: '23',
        country: 'Serbia'
    },
    songs: [
        {
            name: "go hard or go home",
            duration: "2.3 minutes"
        },
        {
            name: "Douchebag",
            duration: "10 minutes"
        },        
        {
            name: "Show must go on",
            duration: "2.3 minutes"
        }
    ]
}

musicRecords.novine = "stare";
musicRecords.bombone = "slatke"
console.log(musicRecords.songs[2].duration);
console.log(musicRecords.bombone);

function numberOfSongs(record){
    console.log(record.songs.length);
}

numberOfSongs(musicRecords)

function numberOfSongsN(record, key, value){
    if(key == 'songs'){
        if(record.songs !==undefined && record.songs.length !== 0)
            record.key.push(value);
        else
            record.key = value;
        }


}

numberOfSongsN(musicRecords,'songs',[{name: 'nest', duration: 'nest'}])
console.log(musicRecords.songs)


function itHas(object,key){
    if(object[key])
        console.log("it has");
    else
        console.log("I't doesn't")
    
}

itHas({name:"nesto", bla:"nest", ne:"vodo", ta:"pad", ka:"slon", me:"noga"}, "bla")


function itHas2(object, key, value){
    var a = Object.keys(object).includes(key);
    var b = Object.values(object).includes(value);
    console.log(a,b);
}

itHas2(musicRecords, "nest", "Ivan Slavkovic");