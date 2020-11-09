import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useBlog } from '../hooks/useBlog'

import { iBlogPost } from '../types/blogTypes'

const CreatePost:React.FC<{route: any}> = ({route}) => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  const navigation = React.useContext(NavigationContext)

  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const addBlogPost = () => {
    if(!title || !content) return
    actions.addBlogPost(title, content)
    setTitle('')
    setContent('')
    navigation?.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Post Title</Text>
      <TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Post Content:</Text>
      <TextInput style={styles.textInput} value={content} onChangeText={(content) => setContent(content)}/>
      <Button title="Add Blog Post" onPress={addBlogPost} />
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  container: {
    margin:15
  },
  textInput:{
    padding:5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 15
  },
  label:{
    marginBottom: 7,
    fontSize: 20
  }

})
