import ILogo from "./ILogo.interface";
import { LogoType, LogoLink } from "./LogoStyles";
// import { Link } from "react-router-dom";
import { ReactComponent as Logotype } from "./dn-logo.svg";

const Logo = ({ mainPage }: ILogo) => {
  return (
    <LogoType aria-label="Digital notes logo">
      {mainPage ? (
        <Logotype />
      ) : (
        <LogoLink to="/">
          <Logotype />
        </LogoLink>
      )}
    </LogoType>
  );
};

export default Logo;
