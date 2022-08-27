import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventIssue {
    denom: string;
}
export interface EventDisableMint {
    denom: string;
}
export interface EventMint {
    recipient: string;
    coin: string;
}
export interface EventBurn {
    sender: string;
    coin: string;
}
export interface EventSetAuthority {
    denom: string;
    oldAuthority: string;
    newAuthority: string;
}
export interface EventSetMinter {
    denom: string;
    oldMinter: string;
    newMinter: string;
}
export interface EventSetUri {
    denom: string;
}
export declare const EventIssue: {
    encode(message: EventIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue;
    fromJSON(object: any): EventIssue;
    toJSON(message: EventIssue): unknown;
    fromPartial(object: DeepPartial<EventIssue>): EventIssue;
};
export declare const EventDisableMint: {
    encode(message: EventDisableMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableMint;
    fromJSON(object: any): EventDisableMint;
    toJSON(message: EventDisableMint): unknown;
    fromPartial(object: DeepPartial<EventDisableMint>): EventDisableMint;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: DeepPartial<EventMint>): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn;
    fromJSON(object: any): EventBurn;
    toJSON(message: EventBurn): unknown;
    fromPartial(object: DeepPartial<EventBurn>): EventBurn;
};
export declare const EventSetAuthority: {
    encode(message: EventSetAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAuthority;
    fromJSON(object: any): EventSetAuthority;
    toJSON(message: EventSetAuthority): unknown;
    fromPartial(object: DeepPartial<EventSetAuthority>): EventSetAuthority;
};
export declare const EventSetMinter: {
    encode(message: EventSetMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMinter;
    fromJSON(object: any): EventSetMinter;
    toJSON(message: EventSetMinter): unknown;
    fromPartial(object: DeepPartial<EventSetMinter>): EventSetMinter;
};
export declare const EventSetUri: {
    encode(message: EventSetUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUri;
    fromJSON(object: any): EventSetUri;
    toJSON(message: EventSetUri): unknown;
    fromPartial(object: DeepPartial<EventSetUri>): EventSetUri;
};
