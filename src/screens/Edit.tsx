import { NavigationContext } from '@react-navigation/native'
import React from 'react'

import BlogPostForm from '../components/BlogPostForm'
import { useBlog } from '../hooks/useBlog'

import { iBlogPost } from '../types/blogTypes'

const EditPost:React.FC<{route: any}> = ({route}) => {
  const { state, actions } : {state: iBlogPost[]; actions: any} = useBlog()
  const navigation = React.useContext(NavigationContext)
  const postId = route.params.id
  const blogPost = state.find(blogPost => blogPost?.id === postId)

  const editBlogPost = (title: string, content:string) => {
    if(!title || !content) return
    actions.editBlogPost(title, content, postId)
    navigation?.goBack()
  }

  return (
    <BlogPostForm onSubmit={(title: string, content:string) => editBlogPost(title, content)} titleProp={blogPost?.title} contentProp={blogPost?.content}/>
  )
}

export default EditPost