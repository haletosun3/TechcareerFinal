import { StyleSheet, Text, View } from 'react-native'
import React , {useState, useEffect}from 'react'

const UserDetail = ({ route }) => {
  const {id} = route.params
  const [user, setUser] =useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
          .then(res => res.json())
          .then((data) => {
              setUser(data);
          })
   
   }, []) 

   

  return (
    <View style={{flex:1}}>
      <Text>ID:{user.id} Username: {user.username} Name: {user.name} </Text>
    </View>
  )
}

export default UserDetail

const styles = StyleSheet.create({})