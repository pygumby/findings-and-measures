export const getDateString = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-GB')
}

export const getTimeString = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-GB')
}

const institutionName = new Map()
institutionName.set('bnp', 'BNP Paribas')
institutionName.set('deutsche', 'Deutsche Bank')
institutionName.set('hsbc', 'HSBC')
institutionName.set('ing', 'ING')
institutionName.set('santander', 'Banco Santander')

export const getInstitutionName = (institution) => {
  return institutionName.get(institution)
}
