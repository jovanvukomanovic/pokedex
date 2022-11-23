const PokemonList = ({pokemons}) => {
    return ( <div>

           

           {pokemons.map((pokemon)=> {
     <div>
        <p>{pokemon?.name}</p>
        <p>{pokemon?.url}</p>
    </div>})}


    </div> );
}
 
export default PokemonList;