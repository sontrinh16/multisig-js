import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgCreateRelationship represents a message to create a relationship
 * between two users on a specific subspace.
 */
export interface MsgCreateRelationship {
    signer: string;
    counterparty: string;
    subspaceId: Long;
}
/**
 * MsgCreateRelationshipResponse defines the Msg/CreateRelationship response
 * type.
 */
export interface MsgCreateRelationshipResponse {
}
/**
 * MsgDeleteRelationship represents a message to delete the relationship
 * between two users.
 */
export interface MsgDeleteRelationship {
    signer: string;
    counterparty: string;
    subspaceId: Long;
}
/**
 * MsgDeleteRelationshipResponse defines the Msg/DeleteRelationship response
 * type.
 */
export interface MsgDeleteRelationshipResponse {
}
/**
 * MsgBlockUser represents a message to block another user specifying an
 * optional reason.
 */
export interface MsgBlockUser {
    blocker: string;
    blocked: string;
    reason: string;
    subspaceId: Long;
}
/** MsgBlockUserResponse defines the Msg/BlockUser response type. */
export interface MsgBlockUserResponse {
}
/** MsgUnblockUser represents a message to unblock a previously blocked user. */
export interface MsgUnblockUser {
    blocker: string;
    blocked: string;
    subspaceId: Long;
}
/** MsgUnblockUserResponse defines the Msg/UnblockUser response type. */
export interface MsgUnblockUserResponse {
}
export declare const MsgCreateRelationship: {
    encode(message: MsgCreateRelationship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRelationship;
    fromJSON(object: any): MsgCreateRelationship;
    toJSON(message: MsgCreateRelationship): unknown;
    fromPartial(object: DeepPartial<MsgCreateRelationship>): MsgCreateRelationship;
};
export declare const MsgCreateRelationshipResponse: {
    encode(_: MsgCreateRelationshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRelationshipResponse;
    fromJSON(_: any): MsgCreateRelationshipResponse;
    toJSON(_: MsgCreateRelationshipResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateRelationshipResponse>): MsgCreateRelationshipResponse;
};
export declare const MsgDeleteRelationship: {
    encode(message: MsgDeleteRelationship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRelationship;
    fromJSON(object: any): MsgDeleteRelationship;
    toJSON(message: MsgDeleteRelationship): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRelationship>): MsgDeleteRelationship;
};
export declare const MsgDeleteRelationshipResponse: {
    encode(_: MsgDeleteRelationshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRelationshipResponse;
    fromJSON(_: any): MsgDeleteRelationshipResponse;
    toJSON(_: MsgDeleteRelationshipResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRelationshipResponse>): MsgDeleteRelationshipResponse;
};
export declare const MsgBlockUser: {
    encode(message: MsgBlockUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockUser;
    fromJSON(object: any): MsgBlockUser;
    toJSON(message: MsgBlockUser): unknown;
    fromPartial(object: DeepPartial<MsgBlockUser>): MsgBlockUser;
};
export declare const MsgBlockUserResponse: {
    encode(_: MsgBlockUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockUserResponse;
    fromJSON(_: any): MsgBlockUserResponse;
    toJSON(_: MsgBlockUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgBlockUserResponse>): MsgBlockUserResponse;
};
export declare const MsgUnblockUser: {
    encode(message: MsgUnblockUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockUser;
    fromJSON(object: any): MsgUnblockUser;
    toJSON(message: MsgUnblockUser): unknown;
    fromPartial(object: DeepPartial<MsgUnblockUser>): MsgUnblockUser;
};
export declare const MsgUnblockUserResponse: {
    encode(_: MsgUnblockUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockUserResponse;
    fromJSON(_: any): MsgUnblockUserResponse;
    toJSON(_: MsgUnblockUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnblockUserResponse>): MsgUnblockUserResponse;
};
