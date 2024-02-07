import { useContext, useState,memo } from "react";
import { CountContext, SetCountContext } from "./context";

// import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <Count setCount={setCount} />
      </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

const Count = memo(function Count() {
  console.log("count re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
});

function CountRenderer() {
  const count = useContext(CountContext)
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}


function Buttons() {
  const count = useContext(CountContext)
  const setCount = useContext(SetCountContext)
  return (
    <div>
      <button
        onClick={() => {
          setCount( count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
