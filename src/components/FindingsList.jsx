// Custom
import FindingItem from './FindingItem'

const FindingsList = ({ findings }) => {
  return (
    <div>
      {findings
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((finding) => (
          <FindingItem key={finding.timestamp} finding={finding} />
        ))}
    </div>
  )
}

export default FindingsList
