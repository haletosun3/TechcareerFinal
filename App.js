import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from './UserPosting/Screens/User'
import Post from './UserPosting/Screens/Post'
const Tab = createBottomTabNavigator();
 
const App = () => {
  return (
   <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen name='User' component={User}/>
       <Tab.Screen name='Post' component={Post} />
     </Tab.Navigator>
   </NavigationContainer>
  )
}

export default App