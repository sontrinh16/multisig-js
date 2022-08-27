import { Member, Choice, choiceFromJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupAccount, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountMetadata, MsgCreateProposal, MsgVote, MsgExec } from "./tx";
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
export const AminoConverter = {
  "/regen.group.v1alpha1.MsgCreateGroup": {
    aminoType: "/regen.group.v1alpha1.MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroup): AminoMsgCreateGroup["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    },
    fromAmino: ({
      admin,
      members,
      metadata
    }: AminoMsgCreateGroup["value"]): MsgCreateGroup => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
    toAmino: ({
      admin,
      groupId,
      memberUpdates
    }: MsgUpdateGroupMembers): AminoMsgUpdateGroupMembers["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        member_updates: memberUpdates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    },
    fromAmino: ({
      admin,
      group_id,
      member_updates
    }: AminoMsgUpdateGroupMembers["value"]): MsgUpdateGroupMembers => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        memberUpdates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
    toAmino: ({
      admin,
      groupId,
      newAdmin
    }: MsgUpdateGroupAdmin): AminoMsgUpdateGroupAdmin["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      group_id,
      new_admin
    }: AminoMsgUpdateGroupAdmin["value"]): MsgUpdateGroupAdmin => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        newAdmin: new_admin
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
    toAmino: ({
      admin,
      groupId,
      metadata
    }: MsgUpdateGroupMetadata): AminoMsgUpdateGroupMetadata["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata
    }: AminoMsgUpdateGroupMetadata["value"]): MsgUpdateGroupMetadata => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata
      };
    }
  },
  "/regen.group.v1alpha1.MsgCreateGroupAccount": {
    aminoType: "/regen.group.v1alpha1.MsgCreateGroupAccount",
    toAmino: ({
      admin,
      groupId,
      metadata,
      decisionPolicy
    }: MsgCreateGroupAccount): AminoMsgCreateGroupAccount["value"] => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: AminoMsgCreateGroupAccount["value"]): MsgCreateGroupAccount => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
    toAmino: ({
      admin,
      address,
      newAdmin
    }: MsgUpdateGroupAccountAdmin): AminoMsgUpdateGroupAccountAdmin["value"] => {
      return {
        admin,
        address,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      address,
      new_admin
    }: AminoMsgUpdateGroupAccountAdmin["value"]): MsgUpdateGroupAccountAdmin => {
      return {
        admin,
        address,
        newAdmin: new_admin
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
    toAmino: ({
      admin,
      address,
      decisionPolicy
    }: MsgUpdateGroupAccountDecisionPolicy): AminoMsgUpdateGroupAccountDecisionPolicy["value"] => {
      return {
        admin,
        address,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      address,
      decision_policy
    }: AminoMsgUpdateGroupAccountDecisionPolicy["value"]): MsgUpdateGroupAccountDecisionPolicy => {
      return {
        admin,
        address,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
    toAmino: ({
      admin,
      address,
      metadata
    }: MsgUpdateGroupAccountMetadata): AminoMsgUpdateGroupAccountMetadata["value"] => {
      return {
        admin,
        address,
        metadata
      };
    },
    fromAmino: ({
      admin,
      address,
      metadata
    }: AminoMsgUpdateGroupAccountMetadata["value"]): MsgUpdateGroupAccountMetadata => {
      return {
        admin,
        address,
        metadata
      };
    }
  },
  "/regen.group.v1alpha1.MsgCreateProposal": {
    aminoType: "/regen.group.v1alpha1.MsgCreateProposal",
    toAmino: ({
      address,
      proposers,
      metadata,
      msgs,
      exec
    }: MsgCreateProposal): AminoMsgCreateProposal["value"] => {
      return {
        address,
        proposers,
        metadata,
        msgs: msgs.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        exec
      };
    },
    fromAmino: ({
      address,
      proposers,
      metadata,
      msgs,
      exec
    }: AminoMsgCreateProposal["value"]): MsgCreateProposal => {
      return {
        address,
        proposers,
        metadata,
        msgs: msgs.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        exec: execFromJSON(exec)
      };
    }
  },
  "/regen.group.v1alpha1.MsgVote": {
    aminoType: "/regen.group.v1alpha1.MsgVote",
    toAmino: ({
      proposalId,
      voter,
      choice,
      metadata,
      exec
    }: MsgVote): AminoMsgVote["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        choice,
        metadata,
        exec
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      choice,
      metadata,
      exec
    }: AminoMsgVote["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        choice: choiceFromJSON(choice),
        metadata,
        exec: execFromJSON(exec)
      };
    }
  },
  "/regen.group.v1alpha1.MsgExec": {
    aminoType: "/regen.group.v1alpha1.MsgExec",
    toAmino: ({
      proposalId,
      signer
    }: MsgExec): AminoMsgExec["value"] => {
      return {
        proposal_id: proposalId.toString(),
        signer
      };
    },
    fromAmino: ({
      proposal_id,
      signer
    }: AminoMsgExec["value"]): MsgExec => {
      return {
        proposalId: Long.fromString(proposal_id),
        signer
      };
    }
  }
};