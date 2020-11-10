import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useBlog } from '../hooks/useBlog'
import { FontAwesome } from '@expo/vector-icons';
import { iBlogPost } from '../types/blogTypes'

const Single:React.FC<{route: any}> = ({route}) => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  const navigation = React.useContext(NavigationContext)

  const blogPost = state.find(blogPost => blogPost?.id === route.params.id)

  React.useLayoutEffect(() => {
    navigation?.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation?.navigate('EditPost', {id: route.params.id})} >
            <FontAwesome style={styles.headerEdit} name="pencil" size={24} color="black" />
          </TouchableOpacity>
        )
      }
    });
  }, [navigation]);

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{blogPost?.title}</Text>
      <Text>{blogPost?.content}</Text>
    </View>
  )
}

export default Single

const styles = StyleSheet.create({
  row:{
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    paddingBottom: 15
  },
  icon: {
    fontSize: 24
  },
  headerEdit: {
    paddingRight: 15
  }
})

