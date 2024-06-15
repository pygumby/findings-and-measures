// Custom
import FindingItem from './FindingItem'

const FindingsList = ({
  findings,
  setFindingBeingUpdated,
  updateFinding,
  deleteFinding,
}) => {
  return (
    <div>
      {findings
        .sort(
          (a, b) =>
            b.changelog[b.changelog.length - 1].timestamp -
            a.changelog[a.changelog.length - 1].timestamp
        )
        .map((finding) => (
          <FindingItem
            key={finding.id}
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
