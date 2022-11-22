import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Login from "./pages/Login";
import { DataProvider } from "./context/DataContext";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Livraria" component={Home} options={{
              headerStyle: {
              backgroundColor: '#7054b6',},
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    );
}; 

export default App;