import { BrowserRouter } from "react-router-dom";
import AppRouter from "./providers/router/ui/app.router";
import { MetaMaskContextProvider } from "../shared/hooks/use-meta-mask";

function App() {
  return (
    <>
      <BrowserRouter>
        <MetaMaskContextProvider>
          <AppRouter />
        </MetaMaskContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
