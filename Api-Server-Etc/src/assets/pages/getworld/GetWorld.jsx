import useRequestData from "../../../hooks/useRequestData.jsx"
import Error from "../../components/Error.jsx"
import Loader from "../../components/Loader.jsx"
import { useEffect, useState, useRef } from "react"
import GetWorldCard from "./GetWorldCard.jsx"
import GetWorldRegions from "./GetWorldRegions.jsx"

const GetWorld = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()

    const [currentStartIndex, setCurrentStartIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)
    // const til fade
    const [fadeIn, setFadeIn] = useState(true)
    // region filter
    const [regionFilter, setRegionFilter] = useState('all')
    // region dropdown
    const [isRegionOpen, setIsRegionOpen] = useState(false)
    // ref til dropdown
    const dropdownRef = useRef(null)
    
    useEffect(() => {

        makeRequest("https://restcountries.com/v3.1/independent?status=true&fields=name,flags,languages,capital,region,currencies,population,startOfWeek,timezones,car,demonyms,area,gini,maps", "GET", 
            {
    })
      
    }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRegionOpen(false)
      }
    }

    if (isRegionOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isRegionOpen])

  // Filter function for regions
  const getFilteredCountries = () => {
    if (!data) return []
    
    if (regionFilter === 'all') return data
    return data.filter(country => country.region === regionFilter)
  }

  const filteredCountries = getFilteredCountries()

  // Trigger fade animation når side ændres
  useEffect(() => {
    setFadeIn(false)
    const timer = setTimeout(() => setFadeIn(true), 120)

    return () => clearTimeout(timer)
  }, [currentStartIndex, itemsPerPage])

  return (
    <section>

        {/* Håndter loading og error */}
        { isLoading && <Loader/> }
        { error && <Error />}

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png?20150429101758" 
            alt="world"
            className="w-48 md:w-64 h-auto"
          />
          <div>
              <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Discover the world</h1>
              <h2 className="italic mt-2">Did you know some countries have multiple capitals? Go explore!</h2>
              {data && <p className="text-lg font-semibold mt-2">Total countries on this list: {data.length}</p>}
          </div>
      </div>

      <div className="flex mb-5 justify-center gap-4">

            <button 
            onClick={() => setCurrentStartIndex( currentStartIndex - itemsPerPage)}
            disabled={currentStartIndex <= 0}
            className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                &larr; Previous
            </button>

            <label>Posts pr. page
                <select 
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                className="text-black bg-white p-1 rounded ml-2">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="200">All</option>
                </select>
            </label>

            <button 
                onClick={() => setCurrentStartIndex( currentStartIndex + itemsPerPage)}
                disabled={currentStartIndex >= filteredCountries?.length-10}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                Next &rarr;
            </button>

        </div>

        {/* hvor mange cards der vises af gangen */}
        <div className="text-center mb-4 text-sm text-gray-400">
            Showing {Math.min(currentStartIndex + parseInt(itemsPerPage), filteredCountries?.length || 0)} of {filteredCountries?.length || 0} countries
        </div>

        {/* region filter */}
        <div className="flex justify-center mb-6">
            <GetWorldRegions 
              regionFilter={regionFilter}
              setRegionFilter={setRegionFilter}
              isRegionOpen={isRegionOpen}
              setIsRegionOpen={setIsRegionOpen}
              setCurrentStartIndex={setCurrentStartIndex}
              dropdownRef={dropdownRef}
            />

        </div>

      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        {Array.isArray(filteredCountries) && filteredCountries.slice(currentStartIndex, currentStartIndex + parseInt(itemsPerPage)).map((gw) => (
          <GetWorldCard key={gw.name?.common} gw={gw} />
        ))}
      </div>

    </section>
  )
}

export default GetWorld