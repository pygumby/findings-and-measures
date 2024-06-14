import { useState } from 'react'

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    login(username, password)

    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        value={username}
        onInput={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        value={password}
        onInput={(e) => setPassword(e.target.value)}
        required
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
