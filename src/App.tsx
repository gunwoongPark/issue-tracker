import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "./components/LayoutView";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <LayoutView>
          <Routes />
        </LayoutView>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
