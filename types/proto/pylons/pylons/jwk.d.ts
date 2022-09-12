import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface JWK {
    /** algorithm name, e.g. RSA */
    kty: string;
    use: string;
    /** algorithm type, e.g. RSA256 */
    alg: string;
    /** app check decoding key id */
    kid: string;
    /** app check specific variable used to generate a public key to decode the token */
    n: string;
    e: string;
}
export declare const JWK: {
    encode(message: JWK, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JWK;
    fromJSON(object: any): JWK;
    toJSON(message: JWK): unknown;
    fromPartial(object: DeepPartial<JWK>): JWK;
};
