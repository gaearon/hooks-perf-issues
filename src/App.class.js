import React from "react";
import Box from "./Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isYellow: true
    };
  }

  handleClick = () => {
    this.setState(({ isYellow }) => ({
      isYellow: !isYellow
    }));
  };

  render() {
    const isYellow = this.state.isYellow;
    const handleClick = this.handleClick;
    return (
      <>
        <h1>App.class.js</h1>
        <Box isYellow={isYellow} depth={12} onClick={handleClick} />
      </>
    );
  }
}

export default App;
