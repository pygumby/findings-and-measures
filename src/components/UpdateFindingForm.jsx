// React
import { useState } from 'react'

// Custom
import { getInstitutionName } from '../util/helperFunctions'

const UpdateFindingForm = ({ currentUsername, finding, updateFinding }) => {
  const [institution, setInstitution] = useState(finding.institution)
  const [summary, setSummary] = useState(finding.summary)
  const [description, setDescription] = useState(finding.description)
  const [measures, setMeasures] = useState(finding.measures)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const timestamp = Date.now()
    const summaryEscaped = summary.trim() === '' ? 'tbd' : summary
    const descriptionEscaped = description.trim() === '' ? 'tbd' : description
    const measuresEscaped = measures.trim() === '' ? 'tbd' : measures

    updateFinding({
      id: finding.id,
      institution,
      summary: summaryEscaped,
      description: descriptionEscaped,
      measures: measuresEscaped,
      changelog: [
        ...finding.changelog,
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
  }

  const handleFormReset = (e) => {
    e.preventDefault()

    setSummary(finding.summary)
    setDescription(finding.description)
    setMeasures(finding.measures)
  }

  return (
    <div
      className='modal fade'
      id={`update-${finding.id}-modal`}
      tabIndex='-1'
      aria-labelledby={`update-${finding.id}-modal-label`}
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <form onSubmit={handleFormSubmit}>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id={`update-${finding.id}-modal-label`}
              >
                Update existing finding
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <select
                className='form-select mb-3'
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
              >
                <option value=''>Institution</option>
                <option value='hsbc'>{getInstitutionName('hsbc')}</option>
                <option value='bnp'>{getInstitutionName('bnp')}</option>
                <option value='santander'>
                  {getInstitutionName('santander')}
                </option>
                <option value='deutsche'>
                  {getInstitutionName('deutsche')}
                </option>
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
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={handleFormReset}
              >
                Reset
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                data-bs-dismiss='modal'
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateFindingForm
