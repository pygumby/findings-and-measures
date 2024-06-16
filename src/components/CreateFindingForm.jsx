// React
import { useState } from 'react'

const CreateFindingForm = ({ currentUsername, createFinding }) => {
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [measures, setMeasures] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const timestamp = Date.now()
    createFinding({
      id: timestamp,
      changelog: [{ timestamp, username: currentUsername }],
      summary,
      description,
      measures,
    })

    setSummary('')
    setDescription('')
    setMeasures('')
  }

  return (
    <div className='card text-center mb-3'>
      <h6 className='card-header p-3'>Create a new finding</h6>
      <div className='card-body'>
        <form onSubmit={handleFormSubmit}>
          <div className='form-floating mb-3'>
            <input
              className='form-control'
              id='floatingSummary'
              placeholder=''
              type='text'
              value={summary}
              onInput={(e) => setSummary(e.target.value)}
              required
            />
            <label htmlFor='floatingSummary'>Summary</label>
          </div>
          <div className='form-floating mb-3'>
            <textarea
              className='form-control'
              placeholder=''
              id='floatingDescription'
              value={description}
              onInput={(e) => setDescription(e.target.value)}
              required
            />
            <label htmlFor='floatingDescription'>Description</label>
          </div>
          <div className='form-floating mb-3'>
            <textarea
              className='form-control'
              placeholder=''
              id='floatingMeasures'
              value={measures}
              onInput={(e) => setMeasures(e.target.value)}
              required
            />
            <label htmlFor='floatingMeasures'>Measures</label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary' type='submit'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateFindingForm
