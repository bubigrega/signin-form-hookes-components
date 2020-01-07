import { useState } from "react";

export default intialValue => {
  const [state, setState] = useState(intialValue);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
