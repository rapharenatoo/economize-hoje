import { VStack } from "@gluestack-ui/themed";

import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Listing } from "../components/Listing";

export function Home() {
  return (
    <VStack flex={1} bg='$amber100'>
      <VStack
        w='$full'
        bg='$darkBlue800'
        justifyContent='center'
        alignItems='center'
        pb='$6'
      >
        <Header />
        <Summary />
      </VStack>
      <VStack flex={1}>
        <Listing />
      </VStack>
    </VStack>
  );
}
