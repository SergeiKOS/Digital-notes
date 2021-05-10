import { IconContext } from "react-icons";

import ISvgIcon from "./ISvgIcon.interface";

const SvgIcon: React.FC<ISvgIcon> = ({ color, size, children }) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      {children}
    </IconContext.Provider>
  );
};

export default SvgIcon;
