import { CellarIDSet } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface AddManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds: CellarIDSet;
}

/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}
export interface RemoveManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds: CellarIDSet;
}

/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}

function createBaseAddManagedCellarIDsProposal(): AddManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: undefined
  };
}

export const AddManagedCellarIDsProposal = {
  encode(message: AddManagedCellarIDsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddManagedCellarIDsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddManagedCellarIDsProposal();

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
          message.cellarIds = CellarIDSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined
    };
  },

  toJSON(message: AddManagedCellarIDsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.cellarIds !== undefined && (obj.cellarIds = message.cellarIds ? CellarIDSet.toJSON(message.cellarIds) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal {
    const message = createBaseAddManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    return message;
  }

};

function createBaseAddManagedCellarIDsProposalWithDeposit(): AddManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    cellarIds: [],
    deposit: ""
  };
}

export const AddManagedCellarIDsProposalWithDeposit = {
  encode(message: AddManagedCellarIDsProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.cellarIds) {
      writer.uint32(26).string(v!);
    }

    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddManagedCellarIDsProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddManagedCellarIDsProposalWithDeposit();

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
          message.cellarIds.push(reader.string());
          break;

        case 4:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },

  toJSON(message: AddManagedCellarIDsProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.cellarIds) {
      obj.cellarIds = message.cellarIds.map(e => e);
    } else {
      obj.cellarIds = [];
    }

    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseRemoveManagedCellarIDsProposal(): RemoveManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: undefined
  };
}

export const RemoveManagedCellarIDsProposal = {
  encode(message: RemoveManagedCellarIDsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveManagedCellarIDsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveManagedCellarIDsProposal();

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
          message.cellarIds = CellarIDSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RemoveManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined
    };
  },

  toJSON(message: RemoveManagedCellarIDsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.cellarIds !== undefined && (obj.cellarIds = message.cellarIds ? CellarIDSet.toJSON(message.cellarIds) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal {
    const message = createBaseRemoveManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    return message;
  }

};

function createBaseRemoveManagedCellarIDsProposalWithDeposit(): RemoveManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    cellarIds: [],
    deposit: ""
  };
}

export const RemoveManagedCellarIDsProposalWithDeposit = {
  encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.cellarIds) {
      writer.uint32(26).string(v!);
    }

    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveManagedCellarIDsProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveManagedCellarIDsProposalWithDeposit();

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
          message.cellarIds.push(reader.string());
          break;

        case 4:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },

  toJSON(message: RemoveManagedCellarIDsProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.cellarIds) {
      obj.cellarIds = message.cellarIds.map(e => e);
    } else {
      obj.cellarIds = [];
    }

    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit {
    const message = createBaseRemoveManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }

};