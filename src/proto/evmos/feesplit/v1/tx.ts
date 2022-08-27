import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgRegisterFeeSplit defines a message that registers a FeeSplit */
export interface MsgRegisterFeeSplit {
  /** contract hex address */
  contractAddress: string;

  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;

  /** bech32 address of account receiving the transaction fees */
  withdrawerAddress: string;

  /**
   * array of nonces from the address path, where the last nonce is the nonce
   * that determines the contract's address - it can be an EOA nonce or a
   * factory contract nonce
   */
  nonces: Long[];
}

/** MsgRegisterFeeSplitResponse defines the MsgRegisterFeeSplit response type */
export interface MsgRegisterFeeSplitResponse {}

/**
 * MsgUpdateFeeSplit defines a message that updates the withdrawer address for a
 * registered FeeSplit
 */
export interface MsgUpdateFeeSplit {
  /** contract hex address */
  contractAddress: string;

  /** deployer bech32 address */
  deployerAddress: string;

  /** new withdrawer bech32 address for receiving the transaction fees */
  withdrawerAddress: string;
}

/** MsgUpdateFeeSplitResponse defines the MsgUpdateFeeSplit response type */
export interface MsgUpdateFeeSplitResponse {}

/** MsgCancelFeeSplit defines a message that cancels a registered FeeSplit */
export interface MsgCancelFeeSplit {
  /** contract hex address */
  contractAddress: string;

  /** deployer bech32 address */
  deployerAddress: string;
}

/** MsgCancelFeeSplitResponse defines the MsgCancelFeeSplit response type */
export interface MsgCancelFeeSplitResponse {}

function createBaseMsgRegisterFeeSplit(): MsgRegisterFeeSplit {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: "",
    nonces: []
  };
}

export const MsgRegisterFeeSplit = {
  encode(message: MsgRegisterFeeSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }

    writer.uint32(34).fork();

    for (const v of message.nonces) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeSplit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterFeeSplit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        case 3:
          message.withdrawerAddress = reader.string();
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.nonces.push((reader.uint64() as Long));
            }
          } else {
            message.nonces.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterFeeSplit {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: MsgRegisterFeeSplit): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);

    if (message.nonces) {
      obj.nonces = message.nonces.map(e => (e || Long.UZERO).toString());
    } else {
      obj.nonces = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterFeeSplit>): MsgRegisterFeeSplit {
    const message = createBaseMsgRegisterFeeSplit();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.nonces = object.nonces?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgRegisterFeeSplitResponse(): MsgRegisterFeeSplitResponse {
  return {};
}

export const MsgRegisterFeeSplitResponse = {
  encode(_: MsgRegisterFeeSplitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeSplitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterFeeSplitResponse();

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

  fromJSON(_: any): MsgRegisterFeeSplitResponse {
    return {};
  },

  toJSON(_: MsgRegisterFeeSplitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterFeeSplitResponse>): MsgRegisterFeeSplitResponse {
    const message = createBaseMsgRegisterFeeSplitResponse();
    return message;
  }

};

function createBaseMsgUpdateFeeSplit(): MsgUpdateFeeSplit {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}

export const MsgUpdateFeeSplit = {
  encode(message: MsgUpdateFeeSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeSplit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeSplit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        case 3:
          message.withdrawerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateFeeSplit {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },

  toJSON(message: MsgUpdateFeeSplit): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeSplit>): MsgUpdateFeeSplit {
    const message = createBaseMsgUpdateFeeSplit();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateFeeSplitResponse(): MsgUpdateFeeSplitResponse {
  return {};
}

export const MsgUpdateFeeSplitResponse = {
  encode(_: MsgUpdateFeeSplitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeSplitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeSplitResponse();

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

  fromJSON(_: any): MsgUpdateFeeSplitResponse {
    return {};
  },

  toJSON(_: MsgUpdateFeeSplitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateFeeSplitResponse>): MsgUpdateFeeSplitResponse {
    const message = createBaseMsgUpdateFeeSplitResponse();
    return message;
  }

};

function createBaseMsgCancelFeeSplit(): MsgCancelFeeSplit {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}

export const MsgCancelFeeSplit = {
  encode(message: MsgCancelFeeSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeSplit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelFeeSplit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelFeeSplit {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : ""
    };
  },

  toJSON(message: MsgCancelFeeSplit): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelFeeSplit>): MsgCancelFeeSplit {
    const message = createBaseMsgCancelFeeSplit();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  }

};

function createBaseMsgCancelFeeSplitResponse(): MsgCancelFeeSplitResponse {
  return {};
}

export const MsgCancelFeeSplitResponse = {
  encode(_: MsgCancelFeeSplitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeSplitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelFeeSplitResponse();

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

  fromJSON(_: any): MsgCancelFeeSplitResponse {
    return {};
  },

  toJSON(_: MsgCancelFeeSplitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelFeeSplitResponse>): MsgCancelFeeSplitResponse {
    const message = createBaseMsgCancelFeeSplitResponse();
    return message;
  }

};