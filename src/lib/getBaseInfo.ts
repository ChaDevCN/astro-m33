import { fetchData } from "./fetchDataAll"

export const getBaseInfo = async () => {
    const { result: { data: { base_info, site_pic } } } = await fetchData()
    return { ...base_info[0], ...site_pic[0] } || {}
}