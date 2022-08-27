import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,

  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,

  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;

    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;

    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}
export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";

    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";

    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";

    default:
      return "UNKNOWN";
  }
}

/**
 * TokenPair defines an instance that records pairing consisting of a Cosmos
 * native Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20Address: string;

  /** cosmos base denomination to be mapped to */
  denom: string;

  /** shows token mapping enable status */
  enabled: boolean;

  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contractOwner: Owner;
}

/** RegisterCoinProposal is a gov Content type to register a token pair */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;

  /** proposal description */
  description: string;

  /** token pair of Cosmos native denom and ERC20 token address */
  metadata: Metadata;
}

/** RegisterCoinProposal is a gov Content type to register a token pair */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;

  /** proposal description */
  description: string;

  /** contract address of ERC20 token */
  erc20address: string;
}

/**
 * ToggleTokenRelayProposal is a gov Content type to toggle
 * the internal relaying of a token pair.
 */
export interface ToggleTokenRelayProposal {
  /** title of the proposal */
  title: string;

  /** proposal description */
  description: string;

  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

/**
 * UpdateTokenPairERC20Proposal is a gov Content type to update a token pair's
 * ERC20 contract address.
 */
export interface UpdateTokenPairERC20Proposal {
  /** title of the proposal */
  title: string;

  /** proposal description */
  description: string;

  /** contract address of ERC20 token */
  erc20Address: string;

  /** new address of ERC20 token contract */
  newErc20Address: string;
}

function createBaseTokenPair(): TokenPair {
  return {
    erc20Address: "",
    denom: "",
    enabled: false,
    contractOwner: 0
  };
}

export const TokenPair = {
  encode(message: TokenPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }

    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.enabled = reader.bool();
          break;

        case 4:
          message.contractOwner = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenPair {
    return {
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      contractOwner: isSet(object.contractOwner) ? ownerFromJSON(object.contractOwner) : 0
    };
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contractOwner !== undefined && (obj.contractOwner = ownerToJSON(message.contractOwner));
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = createBaseTokenPair();
    message.erc20Address = object.erc20Address ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  }

};

function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return {
    title: "",
    description: "",
    metadata: undefined
  };
}

export const RegisterCoinProposal = {
  encode(message: RegisterCoinProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCoinProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCoinProposal();

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
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterCoinProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: RegisterCoinProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterCoinProposal>): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return {
    title: "",
    description: "",
    erc20address: ""
  };
}

export const RegisterERC20Proposal = {
  encode(message: RegisterERC20Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.erc20address !== "") {
      writer.uint32(26).string(message.erc20address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterERC20Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterERC20Proposal();

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
          message.erc20address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterERC20Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      erc20address: isSet(object.erc20address) ? String(object.erc20address) : ""
    };
  },

  toJSON(message: RegisterERC20Proposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.erc20address !== undefined && (obj.erc20address = message.erc20address);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterERC20Proposal>): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.erc20address = object.erc20address ?? "";
    return message;
  }

};

function createBaseToggleTokenRelayProposal(): ToggleTokenRelayProposal {
  return {
    title: "",
    description: "",
    token: ""
  };
}

export const ToggleTokenRelayProposal = {
  encode(message: ToggleTokenRelayProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToggleTokenRelayProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleTokenRelayProposal();

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
          message.token = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ToggleTokenRelayProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      token: isSet(object.token) ? String(object.token) : ""
    };
  },

  toJSON(message: ToggleTokenRelayProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<ToggleTokenRelayProposal>): ToggleTokenRelayProposal {
    const message = createBaseToggleTokenRelayProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    return message;
  }

};

function createBaseUpdateTokenPairERC20Proposal(): UpdateTokenPairERC20Proposal {
  return {
    title: "",
    description: "",
    erc20Address: "",
    newErc20Address: ""
  };
}

export const UpdateTokenPairERC20Proposal = {
  encode(message: UpdateTokenPairERC20Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.erc20Address !== "") {
      writer.uint32(26).string(message.erc20Address);
    }

    if (message.newErc20Address !== "") {
      writer.uint32(34).string(message.newErc20Address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTokenPairERC20Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTokenPairERC20Proposal();

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
          message.erc20Address = reader.string();
          break;

        case 4:
          message.newErc20Address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateTokenPairERC20Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
      newErc20Address: isSet(object.newErc20Address) ? String(object.newErc20Address) : ""
    };
  },

  toJSON(message: UpdateTokenPairERC20Proposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
    message.newErc20Address !== undefined && (obj.newErc20Address = message.newErc20Address);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateTokenPairERC20Proposal>): UpdateTokenPairERC20Proposal {
    const message = createBaseUpdateTokenPairERC20Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.erc20Address = object.erc20Address ?? "";
    message.newErc20Address = object.newErc20Address ?? "";
    return message;
  }

};