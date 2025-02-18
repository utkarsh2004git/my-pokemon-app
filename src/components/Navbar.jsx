import React from 'react'
import Pokeball from "../assets/Pokeball.png"
const Navbar = () => {
    return (
      <nav className="bg-blue-500 text-white p-4 px-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">PokéSearch</h1>
        <div>
            <p className='text-4xl'>Let's Catch Pokémon</p>
        </div>
        <img 
        src={Pokeball} 
        alt="icon" 
        className='w-10'
        />
      </nav>
    );
  };
  
  export default Navbar;
  