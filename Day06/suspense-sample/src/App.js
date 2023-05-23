// import UserProfile from "./components/UserProfile";
import React, { lazy,Suspense } from 'react';

// const UserProfile = lazy(() => import('./components/UserProfile'));
// const UserProfile = React.lazy(() => import('./components/UserProfile'));

const UserProfile = lazy(()=>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/UserProfile'));
    }
    , 3000);
  })
);

function App() {
  return (
   <>
   <h1>-Lazy & Suspense Sample </h1>
  <Suspense fallback={<div>Loading ...</div>}>
    <UserProfile />
  </Suspense>
   </>
  );
}

export default App;
