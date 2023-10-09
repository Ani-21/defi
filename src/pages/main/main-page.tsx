import { useMetaMask } from "src/shared/hooks/use-meta-mask";

const MainPage = () => {
  const { hasProvider } = useMetaMask();

  return (
    <div>
      <h1>{!hasProvider ? "Please, install provider" : "Connected"}</h1>
    </div>
  );
};

export default MainPage;
