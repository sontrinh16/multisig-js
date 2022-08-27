import { Link } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgCyberlink {
  neuron: string;
  links: Link[];
}
export interface MsgCyberlinkResponse {}

function createBaseMsgCyberlink(): MsgCyberlink {
  return {
    neuron: "",
    links: []
  };
}

export const MsgCyberlink = {
  encode(message: MsgCyberlink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }

    for (const v of message.links) {
      Link.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCyberlink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCyberlink();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.neuron = reader.string();
          break;

        case 2:
          message.links.push(Link.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCyberlink {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : "",
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Link.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgCyberlink): unknown {
    const obj: any = {};
    message.neuron !== undefined && (obj.neuron = message.neuron);

    if (message.links) {
      obj.links = message.links.map(e => e ? Link.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgCyberlink>): MsgCyberlink {
    const message = createBaseMsgCyberlink();
    message.neuron = object.neuron ?? "";
    message.links = object.links?.map(e => Link.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCyberlinkResponse(): MsgCyberlinkResponse {
  return {};
}

export const MsgCyberlinkResponse = {
  encode(_: MsgCyberlinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCyberlinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCyberlinkResponse();

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

  fromJSON(_: any): MsgCyberlinkResponse {
    return {};
  },

  toJSON(_: MsgCyberlinkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCyberlinkResponse>): MsgCyberlinkResponse {
    const message = createBaseMsgCyberlinkResponse();
    return message;
  }

};