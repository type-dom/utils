// export * from './lib/type-utils';
export { mustache } from './lib/mustache';
export { toHump } from './lib/to-hump';
export const isLikelyNode = typeof Buffer !== 'undefined' && typeof window === 'undefined';
export { deepClone } from './lib/deepClone';
export { deepCopy } from './lib/deepCopy';
export { getScroll } from './lib/getScroll';
export { humpToMiddleLine } from './lib/humpToMiddleLine';
export { pxToRem } from './lib/pxToRem';
