// Custom
import { getDateString } from '../util/helperFunctions'

const FindingItem = ({ finding, setFindingBeingUpdated, deleteFinding }) => {
  return (
    <div>
      <ul>
        <li>Summary: {finding.summary}</li>
        <li>Description: {finding.description}</li>
        <li>Measures: {finding.measures}</li>
        <li>
          Changelog:
          <ul>
            {finding.changelog
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((change) => (
                <li key={change['timestamp']}>
                  {getDateString(change['timestamp'])}, {change['username']}
                </li>
              ))}
          </ul>
        </li>
      </ul>
      <button onClick={() => setFindingBeingUpdated(finding)}>Update</button>
      <button onClick={() => deleteFinding(finding.id)}>Delete</button>
    </div>
  )
}

export default FindingItem
