import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useBlog } from '../hooks/useBlog'

import { iBlogPost } from '../types/blogTypes'

const Single:React.FC<{route: any}> = ({route}) => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()

  const blogPost = state.find(blogPost => blogPost?.id === route.params.id)
  return (
    <View>
      <Text>{blogPost?.title}</Text>
      <Text>{blogPost?.content}</Text>
    </View>
  )
}

export default Single

const styles = StyleSheet.create({})
