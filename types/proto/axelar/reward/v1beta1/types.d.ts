import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Pool {
    name: string;
    rewards: Pool_Reward[];
}
export interface Pool_Reward {
    validator: Uint8Array;
    coins: Coin[];
}
export interface Refund {
    payer: Uint8Array;
    fees: Coin[];
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
export declare const Pool_Reward: {
    encode(message: Pool_Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool_Reward;
    fromJSON(object: any): Pool_Reward;
    toJSON(message: Pool_Reward): unknown;
    fromPartial(object: DeepPartial<Pool_Reward>): Pool_Reward;
};
export declare const Refund: {
    encode(message: Refund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Refund;
    fromJSON(object: any): Refund;
    toJSON(message: Refund): unknown;
    fromPartial(object: DeepPartial<Refund>): Refund;
};
