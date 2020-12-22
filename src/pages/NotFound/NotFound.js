import { ReactComponent as NotFoundSVG } from "./not-found.svg";
import {NotFoundWrapper} from './NotFoundStyles'
import GoHome from './GoHomeBtn'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundSVG style={{width: '100%'}} />
      <GoHome/>
    </NotFoundWrapper>
  );
};

export default NotFound;
