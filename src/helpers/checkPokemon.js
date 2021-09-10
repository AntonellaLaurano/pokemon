export const checkPokemon = (pokemon, pokemonList) => {
    const check = pokemonList.find(element => element.id === pokemon.id);
    if(check) {
        return 'error';
    } else {
        if (pokemonList.length > 5) {
            return 'warning';
        } else {
            return 'success';
        }
    }
}