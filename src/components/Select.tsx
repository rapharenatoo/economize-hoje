import {
  Select as SelectGlueStack,
  SelectItem,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "lucide-react-native";

type Item = {
  label: string;
  value: string;
};

type SelectProps = {
  items: Item[];
};

export function Select({ items }: SelectProps) {
  return (
    <SelectGlueStack>
      <SelectTrigger
        variant='outline'
        size='md'
        bgColor='$white'
        borderWidth='$0'
      >
        <SelectInput placeholder='Categoria' p='$2' />
        <SelectIcon mr='$3'>
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {items.map((item) => (
            <SelectItem label={item.label} value={item.value} />
          ))}
        </SelectContent>
      </SelectPortal>
    </SelectGlueStack>
  );
}
