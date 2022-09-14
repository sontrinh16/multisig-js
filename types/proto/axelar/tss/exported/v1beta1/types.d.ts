import { Threshold } from "../../../utils/v1beta1/threshold";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum KeyRole {
    KEY_ROLE_UNSPECIFIED = 0,
    KEY_ROLE_MASTER_KEY = 1,
    KEY_ROLE_SECONDARY_KEY = 2,
    KEY_ROLE_EXTERNAL_KEY = 3,
    UNRECOGNIZED = -1
}
export declare function keyRoleFromJSON(object: any): KeyRole;
export declare function keyRoleToJSON(object: KeyRole): string;
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = 0,
    KEY_TYPE_NONE = 1,
    KEY_TYPE_THRESHOLD = 2,
    KEY_TYPE_MULTISIG = 3,
    UNRECOGNIZED = -1
}
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export declare enum KeyShareDistributionPolicy {
    KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
    KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
    KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
    UNRECOGNIZED = -1
}
export declare function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy;
export declare function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string;
/** KeyRequirement defines requirements for keys */
export interface KeyRequirement {
    keyRole: KeyRole;
    keyType: KeyType;
    minKeygenThreshold: Threshold;
    safetyThreshold: Threshold;
    keyShareDistributionPolicy: KeyShareDistributionPolicy;
    maxTotalShareCount: Long;
    minTotalShareCount: Long;
    keygenVotingThreshold: Threshold;
    signVotingThreshold: Threshold;
    keygenTimeout: Long;
    signTimeout: Long;
}
/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
    pubKey: Uint8Array;
    signature: Uint8Array;
}
export declare const KeyRequirement: {
    encode(message: KeyRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequirement;
    fromJSON(object: any): KeyRequirement;
    toJSON(message: KeyRequirement): unknown;
    fromPartial(object: DeepPartial<KeyRequirement>): KeyRequirement;
};
export declare const SigKeyPair: {
    encode(message: SigKeyPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigKeyPair;
    fromJSON(object: any): SigKeyPair;
    toJSON(message: SigKeyPair): unknown;
    fromPartial(object: DeepPartial<SigKeyPair>): SigKeyPair;
};
