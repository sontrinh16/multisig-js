import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryDidDocRequest is the request type for the Query/DidDoc RPC method. */
export interface QueryDidDocRequest {
  did: string;
}

/** QueryDidDocResponse is the response type for the Query/DidDoc RPC method. */
export interface QueryDidDocResponse {
  diddoc: Any;
}

/** QueryAllDidsRequest is the request type for the Query/AllDids RPC method. */
export interface QueryAllDidsRequest {}

/** QueryAllDidsResponse is the response type for the Query/AllDids RPC method. */
export interface QueryAllDidsResponse {
  dids: string[];
}

/** QueryAllDidDocsRequest is the request type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsRequest {}

/** QueryAllDidDocsResponse is the response type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsResponse {
  diddocs: Any[];
}

/** QueryAddressFromDidRequest is the request type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidRequest {
  did: string;
}

/** QueryAddressFromDidResponse is the response type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidResponse {
  address: string;
}

/** QueryAddressFromBase58EncodedPubkeyRequest is the request type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyRequest {
  pubKey: string;
}

/** QueryAddressFromBase58EncodedPubkeyResponse is the response type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyResponse {
  address: string;
}

function createBaseQueryDidDocRequest(): QueryDidDocRequest {
  return {
    did: ""
  };
}

export const QueryDidDocRequest = {
  encode(message: QueryDidDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDidDocRequest {
    return {
      did: isSet(object.did) ? String(object.did) : ""
    };
  },

  toJSON(message: QueryDidDocRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDidDocRequest>): QueryDidDocRequest {
    const message = createBaseQueryDidDocRequest();
    message.did = object.did ?? "";
    return message;
  }

};

function createBaseQueryDidDocResponse(): QueryDidDocResponse {
  return {
    diddoc: undefined
  };
}

export const QueryDidDocResponse = {
  encode(message: QueryDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diddoc !== undefined) {
      Any.encode(message.diddoc, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.diddoc = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDidDocResponse {
    return {
      diddoc: isSet(object.diddoc) ? Any.fromJSON(object.diddoc) : undefined
    };
  },

  toJSON(message: QueryDidDocResponse): unknown {
    const obj: any = {};
    message.diddoc !== undefined && (obj.diddoc = message.diddoc ? Any.toJSON(message.diddoc) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDidDocResponse>): QueryDidDocResponse {
    const message = createBaseQueryDidDocResponse();
    message.diddoc = object.diddoc !== undefined && object.diddoc !== null ? Any.fromPartial(object.diddoc) : undefined;
    return message;
  }

};

function createBaseQueryAllDidsRequest(): QueryAllDidsRequest {
  return {};
}

export const QueryAllDidsRequest = {
  encode(_: QueryAllDidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidsRequest();

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

  fromJSON(_: any): QueryAllDidsRequest {
    return {};
  },

  toJSON(_: QueryAllDidsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllDidsRequest>): QueryAllDidsRequest {
    const message = createBaseQueryAllDidsRequest();
    return message;
  }

};

function createBaseQueryAllDidsResponse(): QueryAllDidsResponse {
  return {
    dids: []
  };
}

export const QueryAllDidsResponse = {
  encode(message: QueryAllDidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dids) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dids.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllDidsResponse {
    return {
      dids: Array.isArray(object?.dids) ? object.dids.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryAllDidsResponse): unknown {
    const obj: any = {};

    if (message.dids) {
      obj.dids = message.dids.map(e => e);
    } else {
      obj.dids = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDidsResponse>): QueryAllDidsResponse {
    const message = createBaseQueryAllDidsResponse();
    message.dids = object.dids?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryAllDidDocsRequest(): QueryAllDidDocsRequest {
  return {};
}

export const QueryAllDidDocsRequest = {
  encode(_: QueryAllDidDocsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidDocsRequest();

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

  fromJSON(_: any): QueryAllDidDocsRequest {
    return {};
  },

  toJSON(_: QueryAllDidDocsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllDidDocsRequest>): QueryAllDidDocsRequest {
    const message = createBaseQueryAllDidDocsRequest();
    return message;
  }

};

function createBaseQueryAllDidDocsResponse(): QueryAllDidDocsResponse {
  return {
    diddocs: []
  };
}

export const QueryAllDidDocsResponse = {
  encode(message: QueryAllDidDocsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.diddocs) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidDocsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.diddocs.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllDidDocsResponse {
    return {
      diddocs: Array.isArray(object?.diddocs) ? object.diddocs.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryAllDidDocsResponse): unknown {
    const obj: any = {};

    if (message.diddocs) {
      obj.diddocs = message.diddocs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.diddocs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDidDocsResponse>): QueryAllDidDocsResponse {
    const message = createBaseQueryAllDidDocsResponse();
    message.diddocs = object.diddocs?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAddressFromDidRequest(): QueryAddressFromDidRequest {
  return {
    did: ""
  };
}

export const QueryAddressFromDidRequest = {
  encode(message: QueryAddressFromDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressFromDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressFromDidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAddressFromDidRequest {
    return {
      did: isSet(object.did) ? String(object.did) : ""
    };
  },

  toJSON(message: QueryAddressFromDidRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAddressFromDidRequest>): QueryAddressFromDidRequest {
    const message = createBaseQueryAddressFromDidRequest();
    message.did = object.did ?? "";
    return message;
  }

};

function createBaseQueryAddressFromDidResponse(): QueryAddressFromDidResponse {
  return {
    address: ""
  };
}

export const QueryAddressFromDidResponse = {
  encode(message: QueryAddressFromDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressFromDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressFromDidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAddressFromDidResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAddressFromDidResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAddressFromDidResponse>): QueryAddressFromDidResponse {
    const message = createBaseQueryAddressFromDidResponse();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAddressFromBase58EncodedPubkeyRequest(): QueryAddressFromBase58EncodedPubkeyRequest {
  return {
    pubKey: ""
  };
}

export const QueryAddressFromBase58EncodedPubkeyRequest = {
  encode(message: QueryAddressFromBase58EncodedPubkeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== "") {
      writer.uint32(10).string(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressFromBase58EncodedPubkeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressFromBase58EncodedPubkeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyRequest {
    return {
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : ""
    };
  },

  toJSON(message: QueryAddressFromBase58EncodedPubkeyRequest): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAddressFromBase58EncodedPubkeyRequest>): QueryAddressFromBase58EncodedPubkeyRequest {
    const message = createBaseQueryAddressFromBase58EncodedPubkeyRequest();
    message.pubKey = object.pubKey ?? "";
    return message;
  }

};

function createBaseQueryAddressFromBase58EncodedPubkeyResponse(): QueryAddressFromBase58EncodedPubkeyResponse {
  return {
    address: ""
  };
}

export const QueryAddressFromBase58EncodedPubkeyResponse = {
  encode(message: QueryAddressFromBase58EncodedPubkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressFromBase58EncodedPubkeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressFromBase58EncodedPubkeyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAddressFromBase58EncodedPubkeyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAddressFromBase58EncodedPubkeyResponse>): QueryAddressFromBase58EncodedPubkeyResponse {
    const message = createBaseQueryAddressFromBase58EncodedPubkeyResponse();
    message.address = object.address ?? "";
    return message;
  }

};