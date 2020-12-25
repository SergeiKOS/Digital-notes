import { HeaderWrapper } from "./HeaderStyles";
import Logo from "../logo";
import AddCategory from "../addCategory";

const Header = ({ withButton = false }) => {
  return (
    <HeaderWrapper className="container">
      <Logo />
      {withButton && <AddCategory />}
    </HeaderWrapper>
  );
};

export default Header;
