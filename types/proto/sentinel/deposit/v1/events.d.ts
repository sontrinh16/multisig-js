import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventAdd {
    address: string;
    coins: Coin[];
}
export interface EventSubtract {
    address: string;
    coins: Coin[];
}
export declare const EventAdd: {
    encode(message: EventAdd, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAdd;
    fromJSON(object: any): EventAdd;
    toJSON(message: EventAdd): unknown;
    fromPartial(object: DeepPartial<EventAdd>): EventAdd;
};
export declare const EventSubtract: {
    encode(message: EventSubtract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubtract;
    fromJSON(object: any): EventSubtract;
    toJSON(message: EventSubtract): unknown;
    fromPartial(object: DeepPartial<EventSubtract>): EventSubtract;
};
