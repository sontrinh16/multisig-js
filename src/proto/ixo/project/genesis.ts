import { ProjectDoc, GenesisAccountMap, WithdrawalInfoDocs, Claims, Params } from "./project";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the project module's genesis state. */
export interface GenesisState {
  projectDocs: ProjectDoc[];
  accountMaps: GenesisAccountMap[];
  withdrawalsInfos: WithdrawalInfoDocs[];
  claims: Claims[];
  params: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    projectDocs: [],
    accountMaps: [],
    withdrawalsInfos: [],
    claims: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectDocs) {
      ProjectDoc.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accountMaps) {
      GenesisAccountMap.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.withdrawalsInfos) {
      WithdrawalInfoDocs.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.claims) {
      Claims.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
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
          message.projectDocs.push(ProjectDoc.decode(reader, reader.uint32()));
          break;

        case 2:
          message.accountMaps.push(GenesisAccountMap.decode(reader, reader.uint32()));
          break;

        case 3:
          message.withdrawalsInfos.push(WithdrawalInfoDocs.decode(reader, reader.uint32()));
          break;

        case 4:
          message.claims.push(Claims.decode(reader, reader.uint32()));
          break;

        case 5:
          message.params = Params.decode(reader, reader.uint32());
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
      projectDocs: Array.isArray(object?.projectDocs) ? object.projectDocs.map((e: any) => ProjectDoc.fromJSON(e)) : [],
      accountMaps: Array.isArray(object?.accountMaps) ? object.accountMaps.map((e: any) => GenesisAccountMap.fromJSON(e)) : [],
      withdrawalsInfos: Array.isArray(object?.withdrawalsInfos) ? object.withdrawalsInfos.map((e: any) => WithdrawalInfoDocs.fromJSON(e)) : [],
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claims.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.projectDocs) {
      obj.projectDocs = message.projectDocs.map(e => e ? ProjectDoc.toJSON(e) : undefined);
    } else {
      obj.projectDocs = [];
    }

    if (message.accountMaps) {
      obj.accountMaps = message.accountMaps.map(e => e ? GenesisAccountMap.toJSON(e) : undefined);
    } else {
      obj.accountMaps = [];
    }

    if (message.withdrawalsInfos) {
      obj.withdrawalsInfos = message.withdrawalsInfos.map(e => e ? WithdrawalInfoDocs.toJSON(e) : undefined);
    } else {
      obj.withdrawalsInfos = [];
    }

    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claims.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.projectDocs = object.projectDocs?.map(e => ProjectDoc.fromPartial(e)) || [];
    message.accountMaps = object.accountMaps?.map(e => GenesisAccountMap.fromPartial(e)) || [];
    message.withdrawalsInfos = object.withdrawalsInfos?.map(e => WithdrawalInfoDocs.fromPartial(e)) || [];
    message.claims = object.claims?.map(e => Claims.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};