import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventSubscribe {
    id: Long;
    node: string;
    plan: Long;
}
export interface EventSetStatus {
    id: Long;
    status: Status;
}
export interface EventAddQuota {
    id: Long;
    address: string;
}
export interface EventUpdateQuota {
    id: Long;
    address: string;
}
export declare const EventSubscribe: {
    encode(message: EventSubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscribe;
    fromJSON(object: any): EventSubscribe;
    toJSON(message: EventSubscribe): unknown;
    fromPartial(object: DeepPartial<EventSubscribe>): EventSubscribe;
};
export declare const EventSetStatus: {
    encode(message: EventSetStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStatus;
    fromJSON(object: any): EventSetStatus;
    toJSON(message: EventSetStatus): unknown;
    fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus;
};
export declare const EventAddQuota: {
    encode(message: EventAddQuota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddQuota;
    fromJSON(object: any): EventAddQuota;
    toJSON(message: EventAddQuota): unknown;
    fromPartial(object: DeepPartial<EventAddQuota>): EventAddQuota;
};
export declare const EventUpdateQuota: {
    encode(message: EventUpdateQuota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateQuota;
    fromJSON(object: any): EventUpdateQuota;
    toJSON(message: EventUpdateQuota): unknown;
    fromPartial(object: DeepPartial<EventUpdateQuota>): EventUpdateQuota;
};
