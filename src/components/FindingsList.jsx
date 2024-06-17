// Custom
import FindingItem from './FindingItem'
import { getInstitutionName } from '../util/helperFunctions'

const FindingsList = ({
  currentUsername,
  findings,
  updateFinding,
  deleteFinding,
}) => {
  return (
    <div className='card'>
      <h6 className='card-header text-center p-3'>View and update findings</h6>
      <div className='card-body pb-0'>
        {findings.length === 0 ? (
          <span className='text-muted'>No findings have been created yet.</span>
        ) : (
          Array.from(new Set(findings.map((finding) => finding.institution)))
            .toSorted()
            .map((institution) =>
              findings.filter((finding) => finding.institution === institution)
            )
            .map((findings) => {
              const institution = findings[0].institution
              const accordionId = `accordion-${institution}`
              return (
                <div key={institution}>
                  <div className='alert alert-light text-center' role='alert'>
                    {getInstitutionName(institution)}
                  </div>
                  <div
                    key={accordionId}
                    className='accordion mb-3'
                    id={accordionId}
                  >
                    {findings
                      .sort(
                        (a, b) =>
                          b.changelog[b.changelog.length - 1].timestamp -
                          a.changelog[a.changelog.length - 1].timestamp
                      )
                      .map((finding) => (
                        <FindingItem
                          key={finding.id}
                          currentUsername={currentUsername}
                          finding={finding}
                          updateFinding={updateFinding}
                          deleteFinding={deleteFinding}
                          accordionId={accordionId}
                        />
                      ))}
                  </div>
                </div>
              )
            })
        )}
      </div>
    </div>
  )
}

export default FindingsList
