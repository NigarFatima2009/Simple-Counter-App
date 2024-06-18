import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [lightUp, setLightUp] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const toggleLight = () => setLightUp(!lightUp);

    return (
 <div className="App">
      <header className="App-header">
        <div className="counter"  style={{ color: lightUp ? 'red' : 'black' }}>
          <div className="display">
            {count.toString().padStart(4, '0')}
          </div>
          <div className="controls">
            <button onClick={increment} className="button plus">+</button>
            <button onClick={decrement} className="button minus">-</button>
            <button onClick={reset} className="button reset">↺</button>
            <button onClick={toggleLight} className="button led">
              {lightUp ? '💡' : '💡'}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
