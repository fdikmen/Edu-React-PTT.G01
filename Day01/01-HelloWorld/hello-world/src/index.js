//Using the library
//import MyLibrary from 'my-library';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './compenents/App.js'


const root = ReactDOM
.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// CAMEL CASE
// Lower Camel Case: myLibraryTwoThree
// Upper Camel Case: MyLibraryTwoThree