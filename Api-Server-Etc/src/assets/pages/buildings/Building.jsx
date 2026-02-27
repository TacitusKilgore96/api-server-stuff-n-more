import Error from "../../components/Error"
import Loader from "../../components/Loader"
import { useEffect, useState } from "react"
import useRequestData from "../../../hooks/useRequestData"

const Building = () => {
  const { makeRequest, isLoading, data, error } = useRequestData()
  
  useEffect(() => {

        makeRequest("http://localhost:5098/buildings", "GET")

    }, [])

  // useState til at rumme brugerens søgeord
  const [ searchKey, setSearchKey ] = useState( "ai" )

    const handleSearch = () => {

    makeRequest("http://localhost:5098/buildings/search?", "GET", 
      {
        params: {
          q: searchKey
        }
      })
  }

  return (
    <section>
      <div className="p-5 flex justify-center gap-2">
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
      </div>

      {isLoading && <Loader />}
      {error && <Error />}
      
      
      {data && data.buildings.map( (b) =>
      <div key={b._id}>
        <div className="flex flex-col items-center justify-center gap-6">
            <img src={"http://localhost:5098/buildings/"+b.buildingImage} alt=""
            className="w-3xl" />
          <ul>
            <li>{b.building}</li>
            <li>{b.founded}</li>
            <li>{b.content}</li>
            <li>{b.rating}</li>
          </ul>
        </div>
      </div>
    )}
    </section>
  )
}

export default Building
