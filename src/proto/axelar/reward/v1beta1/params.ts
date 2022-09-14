import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";

/** Params represent the genesis parameters for the module */
export interface Params {
  externalChainVotingInflationRate: Uint8Array;
  keyMgmtRelativeInflationRate: Uint8Array;
}

function createBaseParams(): Params {
  return {
    externalChainVotingInflationRate: new Uint8Array(),
    keyMgmtRelativeInflationRate: new Uint8Array()
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalChainVotingInflationRate.length !== 0) {
      writer.uint32(10).bytes(message.externalChainVotingInflationRate);
    }

    if (message.keyMgmtRelativeInflationRate.length !== 0) {
      writer.uint32(18).bytes(message.keyMgmtRelativeInflationRate);
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
          message.externalChainVotingInflationRate = reader.bytes();
          break;

        case 2:
          message.keyMgmtRelativeInflationRate = reader.bytes();
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
      externalChainVotingInflationRate: isSet(object.externalChainVotingInflationRate) ? bytesFromBase64(object.externalChainVotingInflationRate) : new Uint8Array(),
      keyMgmtRelativeInflationRate: isSet(object.keyMgmtRelativeInflationRate) ? bytesFromBase64(object.keyMgmtRelativeInflationRate) : new Uint8Array()
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.externalChainVotingInflationRate !== undefined && (obj.externalChainVotingInflationRate = base64FromBytes(message.externalChainVotingInflationRate !== undefined ? message.externalChainVotingInflationRate : new Uint8Array()));
    message.keyMgmtRelativeInflationRate !== undefined && (obj.keyMgmtRelativeInflationRate = base64FromBytes(message.keyMgmtRelativeInflationRate !== undefined ? message.keyMgmtRelativeInflationRate : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.externalChainVotingInflationRate = object.externalChainVotingInflationRate ?? new Uint8Array();
    message.keyMgmtRelativeInflationRate = object.keyMgmtRelativeInflationRate ?? new Uint8Array();
    return message;
  }

};