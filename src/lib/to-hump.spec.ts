import { toHump } from './to-hump';
describe('to-hump', () => {
  it('hello-world- to HelloWorldMinus', () => {
    expect(toHump('hello-world-')).toEqual('HelloWorldMinus');
  });
});
