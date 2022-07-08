import {useState} from "react";
import Blog from "./Blog";

function App() {
  const [name, setName] = useState("Hurmat");

  function handleClick() {
    setName("Karim");
  }

  return (
    <div className="home">
      <p>{name}</p>

      <button onClick={handleClick}>Click me!</button>
      <Blog title="Hello world1" />
    </div>
  );
}

export default App;
