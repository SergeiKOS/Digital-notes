import { HeaderWrapper } from "./HeaderStyles";
import Logo from "../logo";
import AddCategory from "../addCategory";

const Header = ({ withButton = false, mainPage = false }) => {
  return (
    <HeaderWrapper className="container">
      <Logo mainPage={mainPage} />
      {withButton && <AddCategory />}
    </HeaderWrapper>
  );
};

export default Header;
