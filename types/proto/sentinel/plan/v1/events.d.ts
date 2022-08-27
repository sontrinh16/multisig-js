import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventAdd {
    id: Long;
    provider: string;
}
export interface EventSetStatus {
    id: Long;
    provider: string;
    status: Status;
}
export interface EventAddNode {
    id: Long;
    node: string;
    provider: string;
}
export interface EventRemoveNode {
    id: Long;
    node: string;
    provider: string;
}
export declare const EventAdd: {
    encode(message: EventAdd, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAdd;
    fromJSON(object: any): EventAdd;
    toJSON(message: EventAdd): unknown;
    fromPartial(object: DeepPartial<EventAdd>): EventAdd;
};
export declare const EventSetStatus: {
    encode(message: EventSetStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStatus;
    fromJSON(object: any): EventSetStatus;
    toJSON(message: EventSetStatus): unknown;
    fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus;
};
export declare const EventAddNode: {
    encode(message: EventAddNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddNode;
    fromJSON(object: any): EventAddNode;
    toJSON(message: EventAddNode): unknown;
    fromPartial(object: DeepPartial<EventAddNode>): EventAddNode;
};
export declare const EventRemoveNode: {
    encode(message: EventRemoveNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveNode;
    fromJSON(object: any): EventRemoveNode;
    toJSON(message: EventRemoveNode): unknown;
    fromPartial(object: DeepPartial<EventRemoveNode>): EventRemoveNode;
};
