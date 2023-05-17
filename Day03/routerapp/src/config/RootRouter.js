import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Products from "../components/Product";
import Users from "../components/User";

export default function RootRouter() {
  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      {/* <Route path="/" element={<h1>Home</h1>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact/:contacId/:userId" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/users/:id" element={<Users />} /> */}
      {/* Nested Routes 
/users/ => <h1>Users</h1>
/users/:id => <h1>User Detail</h1>
/users/profile => <h1>Profile Page</h1>
*/}
{/* 
      <Route path="/users" element={<Users />}>
        <Route path="/" element={<h1>Users</h1>} />
        <Route path=":id" element={<h1>User Detail</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Route> */}

      {/* ANY TEXT */}
      <Route path="/book/*" element={<h1>ANY TEXT</h1>} />


      {/* No Match */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}
