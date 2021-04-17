import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <React.Fragment>
      <ClipLoader color={"black"} loading={true} size={20} />
    </React.Fragment>
  );
};

export default Spinner;
