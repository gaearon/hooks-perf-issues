import React from "react";
import Button from "./Button";
const base = {
  width: "100%",
  height: "100%"
};
const yellow = {
  background: "yellow",
  ...base
};

const white = {
  background: "white",
  ...base
};
const row = {
  display: "flex",
  flexDirection: "row"
};
const Box = ({ depth = 0, state, onClick }) => {
  return (
    <div style={state ? yellow : white}>
      <Button onClick={onClick} />
      {depth > 0 ? (
        <div style={row}>
          <Box state={state} depth={depth - 1} onClick={onClick} />
          <Box state={state} depth={depth - 1} onClick={onClick} />
        </div>
      ) : null}
    </div>
  );
};
export default Box;
