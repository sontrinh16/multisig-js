import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum AdminType {
    CLPDEX = 0,
    PMTPREWARDS = 1,
    TOKENREGISTRY = 2,
    ETHBRIDGE = 3,
    ADMIN = 4,
    MARGIN = 5,
    UNRECOGNIZED = -1
}
export declare function adminTypeFromJSON(object: any): AdminType;
export declare function adminTypeToJSON(object: AdminType): string;
export interface GenesisState {
    adminAccounts: AdminAccount[];
}
export interface AdminAccount {
    adminType: AdminType;
    adminAddress: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const AdminAccount: {
    encode(message: AdminAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminAccount;
    fromJSON(object: any): AdminAccount;
    toJSON(message: AdminAccount): unknown;
    fromPartial(object: DeepPartial<AdminAccount>): AdminAccount;
};
