import React from 'react'
import jsonServer from '../api/jsonServer'

import { iBlogPost } from '../types/blogTypes'
import createDataContext from './createDataContext'

const blogReducer = (state: iBlogPost[], action:any) => {
	switch (action.type) {
		case 'GET_POSTS':
			{
				return action.payload
			}
		case 'DELETE_POST':
			return state.filter(post => post.id !== action.payload)
		case 'EDIT_POST':
			{
				const {title, content, id} = action.payload
				const post = state.find(post => post.id === id)
				if(post){
					post.title = title
					post.content = content
				}
	
				return [...state]
			}
		default:
			return [...state]
	}
}

const actions = {
	getBlogPost(dispatch: React.Dispatch<any>){
		return async () => {
			try{
				const {data: payload} = await jsonServer.get('/posts')
				dispatch({type: 'GET_POSTS', payload })
			} catch(err){
					console.error(err)
			}
		}
	},
	addBlogPost(dispatch: React.Dispatch<any>){
		return async (title:string, content:string) => {
			try{
				await jsonServer.post('/posts', {title, content})
			} catch(err){
				console.error(err)
			}
		}
	},
	editBlogPost(dispatch: React.Dispatch<any>){
		return async (title:string, content:string, id:string) => {
			try{
				await jsonServer.put(`/posts/${id}`, {title, content})
				dispatch({type: 'EDIT_POST', payload: {title, content, id}})
			} catch(err){
				console.error(err)
			}
		}
	},
	deleteBlogPost(dispatch: React.Dispatch<any>){
		return async (id:number) => {
			try{
				await jsonServer.delete(`/posts/${id}`)
				dispatch({type: 'DELETE_POST', payload: id})
			} catch(err){
				console.error(err)
			}
		}
	}
}

export const { Context, Provider } = createDataContext(blogReducer, actions, [])
