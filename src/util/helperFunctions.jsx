export const getDateString = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-GB')
}

export const getTimeString = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-GB')
}

const institutionName = new Map()
institutionName.set('hsbc', 'HSBC')
institutionName.set('bnp', 'BNP Paribas')
institutionName.set('santander', 'Banco Santander')
institutionName.set('deutsche', 'Deutsche Bank')
institutionName.set('ing', 'ING')

export const getInstitutionName = (institution) => {
  return institutionName.get(institution)
}
