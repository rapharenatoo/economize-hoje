import {
  Button as ButtonGlueStack,
  IButtonProps,
  Text,
} from "@gluestack-ui/themed";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonGlueStack
      w='$full'
      h={12}
      bg={variant === "outline" ? "transparent" : "$yellow400"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor='$yellow400'
      rounded='$sm'
      $pressed-bg={variant === "outline" ? "$gray400" : "$yellow300"}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "$yellow400" : "$gray700"}
        fontFamily='heading'
        fontSize='$sm'
      >
        {title}
      </Text>
    </ButtonGlueStack>
  );
}
