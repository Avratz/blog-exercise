import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as BlogProvider } from './src/context/BlogContext'

import Home from './src/screens/Home'

const Stack = createStackNavigator();

export default function App() {
    return (
      <BlogProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Blog' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    );
}