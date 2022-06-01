import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList'
import UserDetail from './UserDetail';


const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{headernShown:false}}>
            <Stack.Screen name="UserList" component={UserList} options={{headerShown:false}} />
            <Stack.Screen name="User Detail" component={UserDetail} options={{headerShown:false}} />
        </Stack.Navigator>
   
       
    )
}

export default UserStack