export const isWalletConnected = async () => {
  const { ethereum } = window;
  let accounts;

  console.log("accounts: ", accounts);
  try {
    accounts = await ethereum.request({ method: "eth_accounts" });
  } catch (err) {
    console.log(err);
  }
  return accounts;
};
