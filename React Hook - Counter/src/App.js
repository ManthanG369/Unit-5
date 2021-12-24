import React from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const chanegcount = (value) => {
    // setCounter(counter+value,)

    setCounter((prev) => {
      if (counter >= 100) {
        return 0;
      }
      return prev + value;
    });
  };
  const Double = (value) => {
    setCounter(counter * value);
  };
  //  if(counter>10){
  //    return <div>counter reached max</div>
  //  }

  return (
    <div className="App">
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => chanegcount(1)}>Add</button>
      <button onClick={() => chanegcount(-1)}>Reduse</button>
      <button onClick={() => Double(2)}>Double</button>
      <div>counter is {counter % 2 === 0 ? "Even" : "odd"}</div>
    </div>
  );
}
