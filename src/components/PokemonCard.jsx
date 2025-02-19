import React, { useState } from 'react';
import { motion } from 'motion/react'
const PokemonCard = ({ pokemon }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <motion.div
            initial={{ opacity: 0.9, y: 60 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={toggleActive}
            className={`cursor-pointer rounded-xl shadow-md shadow-blue-200 p-3 flex flex-col items-center justify-center w-56 group select-none
            bg-gradient-to-br from-blue-50 to-blue-400 transition duration-500 
            hover:from-yellow-50 hover:to-orange-300 hover:scale-95 
            ${isActive ? 'from-yellow-50 to-orange-300 scale-95' : ''}`}
        >
            <figure className="group relative">
                <img
                    src={!isActive ? pokemon.sprites.other.home
                        .front_default
                        : pokemon.sprites.other.showdown.front_default}
                    alt={pokemon.name}
                    className={`mx-auto w-26 h-22 transition-transform duration-500 
                    group-hover:scale-[2]  ${isActive ? 'scale-[2]' : ''}`}
                />
                <h1 className={`text-2xl text-center font-semibold my-2 transition-opacity duration-500 
                group-hover:opacity-0 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    {pokemon.name}
                </h1>
            </figure>
            <div className='flex flex-wrap justify-center items-center gap-3'>
                {pokemon.types.map((type) => (
                    <span key={type.type.name} className='bg-gray-800 rounded-full duration-200 text-white px-3 hover:scale-95'>
                        {type.type.name}
                    </span>
                ))}
            </div>

            <div className='my-2 p-1'>
                <div className='grid grid-cols-3 gap-2 my-2'>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Height</span>{pokemon.height}
                    </p>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Weight</span>{pokemon.weight}
                    </p>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Speed</span>{pokemon.stats[5].base_stat}
                    </p>
                </div>

                <div className='grid grid-cols-3 gap-2 place-items-center'>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Exp..</span>{pokemon.base_experience}
                    </p>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Attack</span>{pokemon.stats[1].base_stat}
                    </p>
                    <p className='flex flex-col justify-center items-center'>
                        <span className='font-semibold'>Ability</span>
                        {pokemon.abilities.map((a) => a.ability.name).slice(0, 1).join(", ")}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default PokemonCard;
