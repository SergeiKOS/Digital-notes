import ILogo from "./ILogo.interface";
import { LogoType, LogoLink } from "./LogoStyles";
// @ts-ignore
import { ReactComponent as LogoSvg } from "./dn-logo.svg";

const Logo = ({ mainPage }: ILogo) => {
  return (
    <LogoType>
      {mainPage ? (
        <LogoSvg aria-label="Digital notes logo" />
      ) : (
        <LogoLink to="/">
          <LogoSvg aria-label="Digital notes logo" />
        </LogoLink>
      )}
    </LogoType>
  );
};

export default Logo;
