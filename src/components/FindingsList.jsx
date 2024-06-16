// Custom
import FindingItem from './FindingItem'

const FindingsList = ({
  currentUsername,
  findings,
  setFindingBeingUpdated,
  updateFinding,
  deleteFinding,
}) => {
  return (
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
            setFindingBeingUpdated={setFindingBeingUpdated}
            updateFinding={updateFinding}
            deleteFinding={deleteFinding}
          />
        ))}
    </div>
  )
}

export default FindingsList
