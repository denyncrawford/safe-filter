import { Expression, ComplexExpression, Primative } from './Expression';
export declare type Extractor = (record: object, key: string) => any;
export declare function testExpression(expr: ComplexExpression | Primative, value: any): boolean;
export declare function matches(expression: Expression, record: any, extractor?: Extractor): boolean;
