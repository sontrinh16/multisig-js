import { PaymentTemplate, PaymentContract, Subscription } from "./payments";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the payments module's genesis state. */
export interface GenesisState {
    paymentTemplates: PaymentTemplate[];
    paymentContracts: PaymentContract[];
    subscriptions: Subscription[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
