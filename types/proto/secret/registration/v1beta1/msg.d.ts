import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RaAuthenticate {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface MasterCertificate {
    bytes: Uint8Array;
}
export interface Key {
    key: Uint8Array;
}
export declare const RaAuthenticate: {
    encode(message: RaAuthenticate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate;
    fromJSON(object: any): RaAuthenticate;
    toJSON(message: RaAuthenticate): unknown;
    fromPartial(object: DeepPartial<RaAuthenticate>): RaAuthenticate;
};
export declare const MasterCertificate: {
    encode(message: MasterCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MasterCertificate;
    fromJSON(object: any): MasterCertificate;
    toJSON(message: MasterCertificate): unknown;
    fromPartial(object: DeepPartial<MasterCertificate>): MasterCertificate;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: DeepPartial<Key>): Key;
};
