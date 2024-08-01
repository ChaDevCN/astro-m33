import { existsSync, readFileSync, writeFileSync } from 'fs';
import type { Root } from '@/types/index';
import * as  path from 'path';
import config from "../../config.yml"


const { DB: { name }, site: { baseUrl } } = config

const cachePath = path.join(process.cwd(), 'cache', 'userData.json');




export async function fetchData(): Promise<Root> {
  if (existsSync(cachePath)) {
    return JSON.parse(readFileSync(cachePath, 'utf-8'));
  }
  console.log('Fetching new data');
  const response = await fetch(`${baseUrl}/api/appapi/website/data?DynamicDbConnectName=${name}`);
  const data = await response.json();
  writeFileSync(cachePath, JSON.stringify(data), 'utf-8');
  return data
}
