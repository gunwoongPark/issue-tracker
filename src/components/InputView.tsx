import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isBlank } from "../util/lodash";

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
      <button onClick={() => onClickSearchButton()} disabled={isBlank(input)}>
        SEARCH
      </button>
    </>
  );
};

export default InputView;
