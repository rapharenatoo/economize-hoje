import { Box } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";

import { AppUserRoutes } from "./app.user.routes";

export function Routes() {
  return (
    <Box flex={1} bg='gray.800'>
      <NavigationContainer>
        <AppUserRoutes />
      </NavigationContainer>
    </Box>
  );
}
