import fs from 'fs';
import path from 'path';

const cachePath = path.join(process.cwd(), 'cache', 'userData.json');

if (fs.existsSync(cachePath)) {
  fs.unlinkSync(cachePath);
  console.log('Cache file deleted');
} else {
  console.log('No cache file to delete');
}
