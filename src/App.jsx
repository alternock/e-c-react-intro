import {useState} from "react";
//
import Skills from "./components/Skills/Skills";


function App(){
  let [nombre, setNombre] = useState("soy foo")

  return (
    <>
      <h1>{nombre} - {nombre.toUpperCase()}</h1>
      <Skills active={"things"}/>
    </>
  )
}

export default App
