import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupAccount, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountMetadata, MsgCreateProposal, MsgVote, MsgExec } from "./tx";
export interface AminoMsgCreateGroup extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroup";
    value: {
        admin: string;
        members: {
            address: string;
            weight: string;
            metadata: Uint8Array;
        }[];
        metadata: Uint8Array;
    };
}
export interface AminoMsgUpdateGroupMembers extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMembers";
    value: {
        admin: string;
        group_id: string;
        member_updates: {
            address: string;
            weight: string;
            metadata: Uint8Array;
        }[];
    };
}
export interface AminoMsgUpdateGroupAdmin extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAdmin";
    value: {
        admin: string;
        group_id: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateGroupMetadata extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMetadata";
    value: {
        admin: string;
        group_id: string;
        metadata: Uint8Array;
    };
}
export interface AminoMsgCreateGroupAccount extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroupAccount";
    value: {
        admin: string;
        group_id: string;
        metadata: Uint8Array;
        decision_policy: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface AminoMsgUpdateGroupAccountAdmin extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin";
    value: {
        admin: string;
        address: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateGroupAccountDecisionPolicy extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy";
    value: {
        admin: string;
        address: string;
        decision_policy: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface AminoMsgUpdateGroupAccountMetadata extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata";
    value: {
        admin: string;
        address: string;
        metadata: Uint8Array;
    };
}
export interface AminoMsgCreateProposal extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateProposal";
    value: {
        address: string;
        proposers: string[];
        metadata: Uint8Array;
        msgs: {
            type_url: string;
            value: Uint8Array;
        }[];
        exec: number;
    };
}
export interface AminoMsgVote extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        choice: number;
        metadata: Uint8Array;
        exec: number;
    };
}
export interface AminoMsgExec extends AminoMsg {
    type: "/regen.group.v1alpha1.MsgExec";
    value: {
        proposal_id: string;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/regen.group.v1alpha1.MsgCreateGroup": {
        aminoType: string;
        toAmino: ({ admin, members, metadata }: MsgCreateGroup) => AminoMsgCreateGroup["value"];
        fromAmino: ({ admin, members, metadata }: AminoMsgCreateGroup["value"]) => MsgCreateGroup;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: ({ admin, groupId, memberUpdates }: MsgUpdateGroupMembers) => AminoMsgUpdateGroupMembers["value"];
        fromAmino: ({ admin, group_id, member_updates }: AminoMsgUpdateGroupMembers["value"]) => MsgUpdateGroupMembers;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupId, newAdmin }: MsgUpdateGroupAdmin) => AminoMsgUpdateGroupAdmin["value"];
        fromAmino: ({ admin, group_id, new_admin }: AminoMsgUpdateGroupAdmin["value"]) => MsgUpdateGroupAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata }: MsgUpdateGroupMetadata) => AminoMsgUpdateGroupMetadata["value"];
        fromAmino: ({ admin, group_id, metadata }: AminoMsgUpdateGroupMetadata["value"]) => MsgUpdateGroupMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateGroupAccount": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, decisionPolicy }: MsgCreateGroupAccount) => AminoMsgCreateGroupAccount["value"];
        fromAmino: ({ admin, group_id, metadata, decision_policy }: AminoMsgCreateGroupAccount["value"]) => MsgCreateGroupAccount;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
        aminoType: string;
        toAmino: ({ admin, address, newAdmin }: MsgUpdateGroupAccountAdmin) => AminoMsgUpdateGroupAccountAdmin["value"];
        fromAmino: ({ admin, address, new_admin }: AminoMsgUpdateGroupAccountAdmin["value"]) => MsgUpdateGroupAccountAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
        aminoType: string;
        toAmino: ({ admin, address, decisionPolicy }: MsgUpdateGroupAccountDecisionPolicy) => AminoMsgUpdateGroupAccountDecisionPolicy["value"];
        fromAmino: ({ admin, address, decision_policy }: AminoMsgUpdateGroupAccountDecisionPolicy["value"]) => MsgUpdateGroupAccountDecisionPolicy;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
        aminoType: string;
        toAmino: ({ admin, address, metadata }: MsgUpdateGroupAccountMetadata) => AminoMsgUpdateGroupAccountMetadata["value"];
        fromAmino: ({ admin, address, metadata }: AminoMsgUpdateGroupAccountMetadata["value"]) => MsgUpdateGroupAccountMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateProposal": {
        aminoType: string;
        toAmino: ({ address, proposers, metadata, msgs, exec }: MsgCreateProposal) => AminoMsgCreateProposal["value"];
        fromAmino: ({ address, proposers, metadata, msgs, exec }: AminoMsgCreateProposal["value"]) => MsgCreateProposal;
    };
    "/regen.group.v1alpha1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, choice, metadata, exec }: MsgVote) => AminoMsgVote["value"];
        fromAmino: ({ proposal_id, voter, choice, metadata, exec }: AminoMsgVote["value"]) => MsgVote;
    };
    "/regen.group.v1alpha1.MsgExec": {
        aminoType: string;
        toAmino: ({ proposalId, signer }: MsgExec) => AminoMsgExec["value"];
        fromAmino: ({ proposal_id, signer }: AminoMsgExec["value"]) => MsgExec;
    };
};
