import * as _442 from "./iscn/genesis";
import * as _443 from "./iscn/iscnid";
import * as _444 from "./iscn/params";
import * as _445 from "./iscn/query";
import * as _446 from "./iscn/store";
import * as _447 from "./iscn/tx";
import * as _448 from "./likenft/v1/blind_box_content";
import * as _449 from "./likenft/v1/class_data";
import * as _450 from "./likenft/v1/class_input";
import * as _451 from "./likenft/v1/class_reveal_queue";
import * as _452 from "./likenft/v1/classes_by_account";
import * as _453 from "./likenft/v1/classes_by_iscn";
import * as _454 from "./likenft/v1/event";
import * as _455 from "./likenft/v1/genesis";
import * as _456 from "./likenft/v1/listing_expire_queue";
import * as _457 from "./likenft/v1/listing";
import * as _458 from "./likenft/v1/nft_data";
import * as _459 from "./likenft/v1/nft_input";
import * as _460 from "./likenft/v1/offer_expire_queue";
import * as _461 from "./likenft/v1/offer";
import * as _462 from "./likenft/v1/params";
import * as _463 from "./likenft/v1/query";
import * as _464 from "./likenft/v1/royalty_config";
import * as _465 from "./likenft/v1/tx";
export declare namespace likechain {
    const iscn: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createIscnRecord(value: _447.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateIscnRecord(value: _447.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeIscnRecordOwnership(value: _447.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createIscnRecord(value: _447.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _447.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _447.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _447.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _447.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _447.MsgChangeIscnRecordOwnership;
                };
            };
            toJSON: {
                createIscnRecord(value: _447.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: unknown;
                };
                updateIscnRecord(value: _447.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: unknown;
                };
                changeIscnRecordOwnership(value: _447.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createIscnRecord(value: any): {
                    typeUrl: string;
                    value: _447.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: any): {
                    typeUrl: string;
                    value: _447.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: any): {
                    typeUrl: string;
                    value: _447.MsgChangeIscnRecordOwnership;
                };
            };
            fromPartial: {
                createIscnRecord(value: _447.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _447.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _447.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _447.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _447.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _447.MsgChangeIscnRecordOwnership;
                };
            };
        };
        AminoConverter: {
            "/likechain.iscn.MsgCreateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, record }: _447.MsgCreateIscnRecord) => {
                    from: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                };
                fromAmino: ({ from, record }: {
                    from: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                }) => _447.MsgCreateIscnRecord;
            };
            "/likechain.iscn.MsgUpdateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, iscnId, record }: _447.MsgUpdateIscnRecord) => {
                    from: string;
                    iscn_id: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                };
                fromAmino: ({ from, iscn_id, record }: {
                    from: string;
                    iscn_id: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                }) => _447.MsgUpdateIscnRecord;
            };
            "/likechain.iscn.MsgChangeIscnRecordOwnership": {
                aminoType: string;
                toAmino: ({ from, iscnId, newOwner }: _447.MsgChangeIscnRecordOwnership) => {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                };
                fromAmino: ({ from, iscn_id, new_owner }: {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                }) => _447.MsgChangeIscnRecordOwnership;
            };
        };
        IscnRecord: {
            encode(message: _447.IscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.IscnRecord;
            fromJSON(object: any): _447.IscnRecord;
            toJSON(message: _447.IscnRecord): unknown;
            fromPartial(object: {
                recordNotes?: string;
                contentFingerprints?: string[];
                stakeholders?: Uint8Array[];
                contentMetadata?: Uint8Array;
            }): _447.IscnRecord;
        };
        MsgCreateIscnRecord: {
            encode(message: _447.MsgCreateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgCreateIscnRecord;
            fromJSON(object: any): _447.MsgCreateIscnRecord;
            toJSON(message: _447.MsgCreateIscnRecord): unknown;
            fromPartial(object: {
                from?: string;
                record?: {
                    recordNotes?: string;
                    contentFingerprints?: string[];
                    stakeholders?: Uint8Array[];
                    contentMetadata?: Uint8Array;
                };
            }): _447.MsgCreateIscnRecord;
        };
        MsgCreateIscnRecordResponse: {
            encode(message: _447.MsgCreateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgCreateIscnRecordResponse;
            fromJSON(object: any): _447.MsgCreateIscnRecordResponse;
            toJSON(message: _447.MsgCreateIscnRecordResponse): unknown;
            fromPartial(object: {
                iscnId?: string;
                recordIpld?: string;
            }): _447.MsgCreateIscnRecordResponse;
        };
        MsgUpdateIscnRecord: {
            encode(message: _447.MsgUpdateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgUpdateIscnRecord;
            fromJSON(object: any): _447.MsgUpdateIscnRecord;
            toJSON(message: _447.MsgUpdateIscnRecord): unknown;
            fromPartial(object: {
                from?: string;
                iscnId?: string;
                record?: {
                    recordNotes?: string;
                    contentFingerprints?: string[];
                    stakeholders?: Uint8Array[];
                    contentMetadata?: Uint8Array;
                };
            }): _447.MsgUpdateIscnRecord;
        };
        MsgUpdateIscnRecordResponse: {
            encode(message: _447.MsgUpdateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgUpdateIscnRecordResponse;
            fromJSON(object: any): _447.MsgUpdateIscnRecordResponse;
            toJSON(message: _447.MsgUpdateIscnRecordResponse): unknown;
            fromPartial(object: {
                iscnId?: string;
                recordIpld?: string;
            }): _447.MsgUpdateIscnRecordResponse;
        };
        MsgChangeIscnRecordOwnership: {
            encode(message: _447.MsgChangeIscnRecordOwnership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgChangeIscnRecordOwnership;
            fromJSON(object: any): _447.MsgChangeIscnRecordOwnership;
            toJSON(message: _447.MsgChangeIscnRecordOwnership): unknown;
            fromPartial(object: {
                from?: string;
                iscnId?: string;
                newOwner?: string;
            }): _447.MsgChangeIscnRecordOwnership;
        };
        MsgChangeIscnRecordOwnershipResponse: {
            encode(_: _447.MsgChangeIscnRecordOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.MsgChangeIscnRecordOwnershipResponse;
            fromJSON(_: any): _447.MsgChangeIscnRecordOwnershipResponse;
            toJSON(_: _447.MsgChangeIscnRecordOwnershipResponse): unknown;
            fromPartial(_: {}): _447.MsgChangeIscnRecordOwnershipResponse;
        };
        StoreRecord: {
            encode(message: _446.StoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.StoreRecord;
            fromJSON(object: any): _446.StoreRecord;
            toJSON(message: _446.StoreRecord): unknown;
            fromPartial(object: {
                iscnId?: {
                    prefix?: {
                        registryName?: string;
                        contentId?: string;
                    };
                    version?: any;
                };
                cidBytes?: Uint8Array;
                data?: Uint8Array;
            }): _446.StoreRecord;
        };
        ContentIdRecord: {
            encode(message: _446.ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.ContentIdRecord;
            fromJSON(object: any): _446.ContentIdRecord;
            toJSON(message: _446.ContentIdRecord): unknown;
            fromPartial(object: {
                ownerAddressBytes?: Uint8Array;
                latestVersion?: any;
            }): _446.ContentIdRecord;
        };
        QueryResponseRecord: {
            encode(message: _445.QueryResponseRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryResponseRecord;
            fromJSON(object: any): _445.QueryResponseRecord;
            toJSON(message: _445.QueryResponseRecord): unknown;
            fromPartial(object: {
                ipld?: string;
                data?: Uint8Array;
            }): _445.QueryResponseRecord;
        };
        QueryRecordsByIdRequest: {
            encode(message: _445.QueryRecordsByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByIdRequest;
            fromJSON(object: any): _445.QueryRecordsByIdRequest;
            toJSON(message: _445.QueryRecordsByIdRequest): unknown;
            fromPartial(object: {
                iscnId?: string;
                fromVersion?: any;
                toVersion?: any;
            }): _445.QueryRecordsByIdRequest;
        };
        QueryRecordsByIdResponse: {
            encode(message: _445.QueryRecordsByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByIdResponse;
            fromJSON(object: any): _445.QueryRecordsByIdResponse;
            toJSON(message: _445.QueryRecordsByIdResponse): unknown;
            fromPartial(object: {
                owner?: string;
                latestVersion?: any;
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
            }): _445.QueryRecordsByIdResponse;
        };
        QueryRecordsByFingerprintRequest: {
            encode(message: _445.QueryRecordsByFingerprintRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByFingerprintRequest;
            fromJSON(object: any): _445.QueryRecordsByFingerprintRequest;
            toJSON(message: _445.QueryRecordsByFingerprintRequest): unknown;
            fromPartial(object: {
                fingerprint?: string;
                fromSequence?: any;
            }): _445.QueryRecordsByFingerprintRequest;
        };
        QueryRecordsByFingerprintResponse: {
            encode(message: _445.QueryRecordsByFingerprintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByFingerprintResponse;
            fromJSON(object: any): _445.QueryRecordsByFingerprintResponse;
            toJSON(message: _445.QueryRecordsByFingerprintResponse): unknown;
            fromPartial(object: {
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
                nextSequence?: any;
            }): _445.QueryRecordsByFingerprintResponse;
        };
        QueryRecordsByOwnerRequest: {
            encode(message: _445.QueryRecordsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByOwnerRequest;
            fromJSON(object: any): _445.QueryRecordsByOwnerRequest;
            toJSON(message: _445.QueryRecordsByOwnerRequest): unknown;
            fromPartial(object: {
                owner?: string;
                fromSequence?: any;
            }): _445.QueryRecordsByOwnerRequest;
        };
        QueryRecordsByOwnerResponse: {
            encode(message: _445.QueryRecordsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryRecordsByOwnerResponse;
            fromJSON(object: any): _445.QueryRecordsByOwnerResponse;
            toJSON(message: _445.QueryRecordsByOwnerResponse): unknown;
            fromPartial(object: {
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
                nextSequence?: any;
            }): _445.QueryRecordsByOwnerResponse;
        };
        QueryParamsRequest: {
            encode(_: _445.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryParamsRequest;
            fromJSON(_: any): _445.QueryParamsRequest;
            toJSON(_: _445.QueryParamsRequest): unknown;
            fromPartial(_: {}): _445.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _445.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryParamsResponse;
            fromJSON(object: any): _445.QueryParamsResponse;
            toJSON(message: _445.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    registryName?: string;
                    feePerByte?: {
                        denom?: string;
                        amount?: string;
                    };
                };
            }): _445.QueryParamsResponse;
        };
        QueryGetCidRequest: {
            encode(message: _445.QueryGetCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryGetCidRequest;
            fromJSON(object: any): _445.QueryGetCidRequest;
            toJSON(message: _445.QueryGetCidRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _445.QueryGetCidRequest;
        };
        QueryGetCidResponse: {
            encode(message: _445.QueryGetCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryGetCidResponse;
            fromJSON(object: any): _445.QueryGetCidResponse;
            toJSON(message: _445.QueryGetCidResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _445.QueryGetCidResponse;
        };
        QueryGetCidSizeRequest: {
            encode(message: _445.QueryGetCidSizeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryGetCidSizeRequest;
            fromJSON(object: any): _445.QueryGetCidSizeRequest;
            toJSON(message: _445.QueryGetCidSizeRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _445.QueryGetCidSizeRequest;
        };
        QueryGetCidSizeResponse: {
            encode(message: _445.QueryGetCidSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryGetCidSizeResponse;
            fromJSON(object: any): _445.QueryGetCidSizeResponse;
            toJSON(message: _445.QueryGetCidSizeResponse): unknown;
            fromPartial(object: {
                size?: any;
            }): _445.QueryGetCidSizeResponse;
        };
        QueryHasCidRequest: {
            encode(message: _445.QueryHasCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryHasCidRequest;
            fromJSON(object: any): _445.QueryHasCidRequest;
            toJSON(message: _445.QueryHasCidRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _445.QueryHasCidRequest;
        };
        QueryHasCidResponse: {
            encode(message: _445.QueryHasCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryHasCidResponse;
            fromJSON(object: any): _445.QueryHasCidResponse;
            toJSON(message: _445.QueryHasCidResponse): unknown;
            fromPartial(object: {
                exist?: boolean;
            }): _445.QueryHasCidResponse;
        };
        Params: {
            encode(message: _444.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.Params;
            fromJSON(object: any): _444.Params;
            toJSON(message: _444.Params): unknown;
            fromPartial(object: {
                registryName?: string;
                feePerByte?: {
                    denom?: string;
                    amount?: string;
                };
            }): _444.Params;
        };
        IscnIdPrefix: {
            encode(message: _443.IscnIdPrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.IscnIdPrefix;
            fromJSON(object: any): _443.IscnIdPrefix;
            toJSON(message: _443.IscnIdPrefix): unknown;
            fromPartial(object: {
                registryName?: string;
                contentId?: string;
            }): _443.IscnIdPrefix;
        };
        IscnId: {
            encode(message: _443.IscnId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.IscnId;
            fromJSON(object: any): _443.IscnId;
            toJSON(message: _443.IscnId): unknown;
            fromPartial(object: {
                prefix?: {
                    registryName?: string;
                    contentId?: string;
                };
                version?: any;
            }): _443.IscnId;
        };
        GenesisState: {
            encode(message: _442.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GenesisState;
            fromJSON(object: any): _442.GenesisState;
            toJSON(message: _442.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    registryName?: string;
                    feePerByte?: {
                        denom?: string;
                        amount?: string;
                    };
                };
                contentIdRecords?: {
                    iscnId?: string;
                    owner?: string;
                    latestVersion?: any;
                }[];
                iscnRecords?: Uint8Array[];
            }): _442.GenesisState;
        };
        GenesisState_ContentIdRecord: {
            encode(message: _442.GenesisState_ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GenesisState_ContentIdRecord;
            fromJSON(object: any): _442.GenesisState_ContentIdRecord;
            toJSON(message: _442.GenesisState_ContentIdRecord): unknown;
            fromPartial(object: {
                iscnId?: string;
                owner?: string;
                latestVersion?: any;
            }): _442.GenesisState_ContentIdRecord;
        };
    };
    namespace likenft {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    newClass(value: _465.MsgNewClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClass(value: _465.MsgUpdateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _465.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _465.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBlindBoxContent(value: _465.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBlindBoxContent(value: _465.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBlindBoxContent(value: _465.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOffer(value: _465.MsgCreateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateOffer(value: _465.MsgUpdateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteOffer(value: _465.MsgDeleteOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createListing(value: _465.MsgCreateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateListing(value: _465.MsgUpdateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteListing(value: _465.MsgDeleteListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellNFT(value: _465.MsgSellNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    buyNFT(value: _465.MsgBuyNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRoyaltyConfig(value: _465.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRoyaltyConfig(value: _465.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoyaltyConfig(value: _465.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    newClass(value: _465.MsgNewClass): {
                        typeUrl: string;
                        value: _465.MsgNewClass;
                    };
                    updateClass(value: _465.MsgUpdateClass): {
                        typeUrl: string;
                        value: _465.MsgUpdateClass;
                    };
                    mintNFT(value: _465.MsgMintNFT): {
                        typeUrl: string;
                        value: _465.MsgMintNFT;
                    };
                    burnNFT(value: _465.MsgBurnNFT): {
                        typeUrl: string;
                        value: _465.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _465.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _465.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _465.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _465.MsgCreateOffer): {
                        typeUrl: string;
                        value: _465.MsgCreateOffer;
                    };
                    updateOffer(value: _465.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _465.MsgUpdateOffer;
                    };
                    deleteOffer(value: _465.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _465.MsgDeleteOffer;
                    };
                    createListing(value: _465.MsgCreateListing): {
                        typeUrl: string;
                        value: _465.MsgCreateListing;
                    };
                    updateListing(value: _465.MsgUpdateListing): {
                        typeUrl: string;
                        value: _465.MsgUpdateListing;
                    };
                    deleteListing(value: _465.MsgDeleteListing): {
                        typeUrl: string;
                        value: _465.MsgDeleteListing;
                    };
                    sellNFT(value: _465.MsgSellNFT): {
                        typeUrl: string;
                        value: _465.MsgSellNFT;
                    };
                    buyNFT(value: _465.MsgBuyNFT): {
                        typeUrl: string;
                        value: _465.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _465.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _465.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _465.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgDeleteRoyaltyConfig;
                    };
                };
                toJSON: {
                    newClass(value: _465.MsgNewClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClass(value: _465.MsgUpdateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintNFT(value: _465.MsgMintNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burnNFT(value: _465.MsgBurnNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBlindBoxContent(value: _465.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBlindBoxContent(value: _465.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteBlindBoxContent(value: _465.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createOffer(value: _465.MsgCreateOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateOffer(value: _465.MsgUpdateOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteOffer(value: _465.MsgDeleteOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createListing(value: _465.MsgCreateListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateListing(value: _465.MsgUpdateListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteListing(value: _465.MsgDeleteListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sellNFT(value: _465.MsgSellNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    buyNFT(value: _465.MsgBuyNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createRoyaltyConfig(value: _465.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRoyaltyConfig(value: _465.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRoyaltyConfig(value: _465.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    newClass(value: any): {
                        typeUrl: string;
                        value: _465.MsgNewClass;
                    };
                    updateClass(value: any): {
                        typeUrl: string;
                        value: _465.MsgUpdateClass;
                    };
                    mintNFT(value: any): {
                        typeUrl: string;
                        value: _465.MsgMintNFT;
                    };
                    burnNFT(value: any): {
                        typeUrl: string;
                        value: _465.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _465.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _465.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _465.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: any): {
                        typeUrl: string;
                        value: _465.MsgCreateOffer;
                    };
                    updateOffer(value: any): {
                        typeUrl: string;
                        value: _465.MsgUpdateOffer;
                    };
                    deleteOffer(value: any): {
                        typeUrl: string;
                        value: _465.MsgDeleteOffer;
                    };
                    createListing(value: any): {
                        typeUrl: string;
                        value: _465.MsgCreateListing;
                    };
                    updateListing(value: any): {
                        typeUrl: string;
                        value: _465.MsgUpdateListing;
                    };
                    deleteListing(value: any): {
                        typeUrl: string;
                        value: _465.MsgDeleteListing;
                    };
                    sellNFT(value: any): {
                        typeUrl: string;
                        value: _465.MsgSellNFT;
                    };
                    buyNFT(value: any): {
                        typeUrl: string;
                        value: _465.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _465.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _465.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _465.MsgDeleteRoyaltyConfig;
                    };
                };
                fromPartial: {
                    newClass(value: _465.MsgNewClass): {
                        typeUrl: string;
                        value: _465.MsgNewClass;
                    };
                    updateClass(value: _465.MsgUpdateClass): {
                        typeUrl: string;
                        value: _465.MsgUpdateClass;
                    };
                    mintNFT(value: _465.MsgMintNFT): {
                        typeUrl: string;
                        value: _465.MsgMintNFT;
                    };
                    burnNFT(value: _465.MsgBurnNFT): {
                        typeUrl: string;
                        value: _465.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _465.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _465.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _465.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _465.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _465.MsgCreateOffer): {
                        typeUrl: string;
                        value: _465.MsgCreateOffer;
                    };
                    updateOffer(value: _465.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _465.MsgUpdateOffer;
                    };
                    deleteOffer(value: _465.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _465.MsgDeleteOffer;
                    };
                    createListing(value: _465.MsgCreateListing): {
                        typeUrl: string;
                        value: _465.MsgCreateListing;
                    };
                    updateListing(value: _465.MsgUpdateListing): {
                        typeUrl: string;
                        value: _465.MsgUpdateListing;
                    };
                    deleteListing(value: _465.MsgDeleteListing): {
                        typeUrl: string;
                        value: _465.MsgDeleteListing;
                    };
                    sellNFT(value: _465.MsgSellNFT): {
                        typeUrl: string;
                        value: _465.MsgSellNFT;
                    };
                    buyNFT(value: _465.MsgBuyNFT): {
                        typeUrl: string;
                        value: _465.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _465.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _465.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _465.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _465.MsgDeleteRoyaltyConfig;
                    };
                };
            };
            AminoConverter: {
                "/likechain.likenft.v1.MsgNewClass": {
                    aminoType: string;
                    toAmino: ({ creator, parent, input }: _465.MsgNewClass) => {
                        creator: string;
                        parent: {
                            type: number;
                            iscn_id_prefix: string;
                        };
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    };
                    fromAmino: ({ creator, parent, input }: {
                        creator: string;
                        parent: {
                            type: number;
                            iscn_id_prefix: string;
                        };
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    }) => _465.MsgNewClass;
                };
                "/likechain.likenft.v1.MsgUpdateClass": {
                    aminoType: string;
                    toAmino: ({ creator, classId, input }: _465.MsgUpdateClass) => {
                        creator: string;
                        class_id: string;
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    };
                    fromAmino: ({ creator, class_id, input }: {
                        creator: string;
                        class_id: string;
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    }) => _465.MsgUpdateClass;
                };
                "/likechain.likenft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _465.MsgMintNFT) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _465.MsgMintNFT;
                };
                "/likechain.likenft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _465.MsgBurnNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _465.MsgBurnNFT;
                };
                "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _465.MsgCreateBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _465.MsgCreateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _465.MsgUpdateBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _465.MsgUpdateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id }: _465.MsgDeleteBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                    };
                    fromAmino: ({ creator, class_id, id }: {
                        creator: string;
                        class_id: string;
                        id: string;
                    }) => _465.MsgDeleteBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgCreateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _465.MsgCreateOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _465.MsgCreateOffer;
                };
                "/likechain.likenft.v1.MsgUpdateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _465.MsgUpdateOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _465.MsgUpdateOffer;
                };
                "/likechain.likenft.v1.MsgDeleteOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _465.MsgDeleteOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _465.MsgDeleteOffer;
                };
                "/likechain.likenft.v1.MsgCreateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _465.MsgCreateListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _465.MsgCreateListing;
                };
                "/likechain.likenft.v1.MsgUpdateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _465.MsgUpdateListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _465.MsgUpdateListing;
                };
                "/likechain.likenft.v1.MsgDeleteListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _465.MsgDeleteListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _465.MsgDeleteListing;
                };
                "/likechain.likenft.v1.MsgSellNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, buyer, price }: _465.MsgSellNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        buyer: string;
                        price: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id, buyer, price }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        buyer: string;
                        price: string;
                    }) => _465.MsgSellNFT;
                };
                "/likechain.likenft.v1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, seller, price }: _465.MsgBuyNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        seller: string;
                        price: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id, seller, price }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        seller: string;
                        price: string;
                    }) => _465.MsgBuyNFT;
                };
                "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _465.MsgCreateRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    };
                    fromAmino: ({ creator, class_id, royalty_config }: {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    }) => _465.MsgCreateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _465.MsgUpdateRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    };
                    fromAmino: ({ creator, class_id, royalty_config }: {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    }) => _465.MsgUpdateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId }: _465.MsgDeleteRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                    };
                    fromAmino: ({ creator, class_id }: {
                        creator: string;
                        class_id: string;
                    }) => _465.MsgDeleteRoyaltyConfig;
                };
            };
            MsgNewClass: {
                encode(message: _465.MsgNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgNewClass;
                fromJSON(object: any): _465.MsgNewClass;
                toJSON(message: _465.MsgNewClass): unknown;
                fromPartial(object: {
                    creator?: string;
                    parent?: {
                        type?: _449.ClassParentType;
                        iscnIdPrefix?: string;
                    };
                    input?: {
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                        config?: {
                            burnable?: boolean;
                            maxSupply?: any;
                            blindBoxConfig?: {
                                mintPeriods?: {
                                    startTime?: Date;
                                    allowedAddresses?: string[];
                                    mintPrice?: any;
                                }[];
                                revealTime?: Date;
                            };
                        };
                    };
                }): _465.MsgNewClass;
            };
            MsgNewClassResponse: {
                encode(message: _465.MsgNewClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgNewClassResponse;
                fromJSON(object: any): _465.MsgNewClassResponse;
                toJSON(message: _465.MsgNewClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _465.MsgNewClassResponse;
            };
            MsgUpdateClass: {
                encode(message: _465.MsgUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateClass;
                fromJSON(object: any): _465.MsgUpdateClass;
                toJSON(message: _465.MsgUpdateClass): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    input?: {
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                        config?: {
                            burnable?: boolean;
                            maxSupply?: any;
                            blindBoxConfig?: {
                                mintPeriods?: {
                                    startTime?: Date;
                                    allowedAddresses?: string[];
                                    mintPrice?: any;
                                }[];
                                revealTime?: Date;
                            };
                        };
                    };
                }): _465.MsgUpdateClass;
            };
            MsgUpdateClassResponse: {
                encode(message: _465.MsgUpdateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateClassResponse;
                fromJSON(object: any): _465.MsgUpdateClassResponse;
                toJSON(message: _465.MsgUpdateClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _465.MsgUpdateClassResponse;
            };
            MsgMintNFT: {
                encode(message: _465.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgMintNFT;
                fromJSON(object: any): _465.MsgMintNFT;
                toJSON(message: _465.MsgMintNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _465.MsgMintNFT;
            };
            MsgMintNFTResponse: {
                encode(message: _465.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgMintNFTResponse;
                fromJSON(object: any): _465.MsgMintNFTResponse;
                toJSON(message: _465.MsgMintNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _465.MsgMintNFTResponse;
            };
            MsgBurnNFT: {
                encode(message: _465.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgBurnNFT;
                fromJSON(object: any): _465.MsgBurnNFT;
                toJSON(message: _465.MsgBurnNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _465.MsgBurnNFT;
            };
            MsgBurnNFTResponse: {
                encode(_: _465.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgBurnNFTResponse;
                fromJSON(_: any): _465.MsgBurnNFTResponse;
                toJSON(_: _465.MsgBurnNFTResponse): unknown;
                fromPartial(_: {}): _465.MsgBurnNFTResponse;
            };
            MsgCreateBlindBoxContent: {
                encode(message: _465.MsgCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateBlindBoxContent;
                fromJSON(object: any): _465.MsgCreateBlindBoxContent;
                toJSON(message: _465.MsgCreateBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _465.MsgCreateBlindBoxContent;
            };
            MsgCreateBlindBoxContentResponse: {
                encode(message: _465.MsgCreateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateBlindBoxContentResponse;
                fromJSON(object: any): _465.MsgCreateBlindBoxContentResponse;
                toJSON(message: _465.MsgCreateBlindBoxContentResponse): unknown;
                fromPartial(object: {
                    blindBoxContent?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    };
                }): _465.MsgCreateBlindBoxContentResponse;
            };
            MsgUpdateBlindBoxContent: {
                encode(message: _465.MsgUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateBlindBoxContent;
                fromJSON(object: any): _465.MsgUpdateBlindBoxContent;
                toJSON(message: _465.MsgUpdateBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _465.MsgUpdateBlindBoxContent;
            };
            MsgUpdateBlindBoxContentResponse: {
                encode(message: _465.MsgUpdateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateBlindBoxContentResponse;
                fromJSON(object: any): _465.MsgUpdateBlindBoxContentResponse;
                toJSON(message: _465.MsgUpdateBlindBoxContentResponse): unknown;
                fromPartial(object: {
                    blindBoxContent?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    };
                }): _465.MsgUpdateBlindBoxContentResponse;
            };
            MsgDeleteBlindBoxContent: {
                encode(message: _465.MsgDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteBlindBoxContent;
                fromJSON(object: any): _465.MsgDeleteBlindBoxContent;
                toJSON(message: _465.MsgDeleteBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                }): _465.MsgDeleteBlindBoxContent;
            };
            MsgDeleteBlindBoxContentResponse: {
                encode(_: _465.MsgDeleteBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteBlindBoxContentResponse;
                fromJSON(_: any): _465.MsgDeleteBlindBoxContentResponse;
                toJSON(_: _465.MsgDeleteBlindBoxContentResponse): unknown;
                fromPartial(_: {}): _465.MsgDeleteBlindBoxContentResponse;
            };
            MsgCreateOffer: {
                encode(message: _465.MsgCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateOffer;
                fromJSON(object: any): _465.MsgCreateOffer;
                toJSON(message: _465.MsgCreateOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: Date;
                }): _465.MsgCreateOffer;
            };
            MsgCreateOfferResponse: {
                encode(message: _465.MsgCreateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateOfferResponse;
                fromJSON(object: any): _465.MsgCreateOfferResponse;
                toJSON(message: _465.MsgCreateOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _465.MsgCreateOfferResponse;
            };
            MsgUpdateOffer: {
                encode(message: _465.MsgUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateOffer;
                fromJSON(object: any): _465.MsgUpdateOffer;
                toJSON(message: _465.MsgUpdateOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: Date;
                }): _465.MsgUpdateOffer;
            };
            MsgUpdateOfferResponse: {
                encode(message: _465.MsgUpdateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateOfferResponse;
                fromJSON(object: any): _465.MsgUpdateOfferResponse;
                toJSON(message: _465.MsgUpdateOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _465.MsgUpdateOfferResponse;
            };
            MsgDeleteOffer: {
                encode(message: _465.MsgDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteOffer;
                fromJSON(object: any): _465.MsgDeleteOffer;
                toJSON(message: _465.MsgDeleteOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _465.MsgDeleteOffer;
            };
            MsgDeleteOfferResponse: {
                encode(_: _465.MsgDeleteOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteOfferResponse;
                fromJSON(_: any): _465.MsgDeleteOfferResponse;
                toJSON(_: _465.MsgDeleteOfferResponse): unknown;
                fromPartial(_: {}): _465.MsgDeleteOfferResponse;
            };
            MsgCreateListing: {
                encode(message: _465.MsgCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateListing;
                fromJSON(object: any): _465.MsgCreateListing;
                toJSON(message: _465.MsgCreateListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: Date;
                }): _465.MsgCreateListing;
            };
            MsgCreateListingResponse: {
                encode(message: _465.MsgCreateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateListingResponse;
                fromJSON(object: any): _465.MsgCreateListingResponse;
                toJSON(message: _465.MsgCreateListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _465.MsgCreateListingResponse;
            };
            MsgUpdateListing: {
                encode(message: _465.MsgUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateListing;
                fromJSON(object: any): _465.MsgUpdateListing;
                toJSON(message: _465.MsgUpdateListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: Date;
                }): _465.MsgUpdateListing;
            };
            MsgUpdateListingResponse: {
                encode(message: _465.MsgUpdateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateListingResponse;
                fromJSON(object: any): _465.MsgUpdateListingResponse;
                toJSON(message: _465.MsgUpdateListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _465.MsgUpdateListingResponse;
            };
            MsgDeleteListing: {
                encode(message: _465.MsgDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteListing;
                fromJSON(object: any): _465.MsgDeleteListing;
                toJSON(message: _465.MsgDeleteListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _465.MsgDeleteListing;
            };
            MsgDeleteListingResponse: {
                encode(_: _465.MsgDeleteListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteListingResponse;
                fromJSON(_: any): _465.MsgDeleteListingResponse;
                toJSON(_: _465.MsgDeleteListingResponse): unknown;
                fromPartial(_: {}): _465.MsgDeleteListingResponse;
            };
            MsgSellNFT: {
                encode(message: _465.MsgSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgSellNFT;
                fromJSON(object: any): _465.MsgSellNFT;
                toJSON(message: _465.MsgSellNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    price?: any;
                }): _465.MsgSellNFT;
            };
            MsgSellNFTResponse: {
                encode(_: _465.MsgSellNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgSellNFTResponse;
                fromJSON(_: any): _465.MsgSellNFTResponse;
                toJSON(_: _465.MsgSellNFTResponse): unknown;
                fromPartial(_: {}): _465.MsgSellNFTResponse;
            };
            MsgBuyNFT: {
                encode(message: _465.MsgBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgBuyNFT;
                fromJSON(object: any): _465.MsgBuyNFT;
                toJSON(message: _465.MsgBuyNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    price?: any;
                }): _465.MsgBuyNFT;
            };
            MsgBuyNFTResponse: {
                encode(_: _465.MsgBuyNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgBuyNFTResponse;
                fromJSON(_: any): _465.MsgBuyNFTResponse;
                toJSON(_: _465.MsgBuyNFTResponse): unknown;
                fromPartial(_: {}): _465.MsgBuyNFTResponse;
            };
            MsgCreateRoyaltyConfig: {
                encode(message: _465.MsgCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateRoyaltyConfig;
                fromJSON(object: any): _465.MsgCreateRoyaltyConfig;
                toJSON(message: _465.MsgCreateRoyaltyConfig): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: string;
                            weight?: any;
                        }[];
                    };
                }): _465.MsgCreateRoyaltyConfig;
            };
            MsgCreateRoyaltyConfigResponse: {
                encode(message: _465.MsgCreateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateRoyaltyConfigResponse;
                fromJSON(object: any): _465.MsgCreateRoyaltyConfigResponse;
                toJSON(message: _465.MsgCreateRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _465.MsgCreateRoyaltyConfigResponse;
            };
            MsgUpdateRoyaltyConfig: {
                encode(message: _465.MsgUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateRoyaltyConfig;
                fromJSON(object: any): _465.MsgUpdateRoyaltyConfig;
                toJSON(message: _465.MsgUpdateRoyaltyConfig): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: string;
                            weight?: any;
                        }[];
                    };
                }): _465.MsgUpdateRoyaltyConfig;
            };
            MsgUpdateRoyaltyConfigResponse: {
                encode(message: _465.MsgUpdateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgUpdateRoyaltyConfigResponse;
                fromJSON(object: any): _465.MsgUpdateRoyaltyConfigResponse;
                toJSON(message: _465.MsgUpdateRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _465.MsgUpdateRoyaltyConfigResponse;
            };
            MsgDeleteRoyaltyConfig: {
                encode(message: _465.MsgDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteRoyaltyConfig;
                fromJSON(object: any): _465.MsgDeleteRoyaltyConfig;
                toJSON(message: _465.MsgDeleteRoyaltyConfig): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                }): _465.MsgDeleteRoyaltyConfig;
            };
            MsgDeleteRoyaltyConfigResponse: {
                encode(_: _465.MsgDeleteRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgDeleteRoyaltyConfigResponse;
                fromJSON(_: any): _465.MsgDeleteRoyaltyConfigResponse;
                toJSON(_: _465.MsgDeleteRoyaltyConfigResponse): unknown;
                fromPartial(_: {}): _465.MsgDeleteRoyaltyConfigResponse;
            };
            RoyaltyConfigByClass: {
                encode(message: _464.RoyaltyConfigByClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.RoyaltyConfigByClass;
                fromJSON(object: any): _464.RoyaltyConfigByClass;
                toJSON(message: _464.RoyaltyConfigByClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _464.RoyaltyConfigByClass;
            };
            RoyaltyConfig: {
                encode(message: _464.RoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.RoyaltyConfig;
                fromJSON(object: any): _464.RoyaltyConfig;
                toJSON(message: _464.RoyaltyConfig): unknown;
                fromPartial(object: {
                    rateBasisPoints?: any;
                    stakeholders?: {
                        account?: Uint8Array;
                        weight?: any;
                    }[];
                }): _464.RoyaltyConfig;
            };
            RoyaltyStakeholder: {
                encode(message: _464.RoyaltyStakeholder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.RoyaltyStakeholder;
                fromJSON(object: any): _464.RoyaltyStakeholder;
                toJSON(message: _464.RoyaltyStakeholder): unknown;
                fromPartial(object: {
                    account?: Uint8Array;
                    weight?: any;
                }): _464.RoyaltyStakeholder;
            };
            RoyaltyConfigInput: {
                encode(message: _464.RoyaltyConfigInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.RoyaltyConfigInput;
                fromJSON(object: any): _464.RoyaltyConfigInput;
                toJSON(message: _464.RoyaltyConfigInput): unknown;
                fromPartial(object: {
                    rateBasisPoints?: any;
                    stakeholders?: {
                        account?: string;
                        weight?: any;
                    }[];
                }): _464.RoyaltyConfigInput;
            };
            RoyaltyStakeholderInput: {
                encode(message: _464.RoyaltyStakeholderInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.RoyaltyStakeholderInput;
                fromJSON(object: any): _464.RoyaltyStakeholderInput;
                toJSON(message: _464.RoyaltyStakeholderInput): unknown;
                fromPartial(object: {
                    account?: string;
                    weight?: any;
                }): _464.RoyaltyStakeholderInput;
            };
            QueryParamsRequest: {
                encode(_: _463.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryParamsRequest;
                fromJSON(_: any): _463.QueryParamsRequest;
                toJSON(_: _463.QueryParamsRequest): unknown;
                fromPartial(_: {}): _463.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _463.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryParamsResponse;
                fromJSON(object: any): _463.QueryParamsResponse;
                toJSON(message: _463.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        priceDenom?: string;
                        feePerByte?: {
                            denom?: string;
                            amount?: string;
                        };
                        maxOfferDurationDays?: any;
                        maxListingDurationDays?: any;
                        maxRoyaltyBasisPoints?: any;
                    };
                }): _463.QueryParamsResponse;
            };
            QueryClassesByISCNRequest: {
                encode(message: _463.QueryClassesByISCNRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByISCNRequest;
                fromJSON(object: any): _463.QueryClassesByISCNRequest;
                toJSON(message: _463.QueryClassesByISCNRequest): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryClassesByISCNRequest;
            };
            QueryClassesByISCNResponse: {
                encode(message: _463.QueryClassesByISCNResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByISCNResponse;
                fromJSON(object: any): _463.QueryClassesByISCNResponse;
                toJSON(message: _463.QueryClassesByISCNResponse): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryClassesByISCNResponse;
            };
            QueryClassesByISCNIndexRequest: {
                encode(message: _463.QueryClassesByISCNIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByISCNIndexRequest;
                fromJSON(object: any): _463.QueryClassesByISCNIndexRequest;
                toJSON(message: _463.QueryClassesByISCNIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryClassesByISCNIndexRequest;
            };
            QueryClassesByISCNIndexResponse: {
                encode(message: _463.QueryClassesByISCNIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByISCNIndexResponse;
                fromJSON(object: any): _463.QueryClassesByISCNIndexResponse;
                toJSON(message: _463.QueryClassesByISCNIndexResponse): unknown;
                fromPartial(object: {
                    classesByIscns?: {
                        iscnIdPrefix?: string;
                        classIds?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryClassesByISCNIndexResponse;
            };
            QueryISCNByClassRequest: {
                encode(message: _463.QueryISCNByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryISCNByClassRequest;
                fromJSON(object: any): _463.QueryISCNByClassRequest;
                toJSON(message: _463.QueryISCNByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _463.QueryISCNByClassRequest;
            };
            QueryISCNByClassResponse: {
                encode(message: _463.QueryISCNByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryISCNByClassResponse;
                fromJSON(object: any): _463.QueryISCNByClassResponse;
                toJSON(message: _463.QueryISCNByClassResponse): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    owner?: string;
                    latestVersion?: any;
                    latestRecord?: {
                        ipld?: string;
                        data?: Uint8Array;
                    };
                }): _463.QueryISCNByClassResponse;
            };
            QueryClassesByAccountRequest: {
                encode(message: _463.QueryClassesByAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByAccountRequest;
                fromJSON(object: any): _463.QueryClassesByAccountRequest;
                toJSON(message: _463.QueryClassesByAccountRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryClassesByAccountRequest;
            };
            QueryClassesByAccountResponse: {
                encode(message: _463.QueryClassesByAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByAccountResponse;
                fromJSON(object: any): _463.QueryClassesByAccountResponse;
                toJSON(message: _463.QueryClassesByAccountResponse): unknown;
                fromPartial(object: {
                    account?: string;
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryClassesByAccountResponse;
            };
            QueryClassesByAccountIndexRequest: {
                encode(message: _463.QueryClassesByAccountIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByAccountIndexRequest;
                fromJSON(object: any): _463.QueryClassesByAccountIndexRequest;
                toJSON(message: _463.QueryClassesByAccountIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryClassesByAccountIndexRequest;
            };
            QueryClassesByAccountIndexResponse: {
                encode(message: _463.QueryClassesByAccountIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryClassesByAccountIndexResponse;
                fromJSON(object: any): _463.QueryClassesByAccountIndexResponse;
                toJSON(message: _463.QueryClassesByAccountIndexResponse): unknown;
                fromPartial(object: {
                    classesByAccounts?: {
                        account?: string;
                        classIds?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryClassesByAccountIndexResponse;
            };
            QueryAccountByClassRequest: {
                encode(message: _463.QueryAccountByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryAccountByClassRequest;
                fromJSON(object: any): _463.QueryAccountByClassRequest;
                toJSON(message: _463.QueryAccountByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _463.QueryAccountByClassRequest;
            };
            QueryAccountByClassResponse: {
                encode(message: _463.QueryAccountByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryAccountByClassResponse;
                fromJSON(object: any): _463.QueryAccountByClassResponse;
                toJSON(message: _463.QueryAccountByClassResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _463.QueryAccountByClassResponse;
            };
            QueryBlindBoxContentRequest: {
                encode(message: _463.QueryBlindBoxContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentRequest;
                fromJSON(object: any): _463.QueryBlindBoxContentRequest;
                toJSON(message: _463.QueryBlindBoxContentRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _463.QueryBlindBoxContentRequest;
            };
            QueryBlindBoxContentResponse: {
                encode(message: _463.QueryBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentResponse;
                fromJSON(object: any): _463.QueryBlindBoxContentResponse;
                toJSON(message: _463.QueryBlindBoxContentResponse): unknown;
                fromPartial(object: {
                    blindBoxContent?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    };
                }): _463.QueryBlindBoxContentResponse;
            };
            QueryBlindBoxContentIndexRequest: {
                encode(message: _463.QueryBlindBoxContentIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentIndexRequest;
                fromJSON(object: any): _463.QueryBlindBoxContentIndexRequest;
                toJSON(message: _463.QueryBlindBoxContentIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryBlindBoxContentIndexRequest;
            };
            QueryBlindBoxContentIndexResponse: {
                encode(message: _463.QueryBlindBoxContentIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentIndexResponse;
                fromJSON(object: any): _463.QueryBlindBoxContentIndexResponse;
                toJSON(message: _463.QueryBlindBoxContentIndexResponse): unknown;
                fromPartial(object: {
                    blindBoxContents?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryBlindBoxContentIndexResponse;
            };
            QueryBlindBoxContentsRequest: {
                encode(message: _463.QueryBlindBoxContentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentsRequest;
                fromJSON(object: any): _463.QueryBlindBoxContentsRequest;
                toJSON(message: _463.QueryBlindBoxContentsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryBlindBoxContentsRequest;
            };
            QueryBlindBoxContentsResponse: {
                encode(message: _463.QueryBlindBoxContentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryBlindBoxContentsResponse;
                fromJSON(object: any): _463.QueryBlindBoxContentsResponse;
                toJSON(message: _463.QueryBlindBoxContentsResponse): unknown;
                fromPartial(object: {
                    blindBoxContents?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryBlindBoxContentsResponse;
            };
            QueryOfferRequest: {
                encode(message: _463.QueryOfferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOfferRequest;
                fromJSON(object: any): _463.QueryOfferRequest;
                toJSON(message: _463.QueryOfferRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _463.QueryOfferRequest;
            };
            QueryOfferResponse: {
                encode(message: _463.QueryOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOfferResponse;
                fromJSON(object: any): _463.QueryOfferResponse;
                toJSON(message: _463.QueryOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _463.QueryOfferResponse;
            };
            QueryOfferIndexRequest: {
                encode(message: _463.QueryOfferIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOfferIndexRequest;
                fromJSON(object: any): _463.QueryOfferIndexRequest;
                toJSON(message: _463.QueryOfferIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryOfferIndexRequest;
            };
            QueryOfferIndexResponse: {
                encode(message: _463.QueryOfferIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOfferIndexResponse;
                fromJSON(object: any): _463.QueryOfferIndexResponse;
                toJSON(message: _463.QueryOfferIndexResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryOfferIndexResponse;
            };
            QueryOffersByClassRequest: {
                encode(message: _463.QueryOffersByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOffersByClassRequest;
                fromJSON(object: any): _463.QueryOffersByClassRequest;
                toJSON(message: _463.QueryOffersByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryOffersByClassRequest;
            };
            QueryOffersByClassResponse: {
                encode(message: _463.QueryOffersByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOffersByClassResponse;
                fromJSON(object: any): _463.QueryOffersByClassResponse;
                toJSON(message: _463.QueryOffersByClassResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryOffersByClassResponse;
            };
            QueryOffersByNFTRequest: {
                encode(message: _463.QueryOffersByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOffersByNFTRequest;
                fromJSON(object: any): _463.QueryOffersByNFTRequest;
                toJSON(message: _463.QueryOffersByNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryOffersByNFTRequest;
            };
            QueryOffersByNFTResponse: {
                encode(message: _463.QueryOffersByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryOffersByNFTResponse;
                fromJSON(object: any): _463.QueryOffersByNFTResponse;
                toJSON(message: _463.QueryOffersByNFTResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryOffersByNFTResponse;
            };
            QueryListingRequest: {
                encode(message: _463.QueryListingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingRequest;
                fromJSON(object: any): _463.QueryListingRequest;
                toJSON(message: _463.QueryListingRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _463.QueryListingRequest;
            };
            QueryListingResponse: {
                encode(message: _463.QueryListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingResponse;
                fromJSON(object: any): _463.QueryListingResponse;
                toJSON(message: _463.QueryListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    };
                }): _463.QueryListingResponse;
            };
            QueryListingIndexRequest: {
                encode(message: _463.QueryListingIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingIndexRequest;
                fromJSON(object: any): _463.QueryListingIndexRequest;
                toJSON(message: _463.QueryListingIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryListingIndexRequest;
            };
            QueryListingIndexResponse: {
                encode(message: _463.QueryListingIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingIndexResponse;
                fromJSON(object: any): _463.QueryListingIndexResponse;
                toJSON(message: _463.QueryListingIndexResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryListingIndexResponse;
            };
            QueryListingsByClassRequest: {
                encode(message: _463.QueryListingsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingsByClassRequest;
                fromJSON(object: any): _463.QueryListingsByClassRequest;
                toJSON(message: _463.QueryListingsByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryListingsByClassRequest;
            };
            QueryListingsByClassResponse: {
                encode(message: _463.QueryListingsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingsByClassResponse;
                fromJSON(object: any): _463.QueryListingsByClassResponse;
                toJSON(message: _463.QueryListingsByClassResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryListingsByClassResponse;
            };
            QueryListingsByNFTRequest: {
                encode(message: _463.QueryListingsByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingsByNFTRequest;
                fromJSON(object: any): _463.QueryListingsByNFTRequest;
                toJSON(message: _463.QueryListingsByNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryListingsByNFTRequest;
            };
            QueryListingsByNFTResponse: {
                encode(message: _463.QueryListingsByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryListingsByNFTResponse;
                fromJSON(object: any): _463.QueryListingsByNFTResponse;
                toJSON(message: _463.QueryListingsByNFTResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryListingsByNFTResponse;
            };
            QueryRoyaltyConfigRequest: {
                encode(message: _463.QueryRoyaltyConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryRoyaltyConfigRequest;
                fromJSON(object: any): _463.QueryRoyaltyConfigRequest;
                toJSON(message: _463.QueryRoyaltyConfigRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _463.QueryRoyaltyConfigRequest;
            };
            QueryRoyaltyConfigResponse: {
                encode(message: _463.QueryRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryRoyaltyConfigResponse;
                fromJSON(object: any): _463.QueryRoyaltyConfigResponse;
                toJSON(message: _463.QueryRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _463.QueryRoyaltyConfigResponse;
            };
            QueryRoyaltyConfigIndexRequest: {
                encode(message: _463.QueryRoyaltyConfigIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryRoyaltyConfigIndexRequest;
                fromJSON(object: any): _463.QueryRoyaltyConfigIndexRequest;
                toJSON(message: _463.QueryRoyaltyConfigIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _463.QueryRoyaltyConfigIndexRequest;
            };
            QueryRoyaltyConfigIndexResponse: {
                encode(message: _463.QueryRoyaltyConfigIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.QueryRoyaltyConfigIndexResponse;
                fromJSON(object: any): _463.QueryRoyaltyConfigIndexResponse;
                toJSON(message: _463.QueryRoyaltyConfigIndexResponse): unknown;
                fromPartial(object: {
                    royaltyConfigByClass?: {
                        classId?: string;
                        royaltyConfig?: {
                            rateBasisPoints?: any;
                            stakeholders?: {
                                account?: Uint8Array;
                                weight?: any;
                            }[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _463.QueryRoyaltyConfigIndexResponse;
            };
            Params: {
                encode(message: _462.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Params;
                fromJSON(object: any): _462.Params;
                toJSON(message: _462.Params): unknown;
                fromPartial(object: {
                    priceDenom?: string;
                    feePerByte?: {
                        denom?: string;
                        amount?: string;
                    };
                    maxOfferDurationDays?: any;
                    maxListingDurationDays?: any;
                    maxRoyaltyBasisPoints?: any;
                }): _462.Params;
            };
            Offer: {
                encode(message: _461.Offer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.Offer;
                fromJSON(object: any): _461.Offer;
                toJSON(message: _461.Offer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    price?: any;
                    expiration?: Date;
                }): _461.Offer;
            };
            OfferStoreRecord: {
                encode(message: _461.OfferStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.OfferStoreRecord;
                fromJSON(object: any): _461.OfferStoreRecord;
                toJSON(message: _461.OfferStoreRecord): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: Uint8Array;
                    price?: any;
                    expiration?: Date;
                }): _461.OfferStoreRecord;
            };
            OfferExpireQueueEntry: {
                encode(message: _460.OfferExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.OfferExpireQueueEntry;
                fromJSON(object: any): _460.OfferExpireQueueEntry;
                toJSON(message: _460.OfferExpireQueueEntry): unknown;
                fromPartial(object: {
                    expireTime?: Date;
                    offerKey?: Uint8Array;
                }): _460.OfferExpireQueueEntry;
            };
            NFTInput: {
                encode(message: _459.NFTInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _459.NFTInput;
                fromJSON(object: any): _459.NFTInput;
                toJSON(message: _459.NFTInput): unknown;
                fromPartial(object: {
                    uri?: string;
                    uriHash?: string;
                    metadata?: Uint8Array;
                }): _459.NFTInput;
            };
            NFTData: {
                encode(message: _458.NFTData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.NFTData;
                fromJSON(object: any): _458.NFTData;
                toJSON(message: _458.NFTData): unknown;
                fromPartial(object: {
                    metadata?: Uint8Array;
                    classParent?: {
                        type?: _449.ClassParentType;
                        iscnIdPrefix?: string;
                        iscnVersionAtMint?: any;
                        account?: string;
                    };
                    toBeRevealed?: boolean;
                }): _458.NFTData;
            };
            Listing: {
                encode(message: _457.Listing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.Listing;
                fromJSON(object: any): _457.Listing;
                toJSON(message: _457.Listing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    price?: any;
                    expiration?: Date;
                }): _457.Listing;
            };
            ListingStoreRecord: {
                encode(message: _457.ListingStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.ListingStoreRecord;
                fromJSON(object: any): _457.ListingStoreRecord;
                toJSON(message: _457.ListingStoreRecord): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: Uint8Array;
                    price?: any;
                    expiration?: Date;
                }): _457.ListingStoreRecord;
            };
            ListingExpireQueueEntry: {
                encode(message: _456.ListingExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.ListingExpireQueueEntry;
                fromJSON(object: any): _456.ListingExpireQueueEntry;
                toJSON(message: _456.ListingExpireQueueEntry): unknown;
                fromPartial(object: {
                    expireTime?: Date;
                    listingKey?: Uint8Array;
                }): _456.ListingExpireQueueEntry;
            };
            GenesisState: {
                encode(message: _455.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.GenesisState;
                fromJSON(object: any): _455.GenesisState;
                toJSON(message: _455.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        priceDenom?: string;
                        feePerByte?: {
                            denom?: string;
                            amount?: string;
                        };
                        maxOfferDurationDays?: any;
                        maxListingDurationDays?: any;
                        maxRoyaltyBasisPoints?: any;
                    };
                    classesByIscnList?: {
                        iscnIdPrefix?: string;
                        classIds?: string[];
                    }[];
                    classesByAccountList?: {
                        account?: string;
                        classIds?: string[];
                    }[];
                    blindBoxContentList?: {
                        classId?: string;
                        id?: string;
                        input?: {
                            uri?: string;
                            uriHash?: string;
                            metadata?: Uint8Array;
                        };
                    }[];
                    classRevealQueue?: {
                        revealTime?: Date;
                        classId?: string;
                    }[];
                    offerList?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    listingList?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: Date;
                    }[];
                    offerExpireQueue?: {
                        expireTime?: Date;
                        offerKey?: Uint8Array;
                    }[];
                    listingExpireQueue?: {
                        expireTime?: Date;
                        listingKey?: Uint8Array;
                    }[];
                    royaltyConfigByClassList?: {
                        classId?: string;
                        royaltyConfig?: {
                            rateBasisPoints?: any;
                            stakeholders?: {
                                account?: Uint8Array;
                                weight?: any;
                            }[];
                        };
                    }[];
                }): _455.GenesisState;
            };
            EventNewClass: {
                encode(message: _454.EventNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventNewClass;
                fromJSON(object: any): _454.EventNewClass;
                toJSON(message: _454.EventNewClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    parentIscnIdPrefix?: string;
                    parentAccount?: string;
                }): _454.EventNewClass;
            };
            EventUpdateClass: {
                encode(message: _454.EventUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventUpdateClass;
                fromJSON(object: any): _454.EventUpdateClass;
                toJSON(message: _454.EventUpdateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    parentIscnIdPrefix?: string;
                    parentAccount?: string;
                }): _454.EventUpdateClass;
            };
            EventRevealClass: {
                encode(message: _454.EventRevealClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventRevealClass;
                fromJSON(object: any): _454.EventRevealClass;
                toJSON(message: _454.EventRevealClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    success?: boolean;
                    error?: string;
                }): _454.EventRevealClass;
            };
            EventMintNFT: {
                encode(message: _454.EventMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventMintNFT;
                fromJSON(object: any): _454.EventMintNFT;
                toJSON(message: _454.EventMintNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    owner?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _454.EventMintNFT;
            };
            EventBurnNFT: {
                encode(message: _454.EventBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventBurnNFT;
                fromJSON(object: any): _454.EventBurnNFT;
                toJSON(message: _454.EventBurnNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    owner?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _454.EventBurnNFT;
            };
            EventCreateBlindBoxContent: {
                encode(message: _454.EventCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventCreateBlindBoxContent;
                fromJSON(object: any): _454.EventCreateBlindBoxContent;
                toJSON(message: _454.EventCreateBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _454.EventCreateBlindBoxContent;
            };
            EventUpdateBlindBoxContent: {
                encode(message: _454.EventUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventUpdateBlindBoxContent;
                fromJSON(object: any): _454.EventUpdateBlindBoxContent;
                toJSON(message: _454.EventUpdateBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _454.EventUpdateBlindBoxContent;
            };
            EventDeleteBlindBoxContent: {
                encode(message: _454.EventDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventDeleteBlindBoxContent;
                fromJSON(object: any): _454.EventDeleteBlindBoxContent;
                toJSON(message: _454.EventDeleteBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _454.EventDeleteBlindBoxContent;
            };
            EventCreateOffer: {
                encode(message: _454.EventCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventCreateOffer;
                fromJSON(object: any): _454.EventCreateOffer;
                toJSON(message: _454.EventCreateOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _454.EventCreateOffer;
            };
            EventUpdateOffer: {
                encode(message: _454.EventUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventUpdateOffer;
                fromJSON(object: any): _454.EventUpdateOffer;
                toJSON(message: _454.EventUpdateOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _454.EventUpdateOffer;
            };
            EventDeleteOffer: {
                encode(message: _454.EventDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventDeleteOffer;
                fromJSON(object: any): _454.EventDeleteOffer;
                toJSON(message: _454.EventDeleteOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _454.EventDeleteOffer;
            };
            EventCreateListing: {
                encode(message: _454.EventCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventCreateListing;
                fromJSON(object: any): _454.EventCreateListing;
                toJSON(message: _454.EventCreateListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _454.EventCreateListing;
            };
            EventUpdateListing: {
                encode(message: _454.EventUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventUpdateListing;
                fromJSON(object: any): _454.EventUpdateListing;
                toJSON(message: _454.EventUpdateListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _454.EventUpdateListing;
            };
            EventDeleteListing: {
                encode(message: _454.EventDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventDeleteListing;
                fromJSON(object: any): _454.EventDeleteListing;
                toJSON(message: _454.EventDeleteListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _454.EventDeleteListing;
            };
            EventSellNFT: {
                encode(message: _454.EventSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventSellNFT;
                fromJSON(object: any): _454.EventSellNFT;
                toJSON(message: _454.EventSellNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    buyer?: string;
                    price?: any;
                }): _454.EventSellNFT;
            };
            EventBuyNFT: {
                encode(message: _454.EventBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventBuyNFT;
                fromJSON(object: any): _454.EventBuyNFT;
                toJSON(message: _454.EventBuyNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    buyer?: string;
                    price?: any;
                }): _454.EventBuyNFT;
            };
            EventExpireOffer: {
                encode(message: _454.EventExpireOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventExpireOffer;
                fromJSON(object: any): _454.EventExpireOffer;
                toJSON(message: _454.EventExpireOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    success?: boolean;
                    error?: string;
                }): _454.EventExpireOffer;
            };
            EventExpireListing: {
                encode(message: _454.EventExpireListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventExpireListing;
                fromJSON(object: any): _454.EventExpireListing;
                toJSON(message: _454.EventExpireListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    success?: boolean;
                    error?: string;
                }): _454.EventExpireListing;
            };
            EventCreateRoyaltyConfig: {
                encode(message: _454.EventCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventCreateRoyaltyConfig;
                fromJSON(object: any): _454.EventCreateRoyaltyConfig;
                toJSON(message: _454.EventCreateRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _454.EventCreateRoyaltyConfig;
            };
            EventUpdateRoyaltyConfig: {
                encode(message: _454.EventUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventUpdateRoyaltyConfig;
                fromJSON(object: any): _454.EventUpdateRoyaltyConfig;
                toJSON(message: _454.EventUpdateRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _454.EventUpdateRoyaltyConfig;
            };
            EventDeleteRoyaltyConfig: {
                encode(message: _454.EventDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.EventDeleteRoyaltyConfig;
                fromJSON(object: any): _454.EventDeleteRoyaltyConfig;
                toJSON(message: _454.EventDeleteRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _454.EventDeleteRoyaltyConfig;
            };
            ClassesByISCN: {
                encode(message: _453.ClassesByISCN, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.ClassesByISCN;
                fromJSON(object: any): _453.ClassesByISCN;
                toJSON(message: _453.ClassesByISCN): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    classIds?: string[];
                }): _453.ClassesByISCN;
            };
            ClassesByAccount: {
                encode(message: _452.ClassesByAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.ClassesByAccount;
                fromJSON(object: any): _452.ClassesByAccount;
                toJSON(message: _452.ClassesByAccount): unknown;
                fromPartial(object: {
                    account?: string;
                    classIds?: string[];
                }): _452.ClassesByAccount;
            };
            ClassesByAccountStoreRecord: {
                encode(message: _452.ClassesByAccountStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.ClassesByAccountStoreRecord;
                fromJSON(object: any): _452.ClassesByAccountStoreRecord;
                toJSON(message: _452.ClassesByAccountStoreRecord): unknown;
                fromPartial(object: {
                    accAddress?: Uint8Array;
                    classIds?: string[];
                }): _452.ClassesByAccountStoreRecord;
            };
            ClassRevealQueueEntry: {
                encode(message: _451.ClassRevealQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _451.ClassRevealQueueEntry;
                fromJSON(object: any): _451.ClassRevealQueueEntry;
                toJSON(message: _451.ClassRevealQueueEntry): unknown;
                fromPartial(object: {
                    revealTime?: Date;
                    classId?: string;
                }): _451.ClassRevealQueueEntry;
            };
            ClassInput: {
                encode(message: _450.ClassInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.ClassInput;
                fromJSON(object: any): _450.ClassInput;
                toJSON(message: _450.ClassInput): unknown;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    metadata?: Uint8Array;
                    config?: {
                        burnable?: boolean;
                        maxSupply?: any;
                        blindBoxConfig?: {
                            mintPeriods?: {
                                startTime?: Date;
                                allowedAddresses?: string[];
                                mintPrice?: any;
                            }[];
                            revealTime?: Date;
                        };
                    };
                }): _450.ClassInput;
            };
            ClassParentInput: {
                encode(message: _450.ClassParentInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.ClassParentInput;
                fromJSON(object: any): _450.ClassParentInput;
                toJSON(message: _450.ClassParentInput): unknown;
                fromPartial(object: {
                    type?: _449.ClassParentType;
                    iscnIdPrefix?: string;
                }): _450.ClassParentInput;
            };
            classParentTypeFromJSON(object: any): _449.ClassParentType;
            classParentTypeToJSON(object: _449.ClassParentType): string;
            ClassParentType: typeof _449.ClassParentType;
            ClassData: {
                encode(message: _449.ClassData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.ClassData;
                fromJSON(object: any): _449.ClassData;
                toJSON(message: _449.ClassData): unknown;
                fromPartial(object: {
                    metadata?: Uint8Array;
                    parent?: {
                        type?: _449.ClassParentType;
                        iscnIdPrefix?: string;
                        iscnVersionAtMint?: any;
                        account?: string;
                    };
                    config?: {
                        burnable?: boolean;
                        maxSupply?: any;
                        blindBoxConfig?: {
                            mintPeriods?: {
                                startTime?: Date;
                                allowedAddresses?: string[];
                                mintPrice?: any;
                            }[];
                            revealTime?: Date;
                        };
                    };
                    blindBoxState?: {
                        contentCount?: any;
                        toBeRevealed?: boolean;
                    };
                }): _449.ClassData;
            };
            ClassParent: {
                encode(message: _449.ClassParent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.ClassParent;
                fromJSON(object: any): _449.ClassParent;
                toJSON(message: _449.ClassParent): unknown;
                fromPartial(object: {
                    type?: _449.ClassParentType;
                    iscnIdPrefix?: string;
                    iscnVersionAtMint?: any;
                    account?: string;
                }): _449.ClassParent;
            };
            MintPeriod: {
                encode(message: _449.MintPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.MintPeriod;
                fromJSON(object: any): _449.MintPeriod;
                toJSON(message: _449.MintPeriod): unknown;
                fromPartial(object: {
                    startTime?: Date;
                    allowedAddresses?: string[];
                    mintPrice?: any;
                }): _449.MintPeriod;
            };
            ClassConfig: {
                encode(message: _449.ClassConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.ClassConfig;
                fromJSON(object: any): _449.ClassConfig;
                toJSON(message: _449.ClassConfig): unknown;
                fromPartial(object: {
                    burnable?: boolean;
                    maxSupply?: any;
                    blindBoxConfig?: {
                        mintPeriods?: {
                            startTime?: Date;
                            allowedAddresses?: string[];
                            mintPrice?: any;
                        }[];
                        revealTime?: Date;
                    };
                }): _449.ClassConfig;
            };
            BlindBoxConfig: {
                encode(message: _449.BlindBoxConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.BlindBoxConfig;
                fromJSON(object: any): _449.BlindBoxConfig;
                toJSON(message: _449.BlindBoxConfig): unknown;
                fromPartial(object: {
                    mintPeriods?: {
                        startTime?: Date;
                        allowedAddresses?: string[];
                        mintPrice?: any;
                    }[];
                    revealTime?: Date;
                }): _449.BlindBoxConfig;
            };
            BlindBoxState: {
                encode(message: _449.BlindBoxState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.BlindBoxState;
                fromJSON(object: any): _449.BlindBoxState;
                toJSON(message: _449.BlindBoxState): unknown;
                fromPartial(object: {
                    contentCount?: any;
                    toBeRevealed?: boolean;
                }): _449.BlindBoxState;
            };
            BlindBoxContent: {
                encode(message: _448.BlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.BlindBoxContent;
                fromJSON(object: any): _448.BlindBoxContent;
                toJSON(message: _448.BlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _448.BlindBoxContent;
            };
        };
    }
}
