import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Icon, useToken } from "@gluestack-ui/themed";
import { BarChart4, List, PlusCircle } from "lucide-react-native";

import { Home } from "../screens/Home";
import { CategorySummary } from "../screens/CategorySummary";
import { Category } from "../screens/Category";
import { Expense } from "../screens/Expense";

type AppUserRoutesParamList = {
  home: undefined;
  expense: undefined;
  category: undefined;
  categorySummary: undefined;
};

export type AppUserRoutesNavigationProp =
  BottomTabNavigationProp<AppUserRoutesParamList>;

export function AppUserRoutes() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppUserRoutesParamList>();

  const emeraldColor = useToken("colors", "emerald500");
  const darkBlueColor = useToken("colors", "darkBlue800");

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: emeraldColor,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 50 : 96,
          paddingBottom: 4,
          paddingTop: 4,
        },
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarLabel: "Listagem",
          tabBarIcon: ({ color }) => <Icon as={List} color={color} />,
        }}
      />
      <Screen
        name='expense'
        component={Expense}
        options={{
          tabBarLabel: "Cadastrar",
          tabBarIcon: ({ color }) => <Icon as={PlusCircle} color={color} />,
        }}
      />
      <Screen
        name='categorySummary'
        component={CategorySummary}
        options={{
          tabBarLabel: "Resumo",
          tabBarIcon: ({ color }) => <Icon as={BarChart4} color={color} />,
        }}
      />
      <Screen
        name='category'
        component={Category}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
