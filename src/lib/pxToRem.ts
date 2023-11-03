export function pxToRem(str: string): string {
  // 匹配:20px或: 20px不区分大小写
  const reg = /(\:|: )+(\d)+(px)/gi;
  return str.replace(reg, function (char: string) {
    const x = char.replace(/(\:|: )/, '').replace(/px/i, '');
    return ':' + parseFloat(x) / 100 + 'rem';
  });
}
