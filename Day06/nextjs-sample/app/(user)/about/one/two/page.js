import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>About /about/one/two</h1>
        <p>This is the about page from /about/one/two</p>
      <Link href="/">Home</Link><br />
      <Link target='_blank' href="/about/one/two" prefetch={true}>Here</Link><br />
      <Link href={
        {
          pathname: '/', 
          query: {
            name: 'Vercel'
          },
          prefetch: true
        }
      }>Home</Link><br />
    </div>
  )
}
