import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
    /** address of client */
    from: string;
    marketId: string;
    price: string;
    expiry: Date;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {
}
export declare const MsgPostPrice: {
    encode(message: MsgPostPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPrice;
    fromJSON(object: any): MsgPostPrice;
    toJSON(message: MsgPostPrice): unknown;
    fromPartial(object: DeepPartial<MsgPostPrice>): MsgPostPrice;
};
export declare const MsgPostPriceResponse: {
    encode(_: MsgPostPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPriceResponse;
    fromJSON(_: any): MsgPostPriceResponse;
    toJSON(_: MsgPostPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgPostPriceResponse>): MsgPostPriceResponse;
};
