import React from "react";

import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "search":
      return <SearchIcon {...props} />;
    case "close":
      return <CloseIcon {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;
