import Blog from "./Blog";
import User from "./User";

function App() {
  let blogInfos = [
    { textHead: "Blog 1", textBody: "Blog 1 Body" },
    { textHead: "Blog 2", textBody: "Blog 2 Body" },
    { textHead: "Blog 3", textBody: "Blog 3 Body" },
  ]
  return (
    <div>

      <User name="Tommy" age="40" userId="1"/>
      <User name="Emmy" age={25}/>
      <hr />
      Hello World!
      <Blog blogInfos={blogInfos} username="testName" age={123}></Blog>
      {/* <Blog/>
      <Blog surname="testsNAME"/>
      <Blog/>
      <Blog apiKey="ZXCZXZXCZCXCXCX"/> */}
    </div>
  );
}

export default App;
