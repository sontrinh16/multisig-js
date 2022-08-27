import { EthBridgeClaim } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLock {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: Long;
    ethereumReceiver: string;
    cethAmount: string;
}
export interface MsgLockResponse {
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurn {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: Long;
    ethereumReceiver: string;
    cethAmount: string;
}
export interface MsgBurnResponse {
}
export interface MsgCreateEthBridgeClaim {
    ethBridgeClaim: EthBridgeClaim;
}
export interface MsgCreateEthBridgeClaimResponse {
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidator {
    cosmosSender: string;
    validator: string;
    operationType: string;
}
export interface MsgUpdateWhiteListValidatorResponse {
}
export interface MsgUpdateCethReceiverAccount {
    cosmosSender: string;
    cethReceiverAccount: string;
}
export interface MsgUpdateCethReceiverAccountResponse {
}
export interface MsgRescueCeth {
    cosmosSender: string;
    cosmosReceiver: string;
    cethAmount: string;
}
export interface MsgRescueCethResponse {
}
export interface MsgSetBlacklist {
    from: string;
    addresses: string[];
}
export interface MsgSetBlacklistResponse {
}
export declare const MsgLock: {
    encode(message: MsgLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLock;
    fromJSON(object: any): MsgLock;
    toJSON(message: MsgLock): unknown;
    fromPartial(object: DeepPartial<MsgLock>): MsgLock;
};
export declare const MsgLockResponse: {
    encode(_: MsgLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockResponse;
    fromJSON(_: any): MsgLockResponse;
    toJSON(_: MsgLockResponse): unknown;
    fromPartial(_: DeepPartial<MsgLockResponse>): MsgLockResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgCreateEthBridgeClaim: {
    encode(message: MsgCreateEthBridgeClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEthBridgeClaim;
    fromJSON(object: any): MsgCreateEthBridgeClaim;
    toJSON(message: MsgCreateEthBridgeClaim): unknown;
    fromPartial(object: DeepPartial<MsgCreateEthBridgeClaim>): MsgCreateEthBridgeClaim;
};
export declare const MsgCreateEthBridgeClaimResponse: {
    encode(_: MsgCreateEthBridgeClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEthBridgeClaimResponse;
    fromJSON(_: any): MsgCreateEthBridgeClaimResponse;
    toJSON(_: MsgCreateEthBridgeClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateEthBridgeClaimResponse>): MsgCreateEthBridgeClaimResponse;
};
export declare const MsgUpdateWhiteListValidator: {
    encode(message: MsgUpdateWhiteListValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhiteListValidator;
    fromJSON(object: any): MsgUpdateWhiteListValidator;
    toJSON(message: MsgUpdateWhiteListValidator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateWhiteListValidator>): MsgUpdateWhiteListValidator;
};
export declare const MsgUpdateWhiteListValidatorResponse: {
    encode(_: MsgUpdateWhiteListValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWhiteListValidatorResponse;
    fromJSON(_: any): MsgUpdateWhiteListValidatorResponse;
    toJSON(_: MsgUpdateWhiteListValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateWhiteListValidatorResponse>): MsgUpdateWhiteListValidatorResponse;
};
export declare const MsgUpdateCethReceiverAccount: {
    encode(message: MsgUpdateCethReceiverAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCethReceiverAccount;
    fromJSON(object: any): MsgUpdateCethReceiverAccount;
    toJSON(message: MsgUpdateCethReceiverAccount): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCethReceiverAccount>): MsgUpdateCethReceiverAccount;
};
export declare const MsgUpdateCethReceiverAccountResponse: {
    encode(_: MsgUpdateCethReceiverAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCethReceiverAccountResponse;
    fromJSON(_: any): MsgUpdateCethReceiverAccountResponse;
    toJSON(_: MsgUpdateCethReceiverAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCethReceiverAccountResponse>): MsgUpdateCethReceiverAccountResponse;
};
export declare const MsgRescueCeth: {
    encode(message: MsgRescueCeth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRescueCeth;
    fromJSON(object: any): MsgRescueCeth;
    toJSON(message: MsgRescueCeth): unknown;
    fromPartial(object: DeepPartial<MsgRescueCeth>): MsgRescueCeth;
};
export declare const MsgRescueCethResponse: {
    encode(_: MsgRescueCethResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRescueCethResponse;
    fromJSON(_: any): MsgRescueCethResponse;
    toJSON(_: MsgRescueCethResponse): unknown;
    fromPartial(_: DeepPartial<MsgRescueCethResponse>): MsgRescueCethResponse;
};
export declare const MsgSetBlacklist: {
    encode(message: MsgSetBlacklist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBlacklist;
    fromJSON(object: any): MsgSetBlacklist;
    toJSON(message: MsgSetBlacklist): unknown;
    fromPartial(object: DeepPartial<MsgSetBlacklist>): MsgSetBlacklist;
};
export declare const MsgSetBlacklistResponse: {
    encode(_: MsgSetBlacklistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBlacklistResponse;
    fromJSON(_: any): MsgSetBlacklistResponse;
    toJSON(_: MsgSetBlacklistResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetBlacklistResponse>): MsgSetBlacklistResponse;
};
