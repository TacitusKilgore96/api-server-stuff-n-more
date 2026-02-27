import React from 'react'
import { appConfig } from '../../config/appConfig'

const Home = () => {
  return (
    <div>
      <title>{appConfig.companyName + " - Forside"}</title>
      <h1>Forside-John</h1>
      <p>Hvis du læser dette, så betyder det at du har mødt forside-John</p>
      <img src="/john.jpg" alt="" className='w-2xl'/>
    </div>
  )
}

export default Home