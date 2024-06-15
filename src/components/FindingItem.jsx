// Custom
import { getDateString } from '../util/helperFunctions'

const FindingItem = ({
  currentUsername,
  finding,
  setFindingBeingUpdated,
  deleteFinding,
}) => {
  return (
    <div id={finding.id}>
      <ul>
        {finding.changelog.some(
          (change) => change.username === currentUsername
        ) &&
        finding.changelog[finding.changelog.length - 1].username !==
          currentUsername ? (
          <li>This finding has been updated since you last worked on it.</li>
        ) : (
          ''
        )}
        <li>Summary: {finding.summary}</li>
        <li>Description: {finding.description}</li>
        <li>Measures: {finding.measures}</li>
        <li>
          Changelog:
          <ul>
            {finding.changelog
              .toSorted((a, b) => b.timestamp - a.timestamp)
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
