import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as BlogProvider } from './src/context/BlogContext'

import Home from './src/screens/Home'
import Single from './src/screens/Single';
import CreatePost from './src/screens/Create';
import EditPost from './src/screens/Edit'

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
            <Stack.Screen
              name="Single"
              component={Single}
              options={{ title: 'Blog Post' }}
            />
            <Stack.Screen
              name="CreatePost"
              component={CreatePost}
              options={{ title: 'Create Blog Post' }}
            />
            <Stack.Screen
              name="EditPost"
              component={EditPost}
              options={{ title: 'Edit Blog Post' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    );
}