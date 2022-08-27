import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QuerySyntheticRequest {
    market: string;
    duration: string;
    offset: number;
    limit: number;
}
export interface SyntheticQuote {
    spot: DecCoin;
    quantity: DecCoin;
}
export interface QuerySyntheticResponse {
    consensus: DecCoin;
    sumBacking: DecCoin;
    sumWeight: DecCoin;
    offset: number;
    limit: number;
    totalAsks: number;
    totalBids: number;
    asks: SyntheticQuote[];
    bids: SyntheticQuote[];
}
export declare const QuerySyntheticRequest: {
    encode(message: QuerySyntheticRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyntheticRequest;
    fromJSON(object: any): QuerySyntheticRequest;
    toJSON(message: QuerySyntheticRequest): unknown;
    fromPartial(object: DeepPartial<QuerySyntheticRequest>): QuerySyntheticRequest;
};
export declare const SyntheticQuote: {
    encode(message: SyntheticQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticQuote;
    fromJSON(object: any): SyntheticQuote;
    toJSON(message: SyntheticQuote): unknown;
    fromPartial(object: DeepPartial<SyntheticQuote>): SyntheticQuote;
};
export declare const QuerySyntheticResponse: {
    encode(message: QuerySyntheticResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyntheticResponse;
    fromJSON(object: any): QuerySyntheticResponse;
    toJSON(message: QuerySyntheticResponse): unknown;
    fromPartial(object: DeepPartial<QuerySyntheticResponse>): QuerySyntheticResponse;
};
