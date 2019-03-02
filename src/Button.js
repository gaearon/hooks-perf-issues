import React, { memo } from "react";

const style = {
  background: "lightblue",
  width: "50%",
  height: "7.69vh"
};

export default memo(({ onClick }) => {
  let green = 0.5;
  for (let i = 0; i < 10000; i++) {
    green = (green + Math.random()) / 2;
  }
  return <div style={style} onClick={onClick} />;
});
