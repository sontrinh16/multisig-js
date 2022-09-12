import { Post, Attachment, UserAnswer, Params } from "./models";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState contains the data of the genesis state for the posts module */
export interface GenesisState {
    subspacesData: SubspaceDataEntry[];
    postsData: PostDataEntry[];
    posts: Post[];
    attachments: Attachment[];
    activePolls: ActivePollData[];
    userAnswers: UserAnswer[];
    params: Params;
}
/** SubspaceDataEntry contains the data for a given subspace */
export interface SubspaceDataEntry {
    subspaceId: Long;
    initialPostId: Long;
}
/** PostDataEntry contains the data of a given post */
export interface PostDataEntry {
    subspaceId: Long;
    postId: Long;
    initialAttachmentId: number;
}
/** ActivePollData contains the data of an active poll */
export interface ActivePollData {
    subspaceId: Long;
    postId: Long;
    pollId: number;
    endDate: Timestamp;
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
export declare const ActivePollData: {
    encode(message: ActivePollData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivePollData;
    fromJSON(object: any): ActivePollData;
    toJSON(message: ActivePollData): unknown;
    fromPartial(object: DeepPartial<ActivePollData>): ActivePollData;
};
