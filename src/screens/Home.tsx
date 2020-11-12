import React from 'react'
import { NavigationContext } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import { useBlog } from '../hooks/useBlog'
import { iBlogPost } from '../types/blogTypes'

const Home = () => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  const navigation = React.useContext(NavigationContext)

  React.useLayoutEffect(() => {
    navigation?.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation?.navigate('CreatePost')} >
            <Feather style={styles.headerAdd} name="plus" size={24} color="black" />
          </TouchableOpacity>
        )
      }
    });
    
  }, [navigation]);


  React.useEffect(() => {
    const unsubscribe = navigation?.addListener('focus', () => {
      actions.getBlogPost()
    });

    return unsubscribe;
  },[navigation])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(state:iBlogPost) => state.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation?.navigate('Single', {id: item.id})} >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => actions.deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
  },
  headerAdd: {
    paddingRight: 15
  }
})
