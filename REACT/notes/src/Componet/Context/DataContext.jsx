import React, { useState } from 'react'
export const UseDataContext=React.createContext(null)
export default function DataContext({children}) {
  let [data,setData]=useState([])
  return (
    <UseDataContext.Provider value={{data,setData}}>
        {children}
    </UseDataContext.Provider>
  )
}
