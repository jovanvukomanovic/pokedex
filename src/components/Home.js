import {useEffect, useState} from "react"
import PokemonList from "./PokemonList";


const Home = () => {
const[pokemons,setPokemons] = useState(null);



useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    .then(res => {
       
        return res.json()       
    })
    .then(data =>{
        return ( 
            setPokemons(data.results)
       
        )    
       

    })
},[]);
console.log(pokemons );




    
      
        

    return ( <div>
        
        
     
    

{pokemons && < PokemonList pokemons={pokemons} />}

        


    </div> );
}




 
export default Home;