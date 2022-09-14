import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponse {
    governanceKey: LegacyAminoPubKey;
}
export declare const QueryGovernanceKeyRequest: {
    encode(_: QueryGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovernanceKeyRequest;
    fromJSON(_: any): QueryGovernanceKeyRequest;
    toJSON(_: QueryGovernanceKeyRequest): unknown;
    fromPartial(_: DeepPartial<QueryGovernanceKeyRequest>): QueryGovernanceKeyRequest;
};
export declare const QueryGovernanceKeyResponse: {
    encode(message: QueryGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovernanceKeyResponse;
    fromJSON(object: any): QueryGovernanceKeyResponse;
    toJSON(message: QueryGovernanceKeyResponse): unknown;
    fromPartial(object: DeepPartial<QueryGovernanceKeyResponse>): QueryGovernanceKeyResponse;
};
