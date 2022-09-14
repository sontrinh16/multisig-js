import * as _510 from "./iscn/genesis";
import * as _511 from "./iscn/iscnid";
import * as _512 from "./iscn/params";
import * as _513 from "./iscn/query";
import * as _514 from "./iscn/store";
import * as _515 from "./iscn/tx";
import * as _516 from "./likenft/v1/blind_box_content";
import * as _517 from "./likenft/v1/class_data";
import * as _518 from "./likenft/v1/class_input";
import * as _519 from "./likenft/v1/class_reveal_queue";
import * as _520 from "./likenft/v1/classes_by_account";
import * as _521 from "./likenft/v1/classes_by_iscn";
import * as _522 from "./likenft/v1/event";
import * as _523 from "./likenft/v1/genesis";
import * as _524 from "./likenft/v1/listing_expire_queue";
import * as _525 from "./likenft/v1/listing";
import * as _526 from "./likenft/v1/nft_data";
import * as _527 from "./likenft/v1/nft_input";
import * as _528 from "./likenft/v1/offer_expire_queue";
import * as _529 from "./likenft/v1/offer";
import * as _530 from "./likenft/v1/params";
import * as _531 from "./likenft/v1/query";
import * as _532 from "./likenft/v1/royalty_config";
import * as _533 from "./likenft/v1/tx";
export declare namespace likechain {
    const iscn: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createIscnRecord(value: _515.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateIscnRecord(value: _515.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeIscnRecordOwnership(value: _515.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createIscnRecord(value: _515.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _515.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _515.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _515.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _515.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _515.MsgChangeIscnRecordOwnership;
                };
            };
            toJSON: {
                createIscnRecord(value: _515.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: unknown;
                };
                updateIscnRecord(value: _515.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: unknown;
                };
                changeIscnRecordOwnership(value: _515.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createIscnRecord(value: any): {
                    typeUrl: string;
                    value: _515.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: any): {
                    typeUrl: string;
                    value: _515.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: any): {
                    typeUrl: string;
                    value: _515.MsgChangeIscnRecordOwnership;
                };
            };
            fromPartial: {
                createIscnRecord(value: _515.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _515.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _515.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _515.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _515.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _515.MsgChangeIscnRecordOwnership;
                };
            };
        };
        AminoConverter: {
            "/likechain.iscn.MsgCreateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, record }: _515.MsgCreateIscnRecord) => {
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
                }) => _515.MsgCreateIscnRecord;
            };
            "/likechain.iscn.MsgUpdateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, iscnId, record }: _515.MsgUpdateIscnRecord) => {
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
                }) => _515.MsgUpdateIscnRecord;
            };
            "/likechain.iscn.MsgChangeIscnRecordOwnership": {
                aminoType: string;
                toAmino: ({ from, iscnId, newOwner }: _515.MsgChangeIscnRecordOwnership) => {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                };
                fromAmino: ({ from, iscn_id, new_owner }: {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                }) => _515.MsgChangeIscnRecordOwnership;
            };
        };
        IscnRecord: {
            encode(message: _515.IscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.IscnRecord;
            fromJSON(object: any): _515.IscnRecord;
            toJSON(message: _515.IscnRecord): unknown;
            fromPartial(object: {
                recordNotes?: string;
                contentFingerprints?: string[];
                stakeholders?: Uint8Array[];
                contentMetadata?: Uint8Array;
            }): _515.IscnRecord;
        };
        MsgCreateIscnRecord: {
            encode(message: _515.MsgCreateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgCreateIscnRecord;
            fromJSON(object: any): _515.MsgCreateIscnRecord;
            toJSON(message: _515.MsgCreateIscnRecord): unknown;
            fromPartial(object: {
                from?: string;
                record?: {
                    recordNotes?: string;
                    contentFingerprints?: string[];
                    stakeholders?: Uint8Array[];
                    contentMetadata?: Uint8Array;
                };
            }): _515.MsgCreateIscnRecord;
        };
        MsgCreateIscnRecordResponse: {
            encode(message: _515.MsgCreateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgCreateIscnRecordResponse;
            fromJSON(object: any): _515.MsgCreateIscnRecordResponse;
            toJSON(message: _515.MsgCreateIscnRecordResponse): unknown;
            fromPartial(object: {
                iscnId?: string;
                recordIpld?: string;
            }): _515.MsgCreateIscnRecordResponse;
        };
        MsgUpdateIscnRecord: {
            encode(message: _515.MsgUpdateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgUpdateIscnRecord;
            fromJSON(object: any): _515.MsgUpdateIscnRecord;
            toJSON(message: _515.MsgUpdateIscnRecord): unknown;
            fromPartial(object: {
                from?: string;
                iscnId?: string;
                record?: {
                    recordNotes?: string;
                    contentFingerprints?: string[];
                    stakeholders?: Uint8Array[];
                    contentMetadata?: Uint8Array;
                };
            }): _515.MsgUpdateIscnRecord;
        };
        MsgUpdateIscnRecordResponse: {
            encode(message: _515.MsgUpdateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgUpdateIscnRecordResponse;
            fromJSON(object: any): _515.MsgUpdateIscnRecordResponse;
            toJSON(message: _515.MsgUpdateIscnRecordResponse): unknown;
            fromPartial(object: {
                iscnId?: string;
                recordIpld?: string;
            }): _515.MsgUpdateIscnRecordResponse;
        };
        MsgChangeIscnRecordOwnership: {
            encode(message: _515.MsgChangeIscnRecordOwnership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgChangeIscnRecordOwnership;
            fromJSON(object: any): _515.MsgChangeIscnRecordOwnership;
            toJSON(message: _515.MsgChangeIscnRecordOwnership): unknown;
            fromPartial(object: {
                from?: string;
                iscnId?: string;
                newOwner?: string;
            }): _515.MsgChangeIscnRecordOwnership;
        };
        MsgChangeIscnRecordOwnershipResponse: {
            encode(_: _515.MsgChangeIscnRecordOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.MsgChangeIscnRecordOwnershipResponse;
            fromJSON(_: any): _515.MsgChangeIscnRecordOwnershipResponse;
            toJSON(_: _515.MsgChangeIscnRecordOwnershipResponse): unknown;
            fromPartial(_: {}): _515.MsgChangeIscnRecordOwnershipResponse;
        };
        StoreRecord: {
            encode(message: _514.StoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.StoreRecord;
            fromJSON(object: any): _514.StoreRecord;
            toJSON(message: _514.StoreRecord): unknown;
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
            }): _514.StoreRecord;
        };
        ContentIdRecord: {
            encode(message: _514.ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.ContentIdRecord;
            fromJSON(object: any): _514.ContentIdRecord;
            toJSON(message: _514.ContentIdRecord): unknown;
            fromPartial(object: {
                ownerAddressBytes?: Uint8Array;
                latestVersion?: any;
            }): _514.ContentIdRecord;
        };
        QueryResponseRecord: {
            encode(message: _513.QueryResponseRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryResponseRecord;
            fromJSON(object: any): _513.QueryResponseRecord;
            toJSON(message: _513.QueryResponseRecord): unknown;
            fromPartial(object: {
                ipld?: string;
                data?: Uint8Array;
            }): _513.QueryResponseRecord;
        };
        QueryRecordsByIdRequest: {
            encode(message: _513.QueryRecordsByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByIdRequest;
            fromJSON(object: any): _513.QueryRecordsByIdRequest;
            toJSON(message: _513.QueryRecordsByIdRequest): unknown;
            fromPartial(object: {
                iscnId?: string;
                fromVersion?: any;
                toVersion?: any;
            }): _513.QueryRecordsByIdRequest;
        };
        QueryRecordsByIdResponse: {
            encode(message: _513.QueryRecordsByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByIdResponse;
            fromJSON(object: any): _513.QueryRecordsByIdResponse;
            toJSON(message: _513.QueryRecordsByIdResponse): unknown;
            fromPartial(object: {
                owner?: string;
                latestVersion?: any;
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
            }): _513.QueryRecordsByIdResponse;
        };
        QueryRecordsByFingerprintRequest: {
            encode(message: _513.QueryRecordsByFingerprintRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByFingerprintRequest;
            fromJSON(object: any): _513.QueryRecordsByFingerprintRequest;
            toJSON(message: _513.QueryRecordsByFingerprintRequest): unknown;
            fromPartial(object: {
                fingerprint?: string;
                fromSequence?: any;
            }): _513.QueryRecordsByFingerprintRequest;
        };
        QueryRecordsByFingerprintResponse: {
            encode(message: _513.QueryRecordsByFingerprintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByFingerprintResponse;
            fromJSON(object: any): _513.QueryRecordsByFingerprintResponse;
            toJSON(message: _513.QueryRecordsByFingerprintResponse): unknown;
            fromPartial(object: {
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
                nextSequence?: any;
            }): _513.QueryRecordsByFingerprintResponse;
        };
        QueryRecordsByOwnerRequest: {
            encode(message: _513.QueryRecordsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByOwnerRequest;
            fromJSON(object: any): _513.QueryRecordsByOwnerRequest;
            toJSON(message: _513.QueryRecordsByOwnerRequest): unknown;
            fromPartial(object: {
                owner?: string;
                fromSequence?: any;
            }): _513.QueryRecordsByOwnerRequest;
        };
        QueryRecordsByOwnerResponse: {
            encode(message: _513.QueryRecordsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryRecordsByOwnerResponse;
            fromJSON(object: any): _513.QueryRecordsByOwnerResponse;
            toJSON(message: _513.QueryRecordsByOwnerResponse): unknown;
            fromPartial(object: {
                records?: {
                    ipld?: string;
                    data?: Uint8Array;
                }[];
                nextSequence?: any;
            }): _513.QueryRecordsByOwnerResponse;
        };
        QueryParamsRequest: {
            encode(_: _513.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryParamsRequest;
            fromJSON(_: any): _513.QueryParamsRequest;
            toJSON(_: _513.QueryParamsRequest): unknown;
            fromPartial(_: {}): _513.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _513.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryParamsResponse;
            fromJSON(object: any): _513.QueryParamsResponse;
            toJSON(message: _513.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    registryName?: string;
                    feePerByte?: {
                        denom?: string;
                        amount?: string;
                    };
                };
            }): _513.QueryParamsResponse;
        };
        QueryGetCidRequest: {
            encode(message: _513.QueryGetCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryGetCidRequest;
            fromJSON(object: any): _513.QueryGetCidRequest;
            toJSON(message: _513.QueryGetCidRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _513.QueryGetCidRequest;
        };
        QueryGetCidResponse: {
            encode(message: _513.QueryGetCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryGetCidResponse;
            fromJSON(object: any): _513.QueryGetCidResponse;
            toJSON(message: _513.QueryGetCidResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _513.QueryGetCidResponse;
        };
        QueryGetCidSizeRequest: {
            encode(message: _513.QueryGetCidSizeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryGetCidSizeRequest;
            fromJSON(object: any): _513.QueryGetCidSizeRequest;
            toJSON(message: _513.QueryGetCidSizeRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _513.QueryGetCidSizeRequest;
        };
        QueryGetCidSizeResponse: {
            encode(message: _513.QueryGetCidSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryGetCidSizeResponse;
            fromJSON(object: any): _513.QueryGetCidSizeResponse;
            toJSON(message: _513.QueryGetCidSizeResponse): unknown;
            fromPartial(object: {
                size?: any;
            }): _513.QueryGetCidSizeResponse;
        };
        QueryHasCidRequest: {
            encode(message: _513.QueryHasCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryHasCidRequest;
            fromJSON(object: any): _513.QueryHasCidRequest;
            toJSON(message: _513.QueryHasCidRequest): unknown;
            fromPartial(object: {
                cid?: string;
            }): _513.QueryHasCidRequest;
        };
        QueryHasCidResponse: {
            encode(message: _513.QueryHasCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QueryHasCidResponse;
            fromJSON(object: any): _513.QueryHasCidResponse;
            toJSON(message: _513.QueryHasCidResponse): unknown;
            fromPartial(object: {
                exist?: boolean;
            }): _513.QueryHasCidResponse;
        };
        Params: {
            encode(message: _512.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _512.Params;
            fromJSON(object: any): _512.Params;
            toJSON(message: _512.Params): unknown;
            fromPartial(object: {
                registryName?: string;
                feePerByte?: {
                    denom?: string;
                    amount?: string;
                };
            }): _512.Params;
        };
        IscnIdPrefix: {
            encode(message: _511.IscnIdPrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _511.IscnIdPrefix;
            fromJSON(object: any): _511.IscnIdPrefix;
            toJSON(message: _511.IscnIdPrefix): unknown;
            fromPartial(object: {
                registryName?: string;
                contentId?: string;
            }): _511.IscnIdPrefix;
        };
        IscnId: {
            encode(message: _511.IscnId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _511.IscnId;
            fromJSON(object: any): _511.IscnId;
            toJSON(message: _511.IscnId): unknown;
            fromPartial(object: {
                prefix?: {
                    registryName?: string;
                    contentId?: string;
                };
                version?: any;
            }): _511.IscnId;
        };
        GenesisState: {
            encode(message: _510.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.GenesisState;
            fromJSON(object: any): _510.GenesisState;
            toJSON(message: _510.GenesisState): unknown;
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
            }): _510.GenesisState;
        };
        GenesisState_ContentIdRecord: {
            encode(message: _510.GenesisState_ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.GenesisState_ContentIdRecord;
            fromJSON(object: any): _510.GenesisState_ContentIdRecord;
            toJSON(message: _510.GenesisState_ContentIdRecord): unknown;
            fromPartial(object: {
                iscnId?: string;
                owner?: string;
                latestVersion?: any;
            }): _510.GenesisState_ContentIdRecord;
        };
    };
    namespace likenft {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    newClass(value: _533.MsgNewClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClass(value: _533.MsgUpdateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _533.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _533.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBlindBoxContent(value: _533.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBlindBoxContent(value: _533.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBlindBoxContent(value: _533.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOffer(value: _533.MsgCreateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateOffer(value: _533.MsgUpdateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteOffer(value: _533.MsgDeleteOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createListing(value: _533.MsgCreateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateListing(value: _533.MsgUpdateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteListing(value: _533.MsgDeleteListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellNFT(value: _533.MsgSellNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    buyNFT(value: _533.MsgBuyNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRoyaltyConfig(value: _533.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRoyaltyConfig(value: _533.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoyaltyConfig(value: _533.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    newClass(value: _533.MsgNewClass): {
                        typeUrl: string;
                        value: _533.MsgNewClass;
                    };
                    updateClass(value: _533.MsgUpdateClass): {
                        typeUrl: string;
                        value: _533.MsgUpdateClass;
                    };
                    mintNFT(value: _533.MsgMintNFT): {
                        typeUrl: string;
                        value: _533.MsgMintNFT;
                    };
                    burnNFT(value: _533.MsgBurnNFT): {
                        typeUrl: string;
                        value: _533.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _533.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _533.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _533.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _533.MsgCreateOffer): {
                        typeUrl: string;
                        value: _533.MsgCreateOffer;
                    };
                    updateOffer(value: _533.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _533.MsgUpdateOffer;
                    };
                    deleteOffer(value: _533.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _533.MsgDeleteOffer;
                    };
                    createListing(value: _533.MsgCreateListing): {
                        typeUrl: string;
                        value: _533.MsgCreateListing;
                    };
                    updateListing(value: _533.MsgUpdateListing): {
                        typeUrl: string;
                        value: _533.MsgUpdateListing;
                    };
                    deleteListing(value: _533.MsgDeleteListing): {
                        typeUrl: string;
                        value: _533.MsgDeleteListing;
                    };
                    sellNFT(value: _533.MsgSellNFT): {
                        typeUrl: string;
                        value: _533.MsgSellNFT;
                    };
                    buyNFT(value: _533.MsgBuyNFT): {
                        typeUrl: string;
                        value: _533.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _533.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _533.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _533.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgDeleteRoyaltyConfig;
                    };
                };
                toJSON: {
                    newClass(value: _533.MsgNewClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClass(value: _533.MsgUpdateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintNFT(value: _533.MsgMintNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burnNFT(value: _533.MsgBurnNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBlindBoxContent(value: _533.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBlindBoxContent(value: _533.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteBlindBoxContent(value: _533.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createOffer(value: _533.MsgCreateOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateOffer(value: _533.MsgUpdateOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteOffer(value: _533.MsgDeleteOffer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createListing(value: _533.MsgCreateListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateListing(value: _533.MsgUpdateListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteListing(value: _533.MsgDeleteListing): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sellNFT(value: _533.MsgSellNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    buyNFT(value: _533.MsgBuyNFT): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createRoyaltyConfig(value: _533.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRoyaltyConfig(value: _533.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRoyaltyConfig(value: _533.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    newClass(value: any): {
                        typeUrl: string;
                        value: _533.MsgNewClass;
                    };
                    updateClass(value: any): {
                        typeUrl: string;
                        value: _533.MsgUpdateClass;
                    };
                    mintNFT(value: any): {
                        typeUrl: string;
                        value: _533.MsgMintNFT;
                    };
                    burnNFT(value: any): {
                        typeUrl: string;
                        value: _533.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _533.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _533.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _533.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: any): {
                        typeUrl: string;
                        value: _533.MsgCreateOffer;
                    };
                    updateOffer(value: any): {
                        typeUrl: string;
                        value: _533.MsgUpdateOffer;
                    };
                    deleteOffer(value: any): {
                        typeUrl: string;
                        value: _533.MsgDeleteOffer;
                    };
                    createListing(value: any): {
                        typeUrl: string;
                        value: _533.MsgCreateListing;
                    };
                    updateListing(value: any): {
                        typeUrl: string;
                        value: _533.MsgUpdateListing;
                    };
                    deleteListing(value: any): {
                        typeUrl: string;
                        value: _533.MsgDeleteListing;
                    };
                    sellNFT(value: any): {
                        typeUrl: string;
                        value: _533.MsgSellNFT;
                    };
                    buyNFT(value: any): {
                        typeUrl: string;
                        value: _533.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _533.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _533.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _533.MsgDeleteRoyaltyConfig;
                    };
                };
                fromPartial: {
                    newClass(value: _533.MsgNewClass): {
                        typeUrl: string;
                        value: _533.MsgNewClass;
                    };
                    updateClass(value: _533.MsgUpdateClass): {
                        typeUrl: string;
                        value: _533.MsgUpdateClass;
                    };
                    mintNFT(value: _533.MsgMintNFT): {
                        typeUrl: string;
                        value: _533.MsgMintNFT;
                    };
                    burnNFT(value: _533.MsgBurnNFT): {
                        typeUrl: string;
                        value: _533.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _533.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _533.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _533.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _533.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _533.MsgCreateOffer): {
                        typeUrl: string;
                        value: _533.MsgCreateOffer;
                    };
                    updateOffer(value: _533.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _533.MsgUpdateOffer;
                    };
                    deleteOffer(value: _533.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _533.MsgDeleteOffer;
                    };
                    createListing(value: _533.MsgCreateListing): {
                        typeUrl: string;
                        value: _533.MsgCreateListing;
                    };
                    updateListing(value: _533.MsgUpdateListing): {
                        typeUrl: string;
                        value: _533.MsgUpdateListing;
                    };
                    deleteListing(value: _533.MsgDeleteListing): {
                        typeUrl: string;
                        value: _533.MsgDeleteListing;
                    };
                    sellNFT(value: _533.MsgSellNFT): {
                        typeUrl: string;
                        value: _533.MsgSellNFT;
                    };
                    buyNFT(value: _533.MsgBuyNFT): {
                        typeUrl: string;
                        value: _533.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _533.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _533.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _533.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _533.MsgDeleteRoyaltyConfig;
                    };
                };
            };
            AminoConverter: {
                "/likechain.likenft.v1.MsgNewClass": {
                    aminoType: string;
                    toAmino: ({ creator, parent, input }: _533.MsgNewClass) => {
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
                    }) => _533.MsgNewClass;
                };
                "/likechain.likenft.v1.MsgUpdateClass": {
                    aminoType: string;
                    toAmino: ({ creator, classId, input }: _533.MsgUpdateClass) => {
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
                    }) => _533.MsgUpdateClass;
                };
                "/likechain.likenft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _533.MsgMintNFT) => {
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
                    }) => _533.MsgMintNFT;
                };
                "/likechain.likenft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _533.MsgBurnNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _533.MsgBurnNFT;
                };
                "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _533.MsgCreateBlindBoxContent) => {
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
                    }) => _533.MsgCreateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _533.MsgUpdateBlindBoxContent) => {
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
                    }) => _533.MsgUpdateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id }: _533.MsgDeleteBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                    };
                    fromAmino: ({ creator, class_id, id }: {
                        creator: string;
                        class_id: string;
                        id: string;
                    }) => _533.MsgDeleteBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgCreateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _533.MsgCreateOffer) => {
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
                    }) => _533.MsgCreateOffer;
                };
                "/likechain.likenft.v1.MsgUpdateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _533.MsgUpdateOffer) => {
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
                    }) => _533.MsgUpdateOffer;
                };
                "/likechain.likenft.v1.MsgDeleteOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _533.MsgDeleteOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _533.MsgDeleteOffer;
                };
                "/likechain.likenft.v1.MsgCreateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _533.MsgCreateListing) => {
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
                    }) => _533.MsgCreateListing;
                };
                "/likechain.likenft.v1.MsgUpdateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _533.MsgUpdateListing) => {
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
                    }) => _533.MsgUpdateListing;
                };
                "/likechain.likenft.v1.MsgDeleteListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _533.MsgDeleteListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _533.MsgDeleteListing;
                };
                "/likechain.likenft.v1.MsgSellNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, buyer, price }: _533.MsgSellNFT) => {
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
                    }) => _533.MsgSellNFT;
                };
                "/likechain.likenft.v1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, seller, price }: _533.MsgBuyNFT) => {
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
                    }) => _533.MsgBuyNFT;
                };
                "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _533.MsgCreateRoyaltyConfig) => {
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
                    }) => _533.MsgCreateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _533.MsgUpdateRoyaltyConfig) => {
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
                    }) => _533.MsgUpdateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId }: _533.MsgDeleteRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                    };
                    fromAmino: ({ creator, class_id }: {
                        creator: string;
                        class_id: string;
                    }) => _533.MsgDeleteRoyaltyConfig;
                };
            };
            MsgNewClass: {
                encode(message: _533.MsgNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgNewClass;
                fromJSON(object: any): _533.MsgNewClass;
                toJSON(message: _533.MsgNewClass): unknown;
                fromPartial(object: {
                    creator?: string;
                    parent?: {
                        type?: _517.ClassParentType;
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
                                    startTime?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    allowedAddresses?: string[];
                                    mintPrice?: any;
                                }[];
                                revealTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                        };
                    };
                }): _533.MsgNewClass;
            };
            MsgNewClassResponse: {
                encode(message: _533.MsgNewClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgNewClassResponse;
                fromJSON(object: any): _533.MsgNewClassResponse;
                toJSON(message: _533.MsgNewClassResponse): unknown;
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
                }): _533.MsgNewClassResponse;
            };
            MsgUpdateClass: {
                encode(message: _533.MsgUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateClass;
                fromJSON(object: any): _533.MsgUpdateClass;
                toJSON(message: _533.MsgUpdateClass): unknown;
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
                                    startTime?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    allowedAddresses?: string[];
                                    mintPrice?: any;
                                }[];
                                revealTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                        };
                    };
                }): _533.MsgUpdateClass;
            };
            MsgUpdateClassResponse: {
                encode(message: _533.MsgUpdateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateClassResponse;
                fromJSON(object: any): _533.MsgUpdateClassResponse;
                toJSON(message: _533.MsgUpdateClassResponse): unknown;
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
                }): _533.MsgUpdateClassResponse;
            };
            MsgMintNFT: {
                encode(message: _533.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgMintNFT;
                fromJSON(object: any): _533.MsgMintNFT;
                toJSON(message: _533.MsgMintNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _533.MsgMintNFT;
            };
            MsgMintNFTResponse: {
                encode(message: _533.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgMintNFTResponse;
                fromJSON(object: any): _533.MsgMintNFTResponse;
                toJSON(message: _533.MsgMintNFTResponse): unknown;
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
                }): _533.MsgMintNFTResponse;
            };
            MsgBurnNFT: {
                encode(message: _533.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgBurnNFT;
                fromJSON(object: any): _533.MsgBurnNFT;
                toJSON(message: _533.MsgBurnNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _533.MsgBurnNFT;
            };
            MsgBurnNFTResponse: {
                encode(_: _533.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgBurnNFTResponse;
                fromJSON(_: any): _533.MsgBurnNFTResponse;
                toJSON(_: _533.MsgBurnNFTResponse): unknown;
                fromPartial(_: {}): _533.MsgBurnNFTResponse;
            };
            MsgCreateBlindBoxContent: {
                encode(message: _533.MsgCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateBlindBoxContent;
                fromJSON(object: any): _533.MsgCreateBlindBoxContent;
                toJSON(message: _533.MsgCreateBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _533.MsgCreateBlindBoxContent;
            };
            MsgCreateBlindBoxContentResponse: {
                encode(message: _533.MsgCreateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateBlindBoxContentResponse;
                fromJSON(object: any): _533.MsgCreateBlindBoxContentResponse;
                toJSON(message: _533.MsgCreateBlindBoxContentResponse): unknown;
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
                }): _533.MsgCreateBlindBoxContentResponse;
            };
            MsgUpdateBlindBoxContent: {
                encode(message: _533.MsgUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateBlindBoxContent;
                fromJSON(object: any): _533.MsgUpdateBlindBoxContent;
                toJSON(message: _533.MsgUpdateBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _533.MsgUpdateBlindBoxContent;
            };
            MsgUpdateBlindBoxContentResponse: {
                encode(message: _533.MsgUpdateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateBlindBoxContentResponse;
                fromJSON(object: any): _533.MsgUpdateBlindBoxContentResponse;
                toJSON(message: _533.MsgUpdateBlindBoxContentResponse): unknown;
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
                }): _533.MsgUpdateBlindBoxContentResponse;
            };
            MsgDeleteBlindBoxContent: {
                encode(message: _533.MsgDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteBlindBoxContent;
                fromJSON(object: any): _533.MsgDeleteBlindBoxContent;
                toJSON(message: _533.MsgDeleteBlindBoxContent): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    id?: string;
                }): _533.MsgDeleteBlindBoxContent;
            };
            MsgDeleteBlindBoxContentResponse: {
                encode(_: _533.MsgDeleteBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteBlindBoxContentResponse;
                fromJSON(_: any): _533.MsgDeleteBlindBoxContentResponse;
                toJSON(_: _533.MsgDeleteBlindBoxContentResponse): unknown;
                fromPartial(_: {}): _533.MsgDeleteBlindBoxContentResponse;
            };
            MsgCreateOffer: {
                encode(message: _533.MsgCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateOffer;
                fromJSON(object: any): _533.MsgCreateOffer;
                toJSON(message: _533.MsgCreateOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _533.MsgCreateOffer;
            };
            MsgCreateOfferResponse: {
                encode(message: _533.MsgCreateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateOfferResponse;
                fromJSON(object: any): _533.MsgCreateOfferResponse;
                toJSON(message: _533.MsgCreateOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _533.MsgCreateOfferResponse;
            };
            MsgUpdateOffer: {
                encode(message: _533.MsgUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateOffer;
                fromJSON(object: any): _533.MsgUpdateOffer;
                toJSON(message: _533.MsgUpdateOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _533.MsgUpdateOffer;
            };
            MsgUpdateOfferResponse: {
                encode(message: _533.MsgUpdateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateOfferResponse;
                fromJSON(object: any): _533.MsgUpdateOfferResponse;
                toJSON(message: _533.MsgUpdateOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _533.MsgUpdateOfferResponse;
            };
            MsgDeleteOffer: {
                encode(message: _533.MsgDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteOffer;
                fromJSON(object: any): _533.MsgDeleteOffer;
                toJSON(message: _533.MsgDeleteOffer): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _533.MsgDeleteOffer;
            };
            MsgDeleteOfferResponse: {
                encode(_: _533.MsgDeleteOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteOfferResponse;
                fromJSON(_: any): _533.MsgDeleteOfferResponse;
                toJSON(_: _533.MsgDeleteOfferResponse): unknown;
                fromPartial(_: {}): _533.MsgDeleteOfferResponse;
            };
            MsgCreateListing: {
                encode(message: _533.MsgCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateListing;
                fromJSON(object: any): _533.MsgCreateListing;
                toJSON(message: _533.MsgCreateListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _533.MsgCreateListing;
            };
            MsgCreateListingResponse: {
                encode(message: _533.MsgCreateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateListingResponse;
                fromJSON(object: any): _533.MsgCreateListingResponse;
                toJSON(message: _533.MsgCreateListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _533.MsgCreateListingResponse;
            };
            MsgUpdateListing: {
                encode(message: _533.MsgUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateListing;
                fromJSON(object: any): _533.MsgUpdateListing;
                toJSON(message: _533.MsgUpdateListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _533.MsgUpdateListing;
            };
            MsgUpdateListingResponse: {
                encode(message: _533.MsgUpdateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateListingResponse;
                fromJSON(object: any): _533.MsgUpdateListingResponse;
                toJSON(message: _533.MsgUpdateListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _533.MsgUpdateListingResponse;
            };
            MsgDeleteListing: {
                encode(message: _533.MsgDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteListing;
                fromJSON(object: any): _533.MsgDeleteListing;
                toJSON(message: _533.MsgDeleteListing): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                }): _533.MsgDeleteListing;
            };
            MsgDeleteListingResponse: {
                encode(_: _533.MsgDeleteListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteListingResponse;
                fromJSON(_: any): _533.MsgDeleteListingResponse;
                toJSON(_: _533.MsgDeleteListingResponse): unknown;
                fromPartial(_: {}): _533.MsgDeleteListingResponse;
            };
            MsgSellNFT: {
                encode(message: _533.MsgSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgSellNFT;
                fromJSON(object: any): _533.MsgSellNFT;
                toJSON(message: _533.MsgSellNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    price?: any;
                }): _533.MsgSellNFT;
            };
            MsgSellNFTResponse: {
                encode(_: _533.MsgSellNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgSellNFTResponse;
                fromJSON(_: any): _533.MsgSellNFTResponse;
                toJSON(_: _533.MsgSellNFTResponse): unknown;
                fromPartial(_: {}): _533.MsgSellNFTResponse;
            };
            MsgBuyNFT: {
                encode(message: _533.MsgBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgBuyNFT;
                fromJSON(object: any): _533.MsgBuyNFT;
                toJSON(message: _533.MsgBuyNFT): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    price?: any;
                }): _533.MsgBuyNFT;
            };
            MsgBuyNFTResponse: {
                encode(_: _533.MsgBuyNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgBuyNFTResponse;
                fromJSON(_: any): _533.MsgBuyNFTResponse;
                toJSON(_: _533.MsgBuyNFTResponse): unknown;
                fromPartial(_: {}): _533.MsgBuyNFTResponse;
            };
            MsgCreateRoyaltyConfig: {
                encode(message: _533.MsgCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateRoyaltyConfig;
                fromJSON(object: any): _533.MsgCreateRoyaltyConfig;
                toJSON(message: _533.MsgCreateRoyaltyConfig): unknown;
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
                }): _533.MsgCreateRoyaltyConfig;
            };
            MsgCreateRoyaltyConfigResponse: {
                encode(message: _533.MsgCreateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgCreateRoyaltyConfigResponse;
                fromJSON(object: any): _533.MsgCreateRoyaltyConfigResponse;
                toJSON(message: _533.MsgCreateRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _533.MsgCreateRoyaltyConfigResponse;
            };
            MsgUpdateRoyaltyConfig: {
                encode(message: _533.MsgUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateRoyaltyConfig;
                fromJSON(object: any): _533.MsgUpdateRoyaltyConfig;
                toJSON(message: _533.MsgUpdateRoyaltyConfig): unknown;
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
                }): _533.MsgUpdateRoyaltyConfig;
            };
            MsgUpdateRoyaltyConfigResponse: {
                encode(message: _533.MsgUpdateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgUpdateRoyaltyConfigResponse;
                fromJSON(object: any): _533.MsgUpdateRoyaltyConfigResponse;
                toJSON(message: _533.MsgUpdateRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _533.MsgUpdateRoyaltyConfigResponse;
            };
            MsgDeleteRoyaltyConfig: {
                encode(message: _533.MsgDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteRoyaltyConfig;
                fromJSON(object: any): _533.MsgDeleteRoyaltyConfig;
                toJSON(message: _533.MsgDeleteRoyaltyConfig): unknown;
                fromPartial(object: {
                    creator?: string;
                    classId?: string;
                }): _533.MsgDeleteRoyaltyConfig;
            };
            MsgDeleteRoyaltyConfigResponse: {
                encode(_: _533.MsgDeleteRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.MsgDeleteRoyaltyConfigResponse;
                fromJSON(_: any): _533.MsgDeleteRoyaltyConfigResponse;
                toJSON(_: _533.MsgDeleteRoyaltyConfigResponse): unknown;
                fromPartial(_: {}): _533.MsgDeleteRoyaltyConfigResponse;
            };
            RoyaltyConfigByClass: {
                encode(message: _532.RoyaltyConfigByClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.RoyaltyConfigByClass;
                fromJSON(object: any): _532.RoyaltyConfigByClass;
                toJSON(message: _532.RoyaltyConfigByClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _532.RoyaltyConfigByClass;
            };
            RoyaltyConfig: {
                encode(message: _532.RoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.RoyaltyConfig;
                fromJSON(object: any): _532.RoyaltyConfig;
                toJSON(message: _532.RoyaltyConfig): unknown;
                fromPartial(object: {
                    rateBasisPoints?: any;
                    stakeholders?: {
                        account?: Uint8Array;
                        weight?: any;
                    }[];
                }): _532.RoyaltyConfig;
            };
            RoyaltyStakeholder: {
                encode(message: _532.RoyaltyStakeholder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.RoyaltyStakeholder;
                fromJSON(object: any): _532.RoyaltyStakeholder;
                toJSON(message: _532.RoyaltyStakeholder): unknown;
                fromPartial(object: {
                    account?: Uint8Array;
                    weight?: any;
                }): _532.RoyaltyStakeholder;
            };
            RoyaltyConfigInput: {
                encode(message: _532.RoyaltyConfigInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.RoyaltyConfigInput;
                fromJSON(object: any): _532.RoyaltyConfigInput;
                toJSON(message: _532.RoyaltyConfigInput): unknown;
                fromPartial(object: {
                    rateBasisPoints?: any;
                    stakeholders?: {
                        account?: string;
                        weight?: any;
                    }[];
                }): _532.RoyaltyConfigInput;
            };
            RoyaltyStakeholderInput: {
                encode(message: _532.RoyaltyStakeholderInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.RoyaltyStakeholderInput;
                fromJSON(object: any): _532.RoyaltyStakeholderInput;
                toJSON(message: _532.RoyaltyStakeholderInput): unknown;
                fromPartial(object: {
                    account?: string;
                    weight?: any;
                }): _532.RoyaltyStakeholderInput;
            };
            QueryParamsRequest: {
                encode(_: _531.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsRequest;
                fromJSON(_: any): _531.QueryParamsRequest;
                toJSON(_: _531.QueryParamsRequest): unknown;
                fromPartial(_: {}): _531.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _531.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsResponse;
                fromJSON(object: any): _531.QueryParamsResponse;
                toJSON(message: _531.QueryParamsResponse): unknown;
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
                }): _531.QueryParamsResponse;
            };
            QueryClassesByISCNRequest: {
                encode(message: _531.QueryClassesByISCNRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByISCNRequest;
                fromJSON(object: any): _531.QueryClassesByISCNRequest;
                toJSON(message: _531.QueryClassesByISCNRequest): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryClassesByISCNRequest;
            };
            QueryClassesByISCNResponse: {
                encode(message: _531.QueryClassesByISCNResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByISCNResponse;
                fromJSON(object: any): _531.QueryClassesByISCNResponse;
                toJSON(message: _531.QueryClassesByISCNResponse): unknown;
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
                }): _531.QueryClassesByISCNResponse;
            };
            QueryClassesByISCNIndexRequest: {
                encode(message: _531.QueryClassesByISCNIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByISCNIndexRequest;
                fromJSON(object: any): _531.QueryClassesByISCNIndexRequest;
                toJSON(message: _531.QueryClassesByISCNIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryClassesByISCNIndexRequest;
            };
            QueryClassesByISCNIndexResponse: {
                encode(message: _531.QueryClassesByISCNIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByISCNIndexResponse;
                fromJSON(object: any): _531.QueryClassesByISCNIndexResponse;
                toJSON(message: _531.QueryClassesByISCNIndexResponse): unknown;
                fromPartial(object: {
                    classesByIscns?: {
                        iscnIdPrefix?: string;
                        classIds?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryClassesByISCNIndexResponse;
            };
            QueryISCNByClassRequest: {
                encode(message: _531.QueryISCNByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryISCNByClassRequest;
                fromJSON(object: any): _531.QueryISCNByClassRequest;
                toJSON(message: _531.QueryISCNByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _531.QueryISCNByClassRequest;
            };
            QueryISCNByClassResponse: {
                encode(message: _531.QueryISCNByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryISCNByClassResponse;
                fromJSON(object: any): _531.QueryISCNByClassResponse;
                toJSON(message: _531.QueryISCNByClassResponse): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    owner?: string;
                    latestVersion?: any;
                    latestRecord?: {
                        ipld?: string;
                        data?: Uint8Array;
                    };
                }): _531.QueryISCNByClassResponse;
            };
            QueryClassesByAccountRequest: {
                encode(message: _531.QueryClassesByAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByAccountRequest;
                fromJSON(object: any): _531.QueryClassesByAccountRequest;
                toJSON(message: _531.QueryClassesByAccountRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryClassesByAccountRequest;
            };
            QueryClassesByAccountResponse: {
                encode(message: _531.QueryClassesByAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByAccountResponse;
                fromJSON(object: any): _531.QueryClassesByAccountResponse;
                toJSON(message: _531.QueryClassesByAccountResponse): unknown;
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
                }): _531.QueryClassesByAccountResponse;
            };
            QueryClassesByAccountIndexRequest: {
                encode(message: _531.QueryClassesByAccountIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByAccountIndexRequest;
                fromJSON(object: any): _531.QueryClassesByAccountIndexRequest;
                toJSON(message: _531.QueryClassesByAccountIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryClassesByAccountIndexRequest;
            };
            QueryClassesByAccountIndexResponse: {
                encode(message: _531.QueryClassesByAccountIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryClassesByAccountIndexResponse;
                fromJSON(object: any): _531.QueryClassesByAccountIndexResponse;
                toJSON(message: _531.QueryClassesByAccountIndexResponse): unknown;
                fromPartial(object: {
                    classesByAccounts?: {
                        account?: string;
                        classIds?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryClassesByAccountIndexResponse;
            };
            QueryAccountByClassRequest: {
                encode(message: _531.QueryAccountByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryAccountByClassRequest;
                fromJSON(object: any): _531.QueryAccountByClassRequest;
                toJSON(message: _531.QueryAccountByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _531.QueryAccountByClassRequest;
            };
            QueryAccountByClassResponse: {
                encode(message: _531.QueryAccountByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryAccountByClassResponse;
                fromJSON(object: any): _531.QueryAccountByClassResponse;
                toJSON(message: _531.QueryAccountByClassResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _531.QueryAccountByClassResponse;
            };
            QueryBlindBoxContentRequest: {
                encode(message: _531.QueryBlindBoxContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentRequest;
                fromJSON(object: any): _531.QueryBlindBoxContentRequest;
                toJSON(message: _531.QueryBlindBoxContentRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _531.QueryBlindBoxContentRequest;
            };
            QueryBlindBoxContentResponse: {
                encode(message: _531.QueryBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentResponse;
                fromJSON(object: any): _531.QueryBlindBoxContentResponse;
                toJSON(message: _531.QueryBlindBoxContentResponse): unknown;
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
                }): _531.QueryBlindBoxContentResponse;
            };
            QueryBlindBoxContentIndexRequest: {
                encode(message: _531.QueryBlindBoxContentIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentIndexRequest;
                fromJSON(object: any): _531.QueryBlindBoxContentIndexRequest;
                toJSON(message: _531.QueryBlindBoxContentIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryBlindBoxContentIndexRequest;
            };
            QueryBlindBoxContentIndexResponse: {
                encode(message: _531.QueryBlindBoxContentIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentIndexResponse;
                fromJSON(object: any): _531.QueryBlindBoxContentIndexResponse;
                toJSON(message: _531.QueryBlindBoxContentIndexResponse): unknown;
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
                }): _531.QueryBlindBoxContentIndexResponse;
            };
            QueryBlindBoxContentsRequest: {
                encode(message: _531.QueryBlindBoxContentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentsRequest;
                fromJSON(object: any): _531.QueryBlindBoxContentsRequest;
                toJSON(message: _531.QueryBlindBoxContentsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryBlindBoxContentsRequest;
            };
            QueryBlindBoxContentsResponse: {
                encode(message: _531.QueryBlindBoxContentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryBlindBoxContentsResponse;
                fromJSON(object: any): _531.QueryBlindBoxContentsResponse;
                toJSON(message: _531.QueryBlindBoxContentsResponse): unknown;
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
                }): _531.QueryBlindBoxContentsResponse;
            };
            QueryOfferRequest: {
                encode(message: _531.QueryOfferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOfferRequest;
                fromJSON(object: any): _531.QueryOfferRequest;
                toJSON(message: _531.QueryOfferRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _531.QueryOfferRequest;
            };
            QueryOfferResponse: {
                encode(message: _531.QueryOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOfferResponse;
                fromJSON(object: any): _531.QueryOfferResponse;
                toJSON(message: _531.QueryOfferResponse): unknown;
                fromPartial(object: {
                    offer?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _531.QueryOfferResponse;
            };
            QueryOfferIndexRequest: {
                encode(message: _531.QueryOfferIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOfferIndexRequest;
                fromJSON(object: any): _531.QueryOfferIndexRequest;
                toJSON(message: _531.QueryOfferIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryOfferIndexRequest;
            };
            QueryOfferIndexResponse: {
                encode(message: _531.QueryOfferIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOfferIndexResponse;
                fromJSON(object: any): _531.QueryOfferIndexResponse;
                toJSON(message: _531.QueryOfferIndexResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryOfferIndexResponse;
            };
            QueryOffersByClassRequest: {
                encode(message: _531.QueryOffersByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOffersByClassRequest;
                fromJSON(object: any): _531.QueryOffersByClassRequest;
                toJSON(message: _531.QueryOffersByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryOffersByClassRequest;
            };
            QueryOffersByClassResponse: {
                encode(message: _531.QueryOffersByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOffersByClassResponse;
                fromJSON(object: any): _531.QueryOffersByClassResponse;
                toJSON(message: _531.QueryOffersByClassResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryOffersByClassResponse;
            };
            QueryOffersByNFTRequest: {
                encode(message: _531.QueryOffersByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOffersByNFTRequest;
                fromJSON(object: any): _531.QueryOffersByNFTRequest;
                toJSON(message: _531.QueryOffersByNFTRequest): unknown;
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
                }): _531.QueryOffersByNFTRequest;
            };
            QueryOffersByNFTResponse: {
                encode(message: _531.QueryOffersByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryOffersByNFTResponse;
                fromJSON(object: any): _531.QueryOffersByNFTResponse;
                toJSON(message: _531.QueryOffersByNFTResponse): unknown;
                fromPartial(object: {
                    offers?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryOffersByNFTResponse;
            };
            QueryListingRequest: {
                encode(message: _531.QueryListingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingRequest;
                fromJSON(object: any): _531.QueryListingRequest;
                toJSON(message: _531.QueryListingRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _531.QueryListingRequest;
            };
            QueryListingResponse: {
                encode(message: _531.QueryListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingResponse;
                fromJSON(object: any): _531.QueryListingResponse;
                toJSON(message: _531.QueryListingResponse): unknown;
                fromPartial(object: {
                    listing?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _531.QueryListingResponse;
            };
            QueryListingIndexRequest: {
                encode(message: _531.QueryListingIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingIndexRequest;
                fromJSON(object: any): _531.QueryListingIndexRequest;
                toJSON(message: _531.QueryListingIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryListingIndexRequest;
            };
            QueryListingIndexResponse: {
                encode(message: _531.QueryListingIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingIndexResponse;
                fromJSON(object: any): _531.QueryListingIndexResponse;
                toJSON(message: _531.QueryListingIndexResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryListingIndexResponse;
            };
            QueryListingsByClassRequest: {
                encode(message: _531.QueryListingsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingsByClassRequest;
                fromJSON(object: any): _531.QueryListingsByClassRequest;
                toJSON(message: _531.QueryListingsByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryListingsByClassRequest;
            };
            QueryListingsByClassResponse: {
                encode(message: _531.QueryListingsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingsByClassResponse;
                fromJSON(object: any): _531.QueryListingsByClassResponse;
                toJSON(message: _531.QueryListingsByClassResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryListingsByClassResponse;
            };
            QueryListingsByNFTRequest: {
                encode(message: _531.QueryListingsByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingsByNFTRequest;
                fromJSON(object: any): _531.QueryListingsByNFTRequest;
                toJSON(message: _531.QueryListingsByNFTRequest): unknown;
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
                }): _531.QueryListingsByNFTRequest;
            };
            QueryListingsByNFTResponse: {
                encode(message: _531.QueryListingsByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryListingsByNFTResponse;
                fromJSON(object: any): _531.QueryListingsByNFTResponse;
                toJSON(message: _531.QueryListingsByNFTResponse): unknown;
                fromPartial(object: {
                    listings?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _531.QueryListingsByNFTResponse;
            };
            QueryRoyaltyConfigRequest: {
                encode(message: _531.QueryRoyaltyConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryRoyaltyConfigRequest;
                fromJSON(object: any): _531.QueryRoyaltyConfigRequest;
                toJSON(message: _531.QueryRoyaltyConfigRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _531.QueryRoyaltyConfigRequest;
            };
            QueryRoyaltyConfigResponse: {
                encode(message: _531.QueryRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryRoyaltyConfigResponse;
                fromJSON(object: any): _531.QueryRoyaltyConfigResponse;
                toJSON(message: _531.QueryRoyaltyConfigResponse): unknown;
                fromPartial(object: {
                    royaltyConfig?: {
                        rateBasisPoints?: any;
                        stakeholders?: {
                            account?: Uint8Array;
                            weight?: any;
                        }[];
                    };
                }): _531.QueryRoyaltyConfigResponse;
            };
            QueryRoyaltyConfigIndexRequest: {
                encode(message: _531.QueryRoyaltyConfigIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryRoyaltyConfigIndexRequest;
                fromJSON(object: any): _531.QueryRoyaltyConfigIndexRequest;
                toJSON(message: _531.QueryRoyaltyConfigIndexRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _531.QueryRoyaltyConfigIndexRequest;
            };
            QueryRoyaltyConfigIndexResponse: {
                encode(message: _531.QueryRoyaltyConfigIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryRoyaltyConfigIndexResponse;
                fromJSON(object: any): _531.QueryRoyaltyConfigIndexResponse;
                toJSON(message: _531.QueryRoyaltyConfigIndexResponse): unknown;
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
                }): _531.QueryRoyaltyConfigIndexResponse;
            };
            Params: {
                encode(message: _530.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.Params;
                fromJSON(object: any): _530.Params;
                toJSON(message: _530.Params): unknown;
                fromPartial(object: {
                    priceDenom?: string;
                    feePerByte?: {
                        denom?: string;
                        amount?: string;
                    };
                    maxOfferDurationDays?: any;
                    maxListingDurationDays?: any;
                    maxRoyaltyBasisPoints?: any;
                }): _530.Params;
            };
            Offer: {
                encode(message: _529.Offer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.Offer;
                fromJSON(object: any): _529.Offer;
                toJSON(message: _529.Offer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _529.Offer;
            };
            OfferStoreRecord: {
                encode(message: _529.OfferStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.OfferStoreRecord;
                fromJSON(object: any): _529.OfferStoreRecord;
                toJSON(message: _529.OfferStoreRecord): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: Uint8Array;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _529.OfferStoreRecord;
            };
            OfferExpireQueueEntry: {
                encode(message: _528.OfferExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.OfferExpireQueueEntry;
                fromJSON(object: any): _528.OfferExpireQueueEntry;
                toJSON(message: _528.OfferExpireQueueEntry): unknown;
                fromPartial(object: {
                    expireTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    offerKey?: Uint8Array;
                }): _528.OfferExpireQueueEntry;
            };
            NFTInput: {
                encode(message: _527.NFTInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.NFTInput;
                fromJSON(object: any): _527.NFTInput;
                toJSON(message: _527.NFTInput): unknown;
                fromPartial(object: {
                    uri?: string;
                    uriHash?: string;
                    metadata?: Uint8Array;
                }): _527.NFTInput;
            };
            NFTData: {
                encode(message: _526.NFTData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.NFTData;
                fromJSON(object: any): _526.NFTData;
                toJSON(message: _526.NFTData): unknown;
                fromPartial(object: {
                    metadata?: Uint8Array;
                    classParent?: {
                        type?: _517.ClassParentType;
                        iscnIdPrefix?: string;
                        iscnVersionAtMint?: any;
                        account?: string;
                    };
                    toBeRevealed?: boolean;
                }): _526.NFTData;
            };
            Listing: {
                encode(message: _525.Listing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.Listing;
                fromJSON(object: any): _525.Listing;
                toJSON(message: _525.Listing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _525.Listing;
            };
            ListingStoreRecord: {
                encode(message: _525.ListingStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.ListingStoreRecord;
                fromJSON(object: any): _525.ListingStoreRecord;
                toJSON(message: _525.ListingStoreRecord): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: Uint8Array;
                    price?: any;
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _525.ListingStoreRecord;
            };
            ListingExpireQueueEntry: {
                encode(message: _524.ListingExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _524.ListingExpireQueueEntry;
                fromJSON(object: any): _524.ListingExpireQueueEntry;
                toJSON(message: _524.ListingExpireQueueEntry): unknown;
                fromPartial(object: {
                    expireTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    listingKey?: Uint8Array;
                }): _524.ListingExpireQueueEntry;
            };
            GenesisState: {
                encode(message: _523.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.GenesisState;
                fromJSON(object: any): _523.GenesisState;
                toJSON(message: _523.GenesisState): unknown;
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
                        revealTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        classId?: string;
                    }[];
                    offerList?: {
                        classId?: string;
                        nftId?: string;
                        buyer?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    listingList?: {
                        classId?: string;
                        nftId?: string;
                        seller?: string;
                        price?: any;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    offerExpireQueue?: {
                        expireTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        offerKey?: Uint8Array;
                    }[];
                    listingExpireQueue?: {
                        expireTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                }): _523.GenesisState;
            };
            EventNewClass: {
                encode(message: _522.EventNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventNewClass;
                fromJSON(object: any): _522.EventNewClass;
                toJSON(message: _522.EventNewClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    parentIscnIdPrefix?: string;
                    parentAccount?: string;
                }): _522.EventNewClass;
            };
            EventUpdateClass: {
                encode(message: _522.EventUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventUpdateClass;
                fromJSON(object: any): _522.EventUpdateClass;
                toJSON(message: _522.EventUpdateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    parentIscnIdPrefix?: string;
                    parentAccount?: string;
                }): _522.EventUpdateClass;
            };
            EventRevealClass: {
                encode(message: _522.EventRevealClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventRevealClass;
                fromJSON(object: any): _522.EventRevealClass;
                toJSON(message: _522.EventRevealClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    success?: boolean;
                    error?: string;
                }): _522.EventRevealClass;
            };
            EventMintNFT: {
                encode(message: _522.EventMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventMintNFT;
                fromJSON(object: any): _522.EventMintNFT;
                toJSON(message: _522.EventMintNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    owner?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _522.EventMintNFT;
            };
            EventBurnNFT: {
                encode(message: _522.EventBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventBurnNFT;
                fromJSON(object: any): _522.EventBurnNFT;
                toJSON(message: _522.EventBurnNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    owner?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _522.EventBurnNFT;
            };
            EventCreateBlindBoxContent: {
                encode(message: _522.EventCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventCreateBlindBoxContent;
                fromJSON(object: any): _522.EventCreateBlindBoxContent;
                toJSON(message: _522.EventCreateBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _522.EventCreateBlindBoxContent;
            };
            EventUpdateBlindBoxContent: {
                encode(message: _522.EventUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventUpdateBlindBoxContent;
                fromJSON(object: any): _522.EventUpdateBlindBoxContent;
                toJSON(message: _522.EventUpdateBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _522.EventUpdateBlindBoxContent;
            };
            EventDeleteBlindBoxContent: {
                encode(message: _522.EventDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventDeleteBlindBoxContent;
                fromJSON(object: any): _522.EventDeleteBlindBoxContent;
                toJSON(message: _522.EventDeleteBlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    contentId?: string;
                    classParentIscnIdPrefix?: string;
                    classParentAccount?: string;
                }): _522.EventDeleteBlindBoxContent;
            };
            EventCreateOffer: {
                encode(message: _522.EventCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventCreateOffer;
                fromJSON(object: any): _522.EventCreateOffer;
                toJSON(message: _522.EventCreateOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _522.EventCreateOffer;
            };
            EventUpdateOffer: {
                encode(message: _522.EventUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventUpdateOffer;
                fromJSON(object: any): _522.EventUpdateOffer;
                toJSON(message: _522.EventUpdateOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _522.EventUpdateOffer;
            };
            EventDeleteOffer: {
                encode(message: _522.EventDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventDeleteOffer;
                fromJSON(object: any): _522.EventDeleteOffer;
                toJSON(message: _522.EventDeleteOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                }): _522.EventDeleteOffer;
            };
            EventCreateListing: {
                encode(message: _522.EventCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventCreateListing;
                fromJSON(object: any): _522.EventCreateListing;
                toJSON(message: _522.EventCreateListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _522.EventCreateListing;
            };
            EventUpdateListing: {
                encode(message: _522.EventUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventUpdateListing;
                fromJSON(object: any): _522.EventUpdateListing;
                toJSON(message: _522.EventUpdateListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _522.EventUpdateListing;
            };
            EventDeleteListing: {
                encode(message: _522.EventDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventDeleteListing;
                fromJSON(object: any): _522.EventDeleteListing;
                toJSON(message: _522.EventDeleteListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                }): _522.EventDeleteListing;
            };
            EventSellNFT: {
                encode(message: _522.EventSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventSellNFT;
                fromJSON(object: any): _522.EventSellNFT;
                toJSON(message: _522.EventSellNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    buyer?: string;
                    price?: any;
                }): _522.EventSellNFT;
            };
            EventBuyNFT: {
                encode(message: _522.EventBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventBuyNFT;
                fromJSON(object: any): _522.EventBuyNFT;
                toJSON(message: _522.EventBuyNFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    buyer?: string;
                    price?: any;
                }): _522.EventBuyNFT;
            };
            EventExpireOffer: {
                encode(message: _522.EventExpireOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventExpireOffer;
                fromJSON(object: any): _522.EventExpireOffer;
                toJSON(message: _522.EventExpireOffer): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    buyer?: string;
                    success?: boolean;
                    error?: string;
                }): _522.EventExpireOffer;
            };
            EventExpireListing: {
                encode(message: _522.EventExpireListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventExpireListing;
                fromJSON(object: any): _522.EventExpireListing;
                toJSON(message: _522.EventExpireListing): unknown;
                fromPartial(object: {
                    classId?: string;
                    nftId?: string;
                    seller?: string;
                    success?: boolean;
                    error?: string;
                }): _522.EventExpireListing;
            };
            EventCreateRoyaltyConfig: {
                encode(message: _522.EventCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventCreateRoyaltyConfig;
                fromJSON(object: any): _522.EventCreateRoyaltyConfig;
                toJSON(message: _522.EventCreateRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _522.EventCreateRoyaltyConfig;
            };
            EventUpdateRoyaltyConfig: {
                encode(message: _522.EventUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventUpdateRoyaltyConfig;
                fromJSON(object: any): _522.EventUpdateRoyaltyConfig;
                toJSON(message: _522.EventUpdateRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _522.EventUpdateRoyaltyConfig;
            };
            EventDeleteRoyaltyConfig: {
                encode(message: _522.EventDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.EventDeleteRoyaltyConfig;
                fromJSON(object: any): _522.EventDeleteRoyaltyConfig;
                toJSON(message: _522.EventDeleteRoyaltyConfig): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _522.EventDeleteRoyaltyConfig;
            };
            ClassesByISCN: {
                encode(message: _521.ClassesByISCN, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.ClassesByISCN;
                fromJSON(object: any): _521.ClassesByISCN;
                toJSON(message: _521.ClassesByISCN): unknown;
                fromPartial(object: {
                    iscnIdPrefix?: string;
                    classIds?: string[];
                }): _521.ClassesByISCN;
            };
            ClassesByAccount: {
                encode(message: _520.ClassesByAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.ClassesByAccount;
                fromJSON(object: any): _520.ClassesByAccount;
                toJSON(message: _520.ClassesByAccount): unknown;
                fromPartial(object: {
                    account?: string;
                    classIds?: string[];
                }): _520.ClassesByAccount;
            };
            ClassesByAccountStoreRecord: {
                encode(message: _520.ClassesByAccountStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.ClassesByAccountStoreRecord;
                fromJSON(object: any): _520.ClassesByAccountStoreRecord;
                toJSON(message: _520.ClassesByAccountStoreRecord): unknown;
                fromPartial(object: {
                    accAddress?: Uint8Array;
                    classIds?: string[];
                }): _520.ClassesByAccountStoreRecord;
            };
            ClassRevealQueueEntry: {
                encode(message: _519.ClassRevealQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.ClassRevealQueueEntry;
                fromJSON(object: any): _519.ClassRevealQueueEntry;
                toJSON(message: _519.ClassRevealQueueEntry): unknown;
                fromPartial(object: {
                    revealTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    classId?: string;
                }): _519.ClassRevealQueueEntry;
            };
            ClassInput: {
                encode(message: _518.ClassInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.ClassInput;
                fromJSON(object: any): _518.ClassInput;
                toJSON(message: _518.ClassInput): unknown;
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
                                startTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                allowedAddresses?: string[];
                                mintPrice?: any;
                            }[];
                            revealTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    };
                }): _518.ClassInput;
            };
            ClassParentInput: {
                encode(message: _518.ClassParentInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.ClassParentInput;
                fromJSON(object: any): _518.ClassParentInput;
                toJSON(message: _518.ClassParentInput): unknown;
                fromPartial(object: {
                    type?: _517.ClassParentType;
                    iscnIdPrefix?: string;
                }): _518.ClassParentInput;
            };
            classParentTypeFromJSON(object: any): _517.ClassParentType;
            classParentTypeToJSON(object: _517.ClassParentType): string;
            ClassParentType: typeof _517.ClassParentType;
            ClassData: {
                encode(message: _517.ClassData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.ClassData;
                fromJSON(object: any): _517.ClassData;
                toJSON(message: _517.ClassData): unknown;
                fromPartial(object: {
                    metadata?: Uint8Array;
                    parent?: {
                        type?: _517.ClassParentType;
                        iscnIdPrefix?: string;
                        iscnVersionAtMint?: any;
                        account?: string;
                    };
                    config?: {
                        burnable?: boolean;
                        maxSupply?: any;
                        blindBoxConfig?: {
                            mintPeriods?: {
                                startTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                allowedAddresses?: string[];
                                mintPrice?: any;
                            }[];
                            revealTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    };
                    blindBoxState?: {
                        contentCount?: any;
                        toBeRevealed?: boolean;
                    };
                }): _517.ClassData;
            };
            ClassParent: {
                encode(message: _517.ClassParent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.ClassParent;
                fromJSON(object: any): _517.ClassParent;
                toJSON(message: _517.ClassParent): unknown;
                fromPartial(object: {
                    type?: _517.ClassParentType;
                    iscnIdPrefix?: string;
                    iscnVersionAtMint?: any;
                    account?: string;
                }): _517.ClassParent;
            };
            MintPeriod: {
                encode(message: _517.MintPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.MintPeriod;
                fromJSON(object: any): _517.MintPeriod;
                toJSON(message: _517.MintPeriod): unknown;
                fromPartial(object: {
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    allowedAddresses?: string[];
                    mintPrice?: any;
                }): _517.MintPeriod;
            };
            ClassConfig: {
                encode(message: _517.ClassConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.ClassConfig;
                fromJSON(object: any): _517.ClassConfig;
                toJSON(message: _517.ClassConfig): unknown;
                fromPartial(object: {
                    burnable?: boolean;
                    maxSupply?: any;
                    blindBoxConfig?: {
                        mintPeriods?: {
                            startTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            allowedAddresses?: string[];
                            mintPrice?: any;
                        }[];
                        revealTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _517.ClassConfig;
            };
            BlindBoxConfig: {
                encode(message: _517.BlindBoxConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.BlindBoxConfig;
                fromJSON(object: any): _517.BlindBoxConfig;
                toJSON(message: _517.BlindBoxConfig): unknown;
                fromPartial(object: {
                    mintPeriods?: {
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        allowedAddresses?: string[];
                        mintPrice?: any;
                    }[];
                    revealTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _517.BlindBoxConfig;
            };
            BlindBoxState: {
                encode(message: _517.BlindBoxState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.BlindBoxState;
                fromJSON(object: any): _517.BlindBoxState;
                toJSON(message: _517.BlindBoxState): unknown;
                fromPartial(object: {
                    contentCount?: any;
                    toBeRevealed?: boolean;
                }): _517.BlindBoxState;
            };
            BlindBoxContent: {
                encode(message: _516.BlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.BlindBoxContent;
                fromJSON(object: any): _516.BlindBoxContent;
                toJSON(message: _516.BlindBoxContent): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    input?: {
                        uri?: string;
                        uriHash?: string;
                        metadata?: Uint8Array;
                    };
                }): _516.BlindBoxContent;
            };
        };
    }
}
