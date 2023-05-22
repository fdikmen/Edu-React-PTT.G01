import React from 'react'
import { userContext } from '../context/rootContext'
import { useContext } from 'react'

export default function Card() {
    const {userdata,changeName} = useContext(userContext);
    console.log("useContext",userdata,changeName);
  return (
    <div>Card
        <h1>{userdata.name}</h1>
        <h1>{userdata.email}</h1>
        <h1>{userdata.phone}</h1>
    </div>
  )
}
