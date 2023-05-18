import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux'


//action
/*
const action = {type: "xxxx",payload:{count:12,name:"abc"}}
in reducer
function counterReducer(state,action)
state.counter = action.payload.count
*/

function counterReducer() {
return "hello"
}

function customReducer(state,action) {
  //console.log("customReducer=>",state,action)
  if(action.type === "INCREMENT") {
    return action.payload.count
  }
  else if(action.type === "DECREMENT") {
    return action.payload.count
  }
  return "Null"
}

//const  allReducer = combineReducers({counterReducer,counterReducer2,  counterReducer3})
//let mystore = createStore(allReducer)

// let mystore = createStore(counterReducer)
let customStore = createStore(customReducer)

console.log("INITIAL customStore States=>",customStore.getState())

const customAction = {type: "INCREMENT",payload:{count:32,name:"abc"}}
const customAction2 = {type: "DECREMENT",payload:{count:20,name:"abc"}}


customStore.dispatch(customAction)
console.log("customAction States=>",customStore.getState())
customStore.dispatch(customAction2)
console.log("customAction2 States=>",customStore.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
