import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
    sender: string;
    tokens: Coin;
    receiver: string;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
    sender: string;
    tokens: Coin;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddress {
    sender: string;
    denom: string;
    blockedAddress: string;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponse {
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddress {
    sender: string;
    denom: string;
    blockedAddress: string;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponse {
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatus {
    sender: string;
    denom: string;
    status: boolean;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponse {
}
export declare const MsgIssueTokens: {
    encode(message: MsgIssueTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokens;
    fromJSON(object: any): MsgIssueTokens;
    toJSON(message: MsgIssueTokens): unknown;
    fromPartial(object: DeepPartial<MsgIssueTokens>): MsgIssueTokens;
};
export declare const MsgIssueTokensResponse: {
    encode(_: MsgIssueTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokensResponse;
    fromJSON(_: any): MsgIssueTokensResponse;
    toJSON(_: MsgIssueTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueTokensResponse>): MsgIssueTokensResponse;
};
export declare const MsgRedeemTokens: {
    encode(message: MsgRedeemTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokens;
    fromJSON(object: any): MsgRedeemTokens;
    toJSON(message: MsgRedeemTokens): unknown;
    fromPartial(object: DeepPartial<MsgRedeemTokens>): MsgRedeemTokens;
};
export declare const MsgRedeemTokensResponse: {
    encode(_: MsgRedeemTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensResponse;
    fromJSON(_: any): MsgRedeemTokensResponse;
    toJSON(_: MsgRedeemTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse;
};
export declare const MsgBlockAddress: {
    encode(message: MsgBlockAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockAddress;
    fromJSON(object: any): MsgBlockAddress;
    toJSON(message: MsgBlockAddress): unknown;
    fromPartial(object: DeepPartial<MsgBlockAddress>): MsgBlockAddress;
};
export declare const MsgBlockAddressResponse: {
    encode(_: MsgBlockAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockAddressResponse;
    fromJSON(_: any): MsgBlockAddressResponse;
    toJSON(_: MsgBlockAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgBlockAddressResponse>): MsgBlockAddressResponse;
};
export declare const MsgUnblockAddress: {
    encode(message: MsgUnblockAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockAddress;
    fromJSON(object: any): MsgUnblockAddress;
    toJSON(message: MsgUnblockAddress): unknown;
    fromPartial(object: DeepPartial<MsgUnblockAddress>): MsgUnblockAddress;
};
export declare const MsgUnblockAddressResponse: {
    encode(_: MsgUnblockAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockAddressResponse;
    fromJSON(_: any): MsgUnblockAddressResponse;
    toJSON(_: MsgUnblockAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse;
};
export declare const MsgSetPauseStatus: {
    encode(message: MsgSetPauseStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseStatus;
    fromJSON(object: any): MsgSetPauseStatus;
    toJSON(message: MsgSetPauseStatus): unknown;
    fromPartial(object: DeepPartial<MsgSetPauseStatus>): MsgSetPauseStatus;
};
export declare const MsgSetPauseStatusResponse: {
    encode(_: MsgSetPauseStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseStatusResponse;
    fromJSON(_: any): MsgSetPauseStatusResponse;
    toJSON(_: MsgSetPauseStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse;
};
