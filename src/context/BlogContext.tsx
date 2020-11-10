import React from 'react'

import { iBlogPost } from '../types/blogTypes'
import createDataContext from './createDataContext'

const blogReducer = (state: iBlogPost[], action:any) => {
	switch (action.type) {
		case 'ADD_POST':
			{
				const {title, content} = action.payload
				return [...state, {title, content, id: Date.now()}]
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
	addBlogPost(dispatch: React.Dispatch<any>){
		return (title:string, content:string) => {
			dispatch({type: 'ADD_POST', payload: {title, content}})
		}
	},
	editBlogPost(dispatch: React.Dispatch<any>){
		return (title:string, content:string, id:string) => {
			dispatch({type: 'EDIT_POST', payload: {title, content, id}})
		}
	},
	deleteBlogPost(dispatch: React.Dispatch<any>){
		return (id:number) => {
			dispatch({type: 'DELETE_POST', payload: id})
		}
	}
}

export const { Context, Provider } = createDataContext(blogReducer, actions, [])
