import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/desmos.subspaces.v3.MsgCreateSubspace": {
        aminoType: string;
        toAmino: ({ name, description, treasury, owner, creator }: MsgCreateSubspace) => AminoMsgCreateSubspace["value"];
        fromAmino: ({ name, description, treasury, owner, creator }: AminoMsgCreateSubspace["value"]) => MsgCreateSubspace;
    };
    "/desmos.subspaces.v3.MsgEditSubspace": {
        aminoType: string;
        toAmino: ({ subspaceId, name, description, treasury, owner, signer }: MsgEditSubspace) => AminoMsgEditSubspace["value"];
        fromAmino: ({ subspace_id, name, description, treasury, owner, signer }: AminoMsgEditSubspace["value"]) => MsgEditSubspace;
    };
    "/desmos.subspaces.v3.MsgDeleteSubspace": {
        aminoType: string;
        toAmino: ({ subspaceId, signer }: MsgDeleteSubspace) => AminoMsgDeleteSubspace["value"];
        fromAmino: ({ subspace_id, signer }: AminoMsgDeleteSubspace["value"]) => MsgDeleteSubspace;
    };
    "/desmos.subspaces.v3.MsgCreateSection": {
        aminoType: string;
        toAmino: ({ subspaceId, name, description, parentId, creator }: MsgCreateSection) => AminoMsgCreateSection["value"];
        fromAmino: ({ subspace_id, name, description, parent_id, creator }: AminoMsgCreateSection["value"]) => MsgCreateSection;
    };
    "/desmos.subspaces.v3.MsgEditSection": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, name, description, editor }: MsgEditSection) => AminoMsgEditSection["value"];
        fromAmino: ({ subspace_id, section_id, name, description, editor }: AminoMsgEditSection["value"]) => MsgEditSection;
    };
    "/desmos.subspaces.v3.MsgMoveSection": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, newParentId, signer }: MsgMoveSection) => AminoMsgMoveSection["value"];
        fromAmino: ({ subspace_id, section_id, new_parent_id, signer }: AminoMsgMoveSection["value"]) => MsgMoveSection;
    };
    "/desmos.subspaces.v3.MsgDeleteSection": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, signer }: MsgDeleteSection) => AminoMsgDeleteSection["value"];
        fromAmino: ({ subspace_id, section_id, signer }: AminoMsgDeleteSection["value"]) => MsgDeleteSection;
    };
    "/desmos.subspaces.v3.MsgCreateUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, name, description, defaultPermissions, initialMembers, creator }: MsgCreateUserGroup) => AminoMsgCreateUserGroup["value"];
        fromAmino: ({ subspace_id, section_id, name, description, default_permissions, initial_members, creator }: AminoMsgCreateUserGroup["value"]) => MsgCreateUserGroup;
    };
    "/desmos.subspaces.v3.MsgEditUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, name, description, signer }: MsgEditUserGroup) => AminoMsgEditUserGroup["value"];
        fromAmino: ({ subspace_id, group_id, name, description, signer }: AminoMsgEditUserGroup["value"]) => MsgEditUserGroup;
    };
    "/desmos.subspaces.v3.MsgMoveUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, newSectionId, signer }: MsgMoveUserGroup) => AminoMsgMoveUserGroup["value"];
        fromAmino: ({ subspace_id, group_id, new_section_id, signer }: AminoMsgMoveUserGroup["value"]) => MsgMoveUserGroup;
    };
    "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, permissions, signer }: MsgSetUserGroupPermissions) => AminoMsgSetUserGroupPermissions["value"];
        fromAmino: ({ subspace_id, group_id, permissions, signer }: AminoMsgSetUserGroupPermissions["value"]) => MsgSetUserGroupPermissions;
    };
    "/desmos.subspaces.v3.MsgDeleteUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, signer }: MsgDeleteUserGroup) => AminoMsgDeleteUserGroup["value"];
        fromAmino: ({ subspace_id, group_id, signer }: AminoMsgDeleteUserGroup["value"]) => MsgDeleteUserGroup;
    };
    "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, user, signer }: MsgAddUserToUserGroup) => AminoMsgAddUserToUserGroup["value"];
        fromAmino: ({ subspace_id, group_id, user, signer }: AminoMsgAddUserToUserGroup["value"]) => MsgAddUserToUserGroup;
    };
    "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
        aminoType: string;
        toAmino: ({ subspaceId, groupId, user, signer }: MsgRemoveUserFromUserGroup) => AminoMsgRemoveUserFromUserGroup["value"];
        fromAmino: ({ subspace_id, group_id, user, signer }: AminoMsgRemoveUserFromUserGroup["value"]) => MsgRemoveUserFromUserGroup;
    };
    "/desmos.subspaces.v3.MsgSetUserPermissions": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, user, permissions, signer }: MsgSetUserPermissions) => AminoMsgSetUserPermissions["value"];
        fromAmino: ({ subspace_id, section_id, user, permissions, signer }: AminoMsgSetUserPermissions["value"]) => MsgSetUserPermissions;
    };
};
