import { fetchData } from './fetchDataAll';

import { buildHeaderMenu } from '@/utils/router';

export const getMenu = async () => {
  const {
    result: {
      data: { menu },
    },
  } = await fetchData();
  const nextMenu = buildHeaderMenu(menu);
  return nextMenu || [];
};
