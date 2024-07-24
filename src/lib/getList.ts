import { fetchData } from './fetchDataAll'
import { flattenTree } from '@/utils/utils'

export const getList = async ({
  key = 'products',
  glid = '',
  type = 'productsdetail'
}) => {
  const {
    result: {
      data: { menu }
    }
  } = await fetchData()

  const root = menu.filter((item) => (item.type = key))

  return flattenTree(root).filter(
    (item) => item.type === type && (glid ? item.glid === glid : true)
  )
}
