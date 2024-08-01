import { fetchData } from './fetchDataAll';
import { flattenTree } from '@/utils/utils';

export const getSblings = async <T>({ key = 'products', glid = '', ID = '' }): Promise<T> => {
    const {
        result: {
            data: { menu },
        },
    } = await fetchData();

    const root = menu.filter((item) => (item.type = key));

    const list = flattenTree(root).filter((item: Record<string, string>) => item.type === `${key}detail` && item.glid === glid);

    const index = list.findIndex((item: Record<string, string>) => item.ID === ID);
    const res: Record<string, object> = {};
    if (list[index - 1]) res.prev = list[index - 1]
    if (list[index + 1]) res.next = list[index + 1]
    return res as T;
};
