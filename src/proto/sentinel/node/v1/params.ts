import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toDuration, fromDuration, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  deposit: Coin;
  inactiveDuration: string;
}

function createBaseParams(): Params {
  return {
    deposit: undefined,
    inactiveDuration: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    if (message.inactiveDuration !== undefined) {
      Duration.encode(toDuration(message.inactiveDuration), writer.uint32(18).fork()).ldelim();
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
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.inactiveDuration = fromDuration(Duration.decode(reader, reader.uint32()));
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
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      inactiveDuration: isSet(object.inactiveDuration) ? String(object.inactiveDuration) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.inactiveDuration !== undefined && (obj.inactiveDuration = message.inactiveDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.inactiveDuration = object.inactiveDuration ?? undefined;
    return message;
  }

};