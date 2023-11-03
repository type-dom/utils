// 驼峰转中划线
export function humpToMiddleLine(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}
