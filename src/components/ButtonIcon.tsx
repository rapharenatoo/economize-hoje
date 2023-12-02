import {
  Button,
  ButtonIcon as ButtonIconGlueStack,
  ButtonText,
} from "@gluestack-ui/themed";
import { LucideIcon } from "lucide-react-native";

type Props = {
  text: string;
  icon: LucideIcon;
  variant?: "outline" | "solid";
  borderColor?: string;
  iconColor?: string;
  textColor?: string;
};

export function ButtonIcon({
  text,
  icon,
  variant = "outline",
  borderColor,
  iconColor,
  textColor,
}: Props) {
  return (
    <Button variant={variant} borderColor={borderColor} w='$32'>
      <ButtonIconGlueStack size='xl' as={icon} color={iconColor} mr='$2' />
      <ButtonText color={textColor} fontWeight='$normal'>
        {text}
      </ButtonText>
    </Button>
  );
}
