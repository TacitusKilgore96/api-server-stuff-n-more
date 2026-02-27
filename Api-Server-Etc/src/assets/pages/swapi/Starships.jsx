import Error from "../../components/Error"
import { useEffect, useState, useRef } from "react"
import Loader from "../../components/Loader"
import StarshipCard from "./StarshipCard"

//hook til at ringe api op - loading data error
import useRequestData from "../../../hooks/useRequestData"

const Starships = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    const [isScrolling, setIsScrolling] = useState(false)

    //state til at huske hvilken side (data) vi er på
    const [page, setPage] = useState( 1 )
    
    const audioRef = useRef(null) // til star wars musik
    const toggleScrollAndMusic = () => {
  setIsScrolling(!isScrolling)
  
  if (!isScrolling) {
    // Start scrolling and music
    audioRef.current?.play()
  } else {
    // Stop scrolling and music
    audioRef.current?.pause()
    audioRef.current.currentTime = 0 // Reset to beginning
  }
}
    useEffect(() => {

        makeRequest("https://swapi.py4e.com/api/starships/?page=" + page, "GET")
      
    }, [page])
    


  return (
    <section>
{/* star wars musik */}
      <audio 
    ref={audioRef}
    src="/StarWars.mp3"
    loop
    preload="auto"
  />

        <h1>Starships were meant to fly</h1>
        <h2>Hands up and touch the sky</h2>

        {/* Håndter loading og error */}
        { isLoading && <Loader/> }
        { error && <Error />}

        
{/* previous og next buttons */}
    <div className="p-5 flex justify-center gap-5">
      <button 
            onClick={ () => setPage( page - 1 )}
            disabled={ !data?.previous}
            className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                &larr; Forrige
            </button>

            <div className="text-center text-gray-400">
              Side {page} af {data?.count ? Math.ceil(data.count / 10) : 0}
            </div>

            <button 
                onClick={ () => setPage( page + 1 ) }
                disabled={ !data?.next}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                Næste &rarr;
            </button>

            {/* NEW: Star Wars scroll toggle */}
            <button 
            onClick={toggleScrollAndMusic}  // Change this line
            className={`px-4 py-2 rounded font-bold text-white z-1 opacity-90 ${isScrolling ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 hover:bg-gray-600'}`}>
            {isScrolling ? '⏸️ Stop Scroll' : '▶️ Star Wars Scroll'}
            </button>
    </div>

     
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isScrolling ? 'starwars-scroll' : ''}`}>
            { data && data.results.map( s =>
            <StarshipCard key={s.name} s={s}/>
                )
             }
          </div>
    </section>
  )
}

export default Starships
