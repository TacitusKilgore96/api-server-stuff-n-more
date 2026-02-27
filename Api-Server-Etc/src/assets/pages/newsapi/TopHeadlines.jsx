import Error from "../../components/Error"
import Loader from "../../components/Loader"
import { useEffect, useState } from "react"
import useRequestData from "../../../hooks/useRequestData"
import TopHeadlinesCard from "./TopHeadlinesCard"
import newsApiParams from "./newsapi_requestparameters.json"

// Utility function to strip HTML tags
const stripHtmlTags = (html) => {
  if (!html) return html
  return html.replace(/<[^>]*>/g, '')
}

const TopHeadlines = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)

    // Calculate derived values
    const totalArticles = data?.articles?.length || 0
    const totalPages = Math.ceil(totalArticles / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentArticles = data?.articles?.slice(startIndex, endIndex) || []

    // useState til at rumme brugerens søgeord
  const [ searchKey, setSearchKey ] = useState( "ai" )
  // useState til valg af sprog
  const [ language, setLanguage ] = useState( "en" )
  // useState til valg af kategori
  const [ category, setCategory ] = useState( "business" )
  // useState til at holde styr på om vi søger eller viser originale artikler
  const [ isSearching, setIsSearching ] = useState( false )
  const [ searchResults, setSearchResults ] = useState( null )

  //  function til at håndtere search
  const handleSearch = () => {
    makeRequest("https://newsapi.org/v2/top-headlines", "GET", 
      {
        params: {
          apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
          category: category,
          country: "us",
          q: searchKey,
          language: language
        }
      })
  }


    useEffect(() => {
        makeRequest("https://newsapi.org/v2/top-headlines", "GET", {
            params: {
                apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
                category: category,
                q: "ai",
                country: "us"
            }
        })
    }, [])


  return (
    <section>
        <h1>Top Headlines</h1>
        {/* U know the drill xP dette håndterer loading og error */}
        { isLoading && <Loader/>}
        { error && <Error />}

        <div className="flex mb-10 justify-center gap-4">
            <button 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                &larr; Forrige
            </button>

            <span className="flex items-center px-4">
                Side {currentPage} af {totalPages}
            </span>

            <select 
                value={itemsPerPage}
                onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1) // Reset to first page
                }}
                className="text-black bg-white p-1 rounded">
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={totalArticles}>Vis alle</option>
            </select>

            <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                Næste &rarr;
            </button>
        </div>

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
                    {newsApiParams.language.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.code.toUpperCase()} - {lang.language}
                        </option>
                    ))}
                    </select>
                </label>

                <label>Vælg kategori
                    <select
                    value={category}
                    onChange={ (e) => setCategory(e.target.value)}
                    className="bg-[#154eb17f] text-gray-100 p-2 rounded-2xl ml-2"
                >
                    {newsApiParams.category.map((cat) => (
                        <option key={cat.code} value={cat.code}>
                            {cat.category_code}
                        </option>
                    ))}
                    </select>
                </label>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {currentArticles.map((th, index) => (
                <TopHeadlinesCard 
                    key={`headline-${startIndex + index}`}
                    th={th} 
                />
            ))}
        </div>
    </section>
  )
}

export default TopHeadlines
