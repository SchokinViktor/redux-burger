import React from "react";

import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";
import HeartIcon from "./HeartIcon";
import UahIcon from "./UahIcon";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "search":
      return <SearchIcon {...props} />;
    case "close":
      return <CloseIcon {...props} />;
    case "heart":
      return <HeartIcon {...props} />;
    case "uah":
      return <UahIcon {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;
