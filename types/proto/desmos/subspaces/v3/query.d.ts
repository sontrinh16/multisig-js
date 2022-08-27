import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Subspace, Section, UserGroup } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QuerySubspacesRequest is the request type for the Query/Subspaces RPC method */
export interface QuerySubspacesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QuerySubspacesResponse is the response type for the Query/Subspaces RPC
 * method
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
    pagination: PageResponse;
}
/** QuerySubspace is the request type for the Query/Subspace RPC method */
export interface QuerySubspaceRequest {
    /** Id of the subspace to query */
    subspaceId: Long;
}
/** QuerySubspaceResponse is the response type for the Query/Subspace method */
export interface QuerySubspaceResponse {
    subspace: Subspace;
}
/** QuerySectionsRequest is the request type for Query/Sections RPC method */
export interface QuerySectionsRequest {
    /** Id of the subspace to query the sections for */
    subspaceId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QuerySectionsResponse is the response type for Query/Sections RPC method */
export interface QuerySectionsResponse {
    sections: Section[];
    pagination: PageResponse;
}
/** QuerySectionRequest is the request type for Query/Section RPC method */
export interface QuerySectionRequest {
    /** Id of the subspace inside which to search for */
    subspaceId: Long;
    /** Id of the searched section */
    sectionId: number;
}
/** QuerySectionResponse is the response type for Query/Section RPC method */
export interface QuerySectionResponse {
    section: Section;
}
/**
 * QueryUserGroupsRequest is the request type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsRequest {
    /** Id of the subspace to query the groups for */
    subspaceId: Long;
    /** (optional) Section id to query the groups for */
    sectionId: number;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryUserGroupsResponse is the response type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsResponse {
    groups: UserGroup[];
    pagination: PageResponse;
}
/** QueryUserGroupRequest is the request type for the Query/UserGroup RPC method */
export interface QueryUserGroupRequest {
    /** Id of the subspace that contains the group */
    subspaceId: Long;
    /** Id of the group to query */
    groupId: number;
}
/**
 * QueryUserGroupResponse is the response type for the Query/UserGroup RPC
 * method
 */
export interface QueryUserGroupResponse {
    group: UserGroup;
}
/**
 * QueryUserGroupMembersRequest is the request type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersRequest {
    /** Id of the subspace that contains the group */
    subspaceId: Long;
    /** Id of the user group to query the members for */
    groupId: number;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryUserGroupMembersResponse is the response type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersResponse {
    members: string[];
    pagination: PageResponse;
}
/**
 * QueryUserPermissionsRequest is the request type for the Query/UserPermissions
 * RPC method
 */
export interface QueryUserPermissionsRequest {
    /** Id of the subspace to query the permissions for */
    subspaceId: Long;
    /** Id of the section to query the permissions for */
    sectionId: number;
    /** Address of the user to query the permissions for */
    user: string;
}
/**
 * QueryUserPermissionsRequest is the response type for the
 * Query/UserPermissions method
 */
export interface QueryUserPermissionsResponse {
    permissions: string[];
    details: PermissionDetail[];
}
/** PermissionDetail contains the details data of a permission */
export interface PermissionDetail {
    /** Id of the subspace for which this permission is valid */
    subspaceId: Long;
    /** Id of the section for which this permission is valid */
    sectionId: number;
    /** User represents a user permission */
    user?: PermissionDetail_User;
    /** Group represents a group permission */
    group?: PermissionDetail_Group;
}
/** User is a permission that has been set to a specific user */
export interface PermissionDetail_User {
    /** User for which the permission was set */
    user: string;
    /** Permissions set to the user */
    permission: string[];
}
/** Group is a permission that has been set to a user group */
export interface PermissionDetail_Group {
    /** Unique id of the group */
    groupId: number;
    /** Permissions set to the group */
    permission: string[];
}
export declare const QuerySubspacesRequest: {
    encode(message: QuerySubspacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesRequest;
    fromJSON(object: any): QuerySubspacesRequest;
    toJSON(message: QuerySubspacesRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest;
};
export declare const QuerySubspacesResponse: {
    encode(message: QuerySubspacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesResponse;
    fromJSON(object: any): QuerySubspacesResponse;
    toJSON(message: QuerySubspacesResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse;
};
export declare const QuerySubspaceRequest: {
    encode(message: QuerySubspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspaceRequest;
    fromJSON(object: any): QuerySubspaceRequest;
    toJSON(message: QuerySubspaceRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubspaceRequest>): QuerySubspaceRequest;
};
export declare const QuerySubspaceResponse: {
    encode(message: QuerySubspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspaceResponse;
    fromJSON(object: any): QuerySubspaceResponse;
    toJSON(message: QuerySubspaceResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubspaceResponse>): QuerySubspaceResponse;
};
export declare const QuerySectionsRequest: {
    encode(message: QuerySectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionsRequest;
    fromJSON(object: any): QuerySectionsRequest;
    toJSON(message: QuerySectionsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySectionsRequest>): QuerySectionsRequest;
};
export declare const QuerySectionsResponse: {
    encode(message: QuerySectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionsResponse;
    fromJSON(object: any): QuerySectionsResponse;
    toJSON(message: QuerySectionsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySectionsResponse>): QuerySectionsResponse;
};
export declare const QuerySectionRequest: {
    encode(message: QuerySectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionRequest;
    fromJSON(object: any): QuerySectionRequest;
    toJSON(message: QuerySectionRequest): unknown;
    fromPartial(object: DeepPartial<QuerySectionRequest>): QuerySectionRequest;
};
export declare const QuerySectionResponse: {
    encode(message: QuerySectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionResponse;
    fromJSON(object: any): QuerySectionResponse;
    toJSON(message: QuerySectionResponse): unknown;
    fromPartial(object: DeepPartial<QuerySectionResponse>): QuerySectionResponse;
};
export declare const QueryUserGroupsRequest: {
    encode(message: QueryUserGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupsRequest;
    fromJSON(object: any): QueryUserGroupsRequest;
    toJSON(message: QueryUserGroupsRequest): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupsRequest>): QueryUserGroupsRequest;
};
export declare const QueryUserGroupsResponse: {
    encode(message: QueryUserGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupsResponse;
    fromJSON(object: any): QueryUserGroupsResponse;
    toJSON(message: QueryUserGroupsResponse): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupsResponse>): QueryUserGroupsResponse;
};
export declare const QueryUserGroupRequest: {
    encode(message: QueryUserGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupRequest;
    fromJSON(object: any): QueryUserGroupRequest;
    toJSON(message: QueryUserGroupRequest): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupRequest>): QueryUserGroupRequest;
};
export declare const QueryUserGroupResponse: {
    encode(message: QueryUserGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupResponse;
    fromJSON(object: any): QueryUserGroupResponse;
    toJSON(message: QueryUserGroupResponse): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupResponse>): QueryUserGroupResponse;
};
export declare const QueryUserGroupMembersRequest: {
    encode(message: QueryUserGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupMembersRequest;
    fromJSON(object: any): QueryUserGroupMembersRequest;
    toJSON(message: QueryUserGroupMembersRequest): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupMembersRequest>): QueryUserGroupMembersRequest;
};
export declare const QueryUserGroupMembersResponse: {
    encode(message: QueryUserGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupMembersResponse;
    fromJSON(object: any): QueryUserGroupMembersResponse;
    toJSON(message: QueryUserGroupMembersResponse): unknown;
    fromPartial(object: DeepPartial<QueryUserGroupMembersResponse>): QueryUserGroupMembersResponse;
};
export declare const QueryUserPermissionsRequest: {
    encode(message: QueryUserPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPermissionsRequest;
    fromJSON(object: any): QueryUserPermissionsRequest;
    toJSON(message: QueryUserPermissionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryUserPermissionsRequest>): QueryUserPermissionsRequest;
};
export declare const QueryUserPermissionsResponse: {
    encode(message: QueryUserPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPermissionsResponse;
    fromJSON(object: any): QueryUserPermissionsResponse;
    toJSON(message: QueryUserPermissionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryUserPermissionsResponse>): QueryUserPermissionsResponse;
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
