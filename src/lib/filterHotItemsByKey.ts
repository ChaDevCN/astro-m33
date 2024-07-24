import { fetchData } from './fetchDataAll';
export const filterHotItemsByKey = async (key = 'products') => {
  const result = await fetchData();
  const products = result.result.data[key];
  const data = products.filter((item) => item.labels && item.labels.includes('hot'));

  return data.length ? data : [];
};
