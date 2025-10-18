import { createContext, useContext, useState } from "react"

const BulbContext = createContext(); // created a context

function BulbProvider({ children }){
  const [bulbOn, setBulbOn] = useState("true");

  return <BulbContext.Provider value={{bulbOn : bulbOn, setBulbOn : setBulbOn}}>
    {children}
  </BulbContext.Provider>
}

function App() {
  return <div> 
    <BulbProvider>
    <LightBulb />
    </BulbProvider>
  </div>
}

function LightBulb(){
  return <div>
    <BulbState />
    <ToggleBublState />
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext); // consume the context
  return <div>
    {bulbOn ? "Bulb on" : "Blub off"}
  </div>
}

function ToggleBublState(){
  const {bulbOn, setBulbOn} = useContext(BulbContext);

  function toggle(){
    setBulbOn(currentState => !currentState);
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
