import { GoHome } from "./GoHomeBtnStyles";
import { Link } from "react-router-dom";

const GoHomeBtn = () => {
  return (
    <GoHome>
      <Link to="/">Go Back Home</Link>
    </GoHome>
  );
};

export default GoHomeBtn;
