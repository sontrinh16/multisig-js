import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface PendingIBCTransferCountRequest {
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    key: string;
    value: number;
}
export interface PendingIBCTransferCountResponse {
    transfersByChain: {
        [key: string]: number;
    };
}
export declare const PendingIBCTransferCountRequest: {
    encode(_: PendingIBCTransferCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountRequest;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    toJSON(_: PendingIBCTransferCountRequest): unknown;
    fromPartial(_: DeepPartial<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toJSON(message: PendingIBCTransferCountResponse_TransfersByChainEntry): unknown;
    fromPartial(object: DeepPartial<PendingIBCTransferCountResponse_TransfersByChainEntry>): PendingIBCTransferCountResponse_TransfersByChainEntry;
};
export declare const PendingIBCTransferCountResponse: {
    encode(message: PendingIBCTransferCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountResponse;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    toJSON(message: PendingIBCTransferCountResponse): unknown;
    fromPartial(object: DeepPartial<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse;
};
