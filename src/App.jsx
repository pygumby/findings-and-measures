// React
import { useState } from 'react'

// Custom
import LoginForm from './components/LoginForm'
import CreateFindingForm from './components/CreateFindingForm'
import UpdateFindingForm from './components/UpdateFindingForm'
import FindingsList from './components/FindingsList'
import useLocalStorage from './hooks/useLocalStorage'
import { getDateString, getTimeString } from './util/helperFunctions'

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
    <div className='container'>
      <nav className='navbar navbar-light bg-light mb-3'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img
              src='/icon.svg'
              width='30'
              height='24'
              className='d-inline-block align-text-top me-3'
            />
            Findings & Measures
          </a>
          {currentUsername && (
            <div className='navbar-text py-0'>
              <span className='me-2'>Welcome, {currentUsername}.</span>
              <button
                className='btn btn-link align-baseline p-0'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {!currentUsername && <LoginForm login={login} />}

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
            <div
              className='alert alert-primary alert-dismissible fade show'
              role='alert'
            >
              <div className='mb-2'>
                <strong>Stay in the loop!</strong> These findings have been
                updated since you last worked on them:
              </div>
              <ul className='mb-0'>
                {findingsUpdatedByAnotherUser.map((finding) => {
                  const lastUpdateUsername =
                    finding.changelog[finding.changelog.length - 1].username
                  const lastUpdateTimestamp =
                    finding.changelog[finding.changelog.length - 1].timestamp
                  return (
                    <li key={finding.id}>
                      <a href={`#${finding.id}`}>{finding.summary}</a> was last
                      updated by {lastUpdateUsername} on{' '}
                      {getDateString(lastUpdateTimestamp)} at{' '}
                      {getTimeString(lastUpdateTimestamp)}.
                    </li>
                  )
                })}
              </ul>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'
              ></button>
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

      <footer className='footer my-3'>
        <span className='text-muted'>
          Built for demonstational purposes by Lucas Konstantin Bärenfänger.
        </span>
      </footer>
    </div>
  )
}

export default App
