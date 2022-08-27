import { DTagTransferRequest } from "./models_dtag_requests";
import { ChainLink } from "./models_chain_links";
import { ApplicationLink } from "./models_app_links";
import { Params } from "./models_params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the profiles module's genesis state. */
export interface GenesisState {
    dtagTransferRequests: DTagTransferRequest[];
    chainLinks: ChainLink[];
    applicationLinks: ApplicationLink[];
    defaultExternalAddresses: DefaultExternalAddressEntry[];
    ibcPortId: string;
    params: Params;
}
/** DefaultExternalAddressEntry contains the data of a default extnernal address */
export interface DefaultExternalAddressEntry {
    owner: string;
    chainName: string;
    target: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const DefaultExternalAddressEntry: {
    encode(message: DefaultExternalAddressEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultExternalAddressEntry;
    fromJSON(object: any): DefaultExternalAddressEntry;
    toJSON(message: DefaultExternalAddressEntry): unknown;
    fromPartial(object: DeepPartial<DefaultExternalAddressEntry>): DefaultExternalAddressEntry;
};
