import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countState, evenSelector } from "./store/atoms/count";
// import { CountContext, SetCountContext } from "./context";

// import { countState, evenSelector } from "./store/atoms/count";

//useRecoilState === useState
//useRecoilValue === give the value of the state
//useSetRecoilValue === give function to update the value
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

const Count = () => {
  console.log("count re- rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
};

function CountRenderer() {
  const count = useRecoilValue(countState);
  return (
    <div>
      {" "}
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}
function EvenCountRenderer() {
  const evenSelectorValue = useRecoilValue(evenSelector);
  return (
    <div>
      <b>{evenSelectorValue ? "It is even " : "It is odd"}</b>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countState);
  // const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
