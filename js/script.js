const nbPokemon = 200;

const colors = {

    normal :  ['#FFFFFF',     {icontype: '<i class="uil uil-pagelines"></i>', iconColor:'red'}],
    fighting :['#5B2803',     {icontype: '<i class="uil uil-ninja"></i>', iconColor:'red'}],
    flying :  ['#B0F6EC',     {icontype: '<i class="uil uil-plane"></i>', iconColor:'red'}],
    poison :  ['#6E067F',     {icontype: '<i class="uil uil-syringe"></i>', iconColor:'red'}],
    ground :  ['#B46943',     {icontype: '<i class="uil uil-trees"></i>', iconColor:'red'}],
    rock :    ['#A4A4A4',     {icontype: '<i class="uil uil-bullseye"></i>', iconColor:'red'}],
    bug :     ['#3EF646',     {icontype: '<i class="uil uil-flask"></i>', iconColor:'red'}],
    ghost :   ['#E1E1E1',     {icontype: '<i class="uil uil-yin-yang"></i>', iconColor:'red'}],
    steel :   ['#F6F06A',     {icontype: '<i class="uil uil-rocket"></i>', iconColor:'red'}],
    fire :    ['#F05929',     {icontype: '<i class="uil uil-fire"></i>', iconColor:'red'}],
    water :   ['#00F0FF',     {icontype: '<i class="uil uil-tear"></i>', iconColor:'red'}],
    grass :   ['#048C21',     {icontype: '<i class="uil uil-pagelines"></i>', iconColor:'red'}],
    electric :['#EEF106',     {icontype: '<i class="uil uil-bolt"></i>', iconColor:'red'}],
    psychic : ['#500262',     {icontype: '<i class="uil uil-favorite"></i>', iconColor:'red'}],
    ice :     ['#8BF6FA',     {icontype: '<i class="uil uil-snowflake"></i>', iconColor:'red'}],
    dragon :  ['#FC1515',     {icontype: '<i class="uil uil-traffic-light"></i>', iconColor:'red'}],
    dark :    ['#818181',     {icontype: '<i class="uil uil-heart-break"></i>', iconColor:'red'}],
    fairy :   ['#F5AAFC',     {icontype: '<i class="uil uil-moon"></i>', iconColor:'red'}],
    unknown : ['#FFFFFF',     {icontype: '<i class="uil uil-search"></i>', iconColor:'red'}],
    shadow :  ['#707070',     {icontype: '<i class="uil uil-wind-moon"></i>', iconColor:'red'}]
}

for (let i = 1; i<nbPokemon;i++){

    fetch("https://pokeapi.co/api/v2/pokemon/"+ i +"")

    .then (response => response.json())
    .then ((data) => {
        // console.log(data)
        let div = document.createElement("div")
        div.classList.add("pokeCard")

        let p = document.createElement("p")
        p.classList.add("pokeName")
        
        let p1 = document.createElement("p")
        p1.classList.add("pokeImg")

        let p2 = document.createElement("p")
        p2.classList.add("pokeType")

        let p3 = document.createElement("p")
        p3.classList.add("pokeId")

        let p4 = document.createElement("p")
        p4.classList.add("pokeIcon")

        div.style.background = colors[data.types[0].type.name][0]

        let pokemonName = data.name
        let majPokeName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
        let pokeType = data.types[0].type.name
        let majPokeType = pokeType.charAt(0).toUpperCase() + pokeType.slice(1)

        div.appendChild(p3)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p4)
        div.appendChild(p1)
        document.body.appendChild(div)
        
        p.innerHTML += majPokeName
        p1.innerHTML += `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png'>` + "<br>"
        p2.innerHTML += majPokeType
        p3.innerHTML += "#" + ("OO" + data.id).slice(-3)
        p4.innerHTML += colors[data.types[0].type.name][1].icontype
        

}
)};

