import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
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
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => actions.deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          )}
        }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})
