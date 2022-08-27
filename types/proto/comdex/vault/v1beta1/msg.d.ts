import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateRequest {
    from: string;
    pairId: Long;
    amountIn: string;
    amountOut: string;
}
export interface MsgCreateResponse {
}
export interface MsgDepositRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDepositResponse {
}
export interface MsgWithdrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgWithdrawResponse {
}
export interface MsgDrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDrawResponse {
}
export interface MsgRepayRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgRepayResponse {
}
export interface MsgCloseRequest {
    from: string;
    id: Long;
}
export interface MsgCloseResponse {
}
export declare const MsgCreateRequest: {
    encode(message: MsgCreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest;
    fromJSON(object: any): MsgCreateRequest;
    toJSON(message: MsgCreateRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest;
};
export declare const MsgCreateResponse: {
    encode(_: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromJSON(_: any): MsgCreateResponse;
    toJSON(_: MsgCreateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse;
};
export declare const MsgDepositRequest: {
    encode(message: MsgDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRequest;
    fromJSON(object: any): MsgDepositRequest;
    toJSON(message: MsgDepositRequest): unknown;
    fromPartial(object: DeepPartial<MsgDepositRequest>): MsgDepositRequest;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdrawRequest: {
    encode(message: MsgWithdrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest;
    fromJSON(object: any): MsgWithdrawRequest;
    toJSON(message: MsgWithdrawRequest): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawRequest>): MsgWithdrawRequest;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgDrawRequest: {
    encode(message: MsgDrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRequest;
    fromJSON(object: any): MsgDrawRequest;
    toJSON(message: MsgDrawRequest): unknown;
    fromPartial(object: DeepPartial<MsgDrawRequest>): MsgDrawRequest;
};
export declare const MsgDrawResponse: {
    encode(_: MsgDrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawResponse;
    fromJSON(_: any): MsgDrawResponse;
    toJSON(_: MsgDrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgDrawResponse>): MsgDrawResponse;
};
export declare const MsgRepayRequest: {
    encode(message: MsgRepayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayRequest;
    fromJSON(object: any): MsgRepayRequest;
    toJSON(message: MsgRepayRequest): unknown;
    fromPartial(object: DeepPartial<MsgRepayRequest>): MsgRepayRequest;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse;
    fromJSON(_: any): MsgRepayResponse;
    toJSON(_: MsgRepayResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgCloseRequest: {
    encode(message: MsgCloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseRequest;
    fromJSON(object: any): MsgCloseRequest;
    toJSON(message: MsgCloseRequest): unknown;
    fromPartial(object: DeepPartial<MsgCloseRequest>): MsgCloseRequest;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse;
    fromJSON(_: any): MsgCloseResponse;
    toJSON(_: MsgCloseResponse): unknown;
    fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse;
};
