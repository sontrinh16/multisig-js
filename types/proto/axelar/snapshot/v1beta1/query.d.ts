import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryValidatorsResponse {
    validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
    tombstoned: boolean;
    jailed: boolean;
    missedTooManyBlocks: boolean;
    noProxyRegistered: boolean;
    tssSuspended: boolean;
    proxyInsuficientFunds: boolean;
    staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
    operatorAddress: string;
    moniker: string;
    tssIllegibilityInfo: QueryValidatorsResponse_TssIllegibilityInfo;
}
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_TssIllegibilityInfo;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    toJSON(message: QueryValidatorsResponse_TssIllegibilityInfo): unknown;
    fromPartial(object: DeepPartial<QueryValidatorsResponse_TssIllegibilityInfo>): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    encode(message: QueryValidatorsResponse_Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_Validator;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    toJSON(message: QueryValidatorsResponse_Validator): unknown;
    fromPartial(object: DeepPartial<QueryValidatorsResponse_Validator>): QueryValidatorsResponse_Validator;
};
