export declare type Comparable = number | Date;
export declare type Primative = string | number | boolean | Date;
export declare type ComplexExpression = {
    $not?: ComplexExpression | Primative;
    $eq?: Primative;
    $ne?: Primative;
    $gt?: Comparable;
    $lt?: Comparable;
    $gte?: Comparable;
    $lte?: Comparable;
    $in?: Primative[];
    $nin?: Primative[];
    $exists?: boolean;
    $regex?: RegExp | string;
    $elemMatch?: Expression;
};
export declare type RootExpression = {
    [key: string]: ComplexExpression | RootExpression | Primative;
};
export declare type LogicExpression = {
    $and?: Expression[];
    $or?: Expression[];
    $not?: Expression;
};
export declare type Expression = LogicExpression | RootExpression | Primative;
