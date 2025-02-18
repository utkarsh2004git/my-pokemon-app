import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";

const API = `https://pokeapi.co/api/v2/pokemon?limit=40`;

const App = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        setLoading(true)
        try {
            const res = await axios.get(API);

            const data = res.data.results.map(async (poke) => {
                const mypoke = await axios.get(poke.url);
                return mypoke.data;
            });

            const allPokemons = await Promise.all(data);
            setPokemon(allPokemons);
        } catch (error) {
            console.log(error);
            setError(error)
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon]);

    return (
        <section className="">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                {loading ?
                    <Loading/>
                    :
                    pokemon.map((poke) => (
                        <PokemonCard key={poke.id} pokemon={poke} />
                    ))
                }
            </div>
        </section>
    )
};

export default App;
