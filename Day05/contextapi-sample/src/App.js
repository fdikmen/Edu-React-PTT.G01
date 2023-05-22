import User from "./components/User";

import { userContext } from "./context/rootContext";

function App() {
  const userdata={
    name: 'John Doe',
    email: 'John@de.com',
    phone: '+12345989344'
  }
  const changeName = () => {
    userdata.name = 'Jane Doe';
  }
  return (
    <div>
      <h1>Context API Sample</h1>
      <userContext.Provider value={{userdata,changeName}}>
        <User />
      </userContext.Provider>
    </div>
  );
}

export default App;
