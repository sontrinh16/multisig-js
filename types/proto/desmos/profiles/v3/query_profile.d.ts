import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequest {
    /** Address or DTag of the user to query the profile for */
    user: string;
}
/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponse {
    profile: Any;
}
export declare const QueryProfileRequest: {
    encode(message: QueryProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProfileRequest;
    fromJSON(object: any): QueryProfileRequest;
    toJSON(message: QueryProfileRequest): unknown;
    fromPartial(object: DeepPartial<QueryProfileRequest>): QueryProfileRequest;
};
export declare const QueryProfileResponse: {
    encode(message: QueryProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProfileResponse;
    fromJSON(object: any): QueryProfileResponse;
    toJSON(message: QueryProfileResponse): unknown;
    fromPartial(object: DeepPartial<QueryProfileResponse>): QueryProfileResponse;
};
