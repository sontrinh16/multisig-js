import { Entities, ReplySetting, PostReference } from "../models";
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * CreatePostJSON contains the data that can be specified when creating a Post
 * using the CLi command
 */
export interface CreatePostJSON {
    /** (optional) External id for this post */
    externalId: string;
    /** (optional) Text of the post */
    text: string;
    /** (optional) Entities connected to this post */
    entities: Entities;
    /** Tags related to this post */
    tags: string[];
    /** Attachments of the post */
    attachments: Any[];
    /** (optional) Id of the original post of the conversation */
    conversationId: Long;
    /** Reply settings of this post */
    replySettings: ReplySetting;
    /** A list this posts references (either as a reply, repost or quote) */
    referencedPosts: PostReference[];
}
/**
 * EditPostJSON contains the data that can be specified when editing a Post
 * using the CLI command
 */
export interface EditPostJSON {
    /** New text of the post */
    text: string;
    /** New entities connected to this post */
    entities: Entities;
    /** New tags associated to this post */
    tags: string[];
}
export declare const CreatePostJSON: {
    encode(message: CreatePostJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostJSON;
    fromJSON(object: any): CreatePostJSON;
    toJSON(message: CreatePostJSON): unknown;
    fromPartial(object: DeepPartial<CreatePostJSON>): CreatePostJSON;
};
export declare const EditPostJSON: {
    encode(message: EditPostJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EditPostJSON;
    fromJSON(object: any): EditPostJSON;
    toJSON(message: EditPostJSON): unknown;
    fromPartial(object: DeepPartial<EditPostJSON>): EditPostJSON;
};
