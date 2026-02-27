import Error from "../../components/Error"
import Loader from "../../components/Loader"
import { useEffect, useState } from "react"
import useRequestData from "../../../hooks/useRequestData"
import EverythingCard from "./EverythingCard"
import EverythingDetails from "./EverythingDetails"

const Everything = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()

  //state til at huske hvilken side (data) vi er på
    const [page, setPage] = useState( 1 )

  // useState til at rumme brugerens søgeord
  const [ searchKey, setSearchKey ] = useState( "ai" )
  // useState til valg af sprog
  const [ language, setLanguage ] = useState( "en" )

  //  za Function to handle ze search
  const handleSearch = () => {

    makeRequest("https://newsapi.org/v2/everything", "GET", 
      {
        params: {
          apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
          q: searchKey,
          language: language
        }
      })
  }

    useEffect(() => {

        makeRequest("https://newsapi.org/v2/everything", "GET", 
            {
            params: {
            apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
            q: "bitcoin"
        }
    })
      
    }, [])

    return (
    <section>
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
    </div>

            {/* Håndter loading og error */}
            { isLoading && <Loader/> }
            { error && <Error />}

            <div className="p-5 mt-10 mb-10 rounded-2xl flex justify-center gap-3">
                <label>
                <input 
                onChange={ (e)  => setSearchKey( e.target.value)}
                onKeyDown={ (e) => e.key === 'Enter' && handleSearch()}
                type="text" 
                placeholder="Søg noget..." 
                className="bg-[#154eb17f] text-gray-100 p-2 rounded-2xl" />
                </label>

                <button 
                onClick={ handleSearch }
                className="bg-[#003eaa] p-2 rounded-2xl">
                    SØG
                </button>

                <label>Vælg et sprog
                    <select
                    value={language}
                    onChange={ (e) => setLanguage(e.target.value)}
                    className="bg-[#154eb17f] text-gray-100 p-2 rounded-2xl ml-2"
                >
                    <option value="da">Da 🇩🇰</option>
                    <option value="en">En 🇬🇧</option>
                    <option value="de">De 🇩🇪</option>
                    <option value="es">Es 🇪🇸</option>
                    <option value="ru">Ru 🇷🇺</option>       
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-3 gap-5">
                { data && data.articles.map( (n, i) =>

                    <EverythingCard n={ n } key={ "news" + i}/>
                    )
                 }
            </div>
    </section>
)}

export default Everything
