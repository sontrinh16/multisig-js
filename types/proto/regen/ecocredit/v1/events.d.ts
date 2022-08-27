import { OriginTx } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
    /** project_id is the unique identifier of the project. */
    projectId: string;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
/** EventMint is an event emitted when credits are minted to a credit batch. */
export interface EventMint {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batchDenom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     */
    originTx: OriginTx;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransfer {
    /**
     * sender is the sender of the credits. In the case that the credits were
     * transferred from a base account, this will be the account address. In the
     * case that the credits were transferred from a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    sender: string;
    /**
     * recipient is the recipient of the credits. In the case that the credits
     * were transferred to a base account, this will be the account address. In
     * the case that the credits were transferred to a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    recipient: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retiredAmount: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
    /**
     * owner is the account that owns the retired credits. This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
     * retired upon taking from a basket using basket.Msg/Take, or retired
     * upon purchase using marketplace.Msg/BuyDirect.
     */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were retired.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been retired. */
    amount: string;
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
    /** owner is the account which has cancelled the credits. */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were cancelled.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdmin {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuers {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadata {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdmin {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadata {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatch {
    /** batch_denom is the denom of the batch that was sealed. */
    batchDenom: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditType {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
export declare const EventCreateClass: {
    encode(message: EventCreateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateClass;
    fromJSON(object: any): EventCreateClass;
    toJSON(message: EventCreateClass): unknown;
    fromPartial(object: DeepPartial<EventCreateClass>): EventCreateClass;
};
export declare const EventCreateProject: {
    encode(message: EventCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject;
    fromJSON(object: any): EventCreateProject;
    toJSON(message: EventCreateProject): unknown;
    fromPartial(object: DeepPartial<EventCreateProject>): EventCreateProject;
};
export declare const EventCreateBatch: {
    encode(message: EventCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBatch;
    fromJSON(object: any): EventCreateBatch;
    toJSON(message: EventCreateBatch): unknown;
    fromPartial(object: DeepPartial<EventCreateBatch>): EventCreateBatch;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: DeepPartial<EventMint>): EventMint;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    fromPartial(object: DeepPartial<EventTransfer>): EventTransfer;
};
export declare const EventRetire: {
    encode(message: EventRetire, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRetire;
    fromJSON(object: any): EventRetire;
    toJSON(message: EventRetire): unknown;
    fromPartial(object: DeepPartial<EventRetire>): EventRetire;
};
export declare const EventCancel: {
    encode(message: EventCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancel;
    fromJSON(object: any): EventCancel;
    toJSON(message: EventCancel): unknown;
    fromPartial(object: DeepPartial<EventCancel>): EventCancel;
};
export declare const EventUpdateClassAdmin: {
    encode(message: EventUpdateClassAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassAdmin;
    fromJSON(object: any): EventUpdateClassAdmin;
    toJSON(message: EventUpdateClassAdmin): unknown;
    fromPartial(object: DeepPartial<EventUpdateClassAdmin>): EventUpdateClassAdmin;
};
export declare const EventUpdateClassIssuers: {
    encode(message: EventUpdateClassIssuers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassIssuers;
    fromJSON(object: any): EventUpdateClassIssuers;
    toJSON(message: EventUpdateClassIssuers): unknown;
    fromPartial(object: DeepPartial<EventUpdateClassIssuers>): EventUpdateClassIssuers;
};
export declare const EventUpdateClassMetadata: {
    encode(message: EventUpdateClassMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassMetadata;
    fromJSON(object: any): EventUpdateClassMetadata;
    toJSON(message: EventUpdateClassMetadata): unknown;
    fromPartial(object: DeepPartial<EventUpdateClassMetadata>): EventUpdateClassMetadata;
};
export declare const EventUpdateProjectAdmin: {
    encode(message: EventUpdateProjectAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectAdmin;
    fromJSON(object: any): EventUpdateProjectAdmin;
    toJSON(message: EventUpdateProjectAdmin): unknown;
    fromPartial(object: DeepPartial<EventUpdateProjectAdmin>): EventUpdateProjectAdmin;
};
export declare const EventUpdateProjectMetadata: {
    encode(message: EventUpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectMetadata;
    fromJSON(object: any): EventUpdateProjectMetadata;
    toJSON(message: EventUpdateProjectMetadata): unknown;
    fromPartial(object: DeepPartial<EventUpdateProjectMetadata>): EventUpdateProjectMetadata;
};
export declare const EventSealBatch: {
    encode(message: EventSealBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSealBatch;
    fromJSON(object: any): EventSealBatch;
    toJSON(message: EventSealBatch): unknown;
    fromPartial(object: DeepPartial<EventSealBatch>): EventSealBatch;
};
export declare const EventAddCreditType: {
    encode(message: EventAddCreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddCreditType;
    fromJSON(object: any): EventAddCreditType;
    toJSON(message: EventAddCreditType): unknown;
    fromPartial(object: DeepPartial<EventAddCreditType>): EventAddCreditType;
};
