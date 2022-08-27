import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

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
  startDate: Date;

  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate: Date;

  /** issuance_date is the timestamp when the credit batch was issued. */
  issuanceDate: Date;

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

function createBaseCreditType(): CreditType {
  return {
    abbreviation: "",
    name: "",
    unit: "",
    precision: 0
  };
}

export const CreditType = {
  encode(message: CreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.unit !== "") {
      writer.uint32(26).string(message.unit);
    }

    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.unit = reader.string();
          break;

        case 4:
          message.precision = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreditType {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0
    };
  },

  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.name !== undefined && (obj.name = message.name);
    message.unit !== undefined && (obj.unit = message.unit);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    return obj;
  },

  fromPartial(object: DeepPartial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    message.unit = object.unit ?? "";
    message.precision = object.precision ?? 0;
    return message;
  }

};

function createBaseClass(): Class {
  return {
    key: Long.UZERO,
    id: "",
    admin: new Uint8Array(),
    metadata: "",
    creditTypeAbbrev: ""
  };
}

export const Class = {
  encode(message: Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.admin = reader.bytes();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.creditTypeAbbrev = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Class {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.UZERO,
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : ""
    };
  },

  toJSON(message: Class): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },

  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    return message;
  }

};

function createBaseClassIssuer(): ClassIssuer {
  return {
    classKey: Long.UZERO,
    issuer: new Uint8Array()
  };
}

export const ClassIssuer = {
  encode(message: ClassIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.classKey.isZero()) {
      writer.uint32(8).uint64(message.classKey);
    }

    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classKey = (reader.uint64() as Long);
          break;

        case 2:
          message.issuer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassIssuer {
    return {
      classKey: isSet(object.classKey) ? Long.fromString(object.classKey) : Long.UZERO,
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array()
    };
  },

  toJSON(message: ClassIssuer): unknown {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ClassIssuer>): ClassIssuer {
    const message = createBaseClassIssuer();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.issuer = object.issuer ?? new Uint8Array();
    return message;
  }

};

function createBaseProject(): Project {
  return {
    key: Long.UZERO,
    id: "",
    admin: new Uint8Array(),
    classKey: Long.UZERO,
    jurisdiction: "",
    metadata: "",
    referenceId: ""
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }

    if (!message.classKey.isZero()) {
      writer.uint32(32).uint64(message.classKey);
    }

    if (message.jurisdiction !== "") {
      writer.uint32(42).string(message.jurisdiction);
    }

    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }

    if (message.referenceId !== "") {
      writer.uint32(58).string(message.referenceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.admin = reader.bytes();
          break;

        case 4:
          message.classKey = (reader.uint64() as Long);
          break;

        case 5:
          message.jurisdiction = reader.string();
          break;

        case 6:
          message.metadata = reader.string();
          break;

        case 7:
          message.referenceId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Project {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.UZERO,
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      classKey: isSet(object.classKey) ? Long.fromString(object.classKey) : Long.UZERO,
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  }

};

function createBaseBatch(): Batch {
  return {
    key: Long.UZERO,
    issuer: new Uint8Array(),
    projectKey: Long.UZERO,
    denom: "",
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false
  };
}

export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }

    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }

    if (!message.projectKey.isZero()) {
      writer.uint32(24).uint64(message.projectKey);
    }

    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }

    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(58).fork()).ldelim();
    }

    if (message.issuanceDate !== undefined) {
      Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(66).fork()).ldelim();
    }

    if (message.open === true) {
      writer.uint32(72).bool(message.open);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;

        case 2:
          message.issuer = reader.bytes();
          break;

        case 3:
          message.projectKey = (reader.uint64() as Long);
          break;

        case 4:
          message.denom = reader.string();
          break;

        case 5:
          message.metadata = reader.string();
          break;

        case 6:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.open = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Batch {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.UZERO,
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array(),
      projectKey: isSet(object.projectKey) ? Long.fromString(object.projectKey) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      issuanceDate: isSet(object.issuanceDate) ? fromJsonTimestamp(object.issuanceDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false
    };
  },

  toJSON(message: Batch): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.issuanceDate !== undefined && (obj.issuanceDate = message.issuanceDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },

  fromPartial(object: DeepPartial<Batch>): Batch {
    const message = createBaseBatch();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.issuer = object.issuer ?? new Uint8Array();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? Long.fromValue(object.projectKey) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.issuanceDate = object.issuanceDate ?? undefined;
    message.open = object.open ?? false;
    return message;
  }

};

function createBaseClassSequence(): ClassSequence {
  return {
    creditTypeAbbrev: "",
    nextSequence: Long.UZERO
  };
}

export const ClassSequence = {
  encode(message: ClassSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(10).string(message.creditTypeAbbrev);
    }

    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creditTypeAbbrev = reader.string();
          break;

        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassSequence {
    return {
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      nextSequence: isSet(object.nextSequence) ? Long.fromString(object.nextSequence) : Long.UZERO
    };
  },

  toJSON(message: ClassSequence): unknown {
    const obj: any = {};
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ClassSequence>): ClassSequence {
    const message = createBaseClassSequence();
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }

};

function createBaseProjectSequence(): ProjectSequence {
  return {
    classKey: Long.UZERO,
    nextSequence: Long.UZERO
  };
}

export const ProjectSequence = {
  encode(message: ProjectSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.classKey.isZero()) {
      writer.uint32(8).uint64(message.classKey);
    }

    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classKey = (reader.uint64() as Long);
          break;

        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProjectSequence {
    return {
      classKey: isSet(object.classKey) ? Long.fromString(object.classKey) : Long.UZERO,
      nextSequence: isSet(object.nextSequence) ? Long.fromString(object.nextSequence) : Long.UZERO
    };
  },

  toJSON(message: ProjectSequence): unknown {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSequence>): ProjectSequence {
    const message = createBaseProjectSequence();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }

};

function createBaseBatchSequence(): BatchSequence {
  return {
    projectKey: Long.UZERO,
    nextSequence: Long.UZERO
  };
}

export const BatchSequence = {
  encode(message: BatchSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectKey.isZero()) {
      writer.uint32(8).uint64(message.projectKey);
    }

    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectKey = (reader.uint64() as Long);
          break;

        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchSequence {
    return {
      projectKey: isSet(object.projectKey) ? Long.fromString(object.projectKey) : Long.UZERO,
      nextSequence: isSet(object.nextSequence) ? Long.fromString(object.nextSequence) : Long.UZERO
    };
  },

  toJSON(message: BatchSequence): unknown {
    const obj: any = {};
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || Long.UZERO).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BatchSequence>): BatchSequence {
    const message = createBaseBatchSequence();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? Long.fromValue(object.projectKey) : Long.UZERO;
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }

};

function createBaseBatchBalance(): BatchBalance {
  return {
    batchKey: Long.UZERO,
    address: new Uint8Array(),
    tradable: "",
    retired: "",
    escrowed: ""
  };
}

export const BatchBalance = {
  encode(message: BatchBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchKey.isZero()) {
      writer.uint32(8).uint64(message.batchKey);
    }

    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }

    if (message.tradable !== "") {
      writer.uint32(26).string(message.tradable);
    }

    if (message.retired !== "") {
      writer.uint32(34).string(message.retired);
    }

    if (message.escrowed !== "") {
      writer.uint32(42).string(message.escrowed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchKey = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.bytes();
          break;

        case 3:
          message.tradable = reader.string();
          break;

        case 4:
          message.retired = reader.string();
          break;

        case 5:
          message.escrowed = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchBalance {
    return {
      batchKey: isSet(object.batchKey) ? Long.fromString(object.batchKey) : Long.UZERO,
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      tradable: isSet(object.tradable) ? String(object.tradable) : "",
      retired: isSet(object.retired) ? String(object.retired) : "",
      escrowed: isSet(object.escrowed) ? String(object.escrowed) : ""
    };
  },

  toJSON(message: BatchBalance): unknown {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || Long.UZERO).toString());
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.tradable !== undefined && (obj.tradable = message.tradable);
    message.retired !== undefined && (obj.retired = message.retired);
    message.escrowed !== undefined && (obj.escrowed = message.escrowed);
    return obj;
  },

  fromPartial(object: DeepPartial<BatchBalance>): BatchBalance {
    const message = createBaseBatchBalance();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? Long.fromValue(object.batchKey) : Long.UZERO;
    message.address = object.address ?? new Uint8Array();
    message.tradable = object.tradable ?? "";
    message.retired = object.retired ?? "";
    message.escrowed = object.escrowed ?? "";
    return message;
  }

};

function createBaseBatchSupply(): BatchSupply {
  return {
    batchKey: Long.UZERO,
    tradableAmount: "",
    retiredAmount: "",
    cancelledAmount: ""
  };
}

export const BatchSupply = {
  encode(message: BatchSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchKey.isZero()) {
      writer.uint32(8).uint64(message.batchKey);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }

    if (message.cancelledAmount !== "") {
      writer.uint32(34).string(message.cancelledAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSupply();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchKey = (reader.uint64() as Long);
          break;

        case 2:
          message.tradableAmount = reader.string();
          break;

        case 3:
          message.retiredAmount = reader.string();
          break;

        case 4:
          message.cancelledAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchSupply {
    return {
      batchKey: isSet(object.batchKey) ? Long.fromString(object.batchKey) : Long.UZERO,
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },

  toJSON(message: BatchSupply): unknown {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || Long.UZERO).toString());
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<BatchSupply>): BatchSupply {
    const message = createBaseBatchSupply();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? Long.fromValue(object.batchKey) : Long.UZERO;
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  }

};

function createBaseBatchOrigTx(): BatchOrigTx {
  return {
    txId: "",
    typ: "",
    note: "",
    batchDenom: ""
  };
}

export const BatchOrigTx = {
  encode(message: BatchOrigTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    if (message.typ !== "") {
      writer.uint32(18).string(message.typ);
    }

    if (message.note !== "") {
      writer.uint32(26).string(message.note);
    }

    if (message.batchDenom !== "") {
      writer.uint32(34).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchOrigTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchOrigTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.typ = reader.string();
          break;

        case 3:
          message.note = reader.string();
          break;

        case 4:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchOrigTx {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      typ: isSet(object.typ) ? String(object.typ) : "",
      note: isSet(object.note) ? String(object.note) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: BatchOrigTx): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.typ !== undefined && (obj.typ = message.typ);
    message.note !== undefined && (obj.note = message.note);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<BatchOrigTx>): BatchOrigTx {
    const message = createBaseBatchOrigTx();
    message.txId = object.txId ?? "";
    message.typ = object.typ ?? "";
    message.note = object.note ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};