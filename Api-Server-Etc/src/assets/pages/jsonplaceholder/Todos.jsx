import { useEffect, useState } from "react"
import useRequestData from "../../../hooks/useRequestData"
import Error from "../../components/Error"
import Loader from "../../components/Loader"

const Todos = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    //useState til at huske pagination - hvilken "side" vi er nået til
    const [currentStartIndex, setCurrentStartIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)

    // true/false filter
    const [filter, setFilter] = useState('all')

    const getFilteredTodos = () => {
    if (!data) return []
    
    if (filter === 'completed') return data.filter(todo => todo.completed)
    if (filter === 'incomplete') return data.filter(todo => !todo.completed)
    return data
    }

    const filteredTodos = getFilteredTodos()

    useEffect(() => {
        makeRequest("https://jsonplaceholder.typicode.com/todos", "GET")
    }, [])

  return (
    <section>
        <h1>Lé Todos</h1>
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
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">Alle</option>
                </select>
            </label>

            <button 
                onClick={() => setCurrentStartIndex( currentStartIndex + itemsPerPage)}
                disabled={currentStartIndex >= data?.length-10}
                className="rounded bg-gradient-to-r from-blue-500 to bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-gray-600">
                Næste &rarr;
            </button>

        </div>
        
        {/* true/false buttons */}
        <div className="flex justify-center gap-4 mb-6">
  <button 
    onClick={() => setFilter('all')}
    className={`px-4 py-2 rounded font-medium ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
    Alle
  </button>
  
  <button 
    onClick={() => setFilter('completed')}
    className={`px-4 py-2 rounded font-medium ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
    Færdige
  </button>
  
  <button 
    onClick={() => setFilter('incomplete')}
    className={`px-4 py-2 rounded font-medium ${filter === 'incomplete' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
    Ufærdige
  </button>

    {/* en div, der viser antal Todos for hver kategori */}
    <div className="text-center mb-2 text-sm text-gray-400">
        Viser {filteredTodos.length} af {data?.length || 0} Todos
    </div>
</div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6"> {/* 2 column på mobile og 3 på desktop, lé responsivé 😎 */}
            {/* { data && data.slice(0,10).map( p => */}
            {/* { data && data.slice(10,20).map( p => */}
            {/* { data && data.slice(20,30).map( p => */}
            { filteredTodos.slice( currentStartIndex, currentStartIndex + itemsPerPage ).map( t =>
            
            // Todos styling. False = rød. True = grøn
                <div key={t.id} className={`rounded-lg p-4 border-2 ${t.completed ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                <div className="flex items-center gap-2 mb-2">
                    <span className={`text-2xl ${t.completed ? 'text-green-600' : 'text-red-600'}`}>
                    {t.completed ? '✓' : '✗'}
                    </span>
                    <span className="text-sm text-gray-600">#{t.id}</span>
                </div>
                
                <h3 className={`font-medium ${t.completed ? 'text-green-800 line-through' : 'text-red-800'}`}>
                    {t.title}
                </h3>
                
                <div className="mt-2 text-xs text-gray-500">
                    User ID: {t.userId}
                </div>
            </div>
                
                )}
        </div>
      
    </section>
  )
}

export default Todos
