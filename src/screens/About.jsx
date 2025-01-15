import { useState } from 'react'
import {useSelector} from 'react-redux'
const About = () => {
  const [nameComponent,setNameComponent]=useState('About')
  

  const count =useSelector((state)=>state.product.initialValue)
  return (
    <>
    <p>Componente About</p>
    Valor de InitialValue es <span>{ count }</span>

    <p>Component name: {nameComponent}</p>
    <button onClick={()=>{setNameComponent('Curso de React!!!')}}>Press</button>
    </>
  )
}

export default About