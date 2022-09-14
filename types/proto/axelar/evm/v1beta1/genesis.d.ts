import { Params } from "./params";
import { BurnerInfo, ERC20Deposit, CommandBatchMetadata, Gateway, ERC20TokenMetadata, Event } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
    chains: GenesisState_Chain[];
}
export interface GenesisState_Chain {
    params: Params;
    burnerInfos: BurnerInfo[];
    commandQueue: QueueState;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway: Gateway;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue: QueueState;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisState_Chain: {
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_Chain;
    fromJSON(object: any): GenesisState_Chain;
    toJSON(message: GenesisState_Chain): unknown;
    fromPartial(object: DeepPartial<GenesisState_Chain>): GenesisState_Chain;
};
