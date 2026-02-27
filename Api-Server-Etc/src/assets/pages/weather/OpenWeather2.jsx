import useRequestData from "../../../hooks/useRequestData.jsx"
import Error from "../../components/Error.jsx"
import Loader from "../../components/Loader.jsx"
import { useEffect, useState } from "react"
import postnumre from "./postnumre.json"

const OpenWeather2 = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()

    const [zip, setZip] = useState( "8270")
    const [formIsValid, setFormIsValid] = useState(true)

    useEffect(() => {

        if (formIsValid) {

            makeRequest("https://api.openweathermap.org/data/2.5/weather", "GET", 
                {
                params: {
                    appid: import.meta.env.VITE_APP_OPENWEATHERKEY,
                    zip: zip + ",dk",
                    units: "metric",
                    lang: "da",
                },
            })
        }
    }, [zip])

    return (
        <div>
            <h1 className="text-3xl font-bold">Vejret i {data?.name || "Loading..."} lige nu</h1>
            <div className="grid grid-cols-2">
                {/* Håndter loading og error */}
                { isLoading && <Loader/> }
                { error && <Error />}

            <label>
                        Indtast postnummer <br />
 
                        <input
                            type="text"
                            list="zipcodes"
                            placeholder="Skriv et postnummer"
                            required
                            pattern="^[1-9]\d{3}$"
                            onChange={ e => {
                                setFormIsValid( e.target.checkValidity() )
                                setZip( e.target.value )
                            } }
                            className=" mr-4 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm focus:border-yellow-200 focus:outline-none focus:ring-1 focus:ring-yellow-200"
                        />
 
                    </label>

                    <datalist id="zipcodes">
                        {
                            postnumre.map(z =>
                                <option key={z.postnr} value={z.postnr}>{z.by} {z.postnr}</option>

                            ) 
                        }
                    </datalist>

            {data && 
                <div className="bg-blue-600 rounded-4xl w-fit mx-auto m-5 text-center">

                    <div>
                        <img
                            src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}
                            alt="vejrikon"
                            className="mx-auto"
                        />
                        <h3 className="text-2xl font-medium">{data.weather[0].description}</h3>
                    </div>

                    <div className="w-fit mx-auto px-4 py-5 mt-4">
                        <p className="text-2xl">Temperaturen <br /> lige nu: <br /> {Math.round(data.main.temp)}&deg;</p>
                    </div>

                </div>

                
            }
            {data && 
                <div className="bg-orange-600 rounded-4xl w-fit mx-auto m-5 text-center pt-5">

                    <div>
                       <img 
                           src="https://cdn-icons-png.flaticon.com/512/2011/2011448.png" 
                           alt="vind" 
                           className="mx-auto w-20 h-20 mb-5 invert-100"
                       />
                       <h3 className="text-2xl font-medium">Vind forhold</h3>
                    </div>

                    <div className="w-fit mx-auto px-4 py-3 mt-4">
                        <p>Vindhastighed: {Math.round(data.wind.speed)} m/s</p>
                        <p>Vindretning: {data.wind.deg}&deg;</p>
                    </div>

                </div>

                
            }
            {data && 
                <div className="bg-red-600 rounded-4xl w-fit mx-auto m-5 text-center pt-5">

                    <div>
                       <img 
                           src="https://cdn-icons-png.flaticon.com/512/2011/2011448.png" 
                           alt="vind" 
                           className="mx-auto w-20 h-20 mb-5 invert-100"
                       />
                       <h3 className="text-2xl font-medium">Sol forhold</h3>
                    </div>

                    <div className="w-fit mx-auto px-4 py-3 mt-4">
                        <p>Vindhastighed: {Math.round(data.wind.speed)} m/s</p>
                        <p>Vindretning: {data.wind.deg}&deg;</p>
                    </div>

                </div>

                
            }
            </div>
        </div>
    )
}

export default OpenWeather2