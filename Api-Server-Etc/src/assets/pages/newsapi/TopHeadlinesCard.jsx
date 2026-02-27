import React from 'react'

const TopHeadlinesCard = ( {th} ) => {
  // Utility function til at fjerne HTML tags
  const stripHtmlTags = (html) => {
    if (!html) return html
    return html.replace(/<[^>]*>/g, '')
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 flex flex-col h-full">
        {/* Øverste indhold */}
        <div className="flex-1">
            <h2 className="font-extrabold text-3xl text-pink-300 mb-3">{stripHtmlTags(th.title)}</h2>
            
            {th.urlToImage ? (
                <img
                    src={th.urlToImage}
                    alt={th.title}
                    className="w-full rounded mb-3"
                />
            ) : (
                <div className="w-full h-48 bg-gray-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-gray-300">Intet billede</span>
                </div>
            )}
            
            {th.description ? (
                <p className="text-yellow-400 text-xl font-bold mb-2">{stripHtmlTags(th.description)}</p>
            ) : (
                <p className="text-gray-400 text-xl italic mb-2">Ingen beskrivelse tilgængelig</p>
            )}
            
            <p className="text-cyan-400 mb-2">{stripHtmlTags(th.content) || "Intet indhold tilgængeligt"}</p>
        </div>
        
        {/* Bundsektion - altid i bunden */}
        <div className="mt-auto">
            <div className="text-sm mb-3 border-t border-gray-400 pt-3">
                <p className="text-fuchsia-300 font-bold">
                    Author: {th.author || "Ukendt forfatter"}
                </p>
                <p className="text-gray-300">
                    Published: {th.publishedAt ? new Date(th.publishedAt).toLocaleString("da-dk", {
                        year: "numeric",
                        month: "long", 
                        day: "numeric"
                    }) : "Ukendt dato"}
                </p>
            </div>
            
            <a 
                className="text-white border-solid border-2 rounded px-2 py-1 hover:bg-white hover:text-purple-500 inline-block"
                href={th.url}
                target="_blank" //åbner linket i ny fane i stedet for at erstatte nuværende fane
                rel="noopener noreferrer"> {/* forhindrer ondsindede sider i at manipulere min hjemmeside og skjuler hvor brugeren kom fra. Lidt overkill til en skoleopgave men synes det var fedt at inkludere */}
                Læs mere...
            </a>
        </div>
    </div>
    
  )
}

export default TopHeadlinesCard
