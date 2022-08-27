import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Subspace, Section, UserGroup } from "./models";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

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

function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {
    pagination: undefined
  };
}

export const QuerySubspacesRequest = {
  encode(message: QuerySubspacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubspacesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySubspacesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: [],
    pagination: undefined
  };
}

export const QuerySubspacesResponse = {
  encode(message: QuerySubspacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e: any) => Subspace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};

    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toJSON(e) : undefined);
    } else {
      obj.subspaces = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySubspaceRequest(): QuerySubspaceRequest {
  return {
    subspaceId: Long.UZERO
  };
}

export const QuerySubspaceRequest = {
  encode(message: QuerySubspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubspaceRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: QuerySubspaceRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubspaceRequest>): QuerySubspaceRequest {
    const message = createBaseQuerySubspaceRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySubspaceResponse(): QuerySubspaceResponse {
  return {
    subspace: undefined
  };
}

export const QuerySubspaceResponse = {
  encode(message: QuerySubspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== undefined) {
      Subspace.encode(message.subspace, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspace = Subspace.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubspaceResponse {
    return {
      subspace: isSet(object.subspace) ? Subspace.fromJSON(object.subspace) : undefined
    };
  },

  toJSON(message: QuerySubspaceResponse): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace ? Subspace.toJSON(message.subspace) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubspaceResponse>): QuerySubspaceResponse {
    const message = createBaseQuerySubspaceResponse();
    message.subspace = object.subspace !== undefined && object.subspace !== null ? Subspace.fromPartial(object.subspace) : undefined;
    return message;
  }

};

function createBaseQuerySectionsRequest(): QuerySectionsRequest {
  return {
    subspaceId: Long.UZERO,
    pagination: undefined
  };
}

export const QuerySectionsRequest = {
  encode(message: QuerySectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySectionsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySectionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySectionsRequest>): QuerySectionsRequest {
    const message = createBaseQuerySectionsRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySectionsResponse(): QuerySectionsResponse {
  return {
    sections: [],
    pagination: undefined
  };
}

export const QuerySectionsResponse = {
  encode(message: QuerySectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sections.push(Section.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySectionsResponse {
    return {
      sections: Array.isArray(object?.sections) ? object.sections.map((e: any) => Section.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySectionsResponse): unknown {
    const obj: any = {};

    if (message.sections) {
      obj.sections = message.sections.map(e => e ? Section.toJSON(e) : undefined);
    } else {
      obj.sections = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySectionsResponse>): QuerySectionsResponse {
    const message = createBaseQuerySectionsResponse();
    message.sections = object.sections?.map(e => Section.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySectionRequest(): QuerySectionRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0
  };
}

export const QuerySectionRequest = {
  encode(message: QuerySectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.sectionId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySectionRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0
    };
  },

  toJSON(message: QuerySectionRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySectionRequest>): QuerySectionRequest {
    const message = createBaseQuerySectionRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    return message;
  }

};

function createBaseQuerySectionResponse(): QuerySectionResponse {
  return {
    section: undefined
  };
}

export const QuerySectionResponse = {
  encode(message: QuerySectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.section !== undefined) {
      Section.encode(message.section, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.section = Section.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySectionResponse {
    return {
      section: isSet(object.section) ? Section.fromJSON(object.section) : undefined
    };
  },

  toJSON(message: QuerySectionResponse): unknown {
    const obj: any = {};
    message.section !== undefined && (obj.section = message.section ? Section.toJSON(message.section) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySectionResponse>): QuerySectionResponse {
    const message = createBaseQuerySectionResponse();
    message.section = object.section !== undefined && object.section !== null ? Section.fromPartial(object.section) : undefined;
    return message;
  }

};

function createBaseQueryUserGroupsRequest(): QueryUserGroupsRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    pagination: undefined
  };
}

export const QueryUserGroupsRequest = {
  encode(message: QueryUserGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.sectionId = reader.uint32();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryUserGroupsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupsRequest>): QueryUserGroupsRequest {
    const message = createBaseQueryUserGroupsRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserGroupsResponse(): QueryUserGroupsResponse {
  return {
    groups: [],
    pagination: undefined
  };
}

export const QueryUserGroupsResponse = {
  encode(message: QueryUserGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      UserGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groups.push(UserGroup.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupsResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => UserGroup.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryUserGroupsResponse): unknown {
    const obj: any = {};

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? UserGroup.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupsResponse>): QueryUserGroupsResponse {
    const message = createBaseQueryUserGroupsResponse();
    message.groups = object.groups?.map(e => UserGroup.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserGroupRequest(): QueryUserGroupRequest {
  return {
    subspaceId: Long.UZERO,
    groupId: 0
  };
}

export const QueryUserGroupRequest = {
  encode(message: QueryUserGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.groupId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0
    };
  },

  toJSON(message: QueryUserGroupRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupRequest>): QueryUserGroupRequest {
    const message = createBaseQueryUserGroupRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    return message;
  }

};

function createBaseQueryUserGroupResponse(): QueryUserGroupResponse {
  return {
    group: undefined
  };
}

export const QueryUserGroupResponse = {
  encode(message: QueryUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      UserGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.group = UserGroup.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupResponse {
    return {
      group: isSet(object.group) ? UserGroup.fromJSON(object.group) : undefined
    };
  },

  toJSON(message: QueryUserGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? UserGroup.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupResponse>): QueryUserGroupResponse {
    const message = createBaseQueryUserGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? UserGroup.fromPartial(object.group) : undefined;
    return message;
  }

};

function createBaseQueryUserGroupMembersRequest(): QueryUserGroupMembersRequest {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    pagination: undefined
  };
}

export const QueryUserGroupMembersRequest = {
  encode(message: QueryUserGroupMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupMembersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.groupId = reader.uint32();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupMembersRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryUserGroupMembersRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupMembersRequest>): QueryUserGroupMembersRequest {
    const message = createBaseQueryUserGroupMembersRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserGroupMembersResponse(): QueryUserGroupMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}

export const QueryUserGroupMembersResponse = {
  encode(message: QueryUserGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupMembersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.members.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryUserGroupMembersResponse): unknown {
    const obj: any = {};

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserGroupMembersResponse>): QueryUserGroupMembersResponse {
    const message = createBaseQueryUserGroupMembersResponse();
    message.members = object.members?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserPermissionsRequest(): QueryUserPermissionsRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: ""
  };
}

export const QueryUserPermissionsRequest = {
  encode(message: QueryUserPermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPermissionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.sectionId = reader.uint32();
          break;

        case 3:
          message.user = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserPermissionsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? String(object.user) : ""
    };
  },

  toJSON(message: QueryUserPermissionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserPermissionsRequest>): QueryUserPermissionsRequest {
    const message = createBaseQueryUserPermissionsRequest();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user ?? "";
    return message;
  }

};

function createBaseQueryUserPermissionsResponse(): QueryUserPermissionsResponse {
  return {
    permissions: [],
    details: []
  };
}

export const QueryUserPermissionsResponse = {
  encode(message: QueryUserPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.details) {
      PermissionDetail.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPermissionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.permissions.push(reader.string());
          break;

        case 2:
          message.details.push(PermissionDetail.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUserPermissionsResponse {
    return {
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
      details: Array.isArray(object?.details) ? object.details.map((e: any) => PermissionDetail.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryUserPermissionsResponse): unknown {
    const obj: any = {};

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }

    if (message.details) {
      obj.details = message.details.map(e => e ? PermissionDetail.toJSON(e) : undefined);
    } else {
      obj.details = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserPermissionsResponse>): QueryUserPermissionsResponse {
    const message = createBaseQueryUserPermissionsResponse();
    message.permissions = object.permissions?.map(e => e) || [];
    message.details = object.details?.map(e => PermissionDetail.fromPartial(e)) || [];
    return message;
  }

};

function createBasePermissionDetail(): PermissionDetail {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: undefined,
    group: undefined
  };
}

export const PermissionDetail = {
  encode(message: PermissionDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.user !== undefined) {
      PermissionDetail_User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }

    if (message.group !== undefined) {
      PermissionDetail_Group.encode(message.group, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.sectionId = reader.uint32();
          break;

        case 3:
          message.user = PermissionDetail_User.decode(reader, reader.uint32());
          break;

        case 4:
          message.group = PermissionDetail_Group.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PermissionDetail {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? PermissionDetail_User.fromJSON(object.user) : undefined,
      group: isSet(object.group) ? PermissionDetail_Group.fromJSON(object.group) : undefined
    };
  },

  toJSON(message: PermissionDetail): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.user !== undefined && (obj.user = message.user ? PermissionDetail_User.toJSON(message.user) : undefined);
    message.group !== undefined && (obj.group = message.group ? PermissionDetail_Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionDetail>): PermissionDetail {
    const message = createBasePermissionDetail();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user !== undefined && object.user !== null ? PermissionDetail_User.fromPartial(object.user) : undefined;
    message.group = object.group !== undefined && object.group !== null ? PermissionDetail_Group.fromPartial(object.group) : undefined;
    return message;
  }

};

function createBasePermissionDetail_User(): PermissionDetail_User {
  return {
    user: "",
    permission: []
  };
}

export const PermissionDetail_User = {
  encode(message: PermissionDetail_User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }

    for (const v of message.permission) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail_User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail_User();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;

        case 2:
          message.permission.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PermissionDetail_User {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      permission: Array.isArray(object?.permission) ? object.permission.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: PermissionDetail_User): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);

    if (message.permission) {
      obj.permission = message.permission.map(e => e);
    } else {
      obj.permission = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PermissionDetail_User>): PermissionDetail_User {
    const message = createBasePermissionDetail_User();
    message.user = object.user ?? "";
    message.permission = object.permission?.map(e => e) || [];
    return message;
  }

};

function createBasePermissionDetail_Group(): PermissionDetail_Group {
  return {
    groupId: 0,
    permission: []
  };
}

export const PermissionDetail_Group = {
  encode(message: PermissionDetail_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }

    for (const v of message.permission) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail_Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail_Group();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint32();
          break;

        case 2:
          message.permission.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PermissionDetail_Group {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      permission: Array.isArray(object?.permission) ? object.permission.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: PermissionDetail_Group): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));

    if (message.permission) {
      obj.permission = message.permission.map(e => e);
    } else {
      obj.permission = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PermissionDetail_Group>): PermissionDetail_Group {
    const message = createBasePermissionDetail_Group();
    message.groupId = object.groupId ?? 0;
    message.permission = object.permission?.map(e => e) || [];
    return message;
  }

};