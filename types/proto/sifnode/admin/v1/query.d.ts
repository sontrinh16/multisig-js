import { AdminAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ListAccountsRequest {
}
export interface ListAccountsResponse {
    keys: AdminAccount[];
}
export declare const ListAccountsRequest: {
    encode(_: ListAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsRequest;
    fromJSON(_: any): ListAccountsRequest;
    toJSON(_: ListAccountsRequest): unknown;
    fromPartial(_: DeepPartial<ListAccountsRequest>): ListAccountsRequest;
};
export declare const ListAccountsResponse: {
    encode(message: ListAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsResponse;
    fromJSON(object: any): ListAccountsResponse;
    toJSON(message: ListAccountsResponse): unknown;
    fromPartial(object: DeepPartial<ListAccountsResponse>): ListAccountsResponse;
};
