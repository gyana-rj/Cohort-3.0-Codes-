import { useEffect, useState } from "react"
import axios from "axios";

function App() {
  const [currentTab, setCurrentTab]  = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${currentTab}`);
      setTabData(res.data);
      setLoading(false);
    };
    fetchData();
  }, [currentTab]);

  return <div>
   <button onClick={()=> {setCurrentTab(1)}} style={{color : currentTab == 1 ? "red" : "black"}}>Feed</button>
   <button onClick={() => {setCurrentTab(2)}} style={{color : currentTab == 2 ? "red" : "black"}}>Notifications</button>
   <button onClick={() => {setCurrentTab(3)}} style={{color : currentTab == 3 ? "red" : "black"}}>messages</button>
   <button onClick={() => {setCurrentTab(4)}} style={{color : currentTab == 4 ? "red" : "black"}}>Jobs</button>
  <br />
  { loading ? "Loading....." : tabData.title}
  </div>

}
export default App
