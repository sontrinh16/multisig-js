import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/desmos.relationships.v1.MsgCreateRelationship": {
        aminoType: string;
        toAmino: ({ signer, counterparty, subspaceId }: MsgCreateRelationship) => AminoMsgCreateRelationship["value"];
        fromAmino: ({ signer, counterparty, subspace_id }: AminoMsgCreateRelationship["value"]) => MsgCreateRelationship;
    };
    "/desmos.relationships.v1.MsgDeleteRelationship": {
        aminoType: string;
        toAmino: ({ signer, counterparty, subspaceId }: MsgDeleteRelationship) => AminoMsgDeleteRelationship["value"];
        fromAmino: ({ signer, counterparty, subspace_id }: AminoMsgDeleteRelationship["value"]) => MsgDeleteRelationship;
    };
    "/desmos.relationships.v1.MsgBlockUser": {
        aminoType: string;
        toAmino: ({ blocker, blocked, reason, subspaceId }: MsgBlockUser) => AminoMsgBlockUser["value"];
        fromAmino: ({ blocker, blocked, reason, subspace_id }: AminoMsgBlockUser["value"]) => MsgBlockUser;
    };
    "/desmos.relationships.v1.MsgUnblockUser": {
        aminoType: string;
        toAmino: ({ blocker, blocked, subspaceId }: MsgUnblockUser) => AminoMsgUnblockUser["value"];
        fromAmino: ({ blocker, blocked, subspace_id }: AminoMsgUnblockUser["value"]) => MsgUnblockUser;
    };
};
