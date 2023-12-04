import {
  FormControl,
  InputField,
  Input as InputGlueStack,
} from "@gluestack-ui/themed";

type InputProps = {
  placeholder: string;
  value?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
};

export function Input({
  placeholder,
  value,
  isReadOnly = false,
  isDisabled = false,
}: InputProps) {
  return (
    <FormControl size='md'>
      <InputGlueStack
        bg='$white'
        borderWidth='$0'
        w='$full'
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
      >
        <InputField p='$2' placeholder={placeholder} value={value} />
      </InputGlueStack>
    </FormControl>
  );
}
