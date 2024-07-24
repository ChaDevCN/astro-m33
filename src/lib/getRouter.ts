import { fetchData } from './fetchDataAll'
import { generatePartialRoutes } from '@/utils/router'
export const getRouter = async () => {
  const {
    result: {
      data: { menu }
    }
  } = await fetchData()
  return generatePartialRoutes(menu)
}
