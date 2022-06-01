import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'
import React ,{useEffect,useState} from 'react'

const Post = ({navigation}) => {

    const [post, setPost] =useState([])
    const [loading , setLoading ] =useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
              .then(res => res.json())
              .then((data) => {
                  setPost(data);
                  setLoading(false)
              })
       
       }, []) 

       const renderPost = ({item}) =>{
        return <View> 
            <TouchableOpacity onPress={() => navigation.navigate("PostDetail", {id : item.id})}>
            <Text> TITLE: {item.title} </Text>
            </TouchableOpacity>
        </View>
    }

  return (
    //slice(0,20)  ile [0,20] arasını listelemesini sağladık
    <View>
  
      <FlatList data={post.slice(0,20)} renderItem={renderPost}
      windowSize={20}
      maxToRenderPerBatch={20}
      updateCellsBatchingPeriod={20}
      />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})