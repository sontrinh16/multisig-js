import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CreditType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

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

function createBaseParams(): Params {
  return {
    creditClassFee: [],
    basketFee: [],
    allowedClassCreators: [],
    allowlistEnabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creditClassFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.basketFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.allowedClassCreators) {
      writer.uint32(26).string(v!);
    }

    if (message.allowlistEnabled === true) {
      writer.uint32(32).bool(message.allowlistEnabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.basketFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.allowedClassCreators.push(reader.string());
          break;

        case 4:
          message.allowlistEnabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      creditClassFee: Array.isArray(object?.creditClassFee) ? object.creditClassFee.map((e: any) => Coin.fromJSON(e)) : [],
      basketFee: Array.isArray(object?.basketFee) ? object.basketFee.map((e: any) => Coin.fromJSON(e)) : [],
      allowedClassCreators: Array.isArray(object?.allowedClassCreators) ? object.allowedClassCreators.map((e: any) => String(e)) : [],
      allowlistEnabled: isSet(object.allowlistEnabled) ? Boolean(object.allowlistEnabled) : false
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.creditClassFee) {
      obj.creditClassFee = message.creditClassFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.creditClassFee = [];
    }

    if (message.basketFee) {
      obj.basketFee = message.basketFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.basketFee = [];
    }

    if (message.allowedClassCreators) {
      obj.allowedClassCreators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowedClassCreators = [];
    }

    message.allowlistEnabled !== undefined && (obj.allowlistEnabled = message.allowlistEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.creditClassFee = object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
    message.basketFee = object.basketFee?.map(e => Coin.fromPartial(e)) || [];
    message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
    message.allowlistEnabled = object.allowlistEnabled ?? false;
    return message;
  }

};

function createBaseOriginTx(): OriginTx {
  return {
    typ: "",
    id: ""
  };
}

export const OriginTx = {
  encode(message: OriginTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typ !== "") {
      writer.uint32(10).string(message.typ);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.typ = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OriginTx {
    return {
      typ: isSet(object.typ) ? String(object.typ) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: OriginTx): unknown {
    const obj: any = {};
    message.typ !== undefined && (obj.typ = message.typ);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<OriginTx>): OriginTx {
    const message = createBaseOriginTx();
    message.typ = object.typ ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseCreditTypeProposal(): CreditTypeProposal {
  return {
    title: "",
    description: "",
    creditType: undefined
  };
}

export const CreditTypeProposal = {
  encode(message: CreditTypeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditTypeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreditTypeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined
    };
  },

  toJSON(message: CreditTypeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.creditType !== undefined && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreditTypeProposal>): CreditTypeProposal {
    const message = createBaseCreditTypeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    return message;
  }

};