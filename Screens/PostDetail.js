import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const PostDetail = ({ route }) => {

  const [post, setPost] =useState([])
  const [loading , setLoading ] =useState(true)
  const {id} = route.params
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(res => res.json())
          .then((data) => {
              setPost(data);
              setLoading(false)
          })
   
   }, []) 

  return (
    <View>
      <Text>Post Title : {post.title} Post id : {post.id}</Text>
      <Text>Post Body : {post.body} </Text>
    </View>
  )
}

export default PostDetail

const styles = StyleSheet.create({})