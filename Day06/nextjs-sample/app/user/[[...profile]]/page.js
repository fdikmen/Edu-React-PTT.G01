import React from 'react'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'User Page',
  description: 'User Page Description',
  keywords: 'User, Page, Keywords',
  robots: 'index,follow',
}

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export default async function page(props) {
  await delay(3000)
    console.log('User Props=>', props)

    if (props.params.profile[0] === 'error') {
        throw new Error('User Page Error')
    }

    if (props.params.profile[0] === '404') {
      throw notFound()
  }

  return (
    <div>User Page</div>
  )
}
