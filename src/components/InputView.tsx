import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputView = () => {
  // navigate
  const navigate = useNavigate();

  const [input, setInput] = useState<string>("");

  const onClickSearchButton = useCallback(() => {
    navigate({ pathname: "/search", search: `?q=${input}&page=1` });
  }, [input, navigate]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onClickSearchButton()}>SEARCH</button>
    </>
  );
};

export default InputView;
