
import { useEffect, useState } from "react";
import "./App.css";
import { SidebarClass1 } from "./components/1-basic-project";

import { Otp } from "./components/otp";
import { SidebarToggle } from "./components/icons/SideBarComponent";

const useMediaQuery = (query) =>{
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if(media.matches != matches){
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches,query]);

  return matches;
}

function App() {
  const isDesktop = useMediaQuery("(min-width : 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(isDesktop);

  useEffect(() => {
    if (!isDesktop) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]); 
  
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainComponent sidebarOpen={sidebarOpen} />
    </div>
  );
}



function Sidebar({sidebarOpen, setSidebarOpen}){
  if(!sidebarOpen){
    return <div className="fixed top-0 left-0 z-10">
      <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
        setSidebarOpen(true)
      }}>
        <SidebarToggle/>
      </div>
    </div>
  }
  return <div className="w-96 bg-red-100 top-0 left-0 fixed h-screen md:relative">
    <div>
      <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
        setSidebarOpen(false)
      }}>
        <SidebarToggle/>
      </div>
    </div>
  </div>
}

function MainComponent(){
  return <div className="w-full">
  <div className="h-72 bg-black hidden md:block"></div>
  <div className="grid grid-cols-11 gap-8 p-8">
    <div className="h-96 rounded-2xl  bg-slate-600 md:col-span-2 -translate-y-24 shadow-lg col-span-11 hidden md:block">

    </div>
    <div className="h-96 rounded-2xl  bg-slate-400 md:col-span-6 shadow-lg col-span-11">

    </div>
    <div className="h-96 rounded-2xl  bg-blue-100 md:col-span-3 shadow-lg col-span-11" >

    </div>
  </div>
  </div>
}
export default App;
