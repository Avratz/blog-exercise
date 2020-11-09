import React from 'react'

import { iBlogPost } from '../types/blogTypes'
import createDataContext from './createDataContext'

const blogReducer = (state: iBlogPost[], action:any) => {
	switch (action.type) {
		case 'ADD_POST':
			const {title, content} = action.payload
			return [...state, {title, content, id: Date.now()}]
		case 'DELETE_POST':
			return state.filter(post => post.id !== action.payload)
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
	deleteBlogPost(dispatch: React.Dispatch<any>){
		return (id:number) => {
			dispatch({type: 'DELETE_POST', payload: id})
		}
	}
}

export const { Context, Provider } = createDataContext(blogReducer, actions, [])
