import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false)
  const [isWeatherDropdownOpen, setIsWeatherDropdownOpen] = useState(false)
  const [isPostOpen, setIsPostOpen] = useState(false)
  return (
    <nav>
      <menu className='flex gap-5 text-4xl'>
        <li>
            <NavLink to="/">Forsiden</NavLink>
        </li>
        <li>
            <NavLink to="/about">Om os</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Konktakt os</NavLink>
        </li>
        <li>
          <NavLink to="/users">Brugere</NavLink>
        </li>
        <li 
          className="relative"
          onMouseEnter={() => setIsPostOpen(true)}
          onMouseLeave={() => setIsPostOpen(false)}
        >
          <span className="cursor-pointer hover:text-blue-400">Posts ▼</span>
          {isPostOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 min-w-48 z-10">
              <NavLink 
                to="/Posts" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Posts
              </NavLink>
              <NavLink 
                to="/todos" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Todos
              </NavLink>
              <NavLink 
                to="/starships" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Starships
              </NavLink>
            </div>
          )}
        </li>
        <li 
          className="relative"
          onMouseEnter={() => setIsNewsDropdownOpen(true)}
          onMouseLeave={() => setIsNewsDropdownOpen(false)}
        >
          <span className="cursor-pointer hover:text-blue-400">Nyheder ▼</span>
          {isNewsDropdownOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 min-w-48 z-10">
              <NavLink 
                to="/nyheder" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Alle Nyheder
              </NavLink>
              <NavLink 
                to="everythingdetails" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Nyhedsdetaljer
              </NavLink>
              <NavLink 
                to="topheadlines" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Top-Headlines
              </NavLink>
            </div>
          )}
        </li>
        <li 
          className="relative"
          onMouseEnter={() => setIsWeatherDropdownOpen(true)}
          onMouseLeave={() => setIsWeatherDropdownOpen(false)}
        >
          <span className="cursor-pointer hover:text-blue-400">Weather ▼</span>
          {isWeatherDropdownOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 min-w-48 z-10">
              <NavLink 
                to="/openweather1" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Weather 1
              </NavLink>
              <NavLink 
                to="/openweather2" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Weather 2
              </NavLink>
              <NavLink 
                to="/openweather3" 
                className="block px-4 py-2 text-2xl text-gray-800 hover:bg-blue-100 rounded"
              >
                Weather 3
              </NavLink>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/getworld">The World</NavLink>
        </li>
        <li>
          <NavLink to="/building">Buildings</NavLink>
        </li>
      </menu>
    </nav>
  )
}

export default Navbar
