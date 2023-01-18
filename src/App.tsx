import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
