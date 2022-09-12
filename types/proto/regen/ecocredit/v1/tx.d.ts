import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { OriginTx } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
    /** admin is the address of the account that created the credit class. */
    admin: string;
    /** issuers are the account addresses of the approved issuers. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of a credit type (e.g. "C", "BIO"). */
    creditTypeAbbrev: string;
    /**
     * fee specifies the fee to pay for the creation of the credit class.
     * acceptable fees for creating a credit class can be found in the governance
     * parameters for the ecocredit module.
     */
    fee: Coin;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
    /**
     * issuer is the address of an approved issuer for the credit class through
     * which batches will be issued. It is not required, however, that this same
     * issuer issue all batches for a project.
     */
    issuer: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project will be created.
     */
    classId: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /**
     * jurisdiction is the jurisdiction of the project backing the credits
     * in this batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code are optional and can be added for increased precision.
     */
    jurisdiction: string;
    /** reference_id is any arbitrary string used to reference the project. */
    referenceId: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
    /** project_id is the unique identifier of the newly created project. */
    projectId: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
    /** issuer is the address of the batch issuer. */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which the credit
     * batch will be created.
     */
    projectId: string;
    /** issuance are the credits issued in the batch. */
    issuance: BatchIssuance[];
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
    /**
     * If open is true we will enable future minting.
     * Otherwise we will seal the batch and disable the future minting.
     */
    open: boolean;
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     * If not set (null), it means that the batch originate in Regen Ledger
     * (doesn't come from external registry).
     */
    originTx: OriginTx;
    /** reference note for accounting, will be passed to an event */
    note: string;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface BatchIssuance {
    /** recipient is the account of the recipient. */
    recipient: string;
    /**
     * tradable_amount is the number of credits in this issuance that can be
     * traded by this recipient. Decimal values are acceptable.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this issuance that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer of
     * the retired credits. This must be provided if retired_amount is positive.
     * It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirementJurisdiction: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique identifier of the newly created batch. */
    batchDenom: string;
}
/** MsgMintBatchCredits is a request type for MintBatchCredits Msg RPC. */
export interface MsgMintBatchCredits {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** issuance are the credits issued in the batch. */
    issuance: BatchIssuance[];
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     */
    originTx: OriginTx;
    /** reference note for accounting, will be passed to an event */
    note: string;
}
/** MsgSealBatch request type for MsgSealBatch RPC. */
export interface MsgSealBatch {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** sender is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent. */
    credits: MsgSend_SendCredits[];
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * tradable_amount is the number of credits in this transfer that can be
     * traded by the recipient. Decimal values are acceptable within the
     * precision returned by Query/Precision.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this transfer that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable within the precision returned by Query/Precision.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer
     * of the retired credits. This must be provided if retired_amount is
     * positive. It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirementJurisdiction: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being retired. */
    credits: MsgRetire_RetireCredits[];
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being cancelled. */
    credits: MsgCancel_CancelCredits[];
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /** new_admin is the address of the new admin of the credit class. */
    newAdmin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /** add_issuers are the issuers to add to the class issuers list. */
    addIssuers: string[];
    /** remove_issuers are the issuers to remove from the class issuers list. */
    removeIssuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /**
     * metadata is the updated arbitrary metadata to be attached to the credit
     * class.
     */
    metadata: string;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdmin {
    /** admin is the project's current admin address. */
    admin: string;
    /** new_admin is the address of the new admin of the project. */
    newAdmin: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    projectId: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadata {
    /** admin is project admin address. */
    admin: string;
    /** new_metadata is the metadata to update the project with. */
    newMetadata: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    projectId: string;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {
}
export declare const MsgCreateClass: {
    encode(message: MsgCreateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClass;
    fromJSON(object: any): MsgCreateClass;
    toJSON(message: MsgCreateClass): unknown;
    fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass;
};
export declare const MsgCreateClassResponse: {
    encode(message: MsgCreateClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromJSON(object: any): MsgCreateClassResponse;
    toJSON(message: MsgCreateClassResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse;
};
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject;
    fromJSON(object: any): MsgCreateProject;
    toJSON(message: MsgCreateProject): unknown;
    fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(message: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(object: any): MsgCreateProjectResponse;
    toJSON(message: MsgCreateProjectResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgCreateBatch: {
    encode(message: MsgCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch;
    fromJSON(object: any): MsgCreateBatch;
    toJSON(message: MsgCreateBatch): unknown;
    fromPartial(object: DeepPartial<MsgCreateBatch>): MsgCreateBatch;
};
export declare const BatchIssuance: {
    encode(message: BatchIssuance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchIssuance;
    fromJSON(object: any): BatchIssuance;
    toJSON(message: BatchIssuance): unknown;
    fromPartial(object: DeepPartial<BatchIssuance>): BatchIssuance;
};
export declare const MsgCreateBatchResponse: {
    encode(message: MsgCreateBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromJSON(object: any): MsgCreateBatchResponse;
    toJSON(message: MsgCreateBatchResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
};
export declare const MsgMintBatchCredits: {
    encode(message: MsgMintBatchCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCredits;
    fromJSON(object: any): MsgMintBatchCredits;
    toJSON(message: MsgMintBatchCredits): unknown;
    fromPartial(object: DeepPartial<MsgMintBatchCredits>): MsgMintBatchCredits;
};
export declare const MsgSealBatch: {
    encode(message: MsgSealBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatch;
    fromJSON(object: any): MsgSealBatch;
    toJSON(message: MsgSealBatch): unknown;
    fromPartial(object: DeepPartial<MsgSealBatch>): MsgSealBatch;
};
export declare const MsgMintBatchCreditsResponse: {
    encode(_: MsgMintBatchCreditsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCreditsResponse;
    fromJSON(_: any): MsgMintBatchCreditsResponse;
    toJSON(_: MsgMintBatchCreditsResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse;
};
export declare const MsgSealBatchResponse: {
    encode(_: MsgSealBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatchResponse;
    fromJSON(_: any): MsgSealBatchResponse;
    toJSON(_: MsgSealBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgSealBatchResponse>): MsgSealBatchResponse;
};
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: DeepPartial<MsgSend>): MsgSend;
};
export declare const MsgSend_SendCredits: {
    encode(message: MsgSend_SendCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend_SendCredits;
    fromJSON(object: any): MsgSend_SendCredits;
    toJSON(message: MsgSend_SendCredits): unknown;
    fromPartial(object: DeepPartial<MsgSend_SendCredits>): MsgSend_SendCredits;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse;
};
export declare const MsgRetire: {
    encode(message: MsgRetire, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire;
    fromJSON(object: any): MsgRetire;
    toJSON(message: MsgRetire): unknown;
    fromPartial(object: DeepPartial<MsgRetire>): MsgRetire;
};
export declare const MsgRetire_RetireCredits: {
    encode(message: MsgRetire_RetireCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire_RetireCredits;
    fromJSON(object: any): MsgRetire_RetireCredits;
    toJSON(message: MsgRetire_RetireCredits): unknown;
    fromPartial(object: DeepPartial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits;
};
export declare const MsgRetireResponse: {
    encode(_: MsgRetireResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse;
    fromJSON(_: any): MsgRetireResponse;
    toJSON(_: MsgRetireResponse): unknown;
    fromPartial(_: DeepPartial<MsgRetireResponse>): MsgRetireResponse;
};
export declare const MsgCancel: {
    encode(message: MsgCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel;
    fromJSON(object: any): MsgCancel;
    toJSON(message: MsgCancel): unknown;
    fromPartial(object: DeepPartial<MsgCancel>): MsgCancel;
};
export declare const MsgCancel_CancelCredits: {
    encode(message: MsgCancel_CancelCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel_CancelCredits;
    fromJSON(object: any): MsgCancel_CancelCredits;
    toJSON(message: MsgCancel_CancelCredits): unknown;
    fromPartial(object: DeepPartial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits;
};
export declare const MsgCancelResponse: {
    encode(_: MsgCancelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse;
    fromJSON(_: any): MsgCancelResponse;
    toJSON(_: MsgCancelResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse;
};
export declare const MsgUpdateClassAdmin: {
    encode(message: MsgUpdateClassAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdmin;
    fromJSON(object: any): MsgUpdateClassAdmin;
    toJSON(message: MsgUpdateClassAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin;
};
export declare const MsgUpdateClassAdminResponse: {
    encode(_: MsgUpdateClassAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdminResponse;
    fromJSON(_: any): MsgUpdateClassAdminResponse;
    toJSON(_: MsgUpdateClassAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse;
};
export declare const MsgUpdateClassIssuers: {
    encode(message: MsgUpdateClassIssuers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuers;
    fromJSON(object: any): MsgUpdateClassIssuers;
    toJSON(message: MsgUpdateClassIssuers): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers;
};
export declare const MsgUpdateClassIssuersResponse: {
    encode(_: MsgUpdateClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse;
    fromJSON(_: any): MsgUpdateClassIssuersResponse;
    toJSON(_: MsgUpdateClassIssuersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse;
};
export declare const MsgUpdateClassMetadata: {
    encode(message: MsgUpdateClassMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadata;
    fromJSON(object: any): MsgUpdateClassMetadata;
    toJSON(message: MsgUpdateClassMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata;
};
export declare const MsgUpdateClassMetadataResponse: {
    encode(_: MsgUpdateClassMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse;
    fromJSON(_: any): MsgUpdateClassMetadataResponse;
    toJSON(_: MsgUpdateClassMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse;
};
export declare const MsgUpdateProjectAdmin: {
    encode(message: MsgUpdateProjectAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdmin;
    fromJSON(object: any): MsgUpdateProjectAdmin;
    toJSON(message: MsgUpdateProjectAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin;
};
export declare const MsgUpdateProjectAdminResponse: {
    encode(_: MsgUpdateProjectAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse;
    fromJSON(_: any): MsgUpdateProjectAdminResponse;
    toJSON(_: MsgUpdateProjectAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse;
};
export declare const MsgUpdateProjectMetadata: {
    encode(message: MsgUpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadata;
    fromJSON(object: any): MsgUpdateProjectMetadata;
    toJSON(message: MsgUpdateProjectMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata;
};
export declare const MsgUpdateProjectMetadataResponse: {
    encode(_: MsgUpdateProjectMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse;
    fromJSON(_: any): MsgUpdateProjectMetadataResponse;
    toJSON(_: MsgUpdateProjectMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse;
};
