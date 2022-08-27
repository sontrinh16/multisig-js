import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * FeeSplit defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeSplit {
  /** hex address of registered contract */
  contractAddress: string;

  /** bech32 address of contract deployer */
  deployerAddress: string;

  /**
   * bech32 address of account receiving the transaction fees it defaults to
   * deployer_address
   */
  withdrawerAddress: string;
}

function createBaseFeeSplit(): FeeSplit {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}

export const FeeSplit = {
  encode(message: FeeSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeSplit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeSplit();

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

  fromJSON(object: any): FeeSplit {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },

  toJSON(message: FeeSplit): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeSplit>): FeeSplit {
    const message = createBaseFeeSplit();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};