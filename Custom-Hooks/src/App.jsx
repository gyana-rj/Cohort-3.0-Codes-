import { useRef } from "react";

function useDebounce(originalFn){
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn;
}

function App() {
  function sendDataToBackend(){
    console.log("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend); 

  return (
    <>
    <input type="text" onChange={debouncedFn} />
    </>
  );
  
}

export default App
