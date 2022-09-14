import * as _127 from "./fantoken/v1beta1/tx";
import * as _128 from "./merkledrop/v1beta1/events";
import * as _129 from "./merkledrop/v1beta1/genesis";
import * as _130 from "./merkledrop/v1beta1/gov";
import * as _131 from "./merkledrop/v1beta1/merkledrop";
import * as _132 from "./merkledrop/v1beta1/params";
import * as _133 from "./merkledrop/v1beta1/query";
import * as _134 from "./merkledrop/v1beta1/tx";
export declare namespace bitsong {
    const fantoken: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                issue(value: _127.MsgIssue): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mint(value: _127.MsgMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burn(value: _127.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                disableMint(value: _127.MsgDisableMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setMinter(value: _127.MsgSetMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setAuthority(value: _127.MsgSetAuthority): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setUri(value: _127.MsgSetUri): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                issue(value: _127.MsgIssue): {
                    typeUrl: string;
                    value: _127.MsgIssue;
                };
                mint(value: _127.MsgMint): {
                    typeUrl: string;
                    value: _127.MsgMint;
                };
                burn(value: _127.MsgBurn): {
                    typeUrl: string;
                    value: _127.MsgBurn;
                };
                disableMint(value: _127.MsgDisableMint): {
                    typeUrl: string;
                    value: _127.MsgDisableMint;
                };
                setMinter(value: _127.MsgSetMinter): {
                    typeUrl: string;
                    value: _127.MsgSetMinter;
                };
                setAuthority(value: _127.MsgSetAuthority): {
                    typeUrl: string;
                    value: _127.MsgSetAuthority;
                };
                setUri(value: _127.MsgSetUri): {
                    typeUrl: string;
                    value: _127.MsgSetUri;
                };
            };
            toJSON: {
                issue(value: _127.MsgIssue): {
                    typeUrl: string;
                    value: unknown;
                };
                mint(value: _127.MsgMint): {
                    typeUrl: string;
                    value: unknown;
                };
                burn(value: _127.MsgBurn): {
                    typeUrl: string;
                    value: unknown;
                };
                disableMint(value: _127.MsgDisableMint): {
                    typeUrl: string;
                    value: unknown;
                };
                setMinter(value: _127.MsgSetMinter): {
                    typeUrl: string;
                    value: unknown;
                };
                setAuthority(value: _127.MsgSetAuthority): {
                    typeUrl: string;
                    value: unknown;
                };
                setUri(value: _127.MsgSetUri): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                issue(value: any): {
                    typeUrl: string;
                    value: _127.MsgIssue;
                };
                mint(value: any): {
                    typeUrl: string;
                    value: _127.MsgMint;
                };
                burn(value: any): {
                    typeUrl: string;
                    value: _127.MsgBurn;
                };
                disableMint(value: any): {
                    typeUrl: string;
                    value: _127.MsgDisableMint;
                };
                setMinter(value: any): {
                    typeUrl: string;
                    value: _127.MsgSetMinter;
                };
                setAuthority(value: any): {
                    typeUrl: string;
                    value: _127.MsgSetAuthority;
                };
                setUri(value: any): {
                    typeUrl: string;
                    value: _127.MsgSetUri;
                };
            };
            fromPartial: {
                issue(value: _127.MsgIssue): {
                    typeUrl: string;
                    value: _127.MsgIssue;
                };
                mint(value: _127.MsgMint): {
                    typeUrl: string;
                    value: _127.MsgMint;
                };
                burn(value: _127.MsgBurn): {
                    typeUrl: string;
                    value: _127.MsgBurn;
                };
                disableMint(value: _127.MsgDisableMint): {
                    typeUrl: string;
                    value: _127.MsgDisableMint;
                };
                setMinter(value: _127.MsgSetMinter): {
                    typeUrl: string;
                    value: _127.MsgSetMinter;
                };
                setAuthority(value: _127.MsgSetAuthority): {
                    typeUrl: string;
                    value: _127.MsgSetAuthority;
                };
                setUri(value: _127.MsgSetUri): {
                    typeUrl: string;
                    value: _127.MsgSetUri;
                };
            };
        };
        AminoConverter: {
            "/bitsong.fantoken.MsgIssue": {
                aminoType: string;
                toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: _127.MsgIssue) => {
                    symbol: string;
                    name: string;
                    max_supply: string;
                    authority: string;
                    minter: string;
                    uri: string;
                };
                fromAmino: ({ symbol, name, max_supply, authority, minter, uri }: {
                    symbol: string;
                    name: string;
                    max_supply: string;
                    authority: string;
                    minter: string;
                    uri: string;
                }) => _127.MsgIssue;
            };
            "/bitsong.fantoken.MsgMint": {
                aminoType: string;
                toAmino: ({ recipient, coin, minter }: _127.MsgMint) => {
                    recipient: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                    minter: string;
                };
                fromAmino: ({ recipient, coin, minter }: {
                    recipient: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                    minter: string;
                }) => _127.MsgMint;
            };
            "/bitsong.fantoken.MsgBurn": {
                aminoType: string;
                toAmino: ({ coin, sender }: _127.MsgBurn) => {
                    coin: {
                        denom: string;
                        amount: string;
                    };
                    sender: string;
                };
                fromAmino: ({ coin, sender }: {
                    coin: {
                        denom: string;
                        amount: string;
                    };
                    sender: string;
                }) => _127.MsgBurn;
            };
            "/bitsong.fantoken.MsgDisableMint": {
                aminoType: string;
                toAmino: ({ denom, minter }: _127.MsgDisableMint) => {
                    denom: string;
                    minter: string;
                };
                fromAmino: ({ denom, minter }: {
                    denom: string;
                    minter: string;
                }) => _127.MsgDisableMint;
            };
            "/bitsong.fantoken.MsgSetMinter": {
                aminoType: string;
                toAmino: ({ denom, oldMinter, newMinter }: _127.MsgSetMinter) => {
                    denom: string;
                    old_minter: string;
                    new_minter: string;
                };
                fromAmino: ({ denom, old_minter, new_minter }: {
                    denom: string;
                    old_minter: string;
                    new_minter: string;
                }) => _127.MsgSetMinter;
            };
            "/bitsong.fantoken.MsgSetAuthority": {
                aminoType: string;
                toAmino: ({ denom, oldAuthority, newAuthority }: _127.MsgSetAuthority) => {
                    denom: string;
                    old_authority: string;
                    new_authority: string;
                };
                fromAmino: ({ denom, old_authority, new_authority }: {
                    denom: string;
                    old_authority: string;
                    new_authority: string;
                }) => _127.MsgSetAuthority;
            };
            "/bitsong.fantoken.MsgSetUri": {
                aminoType: string;
                toAmino: ({ authority, denom, uri }: _127.MsgSetUri) => {
                    authority: string;
                    denom: string;
                    uri: string;
                };
                fromAmino: ({ authority, denom, uri }: {
                    authority: string;
                    denom: string;
                    uri: string;
                }) => _127.MsgSetUri;
            };
        };
        MsgIssue: {
            encode(message: _127.MsgIssue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgIssue;
            fromJSON(object: any): _127.MsgIssue;
            toJSON(message: _127.MsgIssue): unknown;
            fromPartial(object: {
                symbol?: string;
                name?: string;
                maxSupply?: string;
                authority?: string;
                minter?: string;
                uri?: string;
            }): _127.MsgIssue;
        };
        MsgIssueResponse: {
            encode(_: _127.MsgIssueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgIssueResponse;
            fromJSON(_: any): _127.MsgIssueResponse;
            toJSON(_: _127.MsgIssueResponse): unknown;
            fromPartial(_: {}): _127.MsgIssueResponse;
        };
        MsgDisableMint: {
            encode(message: _127.MsgDisableMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgDisableMint;
            fromJSON(object: any): _127.MsgDisableMint;
            toJSON(message: _127.MsgDisableMint): unknown;
            fromPartial(object: {
                denom?: string;
                minter?: string;
            }): _127.MsgDisableMint;
        };
        MsgDisableMintResponse: {
            encode(_: _127.MsgDisableMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgDisableMintResponse;
            fromJSON(_: any): _127.MsgDisableMintResponse;
            toJSON(_: _127.MsgDisableMintResponse): unknown;
            fromPartial(_: {}): _127.MsgDisableMintResponse;
        };
        MsgMint: {
            encode(message: _127.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgMint;
            fromJSON(object: any): _127.MsgMint;
            toJSON(message: _127.MsgMint): unknown;
            fromPartial(object: {
                recipient?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                minter?: string;
            }): _127.MsgMint;
        };
        MsgMintResponse: {
            encode(_: _127.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgMintResponse;
            fromJSON(_: any): _127.MsgMintResponse;
            toJSON(_: _127.MsgMintResponse): unknown;
            fromPartial(_: {}): _127.MsgMintResponse;
        };
        MsgBurn: {
            encode(message: _127.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgBurn;
            fromJSON(object: any): _127.MsgBurn;
            toJSON(message: _127.MsgBurn): unknown;
            fromPartial(object: {
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                sender?: string;
            }): _127.MsgBurn;
        };
        MsgBurnResponse: {
            encode(_: _127.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgBurnResponse;
            fromJSON(_: any): _127.MsgBurnResponse;
            toJSON(_: _127.MsgBurnResponse): unknown;
            fromPartial(_: {}): _127.MsgBurnResponse;
        };
        MsgSetMinter: {
            encode(message: _127.MsgSetMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetMinter;
            fromJSON(object: any): _127.MsgSetMinter;
            toJSON(message: _127.MsgSetMinter): unknown;
            fromPartial(object: {
                denom?: string;
                oldMinter?: string;
                newMinter?: string;
            }): _127.MsgSetMinter;
        };
        MsgSetMinterResponse: {
            encode(_: _127.MsgSetMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetMinterResponse;
            fromJSON(_: any): _127.MsgSetMinterResponse;
            toJSON(_: _127.MsgSetMinterResponse): unknown;
            fromPartial(_: {}): _127.MsgSetMinterResponse;
        };
        MsgSetAuthority: {
            encode(message: _127.MsgSetAuthority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetAuthority;
            fromJSON(object: any): _127.MsgSetAuthority;
            toJSON(message: _127.MsgSetAuthority): unknown;
            fromPartial(object: {
                denom?: string;
                oldAuthority?: string;
                newAuthority?: string;
            }): _127.MsgSetAuthority;
        };
        MsgSetAuthorityResponse: {
            encode(_: _127.MsgSetAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetAuthorityResponse;
            fromJSON(_: any): _127.MsgSetAuthorityResponse;
            toJSON(_: _127.MsgSetAuthorityResponse): unknown;
            fromPartial(_: {}): _127.MsgSetAuthorityResponse;
        };
        MsgSetUri: {
            encode(message: _127.MsgSetUri, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetUri;
            fromJSON(object: any): _127.MsgSetUri;
            toJSON(message: _127.MsgSetUri): unknown;
            fromPartial(object: {
                authority?: string;
                denom?: string;
                uri?: string;
            }): _127.MsgSetUri;
        };
        MsgSetUriResponse: {
            encode(_: _127.MsgSetUriResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetUriResponse;
            fromJSON(_: any): _127.MsgSetUriResponse;
            toJSON(_: _127.MsgSetUriResponse): unknown;
            fromPartial(_: {}): _127.MsgSetUriResponse;
        };
    };
    namespace merkledrop {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    create(value: _134.MsgCreate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claim(value: _134.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    create(value: _134.MsgCreate): {
                        typeUrl: string;
                        value: _134.MsgCreate;
                    };
                    claim(value: _134.MsgClaim): {
                        typeUrl: string;
                        value: _134.MsgClaim;
                    };
                };
                toJSON: {
                    create(value: _134.MsgCreate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claim(value: _134.MsgClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    create(value: any): {
                        typeUrl: string;
                        value: _134.MsgCreate;
                    };
                    claim(value: any): {
                        typeUrl: string;
                        value: _134.MsgClaim;
                    };
                };
                fromPartial: {
                    create(value: _134.MsgCreate): {
                        typeUrl: string;
                        value: _134.MsgCreate;
                    };
                    claim(value: _134.MsgClaim): {
                        typeUrl: string;
                        value: _134.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/bitsong.merkledrop.v1beta1.MsgCreate": {
                    aminoType: string;
                    toAmino: ({ owner, merkleRoot, startHeight, endHeight, coin }: _134.MsgCreate) => {
                        owner: string;
                        merkle_root: string;
                        start_height: string;
                        end_height: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ owner, merkle_root, start_height, end_height, coin }: {
                        owner: string;
                        merkle_root: string;
                        start_height: string;
                        end_height: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _134.MsgCreate;
                };
                "/bitsong.merkledrop.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ sender, merkledropId, index, amount, proofs }: _134.MsgClaim) => {
                        sender: string;
                        merkledrop_id: string;
                        index: string;
                        amount: string;
                        proofs: string[];
                    };
                    fromAmino: ({ sender, merkledrop_id, index, amount, proofs }: {
                        sender: string;
                        merkledrop_id: string;
                        index: string;
                        amount: string;
                        proofs: string[];
                    }) => _134.MsgClaim;
                };
            };
            MsgCreate: {
                encode(message: _134.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreate;
                fromJSON(object: any): _134.MsgCreate;
                toJSON(message: _134.MsgCreate): unknown;
                fromPartial(object: {
                    owner?: string;
                    merkleRoot?: string;
                    startHeight?: any;
                    endHeight?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _134.MsgCreate;
            };
            MsgCreateResponse: {
                encode(message: _134.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateResponse;
                fromJSON(object: any): _134.MsgCreateResponse;
                toJSON(message: _134.MsgCreateResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                    id?: any;
                }): _134.MsgCreateResponse;
            };
            MsgClaim: {
                encode(message: _134.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgClaim;
                fromJSON(object: any): _134.MsgClaim;
                toJSON(message: _134.MsgClaim): unknown;
                fromPartial(object: {
                    sender?: string;
                    merkledropId?: any;
                    index?: any;
                    amount?: string;
                    proofs?: string[];
                }): _134.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _134.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgClaimResponse;
                fromJSON(object: any): _134.MsgClaimResponse;
                toJSON(message: _134.MsgClaimResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    index?: any;
                    amount?: string;
                }): _134.MsgClaimResponse;
            };
            QueryMerkledropRequest: {
                encode(message: _133.QueryMerkledropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryMerkledropRequest;
                fromJSON(object: any): _133.QueryMerkledropRequest;
                toJSON(message: _133.QueryMerkledropRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _133.QueryMerkledropRequest;
            };
            QueryMerkledropResponse: {
                encode(message: _133.QueryMerkledropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryMerkledropResponse;
                fromJSON(object: any): _133.QueryMerkledropResponse;
                toJSON(message: _133.QueryMerkledropResponse): unknown;
                fromPartial(object: {
                    merkledrop?: {
                        id?: any;
                        merkleRoot?: string;
                        startHeight?: any;
                        endHeight?: any;
                        denom?: string;
                        amount?: string;
                        claimed?: string;
                        owner?: string;
                    };
                }): _133.QueryMerkledropResponse;
            };
            QueryIndexClaimedRequest: {
                encode(message: _133.QueryIndexClaimedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryIndexClaimedRequest;
                fromJSON(object: any): _133.QueryIndexClaimedRequest;
                toJSON(message: _133.QueryIndexClaimedRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    index?: any;
                }): _133.QueryIndexClaimedRequest;
            };
            QueryIndexClaimedResponse: {
                encode(message: _133.QueryIndexClaimedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryIndexClaimedResponse;
                fromJSON(object: any): _133.QueryIndexClaimedResponse;
                toJSON(message: _133.QueryIndexClaimedResponse): unknown;
                fromPartial(object: {
                    isClaimed?: boolean;
                }): _133.QueryIndexClaimedResponse;
            };
            QueryParamsRequest: {
                encode(_: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                fromJSON(_: any): _133.QueryParamsRequest;
                toJSON(_: _133.QueryParamsRequest): unknown;
                fromPartial(_: {}): _133.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                fromJSON(object: any): _133.QueryParamsResponse;
                toJSON(message: _133.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        creationFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _133.QueryParamsResponse;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromJSON(object: any): _132.Params;
                toJSON(message: _132.Params): unknown;
                fromPartial(object: {
                    creationFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _132.Params;
            };
            Merkledrop: {
                encode(message: _131.Merkledrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Merkledrop;
                fromJSON(object: any): _131.Merkledrop;
                toJSON(message: _131.Merkledrop): unknown;
                fromPartial(object: {
                    id?: any;
                    merkleRoot?: string;
                    startHeight?: any;
                    endHeight?: any;
                    denom?: string;
                    amount?: string;
                    claimed?: string;
                    owner?: string;
                }): _131.Merkledrop;
            };
            UpdateFeesProposal: {
                encode(message: _130.UpdateFeesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateFeesProposal;
                fromJSON(object: any): _130.UpdateFeesProposal;
                toJSON(message: _130.UpdateFeesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creationFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _130.UpdateFeesProposal;
            };
            UpdateFeesProposalWithDeposit: {
                encode(message: _130.UpdateFeesProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateFeesProposalWithDeposit;
                fromJSON(object: any): _130.UpdateFeesProposalWithDeposit;
                toJSON(message: _130.UpdateFeesProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creationFee?: string;
                    deposit?: string;
                }): _130.UpdateFeesProposalWithDeposit;
            };
            Indexes: {
                encode(message: _129.Indexes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Indexes;
                fromJSON(object: any): _129.Indexes;
                toJSON(message: _129.Indexes): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    index?: any[];
                }): _129.Indexes;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                fromJSON(object: any): _129.GenesisState;
                toJSON(message: _129.GenesisState): unknown;
                fromPartial(object: {
                    lastMerkledropId?: any;
                    merkledrops?: {
                        id?: any;
                        merkleRoot?: string;
                        startHeight?: any;
                        endHeight?: any;
                        denom?: string;
                        amount?: string;
                        claimed?: string;
                        owner?: string;
                    }[];
                    indexes?: {
                        merkledropId?: any;
                        index?: any[];
                    }[];
                    params?: {
                        creationFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _129.GenesisState;
            };
            EventCreate: {
                encode(message: _128.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.EventCreate;
                fromJSON(object: any): _128.EventCreate;
                toJSON(message: _128.EventCreate): unknown;
                fromPartial(object: {
                    owner?: string;
                    merkledropId?: any;
                }): _128.EventCreate;
            };
            EventClaim: {
                encode(message: _128.EventClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.EventClaim;
                fromJSON(object: any): _128.EventClaim;
                toJSON(message: _128.EventClaim): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    index?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _128.EventClaim;
            };
            EventWithdraw: {
                encode(message: _128.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.EventWithdraw;
                fromJSON(object: any): _128.EventWithdraw;
                toJSON(message: _128.EventWithdraw): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _128.EventWithdraw;
            };
        };
    }
}
