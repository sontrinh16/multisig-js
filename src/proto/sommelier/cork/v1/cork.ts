import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface Cork {
  /** call body containing the ABI encoded bytes to send to the contract */
  encodedContractCall: Uint8Array;

  /** address of the contract to send the call */
  targetContractAddress: string;
}
export interface ValidatorCork {
  cork: Cork;
  validator: string;
}
export interface ScheduledCork {
  cork: Cork;
  blockHeight: Long;
  validator: string;
}
export interface CellarIDSet {
  ids: string[];
}

function createBaseCork(): Cork {
  return {
    encodedContractCall: new Uint8Array(),
    targetContractAddress: ""
  };
}

export const Cork = {
  encode(message: Cork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedContractCall.length !== 0) {
      writer.uint32(10).bytes(message.encodedContractCall);
    }

    if (message.targetContractAddress !== "") {
      writer.uint32(18).string(message.targetContractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCork();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.encodedContractCall = reader.bytes();
          break;

        case 2:
          message.targetContractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Cork {
    return {
      encodedContractCall: isSet(object.encodedContractCall) ? bytesFromBase64(object.encodedContractCall) : new Uint8Array(),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : ""
    };
  },

  toJSON(message: Cork): unknown {
    const obj: any = {};
    message.encodedContractCall !== undefined && (obj.encodedContractCall = base64FromBytes(message.encodedContractCall !== undefined ? message.encodedContractCall : new Uint8Array()));
    message.targetContractAddress !== undefined && (obj.targetContractAddress = message.targetContractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Cork>): Cork {
    const message = createBaseCork();
    message.encodedContractCall = object.encodedContractCall ?? new Uint8Array();
    message.targetContractAddress = object.targetContractAddress ?? "";
    return message;
  }

};

function createBaseValidatorCork(): ValidatorCork {
  return {
    cork: undefined,
    validator: ""
  };
}

export const ValidatorCork = {
  encode(message: ValidatorCork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCork();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cork = Cork.decode(reader, reader.uint32());
          break;

        case 2:
          message.validator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },

  toJSON(message: ValidatorCork): unknown {
    const obj: any = {};
    message.cork !== undefined && (obj.cork = message.cork ? Cork.toJSON(message.cork) : undefined);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorCork>): ValidatorCork {
    const message = createBaseValidatorCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.validator = object.validator ?? "";
    return message;
  }

};

function createBaseScheduledCork(): ScheduledCork {
  return {
    cork: undefined,
    blockHeight: Long.UZERO,
    validator: ""
  };
}

export const ScheduledCork = {
  encode(message: ScheduledCork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledCork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledCork();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cork = Cork.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.validator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ScheduledCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },

  toJSON(message: ScheduledCork): unknown {
    const obj: any = {};
    message.cork !== undefined && (obj.cork = message.cork ? Cork.toJSON(message.cork) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<ScheduledCork>): ScheduledCork {
    const message = createBaseScheduledCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.validator = object.validator ?? "";
    return message;
  }

};

function createBaseCellarIDSet(): CellarIDSet {
  return {
    ids: []
  };
}

export const CellarIDSet = {
  encode(message: CellarIDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarIDSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarIDSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CellarIDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: CellarIDSet): unknown {
    const obj: any = {};

    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<CellarIDSet>): CellarIDSet {
    const message = createBaseCellarIDSet();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  }

};