import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryAccountRequest {
    account: Uint8Array;
    offset: number;
    limit: number;
}
export interface QueryAccountResponse {
    account: Uint8Array;
    balances: DecCoin[];
    placedQuotes: number;
    placedTrades: number;
    offset: number;
    limit: number;
    totalActiveQuotes: number;
    activeQuotes: number[];
    totalActiveTrades: number;
    activeTrades: number[];
    quoteBacking: DecCoin;
    tradeBacking: DecCoin;
    settleBacking: DecCoin;
}
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
