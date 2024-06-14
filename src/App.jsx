// React
import { useState } from 'react'

// Custom
import LoginForm from './components/LoginForm'

function App() {
  const [username, setUsername] = useState(null)

  const login = (username, password) => {
    if (username === 'Alice' && password === '1234') {
      setUsername(username)
    } else if (username === 'Bob' && password === '5678') {
      setUsername(username)
    } else {
      alert('Invalid credentials')
    }
  }

  const logout = () => {
    setUsername(null)
  }

  return (
    <div>
      <h1>Findings & Measures</h1>
      {username ? (
        <div>
          <p>Logged in as {username}.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} />
      )}
    </div>
  )
}

export default App
