import { Params } from "./params";
import { Chain, CrossChainTransfer, TransferFee, FeeInfo } from "../exported/v1beta1/types";
import { ChainState, LinkedAddresses } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  nonce: Long;
  chains: Chain[];
  chainStates: ChainState[];
  linkedAddresses: LinkedAddresses[];
  transfers: CrossChainTransfer[];
  fee: TransferFee;
  feeInfos: FeeInfo[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nonce: Long.UZERO,
    chains: [],
    chainStates: [],
    linkedAddresses: [],
    transfers: [],
    fee: undefined,
    feeInfos: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }

    for (const v of message.chains) {
      Chain.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.chainStates) {
      ChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.linkedAddresses) {
      LinkedAddresses.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.transfers) {
      CrossChainTransfer.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      TransferFee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.nonce = (reader.uint64() as Long);
          break;

        case 3:
          message.chains.push(Chain.decode(reader, reader.uint32()));
          break;

        case 4:
          message.chainStates.push(ChainState.decode(reader, reader.uint32()));
          break;

        case 5:
          message.linkedAddresses.push(LinkedAddresses.decode(reader, reader.uint32()));
          break;

        case 6:
          message.transfers.push(CrossChainTransfer.decode(reader, reader.uint32()));
          break;

        case 7:
          message.fee = TransferFee.decode(reader, reader.uint32());
          break;

        case 8:
          message.feeInfos.push(FeeInfo.decode(reader, reader.uint32()));
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
      nonce: isSet(object.nonce) ? Long.fromString(object.nonce) : Long.UZERO,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => Chain.fromJSON(e)) : [],
      chainStates: Array.isArray(object?.chainStates) ? object.chainStates.map((e: any) => ChainState.fromJSON(e)) : [],
      linkedAddresses: Array.isArray(object?.linkedAddresses) ? object.linkedAddresses.map((e: any) => LinkedAddresses.fromJSON(e)) : [],
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e)) : [],
      fee: isSet(object.fee) ? TransferFee.fromJSON(object.fee) : undefined,
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());

    if (message.chains) {
      obj.chains = message.chains.map(e => e ? Chain.toJSON(e) : undefined);
    } else {
      obj.chains = [];
    }

    if (message.chainStates) {
      obj.chainStates = message.chainStates.map(e => e ? ChainState.toJSON(e) : undefined);
    } else {
      obj.chainStates = [];
    }

    if (message.linkedAddresses) {
      obj.linkedAddresses = message.linkedAddresses.map(e => e ? LinkedAddresses.toJSON(e) : undefined);
    } else {
      obj.linkedAddresses = [];
    }

    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toJSON(e) : undefined);
    } else {
      obj.transfers = [];
    }

    message.fee !== undefined && (obj.fee = message.fee ? TransferFee.toJSON(message.fee) : undefined);

    if (message.feeInfos) {
      obj.feeInfos = message.feeInfos.map(e => e ? FeeInfo.toJSON(e) : undefined);
    } else {
      obj.feeInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.chains = object.chains?.map(e => Chain.fromPartial(e)) || [];
    message.chainStates = object.chainStates?.map(e => ChainState.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map(e => LinkedAddresses.fromPartial(e)) || [];
    message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? TransferFee.fromPartial(object.fee) : undefined;
    message.feeInfos = object.feeInfos?.map(e => FeeInfo.fromPartial(e)) || [];
    return message;
  }

};