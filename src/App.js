import {useState} from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <h1>Basic counter App</h1>
      <h3>Count is: {count}</h3>
      <button onClick={() => count > -10 ? setCount(count - 1) : ""}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count >= 10 ? "" : setCount(count + 1)}>Increase</button>
      <p className='author'>- Vandit Bera</p>
    </div>
  );
}

export default App;
