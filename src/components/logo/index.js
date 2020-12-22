import { LogoType } from "./LogoStyles";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoType>
      <Link to="/">DN</Link>
    </LogoType>
  );
};

export default Logo;
