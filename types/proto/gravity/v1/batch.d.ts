import { ERC20Token } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: Long;
    batchTimeout: Long;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    block: Long;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: Long;
    sender: string;
    destAddress: string;
    erc20Token: ERC20Token;
    erc20Fee: ERC20Token;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: ERC20Token[];
    fees: ERC20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: Long;
    invalidationId: Uint8Array;
    invalidationNonce: Long;
    block: Long;
}
export interface EventOutgoingBatchCanceled {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export interface EventOutgoingBatch {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTxBatch;
    fromJSON(object: any): OutgoingTxBatch;
    toJSON(message: OutgoingTxBatch): unknown;
    fromPartial(object: DeepPartial<OutgoingTxBatch>): OutgoingTxBatch;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTransferTx;
    fromJSON(object: any): OutgoingTransferTx;
    toJSON(message: OutgoingTransferTx): unknown;
    fromPartial(object: DeepPartial<OutgoingTransferTx>): OutgoingTransferTx;
};
export declare const OutgoingLogicCall: {
    encode(message: OutgoingLogicCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingLogicCall;
    fromJSON(object: any): OutgoingLogicCall;
    toJSON(message: OutgoingLogicCall): unknown;
    fromPartial(object: DeepPartial<OutgoingLogicCall>): OutgoingLogicCall;
};
export declare const EventOutgoingBatchCanceled: {
    encode(message: EventOutgoingBatchCanceled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatchCanceled;
    fromJSON(object: any): EventOutgoingBatchCanceled;
    toJSON(message: EventOutgoingBatchCanceled): unknown;
    fromPartial(object: DeepPartial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
};
export declare const EventOutgoingBatch: {
    encode(message: EventOutgoingBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatch;
    fromJSON(object: any): EventOutgoingBatch;
    toJSON(message: EventOutgoingBatch): unknown;
    fromPartial(object: DeepPartial<EventOutgoingBatch>): EventOutgoingBatch;
};
