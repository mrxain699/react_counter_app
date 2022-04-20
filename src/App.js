import {useState} from 'react'
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  const disabled = counter === 0 ? 'disabled' : '';

    
  

  return (
    <>
      <h1>Counter App</h1>
      <div className="app">

        <button onClick={() => { 
          setCounter(counter + 1);
        }}>+</button>

        <p>{counter}</p>

        <button className={disabled} onClick={() => {
          setCounter(counter - 1);
          }} disabled={disabled}>-</button>
      </div>
      
        <button className="reset_btn" onClick={() => { 
          setCounter(0);
        }}>Reset</button>
    </>

  );
}

export default App;
