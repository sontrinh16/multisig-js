import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
  /** iri is the data IRI */
  iri: string;
}

/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
  /** iri is the data IRI */
  iri: string;

  /** signers are the addresses of the accounts which have signed the data. */
  signers: string[];
}

/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
  /** iri is the data IRI */
  iri: string;
}

function createBaseEventAnchorData(): EventAnchorData {
  return {
    iri: ""
  };
}

export const EventAnchorData = {
  encode(message: EventAnchorData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAnchorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnchorData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAnchorData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: EventAnchorData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAnchorData>): EventAnchorData {
    const message = createBaseEventAnchorData();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseEventSignData(): EventSignData {
  return {
    iri: "",
    signers: []
  };
}

export const EventSignData = {
  encode(message: EventSignData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSignData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        case 2:
          message.signers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSignData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: EventSignData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);

    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EventSignData>): EventSignData {
    const message = createBaseEventSignData();
    message.iri = object.iri ?? "";
    message.signers = object.signers?.map(e => e) || [];
    return message;
  }

};

function createBaseEventStoreRawData(): EventStoreRawData {
  return {
    iri: ""
  };
}

export const EventStoreRawData = {
  encode(message: EventStoreRawData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStoreRawData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStoreRawData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventStoreRawData {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: EventStoreRawData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<EventStoreRawData>): EventStoreRawData {
    const message = createBaseEventStoreRawData();
    message.iri = object.iri ?? "";
    return message;
  }

};