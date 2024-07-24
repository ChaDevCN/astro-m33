import { trim } from '@/utils/utils';
export const trimSlash = (s: string) => trim(trim(s, '/'));
export const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (paths ? '/' : '');
};
