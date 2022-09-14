import { Role, roleFromJSON, roleToJSON } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface GovAccount {
  address: Uint8Array;
  role: Role;
}

function createBaseGovAccount(): GovAccount {
  return {
    address: new Uint8Array(),
    role: 0
  };
}

export const GovAccount = {
  encode(message: GovAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.role = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GovAccount {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      role: isSet(object.role) ? roleFromJSON(object.role) : 0
    };
  },

  toJSON(message: GovAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    return obj;
  },

  fromPartial(object: DeepPartial<GovAccount>): GovAccount {
    const message = createBaseGovAccount();
    message.address = object.address ?? new Uint8Array();
    message.role = object.role ?? 0;
    return message;
  }

};