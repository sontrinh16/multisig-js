import { RegisteredReaction, Reaction, SubspaceReactionsParams } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState contains the data of the genesis state for the reactions module */
export interface GenesisState {
    subspacesData: SubspaceDataEntry[];
    registeredReactions: RegisteredReaction[];
    postsData: PostDataEntry[];
    reactions: Reaction[];
    subspacesParams: SubspaceReactionsParams[];
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntry {
    subspaceId: Long;
    registeredReactionId: number;
}
/** PostDataEntry contains the data related to a single post */
export interface PostDataEntry {
    subspaceId: Long;
    postId: Long;
    reactionId: number;
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
export declare const PostDataEntry: {
    encode(message: PostDataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostDataEntry;
    fromJSON(object: any): PostDataEntry;
    toJSON(message: PostDataEntry): unknown;
    fromPartial(object: DeepPartial<PostDataEntry>): PostDataEntry;
};
