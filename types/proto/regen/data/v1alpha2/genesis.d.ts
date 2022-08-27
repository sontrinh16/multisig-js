import { ContentHash, SignerEntry, Content } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState is the genesis state */
export interface GenesisState {
    /** entries are the content entries */
    entries: GenesisContentEntry[];
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
    /** hash is the ContentHash */
    hash: ContentHash;
    /** timestamp is the anchor Timestamp */
    timestamp: Date;
    /** signers are the signers, if any */
    signers: SignerEntry[];
    /** content is the actual content if stored on-chain */
    content: Content;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisContentEntry: {
    encode(message: GenesisContentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisContentEntry;
    fromJSON(object: any): GenesisContentEntry;
    toJSON(message: GenesisContentEntry): unknown;
    fromPartial(object: DeepPartial<GenesisContentEntry>): GenesisContentEntry;
};
