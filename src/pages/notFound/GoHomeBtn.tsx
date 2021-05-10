import { Link } from "react-router-dom";

import { GoHome } from "./GoHomeBtnStyles";

const GoHomeBtn = () => {
  return (
    <GoHome>
      <Link to="/">Go Back Home</Link>
    </GoHome>
  );
};

export default GoHomeBtn;
