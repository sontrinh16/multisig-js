import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  swapEnabled: boolean;
  swapDenom: string;
  approveBy: string;
}

function createBaseParams(): Params {
  return {
    swapEnabled: false,
    swapDenom: "",
    approveBy: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapEnabled === true) {
      writer.uint32(8).bool(message.swapEnabled);
    }

    if (message.swapDenom !== "") {
      writer.uint32(18).string(message.swapDenom);
    }

    if (message.approveBy !== "") {
      writer.uint32(26).string(message.approveBy);
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
          message.swapEnabled = reader.bool();
          break;

        case 2:
          message.swapDenom = reader.string();
          break;

        case 3:
          message.approveBy = reader.string();
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
      swapEnabled: isSet(object.swapEnabled) ? Boolean(object.swapEnabled) : false,
      swapDenom: isSet(object.swapDenom) ? String(object.swapDenom) : "",
      approveBy: isSet(object.approveBy) ? String(object.approveBy) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.swapEnabled !== undefined && (obj.swapEnabled = message.swapEnabled);
    message.swapDenom !== undefined && (obj.swapDenom = message.swapDenom);
    message.approveBy !== undefined && (obj.approveBy = message.approveBy);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.swapEnabled = object.swapEnabled ?? false;
    message.swapDenom = object.swapDenom ?? "";
    message.approveBy = object.approveBy ?? "";
    return message;
  }

};