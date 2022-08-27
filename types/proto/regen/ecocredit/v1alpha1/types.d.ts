import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfo {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** issuers are the approved issuers of the credit class. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: Uint8Array;
    /**
     * credit_type describes the type of credit (e.g. carbon, biodiversity), as
     * well as unit and precision.
     */
    creditType: CreditType;
    /** The number of batches issued in this credit class. */
    numBatches: Long;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfo {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** issuer is the issuer of the credit batch. */
    issuer: string;
    /**
     * total_amount is the total number of active credits in the credit batch.
     * Some of the issued credits may be cancelled and will be removed from
     * total_amount and tracked in amount_cancelled. total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    totalAmount: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
    /**
     * amount_cancelled is the number of credits in the batch that have been
     * cancelled, effectively undoing there issuance. The sum of total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    amountCancelled: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: Date;
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
    projectLocation: string;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    creditClassFee: Coin[];
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
    /** credit_types is a list of definitions for credit types */
    creditTypes: CreditType[];
    /** basket_creation_fee is the fee to create a new basket denom. */
    basketCreationFee: Coin[];
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
    /** the type of credit (e.g. carbon, biodiversity, etc) */
    name: string;
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** the measurement unit (e.g. kg, ton, etc) */
    unit: string;
    /** the decimal precision */
    precision: number;
}
/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeq {
    /** The credit type abbreviation */
    abbreviation: string;
    /** The sequence number of classes of the credit type */
    seqNumber: Long;
}
export declare const ClassInfo: {
    encode(message: ClassInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo;
    fromJSON(object: any): ClassInfo;
    toJSON(message: ClassInfo): unknown;
    fromPartial(object: DeepPartial<ClassInfo>): ClassInfo;
};
export declare const BatchInfo: {
    encode(message: BatchInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo;
    fromJSON(object: any): BatchInfo;
    toJSON(message: BatchInfo): unknown;
    fromPartial(object: DeepPartial<BatchInfo>): BatchInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const CreditType: {
    encode(message: CreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditType;
    fromJSON(object: any): CreditType;
    toJSON(message: CreditType): unknown;
    fromPartial(object: DeepPartial<CreditType>): CreditType;
};
export declare const CreditTypeSeq: {
    encode(message: CreditTypeSeq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeSeq;
    fromJSON(object: any): CreditTypeSeq;
    toJSON(message: CreditTypeSeq): unknown;
    fromPartial(object: DeepPartial<CreditTypeSeq>): CreditTypeSeq;
};
