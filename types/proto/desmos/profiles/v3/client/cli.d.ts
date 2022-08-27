import { Any } from "../../../../google/protobuf/any";
import { Proof, ChainConfig } from "../models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * ChainLinkJSON contains the data required to create a ChainLink using the CLI
 * command
 */
export interface ChainLinkJSON {
    /**
     * Address contains the data of the external chain address to be connected
     * with the Desmos profile
     */
    address: Any;
    /** Proof contains the ownership proof of the external chain address */
    proof: Proof;
    /** ChainConfig contains the configuration of the external chain */
    chainConfig: ChainConfig;
}
export declare const ChainLinkJSON: {
    encode(message: ChainLinkJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainLinkJSON;
    fromJSON(object: any): ChainLinkJSON;
    toJSON(message: ChainLinkJSON): unknown;
    fromPartial(object: DeepPartial<ChainLinkJSON>): ChainLinkJSON;
};
