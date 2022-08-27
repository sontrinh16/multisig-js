import { Post, Like, categoryFromJSON, likeWeightFromJSON } from "./community";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePost, MsgDeletePost, MsgSetLike, MsgFollow, MsgUnfollow } from "./tx";
export interface AminoMsgCreatePost extends AminoMsg {
  type: "/community.MsgCreatePost";
  value: {
    post: {
      owner: string;
      uuid: string;
      title: string;
      preview_image: string;
      category: number;
      text: string;
    };
  };
}
export interface AminoMsgDeletePost extends AminoMsg {
  type: "/community.MsgDeletePost";
  value: {
    post_owner: string;
    post_uuid: string;
    owner: string;
  };
}
export interface AminoMsgSetLike extends AminoMsg {
  type: "/community.MsgSetLike";
  value: {
    like: {
      owner: string;
      post_owner: string;
      post_uuid: string;
      weight: number;
    };
  };
}
export interface AminoMsgFollow extends AminoMsg {
  type: "/community.MsgFollow";
  value: {
    owner: string;
    whom: string;
  };
}
export interface AminoMsgUnfollow extends AminoMsg {
  type: "/community.MsgUnfollow";
  value: {
    owner: string;
    whom: string;
  };
}
export const AminoConverter = {
  "/community.MsgCreatePost": {
    aminoType: "/community.MsgCreatePost",
    toAmino: ({
      post
    }: MsgCreatePost): AminoMsgCreatePost["value"] => {
      return {
        post: {
          owner: post.owner,
          uuid: post.uuid,
          title: post.title,
          preview_image: post.previewImage,
          category: post.category,
          text: post.text
        }
      };
    },
    fromAmino: ({
      post
    }: AminoMsgCreatePost["value"]): MsgCreatePost => {
      return {
        post: {
          owner: post.owner,
          uuid: post.uuid,
          title: post.title,
          previewImage: post.preview_image,
          category: categoryFromJSON(post.category),
          text: post.text
        }
      };
    }
  },
  "/community.MsgDeletePost": {
    aminoType: "/community.MsgDeletePost",
    toAmino: ({
      postOwner,
      postUuid,
      owner
    }: MsgDeletePost): AminoMsgDeletePost["value"] => {
      return {
        post_owner: postOwner,
        post_uuid: postUuid,
        owner
      };
    },
    fromAmino: ({
      post_owner,
      post_uuid,
      owner
    }: AminoMsgDeletePost["value"]): MsgDeletePost => {
      return {
        postOwner: post_owner,
        postUuid: post_uuid,
        owner
      };
    }
  },
  "/community.MsgSetLike": {
    aminoType: "/community.MsgSetLike",
    toAmino: ({
      like
    }: MsgSetLike): AminoMsgSetLike["value"] => {
      return {
        like: {
          owner: like.owner,
          post_owner: like.postOwner,
          post_uuid: like.postUuid,
          weight: like.weight
        }
      };
    },
    fromAmino: ({
      like
    }: AminoMsgSetLike["value"]): MsgSetLike => {
      return {
        like: {
          owner: like.owner,
          postOwner: like.post_owner,
          postUuid: like.post_uuid,
          weight: likeWeightFromJSON(like.weight)
        }
      };
    }
  },
  "/community.MsgFollow": {
    aminoType: "/community.MsgFollow",
    toAmino: ({
      owner,
      whom
    }: MsgFollow): AminoMsgFollow["value"] => {
      return {
        owner,
        whom
      };
    },
    fromAmino: ({
      owner,
      whom
    }: AminoMsgFollow["value"]): MsgFollow => {
      return {
        owner,
        whom
      };
    }
  },
  "/community.MsgUnfollow": {
    aminoType: "/community.MsgUnfollow",
    toAmino: ({
      owner,
      whom
    }: MsgUnfollow): AminoMsgUnfollow["value"] => {
      return {
        owner,
        whom
      };
    },
    fromAmino: ({
      owner,
      whom
    }: AminoMsgUnfollow["value"]): MsgUnfollow => {
      return {
        owner,
        whom
      };
    }
  }
};