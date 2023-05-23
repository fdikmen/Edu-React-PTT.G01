import React from 'react'

export default function layout({children,...rest}) {
  console.log("rest",rest)
  return (
    <div>User Layout
    <hr/>
        {children}
    <hr/>

    </div>
  )
}
