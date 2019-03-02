import React, { useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [isYellow, setIsYellow] = useState(true);

  // handleClick requires information from the current state to do its work.
  // This means that everytime state changes a new handler is created
  // This is incredibly common that a handler needs to know something about
  // the state of the component.
  const handleClick = useCallback(() => {
    setIsYellow(!isYellow);
  }, [isYellow]);

  return (
    <>
      <h1>App.hooks.js</h1>
      <Box isYellow={isYellow} depth={12} onClick={handleClick} />
    </>
  );
}

export default App;
