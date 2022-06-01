import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from './Post';
import PostDetail from './PostDetail'

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{headernShown:false}}>
            <Stack.Screen name="Post" component={Post} options={{headerShown:false}} />
            <Stack.Screen name="PostDetail" component={PostDetail} options={{headerShown:false}} />
        </Stack.Navigator>
   
       
    )
}

export default UserStack