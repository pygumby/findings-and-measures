// Custom
import FindingItem from './FindingItem'

const FindingsList = ({ findings, deleteFinding }) => {
  return (
    <div>
      {findings
        .sort(
          (a, b) =>
            b.changelog[b.changelog.length - 1].timestamp -
            a.changelog[b.changelog.length - 1].timestamp
        )
        .map((finding) => (
          <FindingItem
            key={finding.id}
            finding={finding}
            deleteFinding={deleteFinding}
          />
        ))}
    </div>
  )
}

export default FindingsList
