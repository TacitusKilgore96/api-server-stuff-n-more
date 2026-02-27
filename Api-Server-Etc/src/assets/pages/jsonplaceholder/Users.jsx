import Error from "../../components/Error"
import PostCard from "./PostCard"
import { useEffect } from "react"
import Loader from "../../components/Loader"

//hook til at ringe api op - loading data error
import useRequestData from "../../../hooks/useRequestData"

const Users = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect(() => {

        makeRequest("https://jsonplaceholder.typicode.com/users", "GET")
      
    }, [])
    


  return (
    <section>

        <h1>Se users fra JSONPlaceholder</h1>

        {/* Håndter loading og error */}
        { isLoading && <Loader/> }
        { error && <Error />}

        {/* Der er data - stærkt! */}
        { data && data.map( u => 

            <div key={ u.id } className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <h2 className="text-amber-400">{ u.name }</h2>
                <ul>
                    <li className="text-emerald-600">{u.email}</li>
                    <li className="text-violet-600">{u.username}</li>
                    <li className="text-yellow-700">{u.address.street}</li>
                </ul>

            </div>

            )
         }
    </section>
  )
}

export default Users
