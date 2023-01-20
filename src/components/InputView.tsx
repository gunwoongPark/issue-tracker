import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isBlank } from "../util/lodash";
import { BiSearch } from "react-icons/bi";

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
      const searchRepoName = searchParams.get("q");
      setInput(() => searchRepoName ?? "");
    } else {
      setInput(() => "");
    }
  }, [location.pathname, searchParams]);

  const onClickSearchButton = useCallback(() => {
    navigate({ pathname: "/search", search: `?q=${input}&page=1` });
  }, [input, navigate]);

  return (
    <S.Container>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onClickSearchButton()} disabled={isBlank(input)}>
        <BiSearch color="#4d6ab6" fontSize={34} />
      </button>
    </S.Container>
  );
};

export default InputView;

const S = {
  Container: styled.div`
    margin: 29px auto 0;
    display: flex;
    width: 818px;
    justify-content: space-between;

    input {
      width: 702px;
      height: 71px;
      border-radius: 71px;
      border: 1px solid #4d6ab6;
      outline: none;
      font-size: 21px;
      padding: 0 16px;
      font-family: Pretendard;
    }

    button {
      width: 71px;
      height: 71px;
      border-radius: 50%;
      border: 1px solid #4d6ab6;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: transparent;
    }
  `,
};
