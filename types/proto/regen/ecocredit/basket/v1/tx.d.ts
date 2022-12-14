import { DateCriteria, BasketCredit } from "./types";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreate {
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     */
    curator: string;
    /**
     * name will be used to together with prefix to create a bank denom for this
     * basket token. It can be between 3-8 alphanumeric characters, with the
     * first character being alphabetic.
     *
     * The bank denom will be formed from name, credit type and exponent and be
     * of the form `eco.<prefix><credit_type_abbrev>.<name>` where prefix
     * is derived from exponent.
     */
    name: string;
    /**
     * description is a human-readable description of the basket denom that should
     * be at most 256 characters.
     */
    description: string;
    /**
     * exponent is the exponent that will be used for converting credits to basket
     * tokens and for bank denom metadata. It also limits the precision of
     * credit amounts when putting credits into a basket. An exponent of 6 will
     * mean that 10^6 units of a basket token will be issued for 1.0 credits and
     * that this should be displayed as one unit in user interfaces. It also means
     * that the maximum precision of credit amounts is 6 decimal places so that
     * the need to round is eliminated. The exponent must be >= the precision of
     * the credit type at the time the basket is created and be of one of the
     * following values 0, 1, 2, 3, 6, 9, 12, 15, 18, 21, or 24 which correspond
     * to the exponents which have an official SI prefix.
     *
     * The exponent will be used to form the prefix part of the the bank denom
     * and will be mapped as follows:
     * 0 - no prefix
     * 1 - d (deci)
     * 2 - c (centi)
     * 3 - m (milli)
     * 6 - u (micro)
     * 9 - n (nano)
     * 12 - p (pico)
     * 15 - f (femto)
     * 18 - a (atto)
     * 21 - z (zepto)
     * 24 - y (yocto)
     */
    exponent: number;
    /**
     * disable_auto_retire allows auto-retirement to be disabled.
     * The credits will be auto-retired if disable_auto_retire is
     * false unless the credits were previously put into the basket by the
     * address picking them from the basket, in which case they will remain
     * tradable.
     */
    disableAutoRetire: boolean;
    /**
     * credit_type_abbrev is the abbreviation of the credit type this basket is
     * able to hold.
     */
    creditTypeAbbrev: string;
    /** allowed_classes are the credit classes allowed to be put in the basket */
    allowedClasses: string[];
    /**
     * date_criteria is the date criteria for batches admitted to the basket.
     * At most, only one of the fields in the date_criteria should be set.
     */
    dateCriteria: DateCriteria;
    /**
     * fee is the fee that the curator will pay to create the basket. It must be
     * >= the required Params.basket_creation_fee. We include the fee explicitly
     * here so that the curator explicitly acknowledges paying this fee and
     * is not surprised to learn that the paid a big fee and didn't know
     * beforehand.
     */
    fee: Coin[];
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateResponse {
    /** basket_denom is the unique denomination ID of the newly created basket. */
    basketDenom: string;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgPut {
    /** owner is the owner of credits being put into the basket. */
    owner: string;
    /** basket_denom is the basket denom to add credits to. */
    basketDenom: string;
    /**
     * credits are credits to add to the basket. If they do not match the basket's
     * admission criteria the operation will fail. If there are any "dust" credits
     * left over when converting credits to basket tokens, these credits will
     * not be converted to basket tokens and instead remain with the owner.
     */
    credits: BasketCredit[];
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgPutResponse {
    /** amount_received is the integer amount of basket tokens received. */
    amountReceived: string;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTake {
    /** owner is the owner of the basket tokens. */
    owner: string;
    /** basket_denom is the basket bank denom to take credits from. */
    basketDenom: string;
    /** amount is the integer number of basket tokens to convert into credits. */
    amount: string;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if retire_on_take is true for this basket.
     */
    retirementJurisdiction: string;
    /**
     * retire_on_take is a boolean that dictates whether the ecocredits
     * received in exchange for the basket tokens will be received as
     * retired or tradable credits.
     */
    retireOnTake: boolean;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeResponse {
    /** credits are the credits taken out of the basket. */
    credits: BasketCredit[];
}
export declare const MsgCreate: {
    encode(message: MsgCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate;
    fromJSON(object: any): MsgCreate;
    toJSON(message: MsgCreate): unknown;
    fromPartial(object: DeepPartial<MsgCreate>): MsgCreate;
};
export declare const MsgCreateResponse: {
    encode(message: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromJSON(object: any): MsgCreateResponse;
    toJSON(message: MsgCreateResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateResponse>): MsgCreateResponse;
};
export declare const MsgPut: {
    encode(message: MsgPut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPut;
    fromJSON(object: any): MsgPut;
    toJSON(message: MsgPut): unknown;
    fromPartial(object: DeepPartial<MsgPut>): MsgPut;
};
export declare const MsgPutResponse: {
    encode(message: MsgPutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutResponse;
    fromJSON(object: any): MsgPutResponse;
    toJSON(message: MsgPutResponse): unknown;
    fromPartial(object: DeepPartial<MsgPutResponse>): MsgPutResponse;
};
export declare const MsgTake: {
    encode(message: MsgTake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTake;
    fromJSON(object: any): MsgTake;
    toJSON(message: MsgTake): unknown;
    fromPartial(object: DeepPartial<MsgTake>): MsgTake;
};
export declare const MsgTakeResponse: {
    encode(message: MsgTakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTakeResponse;
    fromJSON(object: any): MsgTakeResponse;
    toJSON(message: MsgTakeResponse): unknown;
    fromPartial(object: DeepPartial<MsgTakeResponse>): MsgTakeResponse;
};
