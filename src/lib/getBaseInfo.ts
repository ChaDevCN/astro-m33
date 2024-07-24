import { fetchData } from './fetchDataAll'

export const getBaseInfo = async () => {
  const {
    result: {
      data: { base_info, site_pic }
    }
  } = await fetchData()
  const mergedInfo = { ...base_info[0], ...site_pic[0] }

  return Object.keys(mergedInfo).length ? mergedInfo : {}
}
