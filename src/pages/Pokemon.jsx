import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";

const API = `https://pokeapi.co/api/v2/pokemon?limit=150`;

const App = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [curAPI, setCurAPI] = useState(API);
    const [isFetching, setIsFetching] = useState(false);

    const fetchPokemon = async () => {

        // Prevent multiple requests
        if (!curAPI || isFetching) return;
        setIsFetching(true);
        setLoading(true);

        try {
            const res = await axios.get(curAPI);

            const data = res.data.results.map(async (poke) => {
                const mypoke = await axios.get(poke.url);
                return mypoke.data;
            });

            const allPokemons = await Promise.all(data);

            setPokemon((prev) => {
                const existingIds = new Set(prev.map(p => p.id));
                const newPokemons = allPokemons.filter(p => !existingIds.has(p.id));
                return [...prev, ...newPokemons];
              });
              

            // console.log(res);
            setCurAPI(res.data.next)
        } catch (error) {
            console.log(error);
            setError(error)
        }
        finally {
            setLoading(false);
            setIsFetching(false);
        }
    };

    const handleScroll = () => {

        // Avoid multiple requests
        if (isFetching || !curAPI) return;
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 10) {
            fetchPokemon();
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, curAPI]);

    // useEffect(() => {
    //     console.log(pokemon);
    // }, [pokemon]);


    //search functionality
    const SearchedData = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <section className="py-10 min-h-[85vh] ">

            {/* Search section */}
            <div className="flex justify-center flex-col-reverse items-center gap-3">
                {/* <form> */}
                <input
                    type="text"
                    placeholder="Search Pokémon"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className=" px-6 py-2 border-b-4 bg-white border-red-600 rounded-md text-md outline-none  md:w-md"
                />
                {/* </form> */}
                <div
                    className="cursor-pointer rounded-xl shadow-lg  flex flex-col items-center justify-center w-fit p-3 
            bg-gradient-to-br from-purple-500 to-blue-400 transition-all duration-500 
            hover:scale-105 hover:shadow-2xl text-white text-center"
                >

                    <h1 className="text-xl font-bold">Click Pokémon to see Magic ✨</h1>

                </div>

            </div>
            {
                (loading && pokemon.length === 0 ) ? <Loading /> :
                    <div className="grid my-10 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 place-items-center">
                        {
                            SearchedData.map((poke) => (
                                <PokemonCard key={poke.id} pokemon={poke} />
                            ))
                        }
                    </div>
            }

            {isFetching && pokemon.length !== 0  && <Loading />} {/* Show loader when fetching more */}
        </section>
    )
};

export default App;
