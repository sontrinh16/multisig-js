import { Any } from "../../../google/protobuf/any";
import { RegisteredReactionValueParams, FreeTextValueParams } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgAddReaction represents the message to be used to add a post reaction */
export interface MsgAddReaction {
    /** Id of the subspace inside which the post to react to is */
    subspaceId: Long;
    /** Id of the post to react to */
    postId: Long;
    /** Value of the reaction */
    value: Any;
    /** User reacting to the post */
    user: string;
}
/** MsgAddReactionResponse represents the Msg/AddReaction response type */
export interface MsgAddReactionResponse {
    /** Id of the newly added reaction */
    reactionId: number;
}
/**
 * MsgRemoveReaction represents the message to be used to remove an
 * existing reaction from a post
 */
export interface MsgRemoveReaction {
    /** Id of the subspace inside which the reaction to remove is */
    subspaceId: Long;
    /** Id of the post from which to remove the reaction */
    postId: Long;
    /** Id of the reaction to be removed */
    reactionId: number;
    /** User removing the reaction */
    user: string;
}
/** MsgRemoveReactionResponse represents the Msg/RemoveReaction response type */
export interface MsgRemoveReactionResponse {
}
/**
 * MsgAddRegisteredReaction represents the message to be used to
 * register a new supported reaction
 */
export interface MsgAddRegisteredReaction {
    /** Id of the subspace inside which this reaction should be registered */
    subspaceId: Long;
    /** Shorthand code of the reaction */
    shorthandCode: string;
    /** Display value of the reaction */
    displayValue: string;
    /** User adding the supported reaction */
    user: string;
}
/**
 * MsgAddRegisteredReactionResponse represents the
 * Msg/AddRegisteredReaction response type
 */
export interface MsgAddRegisteredReactionResponse {
    /** Id of the newly registered reaction */
    registeredReactionId: number;
}
/**
 * MsgEditRegisteredReaction represents the message to be used to edit a
 * registered reaction
 */
export interface MsgEditRegisteredReaction {
    /** Id of the subspace inside which the reaction to edit is */
    subspaceId: Long;
    /** Id of the registered reaction to edit */
    registeredReactionId: number;
    /** New shorthand code to be set */
    shorthandCode: string;
    /** Display value to be set */
    displayValue: string;
    /** User editing the registered reaction */
    user: string;
}
/**
 * MsgEditRegisteredReactionResponse represents the Msg/EditRegisteredReaction
 * response type
 */
export interface MsgEditRegisteredReactionResponse {
}
/**
 * MsgRemoveRegisteredReaction represents the message to be used to
 * remove an existing registered reaction
 */
export interface MsgRemoveRegisteredReaction {
    /** Id of the subspace from which to remove the registered reaction */
    subspaceId: Long;
    /** Id of the registered reaction to be removed */
    registeredReactionId: number;
    /** User removing the registered reaction */
    user: string;
}
/**
 * MsgRemoveRegisteredReactionResponse represents the
 * Msg/RemoveRegisteredReaction response type
 */
export interface MsgRemoveRegisteredReactionResponse {
}
/**
 * MsgSetReactionsParams represents the message to be used when setting
 * a subspace reactions params
 */
export interface MsgSetReactionsParams {
    /** Id of the subspace for which to set the params */
    subspaceId: Long;
    /** Params related to RegisteredReactionValue reactions */
    registeredReaction: RegisteredReactionValueParams;
    /** Params related to FreeTextValue reactions */
    freeText: FreeTextValueParams;
    /** User setting the params */
    user: string;
}
/**
 * MsgSetReactionsParamsResponse represents the Msg/SetReactionsParams response
 * type
 */
export interface MsgSetReactionsParamsResponse {
}
export declare const MsgAddReaction: {
    encode(message: MsgAddReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReaction;
    fromJSON(object: any): MsgAddReaction;
    toJSON(message: MsgAddReaction): unknown;
    fromPartial(object: DeepPartial<MsgAddReaction>): MsgAddReaction;
};
export declare const MsgAddReactionResponse: {
    encode(message: MsgAddReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReactionResponse;
    fromJSON(object: any): MsgAddReactionResponse;
    toJSON(message: MsgAddReactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddReactionResponse>): MsgAddReactionResponse;
};
export declare const MsgRemoveReaction: {
    encode(message: MsgRemoveReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReaction;
    fromJSON(object: any): MsgRemoveReaction;
    toJSON(message: MsgRemoveReaction): unknown;
    fromPartial(object: DeepPartial<MsgRemoveReaction>): MsgRemoveReaction;
};
export declare const MsgRemoveReactionResponse: {
    encode(_: MsgRemoveReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReactionResponse;
    fromJSON(_: any): MsgRemoveReactionResponse;
    toJSON(_: MsgRemoveReactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveReactionResponse>): MsgRemoveReactionResponse;
};
export declare const MsgAddRegisteredReaction: {
    encode(message: MsgAddRegisteredReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRegisteredReaction;
    fromJSON(object: any): MsgAddRegisteredReaction;
    toJSON(message: MsgAddRegisteredReaction): unknown;
    fromPartial(object: DeepPartial<MsgAddRegisteredReaction>): MsgAddRegisteredReaction;
};
export declare const MsgAddRegisteredReactionResponse: {
    encode(message: MsgAddRegisteredReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRegisteredReactionResponse;
    fromJSON(object: any): MsgAddRegisteredReactionResponse;
    toJSON(message: MsgAddRegisteredReactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddRegisteredReactionResponse>): MsgAddRegisteredReactionResponse;
};
export declare const MsgEditRegisteredReaction: {
    encode(message: MsgEditRegisteredReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRegisteredReaction;
    fromJSON(object: any): MsgEditRegisteredReaction;
    toJSON(message: MsgEditRegisteredReaction): unknown;
    fromPartial(object: DeepPartial<MsgEditRegisteredReaction>): MsgEditRegisteredReaction;
};
export declare const MsgEditRegisteredReactionResponse: {
    encode(_: MsgEditRegisteredReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRegisteredReactionResponse;
    fromJSON(_: any): MsgEditRegisteredReactionResponse;
    toJSON(_: MsgEditRegisteredReactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditRegisteredReactionResponse>): MsgEditRegisteredReactionResponse;
};
export declare const MsgRemoveRegisteredReaction: {
    encode(message: MsgRemoveRegisteredReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRegisteredReaction;
    fromJSON(object: any): MsgRemoveRegisteredReaction;
    toJSON(message: MsgRemoveRegisteredReaction): unknown;
    fromPartial(object: DeepPartial<MsgRemoveRegisteredReaction>): MsgRemoveRegisteredReaction;
};
export declare const MsgRemoveRegisteredReactionResponse: {
    encode(_: MsgRemoveRegisteredReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRegisteredReactionResponse;
    fromJSON(_: any): MsgRemoveRegisteredReactionResponse;
    toJSON(_: MsgRemoveRegisteredReactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveRegisteredReactionResponse>): MsgRemoveRegisteredReactionResponse;
};
export declare const MsgSetReactionsParams: {
    encode(message: MsgSetReactionsParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetReactionsParams;
    fromJSON(object: any): MsgSetReactionsParams;
    toJSON(message: MsgSetReactionsParams): unknown;
    fromPartial(object: DeepPartial<MsgSetReactionsParams>): MsgSetReactionsParams;
};
export declare const MsgSetReactionsParamsResponse: {
    encode(_: MsgSetReactionsParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetReactionsParamsResponse;
    fromJSON(_: any): MsgSetReactionsParamsResponse;
    toJSON(_: MsgSetReactionsParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetReactionsParamsResponse>): MsgSetReactionsParamsResponse;
};
