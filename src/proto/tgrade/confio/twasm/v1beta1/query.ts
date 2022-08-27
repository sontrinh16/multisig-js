import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/**
 * QueryPrivilegedContractsResponse is the request type for the
 * Query/PrivilegedContracts RPC method
 */
export interface QueryPrivilegedContractsRequest {}

/**
 * QueryPrivilegedContractsResponse is the response type for the
 * Query/PrivilegedContracts RPC method
 */
export interface QueryPrivilegedContractsResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
}

/**
 * QueryContractsByPrivilegeTypeRequest is the request type for the
 * Query/ContractsByPrivilegeType RPC method
 */
export interface QueryContractsByPrivilegeTypeRequest {
  /**
   * QueryContractsByPrivilegeTypeRequest is the request type for the
   * Query/ContractsByPrivilegeType RPC method
   */
  privilegeType: string;
}

/**
 * QueryContractsByPrivilegeTypeResponse is the response type for the
 * Query/ContractsByPrivilegeType RPC method
 */
export interface QueryContractsByPrivilegeTypeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
}

function createBaseQueryPrivilegedContractsRequest(): QueryPrivilegedContractsRequest {
  return {};
}

export const QueryPrivilegedContractsRequest = {
  encode(_: QueryPrivilegedContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrivilegedContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrivilegedContractsRequest();

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

  fromJSON(_: any): QueryPrivilegedContractsRequest {
    return {};
  },

  toJSON(_: QueryPrivilegedContractsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPrivilegedContractsRequest>): QueryPrivilegedContractsRequest {
    const message = createBaseQueryPrivilegedContractsRequest();
    return message;
  }

};

function createBaseQueryPrivilegedContractsResponse(): QueryPrivilegedContractsResponse {
  return {
    contracts: []
  };
}

export const QueryPrivilegedContractsResponse = {
  encode(message: QueryPrivilegedContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrivilegedContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrivilegedContractsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPrivilegedContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryPrivilegedContractsResponse): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryPrivilegedContractsResponse>): QueryPrivilegedContractsResponse {
    const message = createBaseQueryPrivilegedContractsResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryContractsByPrivilegeTypeRequest(): QueryContractsByPrivilegeTypeRequest {
  return {
    privilegeType: ""
  };
}

export const QueryContractsByPrivilegeTypeRequest = {
  encode(message: QueryContractsByPrivilegeTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privilegeType !== "") {
      writer.uint32(10).string(message.privilegeType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByPrivilegeTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByPrivilegeTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.privilegeType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByPrivilegeTypeRequest {
    return {
      privilegeType: isSet(object.privilegeType) ? String(object.privilegeType) : ""
    };
  },

  toJSON(message: QueryContractsByPrivilegeTypeRequest): unknown {
    const obj: any = {};
    message.privilegeType !== undefined && (obj.privilegeType = message.privilegeType);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractsByPrivilegeTypeRequest>): QueryContractsByPrivilegeTypeRequest {
    const message = createBaseQueryContractsByPrivilegeTypeRequest();
    message.privilegeType = object.privilegeType ?? "";
    return message;
  }

};

function createBaseQueryContractsByPrivilegeTypeResponse(): QueryContractsByPrivilegeTypeResponse {
  return {
    contracts: []
  };
}

export const QueryContractsByPrivilegeTypeResponse = {
  encode(message: QueryContractsByPrivilegeTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByPrivilegeTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByPrivilegeTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByPrivilegeTypeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryContractsByPrivilegeTypeResponse): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractsByPrivilegeTypeResponse>): QueryContractsByPrivilegeTypeResponse {
    const message = createBaseQueryContractsByPrivilegeTypeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  }

};