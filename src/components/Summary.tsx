import { Center, HStack, Text, VStack, Heading } from "@gluestack-ui/themed";

export function Summary() {
  return (
    <VStack
      bg='$darkBlue700'
      justifyContent='center'
      alignItems='center'
      borderRadius='$md'
      w='$4/5'
      py='$4'
      shadowColor='$darkBlue600'
      shadowOffset={{ width: 0, height: 8 }}
    >
      <Text color='$textDark100' size='sm' fontWeight='bold'>
        Saldo
      </Text>
      <Heading color='$textDark100' size='xl'>
        R$ 16.141,00
      </Heading>
      <HStack w='$full' justifyContent='space-around' alignItems='center' mt='$2'>
        <VStack justifyContent="center" alignItems="center">
          <Text color='$emerald500' size='sm' fontWeight='bold'>
            Entrada
          </Text>
          <Text color='$emerald500' size='lg' fontWeight='bold'>
            R$ 2.500,00
          </Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center">
          <Text color='$red600' size='sm' >
            Saída
          </Text>
          <Text color='$red600' size='lg'>
            R$ - 1.250,00
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
