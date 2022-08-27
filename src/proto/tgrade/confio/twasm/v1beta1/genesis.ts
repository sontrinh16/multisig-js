import { Params, ContractInfo, Model } from "../../../../cosmwasm/wasm/v1/types";
import { Code, Sequence, GenesisState_GenMsgs } from "../../../../cosmwasm/wasm/v1/genesis";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface GenesisState {
  /** Params sdk type Params for wasmd */
  params: Params;

  /** Codes has all stored wasm codes and metadata */
  codes: Code[];

  /** Contracts contains all instantiated contracts, state and metadata */
  contracts: Contract[];

  /** Sequences names and values */
  sequences: Sequence[];

  /** GenMsgs has wasmd sdk type messages to execute in the genesis phase */
  genMsgs: GenesisState_GenMsgs[];

  /**
   * PrivilegedContractAddresses is a list of contract addresses that can have
   * special permissions
   */
  privilegedContractAddresses: string[];

  /** PinnedCodeIDs has codeInfo ids for wasm codes that are pinned in cache */
  pinnedCodeIds: Long[];
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  kvModel?: KVModel;
  customModel?: CustomModel;
}

/** KVModel is a wrapper around the wasmd default key value model. */
export interface KVModel {
  models: Model[];
}

/**
 * CustomModel contains the raw json data for a contract to seed its state on
 * import
 */
export interface CustomModel {
  /** Msg json encoded message to be passed to the contract on import */
  msg: Uint8Array;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: [],
    privilegedContractAddresses: [],
    pinnedCodeIds: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.privilegedContractAddresses) {
      writer.uint32(50).string(v!);
    }

    writer.uint32(58).fork();

    for (const v of message.pinnedCodeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
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
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;

        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
          break;

        case 6:
          message.privilegedContractAddresses.push(reader.string());
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.pinnedCodeIds.push((reader.uint64() as Long));
            }
          } else {
            message.pinnedCodeIds.push((reader.uint64() as Long));
          }

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
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
      genMsgs: Array.isArray(object?.genMsgs) ? object.genMsgs.map((e: any) => GenesisState_GenMsgs.fromJSON(e)) : [],
      privilegedContractAddresses: Array.isArray(object?.privilegedContractAddresses) ? object.privilegedContractAddresses.map((e: any) => String(e)) : [],
      pinnedCodeIds: Array.isArray(object?.pinnedCodeIds) ? object.pinnedCodeIds.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }

    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toJSON(e) : undefined);
    } else {
      obj.genMsgs = [];
    }

    if (message.privilegedContractAddresses) {
      obj.privilegedContractAddresses = message.privilegedContractAddresses.map(e => e);
    } else {
      obj.privilegedContractAddresses = [];
    }

    if (message.pinnedCodeIds) {
      obj.pinnedCodeIds = message.pinnedCodeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.pinnedCodeIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
    message.privilegedContractAddresses = object.privilegedContractAddresses?.map(e => e) || [];
    message.pinnedCodeIds = object.pinnedCodeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: undefined,
    kvModel: undefined,
    customModel: undefined
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.kvModel !== undefined) {
      KVModel.encode(message.kvModel, writer.uint32(26).fork()).ldelim();
    }

    if (message.customModel !== undefined) {
      CustomModel.encode(message.customModel, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.kvModel = KVModel.decode(reader, reader.uint32());
          break;

        case 4:
          message.customModel = CustomModel.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      kvModel: isSet(object.kvModel) ? KVModel.fromJSON(object.kvModel) : undefined,
      customModel: isSet(object.customModel) ? CustomModel.fromJSON(object.customModel) : undefined
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    message.kvModel !== undefined && (obj.kvModel = message.kvModel ? KVModel.toJSON(message.kvModel) : undefined);
    message.customModel !== undefined && (obj.customModel = message.customModel ? CustomModel.toJSON(message.customModel) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.kvModel = object.kvModel !== undefined && object.kvModel !== null ? KVModel.fromPartial(object.kvModel) : undefined;
    message.customModel = object.customModel !== undefined && object.customModel !== null ? CustomModel.fromPartial(object.customModel) : undefined;
    return message;
  }

};

function createBaseKVModel(): KVModel {
  return {
    models: []
  };
}

export const KVModel = {
  encode(message: KVModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KVModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKVModel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KVModel {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromJSON(e)) : []
    };
  },

  toJSON(message: KVModel): unknown {
    const obj: any = {};

    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.models = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<KVModel>): KVModel {
    const message = createBaseKVModel();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCustomModel(): CustomModel {
  return {
    msg: new Uint8Array()
  };
}

export const CustomModel = {
  encode(message: CustomModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomModel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CustomModel {
    return {
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: CustomModel): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<CustomModel>): CustomModel {
    const message = createBaseCustomModel();
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};