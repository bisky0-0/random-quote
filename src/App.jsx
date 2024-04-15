import { useEffect, useState, useRef } from "react";
import { fetchData } from "./fetchingQts.jsx";
import { Card } from "./card";
import { colors } from "./colors.js";
import { useSelector } from "react-redux";
function App() {
  const [data, setData] = useState({})
  const dataRef = useRef(null);

  useEffect(() => {
    const fetching = async() => {
      const data = await fetchData();
      dataRef.current = data
      setData(dataRef.current.quotes)
    }

    fetching()
   
  }, [])

  const color = useSelector(state => state.color);

  return (
    <div id="app" style={{width: '100vw', height:'100vh', background: `${colors[color]}`, transition: 'background-color 1s ease'}}>
    <div className="container" >
      <Card data={ data }/>
      </div>
      </div>
  );
}

export default App;
