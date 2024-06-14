// React
import { useState } from 'react'

const CreateFindingForm = ({ currentUser, createFinding }) => {
  const [description, setDescription] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const date = Date.now()
    createFinding({
      id: date,
      createdAt: date,
      createdBy: currentUser,
      lastEditedAt: date,
      lastEditedBy: currentUser,
      description,
    })

    setDescription('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='description'>Description</label>
      <textarea
        name='description'
        value={description}
        onInput={(e) => setDescription(e.target.value)}
        required
      />
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateFindingForm
