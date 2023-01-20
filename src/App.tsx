import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "./components/LayoutView";
import CustomThemeProvider from "./context/CustomThemeProvider";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <GlobalStyle />
          <LayoutView>
            <Routes />
          </LayoutView>
        </CustomThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
