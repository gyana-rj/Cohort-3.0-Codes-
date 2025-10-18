import { useState, useEffect } from "react"

//conditional re-rendering
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount(){
    setCount(count => count + 1);
  }

  function decreaseCount(){
    setCount2(count2 => count2 - 1);
  }

  return (
   <div>
    <Counter count = {count} count2 = {count2}></Counter>
    <button onClick={increaseCount}>Increase Count </button>
    <button onClick={decreaseCount}>Decrease Count </button>
   </div>
  )
}

function Counter(props){
useEffect(function(){
  console.log("on mount");
  return function(){
    console.log("on unmount")
  }
}, []); 

useEffect(function(){
  console.log("Count has changed");

  return function(){
    console.log("cleanup is happening");
  }
}, [props.count]);


  return <div>
    <h1>Counter {props.count}</h1>
    <h1>Counter 2 {props.count2}</h1>
  </div>
}
export default App
