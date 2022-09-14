import { Bitmap } from "../../utils/v1beta1/bitmap";
import { Chain, Asset, CrossChainAddress } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MaintainerState {
    address: Uint8Array;
    missingVotes: Bitmap;
    incorrectVotes: Bitmap;
    chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    chain: Chain;
    activated: boolean;
    assets: Asset[];
    /** @deprecated */
    maintainerStates: MaintainerState[];
}
export interface LinkedAddresses {
    depositAddress: CrossChainAddress;
    recipientAddress: CrossChainAddress;
}
export declare const MaintainerState: {
    encode(message: MaintainerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerState;
    fromJSON(object: any): MaintainerState;
    toJSON(message: MaintainerState): unknown;
    fromPartial(object: DeepPartial<MaintainerState>): MaintainerState;
};
export declare const ChainState: {
    encode(message: ChainState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainState;
    fromJSON(object: any): ChainState;
    toJSON(message: ChainState): unknown;
    fromPartial(object: DeepPartial<ChainState>): ChainState;
};
export declare const LinkedAddresses: {
    encode(message: LinkedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedAddresses;
    fromJSON(object: any): LinkedAddresses;
    toJSON(message: LinkedAddresses): unknown;
    fromPartial(object: DeepPartial<LinkedAddresses>): LinkedAddresses;
};
