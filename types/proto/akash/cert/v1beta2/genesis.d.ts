import { Certificate } from "./cert";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
    owner: string;
    certificate: Certificate;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
    certificates: GenesisCertificate[];
}
export declare const GenesisCertificate: {
    encode(message: GenesisCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisCertificate;
    fromJSON(object: any): GenesisCertificate;
    toJSON(message: GenesisCertificate): unknown;
    fromPartial(object: DeepPartial<GenesisCertificate>): GenesisCertificate;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
