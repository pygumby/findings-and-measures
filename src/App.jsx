// React
import { useState } from 'react'

// Custom
import LoginForm from './components/LoginForm'
import CreateFindingForm from './components/CreateFindingForm'
import FindingsList from './components/FindingsList'

function App() {
  const [username, setUsername] = useState(null)
  const [findings, setFindings] = useState([])

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

  const createFinding = (finding) => {
    setFindings((prevState) => [...prevState, finding])
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

      {username && (
        <div>
          <CreateFindingForm
            currentUser={username}
            createFinding={createFinding}
          />
          <FindingsList findings={findings} />
        </div>
      )}
    </div>
  )
}

export default App
