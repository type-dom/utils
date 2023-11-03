import {isLikelyNode} from "../index";

/**
 * 引用与非引用值 深拷贝方法
 * @param source
 */
export function deepClone<T>(source: T): T {
  if (typeof source !== 'object' || typeof source === 'function' || source === null) {
    return source;
  } else if (!isLikelyNode && source instanceof Element) {
    // avoid cloning deep images, canvases,
    return source;
  }
  let destination: T;
  if (Array.isArray(source)) {
    destination = [] as T;
  } else {
    destination = {} as T;
  }
  for (const prop in source) {
    if (Object.prototype.hasOwnProperty.call(source, prop)) {
      if (prop === 'parent' || prop === "parentNode") { // 处理自定义的虚拟dom
        destination[prop] = source[prop];
      } else {
        destination[prop] = deepClone(source[prop]);
      }
    }
  }
  return destination;
}
