import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useBlog } from '../hooks/useBlog'
import { iBlogPost } from '../types/blogTypes'

const Home = () => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  return (
    <View>
      <Text></Text>
      <Button title="add post" onPress={actions.addBlogPost}/>
      <FlatList
        data={state}
        keyExtractor={(state:iBlogPost) => state.title}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
