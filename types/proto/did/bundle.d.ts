import * as _442 from "../ixo/did/did";
import * as _443 from "../ixo/did/diddoc";
import * as _444 from "../ixo/did/genesis";
import * as _445 from "../ixo/did/query";
import * as _446 from "../ixo/did/tx";
export declare const did: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            addDid(value: _446.MsgAddDid): {
                typeUrl: string;
                value: Uint8Array;
            };
            addCredential(value: _446.MsgAddCredential): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            addDid(value: _446.MsgAddDid): {
                typeUrl: string;
                value: _446.MsgAddDid;
            };
            addCredential(value: _446.MsgAddCredential): {
                typeUrl: string;
                value: _446.MsgAddCredential;
            };
        };
        toJSON: {
            addDid(value: _446.MsgAddDid): {
                typeUrl: string;
                value: unknown;
            };
            addCredential(value: _446.MsgAddCredential): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            addDid(value: any): {
                typeUrl: string;
                value: _446.MsgAddDid;
            };
            addCredential(value: any): {
                typeUrl: string;
                value: _446.MsgAddCredential;
            };
        };
        fromPartial: {
            addDid(value: _446.MsgAddDid): {
                typeUrl: string;
                value: _446.MsgAddDid;
            };
            addCredential(value: _446.MsgAddCredential): {
                typeUrl: string;
                value: _446.MsgAddCredential;
            };
        };
    };
    AminoConverter: {
        "/did.MsgAddDid": {
            aminoType: string;
            toAmino: ({ did, pubKey }: _446.MsgAddDid) => {
                did: string;
                pubKey: string;
            };
            fromAmino: ({ did, pubKey }: {
                did: string;
                pubKey: string;
            }) => _446.MsgAddDid;
        };
        "/did.MsgAddCredential": {
            aminoType: string;
            toAmino: ({ didCredential }: _446.MsgAddCredential) => {
                did_credential: {
                    cred_type: string[];
                    issuer: string;
                    issued: string;
                    claim: {
                        id: string;
                        KYC_validated: boolean;
                    };
                };
            };
            fromAmino: ({ did_credential }: {
                did_credential: {
                    cred_type: string[];
                    issuer: string;
                    issued: string;
                    claim: {
                        id: string;
                        KYC_validated: boolean;
                    };
                };
            }) => _446.MsgAddCredential;
        };
    };
    MsgAddDid: {
        encode(message: _446.MsgAddDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.MsgAddDid;
        fromJSON(object: any): _446.MsgAddDid;
        toJSON(message: _446.MsgAddDid): unknown;
        fromPartial(object: {
            did?: string;
            pubKey?: string;
        }): _446.MsgAddDid;
    };
    MsgAddDidResponse: {
        encode(_: _446.MsgAddDidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.MsgAddDidResponse;
        fromJSON(_: any): _446.MsgAddDidResponse;
        toJSON(_: _446.MsgAddDidResponse): unknown;
        fromPartial(_: {}): _446.MsgAddDidResponse;
    };
    MsgAddCredential: {
        encode(message: _446.MsgAddCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.MsgAddCredential;
        fromJSON(object: any): _446.MsgAddCredential;
        toJSON(message: _446.MsgAddCredential): unknown;
        fromPartial(object: {
            didCredential?: {
                credType?: string[];
                issuer?: string;
                issued?: string;
                claim?: {
                    id?: string;
                    KYCValidated?: boolean;
                };
            };
        }): _446.MsgAddCredential;
    };
    MsgAddCredentialResponse: {
        encode(_: _446.MsgAddCredentialResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.MsgAddCredentialResponse;
        fromJSON(_: any): _446.MsgAddCredentialResponse;
        toJSON(_: _446.MsgAddCredentialResponse): unknown;
        fromPartial(_: {}): _446.MsgAddCredentialResponse;
    };
    QueryDidDocRequest: {
        encode(message: _445.QueryDidDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryDidDocRequest;
        fromJSON(object: any): _445.QueryDidDocRequest;
        toJSON(message: _445.QueryDidDocRequest): unknown;
        fromPartial(object: {
            did?: string;
        }): _445.QueryDidDocRequest;
    };
    QueryDidDocResponse: {
        encode(message: _445.QueryDidDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryDidDocResponse;
        fromJSON(object: any): _445.QueryDidDocResponse;
        toJSON(message: _445.QueryDidDocResponse): unknown;
        fromPartial(object: {
            diddoc?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }): _445.QueryDidDocResponse;
    };
    QueryAllDidsRequest: {
        encode(_: _445.QueryAllDidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAllDidsRequest;
        fromJSON(_: any): _445.QueryAllDidsRequest;
        toJSON(_: _445.QueryAllDidsRequest): unknown;
        fromPartial(_: {}): _445.QueryAllDidsRequest;
    };
    QueryAllDidsResponse: {
        encode(message: _445.QueryAllDidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAllDidsResponse;
        fromJSON(object: any): _445.QueryAllDidsResponse;
        toJSON(message: _445.QueryAllDidsResponse): unknown;
        fromPartial(object: {
            dids?: string[];
        }): _445.QueryAllDidsResponse;
    };
    QueryAllDidDocsRequest: {
        encode(_: _445.QueryAllDidDocsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAllDidDocsRequest;
        fromJSON(_: any): _445.QueryAllDidDocsRequest;
        toJSON(_: _445.QueryAllDidDocsRequest): unknown;
        fromPartial(_: {}): _445.QueryAllDidDocsRequest;
    };
    QueryAllDidDocsResponse: {
        encode(message: _445.QueryAllDidDocsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAllDidDocsResponse;
        fromJSON(object: any): _445.QueryAllDidDocsResponse;
        toJSON(message: _445.QueryAllDidDocsResponse): unknown;
        fromPartial(object: {
            diddocs?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }): _445.QueryAllDidDocsResponse;
    };
    QueryAddressFromDidRequest: {
        encode(message: _445.QueryAddressFromDidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAddressFromDidRequest;
        fromJSON(object: any): _445.QueryAddressFromDidRequest;
        toJSON(message: _445.QueryAddressFromDidRequest): unknown;
        fromPartial(object: {
            did?: string;
        }): _445.QueryAddressFromDidRequest;
    };
    QueryAddressFromDidResponse: {
        encode(message: _445.QueryAddressFromDidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAddressFromDidResponse;
        fromJSON(object: any): _445.QueryAddressFromDidResponse;
        toJSON(message: _445.QueryAddressFromDidResponse): unknown;
        fromPartial(object: {
            address?: string;
        }): _445.QueryAddressFromDidResponse;
    };
    QueryAddressFromBase58EncodedPubkeyRequest: {
        encode(message: _445.QueryAddressFromBase58EncodedPubkeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAddressFromBase58EncodedPubkeyRequest;
        fromJSON(object: any): _445.QueryAddressFromBase58EncodedPubkeyRequest;
        toJSON(message: _445.QueryAddressFromBase58EncodedPubkeyRequest): unknown;
        fromPartial(object: {
            pubKey?: string;
        }): _445.QueryAddressFromBase58EncodedPubkeyRequest;
    };
    QueryAddressFromBase58EncodedPubkeyResponse: {
        encode(message: _445.QueryAddressFromBase58EncodedPubkeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _445.QueryAddressFromBase58EncodedPubkeyResponse;
        fromJSON(object: any): _445.QueryAddressFromBase58EncodedPubkeyResponse;
        toJSON(message: _445.QueryAddressFromBase58EncodedPubkeyResponse): unknown;
        fromPartial(object: {
            address?: string;
        }): _445.QueryAddressFromBase58EncodedPubkeyResponse;
    };
    GenesisState: {
        encode(message: _444.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.GenesisState;
        fromJSON(object: any): _444.GenesisState;
        toJSON(message: _444.GenesisState): unknown;
        fromPartial(object: {
            didDocs?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }): _444.GenesisState;
    };
    BaseDidDoc: {
        encode(message: _443.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.BaseDidDoc;
        fromJSON(object: any): _443.BaseDidDoc;
        toJSON(message: _443.BaseDidDoc): unknown;
        fromPartial(object: {
            did?: string;
            pubKey?: string;
            credentials?: {
                credType?: string[];
                issuer?: string;
                issued?: string;
                claim?: {
                    id?: string;
                    KYCValidated?: boolean;
                };
            }[];
        }): _443.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _442.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.DidCredential;
        fromJSON(object: any): _442.DidCredential;
        toJSON(message: _442.DidCredential): unknown;
        fromPartial(object: {
            credType?: string[];
            issuer?: string;
            issued?: string;
            claim?: {
                id?: string;
                KYCValidated?: boolean;
            };
        }): _442.DidCredential;
    };
    Claim: {
        encode(message: _442.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.Claim;
        fromJSON(object: any): _442.Claim;
        toJSON(message: _442.Claim): unknown;
        fromPartial(object: {
            id?: string;
            KYCValidated?: boolean;
        }): _442.Claim;
    };
    IxoDid: {
        encode(message: _442.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.IxoDid;
        fromJSON(object: any): _442.IxoDid;
        toJSON(message: _442.IxoDid): unknown;
        fromPartial(object: {
            did?: string;
            verifyKey?: string;
            encryptionPublicKey?: string;
            secret?: {
                seed?: string;
                signKey?: string;
                encryptionPrivateKey?: string;
            };
        }): _442.IxoDid;
    };
    Secret: {
        encode(message: _442.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.Secret;
        fromJSON(object: any): _442.Secret;
        toJSON(message: _442.Secret): unknown;
        fromPartial(object: {
            seed?: string;
            signKey?: string;
            encryptionPrivateKey?: string;
        }): _442.Secret;
    };
};
