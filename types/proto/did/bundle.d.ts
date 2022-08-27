import * as _374 from "../ixo/did/did";
import * as _375 from "../ixo/did/diddoc";
import * as _376 from "../ixo/did/genesis";
import * as _377 from "../ixo/did/query";
import * as _378 from "../ixo/did/tx";
export declare const did: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            addDid(value: _378.MsgAddDid): {
                typeUrl: string;
                value: Uint8Array;
            };
            addCredential(value: _378.MsgAddCredential): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            addDid(value: _378.MsgAddDid): {
                typeUrl: string;
                value: _378.MsgAddDid;
            };
            addCredential(value: _378.MsgAddCredential): {
                typeUrl: string;
                value: _378.MsgAddCredential;
            };
        };
        toJSON: {
            addDid(value: _378.MsgAddDid): {
                typeUrl: string;
                value: unknown;
            };
            addCredential(value: _378.MsgAddCredential): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            addDid(value: any): {
                typeUrl: string;
                value: _378.MsgAddDid;
            };
            addCredential(value: any): {
                typeUrl: string;
                value: _378.MsgAddCredential;
            };
        };
        fromPartial: {
            addDid(value: _378.MsgAddDid): {
                typeUrl: string;
                value: _378.MsgAddDid;
            };
            addCredential(value: _378.MsgAddCredential): {
                typeUrl: string;
                value: _378.MsgAddCredential;
            };
        };
    };
    AminoConverter: {
        "/did.MsgAddDid": {
            aminoType: string;
            toAmino: ({ did, pubKey }: _378.MsgAddDid) => {
                did: string;
                pubKey: string;
            };
            fromAmino: ({ did, pubKey }: {
                did: string;
                pubKey: string;
            }) => _378.MsgAddDid;
        };
        "/did.MsgAddCredential": {
            aminoType: string;
            toAmino: ({ didCredential }: _378.MsgAddCredential) => {
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
            }) => _378.MsgAddCredential;
        };
    };
    MsgAddDid: {
        encode(message: _378.MsgAddDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.MsgAddDid;
        fromJSON(object: any): _378.MsgAddDid;
        toJSON(message: _378.MsgAddDid): unknown;
        fromPartial(object: {
            did?: string;
            pubKey?: string;
        }): _378.MsgAddDid;
    };
    MsgAddDidResponse: {
        encode(_: _378.MsgAddDidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.MsgAddDidResponse;
        fromJSON(_: any): _378.MsgAddDidResponse;
        toJSON(_: _378.MsgAddDidResponse): unknown;
        fromPartial(_: {}): _378.MsgAddDidResponse;
    };
    MsgAddCredential: {
        encode(message: _378.MsgAddCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.MsgAddCredential;
        fromJSON(object: any): _378.MsgAddCredential;
        toJSON(message: _378.MsgAddCredential): unknown;
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
        }): _378.MsgAddCredential;
    };
    MsgAddCredentialResponse: {
        encode(_: _378.MsgAddCredentialResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.MsgAddCredentialResponse;
        fromJSON(_: any): _378.MsgAddCredentialResponse;
        toJSON(_: _378.MsgAddCredentialResponse): unknown;
        fromPartial(_: {}): _378.MsgAddCredentialResponse;
    };
    QueryDidDocRequest: {
        encode(message: _377.QueryDidDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryDidDocRequest;
        fromJSON(object: any): _377.QueryDidDocRequest;
        toJSON(message: _377.QueryDidDocRequest): unknown;
        fromPartial(object: {
            did?: string;
        }): _377.QueryDidDocRequest;
    };
    QueryDidDocResponse: {
        encode(message: _377.QueryDidDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryDidDocResponse;
        fromJSON(object: any): _377.QueryDidDocResponse;
        toJSON(message: _377.QueryDidDocResponse): unknown;
        fromPartial(object: {
            diddoc?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }): _377.QueryDidDocResponse;
    };
    QueryAllDidsRequest: {
        encode(_: _377.QueryAllDidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAllDidsRequest;
        fromJSON(_: any): _377.QueryAllDidsRequest;
        toJSON(_: _377.QueryAllDidsRequest): unknown;
        fromPartial(_: {}): _377.QueryAllDidsRequest;
    };
    QueryAllDidsResponse: {
        encode(message: _377.QueryAllDidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAllDidsResponse;
        fromJSON(object: any): _377.QueryAllDidsResponse;
        toJSON(message: _377.QueryAllDidsResponse): unknown;
        fromPartial(object: {
            dids?: string[];
        }): _377.QueryAllDidsResponse;
    };
    QueryAllDidDocsRequest: {
        encode(_: _377.QueryAllDidDocsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAllDidDocsRequest;
        fromJSON(_: any): _377.QueryAllDidDocsRequest;
        toJSON(_: _377.QueryAllDidDocsRequest): unknown;
        fromPartial(_: {}): _377.QueryAllDidDocsRequest;
    };
    QueryAllDidDocsResponse: {
        encode(message: _377.QueryAllDidDocsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAllDidDocsResponse;
        fromJSON(object: any): _377.QueryAllDidDocsResponse;
        toJSON(message: _377.QueryAllDidDocsResponse): unknown;
        fromPartial(object: {
            diddocs?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }): _377.QueryAllDidDocsResponse;
    };
    QueryAddressFromDidRequest: {
        encode(message: _377.QueryAddressFromDidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAddressFromDidRequest;
        fromJSON(object: any): _377.QueryAddressFromDidRequest;
        toJSON(message: _377.QueryAddressFromDidRequest): unknown;
        fromPartial(object: {
            did?: string;
        }): _377.QueryAddressFromDidRequest;
    };
    QueryAddressFromDidResponse: {
        encode(message: _377.QueryAddressFromDidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAddressFromDidResponse;
        fromJSON(object: any): _377.QueryAddressFromDidResponse;
        toJSON(message: _377.QueryAddressFromDidResponse): unknown;
        fromPartial(object: {
            address?: string;
        }): _377.QueryAddressFromDidResponse;
    };
    QueryAddressFromBase58EncodedPubkeyRequest: {
        encode(message: _377.QueryAddressFromBase58EncodedPubkeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAddressFromBase58EncodedPubkeyRequest;
        fromJSON(object: any): _377.QueryAddressFromBase58EncodedPubkeyRequest;
        toJSON(message: _377.QueryAddressFromBase58EncodedPubkeyRequest): unknown;
        fromPartial(object: {
            pubKey?: string;
        }): _377.QueryAddressFromBase58EncodedPubkeyRequest;
    };
    QueryAddressFromBase58EncodedPubkeyResponse: {
        encode(message: _377.QueryAddressFromBase58EncodedPubkeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.QueryAddressFromBase58EncodedPubkeyResponse;
        fromJSON(object: any): _377.QueryAddressFromBase58EncodedPubkeyResponse;
        toJSON(message: _377.QueryAddressFromBase58EncodedPubkeyResponse): unknown;
        fromPartial(object: {
            address?: string;
        }): _377.QueryAddressFromBase58EncodedPubkeyResponse;
    };
    GenesisState: {
        encode(message: _376.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.GenesisState;
        fromJSON(object: any): _376.GenesisState;
        toJSON(message: _376.GenesisState): unknown;
        fromPartial(object: {
            didDocs?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }): _376.GenesisState;
    };
    BaseDidDoc: {
        encode(message: _375.BaseDidDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.BaseDidDoc;
        fromJSON(object: any): _375.BaseDidDoc;
        toJSON(message: _375.BaseDidDoc): unknown;
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
        }): _375.BaseDidDoc;
    };
    DidCredential: {
        encode(message: _374.DidCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.DidCredential;
        fromJSON(object: any): _374.DidCredential;
        toJSON(message: _374.DidCredential): unknown;
        fromPartial(object: {
            credType?: string[];
            issuer?: string;
            issued?: string;
            claim?: {
                id?: string;
                KYCValidated?: boolean;
            };
        }): _374.DidCredential;
    };
    Claim: {
        encode(message: _374.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Claim;
        fromJSON(object: any): _374.Claim;
        toJSON(message: _374.Claim): unknown;
        fromPartial(object: {
            id?: string;
            KYCValidated?: boolean;
        }): _374.Claim;
    };
    IxoDid: {
        encode(message: _374.IxoDid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.IxoDid;
        fromJSON(object: any): _374.IxoDid;
        toJSON(message: _374.IxoDid): unknown;
        fromPartial(object: {
            did?: string;
            verifyKey?: string;
            encryptionPublicKey?: string;
            secret?: {
                seed?: string;
                signKey?: string;
                encryptionPrivateKey?: string;
            };
        }): _374.IxoDid;
    };
    Secret: {
        encode(message: _374.Secret, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Secret;
        fromJSON(object: any): _374.Secret;
        toJSON(message: _374.Secret): unknown;
        fromPartial(object: {
            seed?: string;
            signKey?: string;
            encryptionPrivateKey?: string;
        }): _374.Secret;
    };
};
