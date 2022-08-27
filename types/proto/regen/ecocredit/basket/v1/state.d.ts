import { DateCriteria } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Basket represents a basket in state. */
export interface Basket {
    /**
     * id is the uint64 ID of the basket. It is used internally for reducing
     * storage space.
     */
    id: Long;
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * name is the unique name of the basket specified in MsgCreate. Basket
     * names must be unique across all credit types and choices of exponent
     * above and beyond the uniqueness constraint on basket_denom.
     */
    name: string;
    /**
     * disable_auto_retire indicates whether or not the credits will be retired
     * upon withdraw from the basket.
     */
    disableAutoRetire: boolean;
    /**
     * credit_type_abbrev is the abbreviation of the credit type this basket is
     * able to hold.
     */
    creditTypeAbbrev: string;
    /** date_criteria is the date criteria for batches admitted to the basket. */
    dateCriteria: DateCriteria;
    /** exponent is the exponent for converting credits to/from basket tokens. */
    exponent: number;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Since Revision 1
     */
    curator: Uint8Array;
}
/** BasketClass describes a credit class that can be deposited in a basket. */
export interface BasketClass {
    /** basket_id is the ID of the basket */
    basketId: Long;
    /**
     * class_id is the id of the credit class that is allowed to be deposited in
     * the basket
     */
    classId: string;
}
/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalance {
    /** basket_id is the ID of the basket */
    basketId: Long;
    /** batch_denom is the denom of the credit batch */
    batchDenom: string;
    /** balance is the amount of ecocredits held in the basket */
    balance: string;
    /**
     * batch_start_date is the start date of the batch. This field is used
     * to create an index which is used to remove the oldest credits first.
     */
    batchStartDate: Date;
}
export declare const Basket: {
    encode(message: Basket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Basket;
    fromJSON(object: any): Basket;
    toJSON(message: Basket): unknown;
    fromPartial(object: DeepPartial<Basket>): Basket;
};
export declare const BasketClass: {
    encode(message: BasketClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketClass;
    fromJSON(object: any): BasketClass;
    toJSON(message: BasketClass): unknown;
    fromPartial(object: DeepPartial<BasketClass>): BasketClass;
};
export declare const BasketBalance: {
    encode(message: BasketBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalance;
    fromJSON(object: any): BasketBalance;
    toJSON(message: BasketBalance): unknown;
    fromPartial(object: DeepPartial<BasketBalance>): BasketBalance;
};
