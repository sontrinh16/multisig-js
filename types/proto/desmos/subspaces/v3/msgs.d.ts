import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgCreateSubspace represents the message used to create a subspace */
export interface MsgCreateSubspace {
    /** Name of the subspace */
    name: string;
    /** (optional) Description of the subspace */
    description: string;
    /** (optional) Treasury address associated to this subspace */
    treasury: string;
    /**
     * (optional) Owner of this subspace. If not specified, the creator will be the
     * default owner.
     */
    owner: string;
    /** Address creating the subspace */
    creator: string;
}
/** MsgCreateSubspaceResponse defines the Msg/CreateSubspace response type */
export interface MsgCreateSubspaceResponse {
    /** Id of the newly created subspace id */
    subspaceId: Long;
}
/** MsgEditSubspace represents the message used to edit a subspace fields */
export interface MsgEditSubspace {
    /** Id of the subspace to edit */
    subspaceId: Long;
    /**
     * New name of the subspace. If it shouldn't be changed, use [do-not-modify]
     * instead.
     */
    name: string;
    /**
     * New description of the subspace. If it shouldn't be changed, use
     * [do-not-modify] instead.
     */
    description: string;
    /**
     * New treasury address of the subspace. If it shouldn't be changed, use
     * [do-not-modify] instead.
     */
    treasury: string;
    /**
     * New owner of the subspace. If it shouldn't be changed, use [do-not-modify]
     * instead.
     */
    owner: string;
    /** Address of the user editing the subspace */
    signer: string;
}
/** MsgEditSubspaceResponse defines the Msg/EditSubspace response type */
export interface MsgEditSubspaceResponse {
}
/** MsgDeleteSubspace represents the message used to delete a subspace */
export interface MsgDeleteSubspace {
    /** Id of the subspace to delete */
    subspaceId: Long;
    /** Address of the user deleting the subspace */
    signer: string;
}
/** MsgDeleteSubspaceResponse defines the Msg/DeleteSubspace response type */
export interface MsgDeleteSubspaceResponse {
}
/**
 * MsgCreateSection represents the message to be used when creating a subspace
 * section
 */
export interface MsgCreateSection {
    /** Id of the subspace inside which the section will be placed */
    subspaceId: Long;
    /** Name of the section to be created */
    name: string;
    /** (optional) Description of the section */
    description: string;
    /** (optional) Id of the parent section */
    parentId: number;
    /** User creating the section */
    creator: string;
}
/** MsgCreateSectionResponse represents the Msg/CreateSection response type */
export interface MsgCreateSectionResponse {
    /** Id of the newly created section */
    sectionId: number;
}
/**
 * MsgEditSection represents the message to be used when editing a subspace
 * section
 */
export interface MsgEditSection {
    /** Id of the subspace inside which the section to be edited is */
    subspaceId: Long;
    /** Id of the section to be edited */
    sectionId: number;
    /** (optional) New name of the section */
    name: string;
    /** (optional) New description of the section */
    description: string;
    /** User editing the section */
    editor: string;
}
/** MsgEditSectionResponse represents the Msg/EditSection response type */
export interface MsgEditSectionResponse {
}
/**
 * MsgMoveSection represents the message to be used when moving a section to
 * another parent
 */
export interface MsgMoveSection {
    /** Id of the subspace inside which the section lies */
    subspaceId: Long;
    /** Id of the section to be moved */
    sectionId: number;
    /** Id of the new parent */
    newParentId: number;
    /** Signer of the message */
    signer: string;
}
/** MsgMoveSectionResponse */
export interface MsgMoveSectionResponse {
}
/** MsgDeleteSection represents the message to be used when deleting a section */
export interface MsgDeleteSection {
    /** Id of the subspace inside which the section to be deleted is */
    subspaceId: Long;
    /** Id of the section to delete */
    sectionId: number;
    /** User deleting the section */
    signer: string;
}
/** MsgDeleteSectionResponse represents the Msg/DeleteSection response type */
export interface MsgDeleteSectionResponse {
}
/** MsgCreateUserGroup represents the message used to create a user group */
export interface MsgCreateUserGroup {
    /** Id of the subspace inside which the group will be created */
    subspaceId: Long;
    /** (optional) Id of the section inside which the group will be created */
    sectionId: number;
    /** Name of the group */
    name: string;
    /** (optional) Description of the group */
    description: string;
    /** Default permissions to be applied to the group */
    defaultPermissions: string[];
    /** Initial members to be put inside the group */
    initialMembers: string[];
    /** Creator of the group */
    creator: string;
}
/** MsgCreateUserGroupResponse defines the Msg/CreateUserGroup response type */
export interface MsgCreateUserGroupResponse {
    groupId: number;
}
/** MsgEditUserGroup represents the message used to edit a user group */
export interface MsgEditUserGroup {
    /** Id of the subspace inside which the group to be edited is */
    subspaceId: Long;
    /** Id of the group to be edited */
    groupId: number;
    /** (optional) New name of the group */
    name: string;
    /** (optional) New description of the group */
    description: string;
    /** User editing the group */
    signer: string;
}
/** MsgEditUserGroupResponse defines the Msg/EditUserGroup response type */
export interface MsgEditUserGroupResponse {
}
/**
 * MsgMoveUserGroup represents the message used to move one user group from a
 * section to anoter
 */
export interface MsgMoveUserGroup {
    /** Id of the subspace inside which the group to move is */
    subspaceId: Long;
    /** Id of the group to be moved */
    groupId: number;
    /** Id of the new section where to move the group */
    newSectionId: number;
    /** User signing the message */
    signer: string;
}
/** MsgMoveUserGroupResponse defines the Msg/MoveUserGroup response type */
export interface MsgMoveUserGroupResponse {
}
/**
 * MsgSetUserGroupPermissions represents the message used to set the permissions
 * of a user group
 */
export interface MsgSetUserGroupPermissions {
    /** Id of the subspace inside which the group is */
    subspaceId: Long;
    /** Id of the group for which to set the new permissions */
    groupId: number;
    /** New permissions to be set to the group */
    permissions: string[];
    /** User setting the new permissions */
    signer: string;
}
/**
 * MsgSetUserGroupPermissionsResponse defines the
 * Msg/SetUserGroupPermissionsResponse response type
 */
export interface MsgSetUserGroupPermissionsResponse {
}
/** MsgDeleteUserGroup represents the message used to delete a user group */
export interface MsgDeleteUserGroup {
    /** Id of the subspace inside which the group to delete is */
    subspaceId: Long;
    /** Id of the group to be deleted */
    groupId: number;
    /** User deleting the group */
    signer: string;
}
/** MsgDeleteUserGroupResponse defines the Msg/DeleteUserGroup response type */
export interface MsgDeleteUserGroupResponse {
}
/**
 * MsgAddUserToUserGroup represents the message used to add a user to a user
 * group
 */
export interface MsgAddUserToUserGroup {
    /** Id of the subspace inside which the group is */
    subspaceId: Long;
    /** Id of the group to which to add the user */
    groupId: number;
    /** User to be added to the group */
    user: string;
    /** User signing the message */
    signer: string;
}
/**
 * MsgAddUserToUserGroupResponse defines the Msg/AddUserToUserGroupResponse
 * response type
 */
export interface MsgAddUserToUserGroupResponse {
}
/**
 * MsgRemoveUserFromUserGroup represents the message used to remove a user from
 * a user group
 */
export interface MsgRemoveUserFromUserGroup {
    /** Id of the subspace inside which the group to remove the user from is */
    subspaceId: Long;
    /** Id of the group from which to remove the user */
    groupId: number;
    /** User to be removed from the group */
    user: string;
    /** User signing the message */
    signer: string;
}
/**
 * MsgRemoveUserFromUserGroupResponse defines the
 * Msg/RemoveUserFromUserGroupResponse response type
 */
export interface MsgRemoveUserFromUserGroupResponse {
}
/**
 * MsgSetUserPermissions represents the message used to set the permissions of a
 * specific user
 */
export interface MsgSetUserPermissions {
    /** Id of the subspace inside which to set the permissions */
    subspaceId: Long;
    /** Id of the section for which to set the permissions */
    sectionId: number;
    /** User for which to set the permissions */
    user: string;
    /** Permissions to be set to the user */
    permissions: string[];
    /** User signing the message */
    signer: string;
}
/**
 * MsgSetUserPermissionsResponse defines the Msg/SetPermissionsResponse
 * response type
 */
export interface MsgSetUserPermissionsResponse {
}
export declare const MsgCreateSubspace: {
    encode(message: MsgCreateSubspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubspace;
    fromJSON(object: any): MsgCreateSubspace;
    toJSON(message: MsgCreateSubspace): unknown;
    fromPartial(object: DeepPartial<MsgCreateSubspace>): MsgCreateSubspace;
};
export declare const MsgCreateSubspaceResponse: {
    encode(message: MsgCreateSubspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubspaceResponse;
    fromJSON(object: any): MsgCreateSubspaceResponse;
    toJSON(message: MsgCreateSubspaceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSubspaceResponse>): MsgCreateSubspaceResponse;
};
export declare const MsgEditSubspace: {
    encode(message: MsgEditSubspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSubspace;
    fromJSON(object: any): MsgEditSubspace;
    toJSON(message: MsgEditSubspace): unknown;
    fromPartial(object: DeepPartial<MsgEditSubspace>): MsgEditSubspace;
};
export declare const MsgEditSubspaceResponse: {
    encode(_: MsgEditSubspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSubspaceResponse;
    fromJSON(_: any): MsgEditSubspaceResponse;
    toJSON(_: MsgEditSubspaceResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditSubspaceResponse>): MsgEditSubspaceResponse;
};
export declare const MsgDeleteSubspace: {
    encode(message: MsgDeleteSubspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSubspace;
    fromJSON(object: any): MsgDeleteSubspace;
    toJSON(message: MsgDeleteSubspace): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSubspace>): MsgDeleteSubspace;
};
export declare const MsgDeleteSubspaceResponse: {
    encode(_: MsgDeleteSubspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSubspaceResponse;
    fromJSON(_: any): MsgDeleteSubspaceResponse;
    toJSON(_: MsgDeleteSubspaceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSubspaceResponse>): MsgDeleteSubspaceResponse;
};
export declare const MsgCreateSection: {
    encode(message: MsgCreateSection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSection;
    fromJSON(object: any): MsgCreateSection;
    toJSON(message: MsgCreateSection): unknown;
    fromPartial(object: DeepPartial<MsgCreateSection>): MsgCreateSection;
};
export declare const MsgCreateSectionResponse: {
    encode(message: MsgCreateSectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSectionResponse;
    fromJSON(object: any): MsgCreateSectionResponse;
    toJSON(message: MsgCreateSectionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSectionResponse>): MsgCreateSectionResponse;
};
export declare const MsgEditSection: {
    encode(message: MsgEditSection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSection;
    fromJSON(object: any): MsgEditSection;
    toJSON(message: MsgEditSection): unknown;
    fromPartial(object: DeepPartial<MsgEditSection>): MsgEditSection;
};
export declare const MsgEditSectionResponse: {
    encode(_: MsgEditSectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSectionResponse;
    fromJSON(_: any): MsgEditSectionResponse;
    toJSON(_: MsgEditSectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditSectionResponse>): MsgEditSectionResponse;
};
export declare const MsgMoveSection: {
    encode(message: MsgMoveSection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveSection;
    fromJSON(object: any): MsgMoveSection;
    toJSON(message: MsgMoveSection): unknown;
    fromPartial(object: DeepPartial<MsgMoveSection>): MsgMoveSection;
};
export declare const MsgMoveSectionResponse: {
    encode(_: MsgMoveSectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveSectionResponse;
    fromJSON(_: any): MsgMoveSectionResponse;
    toJSON(_: MsgMoveSectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgMoveSectionResponse>): MsgMoveSectionResponse;
};
export declare const MsgDeleteSection: {
    encode(message: MsgDeleteSection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSection;
    fromJSON(object: any): MsgDeleteSection;
    toJSON(message: MsgDeleteSection): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSection>): MsgDeleteSection;
};
export declare const MsgDeleteSectionResponse: {
    encode(_: MsgDeleteSectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSectionResponse;
    fromJSON(_: any): MsgDeleteSectionResponse;
    toJSON(_: MsgDeleteSectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSectionResponse>): MsgDeleteSectionResponse;
};
export declare const MsgCreateUserGroup: {
    encode(message: MsgCreateUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserGroup;
    fromJSON(object: any): MsgCreateUserGroup;
    toJSON(message: MsgCreateUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserGroup>): MsgCreateUserGroup;
};
export declare const MsgCreateUserGroupResponse: {
    encode(message: MsgCreateUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserGroupResponse;
    fromJSON(object: any): MsgCreateUserGroupResponse;
    toJSON(message: MsgCreateUserGroupResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserGroupResponse>): MsgCreateUserGroupResponse;
};
export declare const MsgEditUserGroup: {
    encode(message: MsgEditUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditUserGroup;
    fromJSON(object: any): MsgEditUserGroup;
    toJSON(message: MsgEditUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgEditUserGroup>): MsgEditUserGroup;
};
export declare const MsgEditUserGroupResponse: {
    encode(_: MsgEditUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditUserGroupResponse;
    fromJSON(_: any): MsgEditUserGroupResponse;
    toJSON(_: MsgEditUserGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditUserGroupResponse>): MsgEditUserGroupResponse;
};
export declare const MsgMoveUserGroup: {
    encode(message: MsgMoveUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveUserGroup;
    fromJSON(object: any): MsgMoveUserGroup;
    toJSON(message: MsgMoveUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgMoveUserGroup>): MsgMoveUserGroup;
};
export declare const MsgMoveUserGroupResponse: {
    encode(_: MsgMoveUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveUserGroupResponse;
    fromJSON(_: any): MsgMoveUserGroupResponse;
    toJSON(_: MsgMoveUserGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgMoveUserGroupResponse>): MsgMoveUserGroupResponse;
};
export declare const MsgSetUserGroupPermissions: {
    encode(message: MsgSetUserGroupPermissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserGroupPermissions;
    fromJSON(object: any): MsgSetUserGroupPermissions;
    toJSON(message: MsgSetUserGroupPermissions): unknown;
    fromPartial(object: DeepPartial<MsgSetUserGroupPermissions>): MsgSetUserGroupPermissions;
};
export declare const MsgSetUserGroupPermissionsResponse: {
    encode(_: MsgSetUserGroupPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserGroupPermissionsResponse;
    fromJSON(_: any): MsgSetUserGroupPermissionsResponse;
    toJSON(_: MsgSetUserGroupPermissionsResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetUserGroupPermissionsResponse>): MsgSetUserGroupPermissionsResponse;
};
export declare const MsgDeleteUserGroup: {
    encode(message: MsgDeleteUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserGroup;
    fromJSON(object: any): MsgDeleteUserGroup;
    toJSON(message: MsgDeleteUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUserGroup>): MsgDeleteUserGroup;
};
export declare const MsgDeleteUserGroupResponse: {
    encode(_: MsgDeleteUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserGroupResponse;
    fromJSON(_: any): MsgDeleteUserGroupResponse;
    toJSON(_: MsgDeleteUserGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUserGroupResponse>): MsgDeleteUserGroupResponse;
};
export declare const MsgAddUserToUserGroup: {
    encode(message: MsgAddUserToUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUserToUserGroup;
    fromJSON(object: any): MsgAddUserToUserGroup;
    toJSON(message: MsgAddUserToUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgAddUserToUserGroup>): MsgAddUserToUserGroup;
};
export declare const MsgAddUserToUserGroupResponse: {
    encode(_: MsgAddUserToUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUserToUserGroupResponse;
    fromJSON(_: any): MsgAddUserToUserGroupResponse;
    toJSON(_: MsgAddUserToUserGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddUserToUserGroupResponse>): MsgAddUserToUserGroupResponse;
};
export declare const MsgRemoveUserFromUserGroup: {
    encode(message: MsgRemoveUserFromUserGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUserFromUserGroup;
    fromJSON(object: any): MsgRemoveUserFromUserGroup;
    toJSON(message: MsgRemoveUserFromUserGroup): unknown;
    fromPartial(object: DeepPartial<MsgRemoveUserFromUserGroup>): MsgRemoveUserFromUserGroup;
};
export declare const MsgRemoveUserFromUserGroupResponse: {
    encode(_: MsgRemoveUserFromUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUserFromUserGroupResponse;
    fromJSON(_: any): MsgRemoveUserFromUserGroupResponse;
    toJSON(_: MsgRemoveUserFromUserGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveUserFromUserGroupResponse>): MsgRemoveUserFromUserGroupResponse;
};
export declare const MsgSetUserPermissions: {
    encode(message: MsgSetUserPermissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserPermissions;
    fromJSON(object: any): MsgSetUserPermissions;
    toJSON(message: MsgSetUserPermissions): unknown;
    fromPartial(object: DeepPartial<MsgSetUserPermissions>): MsgSetUserPermissions;
};
export declare const MsgSetUserPermissionsResponse: {
    encode(_: MsgSetUserPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserPermissionsResponse;
    fromJSON(_: any): MsgSetUserPermissionsResponse;
    toJSON(_: MsgSetUserPermissionsResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetUserPermissionsResponse>): MsgSetUserPermissionsResponse;
};
