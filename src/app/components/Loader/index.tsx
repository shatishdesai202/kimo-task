import React, { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";

const override: CSSProperties = {
  width: "100vh",
  justifyContent: "center",
  height: "100vh",
  display: "flex",
  margin: "auto",
  alignItems: "center",
};

const Loader = () => {
  return (
    <div style={override}>
      <BounceLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
