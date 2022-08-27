import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgIssue defines a message for issuing a new fan token */
export interface MsgIssue {
    /** symbol which corresponds to the symbol of the fan token. It is a string and cannot change for the whole life of the fan token */
    symbol: string;
    /** name which corresponds to the name of the fan token. It is a string and cannot change for the whole life of the fan token */
    name: string;
    /** max_supply that represents the maximum number of possible mintable tokens. It is an integer number, expressed in micro unit 10^6 */
    maxSupply: string;
    /** authority which is who can set a new uri metadata */
    authority: string;
    /** minter who is who can mint new fantoken and disable the minter process, the minter key also pay the gas fee */
    minter: string;
    /** URI which is the current uri of the fan token. It is a string can change during the fan token lifecycle thanks to the MsgEdit */
    uri: string;
}
/** MsgIssueResponse defines the MsgIssue response type */
export interface MsgIssueResponse {
}
/** MsgDisableMint defines a message for disable the mint function */
export interface MsgDisableMint {
    denom: string;
    minter: string;
}
/** MsgDisableMintResponse defines the MsgDisableMint response type */
export interface MsgDisableMintResponse {
}
/** MsgMint defines a message for minting a new fan token */
export interface MsgMint {
    recipient: string;
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin: Coin;
    minter: string;
}
/** MsgMintResponse defines the MsgMint response type */
export interface MsgMintResponse {
}
/** MsgBurn defines a message for burning some fan tokens */
export interface MsgBurn {
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin: Coin;
    sender: string;
}
/** MsgBurnResponse defines the MsgBurn response type */
export interface MsgBurnResponse {
}
/** MsgSetMinter defines a message for changing the fan token minter address */
export interface MsgSetMinter {
    /** denom the fan token denom */
    denom: string;
    /** old_minter, the actual minter */
    oldMinter: string;
    /** new_minter, the new fan token minter */
    newMinter: string;
}
/** MsgSetMinterResponse defines the MsgTransferAuthority response type */
export interface MsgSetMinterResponse {
}
/** MsgSetAuthority defines a message for changing the fan token minter address */
export interface MsgSetAuthority {
    /** denom the fan token denom */
    denom: string;
    /** old_authority, the actual metadata authority */
    oldAuthority: string;
    /** new_authority, the new fan token metadata authority */
    newAuthority: string;
}
/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */
export interface MsgSetAuthorityResponse {
}
export interface MsgSetUri {
    authority: string;
    denom: string;
    uri: string;
}
export interface MsgSetUriResponse {
}
export declare const MsgIssue: {
    encode(message: MsgIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue;
    fromJSON(object: any): MsgIssue;
    toJSON(message: MsgIssue): unknown;
    fromPartial(object: DeepPartial<MsgIssue>): MsgIssue;
};
export declare const MsgIssueResponse: {
    encode(_: MsgIssueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse;
    fromJSON(_: any): MsgIssueResponse;
    toJSON(_: MsgIssueResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueResponse>): MsgIssueResponse;
};
export declare const MsgDisableMint: {
    encode(message: MsgDisableMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMint;
    fromJSON(object: any): MsgDisableMint;
    toJSON(message: MsgDisableMint): unknown;
    fromPartial(object: DeepPartial<MsgDisableMint>): MsgDisableMint;
};
export declare const MsgDisableMintResponse: {
    encode(_: MsgDisableMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMintResponse;
    fromJSON(_: any): MsgDisableMintResponse;
    toJSON(_: MsgDisableMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgDisableMintResponse>): MsgDisableMintResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgSetMinter: {
    encode(message: MsgSetMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinter;
    fromJSON(object: any): MsgSetMinter;
    toJSON(message: MsgSetMinter): unknown;
    fromPartial(object: DeepPartial<MsgSetMinter>): MsgSetMinter;
};
export declare const MsgSetMinterResponse: {
    encode(_: MsgSetMinterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinterResponse;
    fromJSON(_: any): MsgSetMinterResponse;
    toJSON(_: MsgSetMinterResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetMinterResponse>): MsgSetMinterResponse;
};
export declare const MsgSetAuthority: {
    encode(message: MsgSetAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthority;
    fromJSON(object: any): MsgSetAuthority;
    toJSON(message: MsgSetAuthority): unknown;
    fromPartial(object: DeepPartial<MsgSetAuthority>): MsgSetAuthority;
};
export declare const MsgSetAuthorityResponse: {
    encode(_: MsgSetAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthorityResponse;
    fromJSON(_: any): MsgSetAuthorityResponse;
    toJSON(_: MsgSetAuthorityResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetAuthorityResponse>): MsgSetAuthorityResponse;
};
export declare const MsgSetUri: {
    encode(message: MsgSetUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUri;
    fromJSON(object: any): MsgSetUri;
    toJSON(message: MsgSetUri): unknown;
    fromPartial(object: DeepPartial<MsgSetUri>): MsgSetUri;
};
export declare const MsgSetUriResponse: {
    encode(_: MsgSetUriResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriResponse;
    fromJSON(_: any): MsgSetUriResponse;
    toJSON(_: MsgSetUriResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetUriResponse>): MsgSetUriResponse;
};
