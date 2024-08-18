import { fetchData } from './fetchDataAll';
import { findNodeByAttribute, flattenTree } from '@/utils/utils';

import type { DataTypeMap, ResultType } from "./types";

interface Params<K> {
    glid: string
    tablename: K
}

export const getCategories = async  <K extends keyof DataTypeMap>({ glid, tablename }: Params<K>) => {
    const {
        result: {
            data: { menu },
        },
    } = await fetchData();

    const result = findNodeByAttribute(menu, 'ID', glid)



    return flattenTree(result.children).filter((item: ResultType<K>[number]) => item.type === `${tablename}detail`) as ResultType<K>;
};
