import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { OriginTx } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

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
  startDate: Date;

  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate: Date;

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
export interface MsgMintBatchCreditsResponse {}

/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {}

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
export interface MsgSendResponse {}

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
export interface MsgRetireResponse {}

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
export interface MsgCancelResponse {}

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
export interface MsgUpdateClassAdminResponse {}

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
export interface MsgUpdateClassIssuersResponse {}

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
export interface MsgUpdateClassMetadataResponse {}

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
export interface MsgUpdateProjectAdminResponse {}

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
export interface MsgUpdateProjectMetadataResponse {}

function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    admin: "",
    issuers: [],
    metadata: "",
    creditTypeAbbrev: "",
    fee: undefined
  };
}

export const MsgCreateClass = {
  encode(message: MsgCreateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.issuers.push(reader.string());
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.creditTypeAbbrev = reader.string();
          break;

        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateClass {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: MsgCreateClass): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    classId: ""
  };
}

export const MsgCreateClassResponse = {
  encode(message: MsgCreateClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateClassResponse {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    issuer: "",
    classId: "",
    metadata: "",
    jurisdiction: "",
    referenceId: ""
  };
}

export const MsgCreateProject = {
  encode(message: MsgCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }

    if (message.referenceId !== "") {
      writer.uint32(42).string(message.referenceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.jurisdiction = reader.string();
          break;

        case 5:
          message.referenceId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateProject {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },

  toJSON(message: MsgCreateProject): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.issuer = object.issuer ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  }

};

function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {
    projectId: ""
  };
}

export const MsgCreateProjectResponse = {
  encode(message: MsgCreateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateProjectResponse {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: MsgCreateProjectResponse): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    issuer: "",
    projectId: "",
    issuance: [],
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    open: false,
    originTx: undefined,
    note: ""
  };
}

export const MsgCreateBatch = {
  encode(message: MsgCreateBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }

    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.open === true) {
      writer.uint32(56).bool(message.open);
    }

    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
    }

    if (message.note !== "") {
      writer.uint32(74).string(message.note);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.projectId = reader.string();
          break;

        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.open = reader.bool();
          break;

        case 8:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;

        case 9:
          message.note = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBatch {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false,
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined,
      note: isSet(object.note) ? String(object.note) : ""
    };
  },

  toJSON(message: MsgCreateBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.projectId !== undefined && (obj.projectId = message.projectId);

    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    message.note !== undefined && (obj.note = message.note);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBatch>): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.open = object.open ?? false;
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    message.note = object.note ?? "";
    return message;
  }

};

function createBaseBatchIssuance(): BatchIssuance {
  return {
    recipient: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: ""
  };
}

export const BatchIssuance = {
  encode(message: BatchIssuance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }

    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchIssuance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;

        case 2:
          message.tradableAmount = reader.string();
          break;

        case 3:
          message.retiredAmount = reader.string();
          break;

        case 4:
          message.retirementJurisdiction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchIssuance {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : ""
    };
  },

  toJSON(message: BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.retirementJurisdiction !== undefined && (obj.retirementJurisdiction = message.retirementJurisdiction);
    return obj;
  },

  fromPartial(object: DeepPartial<BatchIssuance>): BatchIssuance {
    const message = createBaseBatchIssuance();
    message.recipient = object.recipient ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    return message;
  }

};

function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return {
    batchDenom: ""
  };
}

export const MsgCreateBatchResponse = {
  encode(message: MsgCreateBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBatchResponse {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: MsgCreateBatchResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseMsgMintBatchCredits(): MsgMintBatchCredits {
  return {
    issuer: "",
    batchDenom: "",
    issuance: [],
    originTx: undefined,
    note: ""
  };
}

export const MsgMintBatchCredits = {
  encode(message: MsgMintBatchCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
    }

    if (message.note !== "") {
      writer.uint32(42).string(message.note);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;

        case 4:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;

        case 5:
          message.note = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMintBatchCredits {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined,
      note: isSet(object.note) ? String(object.note) : ""
    };
  },

  toJSON(message: MsgMintBatchCredits): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);

    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }

    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    message.note !== undefined && (obj.note = message.note);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintBatchCredits>): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    message.note = object.note ?? "";
    return message;
  }

};

function createBaseMsgSealBatch(): MsgSealBatch {
  return {
    issuer: "",
    batchDenom: ""
  };
}

export const MsgSealBatch = {
  encode(message: MsgSealBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSealBatch {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: MsgSealBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSealBatch>): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseMsgMintBatchCreditsResponse(): MsgMintBatchCreditsResponse {
  return {};
}

export const MsgMintBatchCreditsResponse = {
  encode(_: MsgMintBatchCreditsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCreditsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCreditsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgMintBatchCreditsResponse {
    return {};
  },

  toJSON(_: MsgMintBatchCreditsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  }

};

function createBaseMsgSealBatchResponse(): MsgSealBatchResponse {
  return {};
}

export const MsgSealBatchResponse = {
  encode(_: MsgSealBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSealBatchResponse {
    return {};
  },

  toJSON(_: MsgSealBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSealBatchResponse>): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  }

};

function createBaseMsgSend(): MsgSend {
  return {
    sender: "",
    recipient: "",
    credits: []
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    for (const v of message.credits) {
      MsgSend_SendCredits.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.credits.push(MsgSend_SendCredits.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgSend_SendCredits.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: ""
  };
}

export const MsgSend_SendCredits = {
  encode(message: MsgSend_SendCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }

    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend_SendCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend_SendCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.tradableAmount = reader.string();
          break;

        case 3:
          message.retiredAmount = reader.string();
          break;

        case 4:
          message.retirementJurisdiction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend_SendCredits {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : ""
    };
  },

  toJSON(message: MsgSend_SendCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.retirementJurisdiction !== undefined && (obj.retirementJurisdiction = message.retirementJurisdiction);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend_SendCredits>): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    return message;
  }

};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  }

};

function createBaseMsgRetire(): MsgRetire {
  return {
    holder: "",
    credits: [],
    jurisdiction: ""
  };
}

export const MsgRetire = {
  encode(message: MsgRetire, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }

    for (const v of message.credits) {
      MsgRetire_RetireCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;

        case 2:
          message.credits.push(MsgRetire_RetireCredits.decode(reader, reader.uint32()));
          break;

        case 3:
          message.jurisdiction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRetire {
    return {
      holder: isSet(object.holder) ? String(object.holder) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgRetire_RetireCredits.fromJSON(e)) : [],
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : ""
    };
  },

  toJSON(message: MsgRetire): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgRetire_RetireCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRetire>): MsgRetire {
    const message = createBaseMsgRetire();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromPartial(e)) || [];
    message.jurisdiction = object.jurisdiction ?? "";
    return message;
  }

};

function createBaseMsgRetire_RetireCredits(): MsgRetire_RetireCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}

export const MsgRetire_RetireCredits = {
  encode(message: MsgRetire_RetireCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire_RetireCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire_RetireCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRetire_RetireCredits {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgRetire_RetireCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits {
    const message = createBaseMsgRetire_RetireCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgRetireResponse(): MsgRetireResponse {
  return {};
}

export const MsgRetireResponse = {
  encode(_: MsgRetireResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRetireResponse {
    return {};
  },

  toJSON(_: MsgRetireResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRetireResponse>): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  }

};

function createBaseMsgCancel(): MsgCancel {
  return {
    holder: "",
    credits: []
  };
}

export const MsgCancel = {
  encode(message: MsgCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }

    for (const v of message.credits) {
      MsgCancel_CancelCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;

        case 2:
          message.credits.push(MsgCancel_CancelCredits.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancel {
    return {
      holder: isSet(object.holder) ? String(object.holder) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgCancel_CancelCredits.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgCancel_CancelCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCancel_CancelCredits(): MsgCancel_CancelCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}

export const MsgCancel_CancelCredits = {
  encode(message: MsgCancel_CancelCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel_CancelCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel_CancelCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancel_CancelCredits {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgCancel_CancelCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits {
    const message = createBaseMsgCancel_CancelCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelResponse {
    return {};
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  }

};

function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return {
    admin: "",
    classId: "",
    newAdmin: ""
  };
}

export const MsgUpdateClassAdmin = {
  encode(message: MsgUpdateClassAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateClassAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateClassAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  }

};

function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return {};
}

export const MsgUpdateClassAdminResponse = {
  encode(_: MsgUpdateClassAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateClassAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateClassAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  }

};

function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    admin: "",
    classId: "",
    addIssuers: [],
    removeIssuers: []
  };
}

export const MsgUpdateClassIssuers = {
  encode(message: MsgUpdateClassIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    for (const v of message.addIssuers) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.removeIssuers) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuers();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.addIssuers.push(reader.string());
          break;

        case 4:
          message.removeIssuers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateClassIssuers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      addIssuers: Array.isArray(object?.addIssuers) ? object.addIssuers.map((e: any) => String(e)) : [],
      removeIssuers: Array.isArray(object?.removeIssuers) ? object.removeIssuers.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgUpdateClassIssuers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);

    if (message.addIssuers) {
      obj.addIssuers = message.addIssuers.map(e => e);
    } else {
      obj.addIssuers = [];
    }

    if (message.removeIssuers) {
      obj.removeIssuers = message.removeIssuers.map(e => e);
    } else {
      obj.removeIssuers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.addIssuers = object.addIssuers?.map(e => e) || [];
    message.removeIssuers = object.removeIssuers?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return {};
}

export const MsgUpdateClassIssuersResponse = {
  encode(_: MsgUpdateClassIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateClassIssuersResponse {
    return {};
  },

  toJSON(_: MsgUpdateClassIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  }

};

function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return {
    admin: "",
    classId: "",
    metadata: ""
  };
}

export const MsgUpdateClassMetadata = {
  encode(message: MsgUpdateClassMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateClassMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgUpdateClassMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  }

};

function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return {};
}

export const MsgUpdateClassMetadataResponse = {
  encode(_: MsgUpdateClassMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateClassMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateClassMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  }

};

function createBaseMsgUpdateProjectAdmin(): MsgUpdateProjectAdmin {
  return {
    admin: "",
    newAdmin: "",
    projectId: ""
  };
}

export const MsgUpdateProjectAdmin = {
  encode(message: MsgUpdateProjectAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }

    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.newAdmin = reader.string();
          break;

        case 3:
          message.projectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateProjectAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: MsgUpdateProjectAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseMsgUpdateProjectAdminResponse(): MsgUpdateProjectAdminResponse {
  return {};
}

export const MsgUpdateProjectAdminResponse = {
  encode(_: MsgUpdateProjectAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateProjectAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateProjectAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  }

};

function createBaseMsgUpdateProjectMetadata(): MsgUpdateProjectMetadata {
  return {
    admin: "",
    newMetadata: "",
    projectId: ""
  };
}

export const MsgUpdateProjectMetadata = {
  encode(message: MsgUpdateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.newMetadata !== "") {
      writer.uint32(18).string(message.newMetadata);
    }

    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.newMetadata = reader.string();
          break;

        case 3:
          message.projectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateProjectMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: MsgUpdateProjectMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.newMetadata !== undefined && (obj.newMetadata = message.newMetadata);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    message.admin = object.admin ?? "";
    message.newMetadata = object.newMetadata ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseMsgUpdateProjectMetadataResponse(): MsgUpdateProjectMetadataResponse {
  return {};
}

export const MsgUpdateProjectMetadataResponse = {
  encode(_: MsgUpdateProjectMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateProjectMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateProjectMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  }

};