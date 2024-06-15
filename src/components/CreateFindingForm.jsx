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
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='summary'>Summary*</label>
      <input
        type='text'
        name='summary'
        value={summary}
        onInput={(e) => setSummary(e.target.value)}
        required
      />
      <label htmlFor='description'>Description*</label>
      <textarea
        name='description'
        value={description}
        onInput={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor='measures'>Measures</label>
      <textarea
        name='measures'
        value={measures}
        onInput={(e) => setMeasures(e.target.value)}
      />
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateFindingForm
