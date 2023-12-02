import { Platform } from "react-native";
import {
  Heading,
  Text,
  Image,
  VStack,
  Box,
} from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";

import { ButtonLogin } from "../components/ButtonLogin";

import AppIcon from "../assets/icon.png";

export function SignIn() {
  return (
    <VStack
      flex={1}
      bg='$darkBlue800'
      p='$8'
      pt='$16'
      justifyContent='space-between'
      alignItems='center'
    >
      <Image source={AppIcon} alt='Logo do App' mb='$12' w='$48' h='$32' />

      <VStack flex={1} justifyContent='space-around'>
        <Heading
          color='$white'
          fontSize='$2xl'
          fontFamily='medium'
          textAlign='center'
          marginHorizontal='$6'
          mt='$10'
          mb='$16'
        >
          Suas finanças na palma da sua mão
        </Heading>

        <Box>
          <Text
            color='$white'
            fontSize='$md'
            fontFamily='body'
            textAlign='center'
            mt='$10'
            mb='$10'
          >
            Faça seu login com {`\n`}a opção abaixo
          </Text>

          <VStack space='sm'>
            <ButtonLogin
              title='Entrar com Google'
              icon={
                <FontAwesome name='google' size={24} color='#002851' />
              }
            />
            {Platform.OS === "ios" && (
              <ButtonLogin
                title='Entrar com Apple'
                icon={
                  <FontAwesome name='apple' size={24} color='#002851' />
                }
              />
            )}
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
