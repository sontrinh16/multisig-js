import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * ApplicationLinkState defines if an application link is in the following
 * states: STARTED, ERRORED, SUCCESSFUL, TIMED_OUT
 */
export declare enum ApplicationLinkState {
    /** APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED - A link has just been initialized */
    APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED = 0,
    /** APPLICATION_LINK_STATE_VERIFICATION_STARTED - A link has just started being verified */
    APPLICATION_LINK_STATE_VERIFICATION_STARTED = 1,
    /** APPLICATION_LINK_STATE_VERIFICATION_ERROR - A link has errored during the verification process */
    APPLICATION_LINK_STATE_VERIFICATION_ERROR = 2,
    /** APPLICATION_LINK_STATE_VERIFICATION_SUCCESS - A link has being verified successfully */
    APPLICATION_LINK_STATE_VERIFICATION_SUCCESS = 3,
    /** APPLICATION_LINK_STATE_TIMED_OUT - A link has timed out while waiting for the verification */
    APPLICATION_LINK_STATE_TIMED_OUT = 4,
    UNRECOGNIZED = -1
}
export declare function applicationLinkStateFromJSON(object: any): ApplicationLinkState;
export declare function applicationLinkStateToJSON(object: ApplicationLinkState): string;
/** ApplicationLink contains the data of a link to a centralized application */
export interface ApplicationLink {
    /** User to which the link is associated */
    user: string;
    /** Data contains the details of this specific link */
    data: Data;
    /** State of the link */
    state: ApplicationLinkState;
    /** OracleRequest represents the request that has been made to the oracle */
    oracleRequest: OracleRequest;
    /**
     * Data coming from the result of the verification.
     * Only available when the state is STATE_SUCCESS
     */
    result: Result;
    /** CreationTime represents the time in which the link was created */
    creationTime: Timestamp;
}
/**
 * Data contains the data associated to a specific user of a
 * generic centralized application
 */
export interface Data {
    /** The application name (eg. Twitter, GitHub, etc) */
    application: string;
    /** Username on the application (eg. Twitter tag, GitHub profile, etc) */
    username: string;
}
/**
 * OracleRequest represents a generic oracle request used to
 * verify the ownership of a centralized application account
 */
export interface OracleRequest {
    /** ID is the ID of the request */
    id: Long;
    /** OracleScriptID is ID of an oracle script */
    oracleScriptId: Long;
    /** CallData contains the data used to perform the oracle request */
    callData: OracleRequest_CallData;
    /** ClientID represents the ID of the client that has called the oracle script */
    clientId: string;
}
/**
 * CallData contains the data sent to a single oracle request in order to
 * verify the ownership of a centralized application by a Desmos profile
 */
export interface OracleRequest_CallData {
    /** The application for which the ownership should be verified */
    application: string;
    /**
     * The hex encoded call data that should be used to verify the application
     * account ownership
     */
    callData: string;
}
/** Result represents a verification result */
export interface Result {
    /** Success represents a successful verification */
    success?: Result_Success;
    /** Failed represents a failed verification */
    failed?: Result_Failed;
}
/**
 * Success is the result of an application link that has been successfully
 * verified
 */
export interface Result_Success {
    /** Hex-encoded value that has be signed by the profile */
    value: string;
    /** Hex-encoded signature that has been produced by signing the value */
    signature: string;
}
/**
 * Failed is the result of an application link that has not been verified
 * successfully
 */
export interface Result_Failed {
    /** Error that is associated with the failure */
    error: string;
}
export declare const ApplicationLink: {
    encode(message: ApplicationLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationLink;
    fromJSON(object: any): ApplicationLink;
    toJSON(message: ApplicationLink): unknown;
    fromPartial(object: DeepPartial<ApplicationLink>): ApplicationLink;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial(object: DeepPartial<Data>): Data;
};
export declare const OracleRequest: {
    encode(message: OracleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleRequest;
    fromJSON(object: any): OracleRequest;
    toJSON(message: OracleRequest): unknown;
    fromPartial(object: DeepPartial<OracleRequest>): OracleRequest;
};
export declare const OracleRequest_CallData: {
    encode(message: OracleRequest_CallData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleRequest_CallData;
    fromJSON(object: any): OracleRequest_CallData;
    toJSON(message: OracleRequest_CallData): unknown;
    fromPartial(object: DeepPartial<OracleRequest_CallData>): OracleRequest_CallData;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    fromPartial(object: DeepPartial<Result>): Result;
};
export declare const Result_Success: {
    encode(message: Result_Success, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result_Success;
    fromJSON(object: any): Result_Success;
    toJSON(message: Result_Success): unknown;
    fromPartial(object: DeepPartial<Result_Success>): Result_Success;
};
export declare const Result_Failed: {
    encode(message: Result_Failed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result_Failed;
    fromJSON(object: any): Result_Failed;
    toJSON(message: Result_Failed): unknown;
    fromPartial(object: DeepPartial<Result_Failed>): Result_Failed;
};
