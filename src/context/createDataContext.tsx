import React from 'react'

export default (reducer:any, actions:any, initialState:any)  => {
  
  const Context = React.createContext(initialState)

  const Provider = ({children}:{children:React.ReactNode}) => {
  
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const boundActions:any = {}

    Object.keys(actions).map(key => {
      boundActions[key] = actions[key](dispatch)
    })

    return <Context.Provider value={{state, actions: boundActions}}>{children}</Context.Provider>
  }

  return { Context, Provider }
}
