import React from 'react'

import { iBlogPost } from '../types/blogTypes'
import createDataContext from './createDataContext'

const blogReducer = (state: iBlogPost[], action:any) => {
	switch (action.type) {
		case 'ADD_POST':
			return [...state, {title: `Blog post #${state.length}`}]
		default:
			return [...state]
	}
}

const actions = {
	addBlogPost(dispatch: React.Dispatch<any>){
		return () => {
			dispatch({type: 'ADD_POST'})
		}
	}
}

export const { Context, Provider } = createDataContext(blogReducer, actions, [])
