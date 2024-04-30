import React from 'react'
import Slider from './Slider'
import Adress from '../data/adress.json'

const Address = () => {
  return (
    <div><Slider slides={Adress} /></div>
  )
}

export default Address