// React
import { useState } from 'react'

// Custom
import LoginForm from './components/LoginForm'
import CreateFindingForm from './components/CreateFindingForm'
import UpdateFindingForm from './components/UpdateFindingForm'
import FindingsList from './components/FindingsList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [findings, setFindings] = useLocalStorage(
    'findings-and-measures.findings',
    []
  )

  const [currentUsername, setCurrentUsername] = useState(null)
  const [findingBeingUpdated, setFindingBeingUpdated] = useState(null)

  const login = (username, password) => {
    if (username === 'Alice' && password === '1234') {
      setCurrentUsername(username)
    } else if (username === 'Bob' && password === '5678') {
      setCurrentUsername(username)
    } else {
      alert('Invalid credentials')
    }
  }

  const logout = () => {
    setCurrentUsername(null)
  }

  const createFinding = (finding) => {
    setFindings((prevState) => [...prevState, finding])
  }

  const updateFinding = (updatedFinding) => {
    setFindings((prevState) =>
      prevState.map((finding) => {
        if (finding.id === updatedFinding.id) {
          return updatedFinding
        } else {
          return finding
        }
      })
    )

    setFindingBeingUpdated(null)
  }

  const deleteFinding = (id) => {
    setFindings((prevState) => prevState.filter((finding) => finding.id !== id))
  }

  const findingsUpdatedByAnotherUser = findings.filter((finding) => {
    const changelog = finding.changelog
    return (
      changelog.some((change) => change.username === currentUsername) &&
      changelog[changelog.length - 1].username !== currentUsername
    )
  })

  return (
    <div>
      <h1>Findings & Measures</h1>

      {currentUsername ? (
        <div>
          <p>Logged in as {currentUsername}.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} />
      )}

      {currentUsername && (
        <div>
          <CreateFindingForm
            currentUsername={currentUsername}
            createFinding={createFinding}
          />

          {findingBeingUpdated && (
            <UpdateFindingForm
              currentUsername={currentUsername}
              findingBeingUpdated={findingBeingUpdated}
              updateFinding={updateFinding}
            />
          )}

          {findingsUpdatedByAnotherUser.length > 0 && (
            <div>
              <p>
                The following findings have been updated since you last worked
                on them:
              </p>
              <ul>
                {findingsUpdatedByAnotherUser.map((finding) => (
                  <li key={finding.id}>
                    <a href={`#${finding.id}`}>{finding.summary}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <FindingsList
            currentUsername={currentUsername}
            findings={findings}
            setFindingBeingUpdated={setFindingBeingUpdated}
            updateFinding={updateFinding}
            deleteFinding={deleteFinding}
          />
        </div>
      )}
    </div>
  )
}

export default App
