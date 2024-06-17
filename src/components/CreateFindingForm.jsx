// React
import { useState } from 'react'

// Custom
import { getInstitutionName } from '../util/helperFunctions'

const CreateFindingForm = ({ currentUsername, createFinding }) => {
  const [institution, setInstitution] = useState('')
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [measures, setMeasures] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const timestamp = Date.now()
    const summaryEscaped = summary.trim() === '' ? 'tbd' : summary
    const descriptionEscaped = description.trim() === '' ? 'tbd' : description
    const measuresEscaped = measures.trim() === '' ? 'tbd' : measures

    createFinding({
      id: timestamp,
      institution,
      summary: summaryEscaped,
      description: descriptionEscaped,
      measures: measuresEscaped,
      changelog: [
        {
          timestamp,
          username: currentUsername,
          version: {
            institution,
            summary: summaryEscaped,
            description: descriptionEscaped,
            measures: measuresEscaped,
          },
        },
      ],
    })

    setInstitution('')
    setSummary('')
    setDescription('')
    setMeasures('')
  }

  return (
    <div className='card text-center mb-3'>
      <h6 className='card-header p-3'>Create new finding</h6>
      <div className='card-body'>
        <form onSubmit={handleFormSubmit}>
          <select
            className='form-select mb-3'
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          >
            <option value=''>Institution</option>
            <option value='hsbc'>{getInstitutionName('hsbc')}</option>
            <option value='bnp'>{getInstitutionName('bnp')}</option>
            <option value='santander'>{getInstitutionName('santander')}</option>
            <option value='deutsche'>{getInstitutionName('deutsche')}</option>
            <option value='ing'>{getInstitutionName('ing')}</option>
          </select>
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
            />
            <label htmlFor='floatingMeasures'>Measures (optional)</label>
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
