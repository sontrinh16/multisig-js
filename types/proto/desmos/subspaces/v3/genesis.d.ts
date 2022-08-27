import { Subspace, Section, UserPermission, UserGroup } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisState {
    initialSubspaceId: Long;
    subspacesData: SubspaceData[];
    subspaces: Subspace[];
    sections: Section[];
    userPermissions: UserPermission[];
    userGroups: UserGroup[];
    userGroupsMembers: UserGroupMemberEntry[];
}
/** SubspaceData contains the genesis data for a single subspace */
export interface SubspaceData {
    subspaceId: Long;
    nextGroupId: number;
    nextSectionId: number;
}
/** UserGroupMemberEntry contains the details of a user group member */
export interface UserGroupMemberEntry {
    subspaceId: Long;
    groupId: number;
    user: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const SubspaceData: {
    encode(message: SubspaceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceData;
    fromJSON(object: any): SubspaceData;
    toJSON(message: SubspaceData): unknown;
    fromPartial(object: DeepPartial<SubspaceData>): SubspaceData;
};
export declare const UserGroupMemberEntry: {
    encode(message: UserGroupMemberEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGroupMemberEntry;
    fromJSON(object: any): UserGroupMemberEntry;
    toJSON(message: UserGroupMemberEntry): unknown;
    fromPartial(object: DeepPartial<UserGroupMemberEntry>): UserGroupMemberEntry;
};
