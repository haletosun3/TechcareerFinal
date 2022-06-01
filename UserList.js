import { StyleSheet, Text,Pressable, ActivityIndicator ,FlatList, SafeAreaView, View} from 'react-native'
import React ,{useState, useEffect} from 'react'


const User = ({navigation}) => {
 const [user, setUsers] =useState([])
 const [loading , setLoading ] =useState(true)

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
            setUsers(data);
            setLoading(false)
        })
 
 }, []) //uygulama render edildiğinde 1 kere calısacak
 const renderUser = ({item}) => {
  return <Pressable style={styles.btn} onPress={()=> navigation.navigate("User Detail", {id: item.id})}> 
      <Text style={styles.title}> {item.name} - {item.username} </Text>
  </Pressable>
 }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={user}
      renderItem={renderUser}/>
    </SafeAreaView>
  )
}

export default User

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:3
  },
 btn:{
  borderWidth:0.4,
  margin:5,
  borderRadius:4
 },
  title:{
    fontSize:20,
    fontWeight:'300',
  }
})