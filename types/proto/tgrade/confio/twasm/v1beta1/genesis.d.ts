import { Params, ContractInfo, Model } from "../../../../cosmwasm/wasm/v1/types";
import { Code, Sequence, GenesisState_GenMsgs } from "../../../../cosmwasm/wasm/v1/genesis";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: DeepPartial<Contract>): Contract;
};
export declare const KVModel: {
    encode(message: KVModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KVModel;
    fromJSON(object: any): KVModel;
    toJSON(message: KVModel): unknown;
    fromPartial(object: DeepPartial<KVModel>): KVModel;
};
export declare const CustomModel: {
    encode(message: CustomModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomModel;
    fromJSON(object: any): CustomModel;
    toJSON(message: CustomModel): unknown;
    fromPartial(object: DeepPartial<CustomModel>): CustomModel;
};
