import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import './App.css'

function Saludo(props) {
  return <h1>{props.nombre}</h1>
}

function App() {

  const [msj, setMsj] = useState('Hello my friend');

  const handleClick = () => {
    setMsj('Hello my friend (from changed !state)');
  };
  return (
    < >
    <div>
      <Saludo nombre = {msj}/>
      <button onClick={handleClick}>Click me!</button>
    </div>
    </>
  )
}

export default App
