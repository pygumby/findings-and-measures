// Custom
import { getDateString, getTimeString } from '../util/helperFunctions'

const FindingItem = ({
  currentUsername,
  finding,
  setFindingBeingUpdated,
  deleteFinding,
}) => {
  return (
    <div className='accordion-item' id={finding.id}>
      <h2 className='accordion-header' id={`heading-${finding.id}`}>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#collapse-${finding.id}`}
          aria-expanded='false'
          aria-controls={`collapse-${finding.id}`}
        >
          {finding.summary}
          {finding.changelog.some(
            (change) => change.username === currentUsername
          ) &&
          finding.changelog[finding.changelog.length - 1].username !==
            currentUsername ? (
            <span className='badge bg-primary ms-2'>Updated</span>
          ) : (
            ''
          )}
        </button>
      </h2>
      <div
        id={`collapse-${finding.id}`}
        className={'accordion-collapse collapse'}
        aria-labelledby={`heading-${finding.id}`}
        data-bs-parent='#accordionFindings'
      >
        <div className='accordion-body'>
          <dl className='row mb-0'>
            <dt className='col-sm-3'>Summary</dt>
            <dd className='col-sm-9'>{finding.summary}</dd>
            <dt className='col-sm-3'>Description</dt>
            <dd className='col-sm-9'>{finding.description}</dd>
            <dt className='col-sm-3'>Measures</dt>
            <dd className='col-sm-9'>{finding.measures}</dd>
            <dt className='col-sm-3'>Changelog</dt>
            <dd className='col-sm-9'>
              <ul>
                {finding.changelog
                  .toSorted((a, b) => b.timestamp - a.timestamp)
                  .map((change) => (
                    <li key={change['timestamp']}>
                      {getDateString(change['timestamp'])}{' '}
                      {getTimeString(change['timestamp'])}, {change['username']}
                    </li>
                  ))}
              </ul>
            </dd>
          </dl>
          <div className='d-grid'>
            <button
              className='btn btn-light mb-2'
              onClick={() => setFindingBeingUpdated(finding)}
            >
              Update
            </button>
            <button
              className='btn btn-light mb-2'
              onClick={() => deleteFinding(finding.id)}
            >
              Delete
            </button>
            <button className='btn btn-light mb-2' disabled>
              Download .docx
            </button>
            <button className='btn btn-light' disabled>
              Send .docx to DARWIN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindingItem
