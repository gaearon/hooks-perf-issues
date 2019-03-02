import React, { useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [state, setState] = useState(true);

  const handleClick = useCallback(() => {
    setState(!state);
  }, [state]);

  return (
    <>
      <h1>App.hooks.js</h1>
      <Box state={state} depth={12} onClick={handleClick} />
    </>
  );
}

export default App;
