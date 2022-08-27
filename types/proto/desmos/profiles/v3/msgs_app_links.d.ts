import { Data } from "./models_app_links";
import { Height } from "../../../ibc/core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgLinkApplication defines a msg to connect a profile with a
 * centralized application account (eg. Twitter, GitHub, etc).
 */
export interface MsgLinkApplication {
    /** The sender of the connection request */
    sender: string;
    /** LinkData contains the data related to the application to which connect */
    linkData: Data;
    /**
     * Hex encoded call data that will be sent to the data source in order to
     * verify the link
     */
    callData: string;
    /** The port on which the packet will be sent */
    sourcePort: string;
    /** The channel by which the packet will be sent */
    sourceChannel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Height;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
}
/**
 * MsgLinkApplicationResponse defines the Msg/LinkApplication
 * response type.
 */
export interface MsgLinkApplicationResponse {
}
/**
 * MsgUnlinkApplication defines a msg to delete an application link from a user
 * profile
 */
export interface MsgUnlinkApplication {
    /** Application represents the name of the application to unlink */
    application: string;
    /** Username represents the username inside the application to unlink */
    username: string;
    /**
     * Signer represents the Desmos account to which the application should be
     * unlinked
     */
    signer: string;
}
/**
 * MsgUnlinkApplicationResponse defines the Msg/UnlinkApplication response
 * type.
 */
export interface MsgUnlinkApplicationResponse {
}
export declare const MsgLinkApplication: {
    encode(message: MsgLinkApplication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkApplication;
    fromJSON(object: any): MsgLinkApplication;
    toJSON(message: MsgLinkApplication): unknown;
    fromPartial(object: DeepPartial<MsgLinkApplication>): MsgLinkApplication;
};
export declare const MsgLinkApplicationResponse: {
    encode(_: MsgLinkApplicationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkApplicationResponse;
    fromJSON(_: any): MsgLinkApplicationResponse;
    toJSON(_: MsgLinkApplicationResponse): unknown;
    fromPartial(_: DeepPartial<MsgLinkApplicationResponse>): MsgLinkApplicationResponse;
};
export declare const MsgUnlinkApplication: {
    encode(message: MsgUnlinkApplication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkApplication;
    fromJSON(object: any): MsgUnlinkApplication;
    toJSON(message: MsgUnlinkApplication): unknown;
    fromPartial(object: DeepPartial<MsgUnlinkApplication>): MsgUnlinkApplication;
};
export declare const MsgUnlinkApplicationResponse: {
    encode(_: MsgUnlinkApplicationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkApplicationResponse;
    fromJSON(_: any): MsgUnlinkApplicationResponse;
    toJSON(_: MsgUnlinkApplicationResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnlinkApplicationResponse>): MsgUnlinkApplicationResponse;
};
