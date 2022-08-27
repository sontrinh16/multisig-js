import { Post, Like } from "./community";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePost, MsgDeletePost, MsgSetLike, MsgFollow, MsgUnfollow } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/community.MsgCreatePost", MsgCreatePost], ["/community.MsgDeletePost", MsgDeletePost], ["/community.MsgSetLike", MsgSetLike], ["/community.MsgFollow", MsgFollow], ["/community.MsgUnfollow", MsgUnfollow]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/community.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish()
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/community.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish()
      };
    },

    setLike(value: MsgSetLike) {
      return {
        typeUrl: "/community.MsgSetLike",
        value: MsgSetLike.encode(value).finish()
      };
    },

    follow(value: MsgFollow) {
      return {
        typeUrl: "/community.MsgFollow",
        value: MsgFollow.encode(value).finish()
      };
    },

    unfollow(value: MsgUnfollow) {
      return {
        typeUrl: "/community.MsgUnfollow",
        value: MsgUnfollow.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/community.MsgCreatePost",
        value
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/community.MsgDeletePost",
        value
      };
    },

    setLike(value: MsgSetLike) {
      return {
        typeUrl: "/community.MsgSetLike",
        value
      };
    },

    follow(value: MsgFollow) {
      return {
        typeUrl: "/community.MsgFollow",
        value
      };
    },

    unfollow(value: MsgUnfollow) {
      return {
        typeUrl: "/community.MsgUnfollow",
        value
      };
    }

  },
  toJSON: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/community.MsgCreatePost",
        value: MsgCreatePost.toJSON(value)
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/community.MsgDeletePost",
        value: MsgDeletePost.toJSON(value)
      };
    },

    setLike(value: MsgSetLike) {
      return {
        typeUrl: "/community.MsgSetLike",
        value: MsgSetLike.toJSON(value)
      };
    },

    follow(value: MsgFollow) {
      return {
        typeUrl: "/community.MsgFollow",
        value: MsgFollow.toJSON(value)
      };
    },

    unfollow(value: MsgUnfollow) {
      return {
        typeUrl: "/community.MsgUnfollow",
        value: MsgUnfollow.toJSON(value)
      };
    }

  },
  fromJSON: {
    createPost(value: any) {
      return {
        typeUrl: "/community.MsgCreatePost",
        value: MsgCreatePost.fromJSON(value)
      };
    },

    deletePost(value: any) {
      return {
        typeUrl: "/community.MsgDeletePost",
        value: MsgDeletePost.fromJSON(value)
      };
    },

    setLike(value: any) {
      return {
        typeUrl: "/community.MsgSetLike",
        value: MsgSetLike.fromJSON(value)
      };
    },

    follow(value: any) {
      return {
        typeUrl: "/community.MsgFollow",
        value: MsgFollow.fromJSON(value)
      };
    },

    unfollow(value: any) {
      return {
        typeUrl: "/community.MsgUnfollow",
        value: MsgUnfollow.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/community.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value)
      };
    },

    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/community.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value)
      };
    },

    setLike(value: MsgSetLike) {
      return {
        typeUrl: "/community.MsgSetLike",
        value: MsgSetLike.fromPartial(value)
      };
    },

    follow(value: MsgFollow) {
      return {
        typeUrl: "/community.MsgFollow",
        value: MsgFollow.fromPartial(value)
      };
    },

    unfollow(value: MsgUnfollow) {
      return {
        typeUrl: "/community.MsgUnfollow",
        value: MsgUnfollow.fromPartial(value)
      };
    }

  }
};