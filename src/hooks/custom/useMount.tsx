import { useEffect, useRef } from "react";

const useMount = (callback: () => void) => {
  const isMount = useRef(false);

  useEffect(() => {
    if (isMount.current) {
      return;
    }

    callback();

    // eslint-disable-next-line consistent-return
    return () => {
      isMount.current = true;
    };
  }, [callback]);
};

export default useMount;
