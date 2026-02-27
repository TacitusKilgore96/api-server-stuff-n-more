import React from 'react'

const StarshipCard = ({s}) => {
  return (
    <div key={ s.name } className="bg-[#000000] rounded-2xl">

                <ul className="rounded text-[#FFE81F]">
                    <h1 className="p-5">{s.name}</h1>
                      <li>Model: {s.model}</li>
                      <li>Manufacturer: {s.manufacturer}</li>
                      <li>Cost in Credits: {s.cost_in_credits}</li>
                      <li>Length: {s.length}</li>
                      <li>Max Atmosphering Speed:{s.max_atmosphering_speed}</li>
                      <li>Crew: {s.crew}</li>
                      <li>Passengers: {s.passengers}</li>
                      <li>Cargo Capacity: {s.cargo_capacity}</li>
                      <li>Consumables: {s.consumables}</li>
                      <li>Hyperdrive Rating: {s.hyperdrive_rating}</li>
                      <li>MGLT: {s.MGLT}</li>
                      <li>Starship Class: {s.starship_class}</li>
                      <div className="text-amber-50 p-3">
                        <li>Created: {new Date(s.created).toLocaleString("da-dk", 

                          {year: "numeric", 
                          month: "long", 
                          day: "numeric", 
                          hour: "2-digit", 
                          minute: "2-digit"
                        })}</li>
                        <li>Edited: {new Date(s.edited).toLocaleString("da-dk", 
                          {year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"} )}
                          </li>
                      </div>
                </ul>

            </div>
  )
}

export default StarshipCard
