
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const cachePath = path.join(process.cwd(), 'cache', 'userData.json');

const { BASE_URL, DB_NAME } = import.meta.env

export async function fetchData() {
    if (existsSync(cachePath)) {
        return JSON.parse(readFileSync(cachePath, 'utf-8'));
    }
    console.log('Fetching new data');
    const response = await fetch(`${BASE_URL}/api/appapi/website/data?DynamicDbConnectName=${DB_NAME}`);
    const data = await response.json();
    writeFileSync(cachePath, JSON.stringify(data), 'utf-8');
    return data;
}
