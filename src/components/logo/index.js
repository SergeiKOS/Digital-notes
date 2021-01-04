import { LogoType } from "./LogoStyles";
import { Link } from "react-router-dom";

const Logo = ({ mainPage }) => {
  return <LogoType>{mainPage ? "DN" : <Link to="/">DN</Link>}</LogoType>;
};

export default Logo;
