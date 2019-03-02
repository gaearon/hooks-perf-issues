import React from "react";
import Box from "./Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true
    };
  }

  handleClick = () => {
    this.setState(({ state }) => ({
      state: !state
    }));
  };

  render() {
    const state = this.state.state;
    const handleClick = this.handleClick;
    return (
      <>
        <h1>App.class.js</h1>
        <Box state={state} depth={12} onClick={handleClick} />
      </>
    );
  }
}

export default App;
