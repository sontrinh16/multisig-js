import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryGraphStatsRequest {
}
export interface QueryGraphStatsResponse {
    cyberlinks: Long;
    particles: Long;
}
export declare const QueryGraphStatsRequest: {
    encode(_: QueryGraphStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGraphStatsRequest;
    fromJSON(_: any): QueryGraphStatsRequest;
    toJSON(_: QueryGraphStatsRequest): unknown;
    fromPartial(_: DeepPartial<QueryGraphStatsRequest>): QueryGraphStatsRequest;
};
export declare const QueryGraphStatsResponse: {
    encode(message: QueryGraphStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGraphStatsResponse;
    fromJSON(object: any): QueryGraphStatsResponse;
    toJSON(message: QueryGraphStatsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGraphStatsResponse>): QueryGraphStatsResponse;
};
