import { NavigationContext } from '@react-navigation/native'
import React from 'react'

import BlogPostForm from '../components/BlogPostForm'
import { useBlog } from '../hooks/useBlog'
import { iBlogPost } from '../types/blogTypes'

const CreatePost:React.FC<{route: any}> = ({route}) => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  const navigation = React.useContext(NavigationContext)

  const addBlogPost = (title: string, content:string) => {
    if(!title || !content) return
    actions.addBlogPost(title, content)
    navigation?.navigate('Home')
  }

  return (
    <BlogPostForm onSubmit={(title: string, content:string) => addBlogPost(title, content)} />
  )
}

export default CreatePost