import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const initVal = () => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      return JSON.parse(valueAsString)
    } else {
      return 0
    }
  }

  const [value, setValue] = useState(initVal)

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(value))
  }, [value])

  const incHandler = () => {
    setValue(value + 1)
  }

  return (
    <div className="App">
      <h3>{value}</h3>
      <button onClick={incHandler}>increase</button>

    </div>
  );
}

export default App;
