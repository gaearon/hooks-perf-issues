import React, { useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [isYellow, setIsYellow] = useState(true);

  const handleClick = useCallback(() => {
    setIsYellow(isYellow => !isYellow);
  }, []);

  return (
    <>
      <h1>App.hooks.js</h1>
      <Box isYellow={isYellow} depth={12} onClick={handleClick} />
    </>
  );
}

export default App;
