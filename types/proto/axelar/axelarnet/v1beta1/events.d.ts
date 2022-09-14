import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface IBCTransferSent {
    id: Long;
    receipient: string;
    asset: Coin;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferCompleted {
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferFailed {
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferRetried {
    id: Long;
    receipient: string;
    asset: Coin;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface AxelarTransferCompleted {
    id: Long;
    receipient: string;
    asset: Coin;
}
export interface FeeCollected {
    collector: Uint8Array;
    fee: Coin;
}
export declare const IBCTransferSent: {
    encode(message: IBCTransferSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferSent;
    fromJSON(object: any): IBCTransferSent;
    toJSON(message: IBCTransferSent): unknown;
    fromPartial(object: DeepPartial<IBCTransferSent>): IBCTransferSent;
};
export declare const IBCTransferCompleted: {
    encode(message: IBCTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferCompleted;
    fromJSON(object: any): IBCTransferCompleted;
    toJSON(message: IBCTransferCompleted): unknown;
    fromPartial(object: DeepPartial<IBCTransferCompleted>): IBCTransferCompleted;
};
export declare const IBCTransferFailed: {
    encode(message: IBCTransferFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferFailed;
    fromJSON(object: any): IBCTransferFailed;
    toJSON(message: IBCTransferFailed): unknown;
    fromPartial(object: DeepPartial<IBCTransferFailed>): IBCTransferFailed;
};
export declare const IBCTransferRetried: {
    encode(message: IBCTransferRetried, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferRetried;
    fromJSON(object: any): IBCTransferRetried;
    toJSON(message: IBCTransferRetried): unknown;
    fromPartial(object: DeepPartial<IBCTransferRetried>): IBCTransferRetried;
};
export declare const AxelarTransferCompleted: {
    encode(message: AxelarTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AxelarTransferCompleted;
    fromJSON(object: any): AxelarTransferCompleted;
    toJSON(message: AxelarTransferCompleted): unknown;
    fromPartial(object: DeepPartial<AxelarTransferCompleted>): AxelarTransferCompleted;
};
export declare const FeeCollected: {
    encode(message: FeeCollected, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeCollected;
    fromJSON(object: any): FeeCollected;
    toJSON(message: FeeCollected): unknown;
    fromPartial(object: DeepPartial<FeeCollected>): FeeCollected;
};
