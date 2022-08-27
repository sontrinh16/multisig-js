import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CreditType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    creditClassFee: Coin[];
    /** basket_fee is the fixed fee charged on creation of a new basket */
    basketFee: Coin[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with
     * the required permissions to create credit classes
     */
    allowedClassCreators: string[];
    /**
     * allowlist_enabled is a param that enables/disables the allowlist for credit
     * creation
     */
    allowlistEnabled: boolean;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTx {
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ: string;
    /** the id of a transaction based on a type (tx id, serial number) */
    id: string;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposal {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * credit_type is the credit type to be added to the network if the proposal
     * passes.
     */
    creditType: CreditType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const OriginTx: {
    encode(message: OriginTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OriginTx;
    fromJSON(object: any): OriginTx;
    toJSON(message: OriginTx): unknown;
    fromPartial(object: DeepPartial<OriginTx>): OriginTx;
};
export declare const CreditTypeProposal: {
    encode(message: CreditTypeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeProposal;
    fromJSON(object: any): CreditTypeProposal;
    toJSON(message: CreditTypeProposal): unknown;
    fromPartial(object: DeepPartial<CreditTypeProposal>): CreditTypeProposal;
};
