import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  // Declare a state variable `count` with initial value `0`
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Render the Counter component into the DOM
ReactDOM.render(<Counter />, document.getElementById('root'));
