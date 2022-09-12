import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit: string;
    /** precision is the decimal precision of the credit type. */
    precision: number;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface Class {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id: string;
    /** admin is the admin of the credit class. */
    admin: Uint8Array;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    creditTypeAbbrev: string;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuer {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    classKey: Long;
    /** issuer is the approved issuer of the credit class. */
    issuer: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface Project {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id: string;
    /** admin is the admin of the project. */
    admin: Uint8Array;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    classKey: Long;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string used to reference the project. */
    referenceId: string;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface Batch {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer: Uint8Array;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    projectKey: Long;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: Timestamp;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: Timestamp;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate: Timestamp;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open: boolean;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequence {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    creditTypeAbbrev: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    nextSequence: Long;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequence {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    classKey: Long;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    nextSequence: Long;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequence {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    projectKey: Long;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    nextSequence: Long;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalance {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batchKey: Long;
    /** address is the address of the credit holder. */
    address: Uint8Array;
    /** tradable is the tradable amount of credits. */
    tradable: string;
    /** retired is the retired amount of credits. */
    retired: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupply {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batchKey: Long;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Some of the issued credits may be cancelled and will be removed from
     * tradable_amount and tracked in amount_cancelled. tradable_amount +
     * retired_amount + amount_cancelled will always sum to the original credit
     * issuance amount.
     */
    tradableAmount: string;
    /**
     * retired_amount is the total amount of credits that have been retired from
     * the credit batch.
     */
    retiredAmount: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of total_amount and
     * amount_cancelled will always equal the original credit issuance amount.
     */
    cancelledAmount: string;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTx {
    /** the id of an originating transaction or opeartion. */
    txId: string;
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ: string;
    /** reference note for accounting, will be passed to an event */
    note: string;
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
}
export declare const CreditType: {
    encode(message: CreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditType;
    fromJSON(object: any): CreditType;
    toJSON(message: CreditType): unknown;
    fromPartial(object: DeepPartial<CreditType>): CreditType;
};
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial(object: DeepPartial<Class>): Class;
};
export declare const ClassIssuer: {
    encode(message: ClassIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassIssuer;
    fromJSON(object: any): ClassIssuer;
    toJSON(message: ClassIssuer): unknown;
    fromPartial(object: DeepPartial<ClassIssuer>): ClassIssuer;
};
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const Batch: {
    encode(message: Batch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Batch;
    fromJSON(object: any): Batch;
    toJSON(message: Batch): unknown;
    fromPartial(object: DeepPartial<Batch>): Batch;
};
export declare const ClassSequence: {
    encode(message: ClassSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassSequence;
    fromJSON(object: any): ClassSequence;
    toJSON(message: ClassSequence): unknown;
    fromPartial(object: DeepPartial<ClassSequence>): ClassSequence;
};
export declare const ProjectSequence: {
    encode(message: ProjectSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSequence;
    fromJSON(object: any): ProjectSequence;
    toJSON(message: ProjectSequence): unknown;
    fromPartial(object: DeepPartial<ProjectSequence>): ProjectSequence;
};
export declare const BatchSequence: {
    encode(message: BatchSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSequence;
    fromJSON(object: any): BatchSequence;
    toJSON(message: BatchSequence): unknown;
    fromPartial(object: DeepPartial<BatchSequence>): BatchSequence;
};
export declare const BatchBalance: {
    encode(message: BatchBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalance;
    fromJSON(object: any): BatchBalance;
    toJSON(message: BatchBalance): unknown;
    fromPartial(object: DeepPartial<BatchBalance>): BatchBalance;
};
export declare const BatchSupply: {
    encode(message: BatchSupply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSupply;
    fromJSON(object: any): BatchSupply;
    toJSON(message: BatchSupply): unknown;
    fromPartial(object: DeepPartial<BatchSupply>): BatchSupply;
};
export declare const BatchOrigTx: {
    encode(message: BatchOrigTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchOrigTx;
    fromJSON(object: any): BatchOrigTx;
    toJSON(message: BatchOrigTx): unknown;
    fromPartial(object: DeepPartial<BatchOrigTx>): BatchOrigTx;
};
