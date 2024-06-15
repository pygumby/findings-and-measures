// React
import { useState } from 'react'

const UpdateFindingForm = ({
  currentUsername,
  findingBeingUpdated,
  updateFinding,
}) => {
  const [summary, setSummary] = useState(findingBeingUpdated.summary)
  const [description, setDescription] = useState(
    findingBeingUpdated.description
  )
  const [measures, setMeasures] = useState(findingBeingUpdated.measures)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const timestamp = Date.now()
    updateFinding({
      id: findingBeingUpdated.id,
      changelog: findingBeingUpdated.changelog.concat({
        timestamp,
        username: currentUsername,
      }),
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
      <button type='submit'>Update</button>
    </form>
  )
}

export default UpdateFindingForm
