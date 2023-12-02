import {
  Button as ButtonGlueStack,
  Text,
} from "@gluestack-ui/themed";

type Props = {
  text: string;
  variant?: "solid" | "outline";
  onPress: () => void;
};

export function Button({ text, variant = "solid", onPress, ...rest }: Props) {
  return (
    <ButtonGlueStack
      bg='$emerald500'
      w='$full'
      h='$12'
      variant={variant}
      onPress={onPress}
      {...rest}
    >
      <Text color='$white'>{text}</Text>
    </ButtonGlueStack>
  );
}
