import { Deposit } from "../../deposit/v1/deposit";
import { GenesisState as GenesisState1 } from "../../node/v1/genesis";
import { GenesisPlan } from "../../plan/v1/genesis";
import { GenesisState as GenesisState2 } from "../../provider/v1/genesis";
import { GenesisState as GenesisState3 } from "../../session/v1/genesis";
import { GenesisState as GenesisState4 } from "../../subscription/v1/genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
    deposits: Deposit[];
    nodes: GenesisState1;
    plans: GenesisPlan[];
    providers: GenesisState2;
    sessions: GenesisState3;
    subscriptions: GenesisState4;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
