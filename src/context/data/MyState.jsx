import React from 'react'
import Mycontext from './myContext'
import { useState } from 'react'

const MyState = (props) => {
  const [mode, setMode] = useState("light")

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
    }
    else{
      // setMode="light"
      document.body.style.backgroundColor="white"
    }
  }

  const [loading, setLoading] = useState(false)
   
  return (
    
    <>
    <Mycontext.Provider value={{mode,toggleMode,loading,setLoading}}>
      {props.children}
    </Mycontext.Provider>
    </>
  )
}

export default MyState

