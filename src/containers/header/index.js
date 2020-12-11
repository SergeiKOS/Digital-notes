import { HeaderWrapper } from "./HeaderStyles";
import AddNote from '../../components/addNote/AddNote'
import Logo from "../../components/logo";

const Header = () => {
  return (
    <HeaderWrapper className="container">
      <Logo />
      <AddNote/>
      <button>Theme</button>
    </HeaderWrapper>
  );
};

export default Header;
