import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
  /** Title is a short summary */
  title: string;

  /** Description is a human readable text */
  description: string;

  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * PromoteToPrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
  /** Title is a short summary */
  title: string;

  /** Description is a human readable text */
  description: string;

  /** Contract is the address of the smart contract */
  contract: string;
}

function createBasePromoteToPrivilegedContractProposal(): PromoteToPrivilegedContractProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

export const PromoteToPrivilegedContractProposal = {
  encode(message: PromoteToPrivilegedContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PromoteToPrivilegedContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromoteToPrivilegedContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PromoteToPrivilegedContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: PromoteToPrivilegedContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: DeepPartial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal {
    const message = createBasePromoteToPrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};

function createBaseDemotePrivilegedContractProposal(): DemotePrivilegedContractProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

export const DemotePrivilegedContractProposal = {
  encode(message: DemotePrivilegedContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DemotePrivilegedContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDemotePrivilegedContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DemotePrivilegedContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: DemotePrivilegedContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: DeepPartial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal {
    const message = createBaseDemotePrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};