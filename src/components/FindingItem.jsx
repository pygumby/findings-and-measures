// Custom
import { getDateString } from '../util/helperFunctions'

const FindingItem = ({ finding, deleteFinding }) => {
  return (
    <div>
      <ul>
        <li>Summary: {finding.summary}</li>
        <li>Description: {finding.description}</li>
        <li>Measures: {finding.measures}</li>
        <li>
          Changelog:
          <ul>
            {finding.changelog.map((change) => (
              <li key={change['timestamp']}>
                {getDateString(change['timestamp'])}, {change['username']}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button onClick={() => deleteFinding(finding.id)}>Delete</button>
    </div>
  )
}

export default FindingItem
