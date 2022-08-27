import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventCreate {
    owner: string;
    merkledropId: Long;
}
export interface EventClaim {
    merkledropId: Long;
    index: Long;
    coin: Coin;
}
export interface EventWithdraw {
    merkledropId: Long;
    coin: Coin;
}
export declare const EventCreate: {
    encode(message: EventCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate;
    fromJSON(object: any): EventCreate;
    toJSON(message: EventCreate): unknown;
    fromPartial(object: DeepPartial<EventCreate>): EventCreate;
};
export declare const EventClaim: {
    encode(message: EventClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim;
    fromJSON(object: any): EventClaim;
    toJSON(message: EventClaim): unknown;
    fromPartial(object: DeepPartial<EventClaim>): EventClaim;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw;
    fromJSON(object: any): EventWithdraw;
    toJSON(message: EventWithdraw): unknown;
    fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw;
};
