import React, { useEffect } from 'react';

export default function Sample1() {


  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Promise resolved');
     }, 3000);
 
     /*setTimeout(() => {
       reject('Promise rejected');
     }, 3000);*/
   });
 
   //ComponentDidMount
   useEffect(() => {
     myPromise.then((res) => {
       console.log("myPromise",res);
     }
     ).catch((err) => {
       console.log("myPromise",err);
     })
   }, [])
  return (
    <div>sample1</div>
  )
}
