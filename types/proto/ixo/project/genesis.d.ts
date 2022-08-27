import { ProjectDoc, GenesisAccountMap, WithdrawalInfoDocs, Claims, Params } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the project module's genesis state. */
export interface GenesisState {
    projectDocs: ProjectDoc[];
    accountMaps: GenesisAccountMap[];
    withdrawalsInfos: WithdrawalInfoDocs[];
    claims: Claims[];
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
