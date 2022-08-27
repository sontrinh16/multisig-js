import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryConsensusRequest {
    market: string;
}
export interface QueryConsensusResponse {
    market: string;
    consensus: DecCoin;
    totalBacking: DecCoin;
    totalWeight: DecCoin;
}
export declare const QueryConsensusRequest: {
    encode(message: QueryConsensusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusRequest;
    fromJSON(object: any): QueryConsensusRequest;
    toJSON(message: QueryConsensusRequest): unknown;
    fromPartial(object: DeepPartial<QueryConsensusRequest>): QueryConsensusRequest;
};
export declare const QueryConsensusResponse: {
    encode(message: QueryConsensusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusResponse;
    fromJSON(object: any): QueryConsensusResponse;
    toJSON(message: QueryConsensusResponse): unknown;
    fromPartial(object: DeepPartial<QueryConsensusResponse>): QueryConsensusResponse;
};
