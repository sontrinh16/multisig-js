import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface IBCTransfer {
    sender: Uint8Array;
    receiver: string;
    token: Coin;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export interface CosmosChain {
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
/** @deprecated */
export interface Asset {
    denom: string;
    minAmount: Uint8Array;
}
export declare const IBCTransfer: {
    encode(message: IBCTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransfer;
    fromJSON(object: any): IBCTransfer;
    toJSON(message: IBCTransfer): unknown;
    fromPartial(object: DeepPartial<IBCTransfer>): IBCTransfer;
};
export declare const CosmosChain: {
    encode(message: CosmosChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosChain;
    fromJSON(object: any): CosmosChain;
    toJSON(message: CosmosChain): unknown;
    fromPartial(object: DeepPartial<CosmosChain>): CosmosChain;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
