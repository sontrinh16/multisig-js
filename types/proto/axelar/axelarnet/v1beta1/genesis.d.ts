import { Params } from "./params";
import { CosmosChain, IBCTransfer } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
    params: Params;
    collectorAddress: Uint8Array;
    chains: CosmosChain[];
    transferQueue: QueueState;
    failedTransfers: IBCTransfer[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
