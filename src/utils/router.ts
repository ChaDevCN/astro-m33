interface DataNode {
  type: string
  url: string
  children?: DataNode[]
}
/**   */
export const generatePartialRoutes = (
  data: DataNode[]
): { [key: string]: string[] } => {
  if (!data || !Array.isArray(data)) {
    return data
  }

  const result = data.reduce(
    (acc, cur) => {
      if (cur && cur.type && cur.url) {
        if (!acc[cur.type]) {
          acc[cur.type] = []
        }
        acc[cur.type].push(cur.url)
      }

      if (cur.children && cur.children.length > 1) {
        const childResult = generatePartialRoutes(cur.children)
        for (const [key, value] of Object.entries(childResult)) {
          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(...value)
        }
      }

      return acc
    },
    {} as { [key: string]: string[] }
  )

  return result
}
/**   */
export const buildHeaderMenu = (menu) => {
  const headerMenu = JSON.parse(JSON.stringify(menu))

  clearDetails(headerMenu.find((item) => item.type == 'products'))
  clearDetails(headerMenu.find((item) => item.type == 'knowledge'))
  clearDetails(headerMenu.find((item) => item.type == 'news'))

  return headerMenu
}

/**   */
export const clearDetails = (node) => {
  node.children = node.children.filter((item) => !item.type.endsWith('detail'))
  node.children.forEach((child) => clearDetails(child))
}

/**
 * 根
 * **/
