import { fetchData } from './fetchDataAll';
import { flattenTree } from '@/utils/utils';

import type { DataTypeMap, ResultType } from "./types"



export const getList = async <K extends keyof DataTypeMap>({
  key = "products" as K,
  glid = '',
  type = 'productsdetail',
}: {
  key?: K;
  glid?: string;
  type?: string;
}) => {
  const {
    result: {
      data: { menu },
    },
  } = await fetchData();

  const root = menu.filter((item) => (item.type = key));

  return flattenTree(root).filter((item: Record<string, string>) => item.type === type && (glid ? item.glid === glid : true)) as ResultType<K>;
};
