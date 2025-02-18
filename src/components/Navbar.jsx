import React from 'react'
import Pokeball from "../assets/Pokeball.png"
const Navbar = () => {
    return (
      <nav className="bg-blue-500 text-white p-4 px-2  md:px-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">PokéSearch</h1>
        <div>
            <p className='text-4xl hidden md:block'>Let's Catch Pokémon</p>
        </div>
        <div className='flex items-center gap-2'>
          <a href="https://github.com/utkarsh2004git" target='_blank'>
          <span className='bg-gray-800 select-none cursor-pointer text-white px-2 py-1 duration-200 hover:scale-95 rounded-full'>Utkarsh</span>
          </a>
        <img 
        src={Pokeball} 
        alt="icon" 
        className='w-10 cursor-pointer '
        />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  