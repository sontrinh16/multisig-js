import * as _787 from "./genesis";
export declare namespace vidulum {
    namespace vidulum {
        const vidulum: {
            GenesisState: {
                encode(_: _787.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.GenesisState;
                fromJSON(_: any): _787.GenesisState;
                toJSON(_: _787.GenesisState): unknown;
                fromPartial(_: {}): _787.GenesisState;
            };
        };
    }
}
