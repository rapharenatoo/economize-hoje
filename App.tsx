import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { SignIn } from "./src/screens/SignIn";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
      {/* <SignIn /> */}
      {/* <Loading /> */}
    </GluestackUIProvider>
  );
}
