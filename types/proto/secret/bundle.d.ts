import * as _600 from "./compute/v1beta1/genesis";
import * as _601 from "./compute/v1beta1/msg";
import * as _602 from "./compute/v1beta1/query";
import * as _603 from "./compute/v1beta1/types";
import * as _604 from "./intertx/v1beta1/query";
import * as _605 from "./intertx/v1beta1/tx";
import * as _606 from "./registration/v1beta1/genesis";
import * as _607 from "./registration/v1beta1/msg";
import * as _608 from "./registration/v1beta1/query";
import * as _609 from "./registration/v1beta1/types";
import * as _610 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _603.AccessType;
            accessTypeToJSON(object: _603.AccessType): string;
            AccessType: typeof _603.AccessType;
            AccessTypeParam: {
                encode(message: _603.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.AccessTypeParam;
                fromJSON(object: any): _603.AccessTypeParam;
                toJSON(message: _603.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _603.AccessType;
                }): _603.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _603.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.CodeInfo;
                fromJSON(object: any): _603.CodeInfo;
                toJSON(message: _603.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _603.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _603.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.ContractCustomInfo;
                fromJSON(object: any): _603.ContractCustomInfo;
                toJSON(message: _603.ContractCustomInfo): unknown;
                fromPartial(object: {
                    enclaveKey?: Uint8Array;
                    label?: string;
                }): _603.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _603.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.ContractInfo;
                fromJSON(object: any): _603.ContractInfo;
                toJSON(message: _603.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                }): _603.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _603.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.AbsoluteTxPosition;
                fromJSON(object: any): _603.AbsoluteTxPosition;
                toJSON(message: _603.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _603.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _603.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.Model;
                fromJSON(object: any): _603.Model;
                toJSON(message: _603.Model): unknown;
                fromPartial(object: {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                }): _603.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _602.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractInfoRequest;
                fromJSON(object: any): _602.QueryContractInfoRequest;
                toJSON(message: _602.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _602.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _602.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractInfoResponse;
                fromJSON(object: any): _602.QueryContractInfoResponse;
                toJSON(message: _602.QueryContractInfoResponse): unknown;
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
                }): _602.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _602.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractHistoryRequest;
                fromJSON(object: any): _602.QueryContractHistoryRequest;
                toJSON(message: _602.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _602.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _602.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractsByCodeRequest;
                fromJSON(object: any): _602.QueryContractsByCodeRequest;
                toJSON(message: _602.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _602.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _602.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.ContractInfoWithAddress;
                fromJSON(object: any): _602.ContractInfoWithAddress;
                toJSON(message: _602.ContractInfoWithAddress): unknown;
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
                }): _602.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _602.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractsByCodeResponse;
                fromJSON(object: any): _602.QueryContractsByCodeResponse;
                toJSON(message: _602.QueryContractsByCodeResponse): unknown;
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
                }): _602.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _602.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QuerySmartContractStateRequest;
                fromJSON(object: any): _602.QuerySmartContractStateRequest;
                toJSON(message: _602.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                }): _602.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _602.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _602.QueryContractAddressByLabelRequest;
                toJSON(message: _602.QueryContractAddressByLabelRequest): unknown;
                fromPartial(object: {
                    label?: string;
                }): _602.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _602.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractKeyRequest;
                fromJSON(object: any): _602.QueryContractKeyRequest;
                toJSON(message: _602.QueryContractKeyRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _602.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _602.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractHashRequest;
                fromJSON(object: any): _602.QueryContractHashRequest;
                toJSON(message: _602.QueryContractHashRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _602.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _602.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QuerySmartContractStateResponse;
                fromJSON(object: any): _602.QuerySmartContractStateResponse;
                toJSON(message: _602.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _602.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _602.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryCodeRequest;
                fromJSON(object: any): _602.QueryCodeRequest;
                toJSON(message: _602.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _602.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _602.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.CodeInfoResponse;
                fromJSON(object: any): _602.CodeInfoResponse;
                toJSON(message: _602.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    dataHash?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _602.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _602.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryCodeResponse;
                fromJSON(object: any): _602.QueryCodeResponse;
                toJSON(message: _602.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    data?: Uint8Array;
                }): _602.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _602.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryCodesResponse;
                fromJSON(object: any): _602.QueryCodesResponse;
                toJSON(message: _602.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[];
                }): _602.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _602.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _602.QueryContractAddressByLabelResponse;
                toJSON(message: _602.QueryContractAddressByLabelResponse): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _602.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _602.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractKeyResponse;
                fromJSON(object: any): _602.QueryContractKeyResponse;
                toJSON(message: _602.QueryContractKeyResponse): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _602.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _602.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryContractHashResponse;
                fromJSON(object: any): _602.QueryContractHashResponse;
                toJSON(message: _602.QueryContractHashResponse): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                }): _602.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _602.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.DecryptedAnswer;
                fromJSON(object: any): _602.DecryptedAnswer;
                toJSON(message: _602.DecryptedAnswer): unknown;
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
                }): _602.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _601.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.MsgStoreCode;
                fromJSON(object: any): _601.MsgStoreCode;
                toJSON(message: _601.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    wasmByteCode?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _601.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _601.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.MsgInstantiateContract;
                fromJSON(object: any): _601.MsgInstantiateContract;
                toJSON(message: _601.MsgInstantiateContract): unknown;
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
                }): _601.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _601.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.MsgExecuteContract;
                fromJSON(object: any): _601.MsgExecuteContract;
                toJSON(message: _601.MsgExecuteContract): unknown;
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
                }): _601.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _600.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.GenesisState;
                fromJSON(object: any): _600.GenesisState;
                toJSON(message: _600.GenesisState): unknown;
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
                }): _600.GenesisState;
            };
            Code: {
                encode(message: _600.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Code;
                fromJSON(object: any): _600.Code;
                toJSON(message: _600.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    codeBytes?: Uint8Array;
                }): _600.Code;
            };
            Contract: {
                encode(message: _600.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Contract;
                fromJSON(object: any): _600.Contract;
                toJSON(message: _600.Contract): unknown;
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
                }): _600.Contract;
            };
            Sequence: {
                encode(message: _600.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Sequence;
                fromJSON(object: any): _600.Sequence;
                toJSON(message: _600.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _600.Sequence;
            };
        };
    }
    namespace intertx {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _605.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _605.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _605.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _605.MsgRegisterAccount;
                    };
                    submitTx(value: _605.MsgSubmitTx): {
                        typeUrl: string;
                        value: _605.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _605.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _605.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _605.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _605.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _605.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _605.MsgRegisterAccount;
                    };
                    submitTx(value: _605.MsgSubmitTx): {
                        typeUrl: string;
                        value: _605.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/secret.intertx.v1beta1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId }: _605.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                    };
                    fromAmino: ({ owner, connection_id }: {
                        owner: string;
                        connection_id: string;
                    }) => _605.MsgRegisterAccount;
                };
                "/secret.intertx.v1beta1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _605.MsgSubmitTx) => {
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
                    }) => _605.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _605.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgRegisterAccount;
                fromJSON(object: any): _605.MsgRegisterAccount;
                toJSON(message: _605.MsgRegisterAccount): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _605.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _605.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgRegisterAccountResponse;
                fromJSON(_: any): _605.MsgRegisterAccountResponse;
                toJSON(_: _605.MsgRegisterAccountResponse): unknown;
                fromPartial(_: {}): _605.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _605.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgSubmitTx;
                fromJSON(object: any): _605.MsgSubmitTx;
                toJSON(message: _605.MsgSubmitTx): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    connectionId?: string;
                    msg?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _605.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _605.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgSubmitTxResponse;
                fromJSON(_: any): _605.MsgSubmitTxResponse;
                toJSON(_: _605.MsgSubmitTxResponse): unknown;
                fromPartial(_: {}): _605.MsgSubmitTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _604.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryInterchainAccountFromAddressRequest;
                fromJSON(object: any): _604.QueryInterchainAccountFromAddressRequest;
                toJSON(message: _604.QueryInterchainAccountFromAddressRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _604.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _604.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryInterchainAccountFromAddressResponse;
                fromJSON(object: any): _604.QueryInterchainAccountFromAddressResponse;
                toJSON(message: _604.QueryInterchainAccountFromAddressResponse): unknown;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _604.QueryInterchainAccountFromAddressResponse;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _609.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.SeedConfig;
                fromJSON(object: any): _609.SeedConfig;
                toJSON(message: _609.SeedConfig): unknown;
                fromPartial(object: {
                    masterCert?: string;
                    encryptedKey?: string;
                }): _609.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _609.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.RegistrationNodeInfo;
                fromJSON(object: any): _609.RegistrationNodeInfo;
                toJSON(message: _609.RegistrationNodeInfo): unknown;
                fromPartial(object: {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                }): _609.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _608.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryEncryptedSeedRequest;
                fromJSON(object: any): _608.QueryEncryptedSeedRequest;
                toJSON(message: _608.QueryEncryptedSeedRequest): unknown;
                fromPartial(object: {
                    pubKey?: Uint8Array;
                }): _608.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _608.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryEncryptedSeedResponse;
                fromJSON(object: any): _608.QueryEncryptedSeedResponse;
                toJSON(message: _608.QueryEncryptedSeedResponse): unknown;
                fromPartial(object: {
                    encryptedSeed?: Uint8Array;
                }): _608.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _607.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.RaAuthenticate;
                fromJSON(object: any): _607.RaAuthenticate;
                toJSON(message: _607.RaAuthenticate): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                }): _607.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _607.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.MasterCertificate;
                fromJSON(object: any): _607.MasterCertificate;
                toJSON(message: _607.MasterCertificate): unknown;
                fromPartial(object: {
                    bytes?: Uint8Array;
                }): _607.MasterCertificate;
            };
            Key: {
                encode(message: _607.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.Key;
                fromJSON(object: any): _607.Key;
                toJSON(message: _607.Key): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _607.Key;
            };
            GenesisState: {
                encode(message: _606.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.GenesisState;
                fromJSON(object: any): _606.GenesisState;
                toJSON(message: _606.GenesisState): unknown;
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
                }): _606.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _610.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QuoteReport;
                    fromJSON(object: any): _610.QuoteReport;
                    toJSON(message: _610.QuoteReport): unknown;
                    fromPartial(object: {
                        id?: string;
                        timestamp?: string;
                        version?: any;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[];
                    }): _610.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _610.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QuoteReportBody;
                    fromJSON(object: any): _610.QuoteReportBody;
                    toJSON(message: _610.QuoteReportBody): unknown;
                    fromPartial(object: {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    }): _610.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _610.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QuoteReportData;
                    fromJSON(object: any): _610.QuoteReportData;
                    toJSON(message: _610.QuoteReportData): unknown;
                    fromPartial(object: {
                        version?: any;
                        signType?: any;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        };
                    }): _610.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _610.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.EndorsedAttestationReport;
                    fromJSON(object: any): _610.EndorsedAttestationReport;
                    toJSON(message: _610.EndorsedAttestationReport): unknown;
                    fromPartial(object: {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    }): _610.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _610.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.SGXEC256Signature;
                    fromJSON(object: any): _610.SGXEC256Signature;
                    toJSON(message: _610.SGXEC256Signature): unknown;
                    fromPartial(object: {
                        gx?: string;
                        gy?: string;
                    }): _610.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _610.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.PlatformInfoBlob;
                    fromJSON(object: any): _610.PlatformInfoBlob;
                    toJSON(message: _610.PlatformInfoBlob): unknown;
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
                    }): _610.PlatformInfoBlob;
                };
            };
        }
    }
}
