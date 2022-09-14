import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface FeeDeducted {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount: Coin;
    fee: Coin;
}
export interface InsufficientFee {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount: Coin;
    fee: Coin;
}
export declare const FeeDeducted: {
    encode(message: FeeDeducted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDeducted;
    fromJSON(object: any): FeeDeducted;
    toJSON(message: FeeDeducted): unknown;
    fromPartial(object: DeepPartial<FeeDeducted>): FeeDeducted;
};
export declare const InsufficientFee: {
    encode(message: InsufficientFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFee;
    fromJSON(object: any): InsufficientFee;
    toJSON(message: InsufficientFee): unknown;
    fromPartial(object: DeepPartial<InsufficientFee>): InsufficientFee;
};
