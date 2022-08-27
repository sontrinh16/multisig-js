import * as _700 from "./genesis";
export declare namespace vidulum {
    namespace vidulum {
        const vidulum: {
            GenesisState: {
                encode(_: _700.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.GenesisState;
                fromJSON(_: any): _700.GenesisState;
                toJSON(_: _700.GenesisState): unknown;
                fromPartial(_: {}): _700.GenesisState;
            };
        };
    }
}
