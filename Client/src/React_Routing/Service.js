import React from 'react'
import "./SERVICE/service.css"
import Ourservice from './SERVICE/Ourservice'


var Data = require('./Myapi.json')

const Service = ({addToCart}) => {

  return (
    <div>  
      <Ourservice />
    </div>
  )
}

export default Service