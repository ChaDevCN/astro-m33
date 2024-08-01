import type { Product, Knowledge, News } from "@/types/index"
export type DataTypeMap = {
    products: Product[];
    knowledge: Knowledge[];
    news: News[];
};
export type ResultType<K extends keyof DataTypeMap> = DataTypeMap[K];
