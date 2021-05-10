import ILogo from "./ILogo.interface";
import { LogoType, LogoLink } from "./LogoStyles";
// @ts-ignore
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
