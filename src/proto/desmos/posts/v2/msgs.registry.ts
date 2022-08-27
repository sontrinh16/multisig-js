import { Entities, ReplySetting, PostReference } from "./models";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePost, MsgEditPost, MsgDeletePost, MsgAddPostAttachment, MsgRemovePostAttachment, MsgAnswerPoll } from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/desmos.posts.v2.MsgCreatePost", MsgCreatePost], ["/desmos.posts.v2.MsgEditPost", MsgEditPost], ["/desmos.posts.v2.MsgDeletePost", MsgDeletePost], ["/desmos.posts.v2.MsgAddPostAttachment", MsgAddPostAttachment], ["/desmos.posts.v2.MsgRemovePostAttachment", MsgRemovePostAttachment], ["/desmos.posts.v2.MsgAnswerPoll", MsgAnswerPoll]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish()
      };
    },

    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgEditPost",
        value: MsgEditPost.encode(value).finish()
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish()
      };
    },

    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAddPostAttachment",
        value: MsgAddPostAttachment.encode(value).finish()
      };
    },

    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.encode(value).finish()
      };
    },

    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAnswerPoll",
        value: MsgAnswerPoll.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgCreatePost",
        value
      };
    },

    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgEditPost",
        value
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgDeletePost",
        value
      };
    },

    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAddPostAttachment",
        value
      };
    },

    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment",
        value
      };
    },

    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAnswerPoll",
        value
      };
    }

  },
  toJSON: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgCreatePost",
        value: MsgCreatePost.toJSON(value)
      };
    },

    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgEditPost",
        value: MsgEditPost.toJSON(value)
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgDeletePost",
        value: MsgDeletePost.toJSON(value)
      };
    },

    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAddPostAttachment",
        value: MsgAddPostAttachment.toJSON(value)
      };
    },

    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.toJSON(value)
      };
    },

    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAnswerPoll",
        value: MsgAnswerPoll.toJSON(value)
      };
    }

  },
  fromJSON: {
    createPost(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgCreatePost",
        value: MsgCreatePost.fromJSON(value)
      };
    },

    editPost(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgEditPost",
        value: MsgEditPost.fromJSON(value)
      };
    },

    deletePost(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgDeletePost",
        value: MsgDeletePost.fromJSON(value)
      };
    },

    addPostAttachment(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAddPostAttachment",
        value: MsgAddPostAttachment.fromJSON(value)
      };
    },

    removePostAttachment(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.fromJSON(value)
      };
    },

    answerPoll(value: any) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAnswerPoll",
        value: MsgAnswerPoll.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value)
      };
    },

    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgEditPost",
        value: MsgEditPost.fromPartial(value)
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v2.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value)
      };
    },

    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAddPostAttachment",
        value: MsgAddPostAttachment.fromPartial(value)
      };
    },

    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.fromPartial(value)
      };
    },

    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v2.MsgAnswerPoll",
        value: MsgAnswerPoll.fromPartial(value)
      };
    }

  }
};