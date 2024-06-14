// Custom
import { getDateString } from '../util/helperFunctions'

const FindingItem = ({ finding }) => {
  return (
    <ul>
      <li>Summary: {finding.summary}</li>
      <li>Description: {finding.description}</li>
      <li>Measures: {finding.measures}</li>
      <li>Timestamp: {getDateString(finding.timestamp)}</li>
      <li>Authors: {finding.authors}</li>
    </ul>
  )
}

export default FindingItem
