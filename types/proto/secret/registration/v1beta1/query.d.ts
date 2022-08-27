import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryEncryptedSeedRequest {
    pubKey: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
    /** [(gogoproto.nullable) = false]; */
    encryptedSeed: Uint8Array;
}
export declare const QueryEncryptedSeedRequest: {
    encode(message: QueryEncryptedSeedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptedSeedRequest;
    fromJSON(object: any): QueryEncryptedSeedRequest;
    toJSON(message: QueryEncryptedSeedRequest): unknown;
    fromPartial(object: DeepPartial<QueryEncryptedSeedRequest>): QueryEncryptedSeedRequest;
};
export declare const QueryEncryptedSeedResponse: {
    encode(message: QueryEncryptedSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEncryptedSeedResponse;
    fromJSON(object: any): QueryEncryptedSeedResponse;
    toJSON(message: QueryEncryptedSeedResponse): unknown;
    fromPartial(object: DeepPartial<QueryEncryptedSeedResponse>): QueryEncryptedSeedResponse;
};
