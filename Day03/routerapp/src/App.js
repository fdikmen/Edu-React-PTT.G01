import { Link } from "react-router-dom";
import RootRouter from "./config/RootRouter";

function App() {
  return (
    <>
      <h1>React Router DOM</h1>
      <Link to="/about">About</Link> <br />
      {/* <a href="/about">About</a> */}
      <Link to="/contact" style={{ color: 'red' }}>Contact</Link> <br />
      <Link to="/products">Products</Link> <br />
      <Link to="/users">Users</Link> <br />

      <RootRouter />


    </>
  );
}

export default App;
