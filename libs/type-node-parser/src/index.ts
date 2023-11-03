export { TypeNodeParser } from './type-node-parser';

export interface IParserParam {
  hasAttributes?: boolean,
  lowerCaseName?: boolean,
}
export interface INodeAttr {
  name: string,
  value: string;
}
export interface IContent {
  name: string,
  attributes: INodeAttr[], // ToDo 为什么用数组方式，而不是键值对？？？？
  parsed: number,
}
export interface IInstruction {
  name: string,
  value: string,
  parsed: number,
}
export function isWhitespace(s: string, index: number): boolean {
  const ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}
export function isWhitespaceString(s: string): boolean {
  for (let i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}

export const XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10,
};
