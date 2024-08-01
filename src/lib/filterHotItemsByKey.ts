import { fetchData } from './fetchDataAll';
import type { DataTypeMap, ResultType } from "./types";

export const filterHotItemsByKey = async <K extends keyof DataTypeMap>(key = 'products' as K): Promise<ResultType<K>> => {
  const result = await fetchData();
  const items = result.result.data[key] as DataTypeMap[K];

  const data = items.filter((item: ResultType<K>[number]) => item.labels && item.labels.includes('hot')) as ResultType<K>;

  return data.length ? data : [];
};
