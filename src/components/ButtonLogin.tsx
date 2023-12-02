import { Button, Divider, ButtonIcon, ButtonText } from "@gluestack-ui/themed";

type Props = {
  title: string;
  icon: React.ReactNode;
};

export function ButtonLogin({ title, icon }: Props) {
  return (
    <Button
      size='md'
      h='$12'
      alignItems='center'
      justifyContent='space-evenly'
      backgroundColor='$emerald500'
      $pressed-bgColor='$emerald800'
    >
      <ButtonIcon size='xl'>{icon}</ButtonIcon>
      <ButtonText color='$darkBlue800'>{title}</ButtonText>
    </Button>
  );
}
