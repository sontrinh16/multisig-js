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
export declare const AminoConverter: {
    "/community.MsgCreatePost": {
        aminoType: string;
        toAmino: ({ post }: MsgCreatePost) => AminoMsgCreatePost["value"];
        fromAmino: ({ post }: AminoMsgCreatePost["value"]) => MsgCreatePost;
    };
    "/community.MsgDeletePost": {
        aminoType: string;
        toAmino: ({ postOwner, postUuid, owner }: MsgDeletePost) => AminoMsgDeletePost["value"];
        fromAmino: ({ post_owner, post_uuid, owner }: AminoMsgDeletePost["value"]) => MsgDeletePost;
    };
    "/community.MsgSetLike": {
        aminoType: string;
        toAmino: ({ like }: MsgSetLike) => AminoMsgSetLike["value"];
        fromAmino: ({ like }: AminoMsgSetLike["value"]) => MsgSetLike;
    };
    "/community.MsgFollow": {
        aminoType: string;
        toAmino: ({ owner, whom }: MsgFollow) => AminoMsgFollow["value"];
        fromAmino: ({ owner, whom }: AminoMsgFollow["value"]) => MsgFollow;
    };
    "/community.MsgUnfollow": {
        aminoType: string;
        toAmino: ({ owner, whom }: MsgUnfollow) => AminoMsgUnfollow["value"];
        fromAmino: ({ owner, whom }: AminoMsgUnfollow["value"]) => MsgUnfollow;
    };
};
