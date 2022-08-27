import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Subspace contains all the data of a Desmos subspace */
export interface Subspace {
    /** Unique id that identifies the subspace */
    id: Long;
    /** Human-readable name of the subspace */
    name: string;
    /** Optional description of this subspace */
    description: string;
    /**
     * Represents the account that is associated with the subspace and
     * should be used to connect external applications to verify this subspace
     */
    treasury: string;
    /** Address of the user that owns the subspace */
    owner: string;
    /** Address of the subspace creator */
    creator: string;
    /** the creation time of the subspace */
    creationTime: Date;
}
/** UserGroup represents a group of users */
export interface UserGroup {
    /** ID of the subspace inside which this group exists */
    subspaceId: Long;
    /** Unique id that identifies the group */
    id: number;
    /** Human-readable name of the user group */
    name: string;
    /** Optional description of this group */
    description: string;
    /** Permissions that will be granted to all the users part of this group */
    permissions: number;
}
/** PermissionDetail contains the details data of a permission */
export interface PermissionDetail {
    /** User represents a user permission */
    user?: PermissionDetail_User;
    /** Group represents a group permission */
    group?: PermissionDetail_Group;
}
/** User is a permission that has been set to a specific user */
export interface PermissionDetail_User {
    /** User for which the permission was set */
    user: string;
    /** Permission set to the user */
    permission: number;
}
/** Group is a permission that has been set to a user group */
export interface PermissionDetail_Group {
    /** Unique id of the group */
    groupId: number;
    /** Permission set to the group */
    permission: number;
}
export declare const Subspace: {
    encode(message: Subspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subspace;
    fromJSON(object: any): Subspace;
    toJSON(message: Subspace): unknown;
    fromPartial(object: DeepPartial<Subspace>): Subspace;
};
export declare const UserGroup: {
    encode(message: UserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGroup;
    fromJSON(object: any): UserGroup;
    toJSON(message: UserGroup): unknown;
    fromPartial(object: DeepPartial<UserGroup>): UserGroup;
};
export declare const PermissionDetail: {
    encode(message: PermissionDetail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail;
    fromJSON(object: any): PermissionDetail;
    toJSON(message: PermissionDetail): unknown;
    fromPartial(object: DeepPartial<PermissionDetail>): PermissionDetail;
};
export declare const PermissionDetail_User: {
    encode(message: PermissionDetail_User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail_User;
    fromJSON(object: any): PermissionDetail_User;
    toJSON(message: PermissionDetail_User): unknown;
    fromPartial(object: DeepPartial<PermissionDetail_User>): PermissionDetail_User;
};
export declare const PermissionDetail_Group: {
    encode(message: PermissionDetail_Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail_Group;
    fromJSON(object: any): PermissionDetail_Group;
    toJSON(message: PermissionDetail_Group): unknown;
    fromPartial(object: DeepPartial<PermissionDetail_Group>): PermissionDetail_Group;
};
