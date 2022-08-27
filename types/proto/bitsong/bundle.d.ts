import * as _59 from "./fantoken/v1beta1/tx";
import * as _60 from "./merkledrop/v1beta1/events";
import * as _61 from "./merkledrop/v1beta1/genesis";
import * as _62 from "./merkledrop/v1beta1/gov";
import * as _63 from "./merkledrop/v1beta1/merkledrop";
import * as _64 from "./merkledrop/v1beta1/params";
import * as _65 from "./merkledrop/v1beta1/query";
import * as _66 from "./merkledrop/v1beta1/tx";
export declare namespace bitsong {
    const fantoken: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                issue(value: _59.MsgIssue): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mint(value: _59.MsgMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burn(value: _59.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                disableMint(value: _59.MsgDisableMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setMinter(value: _59.MsgSetMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setAuthority(value: _59.MsgSetAuthority): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setUri(value: _59.MsgSetUri): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                issue(value: _59.MsgIssue): {
                    typeUrl: string;
                    value: _59.MsgIssue;
                };
                mint(value: _59.MsgMint): {
                    typeUrl: string;
                    value: _59.MsgMint;
                };
                burn(value: _59.MsgBurn): {
                    typeUrl: string;
                    value: _59.MsgBurn;
                };
                disableMint(value: _59.MsgDisableMint): {
                    typeUrl: string;
                    value: _59.MsgDisableMint;
                };
                setMinter(value: _59.MsgSetMinter): {
                    typeUrl: string;
                    value: _59.MsgSetMinter;
                };
                setAuthority(value: _59.MsgSetAuthority): {
                    typeUrl: string;
                    value: _59.MsgSetAuthority;
                };
                setUri(value: _59.MsgSetUri): {
                    typeUrl: string;
                    value: _59.MsgSetUri;
                };
            };
            toJSON: {
                issue(value: _59.MsgIssue): {
                    typeUrl: string;
                    value: unknown;
                };
                mint(value: _59.MsgMint): {
                    typeUrl: string;
                    value: unknown;
                };
                burn(value: _59.MsgBurn): {
                    typeUrl: string;
                    value: unknown;
                };
                disableMint(value: _59.MsgDisableMint): {
                    typeUrl: string;
                    value: unknown;
                };
                setMinter(value: _59.MsgSetMinter): {
                    typeUrl: string;
                    value: unknown;
                };
                setAuthority(value: _59.MsgSetAuthority): {
                    typeUrl: string;
                    value: unknown;
                };
                setUri(value: _59.MsgSetUri): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                issue(value: any): {
                    typeUrl: string;
                    value: _59.MsgIssue;
                };
                mint(value: any): {
                    typeUrl: string;
                    value: _59.MsgMint;
                };
                burn(value: any): {
                    typeUrl: string;
                    value: _59.MsgBurn;
                };
                disableMint(value: any): {
                    typeUrl: string;
                    value: _59.MsgDisableMint;
                };
                setMinter(value: any): {
                    typeUrl: string;
                    value: _59.MsgSetMinter;
                };
                setAuthority(value: any): {
                    typeUrl: string;
                    value: _59.MsgSetAuthority;
                };
                setUri(value: any): {
                    typeUrl: string;
                    value: _59.MsgSetUri;
                };
            };
            fromPartial: {
                issue(value: _59.MsgIssue): {
                    typeUrl: string;
                    value: _59.MsgIssue;
                };
                mint(value: _59.MsgMint): {
                    typeUrl: string;
                    value: _59.MsgMint;
                };
                burn(value: _59.MsgBurn): {
                    typeUrl: string;
                    value: _59.MsgBurn;
                };
                disableMint(value: _59.MsgDisableMint): {
                    typeUrl: string;
                    value: _59.MsgDisableMint;
                };
                setMinter(value: _59.MsgSetMinter): {
                    typeUrl: string;
                    value: _59.MsgSetMinter;
                };
                setAuthority(value: _59.MsgSetAuthority): {
                    typeUrl: string;
                    value: _59.MsgSetAuthority;
                };
                setUri(value: _59.MsgSetUri): {
                    typeUrl: string;
                    value: _59.MsgSetUri;
                };
            };
        };
        AminoConverter: {
            "/bitsong.fantoken.MsgIssue": {
                aminoType: string;
                toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: _59.MsgIssue) => {
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
                }) => _59.MsgIssue;
            };
            "/bitsong.fantoken.MsgMint": {
                aminoType: string;
                toAmino: ({ recipient, coin, minter }: _59.MsgMint) => {
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
                }) => _59.MsgMint;
            };
            "/bitsong.fantoken.MsgBurn": {
                aminoType: string;
                toAmino: ({ coin, sender }: _59.MsgBurn) => {
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
                }) => _59.MsgBurn;
            };
            "/bitsong.fantoken.MsgDisableMint": {
                aminoType: string;
                toAmino: ({ denom, minter }: _59.MsgDisableMint) => {
                    denom: string;
                    minter: string;
                };
                fromAmino: ({ denom, minter }: {
                    denom: string;
                    minter: string;
                }) => _59.MsgDisableMint;
            };
            "/bitsong.fantoken.MsgSetMinter": {
                aminoType: string;
                toAmino: ({ denom, oldMinter, newMinter }: _59.MsgSetMinter) => {
                    denom: string;
                    old_minter: string;
                    new_minter: string;
                };
                fromAmino: ({ denom, old_minter, new_minter }: {
                    denom: string;
                    old_minter: string;
                    new_minter: string;
                }) => _59.MsgSetMinter;
            };
            "/bitsong.fantoken.MsgSetAuthority": {
                aminoType: string;
                toAmino: ({ denom, oldAuthority, newAuthority }: _59.MsgSetAuthority) => {
                    denom: string;
                    old_authority: string;
                    new_authority: string;
                };
                fromAmino: ({ denom, old_authority, new_authority }: {
                    denom: string;
                    old_authority: string;
                    new_authority: string;
                }) => _59.MsgSetAuthority;
            };
            "/bitsong.fantoken.MsgSetUri": {
                aminoType: string;
                toAmino: ({ authority, denom, uri }: _59.MsgSetUri) => {
                    authority: string;
                    denom: string;
                    uri: string;
                };
                fromAmino: ({ authority, denom, uri }: {
                    authority: string;
                    denom: string;
                    uri: string;
                }) => _59.MsgSetUri;
            };
        };
        MsgIssue: {
            encode(message: _59.MsgIssue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgIssue;
            fromJSON(object: any): _59.MsgIssue;
            toJSON(message: _59.MsgIssue): unknown;
            fromPartial(object: {
                symbol?: string;
                name?: string;
                maxSupply?: string;
                authority?: string;
                minter?: string;
                uri?: string;
            }): _59.MsgIssue;
        };
        MsgIssueResponse: {
            encode(_: _59.MsgIssueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgIssueResponse;
            fromJSON(_: any): _59.MsgIssueResponse;
            toJSON(_: _59.MsgIssueResponse): unknown;
            fromPartial(_: {}): _59.MsgIssueResponse;
        };
        MsgDisableMint: {
            encode(message: _59.MsgDisableMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDisableMint;
            fromJSON(object: any): _59.MsgDisableMint;
            toJSON(message: _59.MsgDisableMint): unknown;
            fromPartial(object: {
                denom?: string;
                minter?: string;
            }): _59.MsgDisableMint;
        };
        MsgDisableMintResponse: {
            encode(_: _59.MsgDisableMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDisableMintResponse;
            fromJSON(_: any): _59.MsgDisableMintResponse;
            toJSON(_: _59.MsgDisableMintResponse): unknown;
            fromPartial(_: {}): _59.MsgDisableMintResponse;
        };
        MsgMint: {
            encode(message: _59.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgMint;
            fromJSON(object: any): _59.MsgMint;
            toJSON(message: _59.MsgMint): unknown;
            fromPartial(object: {
                recipient?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                minter?: string;
            }): _59.MsgMint;
        };
        MsgMintResponse: {
            encode(_: _59.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgMintResponse;
            fromJSON(_: any): _59.MsgMintResponse;
            toJSON(_: _59.MsgMintResponse): unknown;
            fromPartial(_: {}): _59.MsgMintResponse;
        };
        MsgBurn: {
            encode(message: _59.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgBurn;
            fromJSON(object: any): _59.MsgBurn;
            toJSON(message: _59.MsgBurn): unknown;
            fromPartial(object: {
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                sender?: string;
            }): _59.MsgBurn;
        };
        MsgBurnResponse: {
            encode(_: _59.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgBurnResponse;
            fromJSON(_: any): _59.MsgBurnResponse;
            toJSON(_: _59.MsgBurnResponse): unknown;
            fromPartial(_: {}): _59.MsgBurnResponse;
        };
        MsgSetMinter: {
            encode(message: _59.MsgSetMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetMinter;
            fromJSON(object: any): _59.MsgSetMinter;
            toJSON(message: _59.MsgSetMinter): unknown;
            fromPartial(object: {
                denom?: string;
                oldMinter?: string;
                newMinter?: string;
            }): _59.MsgSetMinter;
        };
        MsgSetMinterResponse: {
            encode(_: _59.MsgSetMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetMinterResponse;
            fromJSON(_: any): _59.MsgSetMinterResponse;
            toJSON(_: _59.MsgSetMinterResponse): unknown;
            fromPartial(_: {}): _59.MsgSetMinterResponse;
        };
        MsgSetAuthority: {
            encode(message: _59.MsgSetAuthority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetAuthority;
            fromJSON(object: any): _59.MsgSetAuthority;
            toJSON(message: _59.MsgSetAuthority): unknown;
            fromPartial(object: {
                denom?: string;
                oldAuthority?: string;
                newAuthority?: string;
            }): _59.MsgSetAuthority;
        };
        MsgSetAuthorityResponse: {
            encode(_: _59.MsgSetAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetAuthorityResponse;
            fromJSON(_: any): _59.MsgSetAuthorityResponse;
            toJSON(_: _59.MsgSetAuthorityResponse): unknown;
            fromPartial(_: {}): _59.MsgSetAuthorityResponse;
        };
        MsgSetUri: {
            encode(message: _59.MsgSetUri, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetUri;
            fromJSON(object: any): _59.MsgSetUri;
            toJSON(message: _59.MsgSetUri): unknown;
            fromPartial(object: {
                authority?: string;
                denom?: string;
                uri?: string;
            }): _59.MsgSetUri;
        };
        MsgSetUriResponse: {
            encode(_: _59.MsgSetUriResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSetUriResponse;
            fromJSON(_: any): _59.MsgSetUriResponse;
            toJSON(_: _59.MsgSetUriResponse): unknown;
            fromPartial(_: {}): _59.MsgSetUriResponse;
        };
    };
    namespace merkledrop {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    create(value: _66.MsgCreate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claim(value: _66.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    create(value: _66.MsgCreate): {
                        typeUrl: string;
                        value: _66.MsgCreate;
                    };
                    claim(value: _66.MsgClaim): {
                        typeUrl: string;
                        value: _66.MsgClaim;
                    };
                };
                toJSON: {
                    create(value: _66.MsgCreate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claim(value: _66.MsgClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    create(value: any): {
                        typeUrl: string;
                        value: _66.MsgCreate;
                    };
                    claim(value: any): {
                        typeUrl: string;
                        value: _66.MsgClaim;
                    };
                };
                fromPartial: {
                    create(value: _66.MsgCreate): {
                        typeUrl: string;
                        value: _66.MsgCreate;
                    };
                    claim(value: _66.MsgClaim): {
                        typeUrl: string;
                        value: _66.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/bitsong.merkledrop.v1beta1.MsgCreate": {
                    aminoType: string;
                    toAmino: ({ owner, merkleRoot, startHeight, endHeight, coin }: _66.MsgCreate) => {
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
                    }) => _66.MsgCreate;
                };
                "/bitsong.merkledrop.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ sender, merkledropId, index, amount, proofs }: _66.MsgClaim) => {
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
                    }) => _66.MsgClaim;
                };
            };
            MsgCreate: {
                encode(message: _66.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreate;
                fromJSON(object: any): _66.MsgCreate;
                toJSON(message: _66.MsgCreate): unknown;
                fromPartial(object: {
                    owner?: string;
                    merkleRoot?: string;
                    startHeight?: any;
                    endHeight?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _66.MsgCreate;
            };
            MsgCreateResponse: {
                encode(message: _66.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgCreateResponse;
                fromJSON(object: any): _66.MsgCreateResponse;
                toJSON(message: _66.MsgCreateResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                    id?: any;
                }): _66.MsgCreateResponse;
            };
            MsgClaim: {
                encode(message: _66.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgClaim;
                fromJSON(object: any): _66.MsgClaim;
                toJSON(message: _66.MsgClaim): unknown;
                fromPartial(object: {
                    sender?: string;
                    merkledropId?: any;
                    index?: any;
                    amount?: string;
                    proofs?: string[];
                }): _66.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _66.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgClaimResponse;
                fromJSON(object: any): _66.MsgClaimResponse;
                toJSON(message: _66.MsgClaimResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    index?: any;
                    amount?: string;
                }): _66.MsgClaimResponse;
            };
            QueryMerkledropRequest: {
                encode(message: _65.QueryMerkledropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryMerkledropRequest;
                fromJSON(object: any): _65.QueryMerkledropRequest;
                toJSON(message: _65.QueryMerkledropRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _65.QueryMerkledropRequest;
            };
            QueryMerkledropResponse: {
                encode(message: _65.QueryMerkledropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryMerkledropResponse;
                fromJSON(object: any): _65.QueryMerkledropResponse;
                toJSON(message: _65.QueryMerkledropResponse): unknown;
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
                }): _65.QueryMerkledropResponse;
            };
            QueryIndexClaimedRequest: {
                encode(message: _65.QueryIndexClaimedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryIndexClaimedRequest;
                fromJSON(object: any): _65.QueryIndexClaimedRequest;
                toJSON(message: _65.QueryIndexClaimedRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    index?: any;
                }): _65.QueryIndexClaimedRequest;
            };
            QueryIndexClaimedResponse: {
                encode(message: _65.QueryIndexClaimedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryIndexClaimedResponse;
                fromJSON(object: any): _65.QueryIndexClaimedResponse;
                toJSON(message: _65.QueryIndexClaimedResponse): unknown;
                fromPartial(object: {
                    isClaimed?: boolean;
                }): _65.QueryIndexClaimedResponse;
            };
            QueryParamsRequest: {
                encode(_: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsRequest;
                fromJSON(_: any): _65.QueryParamsRequest;
                toJSON(_: _65.QueryParamsRequest): unknown;
                fromPartial(_: {}): _65.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsResponse;
                fromJSON(object: any): _65.QueryParamsResponse;
                toJSON(message: _65.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        creationFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _65.QueryParamsResponse;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                fromJSON(object: any): _64.Params;
                toJSON(message: _64.Params): unknown;
                fromPartial(object: {
                    creationFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _64.Params;
            };
            Merkledrop: {
                encode(message: _63.Merkledrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Merkledrop;
                fromJSON(object: any): _63.Merkledrop;
                toJSON(message: _63.Merkledrop): unknown;
                fromPartial(object: {
                    id?: any;
                    merkleRoot?: string;
                    startHeight?: any;
                    endHeight?: any;
                    denom?: string;
                    amount?: string;
                    claimed?: string;
                    owner?: string;
                }): _63.Merkledrop;
            };
            UpdateFeesProposal: {
                encode(message: _62.UpdateFeesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UpdateFeesProposal;
                fromJSON(object: any): _62.UpdateFeesProposal;
                toJSON(message: _62.UpdateFeesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creationFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _62.UpdateFeesProposal;
            };
            UpdateFeesProposalWithDeposit: {
                encode(message: _62.UpdateFeesProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UpdateFeesProposalWithDeposit;
                fromJSON(object: any): _62.UpdateFeesProposalWithDeposit;
                toJSON(message: _62.UpdateFeesProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creationFee?: string;
                    deposit?: string;
                }): _62.UpdateFeesProposalWithDeposit;
            };
            Indexes: {
                encode(message: _61.Indexes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Indexes;
                fromJSON(object: any): _61.Indexes;
                toJSON(message: _61.Indexes): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    index?: any[];
                }): _61.Indexes;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
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
                }): _61.GenesisState;
            };
            EventCreate: {
                encode(message: _60.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreate;
                fromJSON(object: any): _60.EventCreate;
                toJSON(message: _60.EventCreate): unknown;
                fromPartial(object: {
                    owner?: string;
                    merkledropId?: any;
                }): _60.EventCreate;
            };
            EventClaim: {
                encode(message: _60.EventClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventClaim;
                fromJSON(object: any): _60.EventClaim;
                toJSON(message: _60.EventClaim): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    index?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _60.EventClaim;
            };
            EventWithdraw: {
                encode(message: _60.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventWithdraw;
                fromJSON(object: any): _60.EventWithdraw;
                toJSON(message: _60.EventWithdraw): unknown;
                fromPartial(object: {
                    merkledropId?: any;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _60.EventWithdraw;
            };
        };
    }
}
