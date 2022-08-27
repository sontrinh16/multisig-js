import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Super } from "./guardian";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
    /** pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
    supers: Super[];
    pagination: PageResponse;
}
export declare const QuerySupersRequest: {
    encode(message: QuerySupersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersRequest;
    fromJSON(object: any): QuerySupersRequest;
    toJSON(message: QuerySupersRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupersRequest>): QuerySupersRequest;
};
export declare const QuerySupersResponse: {
    encode(message: QuerySupersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersResponse;
    fromJSON(object: any): QuerySupersResponse;
    toJSON(message: QuerySupersResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupersResponse>): QuerySupersResponse;
};
