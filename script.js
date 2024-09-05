async function execute(){
    const valueInput = document.getElementById("inputPokemon").value
    
    const pokemon = await buscarAPI(valueInput)

    const elementName = document.getElementById("namePokemon")
    const elementImage = document.getElementById("elementImage")

    elementName.innerHTML = `#${valueInput} - ${pokemon.name}`
    elementImage.src = pokemon.sprites.front_default

    
}

async function buscarAPI(valueInput) {
    const url = `https://pokeapi.co/api/v2/pokemon/${valueInput}/`

    const response = await fetch(url)
    return response.json()
}
