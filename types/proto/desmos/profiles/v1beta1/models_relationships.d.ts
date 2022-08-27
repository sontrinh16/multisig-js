import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Relationship is the struct of a relationship.
 * It represent the concept of "follow" of traditional social networks.
 */
export interface Relationship {
    creator: string;
    recipient: string;
    subspaceId: string;
}
/**
 * UserBlock represents the fact that the Blocker has blocked the given Blocked
 * user.
 */
export interface UserBlock {
    /** Blocker represents the address of the user blocking another one */
    blocker: string;
    /** Blocked represents the address of the blocked user */
    blocked: string;
    /** Reason represents the optional reason the user has been blocked for. */
    reason: string;
    /**
     * SubspaceID represents the ID of the subspace inside which the user should
     * be blocked
     */
    subspaceId: string;
}
export declare const Relationship: {
    encode(message: Relationship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Relationship;
    fromJSON(object: any): Relationship;
    toJSON(message: Relationship): unknown;
    fromPartial(object: DeepPartial<Relationship>): Relationship;
};
export declare const UserBlock: {
    encode(message: UserBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserBlock;
    fromJSON(object: any): UserBlock;
    toJSON(message: UserBlock): unknown;
    fromPartial(object: DeepPartial<UserBlock>): UserBlock;
};
