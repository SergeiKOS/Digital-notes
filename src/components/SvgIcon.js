import { IconContext } from "react-icons";

const SvgIcon = ({ color, size, children }) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      {children}
    </IconContext.Provider>
  );
};

export default SvgIcon;
