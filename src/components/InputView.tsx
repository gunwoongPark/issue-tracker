import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { isBlank } from "../util/lodash";

const InputView = () => {
  // navigate
  const navigate = useNavigate();

  // location
  const location = useLocation();

  // query string
  const searchParams = useSearchParams()[0];

  // state
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/search") {
      const searchReposName = searchParams.get("q");
      setInput(() => searchReposName ?? "");
    }
  }, [location.pathname, searchParams]);

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
