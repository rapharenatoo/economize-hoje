import { useState } from "react";
import {
  VStack,
  HStack,
  ButtonIcon as ButtonIconGS,
  Button as ButtonGS,
  Input as InputGlueStack,
  InputField,
  ScrollView,
} from "@gluestack-ui/themed";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  CalendarDays,
} from "lucide-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <VStack flex={1} bg='$amber100'>
      <Title title='Cadastro' />
      <ScrollView
        flex={1}
        p='$6'
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <VStack w='$full' gap={8} pb='$4'>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <HStack justifyContent='space-between'>
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
          <HStack gap='$2' alignItems='center'>
            <ButtonGS
              onPress={() => setShow(!show)}
              bg='$darkBlue800'
              borderRadius='$sm'
            >
              <ButtonIconGS as={CalendarDays} />
            </ButtonGS>
            <InputGlueStack bg='$white' w={246} borderWidth='$0' isReadOnly>
              <InputField
                p='$2'
                placeholder='Data'
                value={date.toLocaleDateString("pt-BR")}
              />
            </InputGlueStack>

            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode='date'
                display='spinner'
                minimumDate={new Date(2020, 0, 1)}
                onChange={onChange}
              />
            )}
          </HStack>
        </VStack>
        <Button text='Salvar' onPress={() => {}} />
      </ScrollView>
    </VStack>
  );
}
