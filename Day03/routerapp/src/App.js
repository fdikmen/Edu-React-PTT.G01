import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Product";

function App() {
  return (
    <>
      <h1>React Router DOM</h1>
      <Link to="/about">About</Link> <br />
      {/* <a href="/about">About</a> */}
      <Link to="/contact" style={{ color: 'red' }}>Contact</Link> <br />
      <Link to="/products">Products</Link> <br />


      <Routes>
        <Route index element={<h1>Home</h1>} />
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact/:contacId/:userId" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        {/* No Match */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>

    </>
  );
}

export default App;
