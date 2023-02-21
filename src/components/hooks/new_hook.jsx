import { useState } from "react";

export const NewHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hola mundo</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)} >Increment</button>
    </div>
  );
}
