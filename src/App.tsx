import CustomToastContainer from "components/common/CustomToastContainer";
import LayoutView from "components/common/LayoutView";
import CustomThemeProvider from "context/CustomThemeProvider";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "react-query/queryClient";
import Routes from "Routes";
import { GlobalStyle } from "styles/GlobalStyle";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <GlobalStyle />
        <LayoutView>
          <Routes />
        </LayoutView>
        <CustomToastContainer />
      </CustomThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
