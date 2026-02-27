import React from 'react'

const GetWorldCard = ({ gw }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to bg-red-500 rounded-4xl w-full text-center pt-5 p-5 font-bold">
            <div className='text-sm/7'>
                <img
                src={gw.flags?.svg || gw.flags?.png}
                alt={gw.flags?.alt || `Flag of ${gw.name?.common || "country"}`}
                className="w-20 h-auto mx-auto"
                loading="lazy"
            />
            <div className='p-3 font-extrabold'>
                <div className='font-extrabold text-3xl pb-2'>{gw.name?.common}</div>
                <div>Region: {gw.region || "Unknown"}</div>
                <div>Capital: {Array.isArray(gw.capital) ? gw.capital.join(", ") : gw.capital || "Unknown"}</div>
                <div>Language: {Object.values(gw.languages || {}).join(", ") || "Unknown"}</div>
                <div>Population: {gw.population != null ? gw.population.toLocaleString('da-DK') : "Unknown"}</div>
                {/* vis kun et demonym hvis det er det samme i begge køn */}
                <div>Demonym: {
                  gw.demonyms?.eng?.m && gw.demonyms?.eng?.f
                    ? (gw.demonyms.eng.m === gw.demonyms.eng.f
                        ? gw.demonyms.eng.m
                        : `${gw.demonyms.eng.m} / ${gw.demonyms.eng.f}`)
                    : "Unknown"}</div>
                <div>Currency: {gw.currencies ? Object.values(gw.currencies).map(c => c.name).join(", ") : "Unknown"}</div>
            </div>
            <hr className='p-1 mt-2 rounded'/>
            <div>Timezone: {
              Array.isArray(gw.timezones) 
                ? gw.timezones.length > 3 
                  ? gw.timezones.slice(0, 3).join(", ") + ` (+${gw.timezones.length - 3} more)`
                  : gw.timezones.join(", ")
                : "Unknown"
            }</div>
            <div>Start of week: {gw.startOfWeek || "Unknown"}</div>
            <div>Car Side: {gw.car?.side || "Unknown"}</div>
            <div>Total Area: {gw.area != null ? gw.area.toLocaleString('da-DK') : "Unknown"} km²</div>
            <div className='font-extrabold text-amber-100'>Gini Index: {
              gw.gini 
                ? Object.entries(gw.gini).map(([year, value]) => `${value}% (${year})`).join(", ")
                : "Unknown"
            }</div>
            <div className="mt-2">
              {gw.maps?.googleMaps && (
                <a 
                  href={gw.maps.googleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300">
                  View on Google Maps 🗺️
                </a>
              )}
            </div>
            </div>
        </div>
  )
}

export default GetWorldCard
