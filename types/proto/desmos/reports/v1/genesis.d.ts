import { Reason, Report, Params } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState defines the reports module's genesis state. */
export interface GenesisState {
    subspacesData: SubspaceDataEntry[];
    reasons: Reason[];
    reports: Report[];
    params: Params;
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntry {
    /** Id of the subspace to which the data relates */
    subspaceId: Long;
    /** Id of the next reason inside the subspace */
    reasonId: number;
    /** Id of the next report inside the subspace */
    reportId: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const SubspaceDataEntry: {
    encode(message: SubspaceDataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceDataEntry;
    fromJSON(object: any): SubspaceDataEntry;
    toJSON(message: SubspaceDataEntry): unknown;
    fromPartial(object: DeepPartial<SubspaceDataEntry>): SubspaceDataEntry;
};
