import { HStack, Heading, Icon, Text, VStack } from "@gluestack-ui/themed";
import { CircleDollarSign, DollarSign } from "lucide-react-native";

export function Card() {
  return (
    <VStack w='$full' bg='$white' p='$4' mt='$3' borderRadius='$md'>
      <VStack>
        <Heading color='$darkBlue900' size='xs'>
          Desenvolvimento de site
        </Heading>
        <Text color='$emerald500' size='lg'>
          R$ 12.000,00
        </Text>
      </VStack>
      <HStack justifyContent='space-between' mt='$2'>
        <HStack justifyContent='center' alignItems='center' gap='$2'>
          <Icon as={CircleDollarSign} color='$trueGray400' size='xs' />
          <Text color='$trueGray400' size='xs'>
            Vendas
          </Text>
        </HStack>
        <Text color='$trueGray400' size='xs'>
          13/04/2020
        </Text>
      </HStack>
    </VStack>
  );
}
