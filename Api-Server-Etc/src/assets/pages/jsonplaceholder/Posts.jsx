import { useEffect, useState } from "react"
import useRequestData from "../../../hooks/useRequestData"
import PostCard from "./PostCard"
import Error from "../../components/Error"
import Loader from "../../components/Loader"

const Posts = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    //useState til at huske pagination - hvilken "side" vi er nået til
    const [currentStartIndex, setCurrentStartIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)


    useEffect(() => {
        makeRequest("https://jsonplaceholder.typicode.com/posts", "GET")
    }, [])


  return (
    <section>
        <h1>Lé posts fra JSONPlaceholder</h1>
        {/* U know the drill xP dette håndterer loading og error */}
        { isLoading && <Loader/>}
        { error && <Error />}

        <div className="flex mb-10 justify-center gap-4">

            <button 
            onClick={() => setCurrentStartIndex( currentStartIndex - itemsPerPage)}
            disabled={currentStartIndex <= 0}
            className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                &larr; Forrige
            </button>

            <label>Vælg antal posts pr. side
                <select 
                onChange={(e) => setItemsPerPage(e.target.value)}
                className="text-black bg-white p-1 rounded ml-2">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">Alle</option>
                </select>
            </label>

            <button 
                onClick={() => setCurrentStartIndex( currentStartIndex + itemsPerPage)}
                disabled={currentStartIndex >= data?.length-10}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                Næste &rarr;
            </button>

            

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6"> {/* 2 column på mobile og 3 på desktop, lé responsivé 😎 */}
            {/* { data && data.slice(0,10).map( p => */}
            {/* { data && data.slice(10,20).map( p => */}
            {/* { data && data.slice(20,30).map( p => */}
            { data && data.slice( currentStartIndex, currentStartIndex + itemsPerPage ).map( p =>
            
                <PostCard key={ p.id } p={p}/>

            /* tilføjer en gradient på bg, fordi gradients er cool */
                /* <div key={ p.id } className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 mb-6">
                    <ul className="space-y-2 col-span-2">
                        <li className="text-3xl text-pink-300 mb-1">{p.id}</li>
                        <li className="text-yellow-400 text-xl font-bold mb-2">{p.title}</li>
                        <li className="text-cyan-400 text-2xl">{p.body}</li>
                    </ul>
                </div> */
                )}
        </div>
    </section>
  )
}

export default Posts
