import * as _563 from "../pylons/pylons/jwk";
export declare namespace pylonstech {
    namespace pylons {
        const pylons: {
            JWK: {
                encode(message: _563.JWK, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.JWK;
                fromJSON(object: any): _563.JWK;
                toJSON(message: _563.JWK): unknown;
                fromPartial(object: {
                    kty?: string;
                    use?: string;
                    alg?: string;
                    kid?: string;
                    n?: string;
                    e?: string;
                }): _563.JWK;
            };
        };
    }
}
