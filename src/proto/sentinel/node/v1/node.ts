import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface Node {
  address: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
  status: Status;
  statusAt: Date;
}

function createBaseNode(): Node {
  return {
    address: "",
    provider: "",
    price: [],
    remoteUrl: "",
    status: 0,
    statusAt: undefined
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }

    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }

    if (message.statusAt !== undefined) {
      Timestamp.encode(toTimestamp(message.statusAt), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.provider = reader.string();
          break;

        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.remoteUrl = reader.string();
          break;

        case 5:
          message.status = (reader.int32() as any);
          break;

        case 6:
          message.statusAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Node {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.provider !== undefined && (obj.provider = message.provider);

    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }

    message.remoteUrl !== undefined && (obj.remoteUrl = message.remoteUrl);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.statusAt !== undefined && (obj.statusAt = message.statusAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt ?? undefined;
    return message;
  }

};