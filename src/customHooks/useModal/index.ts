import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return { visible, handleVisibility };
};

export default useModal;
