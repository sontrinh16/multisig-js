import { Params } from "./params";
import { Chain, CrossChainTransfer, TransferFee, FeeInfo } from "../exported/v1beta1/types";
import { ChainState, LinkedAddresses } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    nonce: Long;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee: TransferFee;
    feeInfos: FeeInfo[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
