import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [id, setid] = useState(0);
  const [input, setInput] = useState(0);

  useEffect(() => {
    if (id >= input) return;

    const timer = setTimeout(() => {
      setid(prev => prev + 1);
    }, 10);

    return () => clearTimeout(timer);
  }, [id, input]);

  function startProgress() {
    setid(0); // reset and start again
  }

  return (
    <>
      <div className="outter">
        <div style={{ width: `${id}%` }} className="inner">
          {id}%
        </div>
      </div>

      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={startProgress}>Start</button>
      </div>
    </>
  );
}

export default App;