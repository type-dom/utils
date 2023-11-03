import { typeUtils, add } from './type-utils';

describe('typeUtils', () => {
  it('should work', () => {
    expect(typeUtils()).toEqual('type-utils');
  });
});

describe('add(1+1)', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
