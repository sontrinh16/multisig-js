import { TransferState, CrossChainTransfer, FeeInfo, transferStateFromJSON, transferStateToJSON } from "../exported/v1beta1/types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ChainState } from "./types";
import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, DeepPartial, isSet } from "@osmonauts/helpers";
export enum ChainStatus {
  CHAIN_STATUS_UNSPECIFIED = 0,
  CHAIN_STATUS_ACTIVATED = 1,
  CHAIN_STATUS_DEACTIVATED = 2,
  UNRECOGNIZED = -1,
}
export function chainStatusFromJSON(object: any): ChainStatus {
  switch (object) {
    case 0:
    case "CHAIN_STATUS_UNSPECIFIED":
      return ChainStatus.CHAIN_STATUS_UNSPECIFIED;

    case 1:
    case "CHAIN_STATUS_ACTIVATED":
      return ChainStatus.CHAIN_STATUS_ACTIVATED;

    case 2:
    case "CHAIN_STATUS_DEACTIVATED":
      return ChainStatus.CHAIN_STATUS_DEACTIVATED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ChainStatus.UNRECOGNIZED;
  }
}
export function chainStatusToJSON(object: ChainStatus): string {
  switch (object) {
    case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
      return "CHAIN_STATUS_UNSPECIFIED";

    case ChainStatus.CHAIN_STATUS_ACTIVATED:
      return "CHAIN_STATUS_ACTIVATED";

    case ChainStatus.CHAIN_STATUS_DEACTIVATED:
      return "CHAIN_STATUS_DEACTIVATED";

    default:
      return "UNKNOWN";
  }
}
export interface QueryChainMaintainersResponse {
  maintainers: Uint8Array[];
}

/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
  recipientAddr: string;
  recipientChain: string;
  depositChain: string;
}
export interface LatestDepositAddressResponse {
  depositAddr: string;
}

/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
  chain: string;
  state: TransferState;
  pagination: PageRequest;
}
export interface TransfersForChainResponse {
  transfers: CrossChainTransfer[];
  pagination: PageResponse;
}

/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
  chain: string;
  asset: string;
}
export interface FeeInfoResponse {
  feeInfo: FeeInfo;
}

/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
  sourceChain: string;
  destinationChain: string;
  amount: string;
}
export interface TransferFeeResponse {
  fee: Coin;
}

/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
  /**
   * ChainsRequest represents a message that queries the chains
   * registered on the network
   */
  status: ChainStatus;
}
export interface ChainsResponse {
  chains: string[];
}

/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
  /**
   * AssetsRequest represents a message that queries the registered assets of a
   * chain
   */
  chain: string;
}
export interface AssetsResponse {
  assets: string[];
}

/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
  /**
   * ChainStateRequest represents a message that queries the state of a chain
   * registered on the network
   */
  chain: string;
}
export interface ChainStateResponse {
  state: ChainState;
}

/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
  /**
   * ChainsByAssetRequest represents a message that queries the chains
   * that support an asset on the network
   */
  asset: string;
}
export interface ChainsByAssetResponse {
  chains: string[];
}

/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
  depositAddr: string;
  depositChain: string;
}
export interface RecipientAddressResponse {
  recipientAddr: string;
  recipientChain: string;
}

function createBaseQueryChainMaintainersResponse(): QueryChainMaintainersResponse {
  return {
    maintainers: []
  };
}

export const QueryChainMaintainersResponse = {
  encode(message: QueryChainMaintainersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maintainers) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainMaintainersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainMaintainersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maintainers.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChainMaintainersResponse {
    return {
      maintainers: Array.isArray(object?.maintainers) ? object.maintainers.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: QueryChainMaintainersResponse): unknown {
    const obj: any = {};

    if (message.maintainers) {
      obj.maintainers = message.maintainers.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.maintainers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryChainMaintainersResponse>): QueryChainMaintainersResponse {
    const message = createBaseQueryChainMaintainersResponse();
    message.maintainers = object.maintainers?.map(e => e) || [];
    return message;
  }

};

function createBaseLatestDepositAddressRequest(): LatestDepositAddressRequest {
  return {
    recipientAddr: "",
    recipientChain: "",
    depositChain: ""
  };
}

export const LatestDepositAddressRequest = {
  encode(message: LatestDepositAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientAddr !== "") {
      writer.uint32(10).string(message.recipientAddr);
    }

    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }

    if (message.depositChain !== "") {
      writer.uint32(26).string(message.depositChain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatestDepositAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipientAddr = reader.string();
          break;

        case 2:
          message.recipientChain = reader.string();
          break;

        case 3:
          message.depositChain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LatestDepositAddressRequest {
    return {
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
    };
  },

  toJSON(message: LatestDepositAddressRequest): unknown {
    const obj: any = {};
    message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    message.depositChain !== undefined && (obj.depositChain = message.depositChain);
    return obj;
  },

  fromPartial(object: DeepPartial<LatestDepositAddressRequest>): LatestDepositAddressRequest {
    const message = createBaseLatestDepositAddressRequest();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    message.depositChain = object.depositChain ?? "";
    return message;
  }

};

function createBaseLatestDepositAddressResponse(): LatestDepositAddressResponse {
  return {
    depositAddr: ""
  };
}

export const LatestDepositAddressResponse = {
  encode(message: LatestDepositAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatestDepositAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LatestDepositAddressResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : ""
    };
  },

  toJSON(message: LatestDepositAddressResponse): unknown {
    const obj: any = {};
    message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<LatestDepositAddressResponse>): LatestDepositAddressResponse {
    const message = createBaseLatestDepositAddressResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  }

};

function createBaseTransfersForChainRequest(): TransfersForChainRequest {
  return {
    chain: "",
    state: 0,
    pagination: undefined
  };
}

export const TransfersForChainRequest = {
  encode(message: TransfersForChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfersForChainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        case 2:
          message.state = (reader.int32() as any);
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransfersForChainRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      state: isSet(object.state) ? transferStateFromJSON(object.state) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: TransfersForChainRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.state !== undefined && (obj.state = transferStateToJSON(message.state));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TransfersForChainRequest>): TransfersForChainRequest {
    const message = createBaseTransfersForChainRequest();
    message.chain = object.chain ?? "";
    message.state = object.state ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseTransfersForChainResponse(): TransfersForChainResponse {
  return {
    transfers: [],
    pagination: undefined
  };
}

export const TransfersForChainResponse = {
  encode(message: TransfersForChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfers) {
      CrossChainTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfersForChainResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transfers.push(CrossChainTransfer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransfersForChainResponse {
    return {
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: TransfersForChainResponse): unknown {
    const obj: any = {};

    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toJSON(e) : undefined);
    } else {
      obj.transfers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TransfersForChainResponse>): TransfersForChainResponse {
    const message = createBaseTransfersForChainResponse();
    message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseFeeInfoRequest(): FeeInfoRequest {
  return {
    chain: "",
    asset: ""
  };
}

export const FeeInfoRequest = {
  encode(message: FeeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        case 2:
          message.asset = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeInfoRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },

  toJSON(message: FeeInfoRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeInfoRequest>): FeeInfoRequest {
    const message = createBaseFeeInfoRequest();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? "";
    return message;
  }

};

function createBaseFeeInfoResponse(): FeeInfoResponse {
  return {
    feeInfo: undefined
  };
}

export const FeeInfoResponse = {
  encode(message: FeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeInfo = FeeInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeInfoResponse {
    return {
      feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
    };
  },

  toJSON(message: FeeInfoResponse): unknown {
    const obj: any = {};
    message.feeInfo !== undefined && (obj.feeInfo = message.feeInfo ? FeeInfo.toJSON(message.feeInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeInfoResponse>): FeeInfoResponse {
    const message = createBaseFeeInfoResponse();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  }

};

function createBaseTransferFeeRequest(): TransferFeeRequest {
  return {
    sourceChain: "",
    destinationChain: "",
    amount: ""
  };
}

export const TransferFeeRequest = {
  encode(message: TransferFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }

    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sourceChain = reader.string();
          break;

        case 2:
          message.destinationChain = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransferFeeRequest {
    return {
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: TransferFeeRequest): unknown {
    const obj: any = {};
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<TransferFeeRequest>): TransferFeeRequest {
    const message = createBaseTransferFeeRequest();
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseTransferFeeResponse(): TransferFeeResponse {
  return {
    fee: undefined
  };
}

export const TransferFeeResponse = {
  encode(message: TransferFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransferFeeResponse {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: TransferFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TransferFeeResponse>): TransferFeeResponse {
    const message = createBaseTransferFeeResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseChainsRequest(): ChainsRequest {
  return {
    status: 0
  };
}

export const ChainsRequest = {
  encode(message: ChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainsRequest {
    return {
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : 0
    };
  },

  toJSON(message: ChainsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = chainStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<ChainsRequest>): ChainsRequest {
    const message = createBaseChainsRequest();
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseChainsResponse(): ChainsResponse {
  return {
    chains: []
  };
}

export const ChainsResponse = {
  encode(message: ChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chains) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainsResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ChainsResponse): unknown {
    const obj: any = {};

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ChainsResponse>): ChainsResponse {
    const message = createBaseChainsResponse();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseAssetsRequest(): AssetsRequest {
  return {
    chain: ""
  };
}

export const AssetsRequest = {
  encode(message: AssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },

  toJSON(message: AssetsRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetsRequest>): AssetsRequest {
    const message = createBaseAssetsRequest();
    message.chain = object.chain ?? "";
    return message;
  }

};

function createBaseAssetsResponse(): AssetsResponse {
  return {
    assets: []
  };
}

export const AssetsResponse = {
  encode(message: AssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: AssetsResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AssetsResponse>): AssetsResponse {
    const message = createBaseAssetsResponse();
    message.assets = object.assets?.map(e => e) || [];
    return message;
  }

};

function createBaseChainStateRequest(): ChainStateRequest {
  return {
    chain: ""
  };
}

export const ChainStateRequest = {
  encode(message: ChainStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainStateRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },

  toJSON(message: ChainStateRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainStateRequest>): ChainStateRequest {
    const message = createBaseChainStateRequest();
    message.chain = object.chain ?? "";
    return message;
  }

};

function createBaseChainStateResponse(): ChainStateResponse {
  return {
    state: undefined
  };
}

export const ChainStateResponse = {
  encode(message: ChainStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      ChainState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = ChainState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainStateResponse {
    return {
      state: isSet(object.state) ? ChainState.fromJSON(object.state) : undefined
    };
  },

  toJSON(message: ChainStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? ChainState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainStateResponse>): ChainStateResponse {
    const message = createBaseChainStateResponse();
    message.state = object.state !== undefined && object.state !== null ? ChainState.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseChainsByAssetRequest(): ChainsByAssetRequest {
  return {
    asset: ""
  };
}

export const ChainsByAssetRequest = {
  encode(message: ChainsByAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsByAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainsByAssetRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },

  toJSON(message: ChainsByAssetRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainsByAssetRequest>): ChainsByAssetRequest {
    const message = createBaseChainsByAssetRequest();
    message.asset = object.asset ?? "";
    return message;
  }

};

function createBaseChainsByAssetResponse(): ChainsByAssetResponse {
  return {
    chains: []
  };
}

export const ChainsByAssetResponse = {
  encode(message: ChainsByAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chains) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsByAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainsByAssetResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ChainsByAssetResponse): unknown {
    const obj: any = {};

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ChainsByAssetResponse>): ChainsByAssetResponse {
    const message = createBaseChainsByAssetResponse();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseRecipientAddressRequest(): RecipientAddressRequest {
  return {
    depositAddr: "",
    depositChain: ""
  };
}

export const RecipientAddressRequest = {
  encode(message: RecipientAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }

    if (message.depositChain !== "") {
      writer.uint32(18).string(message.depositChain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecipientAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositAddr = reader.string();
          break;

        case 2:
          message.depositChain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecipientAddressRequest {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
      depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
    };
  },

  toJSON(message: RecipientAddressRequest): unknown {
    const obj: any = {};
    message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
    message.depositChain !== undefined && (obj.depositChain = message.depositChain);
    return obj;
  },

  fromPartial(object: DeepPartial<RecipientAddressRequest>): RecipientAddressRequest {
    const message = createBaseRecipientAddressRequest();
    message.depositAddr = object.depositAddr ?? "";
    message.depositChain = object.depositChain ?? "";
    return message;
  }

};

function createBaseRecipientAddressResponse(): RecipientAddressResponse {
  return {
    recipientAddr: "",
    recipientChain: ""
  };
}

export const RecipientAddressResponse = {
  encode(message: RecipientAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientAddr !== "") {
      writer.uint32(10).string(message.recipientAddr);
    }

    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecipientAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipientAddr = reader.string();
          break;

        case 2:
          message.recipientChain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecipientAddressResponse {
    return {
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : ""
    };
  },

  toJSON(message: RecipientAddressResponse): unknown {
    const obj: any = {};
    message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    return obj;
  },

  fromPartial(object: DeepPartial<RecipientAddressResponse>): RecipientAddressResponse {
    const message = createBaseRecipientAddressResponse();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    return message;
  }

};