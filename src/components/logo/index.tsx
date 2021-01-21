import ILogo from "./ILogo.interface";
import { LogoType } from "./LogoStyles";
import { Link } from "react-router-dom";

const Logo: React.FC<ILogo> = ({ mainPage }) => {
  return (
    <LogoType aria-label="Digital notes logo">
      {mainPage ? "DN" : <Link to="/">DN</Link>}
    </LogoType>
  );
};

export default Logo;
