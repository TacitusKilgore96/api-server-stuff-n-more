import React from 'react'

const PostCard = ( {p} ) => {
  return (
    
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 mb-6">
                    <ul className="space-y-2 col-span-2">
                        <li className="text-3xl text-pink-300 mb-1">{p.id}</li>
                        <li className="text-yellow-400 text-xl font-bold mb-2">{p.title}</li>
                        <li className="text-cyan-400 text-2xl">{p.body}</li>
                    </ul>
                </div>
  )
}

export default PostCard
