import * as _631 from "../pylons/pylons/jwk";
export declare namespace pylonstech {
    namespace pylons {
        const pylons: {
            JWK: {
                encode(message: _631.JWK, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _631.JWK;
                fromJSON(object: any): _631.JWK;
                toJSON(message: _631.JWK): unknown;
                fromPartial(object: {
                    kty?: string;
                    use?: string;
                    alg?: string;
                    kid?: string;
                    n?: string;
                    e?: string;
                }): _631.JWK;
            };
        };
    }
}
