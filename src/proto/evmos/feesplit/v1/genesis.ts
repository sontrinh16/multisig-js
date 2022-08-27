import { FeeSplit } from "./feesplit";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params;

  /** active registered contracts for fee distribution */
  feeSplits: FeeSplit[];
}

/** Params defines the feesplit module params */
export interface Params {
  /** enable_fee_split defines a parameter to enable the feesplit module */
  enableFeeSplit: boolean;

  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;

  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   */
  addrDerivationCostCreate: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feeSplits: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.feeSplits) {
      FeeSplit.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.feeSplits.push(FeeSplit.decode(reader, reader.uint32()));
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
      feeSplits: Array.isArray(object?.feeSplits) ? object.feeSplits.map((e: any) => FeeSplit.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.feeSplits) {
      obj.feeSplits = message.feeSplits.map(e => e ? FeeSplit.toJSON(e) : undefined);
    } else {
      obj.feeSplits = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feeSplits = object.feeSplits?.map(e => FeeSplit.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    enableFeeSplit: false,
    developerShares: "",
    addrDerivationCostCreate: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFeeSplit === true) {
      writer.uint32(8).bool(message.enableFeeSplit);
    }

    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }

    if (!message.addrDerivationCostCreate.isZero()) {
      writer.uint32(24).uint64(message.addrDerivationCostCreate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enableFeeSplit = reader.bool();
          break;

        case 2:
          message.developerShares = reader.string();
          break;

        case 3:
          message.addrDerivationCostCreate = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      enableFeeSplit: isSet(object.enableFeeSplit) ? Boolean(object.enableFeeSplit) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      addrDerivationCostCreate: isSet(object.addrDerivationCostCreate) ? Long.fromString(object.addrDerivationCostCreate) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableFeeSplit !== undefined && (obj.enableFeeSplit = message.enableFeeSplit);
    message.developerShares !== undefined && (obj.developerShares = message.developerShares);
    message.addrDerivationCostCreate !== undefined && (obj.addrDerivationCostCreate = (message.addrDerivationCostCreate || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableFeeSplit = object.enableFeeSplit ?? false;
    message.developerShares = object.developerShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? Long.fromValue(object.addrDerivationCostCreate) : Long.UZERO;
    return message;
  }

};