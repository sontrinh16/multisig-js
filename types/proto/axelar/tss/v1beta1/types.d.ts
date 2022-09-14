import { KeyRole, KeyType } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface KeygenVoteData {
    pubKey: Uint8Array;
    groupRecoveryInfo: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
    keyId: string;
    keyRole: KeyRole;
    keyType: KeyType;
}
export interface MultisigInfo {
    id: string;
    timeout: Long;
    targetNum: Long;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfo_Info {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface KeyRecoveryInfo_PrivateEntry {
    key: string;
    value: Uint8Array;
}
export interface KeyRecoveryInfo {
    keyId: string;
    public: Uint8Array;
    private: {
        [key: string]: Uint8Array;
    };
}
export interface ExternalKeys {
    chain: string;
    keyIds: string[];
}
export interface ValidatorStatus {
    validator: Uint8Array;
    suspendedUntil: Long;
}
export declare const KeygenVoteData: {
    encode(message: KeygenVoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenVoteData;
    fromJSON(object: any): KeygenVoteData;
    toJSON(message: KeygenVoteData): unknown;
    fromPartial(object: DeepPartial<KeygenVoteData>): KeygenVoteData;
};
export declare const KeyInfo: {
    encode(message: KeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyInfo;
    fromJSON(object: any): KeyInfo;
    toJSON(message: KeyInfo): unknown;
    fromPartial(object: DeepPartial<KeyInfo>): KeyInfo;
};
export declare const MultisigInfo: {
    encode(message: MultisigInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo;
    fromJSON(object: any): MultisigInfo;
    toJSON(message: MultisigInfo): unknown;
    fromPartial(object: DeepPartial<MultisigInfo>): MultisigInfo;
};
export declare const MultisigInfo_Info: {
    encode(message: MultisigInfo_Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo_Info;
    fromJSON(object: any): MultisigInfo_Info;
    toJSON(message: MultisigInfo_Info): unknown;
    fromPartial(object: DeepPartial<MultisigInfo_Info>): MultisigInfo_Info;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo_PrivateEntry;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    toJSON(message: KeyRecoveryInfo_PrivateEntry): unknown;
    fromPartial(object: DeepPartial<KeyRecoveryInfo_PrivateEntry>): KeyRecoveryInfo_PrivateEntry;
};
export declare const KeyRecoveryInfo: {
    encode(message: KeyRecoveryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo;
    fromJSON(object: any): KeyRecoveryInfo;
    toJSON(message: KeyRecoveryInfo): unknown;
    fromPartial(object: DeepPartial<KeyRecoveryInfo>): KeyRecoveryInfo;
};
export declare const ExternalKeys: {
    encode(message: ExternalKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalKeys;
    fromJSON(object: any): ExternalKeys;
    toJSON(message: ExternalKeys): unknown;
    fromPartial(object: DeepPartial<ExternalKeys>): ExternalKeys;
};
export declare const ValidatorStatus: {
    encode(message: ValidatorStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorStatus;
    fromJSON(object: any): ValidatorStatus;
    toJSON(message: ValidatorStatus): unknown;
    fromPartial(object: DeepPartial<ValidatorStatus>): ValidatorStatus;
};
