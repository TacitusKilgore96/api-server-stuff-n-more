import React from 'react'
import { appConfig } from '../../config/appConfig'

const News = () => {
  return (
    <div>
      <title>{appConfig.companyName + " - Nyheder"}</title>
      <h1>Nyheder</h1>
    </div>
  )
}

export default News
