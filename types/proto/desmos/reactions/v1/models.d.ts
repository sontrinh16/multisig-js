import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Reaction contains the data of a single post reaction */
export interface Reaction {
    /** Id of the subspace inside which the reaction has been put */
    subspaceId: Long;
    /** Id of the post to which the reaction is associated */
    postId: Long;
    /** Id of the reaction within the post */
    id: number;
    /** Value of the reaction. */
    value: Any;
    /** Author of the reaction */
    author: string;
}
/**
 * RegisteredReactionValue contains the details of a reaction value that
 * references a reaction registered within the subspace
 */
export interface RegisteredReactionValue {
    /** Id of the registered reaction */
    registeredReactionId: number;
}
/**
 * FreeTextValue contains the details of a reaction value that
 * is made of free text
 */
export interface FreeTextValue {
    text: string;
}
/**
 * RegisteredReaction contains the details of a registered reaction within a
 * subspace
 */
export interface RegisteredReaction {
    /** Id of the subspace for which this reaction has been registered */
    subspaceId: Long;
    /** Id of the registered reaction */
    id: number;
    /** Unique shorthand code associated to this reaction */
    shorthandCode: string;
    /** Value that should be displayed when using this reaction */
    displayValue: string;
}
/**
 * SubspaceReactionsParams contains the params related to a single subspace
 * reactions
 */
export interface SubspaceReactionsParams {
    /** Id of the subspace for which these params are valid */
    subspaceId: Long;
    /** Params related to RegisteredReactionValue reactions */
    registeredReaction: RegisteredReactionValueParams;
    /** Params related to FreeTextValue reactions */
    freeText: FreeTextValueParams;
}
/** FreeTextValueParams contains the params for FreeTextValue based reactions */
export interface FreeTextValueParams {
    /** Whether FreeTextValue reactions should be enabled */
    enabled: boolean;
    /** The max length that FreeTextValue reactions should have */
    maxLength: number;
    /**
     * RegEx that each FreeTextValue should respect.
     * This is useful to limit what characters can be used as a reaction.
     */
    regEx: string;
}
/**
 * RegisteredReactionValueParams contains the params for RegisteredReactionValue
 * based reactions
 */
export interface RegisteredReactionValueParams {
    /** Whether RegisteredReactionValue reactions should be enabled */
    enabled: boolean;
}
export declare const Reaction: {
    encode(message: Reaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reaction;
    fromJSON(object: any): Reaction;
    toJSON(message: Reaction): unknown;
    fromPartial(object: DeepPartial<Reaction>): Reaction;
};
export declare const RegisteredReactionValue: {
    encode(message: RegisteredReactionValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredReactionValue;
    fromJSON(object: any): RegisteredReactionValue;
    toJSON(message: RegisteredReactionValue): unknown;
    fromPartial(object: DeepPartial<RegisteredReactionValue>): RegisteredReactionValue;
};
export declare const FreeTextValue: {
    encode(message: FreeTextValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FreeTextValue;
    fromJSON(object: any): FreeTextValue;
    toJSON(message: FreeTextValue): unknown;
    fromPartial(object: DeepPartial<FreeTextValue>): FreeTextValue;
};
export declare const RegisteredReaction: {
    encode(message: RegisteredReaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredReaction;
    fromJSON(object: any): RegisteredReaction;
    toJSON(message: RegisteredReaction): unknown;
    fromPartial(object: DeepPartial<RegisteredReaction>): RegisteredReaction;
};
export declare const SubspaceReactionsParams: {
    encode(message: SubspaceReactionsParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceReactionsParams;
    fromJSON(object: any): SubspaceReactionsParams;
    toJSON(message: SubspaceReactionsParams): unknown;
    fromPartial(object: DeepPartial<SubspaceReactionsParams>): SubspaceReactionsParams;
};
export declare const FreeTextValueParams: {
    encode(message: FreeTextValueParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FreeTextValueParams;
    fromJSON(object: any): FreeTextValueParams;
    toJSON(message: FreeTextValueParams): unknown;
    fromPartial(object: DeepPartial<FreeTextValueParams>): FreeTextValueParams;
};
export declare const RegisteredReactionValueParams: {
    encode(message: RegisteredReactionValueParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredReactionValueParams;
    fromJSON(object: any): RegisteredReactionValueParams;
    toJSON(message: RegisteredReactionValueParams): unknown;
    fromPartial(object: DeepPartial<RegisteredReactionValueParams>): RegisteredReactionValueParams;
};
