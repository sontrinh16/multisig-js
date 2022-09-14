import { Bitmap } from "../../utils/v1beta1/bitmap";
import { Chain, Asset, CrossChainAddress } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface MaintainerState {
  address: Uint8Array;
  missingVotes: Bitmap;
  incorrectVotes: Bitmap;
  chain: string;
}

/** ChainState represents the state of a registered blockchain */
export interface ChainState {
  chain: Chain;
  activated: boolean;
  assets: Asset[];

  /** @deprecated */
  maintainerStates: MaintainerState[];
}
export interface LinkedAddresses {
  depositAddress: CrossChainAddress;
  recipientAddress: CrossChainAddress;
}

function createBaseMaintainerState(): MaintainerState {
  return {
    address: new Uint8Array(),
    missingVotes: undefined,
    incorrectVotes: undefined,
    chain: ""
  };
}

export const MaintainerState = {
  encode(message: MaintainerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.missingVotes !== undefined) {
      Bitmap.encode(message.missingVotes, writer.uint32(18).fork()).ldelim();
    }

    if (message.incorrectVotes !== undefined) {
      Bitmap.encode(message.incorrectVotes, writer.uint32(26).fork()).ldelim();
    }

    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintainerState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.missingVotes = Bitmap.decode(reader, reader.uint32());
          break;

        case 3:
          message.incorrectVotes = Bitmap.decode(reader, reader.uint32());
          break;

        case 4:
          message.chain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MaintainerState {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      missingVotes: isSet(object.missingVotes) ? Bitmap.fromJSON(object.missingVotes) : undefined,
      incorrectVotes: isSet(object.incorrectVotes) ? Bitmap.fromJSON(object.incorrectVotes) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },

  toJSON(message: MaintainerState): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.missingVotes !== undefined && (obj.missingVotes = message.missingVotes ? Bitmap.toJSON(message.missingVotes) : undefined);
    message.incorrectVotes !== undefined && (obj.incorrectVotes = message.incorrectVotes ? Bitmap.toJSON(message.incorrectVotes) : undefined);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(object: DeepPartial<MaintainerState>): MaintainerState {
    const message = createBaseMaintainerState();
    message.address = object.address ?? new Uint8Array();
    message.missingVotes = object.missingVotes !== undefined && object.missingVotes !== null ? Bitmap.fromPartial(object.missingVotes) : undefined;
    message.incorrectVotes = object.incorrectVotes !== undefined && object.incorrectVotes !== null ? Bitmap.fromPartial(object.incorrectVotes) : undefined;
    message.chain = object.chain ?? "";
    return message;
  }

};

function createBaseChainState(): ChainState {
  return {
    chain: undefined,
    activated: false,
    assets: [],
    maintainerStates: []
  };
}

export const ChainState = {
  encode(message: ChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }

    if (message.activated === true) {
      writer.uint32(24).bool(message.activated);
    }

    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.maintainerStates) {
      MaintainerState.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = Chain.decode(reader, reader.uint32());
          break;

        case 3:
          message.activated = reader.bool();
          break;

        case 5:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;

        case 6:
          message.maintainerStates.push(MaintainerState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainState {
    return {
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      activated: isSet(object.activated) ? Boolean(object.activated) : false,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      maintainerStates: Array.isArray(object?.maintainerStates) ? object.maintainerStates.map((e: any) => MaintainerState.fromJSON(e)) : []
    };
  },

  toJSON(message: ChainState): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
    message.activated !== undefined && (obj.activated = message.activated);

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    if (message.maintainerStates) {
      obj.maintainerStates = message.maintainerStates.map(e => e ? MaintainerState.toJSON(e) : undefined);
    } else {
      obj.maintainerStates = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ChainState>): ChainState {
    const message = createBaseChainState();
    message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.activated = object.activated ?? false;
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.maintainerStates = object.maintainerStates?.map(e => MaintainerState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLinkedAddresses(): LinkedAddresses {
  return {
    depositAddress: undefined,
    recipientAddress: undefined
  };
}

export const LinkedAddresses = {
  encode(message: LinkedAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== undefined) {
      CrossChainAddress.encode(message.depositAddress, writer.uint32(10).fork()).ldelim();
    }

    if (message.recipientAddress !== undefined) {
      CrossChainAddress.encode(message.recipientAddress, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositAddress = CrossChainAddress.decode(reader, reader.uint32());
          break;

        case 2:
          message.recipientAddress = CrossChainAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LinkedAddresses {
    return {
      depositAddress: isSet(object.depositAddress) ? CrossChainAddress.fromJSON(object.depositAddress) : undefined,
      recipientAddress: isSet(object.recipientAddress) ? CrossChainAddress.fromJSON(object.recipientAddress) : undefined
    };
  },

  toJSON(message: LinkedAddresses): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress ? CrossChainAddress.toJSON(message.depositAddress) : undefined);
    message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress ? CrossChainAddress.toJSON(message.recipientAddress) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkedAddresses>): LinkedAddresses {
    const message = createBaseLinkedAddresses();
    message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? CrossChainAddress.fromPartial(object.depositAddress) : undefined;
    message.recipientAddress = object.recipientAddress !== undefined && object.recipientAddress !== null ? CrossChainAddress.fromPartial(object.recipientAddress) : undefined;
    return message;
  }

};