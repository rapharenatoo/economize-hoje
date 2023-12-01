import { VStack, Heading, Center, ScrollView } from "@gluestack-ui/themed";

import { Card } from "./Card";

export function Listing() {
  return (
    <VStack flex={1} p='$8' pt='$5'>
      <Heading color='$darkBlue900'>Listagem</Heading>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </VStack>
  );
}
