import { deepClone, deepCopy } from 'type-utils';
import { TypeNodeParser } from "../index";
import { typeNodeParser } from './type-node-parser';

describe('typeNodeParser', () => {
  const parser = new TypeNodeParser({});
  console.log('parser is ', parser);
  const htmlStr = `<div name="division" title="title"> hello </div>`
  const node = parser.parseFromString(htmlStr);
  console.log('node is ', node);
  let copyNode = deepClone(node);
  console.log('copyNode is ', copyNode)
  it('should work', () => {
    expect(typeNodeParser()).toEqual('type-node-parser');
  });
});
