import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * GenericSubspaceAuthorization defines an authorization to perform any
 * operation only inside a specific subspace.
 */
export interface GenericSubspaceAuthorization {
    /** Ids of the subspaces inside which to grant the permission */
    subspacesIds: Long[];
    /**
     * Msg, identified by it's type URL, to grant unrestricted permissions to
     * execute within the subspace
     */
    msg: string;
}
export declare const GenericSubspaceAuthorization: {
    encode(message: GenericSubspaceAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenericSubspaceAuthorization;
    fromJSON(object: any): GenericSubspaceAuthorization;
    toJSON(message: GenericSubspaceAuthorization): unknown;
    fromPartial(object: DeepPartial<GenericSubspaceAuthorization>): GenericSubspaceAuthorization;
};
