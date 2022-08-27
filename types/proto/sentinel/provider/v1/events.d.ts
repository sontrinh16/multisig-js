import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventRegister {
    address: string;
}
export interface EventUpdate {
    address: string;
}
export declare const EventRegister: {
    encode(message: EventRegister, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRegister;
    fromJSON(object: any): EventRegister;
    toJSON(message: EventRegister): unknown;
    fromPartial(object: DeepPartial<EventRegister>): EventRegister;
};
export declare const EventUpdate: {
    encode(message: EventUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdate;
    fromJSON(object: any): EventUpdate;
    toJSON(message: EventUpdate): unknown;
    fromPartial(object: DeepPartial<EventUpdate>): EventUpdate;
};
