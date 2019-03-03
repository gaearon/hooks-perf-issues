import React, { useReducer } from "react";
import Box from "./Box";
import AppContext from './AppContext';

function reducer(state, action) {
  if (action === 'toggle') {
    return !state;
  }
  throw new Error();
}

function App() {
  const [isYellow, dispatch] = useReducer(reducer, true);

  return (
    <AppContext.Provider value={dispatch}>
      <h1>App.hooks.js</h1>
      <Box isYellow={isYellow} depth={12} />
    </AppContext.Provider>
  );
}

export default App;
