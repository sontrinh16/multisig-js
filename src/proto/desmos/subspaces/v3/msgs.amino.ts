import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateSubspace, MsgEditSubspace, MsgDeleteSubspace, MsgCreateSection, MsgEditSection, MsgMoveSection, MsgDeleteSection, MsgCreateUserGroup, MsgEditUserGroup, MsgMoveUserGroup, MsgSetUserGroupPermissions, MsgDeleteUserGroup, MsgAddUserToUserGroup, MsgRemoveUserFromUserGroup, MsgSetUserPermissions } from "./msgs";
export interface AminoMsgCreateSubspace extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSubspace";
  value: {
    name: string;
    description: string;
    treasury: string;
    owner: string;
    creator: string;
  };
}
export interface AminoMsgEditSubspace extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSubspace";
  value: {
    subspace_id: string;
    name: string;
    description: string;
    treasury: string;
    owner: string;
    signer: string;
  };
}
export interface AminoMsgDeleteSubspace extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSubspace";
  value: {
    subspace_id: string;
    signer: string;
  };
}
export interface AminoMsgCreateSection extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSection";
  value: {
    subspace_id: string;
    name: string;
    description: string;
    parent_id: number;
    creator: string;
  };
}
export interface AminoMsgEditSection extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSection";
  value: {
    subspace_id: string;
    section_id: number;
    name: string;
    description: string;
    editor: string;
  };
}
export interface AminoMsgMoveSection extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveSection";
  value: {
    subspace_id: string;
    section_id: number;
    new_parent_id: number;
    signer: string;
  };
}
export interface AminoMsgDeleteSection extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSection";
  value: {
    subspace_id: string;
    section_id: number;
    signer: string;
  };
}
export interface AminoMsgCreateUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateUserGroup";
  value: {
    subspace_id: string;
    section_id: number;
    name: string;
    description: string;
    default_permissions: string[];
    initial_members: string[];
    creator: string;
  };
}
export interface AminoMsgEditUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgEditUserGroup";
  value: {
    subspace_id: string;
    group_id: number;
    name: string;
    description: string;
    signer: string;
  };
}
export interface AminoMsgMoveUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveUserGroup";
  value: {
    subspace_id: string;
    group_id: number;
    new_section_id: number;
    signer: string;
  };
}
export interface AminoMsgSetUserGroupPermissions extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserGroupPermissions";
  value: {
    subspace_id: string;
    group_id: number;
    permissions: string[];
    signer: string;
  };
}
export interface AminoMsgDeleteUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteUserGroup";
  value: {
    subspace_id: string;
    group_id: number;
    signer: string;
  };
}
export interface AminoMsgAddUserToUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgAddUserToUserGroup";
  value: {
    subspace_id: string;
    group_id: number;
    user: string;
    signer: string;
  };
}
export interface AminoMsgRemoveUserFromUserGroup extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup";
  value: {
    subspace_id: string;
    group_id: number;
    user: string;
    signer: string;
  };
}
export interface AminoMsgSetUserPermissions extends AminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserPermissions";
  value: {
    subspace_id: string;
    section_id: number;
    user: string;
    permissions: string[];
    signer: string;
  };
}
export const AminoConverter = {
  "/desmos.subspaces.v3.MsgCreateSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgCreateSubspace",
    toAmino: ({
      name,
      description,
      treasury,
      owner,
      creator
    }: MsgCreateSubspace): AminoMsgCreateSubspace["value"] => {
      return {
        name,
        description,
        treasury,
        owner,
        creator
      };
    },
    fromAmino: ({
      name,
      description,
      treasury,
      owner,
      creator
    }: AminoMsgCreateSubspace["value"]): MsgCreateSubspace => {
      return {
        name,
        description,
        treasury,
        owner,
        creator
      };
    }
  },
  "/desmos.subspaces.v3.MsgEditSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgEditSubspace",
    toAmino: ({
      subspaceId,
      name,
      description,
      treasury,
      owner,
      signer
    }: MsgEditSubspace): AminoMsgEditSubspace["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        name,
        description,
        treasury,
        owner,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      name,
      description,
      treasury,
      owner,
      signer
    }: AminoMsgEditSubspace["value"]): MsgEditSubspace => {
      return {
        subspaceId: Long.fromString(subspace_id),
        name,
        description,
        treasury,
        owner,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgDeleteSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteSubspace",
    toAmino: ({
      subspaceId,
      signer
    }: MsgDeleteSubspace): AminoMsgDeleteSubspace["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      signer
    }: AminoMsgDeleteSubspace["value"]): MsgDeleteSubspace => {
      return {
        subspaceId: Long.fromString(subspace_id),
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgCreateSection": {
    aminoType: "/desmos.subspaces.v3.MsgCreateSection",
    toAmino: ({
      subspaceId,
      name,
      description,
      parentId,
      creator
    }: MsgCreateSection): AminoMsgCreateSection["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        name,
        description,
        parent_id: parentId,
        creator
      };
    },
    fromAmino: ({
      subspace_id,
      name,
      description,
      parent_id,
      creator
    }: AminoMsgCreateSection["value"]): MsgCreateSection => {
      return {
        subspaceId: Long.fromString(subspace_id),
        name,
        description,
        parentId: parent_id,
        creator
      };
    }
  },
  "/desmos.subspaces.v3.MsgEditSection": {
    aminoType: "/desmos.subspaces.v3.MsgEditSection",
    toAmino: ({
      subspaceId,
      sectionId,
      name,
      description,
      editor
    }: MsgEditSection): AminoMsgEditSection["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        name,
        description,
        editor
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      name,
      description,
      editor
    }: AminoMsgEditSection["value"]): MsgEditSection => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        name,
        description,
        editor
      };
    }
  },
  "/desmos.subspaces.v3.MsgMoveSection": {
    aminoType: "/desmos.subspaces.v3.MsgMoveSection",
    toAmino: ({
      subspaceId,
      sectionId,
      newParentId,
      signer
    }: MsgMoveSection): AminoMsgMoveSection["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        new_parent_id: newParentId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      new_parent_id,
      signer
    }: AminoMsgMoveSection["value"]): MsgMoveSection => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        newParentId: new_parent_id,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgDeleteSection": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteSection",
    toAmino: ({
      subspaceId,
      sectionId,
      signer
    }: MsgDeleteSection): AminoMsgDeleteSection["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      signer
    }: AminoMsgDeleteSection["value"]): MsgDeleteSection => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgCreateUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgCreateUserGroup",
    toAmino: ({
      subspaceId,
      sectionId,
      name,
      description,
      defaultPermissions,
      initialMembers,
      creator
    }: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        name,
        description,
        default_permissions: defaultPermissions,
        initial_members: initialMembers,
        creator
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      name,
      description,
      default_permissions,
      initial_members,
      creator
    }: AminoMsgCreateUserGroup["value"]): MsgCreateUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        name,
        description,
        defaultPermissions: default_permissions,
        initialMembers: initial_members,
        creator
      };
    }
  },
  "/desmos.subspaces.v3.MsgEditUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgEditUserGroup",
    toAmino: ({
      subspaceId,
      groupId,
      name,
      description,
      signer
    }: MsgEditUserGroup): AminoMsgEditUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        name,
        description,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      name,
      description,
      signer
    }: AminoMsgEditUserGroup["value"]): MsgEditUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        name,
        description,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgMoveUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgMoveUserGroup",
    toAmino: ({
      subspaceId,
      groupId,
      newSectionId,
      signer
    }: MsgMoveUserGroup): AminoMsgMoveUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        new_section_id: newSectionId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      new_section_id,
      signer
    }: AminoMsgMoveUserGroup["value"]): MsgMoveUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        newSectionId: new_section_id,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
    aminoType: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
    toAmino: ({
      subspaceId,
      groupId,
      permissions,
      signer
    }: MsgSetUserGroupPermissions): AminoMsgSetUserGroupPermissions["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        permissions,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      permissions,
      signer
    }: AminoMsgSetUserGroupPermissions["value"]): MsgSetUserGroupPermissions => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        permissions,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgDeleteUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteUserGroup",
    toAmino: ({
      subspaceId,
      groupId,
      signer
    }: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      signer
    }: AminoMsgDeleteUserGroup["value"]): MsgDeleteUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
    toAmino: ({
      subspaceId,
      groupId,
      user,
      signer
    }: MsgAddUserToUserGroup): AminoMsgAddUserToUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        user,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      user,
      signer
    }: AminoMsgAddUserToUserGroup["value"]): MsgAddUserToUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        user,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
    toAmino: ({
      subspaceId,
      groupId,
      user,
      signer
    }: MsgRemoveUserFromUserGroup): AminoMsgRemoveUserFromUserGroup["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        group_id: groupId,
        user,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      group_id,
      user,
      signer
    }: AminoMsgRemoveUserFromUserGroup["value"]): MsgRemoveUserFromUserGroup => {
      return {
        subspaceId: Long.fromString(subspace_id),
        groupId: group_id,
        user,
        signer
      };
    }
  },
  "/desmos.subspaces.v3.MsgSetUserPermissions": {
    aminoType: "/desmos.subspaces.v3.MsgSetUserPermissions",
    toAmino: ({
      subspaceId,
      sectionId,
      user,
      permissions,
      signer
    }: MsgSetUserPermissions): AminoMsgSetUserPermissions["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        user,
        permissions,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      user,
      permissions,
      signer
    }: AminoMsgSetUserPermissions["value"]): MsgSetUserPermissions => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        user,
        permissions,
        signer
      };
    }
  }
};