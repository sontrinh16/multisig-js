import { Params } from "./params";
import { CosmosChain, IBCTransfer } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
  params: Params;
  collectorAddress: Uint8Array;
  chains: CosmosChain[];
  transferQueue: QueueState;
  failedTransfers: IBCTransfer[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    collectorAddress: new Uint8Array(),
    chains: [],
    transferQueue: undefined,
    failedTransfers: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.collectorAddress.length !== 0) {
      writer.uint32(18).bytes(message.collectorAddress);
    }

    for (const v of message.chains) {
      CosmosChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.transferQueue !== undefined) {
      QueueState.encode(message.transferQueue, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.failedTransfers) {
      IBCTransfer.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.collectorAddress = reader.bytes();
          break;

        case 3:
          message.chains.push(CosmosChain.decode(reader, reader.uint32()));
          break;

        case 5:
          message.transferQueue = QueueState.decode(reader, reader.uint32());
          break;

        case 6:
          message.failedTransfers.push(IBCTransfer.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      collectorAddress: isSet(object.collectorAddress) ? bytesFromBase64(object.collectorAddress) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => CosmosChain.fromJSON(e)) : [],
      transferQueue: isSet(object.transferQueue) ? QueueState.fromJSON(object.transferQueue) : undefined,
      failedTransfers: Array.isArray(object?.failedTransfers) ? object.failedTransfers.map((e: any) => IBCTransfer.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.collectorAddress !== undefined && (obj.collectorAddress = base64FromBytes(message.collectorAddress !== undefined ? message.collectorAddress : new Uint8Array()));

    if (message.chains) {
      obj.chains = message.chains.map(e => e ? CosmosChain.toJSON(e) : undefined);
    } else {
      obj.chains = [];
    }

    message.transferQueue !== undefined && (obj.transferQueue = message.transferQueue ? QueueState.toJSON(message.transferQueue) : undefined);

    if (message.failedTransfers) {
      obj.failedTransfers = message.failedTransfers.map(e => e ? IBCTransfer.toJSON(e) : undefined);
    } else {
      obj.failedTransfers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.collectorAddress = object.collectorAddress ?? new Uint8Array();
    message.chains = object.chains?.map(e => CosmosChain.fromPartial(e)) || [];
    message.transferQueue = object.transferQueue !== undefined && object.transferQueue !== null ? QueueState.fromPartial(object.transferQueue) : undefined;
    message.failedTransfers = object.failedTransfers?.map(e => IBCTransfer.fromPartial(e)) || [];
    return message;
  }

};