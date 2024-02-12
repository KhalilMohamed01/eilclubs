import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {login,error,isLoading} = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(username,password)
  }


  useEffect(()=>{
    document.title = 'Eil-Clubs - Login'
  },[])
  return (
    <div className='flex h-100 align-center justify-center'>
      <div className="card login-card">
      <Link to="/">
              <h1 className='text-center'>LOGO</h1>
              </Link> 
        <form className='login-form' onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}            <label htmlFor="">Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <label htmlFor="Password">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Link className='login-span' to="/">
              <span>Forgot password ?</span>
              </Link> 
                          <button disabled={isLoading}>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
