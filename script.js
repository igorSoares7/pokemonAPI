async function execute(){
    const valueInput = document.getElementById("inputPokemon").value
    
    const pokemon = await buscarAPI(valueInput)

    const elementName = document.getElementById("namePokemon")
    const elementImage = document.getElementById("elementImage")

    elementName.innerHTML = pokemon.name
    elementImage.src = pokemon.sprites.front_default

    console.log(elementName.innerHTML)
}

async function buscarAPI(valueInput) {
    const url = `https://pokeapi.co/api/v2/pokemon/${valueInput}/`

    const response = await fetch(url)
    return response.json()
}