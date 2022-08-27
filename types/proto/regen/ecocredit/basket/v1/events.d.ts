import { BasketCredit } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreate {
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    curator: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPut {
    /** owner is the owner of the credits put into the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basketDenom: string;
    /**
     * credits are the credits that were added to the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTake {
    /** owner is the owner of the credits taken from the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basketDenom: string;
    /**
     * credits are the credits that were taken from the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount: string;
}
export declare const EventCreate: {
    encode(message: EventCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate;
    fromJSON(object: any): EventCreate;
    toJSON(message: EventCreate): unknown;
    fromPartial(object: DeepPartial<EventCreate>): EventCreate;
};
export declare const EventPut: {
    encode(message: EventPut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPut;
    fromJSON(object: any): EventPut;
    toJSON(message: EventPut): unknown;
    fromPartial(object: DeepPartial<EventPut>): EventPut;
};
export declare const EventTake: {
    encode(message: EventTake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTake;
    fromJSON(object: any): EventTake;
    toJSON(message: EventTake): unknown;
    fromPartial(object: DeepPartial<EventTake>): EventTake;
};
