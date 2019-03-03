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
const Box = ({ depth = 0, isYellow }) => {
  return (
    <div style={isYellow ? yellow : white}>
      <Button />
      {depth > 0 ? (
        <div style={row}>
          <Box isYellow={isYellow} depth={depth - 1} />
          <Box isYellow={isYellow} depth={depth - 1} />
        </div>
      ) : null}
    </div>
  );
};
export default Box;
