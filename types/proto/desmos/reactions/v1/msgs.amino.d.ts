import { AminoMsg } from "@cosmjs/amino";
import { MsgAddReaction, MsgRemoveReaction, MsgAddRegisteredReaction, MsgEditRegisteredReaction, MsgRemoveRegisteredReaction, MsgSetReactionsParams } from "./msgs";
export interface AminoMsgAddReaction extends AminoMsg {
    type: "/desmos.reactions.v1.MsgAddReaction";
    value: {
        subspace_id: string;
        post_id: string;
        value: {
            type_url: string;
            value: Uint8Array;
        };
        user: string;
    };
}
export interface AminoMsgRemoveReaction extends AminoMsg {
    type: "/desmos.reactions.v1.MsgRemoveReaction";
    value: {
        subspace_id: string;
        post_id: string;
        reaction_id: number;
        user: string;
    };
}
export interface AminoMsgAddRegisteredReaction extends AminoMsg {
    type: "/desmos.reactions.v1.MsgAddRegisteredReaction";
    value: {
        subspace_id: string;
        shorthand_code: string;
        display_value: string;
        user: string;
    };
}
export interface AminoMsgEditRegisteredReaction extends AminoMsg {
    type: "/desmos.reactions.v1.MsgEditRegisteredReaction";
    value: {
        subspace_id: string;
        registered_reaction_id: number;
        shorthand_code: string;
        display_value: string;
        user: string;
    };
}
export interface AminoMsgRemoveRegisteredReaction extends AminoMsg {
    type: "/desmos.reactions.v1.MsgRemoveRegisteredReaction";
    value: {
        subspace_id: string;
        registered_reaction_id: number;
        user: string;
    };
}
export interface AminoMsgSetReactionsParams extends AminoMsg {
    type: "/desmos.reactions.v1.MsgSetReactionsParams";
    value: {
        subspace_id: string;
        registered_reaction: {
            enabled: boolean;
        };
        free_text: {
            enabled: boolean;
            max_length: number;
            reg_ex: string;
        };
        user: string;
    };
}
export declare const AminoConverter: {
    "/desmos.reactions.v1.MsgAddReaction": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, value, user }: MsgAddReaction) => AminoMsgAddReaction["value"];
        fromAmino: ({ subspace_id, post_id, value, user }: AminoMsgAddReaction["value"]) => MsgAddReaction;
    };
    "/desmos.reactions.v1.MsgRemoveReaction": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, reactionId, user }: MsgRemoveReaction) => AminoMsgRemoveReaction["value"];
        fromAmino: ({ subspace_id, post_id, reaction_id, user }: AminoMsgRemoveReaction["value"]) => MsgRemoveReaction;
    };
    "/desmos.reactions.v1.MsgAddRegisteredReaction": {
        aminoType: string;
        toAmino: ({ subspaceId, shorthandCode, displayValue, user }: MsgAddRegisteredReaction) => AminoMsgAddRegisteredReaction["value"];
        fromAmino: ({ subspace_id, shorthand_code, display_value, user }: AminoMsgAddRegisteredReaction["value"]) => MsgAddRegisteredReaction;
    };
    "/desmos.reactions.v1.MsgEditRegisteredReaction": {
        aminoType: string;
        toAmino: ({ subspaceId, registeredReactionId, shorthandCode, displayValue, user }: MsgEditRegisteredReaction) => AminoMsgEditRegisteredReaction["value"];
        fromAmino: ({ subspace_id, registered_reaction_id, shorthand_code, display_value, user }: AminoMsgEditRegisteredReaction["value"]) => MsgEditRegisteredReaction;
    };
    "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
        aminoType: string;
        toAmino: ({ subspaceId, registeredReactionId, user }: MsgRemoveRegisteredReaction) => AminoMsgRemoveRegisteredReaction["value"];
        fromAmino: ({ subspace_id, registered_reaction_id, user }: AminoMsgRemoveRegisteredReaction["value"]) => MsgRemoveRegisteredReaction;
    };
    "/desmos.reactions.v1.MsgSetReactionsParams": {
        aminoType: string;
        toAmino: ({ subspaceId, registeredReaction, freeText, user }: MsgSetReactionsParams) => AminoMsgSetReactionsParams["value"];
        fromAmino: ({ subspace_id, registered_reaction, free_text, user }: AminoMsgSetReactionsParams["value"]) => MsgSetReactionsParams;
    };
};
