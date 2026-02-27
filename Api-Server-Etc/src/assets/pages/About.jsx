import React from 'react'
import { appConfig } from '../../config/appConfig'

const About = () => {
  return (
    <div>
      <title>{appConfig.companyName + " - Om os"}</title>
      <h1>om os</h1>
      <p>vi elsker at danse</p>
      <img src="/floss.gif" alt="" className='w-2xl'/>
    </div>
  )
}

export default About
