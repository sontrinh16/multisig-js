import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ListItem {
    id: number;
    value: string;
}
export interface OrderedList {
    data: ListItem[];
}
export declare const ListItem: {
    encode(message: ListItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListItem;
    fromJSON(object: any): ListItem;
    toJSON(message: ListItem): unknown;
    fromPartial(object: DeepPartial<ListItem>): ListItem;
};
export declare const OrderedList: {
    encode(message: OrderedList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderedList;
    fromJSON(object: any): OrderedList;
    toJSON(message: OrderedList): unknown;
    fromPartial(object: DeepPartial<OrderedList>): OrderedList;
};
