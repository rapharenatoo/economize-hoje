import { Box, Heading } from "@gluestack-ui/themed";

type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <Box
      bg='$darkBlue800'
      w='$full'
      h='$24'
      p='$2'
      justifyContent='center'
      alignItems='center'
    >
      <Heading
        fontSize='$xl'
        fontWeight='$normal'
        color='$white'
        textAlign='center'
        pb='$2'
      >
        {title}
      </Heading>
    </Box>
  );
}
