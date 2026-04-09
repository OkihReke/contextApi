import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const context = useContext(UserContext)

  if (!context) return null;
  const { setUser } = context;
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value = {username}
        placeholder='username'
              onChange={ (e) => {setUsername(e.target.value ) } }
        />
        
        <input type="text"
        value = {password}
        placeholder='password'
              onChange={ (e) => {setPassword(e.target.value ) } }
        />
        
        <button onClick={handleSubmit}>
            submit
        </button>
          
    </div>
  )
}

export default Login