import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter > 0 ? counter - 1 : 0);

  useEffect(() => {
    if (counter > 5) {
      console.log("You passed 5!");
    }
  }, [counter]);

  return (
    <div>
      <h1>React Website: NotHome</h1>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      {counter > 5 && <p>You passed 5!</p>}
    </div>
  );
};

export default NotHome;
