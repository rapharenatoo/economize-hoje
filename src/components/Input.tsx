import {
  FormControl,
  InputField,
  Input as InputGlueStack,
} from "@gluestack-ui/themed";

type InputProps = {
  placeholder: string;
  value?: string;
};

export function Input({ placeholder, value }: InputProps) {
  return (
    <FormControl size='md'>
      <InputGlueStack bg='$white' borderWidth='$0' mb='$2'>
        <InputField p='$2' placeholder={placeholder} value={value} />
      </InputGlueStack>
    </FormControl>
  );
}
