import * as _581 from "./compute/v1beta1/genesis";
import * as _582 from "./compute/v1beta1/msg";
import * as _583 from "./compute/v1beta1/query";
import * as _584 from "./compute/v1beta1/types";
import * as _585 from "./intertx/v1beta1/query";
import * as _586 from "./intertx/v1beta1/tx";
import * as _587 from "./registration/v1beta1/genesis";
import * as _588 from "./registration/v1beta1/msg";
import * as _589 from "./registration/v1beta1/query";
import * as _590 from "./registration/v1beta1/types";
import * as _591 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _584.AccessType;
            accessTypeToJSON(object: _584.AccessType): string;
            AccessType: typeof _584.AccessType;
            AccessTypeParam: {
                encode(message: _584.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.AccessTypeParam;
                fromJSON(object: any): _584.AccessTypeParam;
                toJSON(message: _584.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _584.AccessType;
                }): _584.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _584.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.CodeInfo;
                fromJSON(object: any): _584.CodeInfo;
                toJSON(message: _584.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _584.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _584.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ContractCustomInfo;
                fromJSON(object: any): _584.ContractCustomInfo;
                toJSON(message: _584.ContractCustomInfo): unknown;
                fromPartial(object: {
                    enclaveKey?: Uint8Array;
                    label?: string;
                }): _584.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _584.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ContractInfo;
                fromJSON(object: any): _584.ContractInfo;
                toJSON(message: _584.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                }): _584.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _584.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.AbsoluteTxPosition;
                fromJSON(object: any): _584.AbsoluteTxPosition;
                toJSON(message: _584.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _584.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _584.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Model;
                fromJSON(object: any): _584.Model;
                toJSON(message: _584.Model): unknown;
                fromPartial(object: {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                }): _584.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _583.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractInfoRequest;
                fromJSON(object: any): _583.QueryContractInfoRequest;
                toJSON(message: _583.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _583.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _583.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractInfoResponse;
                fromJSON(object: any): _583.QueryContractInfoResponse;
                toJSON(message: _583.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                }): _583.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _583.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractHistoryRequest;
                fromJSON(object: any): _583.QueryContractHistoryRequest;
                toJSON(message: _583.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _583.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _583.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractsByCodeRequest;
                fromJSON(object: any): _583.QueryContractsByCodeRequest;
                toJSON(message: _583.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _583.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _583.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.ContractInfoWithAddress;
                fromJSON(object: any): _583.ContractInfoWithAddress;
                toJSON(message: _583.ContractInfoWithAddress): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                }): _583.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _583.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractsByCodeResponse;
                fromJSON(object: any): _583.QueryContractsByCodeResponse;
                toJSON(message: _583.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contractInfos?: {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    }[];
                }): _583.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _583.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QuerySmartContractStateRequest;
                fromJSON(object: any): _583.QuerySmartContractStateRequest;
                toJSON(message: _583.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                }): _583.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _583.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _583.QueryContractAddressByLabelRequest;
                toJSON(message: _583.QueryContractAddressByLabelRequest): unknown;
                fromPartial(object: {
                    label?: string;
                }): _583.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _583.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractKeyRequest;
                fromJSON(object: any): _583.QueryContractKeyRequest;
                toJSON(message: _583.QueryContractKeyRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _583.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _583.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractHashRequest;
                fromJSON(object: any): _583.QueryContractHashRequest;
                toJSON(message: _583.QueryContractHashRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _583.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _583.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QuerySmartContractStateResponse;
                fromJSON(object: any): _583.QuerySmartContractStateResponse;
                toJSON(message: _583.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _583.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _583.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryCodeRequest;
                fromJSON(object: any): _583.QueryCodeRequest;
                toJSON(message: _583.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _583.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _583.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.CodeInfoResponse;
                fromJSON(object: any): _583.CodeInfoResponse;
                toJSON(message: _583.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    dataHash?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _583.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _583.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryCodeResponse;
                fromJSON(object: any): _583.QueryCodeResponse;
                toJSON(message: _583.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    data?: Uint8Array;
                }): _583.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _583.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryCodesResponse;
                fromJSON(object: any): _583.QueryCodesResponse;
                toJSON(message: _583.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[];
                }): _583.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _583.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _583.QueryContractAddressByLabelResponse;
                toJSON(message: _583.QueryContractAddressByLabelResponse): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _583.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _583.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractKeyResponse;
                fromJSON(object: any): _583.QueryContractKeyResponse;
                toJSON(message: _583.QueryContractKeyResponse): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _583.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _583.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.QueryContractHashResponse;
                fromJSON(object: any): _583.QueryContractHashResponse;
                toJSON(message: _583.QueryContractHashResponse): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                }): _583.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _583.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.DecryptedAnswer;
                fromJSON(object: any): _583.DecryptedAnswer;
                toJSON(message: _583.DecryptedAnswer): unknown;
                fromPartial(object: {
                    type?: string;
                    input?: string;
                    outputData?: string;
                    outputDataAsString?: string;
                    outputLogs?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    outputError?: Uint8Array;
                    plaintextError?: string;
                }): _583.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _582.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgStoreCode;
                fromJSON(object: any): _582.MsgStoreCode;
                toJSON(message: _582.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    wasmByteCode?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _582.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _582.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgInstantiateContract;
                fromJSON(object: any): _582.MsgInstantiateContract;
                toJSON(message: _582.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    callbackCodeHash?: string;
                    codeId?: any;
                    label?: string;
                    initMsg?: Uint8Array;
                    initFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                }): _582.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _582.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgExecuteContract;
                fromJSON(object: any): _582.MsgExecuteContract;
                toJSON(message: _582.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    contract?: Uint8Array;
                    msg?: Uint8Array;
                    callbackCodeHash?: string;
                    sentFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                }): _582.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _581.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.GenesisState;
                fromJSON(object: any): _581.GenesisState;
                toJSON(message: _581.GenesisState): unknown;
                fromPartial(object: {
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[];
                    contracts?: {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                }): _581.GenesisState;
            };
            Code: {
                encode(message: _581.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.Code;
                fromJSON(object: any): _581.Code;
                toJSON(message: _581.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    codeBytes?: Uint8Array;
                }): _581.Code;
            };
            Contract: {
                encode(message: _581.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.Contract;
                fromJSON(object: any): _581.Contract;
                toJSON(message: _581.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: Uint8Array;
                    contractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                    contractState?: {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[];
                    contractCustomInfo?: {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    };
                }): _581.Contract;
            };
            Sequence: {
                encode(message: _581.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.Sequence;
                fromJSON(object: any): _581.Sequence;
                toJSON(message: _581.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _581.Sequence;
            };
        };
    }
    namespace intertx {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _586.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _586.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _586.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _586.MsgRegisterAccount;
                    };
                    submitTx(value: _586.MsgSubmitTx): {
                        typeUrl: string;
                        value: _586.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _586.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _586.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _586.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _586.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _586.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _586.MsgRegisterAccount;
                    };
                    submitTx(value: _586.MsgSubmitTx): {
                        typeUrl: string;
                        value: _586.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/secret.intertx.v1beta1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId }: _586.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                    };
                    fromAmino: ({ owner, connection_id }: {
                        owner: string;
                        connection_id: string;
                    }) => _586.MsgRegisterAccount;
                };
                "/secret.intertx.v1beta1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _586.MsgSubmitTx) => {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ owner, connection_id, msg }: {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _586.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _586.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgRegisterAccount;
                fromJSON(object: any): _586.MsgRegisterAccount;
                toJSON(message: _586.MsgRegisterAccount): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _586.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _586.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgRegisterAccountResponse;
                fromJSON(_: any): _586.MsgRegisterAccountResponse;
                toJSON(_: _586.MsgRegisterAccountResponse): unknown;
                fromPartial(_: {}): _586.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _586.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgSubmitTx;
                fromJSON(object: any): _586.MsgSubmitTx;
                toJSON(message: _586.MsgSubmitTx): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    connectionId?: string;
                    msg?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _586.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _586.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgSubmitTxResponse;
                fromJSON(_: any): _586.MsgSubmitTxResponse;
                toJSON(_: _586.MsgSubmitTxResponse): unknown;
                fromPartial(_: {}): _586.MsgSubmitTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _585.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryInterchainAccountFromAddressRequest;
                fromJSON(object: any): _585.QueryInterchainAccountFromAddressRequest;
                toJSON(message: _585.QueryInterchainAccountFromAddressRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _585.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _585.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryInterchainAccountFromAddressResponse;
                fromJSON(object: any): _585.QueryInterchainAccountFromAddressResponse;
                toJSON(message: _585.QueryInterchainAccountFromAddressResponse): unknown;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _585.QueryInterchainAccountFromAddressResponse;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _590.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.SeedConfig;
                fromJSON(object: any): _590.SeedConfig;
                toJSON(message: _590.SeedConfig): unknown;
                fromPartial(object: {
                    masterCert?: string;
                    encryptedKey?: string;
                }): _590.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _590.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.RegistrationNodeInfo;
                fromJSON(object: any): _590.RegistrationNodeInfo;
                toJSON(message: _590.RegistrationNodeInfo): unknown;
                fromPartial(object: {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                }): _590.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _589.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryEncryptedSeedRequest;
                fromJSON(object: any): _589.QueryEncryptedSeedRequest;
                toJSON(message: _589.QueryEncryptedSeedRequest): unknown;
                fromPartial(object: {
                    pubKey?: Uint8Array;
                }): _589.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _589.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryEncryptedSeedResponse;
                fromJSON(object: any): _589.QueryEncryptedSeedResponse;
                toJSON(message: _589.QueryEncryptedSeedResponse): unknown;
                fromPartial(object: {
                    encryptedSeed?: Uint8Array;
                }): _589.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _588.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.RaAuthenticate;
                fromJSON(object: any): _588.RaAuthenticate;
                toJSON(message: _588.RaAuthenticate): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                }): _588.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _588.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MasterCertificate;
                fromJSON(object: any): _588.MasterCertificate;
                toJSON(message: _588.MasterCertificate): unknown;
                fromPartial(object: {
                    bytes?: Uint8Array;
                }): _588.MasterCertificate;
            };
            Key: {
                encode(message: _588.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.Key;
                fromJSON(object: any): _588.Key;
                toJSON(message: _588.Key): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _588.Key;
            };
            GenesisState: {
                encode(message: _587.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.GenesisState;
                fromJSON(object: any): _587.GenesisState;
                toJSON(message: _587.GenesisState): unknown;
                fromPartial(object: {
                    registration?: {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    }[];
                    nodeExchMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                    ioMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                }): _587.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _591.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.QuoteReport;
                    fromJSON(object: any): _591.QuoteReport;
                    toJSON(message: _591.QuoteReport): unknown;
                    fromPartial(object: {
                        id?: string;
                        timestamp?: string;
                        version?: any;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[];
                    }): _591.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _591.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.QuoteReportBody;
                    fromJSON(object: any): _591.QuoteReportBody;
                    toJSON(message: _591.QuoteReportBody): unknown;
                    fromPartial(object: {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    }): _591.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _591.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.QuoteReportData;
                    fromJSON(object: any): _591.QuoteReportData;
                    toJSON(message: _591.QuoteReportData): unknown;
                    fromPartial(object: {
                        version?: any;
                        signType?: any;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        };
                    }): _591.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _591.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.EndorsedAttestationReport;
                    fromJSON(object: any): _591.EndorsedAttestationReport;
                    toJSON(message: _591.EndorsedAttestationReport): unknown;
                    fromPartial(object: {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    }): _591.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _591.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.SGXEC256Signature;
                    fromJSON(object: any): _591.SGXEC256Signature;
                    toJSON(message: _591.SGXEC256Signature): unknown;
                    fromPartial(object: {
                        gx?: string;
                        gy?: string;
                    }): _591.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _591.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.PlatformInfoBlob;
                    fromJSON(object: any): _591.PlatformInfoBlob;
                    toJSON(message: _591.PlatformInfoBlob): unknown;
                    fromPartial(object: {
                        sgxEpidGroupFlags?: number;
                        sgxTcbEvaluationFlags?: number;
                        pseEvaluationFlags?: number;
                        latestEquivalentTcbPsvn?: string;
                        latestPseIsvsvn?: string;
                        latestPsdaSvn?: string;
                        xeid?: number;
                        gid?: number;
                        sgxEc256SignatureT?: {
                            gx?: string;
                            gy?: string;
                        };
                    }): _591.PlatformInfoBlob;
                };
            };
        }
    }
}
