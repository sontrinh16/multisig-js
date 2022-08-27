import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface DenomChangeProposal {
  title: string;
  description: string;
  backingDenom: string;
  backingRatio: string;
}
export interface MarketMetadata {
  name: string;
  description: string;
}
export interface AddMarketsProposal {
  title: string;
  description: string;
  markets: MarketMetadata[];
}

function createBaseDenomChangeProposal(): DenomChangeProposal {
  return {
    title: "",
    description: "",
    backingDenom: "",
    backingRatio: ""
  };
}

export const DenomChangeProposal = {
  encode(message: DenomChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.backingDenom !== "") {
      writer.uint32(26).string(message.backingDenom);
    }

    if (message.backingRatio !== "") {
      writer.uint32(34).string(message.backingRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomChangeProposal();

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
          message.backingDenom = reader.string();
          break;

        case 4:
          message.backingRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DenomChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
      backingRatio: isSet(object.backingRatio) ? String(object.backingRatio) : ""
    };
  },

  toJSON(message: DenomChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    message.backingRatio !== undefined && (obj.backingRatio = message.backingRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomChangeProposal>): DenomChangeProposal {
    const message = createBaseDenomChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.backingDenom = object.backingDenom ?? "";
    message.backingRatio = object.backingRatio ?? "";
    return message;
  }

};

function createBaseMarketMetadata(): MarketMetadata {
  return {
    name: "",
    description: ""
  };
}

export const MarketMetadata = {
  encode(message: MarketMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMetadata();

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

  fromJSON(object: any): MarketMetadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: MarketMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketMetadata>): MarketMetadata {
    const message = createBaseMarketMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  }

};

function createBaseAddMarketsProposal(): AddMarketsProposal {
  return {
    title: "",
    description: "",
    markets: []
  };
}

export const AddMarketsProposal = {
  encode(message: AddMarketsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.markets) {
      MarketMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMarketsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMarketsProposal();

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
          message.markets.push(MarketMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AddMarketsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => MarketMetadata.fromJSON(e)) : []
    };
  },

  toJSON(message: AddMarketsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.markets) {
      obj.markets = message.markets.map(e => e ? MarketMetadata.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AddMarketsProposal>): AddMarketsProposal {
    const message = createBaseAddMarketsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.markets = object.markets?.map(e => MarketMetadata.fromPartial(e)) || [];
    return message;
  }

};