import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** PostReferenceType represents the different types of references */
export declare enum PostReferenceType {
    /** POST_REFERENCE_TYPE_UNSPECIFIED - No reference specified */
    POST_REFERENCE_TYPE_UNSPECIFIED = 0,
    /** POST_REFERENCE_TYPE_REPLY - This reference represents a reply to the specified post */
    POST_REFERENCE_TYPE_REPLY = 1,
    /** POST_REFERENCE_TYPE_QUOTE - This reference represents a quote of the specified post */
    POST_REFERENCE_TYPE_QUOTE = 2,
    /** POST_REFERENCE_TYPE_REPOST - This reference represents a repost of the specified post */
    POST_REFERENCE_TYPE_REPOST = 3,
    UNRECOGNIZED = -1
}
export declare function postReferenceTypeFromJSON(object: any): PostReferenceType;
export declare function postReferenceTypeToJSON(object: PostReferenceType): string;
/** ReplySetting contains the possible reply settings that a post can have */
export declare enum ReplySetting {
    /** REPLY_SETTING_UNSPECIFIED - No reply setting specified */
    REPLY_SETTING_UNSPECIFIED = 0,
    /** REPLY_SETTING_EVERYONE - Everyone will be able to reply to this post */
    REPLY_SETTING_EVERYONE = 1,
    /** REPLY_SETTING_FOLLOWERS - Only followers of the author will be able to reply to this post */
    REPLY_SETTING_FOLLOWERS = 2,
    /** REPLY_SETTING_MUTUAL - Only the author mutual followers will be able to reply to this post */
    REPLY_SETTING_MUTUAL = 3,
    /** REPLY_SETTING_MENTIONS - Only people mentioned inside this post will be able to reply */
    REPLY_SETTING_MENTIONS = 4,
    UNRECOGNIZED = -1
}
export declare function replySettingFromJSON(object: any): ReplySetting;
export declare function replySettingToJSON(object: ReplySetting): string;
/** Post contains all the information about a single post */
export interface Post {
    /** Id of the subspace inside which the post has been created */
    subspaceId: Long;
    /** Id of the section inside which the post has been created */
    sectionId: number;
    /** Unique id of the post */
    id: Long;
    /** (optional) External id for this post */
    externalId: string;
    /** (optional) Text of the post */
    text: string;
    /** (optional) Entities connected to this post */
    entities: Entities;
    /** Author of the post */
    author: string;
    /** (optional) Id of the original post of the conversation */
    conversationId: Long;
    /** A list this posts references (either as a reply, repost or quote) */
    referencedPosts: PostReference[];
    /** Reply settings of this post */
    replySettings: ReplySetting;
    /** Creation date of the post */
    creationDate: Date;
    /** (optional) Last edited time of the post */
    lastEditedDate: Date;
}
/** PostReference contains the details of a post reference */
export interface PostReference {
    /** Type of reference */
    type: PostReferenceType;
    /** Id of the referenced post */
    postId: Long;
    /**
     * Position of the reference inside the post's text. This should be used only
     * with the type set to TYPE_QUOTE
     */
    position: Long;
}
/** Contains the details of entities parsed out of the post text */
export interface Entities {
    hashtags: Tag[];
    mentions: Tag[];
    urls: Url[];
}
/** Tag represents a generic tag */
export interface Tag {
    /** Index of the character inside the text at which the tag starts */
    start: Long;
    /** Index of the character inside the text at which the tag ends */
    end: Long;
    /** Tag reference (user address, hashtag value, etc) */
    tag: string;
}
/** Url contains the details of a generic URL */
export interface Url {
    /** Index of the character inside the text at which the URL starts */
    start: Long;
    /** Index of the character inside the text at which the URL ends */
    end: Long;
    /** Value of the URL where the user should be redirected to */
    url: string;
    /** (optional) Display value of the URL */
    displayUrl: string;
}
/** Attachment contains the data of a single post attachment */
export interface Attachment {
    /**
     * Id of the subspace inside which the post to which this attachment should be
     * connected is
     */
    subspaceId: Long;
    /**
     * Id of the subspace section inside which the post to which this attachment
     * should be connected is
     */
    sectionId: number;
    /** Id of the post to which this attachment should be connected */
    postId: Long;
    /** Id of this attachment */
    id: number;
    /** Content of the attachment */
    content: Any;
}
/** Media represents a media attachment */
export interface Media {
    uri: string;
    mimeType: string;
}
/** Poll represents a poll attachment */
export interface Poll {
    /** Question of the poll */
    question: string;
    /** Answers the users can choose from */
    providedAnswers: Poll_ProvidedAnswer[];
    /** Date at which the poll will close */
    endDate: Date;
    /** Whether the poll allows multiple choices from the same user or not */
    allowsMultipleAnswers: boolean;
    /** Whether the poll allows to edit an answer or not */
    allowsAnswerEdits: boolean;
    /** Final poll results */
    finalTallyResults: PollTallyResults;
}
/** Provided answer contains the details of a possible poll answer */
export interface Poll_ProvidedAnswer {
    /** (optional) Text of the answer */
    text: string;
    /** Attachments of the answer */
    attachments: Attachment[];
}
/** UserAnswer represents a user answer to a poll */
export interface UserAnswer {
    /** Subspace id inside which the post related to this attachment is located */
    subspaceId: Long;
    /** Section id inside which the post related to this attachment is located */
    sectionId: number;
    /** Id of the post associated to this attachment */
    postId: Long;
    /** Id of the poll to which this answer is associated */
    pollId: number;
    /** Indexes of the answers inside the ProvidedAnswers array */
    answersIndexes: number[];
    /** Address of the user answering the poll */
    user: string;
}
/** PollTallyResults contains the tally results for a poll */
export interface PollTallyResults {
    results: PollTallyResults_AnswerResult[];
}
/** AnswerResult contains the result of a single poll provided answer */
export interface PollTallyResults_AnswerResult {
    /** Index of the answer inside the poll's ProvidedAnswers slice */
    answerIndex: number;
    /** Number of votes the answer has received */
    votes: Long;
}
/** Params contains the parameters for the posts module */
export interface Params {
    /** Maximum length of the post text */
    maxTextLength: number;
}
export declare const Post: {
    encode(message: Post, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Post;
    fromJSON(object: any): Post;
    toJSON(message: Post): unknown;
    fromPartial(object: DeepPartial<Post>): Post;
};
export declare const PostReference: {
    encode(message: PostReference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostReference;
    fromJSON(object: any): PostReference;
    toJSON(message: PostReference): unknown;
    fromPartial(object: DeepPartial<PostReference>): PostReference;
};
export declare const Entities: {
    encode(message: Entities, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entities;
    fromJSON(object: any): Entities;
    toJSON(message: Entities): unknown;
    fromPartial(object: DeepPartial<Entities>): Entities;
};
export declare const Tag: {
    encode(message: Tag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tag;
    fromJSON(object: any): Tag;
    toJSON(message: Tag): unknown;
    fromPartial(object: DeepPartial<Tag>): Tag;
};
export declare const Url: {
    encode(message: Url, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Url;
    fromJSON(object: any): Url;
    toJSON(message: Url): unknown;
    fromPartial(object: DeepPartial<Url>): Url;
};
export declare const Attachment: {
    encode(message: Attachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attachment;
    fromJSON(object: any): Attachment;
    toJSON(message: Attachment): unknown;
    fromPartial(object: DeepPartial<Attachment>): Attachment;
};
export declare const Media: {
    encode(message: Media, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Media;
    fromJSON(object: any): Media;
    toJSON(message: Media): unknown;
    fromPartial(object: DeepPartial<Media>): Media;
};
export declare const Poll: {
    encode(message: Poll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Poll;
    fromJSON(object: any): Poll;
    toJSON(message: Poll): unknown;
    fromPartial(object: DeepPartial<Poll>): Poll;
};
export declare const Poll_ProvidedAnswer: {
    encode(message: Poll_ProvidedAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Poll_ProvidedAnswer;
    fromJSON(object: any): Poll_ProvidedAnswer;
    toJSON(message: Poll_ProvidedAnswer): unknown;
    fromPartial(object: DeepPartial<Poll_ProvidedAnswer>): Poll_ProvidedAnswer;
};
export declare const UserAnswer: {
    encode(message: UserAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAnswer;
    fromJSON(object: any): UserAnswer;
    toJSON(message: UserAnswer): unknown;
    fromPartial(object: DeepPartial<UserAnswer>): UserAnswer;
};
export declare const PollTallyResults: {
    encode(message: PollTallyResults, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollTallyResults;
    fromJSON(object: any): PollTallyResults;
    toJSON(message: PollTallyResults): unknown;
    fromPartial(object: DeepPartial<PollTallyResults>): PollTallyResults;
};
export declare const PollTallyResults_AnswerResult: {
    encode(message: PollTallyResults_AnswerResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollTallyResults_AnswerResult;
    fromJSON(object: any): PollTallyResults_AnswerResult;
    toJSON(message: PollTallyResults_AnswerResult): unknown;
    fromPartial(object: DeepPartial<PollTallyResults_AnswerResult>): PollTallyResults_AnswerResult;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
