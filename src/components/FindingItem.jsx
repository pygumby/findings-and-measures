// Custom
import UpdateFindingForm from './UpdateFindingForm'
import {
  getDateString,
  getTimeString,
  getInstitutionName,
} from '../util/helperFunctions'

const FindingItem = ({
  currentUsername,
  finding,
  updateFinding,
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
          {finding.title}
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
          <dl className='row mb-3'>
            <dt className='col-sm-3'>Institution</dt>
            <dd className='col-sm-9'>
              {getInstitutionName(finding.institution)}
            </dd>
            <dt className='col-sm-3'>Title</dt>
            <dd className='col-sm-9'>{finding.title}</dd>
            <dt className='col-sm-3'>Description</dt>
            <dd className='col-sm-9'>{finding.description}</dd>
            <dt className='col-sm-3'>Measures</dt>
            <dd className='col-sm-9'>{finding.measures}</dd>
            <dt className='col-sm-3 text-muted mb-0'>Changelog</dt>
            <dd className='col-sm-9 mb-0'>
              {finding.changelog
                .toSorted((a, b) => b.timestamp - a.timestamp)
                .map((change, index) => {
                  const version = finding.changelog.length - index
                  const versionPadded = ('000' + version).slice(-3)
                  return (
                    <div key={change['timestamp']}>
                      <span className='font-monospace text-muted'>
                        <button
                          className='btn btn-link link-secondary align-baseline p-0'
                          data-bs-toggle='modal'
                          data-bs-target={`#version-${finding.id}-${version}-modal`}
                        >
                          Version {versionPadded}
                        </button>
                        , {getDateString(change['timestamp'])}{' '}
                        {getTimeString(change['timestamp'])},{' '}
                        {change['username']}
                        <br />
                      </span>
                      <div
                        className='modal fade'
                        id={`version-${finding.id}-${version}-modal`}
                        tabIndex='-1'
                        aria-labelledby={`#version-${finding.id}-${version}-modal-label`}
                        aria-hidden='true'
                      >
                        <div className='modal-dialog'>
                          <div className='modal-content'>
                            <div className='modal-header'>
                              <h1
                                className='modal-title fs-5'
                                id={`version-${finding.id}-${version}-modal`}
                              >
                                Version {versionPadded}
                              </h1>
                              <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                              ></button>
                            </div>
                            <div className='modal-body'>
                              <dl className='row mb-0'>
                                <dt className='col-sm-3'>Institution</dt>
                                <dd className='col-sm-9'>
                                  {getInstitutionName(
                                    change['version'].institution
                                  )}
                                </dd>
                                <dt className='col-sm-3'>Title</dt>
                                <dd className='col-sm-9'>
                                  {change['version'].title}
                                </dd>
                                <dt className='col-sm-3'>Description</dt>
                                <dd className='col-sm-9'>
                                  {change['version'].description}
                                </dd>
                                <dt className='col-sm-3'>Measures</dt>
                                <dd className='col-sm-9'>
                                  {change['version'].measures}
                                </dd>
                              </dl>
                            </div>
                            <div className='modal-footer'>
                              <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </dd>
          </dl>
          <div className='d-grid'>
            <button
              className='btn btn-light mb-3'
              data-bs-toggle='modal'
              data-bs-target={`#update-${finding.id}-modal`}
            >
              Update
            </button>
            <button
              className='btn btn-light'
              data-bs-toggle='modal'
              data-bs-target={`#delete-${finding.id}-modal`}
            >
              Delete
            </button>
          </div>
          <UpdateFindingForm
            currentUsername={currentUsername}
            finding={finding}
            updateFinding={updateFinding}
          />
        </div>
      </div>
      <div
        className='modal fade'
        id={`delete-${finding.id}-modal`}
        tabIndex='-1'
        aria-labelledby={`delete-${finding.id}-modal-label`}
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id={`delete-${finding.id}-modal-label`}
              >
                Delete exiting finding
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p>Are you sure you want to delete this finding?</p>
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
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={() => deleteFinding(finding.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindingItem
