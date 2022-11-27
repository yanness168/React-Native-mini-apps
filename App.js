import * as React from "react";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from "./components/ContactScreen";
import HomeScreen from "./components/HomeScreen";
import FunScreen from "./components/FunScreen";

const Stack = createStackNavigator();

export default function App() {
  var options ={
    headerStyle: {backgroundColor: 'pink'},
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerTitleStyle:{fontWeight: 'bold'},
  }
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Group screenOptions={options}>
          {/* each screen needs a unique "name" to the "name" prop */}
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome to My App'}}/>
          <Stack.Screen name="Fun" component={FunScreen} options={{title: 'Some Fun Stuff'}}/>
          <Stack.Screen name="Contact" component={ContactScreen}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

