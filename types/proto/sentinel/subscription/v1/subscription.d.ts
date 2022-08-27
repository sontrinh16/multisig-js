import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Subscription {
    id: Long;
    owner: string;
    node: string;
    price: Coin;
    deposit: Coin;
    plan: Long;
    denom: string;
    expiry: Date;
    free: string;
    status: Status;
    statusAt: Date;
}
export declare const Subscription: {
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    fromPartial(object: DeepPartial<Subscription>): Subscription;
};
