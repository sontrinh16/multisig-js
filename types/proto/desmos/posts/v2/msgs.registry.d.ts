import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePost, MsgEditPost, MsgDeletePost, MsgAddPostAttachment, MsgRemovePostAttachment, MsgAnswerPoll } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: Uint8Array;
        };
        editPost(value: MsgEditPost): {
            typeUrl: string;
            value: Uint8Array;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: Uint8Array;
        };
        addPostAttachment(value: MsgAddPostAttachment): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePostAttachment(value: MsgRemovePostAttachment): {
            typeUrl: string;
            value: Uint8Array;
        };
        answerPoll(value: MsgAnswerPoll): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        editPost(value: MsgEditPost): {
            typeUrl: string;
            value: MsgEditPost;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        addPostAttachment(value: MsgAddPostAttachment): {
            typeUrl: string;
            value: MsgAddPostAttachment;
        };
        removePostAttachment(value: MsgRemovePostAttachment): {
            typeUrl: string;
            value: MsgRemovePostAttachment;
        };
        answerPoll(value: MsgAnswerPoll): {
            typeUrl: string;
            value: MsgAnswerPoll;
        };
    };
    toJSON: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: unknown;
        };
        editPost(value: MsgEditPost): {
            typeUrl: string;
            value: unknown;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: unknown;
        };
        addPostAttachment(value: MsgAddPostAttachment): {
            typeUrl: string;
            value: unknown;
        };
        removePostAttachment(value: MsgRemovePostAttachment): {
            typeUrl: string;
            value: unknown;
        };
        answerPoll(value: MsgAnswerPoll): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createPost(value: any): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        editPost(value: any): {
            typeUrl: string;
            value: MsgEditPost;
        };
        deletePost(value: any): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        addPostAttachment(value: any): {
            typeUrl: string;
            value: MsgAddPostAttachment;
        };
        removePostAttachment(value: any): {
            typeUrl: string;
            value: MsgRemovePostAttachment;
        };
        answerPoll(value: any): {
            typeUrl: string;
            value: MsgAnswerPoll;
        };
    };
    fromPartial: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        editPost(value: MsgEditPost): {
            typeUrl: string;
            value: MsgEditPost;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        addPostAttachment(value: MsgAddPostAttachment): {
            typeUrl: string;
            value: MsgAddPostAttachment;
        };
        removePostAttachment(value: MsgRemovePostAttachment): {
            typeUrl: string;
            value: MsgRemovePostAttachment;
        };
        answerPoll(value: MsgAnswerPoll): {
            typeUrl: string;
            value: MsgAnswerPoll;
        };
    };
};
