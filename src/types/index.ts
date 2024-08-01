import type { OpenGraphMedia } from '@astrolib/seo';
export interface MeteDataProps {
  metadata: {
    title: string;
    description: string;
    keywords?: string;
    images?: OpenGraphMedia[] | undefined;
  };
}

export interface Root {
  status: number
  message: string
  data: string[]
  count: number
  result: Result
}

export interface Result {
  data: Data
}

export interface Data {
  product_class_pic: string[]
  new_class: string[]
  knowledge_class: string[]
  product_pic: string[]
  news: News[]
  home_custom: string[]
  site_pic: SitePic[]
  knowledge: Knowledge[]
  home_introduction: HomeIntroduction[]
  bottom_contact: BottomContact[]
  ask_setting: string[]
  contact_share: ContactShare[]
  base_info: BaseInfo[]
  site_pic_pcbanner: SitePicPcbanner[]
  products: Product[]
  menu: Menu[]
  about_us: AboutU[]
  product_class: ProductClass[]
}

export interface SitePic {
  _id: string
  ID: string
  createTime: string
  icourl: string
  innerbanners: string[]
  logourl: string
  pcbanners: string[]
  updateTime: string
}

export interface HomeIntroduction {
  _id: string
  ID: string
  content: string
  createTime: string
  operationDes: string
  title: string
}

export interface BottomContact {
  _id: string
  ID: string
  content: string
  createTime: string
  updateTime: string
}

export interface ContactShare {
  _id: string
  ID: string
  Facebook: string
  Linkedin: string
  Twitter: string
  WhatsApp: string
  YouTuBe: string
  createTime: string
  icons: string[]
  obligateNumber1: string
  obligateNumber2: string
  shareType: string
}

export interface BaseInfo {
  _id: string
  ID: string
  QQ: string
  address: string
  brandName: string
  companyName: string
  contact: string
  copyright: string
  createTime: string
  description: string
  email: string
  email2: string
  fax: string
  keyword: string
  operateRecord: string
  phoneNumber: string
  postcode: string
  synchronousSmallLanguage: string[]
  tel: string
  title: string
}

export interface SitePicPcbanner {
  _id: string
  ID: string
  createTime: string
  glid: string
  height: number
  name: string
  sort: number
  title: string
  url: string
  width: number
  updateTime: string
  type?: string
}

export interface Product {
  _id: string
  ID: string
  glid: string
  name: string
  productDes: string
  url: string
  sort: string
  status: number
  createTime: string
  glTemps: string
  labels: string
  provider_id: string
  provider: string
  generate_type: string
  generate_type2: string
  key1: string
  key2: string
  key3: string
  key4: string
  key5: string
  ask_numbers: number
  check_name: string
  className: string
  classUrl: string
  confirm_name: string
  create_timestamp: number
  glProductIds: string
  managerids: string[]
  managers: string[]
  path: string
  public_name: string
  showPic: string
  student_name: string
  teacher_name: string
  updateTime: string
  update_timestamp: number
  productPics: ProductPic[]
}
export interface ProductPic {
  url?: string
  src?: string
}

export interface Menu {
  _id: string
  nodetype: string
  type: string
  title: string
  name: string
  url: string
  keywords: string
  description: string
  isDefault: string
  ID: string
  parentid: string
  sort: string | number
  children: Children[]
  _showChildren: boolean
  path: string
  name_ch: string
  _index?: number
  _rowKey?: string
  bannerurl?: string
  content?: string
  editortype?: string
  level?: number
  updateTime?: string
}

export interface Children {
  _id: string
  ID: string
  bannerurl: string
  content?: string
  createTime: string
  editortype: string
  level: number
  name: string
  parentid: string
  sort: string
  type: string
  url: string
  children: Children2[]
  _showChildren: boolean
  path: string
  name_ch: string
  typeDes?: string
  typePic?: string
}

export interface Children2 {
  _id: string
  ID: string
  bannerurl: string
  createTime: string
  editortype: string
  level: number
  name: string
  parentid: string
  sort: string
  type: string
  typeDes: string
  typePic: string
  url: string
  children: Children3[]
  _showChildren: boolean
  path: string
  name_ch: string
}

export interface Children3 {
  ID: string
  glid: string
  name: string
  url: string
  sort: string
  status: number
  createTime: string
  labels: string
  provider_id: string
  provider: string
  generate_type: string
  generate_type2: string
  key1: string
  key2: string
  key3: string
  key4: string
  key5: string
  ask_numbers: number
  check_name: string
  classUrl: string
  confirm_name: string
  create_timestamp: number
  managerids: string[]
  managers: string[]
  path: string
  public_name: string
  showPic: string
  student_name: string
  teacher_name: string
  updateTime: string
  update_timestamp: number
  type: string
  parentid: string
  grandId: string
  name_ch: string
}

export interface AboutU {
  _id: string
  ID: string
  content: string
  createTime: string
  operationDes: string
  title: string
}

export interface ProductClass {
  _id: string
  ID: string
  bannerurl: string
  createTime: string
  editortype: string
  level: number
  name: string
  parentid: string
  sort: string
  type: string
  typeDes: string
  typePic: string
  url: string
  children: Children4[]
  _showChildren: boolean
  path: string
  name_ch: string
}

export interface Children4 {
  _id?: string
  ID: string
  bannerurl?: string
  createTime: string
  editortype?: string
  level?: number
  name: string
  parentid: string
  sort: string
  type: string
  typeDes?: string
  typePic?: string
  url: string
  children?: Children5[]
  _showChildren?: boolean
  path: string
  name_ch: string
  glid?: string
  status?: number
  labels?: string
  provider_id?: string
  provider?: string
  generate_type?: string
  generate_type2?: string
  key1?: string
  key2?: string
  key3?: string
  key4?: string
  key5?: string
  ask_numbers?: number
  check_name?: string
  classUrl?: string
  confirm_name?: string
  create_timestamp?: number
  managerids?: string[]
  managers?: string[]
  public_name?: string
  showPic?: string
  student_name?: string
  teacher_name?: string
  updateTime?: string
  update_timestamp?: number
  grandId?: string
}

export interface Children5 {
  ID: string
  glid: string
  name: string
  url: string
  sort: string
  status: number
  createTime: string
  labels: string
  provider_id: string
  provider: string
  generate_type: string
  generate_type2: string
  key1: string
  key2: string
  key3: string
  key4: string
  key5: string
  ask_numbers: number
  check_name: string
  classUrl: string
  confirm_name: string
  create_timestamp: number
  managerids: string[]
  managers: string[]
  path: string
  public_name: string
  showPic: string
  student_name: string
  teacher_name: string
  updateTime: string
  update_timestamp: number
  type: string
  parentid: string
  grandId: string
  name_ch: string
}
export interface News {
  _id: string
  ID: string
  className: string
  content: string
  createTime: string
  glProductIds: string
  glid: string
  name: string
  path: string
  provider: string
  sort: string
  status: number
  type: string
  url: string
  description: string
  keywords: string
  title: string
  ask_numbers: number
  check_name: string
  confirm_name: string
  create_timestamp: number
  labels: string[]
  public_name: string
  student_name: string
  teacher_name: string
  updateTime: string
  update_timestamp: number
  newsPic: string
}
export interface Knowledge {
  _id: string
  ID: string
  className: string
  content: string
  createTime: string
  glKnowledgeIds: string[]
  glProductIds: string
  glid: string
  name: string
  provider: string
  provider_id: string
  publishDate: string
  sort: string
  status: number
  type: string
  url: string
  ask_numbers: number
  check_name: string
  confirm_name: string
  create_timestamp: number
  knowledgePic: string
  labels: string[]
  managerids: string[]
  managers: string[]
  path: string
  public_name: string
  student_name: string
  teacher_name: string
  updateTime: string
  update_timestamp: number
  description: string
  keywords: string
  title: string
}