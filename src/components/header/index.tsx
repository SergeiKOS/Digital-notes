import IHeader from "./IHeader.interface";
import * as S from "./HeaderStyles";
import Logo from "../logo";
import AddCategory from "../addCategory";

const Header = ({ withButton = false, mainPage = false }: IHeader) => {
  return (
    <S.Header className="container">
      <Logo mainPage={mainPage} />
      {withButton && <AddCategory />}
    </S.Header>
  );
};

export default Header;
