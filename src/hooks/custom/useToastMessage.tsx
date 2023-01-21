import { useEffect, useState } from "react";

const useToastMessage = () => {
  const [isToastMessage, setIsToastMessage] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => setIsToastMessage((prevState) => prevState && false),
      1500
    );
    return () => clearTimeout(timeout);
  }, [isToastMessage]);

  return { isToastMessage, setIsToastMessage };
};

export default useToastMessage;
