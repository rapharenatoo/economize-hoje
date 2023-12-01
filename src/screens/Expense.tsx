import { VStack, Text, Button } from "@gluestack-ui/themed";

import { Title } from "../components/Title";

export function Expense() {
  return (
    <VStack flex={1} bg='$amber100'>
      <Title title='Cadastro' />
      <VStack
        flex={1}
        p='$6'
        justifyContent='space-between'
        alignItems='center'
      >
        <VStack gap='$2'>

        </VStack>
        <Button bg='$emerald500' w='$full' h='$12'>
          <Text color='$white'>Salvar</Text>
        </Button>
      </VStack>
    </VStack>
  );
}
