module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "react/prop-types": 0,
    // alert 사용 가능
    "no-alert": 0,
    // props spread 연산자 가능
    "react/jsx-props-no-spreading": 0,
    // <></> 사용 가능
    "react/jsx-no-useless-fragment": 0,
    // 블록 스코프 내 비어있는 부분 허용
    "no-empty": 0,
    // 증감 연산자 허용
    "no-plusplus": 0,
    "import/order": 0,
    // 상대 경로 사용 가능
    "import/no-unresolved": 0,
    "import/extensions": 0,
    // 객체 문자열 접근
    "dot-notation": 0,
    // props destructuring 제한
    "react/destructuring-assignment": 0,
    // dangerous html 허용
    "react/no-danger": 0,
    // console 허용
    "no-console": 0,
    // import 순서
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // require문 허용
    "@typescript-eslint/no-var-requires": "error",
    // var 사용 금지
    "no-var": 1,
    // 파일 내 중복 식별자 가능
    "no-shadow": 0,
    // devDependencies 접근 허용
    "import/no-extraneous-dependencies": 0,
    // 선언 전 활용 가능 (styled-components)
    "no-use-before-define": 0,
    // react : key에 index 사용 허용
    "react/no-array-index-key": 0,
    // button type 설정 필수 해제
    "react/button-has-type": 0,
    // export default 필수 해제
    "import/prefer-default-export": 0,
    // 파라미터 재할당 허용
    "no-param-reassign": 0,
    // 자식 요소가 없는 태그 self-closing 해제
    "jsx-a11y/no-static-element-interactions": 0,
    // 불필요한 onKey... 이벤트 규약 해제
    "jsx-a11y/click-events-have-key-events": 0,
    // 비트 연산자 허용
    "no-bitwise": 0,
    // 모든 요소에 이벤트 적용 가능
    "jsx-a11y/no-noninteractive-element-interactions": 0,
  },
};
