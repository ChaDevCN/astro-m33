import { fetchData } from './fetchDataAll';

import { buildHeaderMenu } from '@/utils/router';

import type { Menu } from "@/types/index";

export const getMenu = async () => {
  const {
    result: {
      data: { menu },
    },
  } = await fetchData();
  const nextMenu = buildHeaderMenu(menu) as Menu[];
  return nextMenu.length ? nextMenu : [];
};
