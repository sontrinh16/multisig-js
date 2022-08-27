import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
    from: string;
    to: string;
    recipientOtherChain: string;
    senderOtherChain: string;
    randomNumberHash: string;
    timestamp: Long;
    amount: Coin[];
    heightSpan: Long;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
    from: string;
    swapId: string;
    randomNumber: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
    from: string;
    swapId: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {
}
export declare const MsgCreateAtomicSwap: {
    encode(message: MsgCreateAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwap;
    fromJSON(object: any): MsgCreateAtomicSwap;
    toJSON(message: MsgCreateAtomicSwap): unknown;
    fromPartial(object: DeepPartial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap;
};
export declare const MsgCreateAtomicSwapResponse: {
    encode(_: MsgCreateAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwapResponse;
    fromJSON(_: any): MsgCreateAtomicSwapResponse;
    toJSON(_: MsgCreateAtomicSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse;
};
export declare const MsgClaimAtomicSwap: {
    encode(message: MsgClaimAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwap;
    fromJSON(object: any): MsgClaimAtomicSwap;
    toJSON(message: MsgClaimAtomicSwap): unknown;
    fromPartial(object: DeepPartial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap;
};
export declare const MsgClaimAtomicSwapResponse: {
    encode(_: MsgClaimAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwapResponse;
    fromJSON(_: any): MsgClaimAtomicSwapResponse;
    toJSON(_: MsgClaimAtomicSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse;
};
export declare const MsgRefundAtomicSwap: {
    encode(message: MsgRefundAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwap;
    fromJSON(object: any): MsgRefundAtomicSwap;
    toJSON(message: MsgRefundAtomicSwap): unknown;
    fromPartial(object: DeepPartial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap;
};
export declare const MsgRefundAtomicSwapResponse: {
    encode(_: MsgRefundAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwapResponse;
    fromJSON(_: any): MsgRefundAtomicSwapResponse;
    toJSON(_: MsgRefundAtomicSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse;
};
