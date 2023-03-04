import React, {useEffect} from 'react';
import './App.css';
import Testing from "./components/Testing";
import {useLoading} from "./Hooks/loading";

function App() {
    const { setLoading } = useLoading()
    useEffect(()=>{
        if (setLoading) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setTimeout(()=>{
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                    },3003)
                },3000)
            }, 3000)
        }

    },[setLoading])

  return (
      <Testing>
          <div className="App">
              <h1>Done</h1>
          </div>
      </Testing>
  );
}

export default App;
