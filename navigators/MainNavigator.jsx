import AppNavigationContainer from "../components/AppNavigationContainer";
import { Routes } from "../misc/enums";
import TabHeaderTitle from "../components/TabHeaderTitle";
import TabbedTestScreen from "../screens/TabbedTestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useNavigationOptions from "../hooks/useNavigationOptions";

const Stack = createNativeStackNavigator();

const MainNavigator = ({ route, ...otherProps }) => {
  const initialRouteName = route?.params?.initialRouteName;
  //   if (!initialRouteName) alert("Must specify an initial route");

  const { stackNavigationOptions } = useNavigationOptions();

  return (
    // <AppNavigationContainer>
    // <Stack.Navigator
    //   screenOptions={stackNavigationOptions}
    //   initialRouteName={Routes.tab}>
    //   <Stack.Screen
    //     component={TabbedTestScreen}
    //     name={Routes.tab}
    //     options={{
    //       ...stackNavigationOptions,
    //       headerTitle: (props) => (
    //         <TabHeaderTitle title="Tab Test" {...props} />
    //       ),
    //     }}
    //   />
    // </Stack.Navigator>
    // </AppNavigationContainer>
    <TabbedTestScreen/>
  );
};

export default MainNavigator;
