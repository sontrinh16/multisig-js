import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Report contains the data of a generic report */
export interface Report {
    /** Id of the subspace for which the report has been created */
    subspaceId: Long;
    /** Id of the report */
    id: Long;
    /** Id of the reason this report has been created for */
    reasonsIds: number[];
    /** (optional) Message attached to this report */
    message: string;
    /** Address of the reporter */
    reporter: string;
    /** Target of the report */
    target: Any;
    /** Time in which the report was created */
    creationDate: Date;
}
/** UserTarget contains the data of a report about a user */
export interface UserTarget {
    /** Address of the reported user */
    user: string;
}
/** PostTarget contains the data of a report about a post */
export interface PostTarget {
    /** Id of the reported post */
    postId: Long;
}
/** Reason contains the data about a reporting reason */
export interface Reason {
    /** Id of the subspace for which this reason is valid */
    subspaceId: Long;
    /** Id of the reason inside the subspace */
    id: number;
    /** Title of the reason */
    title: string;
    /** (optional) Extended description of the reason and the cases it applies to */
    description: string;
}
/** Params contains the module parameters */
export interface Params {
    /**
     * List of available reasons from which new subspaces can pick their default
     * ones
     */
    standardReasons: StandardReason[];
}
/**
 * StandardReason contains the data of a standard reason that can be picked and
 * used from different subspaces
 */
export interface StandardReason {
    /** Id of the reason inside the subspace */
    id: number;
    /** Title of the reason */
    title: string;
    /** (optional) Extended description of the reason and the cases it applies to */
    description: string;
}
export declare const Report: {
    encode(message: Report, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Report;
    fromJSON(object: any): Report;
    toJSON(message: Report): unknown;
    fromPartial(object: DeepPartial<Report>): Report;
};
export declare const UserTarget: {
    encode(message: UserTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserTarget;
    fromJSON(object: any): UserTarget;
    toJSON(message: UserTarget): unknown;
    fromPartial(object: DeepPartial<UserTarget>): UserTarget;
};
export declare const PostTarget: {
    encode(message: PostTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostTarget;
    fromJSON(object: any): PostTarget;
    toJSON(message: PostTarget): unknown;
    fromPartial(object: DeepPartial<PostTarget>): PostTarget;
};
export declare const Reason: {
    encode(message: Reason, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reason;
    fromJSON(object: any): Reason;
    toJSON(message: Reason): unknown;
    fromPartial(object: DeepPartial<Reason>): Reason;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const StandardReason: {
    encode(message: StandardReason, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StandardReason;
    fromJSON(object: any): StandardReason;
    toJSON(message: StandardReason): unknown;
    fromPartial(object: DeepPartial<StandardReason>): StandardReason;
};
