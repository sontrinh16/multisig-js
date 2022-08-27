import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface SeedConfig {
    masterCert: string;
    encryptedKey: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encryptedSeed: Uint8Array;
}
export declare const SeedConfig: {
    encode(message: SeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig;
    fromJSON(object: any): SeedConfig;
    toJSON(message: SeedConfig): unknown;
    fromPartial(object: DeepPartial<SeedConfig>): SeedConfig;
};
export declare const RegistrationNodeInfo: {
    encode(message: RegistrationNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo;
    fromJSON(object: any): RegistrationNodeInfo;
    toJSON(message: RegistrationNodeInfo): unknown;
    fromPartial(object: DeepPartial<RegistrationNodeInfo>): RegistrationNodeInfo;
};
