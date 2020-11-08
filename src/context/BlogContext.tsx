import React from 'react'

import { iBlogPost } from '../types/blogTypes'
import createDataContext from './createDataContext'

const blogReducer = (state: iBlogPost[], action:any) => {
	switch (action.type) {
		case 'ADD_POST':
			return [...state, {title: `Blog post #${state.length}`, id: Date.now()}]
		case 'DELETE_POST':
			return state.filter(post => post.id !== action.payload)
		default:
			return [...state]
	}
}

const actions = {
	addBlogPost(dispatch: React.Dispatch<any>){
		return () => {
			dispatch({type: 'ADD_POST'})
		}
	},
	deleteBlogPost(dispatch: React.Dispatch<any>){
		return (id:number) => {
			dispatch({type: 'DELETE_POST', payload: id})
		}
	}
}

export const { Context, Provider } = createDataContext(blogReducer, actions, [])
