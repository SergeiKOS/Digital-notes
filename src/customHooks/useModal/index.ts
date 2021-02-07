import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = (): void => {
    setVisible(!visible);
  };

  return { visible, handleVisibility };
};

export default useModal;
