import React from 'react'

export default function SubCounter(props) {
  const changeHndler = () => {
    props.changeName("Jane")
  }
  return (
    <div>
        <hr/>
        SubCounter
        <h3>SubCounter Count: {props.countValue}</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button onClick={changeHndler}>Change Name</button>
    </div>
  )
}
