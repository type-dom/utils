/**
 * hello-world- to HelloWorldMinus
 * @param str 字符串
 * @param separator 分割符(默认"-")
 * @param topIsCapital 开头是否大写(默认是)
 */
export function toHump(str: string, separator = '-', topIsCapital = true) {
  if (str.endsWith(separator)) {
    // 最后是减号的处理
    str = str + 'minus';
  }
  const strArray = str.split(separator);
  return strArray
    .map((item: string, index: number) => {
      if (!topIsCapital && index === 0) return item;
      if (item.match(/^./) ) {
        return item.replace(/^./, function(match) {
          return match.toUpperCase();
        });
      }
      return item;
    })
    .join('');
}
