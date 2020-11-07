import React from 'react'

import { Context as BlogContext } from '../context/BlogContext'

export function useBlog() {
	return React.useContext(BlogContext)
}
