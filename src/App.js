import { useState } from 'react';
import './App.css';
import WorkerTimeTracker from './pages/WorkerTimeTracker';

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((count) => count + 1);
    console.log({ count });
  };
  return (
    <div className="App">
      <section>{count}</section>
      <button onClick={handleCount}>Click Me</button>
      <h2>Workers Time Tracker</h2>
      <WorkerTimeTracker />
    </div>
  );
}

export default App;
