import { Registry } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryEntriesResponse {
    registry: Registry;
}
export interface QueryEntriesRequest {
}
export declare const QueryEntriesResponse: {
    encode(message: QueryEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntriesResponse;
    fromJSON(object: any): QueryEntriesResponse;
    toJSON(message: QueryEntriesResponse): unknown;
    fromPartial(object: DeepPartial<QueryEntriesResponse>): QueryEntriesResponse;
};
export declare const QueryEntriesRequest: {
    encode(_: QueryEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntriesRequest;
    fromJSON(_: any): QueryEntriesRequest;
    toJSON(_: QueryEntriesRequest): unknown;
    fromPartial(_: DeepPartial<QueryEntriesRequest>): QueryEntriesRequest;
};
