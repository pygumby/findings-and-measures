// Custom
import FindingItem from './FindingItem'

const FindingsList = ({
  currentUsername,
  findings,
  updateFinding,
  deleteFinding,
}) => {
  return (
    <div className='card'>
      <h6 className='card-header text-center p-3'>View and update findings</h6>
      <div className='card-body'>
        {findings.length === 0 ? (
          <span className='text-muted'>No findings have been created yet.</span>
        ) : (
          <div className='accordion' id='accordionFindings'>
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
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FindingsList
