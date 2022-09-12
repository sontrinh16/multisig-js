import * as _719 from "./genesis";
export declare namespace vidulum {
    namespace vidulum {
        const vidulum: {
            GenesisState: {
                encode(_: _719.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.GenesisState;
                fromJSON(_: any): _719.GenesisState;
                toJSON(_: _719.GenesisState): unknown;
                fromPartial(_: {}): _719.GenesisState;
            };
        };
    }
}
