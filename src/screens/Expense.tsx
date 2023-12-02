import { VStack, HStack } from "@gluestack-ui/themed";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react-native";

import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { ButtonIcon } from "../components/ButtonIcon";
import { Button } from "../components/Button";

const items = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

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
        <VStack w='$full'>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <HStack justifyContent='space-between' my='$2'>
            <ButtonIcon
              text='Entrada'
              textColor='$emerald500'
              icon={ArrowUpCircle}
              iconColor='$emerald500'
              borderColor='$emerald500'
            />
            <ButtonIcon
              text='Saída'
              textColor='$red500'
              icon={ArrowDownCircle}
              iconColor='$red500'
              borderColor='$red500'
            />
          </HStack>
          <Select items={items} />
        </VStack>
        <Button text='Salvar' onPress={() => {}} />
      </VStack>
    </VStack>
  );
}
