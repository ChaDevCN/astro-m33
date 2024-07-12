
const { SITE_URL } = import.meta.env

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};


export const formatDate = dateString => {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${month} ${day} ${year}`;
  return formattedDate;
};


/**
 * 查找具有指定属性和值的节点
 * 
 * @param {Array} nodes - 待搜索的节点数组，整个树的顶层或任何子节点数组
 * @param {String} attribute - 要搜索的属性名
 * @param {*} value - 与属性相匹配的值
 * @returns {Object|null} 返回找到的第一个节点对象，如果没有找到则返回 null
 */
export const findNodeByAttribute = (nodes, attribute, value) => {
  for (const node of nodes) {
    if (node[attribute] === value) {
      return node;
    }
    if (node.children && node.children.length > 0) {
      const found = findNodeByAttribute(node.children, attribute, value);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

/**
 * @param {Array} nodes - 树形结构的数组，每个元素都可能包含一个 children 属性，其中存储其子节点。
 * @returns {Array} 返回一个包含所有节点的扁平数组，每个节点都不含 children 属性。
 */
export const flattenTree = (nodes) => {
  let result: any = []; // 初始化结果数组

  /**
   * 递归遍历树形数据结构的函数。
   * @param {Array} currentNodes - 当前遍历到的节点数组。
   */
  function traverse(currentNodes) {
    currentNodes.forEach(node => {
      // 提取除 children 外的节点属性
      const { children, ...nodeWithoutChildren } = node;

      // 将处理后的节点添加到结果数组中
      result.push(nodeWithoutChildren);

      // 如果存在子节点，递归调用本函数继续遍历子节点
      if (children && children.length > 0) {
        traverse(children);
      }
    });
  }

  // 从根节点开始遍历整个树
  traverse(nodes);
  return result;
}
/** **/
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE_URL));
  if (path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};