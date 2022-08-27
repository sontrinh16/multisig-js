import { MicrotickParams } from "./Params";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface GenesisAccount {
  account: Uint8Array;
  placedQuotes: number;
  placedTrades: number;
}
export interface GenesisMarket {
  name: string;
  description: string;
}
export interface GenesisDuration {
  name: string;
  seconds: number;
}
export interface GenesisMicrotick {
  params: MicrotickParams;
  accounts: GenesisAccount[];
  markets: GenesisMarket[];
  durations: GenesisDuration[];
}

function createBaseGenesisAccount(): GenesisAccount {
  return {
    account: new Uint8Array(),
    placedQuotes: 0,
    placedTrades: 0
  };
}

export const GenesisAccount = {
  encode(message: GenesisAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }

    if (message.placedQuotes !== 0) {
      writer.uint32(16).uint32(message.placedQuotes);
    }

    if (message.placedTrades !== 0) {
      writer.uint32(24).uint32(message.placedTrades);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.placedQuotes = reader.uint32();
          break;

        case 3:
          message.placedTrades = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisAccount {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      placedQuotes: isSet(object.placedQuotes) ? Number(object.placedQuotes) : 0,
      placedTrades: isSet(object.placedTrades) ? Number(object.placedTrades) : 0
    };
  },

  toJSON(message: GenesisAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));
    message.placedQuotes !== undefined && (obj.placedQuotes = Math.round(message.placedQuotes));
    message.placedTrades !== undefined && (obj.placedTrades = Math.round(message.placedTrades));
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisAccount>): GenesisAccount {
    const message = createBaseGenesisAccount();
    message.account = object.account ?? new Uint8Array();
    message.placedQuotes = object.placedQuotes ?? 0;
    message.placedTrades = object.placedTrades ?? 0;
    return message;
  }

};

function createBaseGenesisMarket(): GenesisMarket {
  return {
    name: "",
    description: ""
  };
}

export const GenesisMarket = {
  encode(message: GenesisMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisMarket {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: GenesisMarket): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisMarket>): GenesisMarket {
    const message = createBaseGenesisMarket();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  }

};

function createBaseGenesisDuration(): GenesisDuration {
  return {
    name: "",
    seconds: 0
  };
}

export const GenesisDuration = {
  encode(message: GenesisDuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.seconds !== 0) {
      writer.uint32(16).uint32(message.seconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDuration();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.seconds = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisDuration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0
    };
  },

  toJSON(message: GenesisDuration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisDuration>): GenesisDuration {
    const message = createBaseGenesisDuration();
    message.name = object.name ?? "";
    message.seconds = object.seconds ?? 0;
    return message;
  }

};

function createBaseGenesisMicrotick(): GenesisMicrotick {
  return {
    params: undefined,
    accounts: [],
    markets: [],
    durations: []
  };
}

export const GenesisMicrotick = {
  encode(message: GenesisMicrotick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      MicrotickParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accounts) {
      GenesisAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.markets) {
      GenesisMarket.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.durations) {
      GenesisDuration.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMicrotick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMicrotick();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = MicrotickParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.accounts.push(GenesisAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.markets.push(GenesisMarket.decode(reader, reader.uint32()));
          break;

        case 4:
          message.durations.push(GenesisDuration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisMicrotick {
    return {
      params: isSet(object.params) ? MicrotickParams.fromJSON(object.params) : undefined,
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => GenesisAccount.fromJSON(e)) : [],
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => GenesisMarket.fromJSON(e)) : [],
      durations: Array.isArray(object?.durations) ? object.durations.map((e: any) => GenesisDuration.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisMicrotick): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? MicrotickParams.toJSON(message.params) : undefined);

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? GenesisAccount.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    if (message.markets) {
      obj.markets = message.markets.map(e => e ? GenesisMarket.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }

    if (message.durations) {
      obj.durations = message.durations.map(e => e ? GenesisDuration.toJSON(e) : undefined);
    } else {
      obj.durations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisMicrotick>): GenesisMicrotick {
    const message = createBaseGenesisMicrotick();
    message.params = object.params !== undefined && object.params !== null ? MicrotickParams.fromPartial(object.params) : undefined;
    message.accounts = object.accounts?.map(e => GenesisAccount.fromPartial(e)) || [];
    message.markets = object.markets?.map(e => GenesisMarket.fromPartial(e)) || [];
    message.durations = object.durations?.map(e => GenesisDuration.fromPartial(e)) || [];
    return message;
  }

};