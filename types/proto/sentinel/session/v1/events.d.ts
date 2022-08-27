import { Status } from "../../types/v1/status";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventStart {
    id: Long;
    node: string;
    subscription: Long;
}
export interface EventUpdate {
    id: Long;
    node: string;
    subscription: Long;
}
export interface EventSetStatus {
    id: Long;
    node: string;
    subscription: Long;
    status: Status;
}
export interface EventPay {
    id: Long;
    node: string;
    subscription: Long;
    amount: Coin;
}
export declare const EventStart: {
    encode(message: EventStart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventStart;
    fromJSON(object: any): EventStart;
    toJSON(message: EventStart): unknown;
    fromPartial(object: DeepPartial<EventStart>): EventStart;
};
export declare const EventUpdate: {
    encode(message: EventUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdate;
    fromJSON(object: any): EventUpdate;
    toJSON(message: EventUpdate): unknown;
    fromPartial(object: DeepPartial<EventUpdate>): EventUpdate;
};
export declare const EventSetStatus: {
    encode(message: EventSetStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStatus;
    fromJSON(object: any): EventSetStatus;
    toJSON(message: EventSetStatus): unknown;
    fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus;
};
export declare const EventPay: {
    encode(message: EventPay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPay;
    fromJSON(object: any): EventPay;
    toJSON(message: EventPay): unknown;
    fromPartial(object: DeepPartial<EventPay>): EventPay;
};
