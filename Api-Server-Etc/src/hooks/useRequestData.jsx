import axios from "axios"
import { useState } from "react"

const useRequestData = () => {

    const [isLoading, setIsLoading] = useState(false) // om vi venter på data fra api - true el false
    const [data, setData] = useState(null) // data fra API-kald
    const [error, setError] = useState(false)

    // function som sættter det hele i gang
    const makeRequest = async (url, method="GET", options = {} ) => {

        // ringe api op med url, parametre osv.
        // håndtere loading, data og error
        const { body=null, headers = {}, params = {}, apiKey = null } = options

        // I gang
        setIsLoading( true )
        setError( false )

        // Kunstig forsinkelse
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Tilføj API-Key/token - "Authorization - Bearer"
        const combineHeaders = { ...headers }

        try {

            // info til API-kald/request
            const config = {
                method,
                url,
                headers: combineHeaders,
                params,
                data: body // post put patch
            }

            // Kald api'et og send config med
            const response = await axios( config )

            //gem API-data i state
            setData(response.data)
            
        } catch (err) {

            console.error("API fejl:", err)
            setError(true) // der er fejl
            setData(null) // tøm (gamle) data - ingen data når der er error
            
        } finally {
            setIsLoading(false)
        }



    }

  return { makeRequest, data, isLoading, error}
}

export default useRequestData
