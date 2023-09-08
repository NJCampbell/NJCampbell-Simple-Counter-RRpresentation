import { useState, useEffect } from 'react';
import PropTypes from 'react';
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "./lib/time.js"

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)    
    return () => clearInterval(interval)
  }, [counter])  

  return (
    <>
      <SimpleCounter
       thousandsDigit={calculateSeconds(counter, 1000)}
       hundredsDigit={calculateSeconds(counter, 100)}
       tensDigit={calculateSeconds(counter, 10)}
       onesDigit={calculateSeconds(counter, 1)}     
      />    
      
    </>
  )
}

export default App
