import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import StateSample from './components/StateSample';
import Counter from './components/Counter.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>
     {/* <h1>Hello World</h1>
     <hr/>
     <StateSample />
     <hr/>
     <Blog /> */}
    </div>
  );
}

export default App;
