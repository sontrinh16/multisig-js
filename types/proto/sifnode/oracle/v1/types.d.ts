import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** StatusText is an enum used to represent the status of the prophecy */
export declare enum StatusText {
    /** STATUS_TEXT_UNSPECIFIED - Default value */
    STATUS_TEXT_UNSPECIFIED = 0,
    /** STATUS_TEXT_PENDING - Pending status */
    STATUS_TEXT_PENDING = 1,
    /** STATUS_TEXT_SUCCESS - Success status */
    STATUS_TEXT_SUCCESS = 2,
    /** STATUS_TEXT_FAILED - Failed status */
    STATUS_TEXT_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function statusTextFromJSON(object: any): StatusText;
export declare function statusTextToJSON(object: StatusText): string;
export interface GenesisState {
    addressWhitelist: string[];
    adminAddress: string;
    prophecies: DBProphecy[];
}
/**
 * Claim contains an arbitrary claim with arbitrary content made by a given
 * validator
 */
export interface Claim {
    id: string;
    validatorAddress: string;
    content: string;
}
/**
 * DBProphecy is what the prophecy becomes when being saved to the database.
 * Tendermint/Amino does not support maps so we must serialize those variables
 * into bytes.
 */
export interface DBProphecy {
    id: string;
    status: Status;
    claimValidators: Uint8Array;
    validatorClaims: Uint8Array;
}
/** Status is a struct that contains the status of a given prophecy */
export interface Status {
    text: StatusText;
    finalClaim: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: DeepPartial<Claim>): Claim;
};
export declare const DBProphecy: {
    encode(message: DBProphecy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DBProphecy;
    fromJSON(object: any): DBProphecy;
    toJSON(message: DBProphecy): unknown;
    fromPartial(object: DeepPartial<DBProphecy>): DBProphecy;
};
export declare const Status: {
    encode(message: Status, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Status;
    fromJSON(object: any): Status;
    toJSON(message: Status): unknown;
    fromPartial(object: DeepPartial<Status>): Status;
};
