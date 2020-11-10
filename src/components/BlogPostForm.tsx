import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const BlogPostForm:React.FC<{
  onSubmit: (title:string, content:string) => void
  titleProp?:string
  contentProp?:string
}> = ({onSubmit, titleProp = '', contentProp = ''}) => {

  const [title, setTitle] = React.useState(titleProp)
  const [content, setContent] = React.useState(contentProp)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Post Title</Text>
      <TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Post Content:</Text>
      <TextInput style={styles.textInput} value={content} onChangeText={(content) => setContent(content)}/>
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>
    </View>
  )
}

export default BlogPostForm


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

