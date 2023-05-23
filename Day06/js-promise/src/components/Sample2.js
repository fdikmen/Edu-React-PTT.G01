import React,{useEffect} from 'react'

export default function Sample2() {
    const myPromise = new Promise((resolve, reject) => {

        const random = Math.floor(Math.random()*10);

        if (random<4) {
            resolve('Promise resolved. Number:'+ random);
        } else {
            //reject('Promise rejected. Number:'+ random);
            //throw new Error('Promise rejected. Number:'+ random);
            reject(new Error('Promise rejected. Number:'+ random))
        }

    })

    useEffect(() => {
        myPromise.then((res) => {
            console.log("myPromise-2",res);
        }
        ).catch((err) => {
            console.log("myPromise-2",err);
        })
    }, [])
    

  return (
    <div>sample2</div>
  )
}
