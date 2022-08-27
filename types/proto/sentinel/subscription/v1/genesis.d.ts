import { Subscription } from "./subscription";
import { Quota } from "./quota";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisSubscription {
    subscription: Subscription;
    quotas: Quota[];
}
export interface GenesisState {
    subscriptions: GenesisSubscription[];
    params: Params;
}
export declare const GenesisSubscription: {
    encode(message: GenesisSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSubscription;
    fromJSON(object: any): GenesisSubscription;
    toJSON(message: GenesisSubscription): unknown;
    fromPartial(object: DeepPartial<GenesisSubscription>): GenesisSubscription;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
