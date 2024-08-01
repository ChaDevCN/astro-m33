import { fetchData } from './fetchDataAll';
import { buildHeaderMenu } from '@/utils/router';
import type { BottomContact, HomeIntroduction, ContactShare, BaseInfo, Product, SitePic, Menu } from "@/types/index"

export interface FooterData {
  bci: BottomContact
  bi: HomeIntroduction
  menu: Menu[]
  productsList: Product[]
  info: BaseInfo & SitePic
  contactShare: ContactShare
}

export const footerData = async () => {
  const {
    result: {
      data: { menu, site_pic, bottom_contact, home_introduction, contact_share, base_info },
    },
  } = await fetchData();

  const headerMenu = buildHeaderMenu(menu);
  const productsList = headerMenu.find((item) => item.type == 'products').children;

  const bi = home_introduction.length > 0 ? home_introduction[0] : null;

  const info = {
    ...(base_info.length > 0 ? base_info[0] : {}),
    ...(site_pic.length > 0 ? site_pic[0] : {}),
  };

  return {
    bci: bottom_contact.length > 0 ? bottom_contact[0] : null,
    bi,
    menu: headerMenu,
    productsList,
    info,
    contactShare: contact_share.length > 0 ? contact_share[0] : null,
  } as FooterData
};
