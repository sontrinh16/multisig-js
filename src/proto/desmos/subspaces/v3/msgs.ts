import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

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
export interface MsgEditSubspaceResponse {}

/** MsgDeleteSubspace represents the message used to delete a subspace */
export interface MsgDeleteSubspace {
  /** Id of the subspace to delete */
  subspaceId: Long;

  /** Address of the user deleting the subspace */
  signer: string;
}

/** MsgDeleteSubspaceResponse defines the Msg/DeleteSubspace response type */
export interface MsgDeleteSubspaceResponse {}

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
export interface MsgEditSectionResponse {}

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
export interface MsgMoveSectionResponse {}

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
export interface MsgDeleteSectionResponse {}

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
export interface MsgEditUserGroupResponse {}

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
export interface MsgMoveUserGroupResponse {}

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
export interface MsgSetUserGroupPermissionsResponse {}

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
export interface MsgDeleteUserGroupResponse {}

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
export interface MsgAddUserToUserGroupResponse {}

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
export interface MsgRemoveUserFromUserGroupResponse {}

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
export interface MsgSetUserPermissionsResponse {}

function createBaseMsgCreateSubspace(): MsgCreateSubspace {
  return {
    name: "",
    description: "",
    treasury: "",
    owner: "",
    creator: ""
  };
}

export const MsgCreateSubspace = {
  encode(message: MsgCreateSubspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.treasury !== "") {
      writer.uint32(26).string(message.treasury);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubspace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.treasury = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSubspace {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: MsgCreateSubspace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSubspace>): MsgCreateSubspace {
    const message = createBaseMsgCreateSubspace();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgCreateSubspaceResponse(): MsgCreateSubspaceResponse {
  return {
    subspaceId: Long.UZERO
  };
}

export const MsgCreateSubspaceResponse = {
  encode(message: MsgCreateSubspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubspaceResponse();

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

  fromJSON(object: any): MsgCreateSubspaceResponse {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateSubspaceResponse): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSubspaceResponse>): MsgCreateSubspaceResponse {
    const message = createBaseMsgCreateSubspaceResponse();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgEditSubspace(): MsgEditSubspace {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    treasury: "",
    owner: "",
    signer: ""
  };
}

export const MsgEditSubspace = {
  encode(message: MsgEditSubspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.treasury !== "") {
      writer.uint32(34).string(message.treasury);
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSubspace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.treasury = reader.string();
          break;

        case 5:
          message.owner = reader.string();
          break;

        case 6:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditSubspace {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgEditSubspace): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.owner !== undefined && (obj.owner = message.owner);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditSubspace>): MsgEditSubspace {
    const message = createBaseMsgEditSubspace();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgEditSubspaceResponse(): MsgEditSubspaceResponse {
  return {};
}

export const MsgEditSubspaceResponse = {
  encode(_: MsgEditSubspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSubspaceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEditSubspaceResponse {
    return {};
  },

  toJSON(_: MsgEditSubspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditSubspaceResponse>): MsgEditSubspaceResponse {
    const message = createBaseMsgEditSubspaceResponse();
    return message;
  }

};

function createBaseMsgDeleteSubspace(): MsgDeleteSubspace {
  return {
    subspaceId: Long.UZERO,
    signer: ""
  };
}

export const MsgDeleteSubspace = {
  encode(message: MsgDeleteSubspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSubspace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteSubspace {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgDeleteSubspace): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSubspace>): MsgDeleteSubspace {
    const message = createBaseMsgDeleteSubspace();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteSubspaceResponse(): MsgDeleteSubspaceResponse {
  return {};
}

export const MsgDeleteSubspaceResponse = {
  encode(_: MsgDeleteSubspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSubspaceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDeleteSubspaceResponse {
    return {};
  },

  toJSON(_: MsgDeleteSubspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteSubspaceResponse>): MsgDeleteSubspaceResponse {
    const message = createBaseMsgDeleteSubspaceResponse();
    return message;
  }

};

function createBaseMsgCreateSection(): MsgCreateSection {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    parentId: 0,
    creator: ""
  };
}

export const MsgCreateSection = {
  encode(message: MsgCreateSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.parentId !== 0) {
      writer.uint32(32).uint32(message.parentId);
    }

    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspaceId = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.parentId = reader.uint32();
          break;

        case 5:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSection {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      parentId: isSet(object.parentId) ? Number(object.parentId) : 0,
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: MsgCreateSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.parentId !== undefined && (obj.parentId = Math.round(message.parentId));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSection>): MsgCreateSection {
    const message = createBaseMsgCreateSection();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.parentId = object.parentId ?? 0;
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgCreateSectionResponse(): MsgCreateSectionResponse {
  return {
    sectionId: 0
  };
}

export const MsgCreateSectionResponse = {
  encode(message: MsgCreateSectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sectionId !== 0) {
      writer.uint32(8).uint32(message.sectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sectionId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSectionResponse {
    return {
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0
    };
  },

  toJSON(message: MsgCreateSectionResponse): unknown {
    const obj: any = {};
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSectionResponse>): MsgCreateSectionResponse {
    const message = createBaseMsgCreateSectionResponse();
    message.sectionId = object.sectionId ?? 0;
    return message;
  }

};

function createBaseMsgEditSection(): MsgEditSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    name: "",
    description: "",
    editor: ""
  };
}

export const MsgEditSection = {
  encode(message: MsgEditSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.editor !== "") {
      writer.uint32(42).string(message.editor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSection();

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
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.editor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditSection {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      editor: isSet(object.editor) ? String(object.editor) : ""
    };
  },

  toJSON(message: MsgEditSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditSection>): MsgEditSection {
    const message = createBaseMsgEditSection();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.editor = object.editor ?? "";
    return message;
  }

};

function createBaseMsgEditSectionResponse(): MsgEditSectionResponse {
  return {};
}

export const MsgEditSectionResponse = {
  encode(_: MsgEditSectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEditSectionResponse {
    return {};
  },

  toJSON(_: MsgEditSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditSectionResponse>): MsgEditSectionResponse {
    const message = createBaseMsgEditSectionResponse();
    return message;
  }

};

function createBaseMsgMoveSection(): MsgMoveSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    newParentId: 0,
    signer: ""
  };
}

export const MsgMoveSection = {
  encode(message: MsgMoveSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.newParentId !== 0) {
      writer.uint32(24).uint32(message.newParentId);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveSection();

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
          message.newParentId = reader.uint32();
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMoveSection {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      newParentId: isSet(object.newParentId) ? Number(object.newParentId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgMoveSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.newParentId !== undefined && (obj.newParentId = Math.round(message.newParentId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMoveSection>): MsgMoveSection {
    const message = createBaseMsgMoveSection();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.newParentId = object.newParentId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgMoveSectionResponse(): MsgMoveSectionResponse {
  return {};
}

export const MsgMoveSectionResponse = {
  encode(_: MsgMoveSectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveSectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgMoveSectionResponse {
    return {};
  },

  toJSON(_: MsgMoveSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMoveSectionResponse>): MsgMoveSectionResponse {
    const message = createBaseMsgMoveSectionResponse();
    return message;
  }

};

function createBaseMsgDeleteSection(): MsgDeleteSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    signer: ""
  };
}

export const MsgDeleteSection = {
  encode(message: MsgDeleteSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSection();

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
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteSection {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgDeleteSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSection>): MsgDeleteSection {
    const message = createBaseMsgDeleteSection();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteSectionResponse(): MsgDeleteSectionResponse {
  return {};
}

export const MsgDeleteSectionResponse = {
  encode(_: MsgDeleteSectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDeleteSectionResponse {
    return {};
  },

  toJSON(_: MsgDeleteSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteSectionResponse>): MsgDeleteSectionResponse {
    const message = createBaseMsgDeleteSectionResponse();
    return message;
  }

};

function createBaseMsgCreateUserGroup(): MsgCreateUserGroup {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    name: "",
    description: "",
    defaultPermissions: [],
    initialMembers: [],
    creator: ""
  };
}

export const MsgCreateUserGroup = {
  encode(message: MsgCreateUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    for (const v of message.defaultPermissions) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.initialMembers) {
      writer.uint32(50).string(v!);
    }

    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserGroup();

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
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.defaultPermissions.push(reader.string());
          break;

        case 6:
          message.initialMembers.push(reader.string());
          break;

        case 7:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      defaultPermissions: Array.isArray(object?.defaultPermissions) ? object.defaultPermissions.map((e: any) => String(e)) : [],
      initialMembers: Array.isArray(object?.initialMembers) ? object.initialMembers.map((e: any) => String(e)) : [],
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: MsgCreateUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);

    if (message.defaultPermissions) {
      obj.defaultPermissions = message.defaultPermissions.map(e => e);
    } else {
      obj.defaultPermissions = [];
    }

    if (message.initialMembers) {
      obj.initialMembers = message.initialMembers.map(e => e);
    } else {
      obj.initialMembers = [];
    }

    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUserGroup>): MsgCreateUserGroup {
    const message = createBaseMsgCreateUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultPermissions = object.defaultPermissions?.map(e => e) || [];
    message.initialMembers = object.initialMembers?.map(e => e) || [];
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgCreateUserGroupResponse(): MsgCreateUserGroupResponse {
  return {
    groupId: 0
  };
}

export const MsgCreateUserGroupResponse = {
  encode(message: MsgCreateUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateUserGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0
    };
  },

  toJSON(message: MsgCreateUserGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUserGroupResponse>): MsgCreateUserGroupResponse {
    const message = createBaseMsgCreateUserGroupResponse();
    message.groupId = object.groupId ?? 0;
    return message;
  }

};

function createBaseMsgEditUserGroup(): MsgEditUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    name: "",
    description: "",
    signer: ""
  };
}

export const MsgEditUserGroup = {
  encode(message: MsgEditUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditUserGroup();

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
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgEditUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditUserGroup>): MsgEditUserGroup {
    const message = createBaseMsgEditUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgEditUserGroupResponse(): MsgEditUserGroupResponse {
  return {};
}

export const MsgEditUserGroupResponse = {
  encode(_: MsgEditUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEditUserGroupResponse {
    return {};
  },

  toJSON(_: MsgEditUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditUserGroupResponse>): MsgEditUserGroupResponse {
    const message = createBaseMsgEditUserGroupResponse();
    return message;
  }

};

function createBaseMsgMoveUserGroup(): MsgMoveUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    newSectionId: 0,
    signer: ""
  };
}

export const MsgMoveUserGroup = {
  encode(message: MsgMoveUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.newSectionId !== 0) {
      writer.uint32(24).uint32(message.newSectionId);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveUserGroup();

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
          message.newSectionId = reader.uint32();
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMoveUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      newSectionId: isSet(object.newSectionId) ? Number(object.newSectionId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgMoveUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.newSectionId !== undefined && (obj.newSectionId = Math.round(message.newSectionId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMoveUserGroup>): MsgMoveUserGroup {
    const message = createBaseMsgMoveUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.newSectionId = object.newSectionId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgMoveUserGroupResponse(): MsgMoveUserGroupResponse {
  return {};
}

export const MsgMoveUserGroupResponse = {
  encode(_: MsgMoveUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgMoveUserGroupResponse {
    return {};
  },

  toJSON(_: MsgMoveUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMoveUserGroupResponse>): MsgMoveUserGroupResponse {
    const message = createBaseMsgMoveUserGroupResponse();
    return message;
  }

};

function createBaseMsgSetUserGroupPermissions(): MsgSetUserGroupPermissions {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    permissions: [],
    signer: ""
  };
}

export const MsgSetUserGroupPermissions = {
  encode(message: MsgSetUserGroupPermissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserGroupPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserGroupPermissions();

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
          message.permissions.push(reader.string());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetUserGroupPermissions {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgSetUserGroupPermissions): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }

    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetUserGroupPermissions>): MsgSetUserGroupPermissions {
    const message = createBaseMsgSetUserGroupPermissions();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.permissions = object.permissions?.map(e => e) || [];
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgSetUserGroupPermissionsResponse(): MsgSetUserGroupPermissionsResponse {
  return {};
}

export const MsgSetUserGroupPermissionsResponse = {
  encode(_: MsgSetUserGroupPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserGroupPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserGroupPermissionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSetUserGroupPermissionsResponse {
    return {};
  },

  toJSON(_: MsgSetUserGroupPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetUserGroupPermissionsResponse>): MsgSetUserGroupPermissionsResponse {
    const message = createBaseMsgSetUserGroupPermissionsResponse();
    return message;
  }

};

function createBaseMsgDeleteUserGroup(): MsgDeleteUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    signer: ""
  };
}

export const MsgDeleteUserGroup = {
  encode(message: MsgDeleteUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserGroup();

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
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgDeleteUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteUserGroup>): MsgDeleteUserGroup {
    const message = createBaseMsgDeleteUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteUserGroupResponse(): MsgDeleteUserGroupResponse {
  return {};
}

export const MsgDeleteUserGroupResponse = {
  encode(_: MsgDeleteUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDeleteUserGroupResponse {
    return {};
  },

  toJSON(_: MsgDeleteUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteUserGroupResponse>): MsgDeleteUserGroupResponse {
    const message = createBaseMsgDeleteUserGroupResponse();
    return message;
  }

};

function createBaseMsgAddUserToUserGroup(): MsgAddUserToUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    user: "",
    signer: ""
  };
}

export const MsgAddUserToUserGroup = {
  encode(message: MsgAddUserToUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUserToUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUserToUserGroup();

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
          message.user = reader.string();
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddUserToUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgAddUserToUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.user !== undefined && (obj.user = message.user);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddUserToUserGroup>): MsgAddUserToUserGroup {
    const message = createBaseMsgAddUserToUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.user = object.user ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddUserToUserGroupResponse(): MsgAddUserToUserGroupResponse {
  return {};
}

export const MsgAddUserToUserGroupResponse = {
  encode(_: MsgAddUserToUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUserToUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUserToUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddUserToUserGroupResponse {
    return {};
  },

  toJSON(_: MsgAddUserToUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddUserToUserGroupResponse>): MsgAddUserToUserGroupResponse {
    const message = createBaseMsgAddUserToUserGroupResponse();
    return message;
  }

};

function createBaseMsgRemoveUserFromUserGroup(): MsgRemoveUserFromUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    user: "",
    signer: ""
  };
}

export const MsgRemoveUserFromUserGroup = {
  encode(message: MsgRemoveUserFromUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }

    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUserFromUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUserFromUserGroup();

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
          message.user = reader.string();
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveUserFromUserGroup {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgRemoveUserFromUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    message.user !== undefined && (obj.user = message.user);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveUserFromUserGroup>): MsgRemoveUserFromUserGroup {
    const message = createBaseMsgRemoveUserFromUserGroup();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.user = object.user ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgRemoveUserFromUserGroupResponse(): MsgRemoveUserFromUserGroupResponse {
  return {};
}

export const MsgRemoveUserFromUserGroupResponse = {
  encode(_: MsgRemoveUserFromUserGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUserFromUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUserFromUserGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRemoveUserFromUserGroupResponse {
    return {};
  },

  toJSON(_: MsgRemoveUserFromUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveUserFromUserGroupResponse>): MsgRemoveUserFromUserGroupResponse {
    const message = createBaseMsgRemoveUserFromUserGroupResponse();
    return message;
  }

};

function createBaseMsgSetUserPermissions(): MsgSetUserPermissions {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: "",
    permissions: [],
    signer: ""
  };
}

export const MsgSetUserPermissions = {
  encode(message: MsgSetUserPermissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }

    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }

    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }

    for (const v of message.permissions) {
      writer.uint32(34).string(v!);
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPermissions();

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

        case 4:
          message.permissions.push(reader.string());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetUserPermissions {
    return {
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgSetUserPermissions): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined && (obj.sectionId = Math.round(message.sectionId));
    message.user !== undefined && (obj.user = message.user);

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }

    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetUserPermissions>): MsgSetUserPermissions {
    const message = createBaseMsgSetUserPermissions();
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgSetUserPermissionsResponse(): MsgSetUserPermissionsResponse {
  return {};
}

export const MsgSetUserPermissionsResponse = {
  encode(_: MsgSetUserPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUserPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPermissionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSetUserPermissionsResponse {
    return {};
  },

  toJSON(_: MsgSetUserPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetUserPermissionsResponse>): MsgSetUserPermissionsResponse {
    const message = createBaseMsgSetUserPermissionsResponse();
    return message;
  }

};