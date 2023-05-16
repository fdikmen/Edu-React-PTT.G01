import ClassComp from "./ClassComp";
import React, { useState } from 'react'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>React Lifecycle</h1>
      {show && <ClassComp />}
      <button style={{marginTop:'20px',padding:'10px'}} onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
