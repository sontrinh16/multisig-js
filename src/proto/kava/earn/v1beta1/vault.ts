import { StrategyType, strategyTypeFromJSON, strategyTypeToJSON } from "./strategy";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
  /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
  denom: string;

  /** VaultStrategy is the strategy used for this vault. */
  vaultStrategy: StrategyType;
}

/**
 * VaultRecord is the state of a vault and is used to store the state of a
 * vault.
 */
export interface VaultRecord {
  /**
   * Denom is the only supported denomination of the vault for deposits and
   * withdrawals.
   */
  denom: string;

  /**
   * TotalSupply is the total supply of the vault, denominated **only** in the
   * user deposit/withdrawal denom, must be the same as the Denom field.
   */
  totalSupply: Coin;
}

/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
  /** Depositor represents the owner of the shares */
  depositor: Uint8Array;

  /**
   * AmountSupplied represents the total amount a depositor has supplied to the
   * vault. The vault is determined by the coin denom.
   */
  amountSupplied: Coin[];
}

function createBaseAllowedVault(): AllowedVault {
  return {
    denom: "",
    vaultStrategy: 0
  };
}

export const AllowedVault = {
  encode(message: AllowedVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.vaultStrategy !== 0) {
      writer.uint32(16).int32(message.vaultStrategy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.vaultStrategy = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllowedVault {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      vaultStrategy: isSet(object.vaultStrategy) ? strategyTypeFromJSON(object.vaultStrategy) : 0
    };
  },

  toJSON(message: AllowedVault): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.vaultStrategy !== undefined && (obj.vaultStrategy = strategyTypeToJSON(message.vaultStrategy));
    return obj;
  },

  fromPartial(object: DeepPartial<AllowedVault>): AllowedVault {
    const message = createBaseAllowedVault();
    message.denom = object.denom ?? "";
    message.vaultStrategy = object.vaultStrategy ?? 0;
    return message;
  }

};

function createBaseVaultRecord(): VaultRecord {
  return {
    denom: "",
    totalSupply: undefined
  };
}

export const VaultRecord = {
  encode(message: VaultRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.totalSupply !== undefined) {
      Coin.encode(message.totalSupply, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.totalSupply = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VaultRecord {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      totalSupply: isSet(object.totalSupply) ? Coin.fromJSON(object.totalSupply) : undefined
    };
  },

  toJSON(message: VaultRecord): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalSupply !== undefined && (obj.totalSupply = message.totalSupply ? Coin.toJSON(message.totalSupply) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultRecord>): VaultRecord {
    const message = createBaseVaultRecord();
    message.denom = object.denom ?? "";
    message.totalSupply = object.totalSupply !== undefined && object.totalSupply !== null ? Coin.fromPartial(object.totalSupply) : undefined;
    return message;
  }

};

function createBaseVaultShareRecord(): VaultShareRecord {
  return {
    depositor: new Uint8Array(),
    amountSupplied: []
  };
}

export const VaultShareRecord = {
  encode(message: VaultShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor.length !== 0) {
      writer.uint32(10).bytes(message.depositor);
    }

    for (const v of message.amountSupplied) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultShareRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.bytes();
          break;

        case 2:
          message.amountSupplied.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VaultShareRecord {
    return {
      depositor: isSet(object.depositor) ? bytesFromBase64(object.depositor) : new Uint8Array(),
      amountSupplied: Array.isArray(object?.amountSupplied) ? object.amountSupplied.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: VaultShareRecord): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = base64FromBytes(message.depositor !== undefined ? message.depositor : new Uint8Array()));

    if (message.amountSupplied) {
      obj.amountSupplied = message.amountSupplied.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountSupplied = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<VaultShareRecord>): VaultShareRecord {
    const message = createBaseVaultShareRecord();
    message.depositor = object.depositor ?? new Uint8Array();
    message.amountSupplied = object.amountSupplied?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};