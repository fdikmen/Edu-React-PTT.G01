import React from 'react'

export default function page({ params }) {
    console.log('Products Params=>', params)
    return (
        <div>
            <h1>Products</h1>
            <p>This is the products page</p>
            <p>
                Category : {params.category[0]}<br />
                Category : {params.category[1]}<br />
            </p>
        </div>
    )
}
