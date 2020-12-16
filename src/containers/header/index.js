import { HeaderWrapper } from "./HeaderStyles";
import Logo from "../../components/logo";
import AddNote from "../../components/addNote";

const Header = () => {
  return (
    <HeaderWrapper className="container">
      <Logo />
      <AddNote />
    </HeaderWrapper>
  );
};

export default Header;
