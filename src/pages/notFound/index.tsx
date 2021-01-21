import { NotFoundWrapper } from "./NotFoundStyles";
import Header from "../../components/header";
//@ts-ignore
import { ReactComponent as NotFoundSVG } from "./not-found.svg";
import GoHome from "./GoHomeBtn";

const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundWrapper>
        <NotFoundSVG style={{ width: "100%" }} />
        <GoHome />
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
