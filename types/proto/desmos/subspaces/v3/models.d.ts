import { Timestamp } from "../../../google/protobuf/timestamp";
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
    creationTime: Timestamp;
}
/** Section contains the data of a single subspace section */
export interface Section {
    /** Id of the subspace inside which the section exists */
    subspaceId: Long;
    /** Unique id of the section within the subspace */
    id: number;
    /** (optional) Id of the parent section */
    parentId: number;
    /** Name of the section within the subspace */
    name: string;
    /** (optional) Description of the section */
    description: string;
}
/** UserGroup represents a group of users */
export interface UserGroup {
    /** ID of the subspace inside which this group exists */
    subspaceId: Long;
    /** (optional) Id of the section inside which this group is valid */
    sectionId: number;
    /** Unique id that identifies the group */
    id: number;
    /** Human-readable name of the user group */
    name: string;
    /** Optional description of this group */
    description: string;
    /** Permissions that will be granted to all the users part of this group */
    permissions: string[];
}
/** UserPermission represents a single Access Control List entry */
export interface UserPermission {
    subspaceId: Long;
    sectionId: number;
    user: string;
    permissions: string[];
}
export declare const Subspace: {
    encode(message: Subspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subspace;
    fromJSON(object: any): Subspace;
    toJSON(message: Subspace): unknown;
    fromPartial(object: DeepPartial<Subspace>): Subspace;
};
export declare const Section: {
    encode(message: Section, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Section;
    fromJSON(object: any): Section;
    toJSON(message: Section): unknown;
    fromPartial(object: DeepPartial<Section>): Section;
};
export declare const UserGroup: {
    encode(message: UserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGroup;
    fromJSON(object: any): UserGroup;
    toJSON(message: UserGroup): unknown;
    fromPartial(object: DeepPartial<UserGroup>): UserGroup;
};
export declare const UserPermission: {
    encode(message: UserPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserPermission;
    fromJSON(object: any): UserPermission;
    toJSON(message: UserPermission): unknown;
    fromPartial(object: DeepPartial<UserPermission>): UserPermission;
};
