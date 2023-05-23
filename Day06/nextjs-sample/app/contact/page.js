import React from 'react'

export default function page({params}) {
    console.log('propsXYZ=>',params)
  return (
    <div>
        <h1>Contact</h1>
        <p>This is the contact page.1 {params.contact[0]}</p>
        <p>This is the contact page.2 {params.contact[1]}</p>
    </div>
  )
}
