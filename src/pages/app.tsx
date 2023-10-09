import { BrowserRouter } from "react-router-dom";
import { MetaMaskContextProvider } from "../shared/hooks/use-meta-mask";
import AppRouter from "./router/app.router";

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
