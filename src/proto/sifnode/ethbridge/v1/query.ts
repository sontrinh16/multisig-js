import { Status } from "../../oracle/v1/types";
import { EthBridgeClaim } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
  ethereumChainId: Long;

  /** bridge_contract_address is an EthereumAddress */
  bridgeContractAddress: string;
  nonce: Long;
  symbol: string;

  /** token_contract_address is an EthereumAddress */
  tokenContractAddress: string;

  /** ethereum_sender is an EthereumAddress */
  ethereumSender: string;
}

/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponse {
  id: string;
  status: Status;
  claims: EthBridgeClaim[];
}
export interface QueryBlacklistRequest {}
export interface QueryBlacklistResponse {
  addresses: string[];
}

function createBaseQueryEthProphecyRequest(): QueryEthProphecyRequest {
  return {
    ethereumChainId: Long.ZERO,
    bridgeContractAddress: "",
    nonce: Long.ZERO,
    symbol: "",
    tokenContractAddress: "",
    ethereumSender: ""
  };
}

export const QueryEthProphecyRequest = {
  encode(message: QueryEthProphecyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ethereumChainId.isZero()) {
      writer.uint32(8).int64(message.ethereumChainId);
    }

    if (message.bridgeContractAddress !== "") {
      writer.uint32(18).string(message.bridgeContractAddress);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(24).int64(message.nonce);
    }

    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }

    if (message.tokenContractAddress !== "") {
      writer.uint32(42).string(message.tokenContractAddress);
    }

    if (message.ethereumSender !== "") {
      writer.uint32(50).string(message.ethereumSender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEthProphecyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEthProphecyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ethereumChainId = (reader.int64() as Long);
          break;

        case 2:
          message.bridgeContractAddress = reader.string();
          break;

        case 3:
          message.nonce = (reader.int64() as Long);
          break;

        case 4:
          message.symbol = reader.string();
          break;

        case 5:
          message.tokenContractAddress = reader.string();
          break;

        case 6:
          message.ethereumSender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEthProphecyRequest {
    return {
      ethereumChainId: isSet(object.ethereumChainId) ? Long.fromString(object.ethereumChainId) : Long.ZERO,
      bridgeContractAddress: isSet(object.bridgeContractAddress) ? String(object.bridgeContractAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromString(object.nonce) : Long.ZERO,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenContractAddress: isSet(object.tokenContractAddress) ? String(object.tokenContractAddress) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : ""
    };
  },

  toJSON(message: QueryEthProphecyRequest): unknown {
    const obj: any = {};
    message.ethereumChainId !== undefined && (obj.ethereumChainId = (message.ethereumChainId || Long.ZERO).toString());
    message.bridgeContractAddress !== undefined && (obj.bridgeContractAddress = message.bridgeContractAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.ZERO).toString());
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenContractAddress !== undefined && (obj.tokenContractAddress = message.tokenContractAddress);
    message.ethereumSender !== undefined && (obj.ethereumSender = message.ethereumSender);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEthProphecyRequest>): QueryEthProphecyRequest {
    const message = createBaseQueryEthProphecyRequest();
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? Long.fromValue(object.ethereumChainId) : Long.ZERO;
    message.bridgeContractAddress = object.bridgeContractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.ZERO;
    message.symbol = object.symbol ?? "";
    message.tokenContractAddress = object.tokenContractAddress ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    return message;
  }

};

function createBaseQueryEthProphecyResponse(): QueryEthProphecyResponse {
  return {
    id: "",
    status: undefined,
    claims: []
  };
}

export const QueryEthProphecyResponse = {
  encode(message: QueryEthProphecyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.claims) {
      EthBridgeClaim.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEthProphecyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEthProphecyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;

        case 3:
          message.claims.push(EthBridgeClaim.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEthProphecyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => EthBridgeClaim.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryEthProphecyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);

    if (message.claims) {
      obj.claims = message.claims.map(e => e ? EthBridgeClaim.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryEthProphecyResponse>): QueryEthProphecyResponse {
    const message = createBaseQueryEthProphecyResponse();
    message.id = object.id ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    message.claims = object.claims?.map(e => EthBridgeClaim.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBlacklistRequest(): QueryBlacklistRequest {
  return {};
}

export const QueryBlacklistRequest = {
  encode(_: QueryBlacklistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistRequest();

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

  fromJSON(_: any): QueryBlacklistRequest {
    return {};
  },

  toJSON(_: QueryBlacklistRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBlacklistRequest>): QueryBlacklistRequest {
    const message = createBaseQueryBlacklistRequest();
    return message;
  }

};

function createBaseQueryBlacklistResponse(): QueryBlacklistResponse {
  return {
    addresses: []
  };
}

export const QueryBlacklistResponse = {
  encode(message: QueryBlacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlacklistResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryBlacklistResponse): unknown {
    const obj: any = {};

    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlacklistResponse>): QueryBlacklistResponse {
    const message = createBaseQueryBlacklistResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }

};