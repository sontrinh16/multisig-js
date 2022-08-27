import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
    /** iri is the data IRI */
    iri: string;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
    /** iri is the data IRI */
    iri: string;
    /** signers are the addresses of the accounts which have signed the data. */
    signers: string[];
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
    /** iri is the data IRI */
    iri: string;
}
export declare const EventAnchorData: {
    encode(message: EventAnchorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAnchorData;
    fromJSON(object: any): EventAnchorData;
    toJSON(message: EventAnchorData): unknown;
    fromPartial(object: DeepPartial<EventAnchorData>): EventAnchorData;
};
export declare const EventSignData: {
    encode(message: EventSignData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSignData;
    fromJSON(object: any): EventSignData;
    toJSON(message: EventSignData): unknown;
    fromPartial(object: DeepPartial<EventSignData>): EventSignData;
};
export declare const EventStoreRawData: {
    encode(message: EventStoreRawData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventStoreRawData;
    fromJSON(object: any): EventStoreRawData;
    toJSON(message: EventStoreRawData): unknown;
    fromPartial(object: DeepPartial<EventStoreRawData>): EventStoreRawData;
};
