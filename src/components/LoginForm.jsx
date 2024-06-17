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
    <div className='card'>
      <h6 className='card-header text-center p-3'>Login</h6>
      <div className='card-body'>
        <form onSubmit={handleFormSubmit}>
          <div className='form-floating mb-3'>
            <input
              id='floatingUsername'
              className='form-control'
              placeholder=''
              type='text'
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor='floatingUsername'>User name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              id='floatingPassword'
              className='form-control'
              placeholder=''
              type='password'
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary mb-3' type='submit'>
              Login
            </button>
            <button className='btn btn-primary' type='submit' disabled>
              Login via ESCB IAM
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
