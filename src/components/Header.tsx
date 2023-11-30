import { AvatarImage, ButtonIcon } from "@gluestack-ui/themed";
import {
  Avatar,
  AvatarFallbackText,
  HStack,
  Heading,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Power } from "lucide-react-native";

export function Header() {
  return (
    <HStack
      bg='$darkBlue800'
      w='$full'
      p='$8'
      justifyContent='space-between'
      alignItems='center'
    >
      <HStack flex={1}>
        <Avatar bgColor='$amber600' size='md' borderRadius='$full'>
          <AvatarFallbackText>Raphael Renato</AvatarFallbackText>
          <AvatarImage
            source={{ uri: "https://www.github.com/rapharenatoo.png" }}
            alt='Raphael Renato'
          />
        </Avatar>
        <VStack flex={1} ml='$2'>
          <Text color='$textDark100'>Olá, </Text>
          <Heading color='$textDark100'>Raphael Renato</Heading>
        </VStack>
      </HStack>
      <ButtonIcon as={Power} color='$red400' size='lg' />
    </HStack>
  );
}
