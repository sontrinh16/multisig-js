import { Any } from "../../../google/protobuf/any";
import { RegisteredReactionValueParams, FreeTextValueParams } from "./models";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/desmos.reactions.v1.MsgAddReaction": {
    aminoType: "/desmos.reactions.v1.MsgAddReaction",
    toAmino: ({
      subspaceId,
      postId,
      value,
      user
    }: MsgAddReaction): AminoMsgAddReaction["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        value: {
          type_url: value.typeUrl,
          value: value.value
        },
        user
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      value,
      user
    }: AminoMsgAddReaction["value"]): MsgAddReaction => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        value: {
          typeUrl: value.type_url,
          value: value.value
        },
        user
      };
    }
  },
  "/desmos.reactions.v1.MsgRemoveReaction": {
    aminoType: "/desmos.reactions.v1.MsgRemoveReaction",
    toAmino: ({
      subspaceId,
      postId,
      reactionId,
      user
    }: MsgRemoveReaction): AminoMsgRemoveReaction["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        reaction_id: reactionId,
        user
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      reaction_id,
      user
    }: AminoMsgRemoveReaction["value"]): MsgRemoveReaction => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        reactionId: reaction_id,
        user
      };
    }
  },
  "/desmos.reactions.v1.MsgAddRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgAddRegisteredReaction",
    toAmino: ({
      subspaceId,
      shorthandCode,
      displayValue,
      user
    }: MsgAddRegisteredReaction): AminoMsgAddRegisteredReaction["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        shorthand_code: shorthandCode,
        display_value: displayValue,
        user
      };
    },
    fromAmino: ({
      subspace_id,
      shorthand_code,
      display_value,
      user
    }: AminoMsgAddRegisteredReaction["value"]): MsgAddRegisteredReaction => {
      return {
        subspaceId: Long.fromString(subspace_id),
        shorthandCode: shorthand_code,
        displayValue: display_value,
        user
      };
    }
  },
  "/desmos.reactions.v1.MsgEditRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgEditRegisteredReaction",
    toAmino: ({
      subspaceId,
      registeredReactionId,
      shorthandCode,
      displayValue,
      user
    }: MsgEditRegisteredReaction): AminoMsgEditRegisteredReaction["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        registered_reaction_id: registeredReactionId,
        shorthand_code: shorthandCode,
        display_value: displayValue,
        user
      };
    },
    fromAmino: ({
      subspace_id,
      registered_reaction_id,
      shorthand_code,
      display_value,
      user
    }: AminoMsgEditRegisteredReaction["value"]): MsgEditRegisteredReaction => {
      return {
        subspaceId: Long.fromString(subspace_id),
        registeredReactionId: registered_reaction_id,
        shorthandCode: shorthand_code,
        displayValue: display_value,
        user
      };
    }
  },
  "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
    toAmino: ({
      subspaceId,
      registeredReactionId,
      user
    }: MsgRemoveRegisteredReaction): AminoMsgRemoveRegisteredReaction["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        registered_reaction_id: registeredReactionId,
        user
      };
    },
    fromAmino: ({
      subspace_id,
      registered_reaction_id,
      user
    }: AminoMsgRemoveRegisteredReaction["value"]): MsgRemoveRegisteredReaction => {
      return {
        subspaceId: Long.fromString(subspace_id),
        registeredReactionId: registered_reaction_id,
        user
      };
    }
  },
  "/desmos.reactions.v1.MsgSetReactionsParams": {
    aminoType: "/desmos.reactions.v1.MsgSetReactionsParams",
    toAmino: ({
      subspaceId,
      registeredReaction,
      freeText,
      user
    }: MsgSetReactionsParams): AminoMsgSetReactionsParams["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        registered_reaction: {
          enabled: registeredReaction.enabled
        },
        free_text: {
          enabled: freeText.enabled,
          max_length: freeText.maxLength,
          reg_ex: freeText.regEx
        },
        user
      };
    },
    fromAmino: ({
      subspace_id,
      registered_reaction,
      free_text,
      user
    }: AminoMsgSetReactionsParams["value"]): MsgSetReactionsParams => {
      return {
        subspaceId: Long.fromString(subspace_id),
        registeredReaction: {
          enabled: registered_reaction.enabled
        },
        freeText: {
          enabled: free_text.enabled,
          maxLength: free_text.max_length,
          regEx: free_text.reg_ex
        },
        user
      };
    }
  }
};