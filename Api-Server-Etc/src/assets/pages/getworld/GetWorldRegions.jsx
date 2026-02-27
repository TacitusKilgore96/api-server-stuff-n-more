import React from 'react'

const GetWorldRegions = ({ regionFilter, setRegionFilter, isRegionOpen, setIsRegionOpen, setCurrentStartIndex, dropdownRef }) => {
  return (
      <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsRegionOpen(!isRegionOpen)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg font-bold hover:opacity-90">
              {regionFilter === 'all' ? 'All Regions' : regionFilter} ▼
            </button>
            {isRegionOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-3 min-w-48 z-10 flex flex-col gap-2">
                <button 
              onClick={() => { setRegionFilter('all'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              All Regions
            </button>
            
            <button 
              onClick={() => { setRegionFilter('Africa'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'Africa' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Africa
            </button>
            
            <button 
              onClick={() => { setRegionFilter('Americas'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'Americas' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Americas
            </button>

            <button 
              onClick={() => { setRegionFilter('Asia'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'Asia' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Asia
            </button>

            <button 
              onClick={() => { setRegionFilter('Europe'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'Europe' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Europe
            </button>

            <button 
              onClick={() => { setRegionFilter('Oceania'); setCurrentStartIndex(0); setIsRegionOpen(false); }}
              className={`px-4 py-2 rounded font-medium ${regionFilter === 'Oceania' ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Oceania
            </button>
              </div>
            )}
          </div>
  )
}

export default GetWorldRegions
