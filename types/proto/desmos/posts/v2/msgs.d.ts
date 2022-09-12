import { Entities, ReplySetting, PostReference } from "./models";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgCreatePost represents the message to be used to create a post. */
export interface MsgCreatePost {
    /** Id of the subspace inside which the post must be created */
    subspaceId: Long;
    /** Id of the section inside which the post must be created */
    sectionId: number;
    /** (optional) External id for this post */
    externalId: string;
    /** (optional) Text of the post */
    text: string;
    /** (optional) Entities connected to this post */
    entities: Entities;
    /** Tags connected to this post */
    tags: string[];
    /** Attachments of the post */
    attachments: Any[];
    /** Author of the post */
    author: string;
    /** (optional) Id of the original post of the conversation */
    conversationId: Long;
    /** Reply settings of this post */
    replySettings: ReplySetting;
    /** A list this posts references (either as a reply, repost or quote) */
    referencedPosts: PostReference[];
}
/** MsgCreatePostResponse defines the Msg/CreatePost response type. */
export interface MsgCreatePostResponse {
    /** Id of the newly created post */
    postId: Long;
    /** Creation date of the post */
    creationDate: Timestamp;
}
/** MsgEditPost represents the message to be used to edit a post. */
export interface MsgEditPost {
    /** Id of the subspace inside which the post is */
    subspaceId: Long;
    /** Id of the post to edit */
    postId: Long;
    /**
     * New text of the post. If set to [do-not-modify] it will change the current
     * post's text.
     */
    text: string;
    /**
     * New entities connected to this post. These will always replace the current
     * post's entities
     */
    entities: Entities;
    /**
     * New tags connected to this post. These will always replace the current
     * post's tags
     */
    tags: string[];
    /** Editor of the post */
    editor: string;
}
/** MsgCreatePostResponse defines the Msg/EditPost response type. */
export interface MsgEditPostResponse {
    /** Edit date of the post */
    editDate: Timestamp;
}
/** MsgDeletePost represents the message used when deleting a post. */
export interface MsgDeletePost {
    /** Id of the subspace containing the post */
    subspaceId: Long;
    /** Id of the post to be deleted */
    postId: Long;
    /** User that is deleting the post */
    signer: string;
}
/** MsgDeletePostResponse represents the Msg/DeletePost response type */
export interface MsgDeletePostResponse {
}
/**
 * MsgAddPostAttachment represents the message that should be
 * used when adding an attachment to post
 */
export interface MsgAddPostAttachment {
    /** Id of the subspace containing the post */
    subspaceId: Long;
    /** Id of the post to which to add the attachment */
    postId: Long;
    /** Content of the attachment */
    content: Any;
    /** Editor of the post */
    editor: string;
}
/** MsgAddPostAttachmentResponse defines the Msg/AddPostAttachment response type. */
export interface MsgAddPostAttachmentResponse {
    /** New id of the uploaded attachment */
    attachmentId: number;
    /** Edit date of the post */
    editDate: Timestamp;
}
/**
 * MsgRemovePostAttachment represents the message to be used when
 * removing an attachment from a post
 */
export interface MsgRemovePostAttachment {
    /** Id of the subspace containing the post */
    subspaceId: Long;
    /** Id of the post from which to remove the attachment */
    postId: Long;
    /** Id of the attachment to be removed */
    attachmentId: number;
    /** User that is removing the attachment */
    editor: string;
}
/**
 * MsgRemovePostAttachmentResponse defines the
 * Msg/RemovePostAttachment response type.
 */
export interface MsgRemovePostAttachmentResponse {
    /** Edit date of the post */
    editDate: Timestamp;
}
/** MsgAnswerPoll represents the message used to answer a poll */
export interface MsgAnswerPoll {
    /** Id of the subspace containing the post */
    subspaceId: Long;
    /** Id of the post that contains the poll to be answered */
    postId: Long;
    /** Id of the poll to be answered */
    pollId: number;
    /** Indexes of the answer inside the ProvidedAnswers array */
    answersIndexes: number[];
    /** Address of the user answering the poll */
    signer: string;
}
/** MsgAnswerPollResponse represents the MSg/AnswerPoll response type */
export interface MsgAnswerPollResponse {
}
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgEditPost: {
    encode(message: MsgEditPost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditPost;
    fromJSON(object: any): MsgEditPost;
    toJSON(message: MsgEditPost): unknown;
    fromPartial(object: DeepPartial<MsgEditPost>): MsgEditPost;
};
export declare const MsgEditPostResponse: {
    encode(message: MsgEditPostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditPostResponse;
    fromJSON(object: any): MsgEditPostResponse;
    toJSON(message: MsgEditPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgEditPostResponse>): MsgEditPostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse;
};
export declare const MsgAddPostAttachment: {
    encode(message: MsgAddPostAttachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPostAttachment;
    fromJSON(object: any): MsgAddPostAttachment;
    toJSON(message: MsgAddPostAttachment): unknown;
    fromPartial(object: DeepPartial<MsgAddPostAttachment>): MsgAddPostAttachment;
};
export declare const MsgAddPostAttachmentResponse: {
    encode(message: MsgAddPostAttachmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPostAttachmentResponse;
    fromJSON(object: any): MsgAddPostAttachmentResponse;
    toJSON(message: MsgAddPostAttachmentResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddPostAttachmentResponse>): MsgAddPostAttachmentResponse;
};
export declare const MsgRemovePostAttachment: {
    encode(message: MsgRemovePostAttachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePostAttachment;
    fromJSON(object: any): MsgRemovePostAttachment;
    toJSON(message: MsgRemovePostAttachment): unknown;
    fromPartial(object: DeepPartial<MsgRemovePostAttachment>): MsgRemovePostAttachment;
};
export declare const MsgRemovePostAttachmentResponse: {
    encode(message: MsgRemovePostAttachmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePostAttachmentResponse;
    fromJSON(object: any): MsgRemovePostAttachmentResponse;
    toJSON(message: MsgRemovePostAttachmentResponse): unknown;
    fromPartial(object: DeepPartial<MsgRemovePostAttachmentResponse>): MsgRemovePostAttachmentResponse;
};
export declare const MsgAnswerPoll: {
    encode(message: MsgAnswerPoll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnswerPoll;
    fromJSON(object: any): MsgAnswerPoll;
    toJSON(message: MsgAnswerPoll): unknown;
    fromPartial(object: DeepPartial<MsgAnswerPoll>): MsgAnswerPoll;
};
export declare const MsgAnswerPollResponse: {
    encode(_: MsgAnswerPollResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnswerPollResponse;
    fromJSON(_: any): MsgAnswerPollResponse;
    toJSON(_: MsgAnswerPollResponse): unknown;
    fromPartial(_: DeepPartial<MsgAnswerPollResponse>): MsgAnswerPollResponse;
};
