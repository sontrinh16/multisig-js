import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePost, MsgEditPost, MsgDeletePost, MsgAddPostAttachment, MsgRemovePostAttachment, MsgAnswerPoll } from "./msgs";
export interface AminoMsgCreatePost extends AminoMsg {
    type: "/desmos.posts.v2.MsgCreatePost";
    value: {
        subspace_id: string;
        section_id: number;
        external_id: string;
        text: string;
        entities: {
            hashtags: {
                start: string;
                end: string;
                tag: string;
            }[];
            mentions: {
                start: string;
                end: string;
                tag: string;
            }[];
            urls: {
                start: string;
                end: string;
                url: string;
                display_url: string;
            }[];
        };
        tags: string[];
        attachments: {
            type_url: string;
            value: Uint8Array;
        }[];
        author: string;
        conversation_id: string;
        reply_settings: number;
        referenced_posts: {
            type: number;
            post_id: string;
            position: string;
        }[];
    };
}
export interface AminoMsgEditPost extends AminoMsg {
    type: "/desmos.posts.v2.MsgEditPost";
    value: {
        subspace_id: string;
        post_id: string;
        text: string;
        entities: {
            hashtags: {
                start: string;
                end: string;
                tag: string;
            }[];
            mentions: {
                start: string;
                end: string;
                tag: string;
            }[];
            urls: {
                start: string;
                end: string;
                url: string;
                display_url: string;
            }[];
        };
        tags: string[];
        editor: string;
    };
}
export interface AminoMsgDeletePost extends AminoMsg {
    type: "/desmos.posts.v2.MsgDeletePost";
    value: {
        subspace_id: string;
        post_id: string;
        signer: string;
    };
}
export interface AminoMsgAddPostAttachment extends AminoMsg {
    type: "/desmos.posts.v2.MsgAddPostAttachment";
    value: {
        subspace_id: string;
        post_id: string;
        content: {
            type_url: string;
            value: Uint8Array;
        };
        editor: string;
    };
}
export interface AminoMsgRemovePostAttachment extends AminoMsg {
    type: "/desmos.posts.v2.MsgRemovePostAttachment";
    value: {
        subspace_id: string;
        post_id: string;
        attachment_id: number;
        editor: string;
    };
}
export interface AminoMsgAnswerPoll extends AminoMsg {
    type: "/desmos.posts.v2.MsgAnswerPoll";
    value: {
        subspace_id: string;
        post_id: string;
        poll_id: number;
        answers_indexes: number[];
        signer: string;
    };
}
export declare const AminoConverter: {
    "/desmos.posts.v2.MsgCreatePost": {
        aminoType: string;
        toAmino: ({ subspaceId, sectionId, externalId, text, entities, tags, attachments, author, conversationId, replySettings, referencedPosts }: MsgCreatePost) => AminoMsgCreatePost["value"];
        fromAmino: ({ subspace_id, section_id, external_id, text, entities, tags, attachments, author, conversation_id, reply_settings, referenced_posts }: AminoMsgCreatePost["value"]) => MsgCreatePost;
    };
    "/desmos.posts.v2.MsgEditPost": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, text, entities, tags, editor }: MsgEditPost) => AminoMsgEditPost["value"];
        fromAmino: ({ subspace_id, post_id, text, entities, tags, editor }: AminoMsgEditPost["value"]) => MsgEditPost;
    };
    "/desmos.posts.v2.MsgDeletePost": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, signer }: MsgDeletePost) => AminoMsgDeletePost["value"];
        fromAmino: ({ subspace_id, post_id, signer }: AminoMsgDeletePost["value"]) => MsgDeletePost;
    };
    "/desmos.posts.v2.MsgAddPostAttachment": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, content, editor }: MsgAddPostAttachment) => AminoMsgAddPostAttachment["value"];
        fromAmino: ({ subspace_id, post_id, content, editor }: AminoMsgAddPostAttachment["value"]) => MsgAddPostAttachment;
    };
    "/desmos.posts.v2.MsgRemovePostAttachment": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, attachmentId, editor }: MsgRemovePostAttachment) => AminoMsgRemovePostAttachment["value"];
        fromAmino: ({ subspace_id, post_id, attachment_id, editor }: AminoMsgRemovePostAttachment["value"]) => MsgRemovePostAttachment;
    };
    "/desmos.posts.v2.MsgAnswerPoll": {
        aminoType: string;
        toAmino: ({ subspaceId, postId, pollId, answersIndexes, signer }: MsgAnswerPoll) => AminoMsgAnswerPoll["value"];
        fromAmino: ({ subspace_id, post_id, poll_id, answers_indexes, signer }: AminoMsgAnswerPoll["value"]) => MsgAnswerPoll;
    };
};
