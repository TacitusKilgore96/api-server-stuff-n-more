import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <section>
        <h1 className='text-4xl text-amber-500'>Siden blev ikke fundet</h1>
        <p>haha get f*cked</p>

        <Link to="/">Kom tilbage i sikkerhed</Link>
      
    </section>
  )
}

export default PageNotFound
