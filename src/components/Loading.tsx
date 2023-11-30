import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} bg="$darkBlue800">
      <Spinner color="$emerald500" size={32}/>
    </Center>
  );
}