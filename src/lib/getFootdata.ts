import { fetchData } from "./fetchDataAll";

import { buildHeaderMenu } from "@/utils/router"


export const footerData = async () => {
    const { result: { data: { menu, site_pic, bottom_contact, home_introduction, contact_share, base_info } } } = await fetchData()
    const headerMenu = buildHeaderMenu(menu)
    const productsList = headerMenu.find(
        item => item.type == "products",
    ).children;
    return {
        piclogo: site_pic[0] || '',
        bci: bottom_contact[0] || '',
        menu: headerMenu,
        productsList,
        info: {
            ... (base_info[0] || {}),
            ...(contact_share[0] || {})
        }
    }
}