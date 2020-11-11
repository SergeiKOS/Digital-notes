import { HeaderWrapper } from "./HeaderStyles";
import Logo from "../../components/logo";

const Header = () => {
  return (
    <HeaderWrapper className="container">
      <Logo />
      <button>Theme</button>
    </HeaderWrapper>
  );
};

export default Header;
