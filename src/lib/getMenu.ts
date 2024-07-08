import { fetchData } from "./fetchDataAll"


export const getMenu = async () => {
    const { result: { data: { menu } } } = await fetchData()
    return menu || []
}