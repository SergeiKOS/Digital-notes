import ILogo from "./ILogo.interface";
import { LogoType } from "./LogoStyles";
import { Link } from "react-router-dom";
import { ReactComponent as Logotype } from "./dn-logo.svg";

const Logo = ({ mainPage }: ILogo) => {
  return (
    <LogoType aria-label="Digital notes logo">
      {mainPage ? (
        <Logotype />
      ) : (
        <Link to="/">
          <Logotype />
        </Link>
      )}
    </LogoType>
  );
};

export default Logo;
