import { fetchData } from './fetchDataAll';
import type { SitePic, BaseInfo } from "@/types/index"

export const getBaseInfo = async () => {
  const {
    result: {
      data: { base_info, site_pic },
    },
  } = await fetchData();
  return { ...base_info[0], ...site_pic[0] } as SitePic & BaseInfo;
};
