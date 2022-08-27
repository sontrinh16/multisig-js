import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateRelationship, MsgDeleteRelationship, MsgBlockUser, MsgUnblockUser } from "./msgs";
export interface AminoMsgCreateRelationship extends AminoMsg {
  type: "/desmos.relationships.v1.MsgCreateRelationship";
  value: {
    signer: string;
    counterparty: string;
    subspace_id: string;
  };
}
export interface AminoMsgDeleteRelationship extends AminoMsg {
  type: "/desmos.relationships.v1.MsgDeleteRelationship";
  value: {
    signer: string;
    counterparty: string;
    subspace_id: string;
  };
}
export interface AminoMsgBlockUser extends AminoMsg {
  type: "/desmos.relationships.v1.MsgBlockUser";
  value: {
    blocker: string;
    blocked: string;
    reason: string;
    subspace_id: string;
  };
}
export interface AminoMsgUnblockUser extends AminoMsg {
  type: "/desmos.relationships.v1.MsgUnblockUser";
  value: {
    blocker: string;
    blocked: string;
    subspace_id: string;
  };
}
export const AminoConverter = {
  "/desmos.relationships.v1.MsgCreateRelationship": {
    aminoType: "/desmos.relationships.v1.MsgCreateRelationship",
    toAmino: ({
      signer,
      counterparty,
      subspaceId
    }: MsgCreateRelationship): AminoMsgCreateRelationship["value"] => {
      return {
        signer,
        counterparty,
        subspace_id: subspaceId.toString()
      };
    },
    fromAmino: ({
      signer,
      counterparty,
      subspace_id
    }: AminoMsgCreateRelationship["value"]): MsgCreateRelationship => {
      return {
        signer,
        counterparty,
        subspaceId: Long.fromString(subspace_id)
      };
    }
  },
  "/desmos.relationships.v1.MsgDeleteRelationship": {
    aminoType: "/desmos.relationships.v1.MsgDeleteRelationship",
    toAmino: ({
      signer,
      counterparty,
      subspaceId
    }: MsgDeleteRelationship): AminoMsgDeleteRelationship["value"] => {
      return {
        signer,
        counterparty,
        subspace_id: subspaceId.toString()
      };
    },
    fromAmino: ({
      signer,
      counterparty,
      subspace_id
    }: AminoMsgDeleteRelationship["value"]): MsgDeleteRelationship => {
      return {
        signer,
        counterparty,
        subspaceId: Long.fromString(subspace_id)
      };
    }
  },
  "/desmos.relationships.v1.MsgBlockUser": {
    aminoType: "/desmos.relationships.v1.MsgBlockUser",
    toAmino: ({
      blocker,
      blocked,
      reason,
      subspaceId
    }: MsgBlockUser): AminoMsgBlockUser["value"] => {
      return {
        blocker,
        blocked,
        reason,
        subspace_id: subspaceId.toString()
      };
    },
    fromAmino: ({
      blocker,
      blocked,
      reason,
      subspace_id
    }: AminoMsgBlockUser["value"]): MsgBlockUser => {
      return {
        blocker,
        blocked,
        reason,
        subspaceId: Long.fromString(subspace_id)
      };
    }
  },
  "/desmos.relationships.v1.MsgUnblockUser": {
    aminoType: "/desmos.relationships.v1.MsgUnblockUser",
    toAmino: ({
      blocker,
      blocked,
      subspaceId
    }: MsgUnblockUser): AminoMsgUnblockUser["value"] => {
      return {
        blocker,
        blocked,
        subspace_id: subspaceId.toString()
      };
    },
    fromAmino: ({
      blocker,
      blocked,
      subspace_id
    }: AminoMsgUnblockUser["value"]): MsgUnblockUser => {
      return {
        blocker,
        blocked,
        subspaceId: Long.fromString(subspace_id)
      };
    }
  }
};