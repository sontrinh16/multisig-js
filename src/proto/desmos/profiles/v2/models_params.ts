import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";

/** Params contains the parameters for the profiles module */
export interface Params {
  nickname: NicknameParams;
  dtag: DTagParams;
  bio: BioParams;
  oracle: OracleParams;
}

/** NicknameParams defines the parameters related to the profiles nicknames */
export interface NicknameParams {
  minLength: Uint8Array;
  maxLength: Uint8Array;
}

/** DTagParams defines the parameters related to profile DTags */
export interface DTagParams {
  regEx: string;
  minLength: Uint8Array;
  maxLength: Uint8Array;
}

/** BioParams defines the parameters related to profile biography */
export interface BioParams {
  maxLength: Uint8Array;
}

/**
 * OracleParams defines the parameters related to the oracle
 * that will be used to verify the ownership of a centralized
 * application account by a Desmos profile
 */
export interface OracleParams {
  /**
   * ScriptID represents the ID of the oracle script to be called to verify the
   * data
   */
  scriptId: Long;

  /** AskCount represents the number of oracles to which ask to verify the data */
  askCount: Long;

  /**
   * MinCount represents the minimum count of oracles that should complete the
   * verification successfully
   */
  minCount: Long;

  /**
   * PrepareGas represents the amount of gas to be used during the preparation
   * stage of the oracle script
   */
  prepareGas: Long;

  /**
   * ExecuteGas represents the amount of gas to be used during the execution of
   * the oracle script
   */
  executeGas: Long;

  /**
   * FeeAmount represents the amount of fees to be payed in order to execute the
   * oracle script
   */
  feeAmount: Coin[];
}

function createBaseParams(): Params {
  return {
    nickname: undefined,
    dtag: undefined,
    bio: undefined,
    oracle: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== undefined) {
      NicknameParams.encode(message.nickname, writer.uint32(10).fork()).ldelim();
    }

    if (message.dtag !== undefined) {
      DTagParams.encode(message.dtag, writer.uint32(18).fork()).ldelim();
    }

    if (message.bio !== undefined) {
      BioParams.encode(message.bio, writer.uint32(26).fork()).ldelim();
    }

    if (message.oracle !== undefined) {
      OracleParams.encode(message.oracle, writer.uint32(34).fork()).ldelim();
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
          message.nickname = NicknameParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.dtag = DTagParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.bio = BioParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.oracle = OracleParams.decode(reader, reader.uint32());
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
      nickname: isSet(object.nickname) ? NicknameParams.fromJSON(object.nickname) : undefined,
      dtag: isSet(object.dtag) ? DTagParams.fromJSON(object.dtag) : undefined,
      bio: isSet(object.bio) ? BioParams.fromJSON(object.bio) : undefined,
      oracle: isSet(object.oracle) ? OracleParams.fromJSON(object.oracle) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.nickname !== undefined && (obj.nickname = message.nickname ? NicknameParams.toJSON(message.nickname) : undefined);
    message.dtag !== undefined && (obj.dtag = message.dtag ? DTagParams.toJSON(message.dtag) : undefined);
    message.bio !== undefined && (obj.bio = message.bio ? BioParams.toJSON(message.bio) : undefined);
    message.oracle !== undefined && (obj.oracle = message.oracle ? OracleParams.toJSON(message.oracle) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.nickname = object.nickname !== undefined && object.nickname !== null ? NicknameParams.fromPartial(object.nickname) : undefined;
    message.dtag = object.dtag !== undefined && object.dtag !== null ? DTagParams.fromPartial(object.dtag) : undefined;
    message.bio = object.bio !== undefined && object.bio !== null ? BioParams.fromPartial(object.bio) : undefined;
    message.oracle = object.oracle !== undefined && object.oracle !== null ? OracleParams.fromPartial(object.oracle) : undefined;
    return message;
  }

};

function createBaseNicknameParams(): NicknameParams {
  return {
    minLength: new Uint8Array(),
    maxLength: new Uint8Array()
  };
}

export const NicknameParams = {
  encode(message: NicknameParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLength.length !== 0) {
      writer.uint32(10).bytes(message.minLength);
    }

    if (message.maxLength.length !== 0) {
      writer.uint32(18).bytes(message.maxLength);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NicknameParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNicknameParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minLength = reader.bytes();
          break;

        case 2:
          message.maxLength = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NicknameParams {
    return {
      minLength: isSet(object.minLength) ? bytesFromBase64(object.minLength) : new Uint8Array(),
      maxLength: isSet(object.maxLength) ? bytesFromBase64(object.maxLength) : new Uint8Array()
    };
  },

  toJSON(message: NicknameParams): unknown {
    const obj: any = {};
    message.minLength !== undefined && (obj.minLength = base64FromBytes(message.minLength !== undefined ? message.minLength : new Uint8Array()));
    message.maxLength !== undefined && (obj.maxLength = base64FromBytes(message.maxLength !== undefined ? message.maxLength : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<NicknameParams>): NicknameParams {
    const message = createBaseNicknameParams();
    message.minLength = object.minLength ?? new Uint8Array();
    message.maxLength = object.maxLength ?? new Uint8Array();
    return message;
  }

};

function createBaseDTagParams(): DTagParams {
  return {
    regEx: "",
    minLength: new Uint8Array(),
    maxLength: new Uint8Array()
  };
}

export const DTagParams = {
  encode(message: DTagParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regEx !== "") {
      writer.uint32(10).string(message.regEx);
    }

    if (message.minLength.length !== 0) {
      writer.uint32(18).bytes(message.minLength);
    }

    if (message.maxLength.length !== 0) {
      writer.uint32(26).bytes(message.maxLength);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DTagParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDTagParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.regEx = reader.string();
          break;

        case 2:
          message.minLength = reader.bytes();
          break;

        case 3:
          message.maxLength = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DTagParams {
    return {
      regEx: isSet(object.regEx) ? String(object.regEx) : "",
      minLength: isSet(object.minLength) ? bytesFromBase64(object.minLength) : new Uint8Array(),
      maxLength: isSet(object.maxLength) ? bytesFromBase64(object.maxLength) : new Uint8Array()
    };
  },

  toJSON(message: DTagParams): unknown {
    const obj: any = {};
    message.regEx !== undefined && (obj.regEx = message.regEx);
    message.minLength !== undefined && (obj.minLength = base64FromBytes(message.minLength !== undefined ? message.minLength : new Uint8Array()));
    message.maxLength !== undefined && (obj.maxLength = base64FromBytes(message.maxLength !== undefined ? message.maxLength : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<DTagParams>): DTagParams {
    const message = createBaseDTagParams();
    message.regEx = object.regEx ?? "";
    message.minLength = object.minLength ?? new Uint8Array();
    message.maxLength = object.maxLength ?? new Uint8Array();
    return message;
  }

};

function createBaseBioParams(): BioParams {
  return {
    maxLength: new Uint8Array()
  };
}

export const BioParams = {
  encode(message: BioParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxLength.length !== 0) {
      writer.uint32(26).bytes(message.maxLength);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BioParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBioParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.maxLength = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BioParams {
    return {
      maxLength: isSet(object.maxLength) ? bytesFromBase64(object.maxLength) : new Uint8Array()
    };
  },

  toJSON(message: BioParams): unknown {
    const obj: any = {};
    message.maxLength !== undefined && (obj.maxLength = base64FromBytes(message.maxLength !== undefined ? message.maxLength : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<BioParams>): BioParams {
    const message = createBaseBioParams();
    message.maxLength = object.maxLength ?? new Uint8Array();
    return message;
  }

};

function createBaseOracleParams(): OracleParams {
  return {
    scriptId: Long.UZERO,
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO,
    feeAmount: []
  };
}

export const OracleParams = {
  encode(message: OracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.scriptId.isZero()) {
      writer.uint32(8).uint64(message.scriptId);
    }

    if (!message.askCount.isZero()) {
      writer.uint32(16).uint64(message.askCount);
    }

    if (!message.minCount.isZero()) {
      writer.uint32(24).uint64(message.minCount);
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(32).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(40).uint64(message.executeGas);
    }

    for (const v of message.feeAmount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scriptId = (reader.uint64() as Long);
          break;

        case 2:
          message.askCount = (reader.uint64() as Long);
          break;

        case 3:
          message.minCount = (reader.uint64() as Long);
          break;

        case 4:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 5:
          message.executeGas = (reader.uint64() as Long);
          break;

        case 6:
          message.feeAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OracleParams {
    return {
      scriptId: isSet(object.scriptId) ? Long.fromString(object.scriptId) : Long.UZERO,
      askCount: isSet(object.askCount) ? Long.fromString(object.askCount) : Long.UZERO,
      minCount: isSet(object.minCount) ? Long.fromString(object.minCount) : Long.UZERO,
      prepareGas: isSet(object.prepareGas) ? Long.fromString(object.prepareGas) : Long.UZERO,
      executeGas: isSet(object.executeGas) ? Long.fromString(object.executeGas) : Long.UZERO,
      feeAmount: Array.isArray(object?.feeAmount) ? object.feeAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: OracleParams): unknown {
    const obj: any = {};
    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
    message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
    message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());

    if (message.feeAmount) {
      obj.feeAmount = message.feeAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeAmount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    message.feeAmount = object.feeAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};