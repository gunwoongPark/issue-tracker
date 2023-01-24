import { FormEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { isBlank } from "../../util/lodash";
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

  const onClickSearchButton = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      navigate({
        pathname: "/search",
        search: `?q=${input}&page=1&order=desc&sort=best-match`,
      });
    },
    [input, navigate],
  );

  return (
    <S.Container onSubmit={(e) => onClickSearchButton(e)}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={isBlank(input)}>
        <BiSearch color="#4d6ab6" />
      </button>
    </S.Container>
  );
};

export default InputView;

const S = {
  Container: styled.form`
    margin: 29px auto 0;
    display: flex;
    width: 100%;
    justify-content: center;

    input {
      width: 100%;
      max-width: 702px;
      height: 71px;
      border-radius: 71px;
      border: 1px solid ${({ theme }) => theme.mainTextColor};
      color: ${({ theme }) => theme.inputTextColor};
      background-color: ${({ theme }) => theme.inputBackgroundColor};
      outline: none;
      font-size: 21px;
      padding: 0 15px;
      font-family: Pretendard;

      @media (max-width: 480px) {
        height: 51px;
        border-radius: 51px;
        font-size: 16px;
      }
    }

    button {
      margin-left: 12px;
      min-width: 71px;
      width: 71px;
      height: 71px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.mainTextColor};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${({ theme }) => theme.cardBackgroundColor};
      font-size: 34px;

      @media (max-width: 480px) {
        width: 51px;
        height: 51px;
        min-width: 51px;
        margin-left: 8px;
        font-size: 24px;
      }
    }
  `,
};
