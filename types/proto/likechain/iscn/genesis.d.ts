import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
    params: Params;
    contentIdRecords: GenesisState_ContentIdRecord[];
    iscnRecords: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
    iscnId: string;
    owner: string;
    latestVersion: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisState_ContentIdRecord: {
    encode(message: GenesisState_ContentIdRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ContentIdRecord;
    fromJSON(object: any): GenesisState_ContentIdRecord;
    toJSON(message: GenesisState_ContentIdRecord): unknown;
    fromPartial(object: DeepPartial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord;
};
