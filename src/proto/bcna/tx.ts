import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateBitcannaid {
  creator: string;
  bcnaid: string;
  address: string;
}
export interface MsgCreateBitcannaidResponse {
  id: Long;
}
export interface MsgUpdateBitcannaid {
  creator: string;
  id: Long;
  bcnaid: string;
  address: string;
}
export interface MsgUpdateBitcannaidResponse {}
export interface MsgDeleteBitcannaid {
  creator: string;
  id: Long;
}
export interface MsgDeleteBitcannaidResponse {}
export interface MsgCreateSupplychain {
  creator: string;
  product: string;
  info: string;
  supplyinfo: string;
}
export interface MsgCreateSupplychainResponse {
  id: Long;
}
export interface MsgUpdateSupplychain {
  creator: string;
  id: Long;
  product: string;
  info: string;
  supplyinfo: string;
}
export interface MsgUpdateSupplychainResponse {}
export interface MsgDeleteSupplychain {
  creator: string;
  id: Long;
}
export interface MsgDeleteSupplychainResponse {}

function createBaseMsgCreateBitcannaid(): MsgCreateBitcannaid {
  return {
    creator: "",
    bcnaid: "",
    address: ""
  };
}

export const MsgCreateBitcannaid = {
  encode(message: MsgCreateBitcannaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.bcnaid !== "") {
      writer.uint32(18).string(message.bcnaid);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBitcannaid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.bcnaid = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBitcannaid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bcnaid: isSet(object.bcnaid) ? String(object.bcnaid) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgCreateBitcannaid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBitcannaid>): MsgCreateBitcannaid {
    const message = createBaseMsgCreateBitcannaid();
    message.creator = object.creator ?? "";
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgCreateBitcannaidResponse(): MsgCreateBitcannaidResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgCreateBitcannaidResponse = {
  encode(message: MsgCreateBitcannaidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBitcannaidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBitcannaidResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateBitcannaidResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse {
    const message = createBaseMsgCreateBitcannaidResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateBitcannaid(): MsgUpdateBitcannaid {
  return {
    creator: "",
    id: Long.UZERO,
    bcnaid: "",
    address: ""
  };
}

export const MsgUpdateBitcannaid = {
  encode(message: MsgUpdateBitcannaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.bcnaid !== "") {
      writer.uint32(26).string(message.bcnaid);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBitcannaid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.bcnaid = reader.string();
          break;

        case 4:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateBitcannaid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      bcnaid: isSet(object.bcnaid) ? String(object.bcnaid) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgUpdateBitcannaid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid {
    const message = createBaseMsgUpdateBitcannaid();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgUpdateBitcannaidResponse(): MsgUpdateBitcannaidResponse {
  return {};
}

export const MsgUpdateBitcannaidResponse = {
  encode(_: MsgUpdateBitcannaidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBitcannaidResponse();

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

  fromJSON(_: any): MsgUpdateBitcannaidResponse {
    return {};
  },

  toJSON(_: MsgUpdateBitcannaidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse {
    const message = createBaseMsgUpdateBitcannaidResponse();
    return message;
  }

};

function createBaseMsgDeleteBitcannaid(): MsgDeleteBitcannaid {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgDeleteBitcannaid = {
  encode(message: MsgDeleteBitcannaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBitcannaid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteBitcannaid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgDeleteBitcannaid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid {
    const message = createBaseMsgDeleteBitcannaid();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeleteBitcannaidResponse(): MsgDeleteBitcannaidResponse {
  return {};
}

export const MsgDeleteBitcannaidResponse = {
  encode(_: MsgDeleteBitcannaidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBitcannaidResponse();

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

  fromJSON(_: any): MsgDeleteBitcannaidResponse {
    return {};
  },

  toJSON(_: MsgDeleteBitcannaidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse {
    const message = createBaseMsgDeleteBitcannaidResponse();
    return message;
  }

};

function createBaseMsgCreateSupplychain(): MsgCreateSupplychain {
  return {
    creator: "",
    product: "",
    info: "",
    supplyinfo: ""
  };
}

export const MsgCreateSupplychain = {
  encode(message: MsgCreateSupplychain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.product !== "") {
      writer.uint32(18).string(message.product);
    }

    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }

    if (message.supplyinfo !== "") {
      writer.uint32(34).string(message.supplyinfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSupplychain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.product = reader.string();
          break;

        case 3:
          message.info = reader.string();
          break;

        case 4:
          message.supplyinfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSupplychain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      product: isSet(object.product) ? String(object.product) : "",
      info: isSet(object.info) ? String(object.info) : "",
      supplyinfo: isSet(object.supplyinfo) ? String(object.supplyinfo) : ""
    };
  },

  toJSON(message: MsgCreateSupplychain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.product !== undefined && (obj.product = message.product);
    message.info !== undefined && (obj.info = message.info);
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSupplychain>): MsgCreateSupplychain {
    const message = createBaseMsgCreateSupplychain();
    message.creator = object.creator ?? "";
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    return message;
  }

};

function createBaseMsgCreateSupplychainResponse(): MsgCreateSupplychainResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgCreateSupplychainResponse = {
  encode(message: MsgCreateSupplychainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSupplychainResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSupplychainResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateSupplychainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse {
    const message = createBaseMsgCreateSupplychainResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateSupplychain(): MsgUpdateSupplychain {
  return {
    creator: "",
    id: Long.UZERO,
    product: "",
    info: "",
    supplyinfo: ""
  };
}

export const MsgUpdateSupplychain = {
  encode(message: MsgUpdateSupplychain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.product !== "") {
      writer.uint32(26).string(message.product);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (message.supplyinfo !== "") {
      writer.uint32(42).string(message.supplyinfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSupplychain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.product = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.supplyinfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateSupplychain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      product: isSet(object.product) ? String(object.product) : "",
      info: isSet(object.info) ? String(object.info) : "",
      supplyinfo: isSet(object.supplyinfo) ? String(object.supplyinfo) : ""
    };
  },

  toJSON(message: MsgUpdateSupplychain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.product !== undefined && (obj.product = message.product);
    message.info !== undefined && (obj.info = message.info);
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateSupplychain>): MsgUpdateSupplychain {
    const message = createBaseMsgUpdateSupplychain();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    return message;
  }

};

function createBaseMsgUpdateSupplychainResponse(): MsgUpdateSupplychainResponse {
  return {};
}

export const MsgUpdateSupplychainResponse = {
  encode(_: MsgUpdateSupplychainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSupplychainResponse();

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

  fromJSON(_: any): MsgUpdateSupplychainResponse {
    return {};
  },

  toJSON(_: MsgUpdateSupplychainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse {
    const message = createBaseMsgUpdateSupplychainResponse();
    return message;
  }

};

function createBaseMsgDeleteSupplychain(): MsgDeleteSupplychain {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgDeleteSupplychain = {
  encode(message: MsgDeleteSupplychain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSupplychain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteSupplychain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgDeleteSupplychain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSupplychain>): MsgDeleteSupplychain {
    const message = createBaseMsgDeleteSupplychain();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeleteSupplychainResponse(): MsgDeleteSupplychainResponse {
  return {};
}

export const MsgDeleteSupplychainResponse = {
  encode(_: MsgDeleteSupplychainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSupplychainResponse();

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

  fromJSON(_: any): MsgDeleteSupplychainResponse {
    return {};
  },

  toJSON(_: MsgDeleteSupplychainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse {
    const message = createBaseMsgDeleteSupplychainResponse();
    return message;
  }

};