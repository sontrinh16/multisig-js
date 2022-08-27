import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSubspace, MsgEditSubspace, MsgDeleteSubspace, MsgCreateSection, MsgEditSection, MsgMoveSection, MsgDeleteSection, MsgCreateUserGroup, MsgEditUserGroup, MsgMoveUserGroup, MsgSetUserGroupPermissions, MsgDeleteUserGroup, MsgAddUserToUserGroup, MsgRemoveUserFromUserGroup, MsgSetUserPermissions } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createSubspace(value: MsgCreateSubspace): {
            typeUrl: string;
            value: Uint8Array;
        };
        editSubspace(value: MsgEditSubspace): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteSubspace(value: MsgDeleteSubspace): {
            typeUrl: string;
            value: Uint8Array;
        };
        createSection(value: MsgCreateSection): {
            typeUrl: string;
            value: Uint8Array;
        };
        editSection(value: MsgEditSection): {
            typeUrl: string;
            value: Uint8Array;
        };
        moveSection(value: MsgMoveSection): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteSection(value: MsgDeleteSection): {
            typeUrl: string;
            value: Uint8Array;
        };
        createUserGroup(value: MsgCreateUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        editUserGroup(value: MsgEditUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        moveUserGroup(value: MsgMoveUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        setUserGroupPermissions(value: MsgSetUserGroupPermissions): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteUserGroup(value: MsgDeleteUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        addUserToUserGroup(value: MsgAddUserToUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        setUserPermissions(value: MsgSetUserPermissions): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createSubspace(value: MsgCreateSubspace): {
            typeUrl: string;
            value: MsgCreateSubspace;
        };
        editSubspace(value: MsgEditSubspace): {
            typeUrl: string;
            value: MsgEditSubspace;
        };
        deleteSubspace(value: MsgDeleteSubspace): {
            typeUrl: string;
            value: MsgDeleteSubspace;
        };
        createSection(value: MsgCreateSection): {
            typeUrl: string;
            value: MsgCreateSection;
        };
        editSection(value: MsgEditSection): {
            typeUrl: string;
            value: MsgEditSection;
        };
        moveSection(value: MsgMoveSection): {
            typeUrl: string;
            value: MsgMoveSection;
        };
        deleteSection(value: MsgDeleteSection): {
            typeUrl: string;
            value: MsgDeleteSection;
        };
        createUserGroup(value: MsgCreateUserGroup): {
            typeUrl: string;
            value: MsgCreateUserGroup;
        };
        editUserGroup(value: MsgEditUserGroup): {
            typeUrl: string;
            value: MsgEditUserGroup;
        };
        moveUserGroup(value: MsgMoveUserGroup): {
            typeUrl: string;
            value: MsgMoveUserGroup;
        };
        setUserGroupPermissions(value: MsgSetUserGroupPermissions): {
            typeUrl: string;
            value: MsgSetUserGroupPermissions;
        };
        deleteUserGroup(value: MsgDeleteUserGroup): {
            typeUrl: string;
            value: MsgDeleteUserGroup;
        };
        addUserToUserGroup(value: MsgAddUserToUserGroup): {
            typeUrl: string;
            value: MsgAddUserToUserGroup;
        };
        removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup): {
            typeUrl: string;
            value: MsgRemoveUserFromUserGroup;
        };
        setUserPermissions(value: MsgSetUserPermissions): {
            typeUrl: string;
            value: MsgSetUserPermissions;
        };
    };
    toJSON: {
        createSubspace(value: MsgCreateSubspace): {
            typeUrl: string;
            value: unknown;
        };
        editSubspace(value: MsgEditSubspace): {
            typeUrl: string;
            value: unknown;
        };
        deleteSubspace(value: MsgDeleteSubspace): {
            typeUrl: string;
            value: unknown;
        };
        createSection(value: MsgCreateSection): {
            typeUrl: string;
            value: unknown;
        };
        editSection(value: MsgEditSection): {
            typeUrl: string;
            value: unknown;
        };
        moveSection(value: MsgMoveSection): {
            typeUrl: string;
            value: unknown;
        };
        deleteSection(value: MsgDeleteSection): {
            typeUrl: string;
            value: unknown;
        };
        createUserGroup(value: MsgCreateUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        editUserGroup(value: MsgEditUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        moveUserGroup(value: MsgMoveUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        setUserGroupPermissions(value: MsgSetUserGroupPermissions): {
            typeUrl: string;
            value: unknown;
        };
        deleteUserGroup(value: MsgDeleteUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        addUserToUserGroup(value: MsgAddUserToUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup): {
            typeUrl: string;
            value: unknown;
        };
        setUserPermissions(value: MsgSetUserPermissions): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createSubspace(value: any): {
            typeUrl: string;
            value: MsgCreateSubspace;
        };
        editSubspace(value: any): {
            typeUrl: string;
            value: MsgEditSubspace;
        };
        deleteSubspace(value: any): {
            typeUrl: string;
            value: MsgDeleteSubspace;
        };
        createSection(value: any): {
            typeUrl: string;
            value: MsgCreateSection;
        };
        editSection(value: any): {
            typeUrl: string;
            value: MsgEditSection;
        };
        moveSection(value: any): {
            typeUrl: string;
            value: MsgMoveSection;
        };
        deleteSection(value: any): {
            typeUrl: string;
            value: MsgDeleteSection;
        };
        createUserGroup(value: any): {
            typeUrl: string;
            value: MsgCreateUserGroup;
        };
        editUserGroup(value: any): {
            typeUrl: string;
            value: MsgEditUserGroup;
        };
        moveUserGroup(value: any): {
            typeUrl: string;
            value: MsgMoveUserGroup;
        };
        setUserGroupPermissions(value: any): {
            typeUrl: string;
            value: MsgSetUserGroupPermissions;
        };
        deleteUserGroup(value: any): {
            typeUrl: string;
            value: MsgDeleteUserGroup;
        };
        addUserToUserGroup(value: any): {
            typeUrl: string;
            value: MsgAddUserToUserGroup;
        };
        removeUserFromUserGroup(value: any): {
            typeUrl: string;
            value: MsgRemoveUserFromUserGroup;
        };
        setUserPermissions(value: any): {
            typeUrl: string;
            value: MsgSetUserPermissions;
        };
    };
    fromPartial: {
        createSubspace(value: MsgCreateSubspace): {
            typeUrl: string;
            value: MsgCreateSubspace;
        };
        editSubspace(value: MsgEditSubspace): {
            typeUrl: string;
            value: MsgEditSubspace;
        };
        deleteSubspace(value: MsgDeleteSubspace): {
            typeUrl: string;
            value: MsgDeleteSubspace;
        };
        createSection(value: MsgCreateSection): {
            typeUrl: string;
            value: MsgCreateSection;
        };
        editSection(value: MsgEditSection): {
            typeUrl: string;
            value: MsgEditSection;
        };
        moveSection(value: MsgMoveSection): {
            typeUrl: string;
            value: MsgMoveSection;
        };
        deleteSection(value: MsgDeleteSection): {
            typeUrl: string;
            value: MsgDeleteSection;
        };
        createUserGroup(value: MsgCreateUserGroup): {
            typeUrl: string;
            value: MsgCreateUserGroup;
        };
        editUserGroup(value: MsgEditUserGroup): {
            typeUrl: string;
            value: MsgEditUserGroup;
        };
        moveUserGroup(value: MsgMoveUserGroup): {
            typeUrl: string;
            value: MsgMoveUserGroup;
        };
        setUserGroupPermissions(value: MsgSetUserGroupPermissions): {
            typeUrl: string;
            value: MsgSetUserGroupPermissions;
        };
        deleteUserGroup(value: MsgDeleteUserGroup): {
            typeUrl: string;
            value: MsgDeleteUserGroup;
        };
        addUserToUserGroup(value: MsgAddUserToUserGroup): {
            typeUrl: string;
            value: MsgAddUserToUserGroup;
        };
        removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup): {
            typeUrl: string;
            value: MsgRemoveUserFromUserGroup;
        };
        setUserPermissions(value: MsgSetUserPermissions): {
            typeUrl: string;
            value: MsgSetUserPermissions;
        };
    };
};
