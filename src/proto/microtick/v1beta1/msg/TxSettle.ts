import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxSettleTrade {
  id: number;
  requester: Uint8Array;
}
export interface SettleLegData {
  legId: number;
  settleAccount: Uint8Array;
  settle: DecCoin;
  refundAccount: Uint8Array;
  refund: DecCoin;
}
export interface SettleTradeData {
  time: Long;
  id: number;
  final: DecCoin;
  legs: SettleLegData[];
  incentive: DecCoin;
  settler: Uint8Array;
  commission: DecCoin;
  reward: Coin;
}

function createBaseTxSettleTrade(): TxSettleTrade {
  return {
    id: 0,
    requester: new Uint8Array()
  };
}

export const TxSettleTrade = {
  encode(message: TxSettleTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.requester.length !== 0) {
      writer.uint32(18).bytes(message.requester);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxSettleTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxSettleTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.requester = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxSettleTrade {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      requester: isSet(object.requester) ? bytesFromBase64(object.requester) : new Uint8Array()
    };
  },

  toJSON(message: TxSettleTrade): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.requester !== undefined && (obj.requester = base64FromBytes(message.requester !== undefined ? message.requester : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<TxSettleTrade>): TxSettleTrade {
    const message = createBaseTxSettleTrade();
    message.id = object.id ?? 0;
    message.requester = object.requester ?? new Uint8Array();
    return message;
  }

};

function createBaseSettleLegData(): SettleLegData {
  return {
    legId: 0,
    settleAccount: new Uint8Array(),
    settle: undefined,
    refundAccount: new Uint8Array(),
    refund: undefined
  };
}

export const SettleLegData = {
  encode(message: SettleLegData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legId !== 0) {
      writer.uint32(8).uint32(message.legId);
    }

    if (message.settleAccount.length !== 0) {
      writer.uint32(18).bytes(message.settleAccount);
    }

    if (message.settle !== undefined) {
      DecCoin.encode(message.settle, writer.uint32(26).fork()).ldelim();
    }

    if (message.refundAccount.length !== 0) {
      writer.uint32(34).bytes(message.refundAccount);
    }

    if (message.refund !== undefined) {
      DecCoin.encode(message.refund, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SettleLegData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettleLegData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.legId = reader.uint32();
          break;

        case 2:
          message.settleAccount = reader.bytes();
          break;

        case 3:
          message.settle = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.refundAccount = reader.bytes();
          break;

        case 5:
          message.refund = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SettleLegData {
    return {
      legId: isSet(object.legId) ? Number(object.legId) : 0,
      settleAccount: isSet(object.settleAccount) ? bytesFromBase64(object.settleAccount) : new Uint8Array(),
      settle: isSet(object.settle) ? DecCoin.fromJSON(object.settle) : undefined,
      refundAccount: isSet(object.refundAccount) ? bytesFromBase64(object.refundAccount) : new Uint8Array(),
      refund: isSet(object.refund) ? DecCoin.fromJSON(object.refund) : undefined
    };
  },

  toJSON(message: SettleLegData): unknown {
    const obj: any = {};
    message.legId !== undefined && (obj.legId = Math.round(message.legId));
    message.settleAccount !== undefined && (obj.settleAccount = base64FromBytes(message.settleAccount !== undefined ? message.settleAccount : new Uint8Array()));
    message.settle !== undefined && (obj.settle = message.settle ? DecCoin.toJSON(message.settle) : undefined);
    message.refundAccount !== undefined && (obj.refundAccount = base64FromBytes(message.refundAccount !== undefined ? message.refundAccount : new Uint8Array()));
    message.refund !== undefined && (obj.refund = message.refund ? DecCoin.toJSON(message.refund) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SettleLegData>): SettleLegData {
    const message = createBaseSettleLegData();
    message.legId = object.legId ?? 0;
    message.settleAccount = object.settleAccount ?? new Uint8Array();
    message.settle = object.settle !== undefined && object.settle !== null ? DecCoin.fromPartial(object.settle) : undefined;
    message.refundAccount = object.refundAccount ?? new Uint8Array();
    message.refund = object.refund !== undefined && object.refund !== null ? DecCoin.fromPartial(object.refund) : undefined;
    return message;
  }

};

function createBaseSettleTradeData(): SettleTradeData {
  return {
    time: Long.ZERO,
    id: 0,
    final: undefined,
    legs: [],
    incentive: undefined,
    settler: new Uint8Array(),
    commission: undefined,
    reward: undefined
  };
}

export const SettleTradeData = {
  encode(message: SettleTradeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }

    if (message.final !== undefined) {
      DecCoin.encode(message.final, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.legs) {
      SettleLegData.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.incentive !== undefined) {
      DecCoin.encode(message.incentive, writer.uint32(42).fork()).ldelim();
    }

    if (message.settler.length !== 0) {
      writer.uint32(50).bytes(message.settler);
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(58).fork()).ldelim();
    }

    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SettleTradeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettleTradeData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.id = reader.uint32();
          break;

        case 3:
          message.final = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.legs.push(SettleLegData.decode(reader, reader.uint32()));
          break;

        case 5:
          message.incentive = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.settler = reader.bytes();
          break;

        case 7:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.reward = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SettleTradeData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      final: isSet(object.final) ? DecCoin.fromJSON(object.final) : undefined,
      legs: Array.isArray(object?.legs) ? object.legs.map((e: any) => SettleLegData.fromJSON(e)) : [],
      incentive: isSet(object.incentive) ? DecCoin.fromJSON(object.incentive) : undefined,
      settler: isSet(object.settler) ? bytesFromBase64(object.settler) : new Uint8Array(),
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },

  toJSON(message: SettleTradeData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.final !== undefined && (obj.final = message.final ? DecCoin.toJSON(message.final) : undefined);

    if (message.legs) {
      obj.legs = message.legs.map(e => e ? SettleLegData.toJSON(e) : undefined);
    } else {
      obj.legs = [];
    }

    message.incentive !== undefined && (obj.incentive = message.incentive ? DecCoin.toJSON(message.incentive) : undefined);
    message.settler !== undefined && (obj.settler = base64FromBytes(message.settler !== undefined ? message.settler : new Uint8Array()));
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SettleTradeData>): SettleTradeData {
    const message = createBaseSettleTradeData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.id = object.id ?? 0;
    message.final = object.final !== undefined && object.final !== null ? DecCoin.fromPartial(object.final) : undefined;
    message.legs = object.legs?.map(e => SettleLegData.fromPartial(e)) || [];
    message.incentive = object.incentive !== undefined && object.incentive !== null ? DecCoin.fromPartial(object.incentive) : undefined;
    message.settler = object.settler ?? new Uint8Array();
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  }

};