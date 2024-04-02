import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function App() {
  const { address } = useAccount();
  return (
    <div className="App">
      <ConnectButton />
      Hi {address}
    </div>
  );
}

export default App;
