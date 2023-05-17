import React from 'react'
import { useParams } from 'react-router-dom'


function Contact() {
    const params = useParams()
    console.log("params", params)
  return (
    <div>Contact
        <h1>params: {params.contacId}</h1>
    </div>
  )
}

export default Contact