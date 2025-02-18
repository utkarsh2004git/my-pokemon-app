import React from 'react'

const PokemonCard = ({ pokemon }) => {
    return (
        <div className=' hover:scale-95 duration-200 cursor-pointer rounded-xl shadow-xl shadow-blue-200 p-3 flex flex-col items-center justify-center w-52 bg-gradient-to-br from-blue-50  to-blue-400 hover:from-yellow-50 hover:to-orange-300 group relative'>
            <figure>
                <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                    className='mx-auto w-26 h-22 group-hover:scale-[2] duration-500'
                />
                <h1 className='text-2xl text-center font-semibold my-2 group-hover:opacity-0'>{pokemon.name}</h1>
            </figure>
            <div className='flex flex-wrap justify-center items-center gap-3 '>
                {
                    pokemon.types.map((type) => (
                        <span className='bg-gray-800 rounded-full duration-200 hover:scale-95 text-white px-3'>{type.type.name}</span>
                    ))
                }
            </div>

            <div className='my-2 p-1'>
                <div className='grid grid-cols-3 gap-2 my-2'>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Height</span>{pokemon.height}
                    </p>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Weight</span>{pokemon.weight}
                    </p>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Speed</span>{pokemon.stats[5].base_stat}
                    </p>
                </div>

                <div className='grid grid-cols-3 gap-2 place-items-center'>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Exp..</span>{pokemon.base_experience}
                    </p>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Attack</span>{pokemon.stats[1].base_stat}
                    </p>
                    <p className='flex flex-col justify-center items-center '>
                        <span className='font-semibold'>Ability</span>{
                            pokemon.abilities.map((a) => a.ability.name).slice(0, 1).join(", ")
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard