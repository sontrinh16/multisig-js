import * as _88 from "./app/v1alpha1/config";
import * as _89 from "./app/v1alpha1/module";
import * as _90 from "./app/v1alpha1/query";
import * as _91 from "./auth/v1beta1/auth";
import * as _92 from "./auth/v1beta1/genesis";
import * as _93 from "./auth/v1beta1/query";
import * as _94 from "./authz/v1beta1/authz";
import * as _95 from "./authz/v1beta1/event";
import * as _96 from "./authz/v1beta1/genesis";
import * as _97 from "./authz/v1beta1/query";
import * as _98 from "./authz/v1beta1/tx";
import * as _99 from "./bank/v1beta1/authz";
import * as _100 from "./bank/v1beta1/bank";
import * as _101 from "./bank/v1beta1/genesis";
import * as _102 from "./bank/v1beta1/query";
import * as _103 from "./bank/v1beta1/tx";
import * as _104 from "./base/abci/v1beta1/abci";
import * as _105 from "./base/kv/v1beta1/kv";
import * as _106 from "./base/query/v1beta1/pagination";
import * as _107 from "./base/reflection/v1beta1/reflection";
import * as _108 from "./base/reflection/v2alpha1/reflection";
import * as _109 from "./base/snapshots/v1beta1/snapshot";
import * as _110 from "./base/store/v1beta1/commit_info";
import * as _111 from "./base/store/v1beta1/listening";
import * as _112 from "./base/tendermint/v1beta1/query";
import * as _113 from "./base/v1beta1/coin";
import * as _114 from "./capability/v1beta1/capability";
import * as _115 from "./capability/v1beta1/genesis";
import * as _116 from "./crisis/v1beta1/genesis";
import * as _117 from "./crisis/v1beta1/tx";
import * as _118 from "./crypto/ed25519/keys";
import * as _119 from "./crypto/hd/v1/hd";
import * as _120 from "./crypto/keyring/v1/record";
import * as _121 from "./crypto/multisig/keys";
import * as _122 from "./crypto/secp256k1/keys";
import * as _123 from "./crypto/secp256r1/keys";
import * as _124 from "./distribution/v1beta1/distribution";
import * as _125 from "./distribution/v1beta1/genesis";
import * as _126 from "./distribution/v1beta1/query";
import * as _127 from "./distribution/v1beta1/tx";
import * as _128 from "./evidence/v1beta1/evidence";
import * as _129 from "./evidence/v1beta1/genesis";
import * as _130 from "./evidence/v1beta1/query";
import * as _131 from "./evidence/v1beta1/tx";
import * as _132 from "./feegrant/v1beta1/feegrant";
import * as _133 from "./feegrant/v1beta1/genesis";
import * as _134 from "./feegrant/v1beta1/query";
import * as _135 from "./feegrant/v1beta1/tx";
import * as _136 from "./genutil/v1beta1/genesis";
import * as _137 from "./gov/v1/genesis";
import * as _138 from "./gov/v1/gov";
import * as _139 from "./gov/v1/query";
import * as _140 from "./gov/v1/tx";
import * as _141 from "./gov/v1beta1/genesis";
import * as _142 from "./gov/v1beta1/gov";
import * as _143 from "./gov/v1beta1/query";
import * as _144 from "./gov/v1beta1/tx";
import * as _145 from "./group/v1/events";
import * as _146 from "./group/v1/genesis";
import * as _147 from "./group/v1/query";
import * as _148 from "./group/v1/tx";
import * as _149 from "./group/v1/types";
import * as _150 from "./mint/v1beta1/genesis";
import * as _151 from "./mint/v1beta1/mint";
import * as _152 from "./mint/v1beta1/query";
import * as _154 from "./nft/v1beta1/event";
import * as _155 from "./nft/v1beta1/genesis";
import * as _156 from "./nft/v1beta1/nft";
import * as _157 from "./nft/v1beta1/query";
import * as _158 from "./nft/v1beta1/tx";
import * as _159 from "./orm/v1/orm";
import * as _160 from "./orm/v1alpha1/schema";
import * as _161 from "./params/v1beta1/params";
import * as _162 from "./params/v1beta1/query";
import * as _163 from "./slashing/v1beta1/genesis";
import * as _164 from "./slashing/v1beta1/query";
import * as _165 from "./slashing/v1beta1/slashing";
import * as _166 from "./slashing/v1beta1/tx";
import * as _167 from "./staking/v1beta1/authz";
import * as _168 from "./staking/v1beta1/genesis";
import * as _169 from "./staking/v1beta1/query";
import * as _170 from "./staking/v1beta1/staking";
import * as _171 from "./staking/v1beta1/tx";
import * as _172 from "./tx/signing/v1beta1/signing";
import * as _173 from "./tx/v1beta1/service";
import * as _174 from "./tx/v1beta1/tx";
import * as _175 from "./upgrade/v1beta1/query";
import * as _176 from "./upgrade/v1beta1/tx";
import * as _177 from "./upgrade/v1beta1/upgrade";
import * as _178 from "./vesting/v1beta1/tx";
import * as _179 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _90.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConfigRequest;
                fromJSON(_: any): _90.QueryConfigRequest;
                toJSON(_: _90.QueryConfigRequest): unknown;
                fromPartial(_: {}): _90.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _90.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConfigResponse;
                fromJSON(object: any): _90.QueryConfigResponse;
                toJSON(message: _90.QueryConfigResponse): unknown;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _90.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _89.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModuleDescriptor;
                fromJSON(object: any): _89.ModuleDescriptor;
                toJSON(message: _89.ModuleDescriptor): unknown;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _89.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _89.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PackageReference;
                fromJSON(object: any): _89.PackageReference;
                toJSON(message: _89.PackageReference): unknown;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _89.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _89.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MigrateFromInfo;
                fromJSON(object: any): _89.MigrateFromInfo;
                toJSON(message: _89.MigrateFromInfo): unknown;
                fromPartial(object: {
                    module?: string;
                }): _89.MigrateFromInfo;
            };
            Config: {
                encode(message: _88.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Config;
                fromJSON(object: any): _88.Config;
                toJSON(message: _88.Config): unknown;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _88.Config;
            };
            ModuleConfig: {
                encode(message: _88.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModuleConfig;
                fromJSON(object: any): _88.ModuleConfig;
                toJSON(message: _88.ModuleConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _88.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _93.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAccountsRequest;
                fromJSON(object: any): _93.QueryAccountsRequest;
                toJSON(message: _93.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _93.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _93.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAccountsResponse;
                fromJSON(object: any): _93.QueryAccountsResponse;
                toJSON(message: _93.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _93.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _93.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAccountRequest;
                fromJSON(object: any): _93.QueryAccountRequest;
                toJSON(message: _93.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _93.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _93.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryModuleAccountsRequest;
                fromJSON(_: any): _93.QueryModuleAccountsRequest;
                toJSON(_: _93.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _93.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
                fromJSON(object: any): _93.QueryParamsResponse;
                toJSON(message: _93.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _93.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _93.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryAccountResponse;
                fromJSON(object: any): _93.QueryAccountResponse;
                toJSON(message: _93.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _93.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
                fromJSON(_: any): _93.QueryParamsRequest;
                toJSON(_: _93.QueryParamsRequest): unknown;
                fromPartial(_: {}): _93.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _93.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryModuleAccountsResponse;
                fromJSON(object: any): _93.QueryModuleAccountsResponse;
                toJSON(message: _93.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _93.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _93.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Bech32PrefixRequest;
                fromJSON(_: any): _93.Bech32PrefixRequest;
                toJSON(_: _93.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _93.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _93.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Bech32PrefixResponse;
                fromJSON(object: any): _93.Bech32PrefixResponse;
                toJSON(message: _93.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _93.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _93.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AddressBytesToStringRequest;
                fromJSON(object: any): _93.AddressBytesToStringRequest;
                toJSON(message: _93.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _93.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _93.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AddressBytesToStringResponse;
                fromJSON(object: any): _93.AddressBytesToStringResponse;
                toJSON(message: _93.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _93.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _93.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AddressStringToBytesRequest;
                fromJSON(object: any): _93.AddressStringToBytesRequest;
                toJSON(message: _93.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _93.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _93.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AddressStringToBytesResponse;
                fromJSON(object: any): _93.AddressStringToBytesResponse;
                toJSON(message: _93.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _93.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _92.GenesisState;
            };
            BaseAccount: {
                encode(message: _91.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BaseAccount;
                fromJSON(object: any): _91.BaseAccount;
                toJSON(message: _91.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _91.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _91.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleAccount;
                fromJSON(object: any): _91.ModuleAccount;
                toJSON(message: _91.ModuleAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _91.ModuleAccount;
            };
            Params: {
                encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
                fromJSON(object: any): _91.Params;
                toJSON(message: _91.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _91.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _98.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _98.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _98.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _98.MsgGrant): {
                        typeUrl: string;
                        value: _98.MsgGrant;
                    };
                    exec(value: _98.MsgExec): {
                        typeUrl: string;
                        value: _98.MsgExec;
                    };
                    revoke(value: _98.MsgRevoke): {
                        typeUrl: string;
                        value: _98.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _98.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _98.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _98.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _98.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _98.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _98.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _98.MsgGrant): {
                        typeUrl: string;
                        value: _98.MsgGrant;
                    };
                    exec(value: _98.MsgExec): {
                        typeUrl: string;
                        value: _98.MsgExec;
                    };
                    revoke(value: _98.MsgRevoke): {
                        typeUrl: string;
                        value: _98.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _98.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _98.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _98.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _98.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _98.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _98.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _98.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgGrant;
                fromJSON(object: any): _98.MsgGrant;
                toJSON(message: _98.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _98.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _98.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecResponse;
                fromJSON(object: any): _98.MsgExecResponse;
                toJSON(message: _98.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _98.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _98.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExec;
                fromJSON(object: any): _98.MsgExec;
                toJSON(message: _98.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _98.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _98.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgGrantResponse;
                fromJSON(_: any): _98.MsgGrantResponse;
                toJSON(_: _98.MsgGrantResponse): unknown;
                fromPartial(_: {}): _98.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _98.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRevoke;
                fromJSON(object: any): _98.MsgRevoke;
                toJSON(message: _98.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _98.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _98.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRevokeResponse;
                fromJSON(_: any): _98.MsgRevokeResponse;
                toJSON(_: _98.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _98.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _97.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGrantsRequest;
                fromJSON(object: any): _97.QueryGrantsRequest;
                toJSON(message: _97.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _97.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGrantsResponse;
                fromJSON(object: any): _97.QueryGrantsResponse;
                toJSON(message: _97.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _97.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _97.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGranterGrantsRequest;
                fromJSON(object: any): _97.QueryGranterGrantsRequest;
                toJSON(message: _97.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _97.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGranterGrantsResponse;
                fromJSON(object: any): _97.QueryGranterGrantsResponse;
                toJSON(message: _97.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _97.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _97.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGranteeGrantsRequest;
                fromJSON(object: any): _97.QueryGranteeGrantsRequest;
                toJSON(message: _97.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _97.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryGranteeGrantsResponse;
                fromJSON(object: any): _97.QueryGranteeGrantsResponse;
                toJSON(message: _97.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _97.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _96.GenesisState;
            };
            EventGrant: {
                encode(message: _95.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EventGrant;
                fromJSON(object: any): _95.EventGrant;
                toJSON(message: _95.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _95.EventGrant;
            };
            EventRevoke: {
                encode(message: _95.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EventRevoke;
                fromJSON(object: any): _95.EventRevoke;
                toJSON(message: _95.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _95.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _94.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenericAuthorization;
                fromJSON(object: any): _94.GenericAuthorization;
                toJSON(message: _94.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _94.GenericAuthorization;
            };
            Grant: {
                encode(message: _94.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Grant;
                fromJSON(object: any): _94.Grant;
                toJSON(message: _94.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _94.Grant;
            };
            GrantAuthorization: {
                encode(message: _94.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GrantAuthorization;
                fromJSON(object: any): _94.GrantAuthorization;
                toJSON(message: _94.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _94.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _94.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GrantQueueItem;
                fromJSON(object: any): _94.GrantQueueItem;
                toJSON(message: _94.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _94.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _103.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                    multiSend(value: _103.MsgMultiSend): {
                        typeUrl: string;
                        value: _103.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _103.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _103.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                    multiSend(value: _103.MsgMultiSend): {
                        typeUrl: string;
                        value: _103.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _103.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _103.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _103.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _103.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _103.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgSend;
                fromJSON(object: any): _103.MsgSend;
                toJSON(message: _103.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _103.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _103.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgSendResponse;
                fromJSON(_: any): _103.MsgSendResponse;
                toJSON(_: _103.MsgSendResponse): unknown;
                fromPartial(_: {}): _103.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _103.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgMultiSend;
                fromJSON(object: any): _103.MsgMultiSend;
                toJSON(message: _103.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _103.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _103.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgMultiSendResponse;
                fromJSON(_: any): _103.MsgMultiSendResponse;
                toJSON(_: _103.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _103.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _102.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryBalanceRequest;
                fromJSON(object: any): _102.QueryBalanceRequest;
                toJSON(message: _102.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _102.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _102.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryBalanceResponse;
                fromJSON(object: any): _102.QueryBalanceResponse;
                toJSON(message: _102.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _102.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _102.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryAllBalancesRequest;
                fromJSON(object: any): _102.QueryAllBalancesRequest;
                toJSON(message: _102.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _102.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryAllBalancesResponse;
                fromJSON(object: any): _102.QueryAllBalancesResponse;
                toJSON(message: _102.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _102.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _102.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySpendableBalancesRequest;
                fromJSON(object: any): _102.QuerySpendableBalancesRequest;
                toJSON(message: _102.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _102.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySpendableBalancesResponse;
                fromJSON(object: any): _102.QuerySpendableBalancesResponse;
                toJSON(message: _102.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _102.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _102.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryTotalSupplyRequest;
                fromJSON(object: any): _102.QueryTotalSupplyRequest;
                toJSON(message: _102.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _102.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryTotalSupplyResponse;
                fromJSON(object: any): _102.QueryTotalSupplyResponse;
                toJSON(message: _102.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _102.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _102.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySupplyOfRequest;
                fromJSON(object: any): _102.QuerySupplyOfRequest;
                toJSON(message: _102.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _102.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _102.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySupplyOfResponse;
                fromJSON(object: any): _102.QuerySupplyOfResponse;
                toJSON(message: _102.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _102.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                fromJSON(_: any): _102.QueryParamsRequest;
                toJSON(_: _102.QueryParamsRequest): unknown;
                fromPartial(_: {}): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponse;
                fromJSON(object: any): _102.QueryParamsResponse;
                toJSON(message: _102.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _102.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _102.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomsMetadataRequest;
                fromJSON(object: any): _102.QueryDenomsMetadataRequest;
                toJSON(message: _102.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _102.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomsMetadataResponse;
                fromJSON(object: any): _102.QueryDenomsMetadataResponse;
                toJSON(message: _102.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _102.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _102.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomMetadataRequest;
                fromJSON(object: any): _102.QueryDenomMetadataRequest;
                toJSON(message: _102.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _102.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _102.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomMetadataResponse;
                fromJSON(object: any): _102.QueryDenomMetadataResponse;
                toJSON(message: _102.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _102.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _102.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomOwnersRequest;
                fromJSON(object: any): _102.QueryDenomOwnersRequest;
                toJSON(message: _102.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _102.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DenomOwner;
                fromJSON(object: any): _102.DenomOwner;
                toJSON(message: _102.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _102.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _102.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDenomOwnersResponse;
                fromJSON(object: any): _102.QueryDenomOwnersResponse;
                toJSON(message: _102.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _102.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
                fromJSON(object: any): _101.GenesisState;
                toJSON(message: _101.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _101.GenesisState;
            };
            Balance: {
                encode(message: _101.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Balance;
                fromJSON(object: any): _101.Balance;
                toJSON(message: _101.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.Balance;
            };
            Params: {
                encode(message: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
                fromJSON(object: any): _100.Params;
                toJSON(message: _100.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _100.Params;
            };
            SendEnabled: {
                encode(message: _100.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SendEnabled;
                fromJSON(object: any): _100.SendEnabled;
                toJSON(message: _100.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _100.SendEnabled;
            };
            Input: {
                encode(message: _100.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Input;
                fromJSON(object: any): _100.Input;
                toJSON(message: _100.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _100.Input;
            };
            Output: {
                encode(message: _100.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Output;
                fromJSON(object: any): _100.Output;
                toJSON(message: _100.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _100.Output;
            };
            Supply: {
                encode(message: _100.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Supply;
                fromJSON(object: any): _100.Supply;
                toJSON(message: _100.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _100.Supply;
            };
            DenomUnit: {
                encode(message: _100.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DenomUnit;
                fromJSON(object: any): _100.DenomUnit;
                toJSON(message: _100.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _100.DenomUnit;
            };
            Metadata: {
                encode(message: _100.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Metadata;
                fromJSON(object: any): _100.Metadata;
                toJSON(message: _100.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _100.Metadata;
            };
            SendAuthorization: {
                encode(message: _99.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SendAuthorization;
                fromJSON(object: any): _99.SendAuthorization;
                toJSON(message: _99.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _104.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TxResponse;
                    fromJSON(object: any): _104.TxResponse;
                    toJSON(message: _104.TxResponse): unknown;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _104.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _104.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ABCIMessageLog;
                    fromJSON(object: any): _104.ABCIMessageLog;
                    toJSON(message: _104.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _104.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _104.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.StringEvent;
                    fromJSON(object: any): _104.StringEvent;
                    toJSON(message: _104.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _104.StringEvent;
                };
                Attribute: {
                    encode(message: _104.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Attribute;
                    fromJSON(object: any): _104.Attribute;
                    toJSON(message: _104.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _104.Attribute;
                };
                GasInfo: {
                    encode(message: _104.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GasInfo;
                    fromJSON(object: any): _104.GasInfo;
                    toJSON(message: _104.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _104.GasInfo;
                };
                Result: {
                    encode(message: _104.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Result;
                    fromJSON(object: any): _104.Result;
                    toJSON(message: _104.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _104.Result;
                };
                SimulationResponse: {
                    encode(message: _104.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SimulationResponse;
                    fromJSON(object: any): _104.SimulationResponse;
                    toJSON(message: _104.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _104.SimulationResponse;
                };
                MsgData: {
                    encode(message: _104.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgData;
                    fromJSON(object: any): _104.MsgData;
                    toJSON(message: _104.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _104.MsgData;
                };
                TxMsgData: {
                    encode(message: _104.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TxMsgData;
                    fromJSON(object: any): _104.TxMsgData;
                    toJSON(message: _104.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _104.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _104.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SearchTxsResult;
                    fromJSON(object: any): _104.SearchTxsResult;
                    toJSON(message: _104.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _104.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _105.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Pairs;
                    fromJSON(object: any): _105.Pairs;
                    toJSON(message: _105.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _105.Pairs;
                };
                Pair: {
                    encode(message: _105.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Pair;
                    fromJSON(object: any): _105.Pair;
                    toJSON(message: _105.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _105.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _106.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PageRequest;
                    fromJSON(object: any): _106.PageRequest;
                    toJSON(message: _106.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _106.PageRequest;
                };
                PageResponse: {
                    encode(message: _106.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PageResponse;
                    fromJSON(object: any): _106.PageResponse;
                    toJSON(message: _106.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _106.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _107.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ListAllInterfacesRequest;
                    fromJSON(_: any): _107.ListAllInterfacesRequest;
                    toJSON(_: _107.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _107.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _107.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ListAllInterfacesResponse;
                    fromJSON(object: any): _107.ListAllInterfacesResponse;
                    toJSON(message: _107.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _107.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _107.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ListImplementationsRequest;
                    fromJSON(object: any): _107.ListImplementationsRequest;
                    toJSON(message: _107.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _107.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _107.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ListImplementationsResponse;
                    fromJSON(object: any): _107.ListImplementationsResponse;
                    toJSON(message: _107.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _107.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _108.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AppDescriptor;
                    fromJSON(object: any): _108.AppDescriptor;
                    toJSON(message: _108.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _108.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _108.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.TxDescriptor;
                    fromJSON(object: any): _108.TxDescriptor;
                    toJSON(message: _108.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _108.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _108.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AuthnDescriptor;
                    fromJSON(object: any): _108.AuthnDescriptor;
                    toJSON(message: _108.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _108.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _108.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.SigningModeDescriptor;
                    fromJSON(object: any): _108.SigningModeDescriptor;
                    toJSON(message: _108.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _108.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _108.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ChainDescriptor;
                    fromJSON(object: any): _108.ChainDescriptor;
                    toJSON(message: _108.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _108.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _108.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.CodecDescriptor;
                    fromJSON(object: any): _108.CodecDescriptor;
                    toJSON(message: _108.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _108.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _108.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.InterfaceDescriptor;
                    fromJSON(object: any): _108.InterfaceDescriptor;
                    toJSON(message: _108.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _108.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _108.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _108.InterfaceImplementerDescriptor;
                    toJSON(message: _108.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _108.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _108.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _108.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _108.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _108.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _108.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ConfigurationDescriptor;
                    fromJSON(object: any): _108.ConfigurationDescriptor;
                    toJSON(message: _108.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _108.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _108.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgDescriptor;
                    fromJSON(object: any): _108.MsgDescriptor;
                    toJSON(message: _108.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _108.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _108.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _108.GetAuthnDescriptorRequest;
                    toJSON(_: _108.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _108.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _108.GetAuthnDescriptorResponse;
                    toJSON(message: _108.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _108.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _108.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetChainDescriptorRequest;
                    fromJSON(_: any): _108.GetChainDescriptorRequest;
                    toJSON(_: _108.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _108.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetChainDescriptorResponse;
                    fromJSON(object: any): _108.GetChainDescriptorResponse;
                    toJSON(message: _108.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _108.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _108.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetCodecDescriptorRequest;
                    fromJSON(_: any): _108.GetCodecDescriptorRequest;
                    toJSON(_: _108.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _108.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetCodecDescriptorResponse;
                    fromJSON(object: any): _108.GetCodecDescriptorResponse;
                    toJSON(message: _108.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _108.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _108.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _108.GetConfigurationDescriptorRequest;
                    toJSON(_: _108.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _108.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _108.GetConfigurationDescriptorResponse;
                    toJSON(message: _108.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _108.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _108.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _108.GetQueryServicesDescriptorRequest;
                    toJSON(_: _108.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _108.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _108.GetQueryServicesDescriptorResponse;
                    toJSON(message: _108.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _108.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _108.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetTxDescriptorRequest;
                    fromJSON(_: any): _108.GetTxDescriptorRequest;
                    toJSON(_: _108.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _108.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _108.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GetTxDescriptorResponse;
                    fromJSON(object: any): _108.GetTxDescriptorResponse;
                    toJSON(message: _108.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _108.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _108.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryServicesDescriptor;
                    fromJSON(object: any): _108.QueryServicesDescriptor;
                    toJSON(message: _108.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _108.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _108.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryServiceDescriptor;
                    fromJSON(object: any): _108.QueryServiceDescriptor;
                    toJSON(message: _108.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _108.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _108.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryMethodDescriptor;
                    fromJSON(object: any): _108.QueryMethodDescriptor;
                    toJSON(message: _108.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _108.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _109.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Snapshot;
                    fromJSON(object: any): _109.Snapshot;
                    toJSON(message: _109.Snapshot): unknown;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _109.Snapshot;
                };
                Metadata: {
                    encode(message: _109.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Metadata;
                    fromJSON(object: any): _109.Metadata;
                    toJSON(message: _109.Metadata): unknown;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _109.Metadata;
                };
                SnapshotItem: {
                    encode(message: _109.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotItem;
                    fromJSON(object: any): _109.SnapshotItem;
                    toJSON(message: _109.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _109.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _109.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotStoreItem;
                    fromJSON(object: any): _109.SnapshotStoreItem;
                    toJSON(message: _109.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _109.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _109.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotIAVLItem;
                    fromJSON(object: any): _109.SnapshotIAVLItem;
                    toJSON(message: _109.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _109.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _109.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotExtensionMeta;
                    fromJSON(object: any): _109.SnapshotExtensionMeta;
                    toJSON(message: _109.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _109.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _109.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotExtensionPayload;
                    fromJSON(object: any): _109.SnapshotExtensionPayload;
                    toJSON(message: _109.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _109.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _109.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotKVItem;
                    fromJSON(object: any): _109.SnapshotKVItem;
                    toJSON(message: _109.SnapshotKVItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _109.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _109.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SnapshotSchema;
                    fromJSON(object: any): _109.SnapshotSchema;
                    toJSON(message: _109.SnapshotSchema): unknown;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _109.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _111.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.StoreKVPair;
                    fromJSON(object: any): _111.StoreKVPair;
                    toJSON(message: _111.StoreKVPair): unknown;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _111.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _110.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CommitInfo;
                    fromJSON(object: any): _110.CommitInfo;
                    toJSON(message: _110.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _110.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _110.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.StoreInfo;
                    fromJSON(object: any): _110.StoreInfo;
                    toJSON(message: _110.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _110.StoreInfo;
                };
                CommitID: {
                    encode(message: _110.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CommitID;
                    fromJSON(object: any): _110.CommitID;
                    toJSON(message: _110.CommitID): unknown;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _110.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _112.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _112.GetValidatorSetByHeightRequest;
                    toJSON(message: _112.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _112.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _112.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _112.GetValidatorSetByHeightResponse;
                    toJSON(message: _112.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _112.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _112.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _112.GetLatestValidatorSetRequest;
                    toJSON(message: _112.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _112.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _112.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _112.GetLatestValidatorSetResponse;
                    toJSON(message: _112.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _112.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _112.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Validator;
                    fromJSON(object: any): _112.Validator;
                    toJSON(message: _112.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _112.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _112.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetBlockByHeightRequest;
                    fromJSON(object: any): _112.GetBlockByHeightRequest;
                    toJSON(message: _112.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                    }): _112.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _112.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetBlockByHeightResponse;
                    fromJSON(object: any): _112.GetBlockByHeightResponse;
                    toJSON(message: _112.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: any;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _112.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _112.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetLatestBlockRequest;
                    fromJSON(_: any): _112.GetLatestBlockRequest;
                    toJSON(_: _112.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _112.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _112.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetLatestBlockResponse;
                    fromJSON(object: any): _112.GetLatestBlockResponse;
                    toJSON(message: _112.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: any;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _112.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _112.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetSyncingRequest;
                    fromJSON(_: any): _112.GetSyncingRequest;
                    toJSON(_: _112.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _112.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _112.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetSyncingResponse;
                    fromJSON(object: any): _112.GetSyncingResponse;
                    toJSON(message: _112.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _112.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _112.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetNodeInfoRequest;
                    fromJSON(_: any): _112.GetNodeInfoRequest;
                    toJSON(_: _112.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _112.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _112.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GetNodeInfoResponse;
                    fromJSON(object: any): _112.GetNodeInfoResponse;
                    toJSON(message: _112.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _112.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _112.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.VersionInfo;
                    fromJSON(object: any): _112.VersionInfo;
                    toJSON(message: _112.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _112.VersionInfo;
                };
                Module: {
                    encode(message: _112.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Module;
                    fromJSON(object: any): _112.Module;
                    toJSON(message: _112.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _112.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _113.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Coin;
                fromJSON(object: any): _113.Coin;
                toJSON(message: _113.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _113.Coin;
            };
            DecCoin: {
                encode(message: _113.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DecCoin;
                fromJSON(object: any): _113.DecCoin;
                toJSON(message: _113.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _113.DecCoin;
            };
            IntProto: {
                encode(message: _113.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IntProto;
                fromJSON(object: any): _113.IntProto;
                toJSON(message: _113.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _113.IntProto;
            };
            DecProto: {
                encode(message: _113.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DecProto;
                fromJSON(object: any): _113.DecProto;
                toJSON(message: _113.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _113.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _115.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisOwners;
                fromJSON(object: any): _115.GenesisOwners;
                toJSON(message: _115.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _115.GenesisOwners;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisState;
                fromJSON(object: any): _115.GenesisState;
                toJSON(message: _115.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _115.GenesisState;
            };
            Capability: {
                encode(message: _114.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Capability;
                fromJSON(object: any): _114.Capability;
                toJSON(message: _114.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _114.Capability;
            };
            Owner: {
                encode(message: _114.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Owner;
                fromJSON(object: any): _114.Owner;
                toJSON(message: _114.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _114.Owner;
            };
            CapabilityOwners: {
                encode(message: _114.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CapabilityOwners;
                fromJSON(object: any): _114.CapabilityOwners;
                toJSON(message: _114.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _114.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _117.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _117.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _117.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _117.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _117.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _117.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _117.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _117.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _117.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _117.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgVerifyInvariant;
                fromJSON(object: any): _117.MsgVerifyInvariant;
                toJSON(message: _117.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _117.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _117.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgVerifyInvariantResponse;
                fromJSON(_: any): _117.MsgVerifyInvariantResponse;
                toJSON(_: _117.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _117.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                fromJSON(object: any): _116.GenesisState;
                toJSON(message: _116.GenesisState): unknown;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _116.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _118.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PubKey;
                fromJSON(object: any): _118.PubKey;
                toJSON(message: _118.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _118.PubKey;
            };
            PrivKey: {
                encode(message: _118.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PrivKey;
                fromJSON(object: any): _118.PrivKey;
                toJSON(message: _118.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _118.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _119.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.BIP44Params;
                    fromJSON(object: any): _119.BIP44Params;
                    toJSON(message: _119.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _119.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _120.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record;
                    fromJSON(object: any): _120.Record;
                    toJSON(message: _120.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _120.Record;
                };
                Record_Local: {
                    encode(message: _120.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record_Local;
                    fromJSON(object: any): _120.Record_Local;
                    toJSON(message: _120.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _120.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _120.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record_Ledger;
                    fromJSON(object: any): _120.Record_Ledger;
                    toJSON(message: _120.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _120.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _120.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record_Multi;
                    fromJSON(_: any): _120.Record_Multi;
                    toJSON(_: _120.Record_Multi): unknown;
                    fromPartial(_: {}): _120.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _120.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record_Offline;
                    fromJSON(_: any): _120.Record_Offline;
                    toJSON(_: _120.Record_Offline): unknown;
                    fromPartial(_: {}): _120.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _121.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.LegacyAminoPubKey;
                fromJSON(object: any): _121.LegacyAminoPubKey;
                toJSON(message: _121.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _121.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _122.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PubKey;
                fromJSON(object: any): _122.PubKey;
                toJSON(message: _122.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _122.PubKey;
            };
            PrivKey: {
                encode(message: _122.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PrivKey;
                fromJSON(object: any): _122.PrivKey;
                toJSON(message: _122.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _122.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _123.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PubKey;
                fromJSON(object: any): _123.PubKey;
                toJSON(message: _123.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _123.PubKey;
            };
            PrivKey: {
                encode(message: _123.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PrivKey;
                fromJSON(object: any): _123.PrivKey;
                toJSON(message: _123.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _123.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _127.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _127.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _127.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _127.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _127.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _127.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _127.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _127.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _127.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _127.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _127.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _127.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _127.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _127.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _127.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _127.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _127.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _127.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _127.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _127.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _127.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _127.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _127.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _127.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _127.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _127.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _127.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _127.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _127.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _127.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _127.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _127.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _127.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _127.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _127.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _127.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _127.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetWithdrawAddress;
                fromJSON(object: any): _127.MsgSetWithdrawAddress;
                toJSON(message: _127.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _127.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _127.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _127.MsgSetWithdrawAddressResponse;
                toJSON(_: _127.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _127.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _127.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _127.MsgWithdrawDelegatorReward;
                toJSON(message: _127.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _127.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _127.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _127.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _127.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _127.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _127.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _127.MsgWithdrawValidatorCommission;
                toJSON(message: _127.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _127.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _127.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _127.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _127.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _127.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _127.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgFundCommunityPool;
                fromJSON(object: any): _127.MsgFundCommunityPool;
                toJSON(message: _127.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _127.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _127.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _127.MsgFundCommunityPoolResponse;
                toJSON(_: _127.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _127.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _126.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryParamsRequest;
                fromJSON(_: any): _126.QueryParamsRequest;
                toJSON(_: _126.QueryParamsRequest): unknown;
                fromPartial(_: {}): _126.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _126.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryParamsResponse;
                fromJSON(object: any): _126.QueryParamsResponse;
                toJSON(message: _126.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _126.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _126.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _126.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _126.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _126.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _126.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _126.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _126.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _126.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _126.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorCommissionRequest;
                fromJSON(object: any): _126.QueryValidatorCommissionRequest;
                toJSON(message: _126.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _126.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _126.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorCommissionResponse;
                fromJSON(object: any): _126.QueryValidatorCommissionResponse;
                toJSON(message: _126.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _126.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _126.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorSlashesRequest;
                fromJSON(object: any): _126.QueryValidatorSlashesRequest;
                toJSON(message: _126.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _126.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _126.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryValidatorSlashesResponse;
                fromJSON(object: any): _126.QueryValidatorSlashesResponse;
                toJSON(message: _126.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _126.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _126.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegationRewardsRequest;
                fromJSON(object: any): _126.QueryDelegationRewardsRequest;
                toJSON(message: _126.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _126.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _126.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegationRewardsResponse;
                fromJSON(object: any): _126.QueryDelegationRewardsResponse;
                toJSON(message: _126.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _126.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _126.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _126.QueryDelegationTotalRewardsRequest;
                toJSON(message: _126.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _126.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _126.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _126.QueryDelegationTotalRewardsResponse;
                toJSON(message: _126.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _126.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _126.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _126.QueryDelegatorValidatorsRequest;
                toJSON(message: _126.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _126.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _126.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _126.QueryDelegatorValidatorsResponse;
                toJSON(message: _126.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _126.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _126.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _126.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _126.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _126.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _126.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _126.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _126.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _126.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _126.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryCommunityPoolRequest;
                fromJSON(_: any): _126.QueryCommunityPoolRequest;
                toJSON(_: _126.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _126.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _126.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryCommunityPoolResponse;
                fromJSON(object: any): _126.QueryCommunityPoolResponse;
                toJSON(message: _126.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _126.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _125.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.DelegatorWithdrawInfo;
                fromJSON(object: any): _125.DelegatorWithdrawInfo;
                toJSON(message: _125.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _125.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _125.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _125.ValidatorOutstandingRewardsRecord;
                toJSON(message: _125.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _125.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _125.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _125.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _125.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _125.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _125.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _125.ValidatorHistoricalRewardsRecord;
                toJSON(message: _125.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _125.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _125.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _125.ValidatorCurrentRewardsRecord;
                toJSON(message: _125.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _125.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _125.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.DelegatorStartingInfoRecord;
                fromJSON(object: any): _125.DelegatorStartingInfoRecord;
                toJSON(message: _125.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _125.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _125.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ValidatorSlashEventRecord;
                fromJSON(object: any): _125.ValidatorSlashEventRecord;
                toJSON(message: _125.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _125.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromJSON(object: any): _125.GenesisState;
                toJSON(message: _125.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _125.GenesisState;
            };
            Params: {
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                fromJSON(object: any): _124.Params;
                toJSON(message: _124.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _124.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _124.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorHistoricalRewards;
                fromJSON(object: any): _124.ValidatorHistoricalRewards;
                toJSON(message: _124.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _124.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _124.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorCurrentRewards;
                fromJSON(object: any): _124.ValidatorCurrentRewards;
                toJSON(message: _124.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _124.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _124.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorAccumulatedCommission;
                fromJSON(object: any): _124.ValidatorAccumulatedCommission;
                toJSON(message: _124.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _124.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _124.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorOutstandingRewards;
                fromJSON(object: any): _124.ValidatorOutstandingRewards;
                toJSON(message: _124.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _124.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _124.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorSlashEvent;
                fromJSON(object: any): _124.ValidatorSlashEvent;
                toJSON(message: _124.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _124.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _124.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ValidatorSlashEvents;
                fromJSON(object: any): _124.ValidatorSlashEvents;
                toJSON(message: _124.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _124.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _124.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.FeePool;
                fromJSON(object: any): _124.FeePool;
                toJSON(message: _124.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _124.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _124.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CommunityPoolSpendProposal;
                fromJSON(object: any): _124.CommunityPoolSpendProposal;
                toJSON(message: _124.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _124.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _124.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.DelegatorStartingInfo;
                fromJSON(object: any): _124.DelegatorStartingInfo;
                toJSON(message: _124.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _124.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _124.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.DelegationDelegatorReward;
                fromJSON(object: any): _124.DelegationDelegatorReward;
                toJSON(message: _124.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _124.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _124.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _124.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _124.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _124.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _131.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _131.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _131.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _131.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _131.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _131.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _131.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _131.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _131.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _131.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSubmitEvidence;
                fromJSON(object: any): _131.MsgSubmitEvidence;
                toJSON(message: _131.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _131.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _131.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _131.MsgSubmitEvidenceResponse;
                toJSON(message: _131.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _131.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _130.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryEvidenceRequest;
                fromJSON(object: any): _130.QueryEvidenceRequest;
                toJSON(message: _130.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _130.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _130.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryEvidenceResponse;
                fromJSON(object: any): _130.QueryEvidenceResponse;
                toJSON(message: _130.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _130.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _130.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryAllEvidenceRequest;
                fromJSON(object: any): _130.QueryAllEvidenceRequest;
                toJSON(message: _130.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _130.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _130.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryAllEvidenceResponse;
                fromJSON(object: any): _130.QueryAllEvidenceResponse;
                toJSON(message: _130.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _130.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                fromJSON(object: any): _129.GenesisState;
                toJSON(message: _129.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _129.GenesisState;
            };
            Equivocation: {
                encode(message: _128.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Equivocation;
                fromJSON(object: any): _128.Equivocation;
                toJSON(message: _128.Equivocation): unknown;
                fromPartial(object: {
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    power?: any;
                    consensusAddress?: string;
                }): _128.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _135.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _135.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _135.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _135.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _135.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _135.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _135.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _135.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _135.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _135.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _135.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _135.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _135.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _135.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _135.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _135.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _135.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _135.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _135.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgGrantAllowance;
                fromJSON(object: any): _135.MsgGrantAllowance;
                toJSON(message: _135.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _135.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _135.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgGrantAllowanceResponse;
                fromJSON(_: any): _135.MsgGrantAllowanceResponse;
                toJSON(_: _135.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _135.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _135.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgRevokeAllowance;
                fromJSON(object: any): _135.MsgRevokeAllowance;
                toJSON(message: _135.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _135.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _135.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _135.MsgRevokeAllowanceResponse;
                toJSON(_: _135.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _135.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _134.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowanceRequest;
                fromJSON(object: any): _134.QueryAllowanceRequest;
                toJSON(message: _134.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _134.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _134.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowanceResponse;
                fromJSON(object: any): _134.QueryAllowanceResponse;
                toJSON(message: _134.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _134.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _134.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowancesRequest;
                fromJSON(object: any): _134.QueryAllowancesRequest;
                toJSON(message: _134.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _134.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _134.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowancesResponse;
                fromJSON(object: any): _134.QueryAllowancesResponse;
                toJSON(message: _134.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _134.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _134.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _134.QueryAllowancesByGranterRequest;
                toJSON(message: _134.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _134.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _134.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _134.QueryAllowancesByGranterResponse;
                toJSON(message: _134.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _134.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _133.GenesisState;
            };
            BasicAllowance: {
                encode(message: _132.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BasicAllowance;
                fromJSON(object: any): _132.BasicAllowance;
                toJSON(message: _132.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _132.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _132.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PeriodicAllowance;
                fromJSON(object: any): _132.PeriodicAllowance;
                toJSON(message: _132.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _132.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _132.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AllowedMsgAllowance;
                fromJSON(object: any): _132.AllowedMsgAllowance;
                toJSON(message: _132.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _132.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _132.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Grant;
                fromJSON(object: any): _132.Grant;
                toJSON(message: _132.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _132.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _136.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _140.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _140.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _140.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _140.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _140.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _140.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _140.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _140.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _140.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _140.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _140.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSubmitProposal;
                fromJSON(object: any): _140.MsgSubmitProposal;
                toJSON(message: _140.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _140.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _140.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSubmitProposalResponse;
                fromJSON(object: any): _140.MsgSubmitProposalResponse;
                toJSON(message: _140.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _140.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _140.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExecLegacyContent;
                fromJSON(object: any): _140.MsgExecLegacyContent;
                toJSON(message: _140.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _140.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _140.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExecLegacyContentResponse;
                fromJSON(_: any): _140.MsgExecLegacyContentResponse;
                toJSON(_: _140.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _140.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _140.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgVote;
                fromJSON(object: any): _140.MsgVote;
                toJSON(message: _140.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _138.VoteOption;
                    metadata?: string;
                }): _140.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _140.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgVoteResponse;
                fromJSON(_: any): _140.MsgVoteResponse;
                toJSON(_: _140.MsgVoteResponse): unknown;
                fromPartial(_: {}): _140.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _140.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgVoteWeighted;
                fromJSON(object: any): _140.MsgVoteWeighted;
                toJSON(message: _140.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _138.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _140.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _140.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgVoteWeightedResponse;
                fromJSON(_: any): _140.MsgVoteWeightedResponse;
                toJSON(_: _140.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _140.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _140.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgDeposit;
                fromJSON(object: any): _140.MsgDeposit;
                toJSON(message: _140.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _140.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgDepositResponse;
                fromJSON(_: any): _140.MsgDepositResponse;
                toJSON(_: _140.MsgDepositResponse): unknown;
                fromPartial(_: {}): _140.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _139.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryProposalRequest;
                fromJSON(object: any): _139.QueryProposalRequest;
                toJSON(message: _139.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _139.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _139.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryProposalResponse;
                fromJSON(object: any): _139.QueryProposalResponse;
                toJSON(message: _139.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _138.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    };
                }): _139.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _139.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryProposalsRequest;
                fromJSON(object: any): _139.QueryProposalsRequest;
                toJSON(message: _139.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _138.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _139.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _139.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryProposalsResponse;
                fromJSON(object: any): _139.QueryProposalsResponse;
                toJSON(message: _139.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _138.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _139.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _139.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryVoteRequest;
                fromJSON(object: any): _139.QueryVoteRequest;
                toJSON(message: _139.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _139.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _139.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryVoteResponse;
                fromJSON(object: any): _139.QueryVoteResponse;
                toJSON(message: _139.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _138.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _139.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _139.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryVotesRequest;
                fromJSON(object: any): _139.QueryVotesRequest;
                toJSON(message: _139.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _139.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _139.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryVotesResponse;
                fromJSON(object: any): _139.QueryVotesResponse;
                toJSON(message: _139.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _138.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _139.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _139.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsRequest;
                fromJSON(object: any): _139.QueryParamsRequest;
                toJSON(message: _139.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _139.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _139.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsResponse;
                fromJSON(object: any): _139.QueryParamsResponse;
                toJSON(message: _139.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _139.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _139.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDepositRequest;
                fromJSON(object: any): _139.QueryDepositRequest;
                toJSON(message: _139.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _139.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _139.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDepositResponse;
                fromJSON(object: any): _139.QueryDepositResponse;
                toJSON(message: _139.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _139.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _139.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDepositsRequest;
                fromJSON(object: any): _139.QueryDepositsRequest;
                toJSON(message: _139.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _139.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _139.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDepositsResponse;
                fromJSON(object: any): _139.QueryDepositsResponse;
                toJSON(message: _139.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _139.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _139.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTallyResultRequest;
                fromJSON(object: any): _139.QueryTallyResultRequest;
                toJSON(message: _139.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _139.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _139.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTallyResultResponse;
                fromJSON(object: any): _139.QueryTallyResultResponse;
                toJSON(message: _139.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _139.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _138.VoteOption;
            voteOptionToJSON(object: _138.VoteOption): string;
            proposalStatusFromJSON(object: any): _138.ProposalStatus;
            proposalStatusToJSON(object: _138.ProposalStatus): string;
            VoteOption: typeof _138.VoteOption;
            ProposalStatus: typeof _138.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _138.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.WeightedVoteOption;
                fromJSON(object: any): _138.WeightedVoteOption;
                toJSON(message: _138.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _138.VoteOption;
                    weight?: string;
                }): _138.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _138.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Deposit;
                fromJSON(object: any): _138.Deposit;
                toJSON(message: _138.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _138.Deposit;
            };
            Proposal: {
                encode(message: _138.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Proposal;
                fromJSON(object: any): _138.Proposal;
                toJSON(message: _138.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _138.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    metadata?: string;
                }): _138.Proposal;
            };
            TallyResult: {
                encode(message: _138.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TallyResult;
                fromJSON(object: any): _138.TallyResult;
                toJSON(message: _138.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _138.TallyResult;
            };
            Vote: {
                encode(message: _138.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Vote;
                fromJSON(object: any): _138.Vote;
                toJSON(message: _138.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _138.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _138.Vote;
            };
            DepositParams: {
                encode(message: _138.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DepositParams;
                fromJSON(object: any): _138.DepositParams;
                toJSON(message: _138.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _138.DepositParams;
            };
            VotingParams: {
                encode(message: _138.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.VotingParams;
                fromJSON(object: any): _138.VotingParams;
                toJSON(message: _138.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _138.VotingParams;
            };
            TallyParams: {
                encode(message: _138.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TallyParams;
                fromJSON(object: any): _138.TallyParams;
                toJSON(message: _138.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _138.TallyParams;
            };
            GenesisState: {
                encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
                fromJSON(object: any): _137.GenesisState;
                toJSON(message: _137.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _138.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _138.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _137.GenesisState;
            };
        };
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _144.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _144.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _144.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _144.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _144.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _144.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _144.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _144.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _144.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitProposal;
                fromJSON(object: any): _144.MsgSubmitProposal;
                toJSON(message: _144.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _144.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _144.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitProposalResponse;
                fromJSON(object: any): _144.MsgSubmitProposalResponse;
                toJSON(message: _144.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _144.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _144.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVote;
                fromJSON(object: any): _144.MsgVote;
                toJSON(message: _144.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _142.VoteOption;
                }): _144.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _144.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteResponse;
                fromJSON(_: any): _144.MsgVoteResponse;
                toJSON(_: _144.MsgVoteResponse): unknown;
                fromPartial(_: {}): _144.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _144.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteWeighted;
                fromJSON(object: any): _144.MsgVoteWeighted;
                toJSON(message: _144.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _142.VoteOption;
                        weight?: string;
                    }[];
                }): _144.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _144.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteWeightedResponse;
                fromJSON(_: any): _144.MsgVoteWeightedResponse;
                toJSON(_: _144.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _144.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _144.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDeposit;
                fromJSON(object: any): _144.MsgDeposit;
                toJSON(message: _144.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _144.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _144.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDepositResponse;
                fromJSON(_: any): _144.MsgDepositResponse;
                toJSON(_: _144.MsgDepositResponse): unknown;
                fromPartial(_: {}): _144.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _143.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryProposalRequest;
                fromJSON(object: any): _143.QueryProposalRequest;
                toJSON(message: _143.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _143.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _143.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryProposalResponse;
                fromJSON(object: any): _143.QueryProposalResponse;
                toJSON(message: _143.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _142.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _143.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _143.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryProposalsRequest;
                fromJSON(object: any): _143.QueryProposalsRequest;
                toJSON(message: _143.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _142.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _143.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryProposalsResponse;
                fromJSON(object: any): _143.QueryProposalsResponse;
                toJSON(message: _143.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _142.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _143.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryVoteRequest;
                fromJSON(object: any): _143.QueryVoteRequest;
                toJSON(message: _143.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _143.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _143.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryVoteResponse;
                fromJSON(object: any): _143.QueryVoteResponse;
                toJSON(message: _143.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _142.VoteOption;
                        options?: {
                            option?: _142.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _143.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _143.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryVotesRequest;
                fromJSON(object: any): _143.QueryVotesRequest;
                toJSON(message: _143.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _143.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryVotesResponse;
                fromJSON(object: any): _143.QueryVotesResponse;
                toJSON(message: _143.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _142.VoteOption;
                        options?: {
                            option?: _142.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _143.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryParamsRequest;
                fromJSON(object: any): _143.QueryParamsRequest;
                toJSON(message: _143.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _143.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _143.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryParamsResponse;
                fromJSON(object: any): _143.QueryParamsResponse;
                toJSON(message: _143.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _143.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _143.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryDepositRequest;
                fromJSON(object: any): _143.QueryDepositRequest;
                toJSON(message: _143.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _143.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _143.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryDepositResponse;
                fromJSON(object: any): _143.QueryDepositResponse;
                toJSON(message: _143.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _143.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _143.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryDepositsRequest;
                fromJSON(object: any): _143.QueryDepositsRequest;
                toJSON(message: _143.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _143.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryDepositsResponse;
                fromJSON(object: any): _143.QueryDepositsResponse;
                toJSON(message: _143.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _143.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryTallyResultRequest;
                fromJSON(object: any): _143.QueryTallyResultRequest;
                toJSON(message: _143.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _143.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _143.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryTallyResultResponse;
                fromJSON(object: any): _143.QueryTallyResultResponse;
                toJSON(message: _143.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _143.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _142.VoteOption;
            voteOptionToJSON(object: _142.VoteOption): string;
            proposalStatusFromJSON(object: any): _142.ProposalStatus;
            proposalStatusToJSON(object: _142.ProposalStatus): string;
            VoteOption: typeof _142.VoteOption;
            ProposalStatus: typeof _142.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _142.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.WeightedVoteOption;
                fromJSON(object: any): _142.WeightedVoteOption;
                toJSON(message: _142.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _142.VoteOption;
                    weight?: string;
                }): _142.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _142.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TextProposal;
                fromJSON(object: any): _142.TextProposal;
                toJSON(message: _142.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _142.TextProposal;
            };
            Deposit: {
                encode(message: _142.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Deposit;
                fromJSON(object: any): _142.Deposit;
                toJSON(message: _142.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.Deposit;
            };
            Proposal: {
                encode(message: _142.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Proposal;
                fromJSON(object: any): _142.Proposal;
                toJSON(message: _142.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _142.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _142.Proposal;
            };
            TallyResult: {
                encode(message: _142.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TallyResult;
                fromJSON(object: any): _142.TallyResult;
                toJSON(message: _142.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _142.TallyResult;
            };
            Vote: {
                encode(message: _142.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Vote;
                fromJSON(object: any): _142.Vote;
                toJSON(message: _142.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _142.VoteOption;
                    options?: {
                        option?: _142.VoteOption;
                        weight?: string;
                    }[];
                }): _142.Vote;
            };
            DepositParams: {
                encode(message: _142.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DepositParams;
                fromJSON(object: any): _142.DepositParams;
                toJSON(message: _142.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _142.DepositParams;
            };
            VotingParams: {
                encode(message: _142.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.VotingParams;
                fromJSON(object: any): _142.VotingParams;
                toJSON(message: _142.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _142.VotingParams;
            };
            TallyParams: {
                encode(message: _142.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TallyParams;
                fromJSON(object: any): _142.TallyParams;
                toJSON(message: _142.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _142.TallyParams;
            };
            GenesisState: {
                encode(message: _141.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.GenesisState;
                fromJSON(object: any): _141.GenesisState;
                toJSON(message: _141.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _142.VoteOption;
                        options?: {
                            option?: _142.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _142.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _141.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _148.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _148.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _148.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _148.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _148.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _148.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _148.MsgCreateGroup): {
                        typeUrl: string;
                        value: _148.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _148.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _148.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _148.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _148.MsgWithdrawProposal;
                    };
                    vote(value: _148.MsgVote): {
                        typeUrl: string;
                        value: _148.MsgVote;
                    };
                    exec(value: _148.MsgExec): {
                        typeUrl: string;
                        value: _148.MsgExec;
                    };
                    leaveGroup(value: _148.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _148.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _148.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _148.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _148.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _148.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _148.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _148.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _148.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _148.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _148.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _148.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _148.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _148.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _148.MsgCreateGroup): {
                        typeUrl: string;
                        value: _148.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _148.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _148.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _148.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _148.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _148.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _148.MsgWithdrawProposal;
                    };
                    vote(value: _148.MsgVote): {
                        typeUrl: string;
                        value: _148.MsgVote;
                    };
                    exec(value: _148.MsgExec): {
                        typeUrl: string;
                        value: _148.MsgExec;
                    };
                    leaveGroup(value: _148.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _148.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _148.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _148.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _148.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _148.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _148.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _148.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _148.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _148.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _148.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _148.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _148.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _148.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _148.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _148.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _148.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _148.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _148.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _148.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _148.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _148.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _148.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _148.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _148.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _148.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _148.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _148.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _148.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _148.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _149.VoteOption;
            voteOptionToJSON(object: _149.VoteOption): string;
            proposalStatusFromJSON(object: any): _149.ProposalStatus;
            proposalStatusToJSON(object: _149.ProposalStatus): string;
            proposalResultFromJSON(object: any): _149.ProposalResult;
            proposalResultToJSON(object: _149.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _149.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _149.ProposalExecutorResult): string;
            VoteOption: typeof _149.VoteOption;
            ProposalStatus: typeof _149.ProposalStatus;
            ProposalResult: typeof _149.ProposalResult;
            ProposalExecutorResult: typeof _149.ProposalExecutorResult;
            Member: {
                encode(message: _149.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Member;
                fromJSON(object: any): _149.Member;
                toJSON(message: _149.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _149.Member;
            };
            Members: {
                encode(message: _149.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Members;
                fromJSON(object: any): _149.Members;
                toJSON(message: _149.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _149.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _149.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ThresholdDecisionPolicy;
                fromJSON(object: any): _149.ThresholdDecisionPolicy;
                toJSON(message: _149.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _149.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _149.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PercentageDecisionPolicy;
                fromJSON(object: any): _149.PercentageDecisionPolicy;
                toJSON(message: _149.PercentageDecisionPolicy): unknown;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _149.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _149.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DecisionPolicyWindows;
                fromJSON(object: any): _149.DecisionPolicyWindows;
                toJSON(message: _149.DecisionPolicyWindows): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _149.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _149.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GroupInfo;
                fromJSON(object: any): _149.GroupInfo;
                toJSON(message: _149.GroupInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    totalWeight?: string;
                    createdAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _149.GroupInfo;
            };
            GroupMember: {
                encode(message: _149.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GroupMember;
                fromJSON(object: any): _149.GroupMember;
                toJSON(message: _149.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _149.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _149.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GroupPolicyInfo;
                fromJSON(object: any): _149.GroupPolicyInfo;
                toJSON(message: _149.GroupPolicyInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _149.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _149.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Proposal;
                fromJSON(object: any): _149.Proposal;
                toJSON(message: _149.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    groupVersion?: any;
                    groupPolicyVersion?: any;
                    status?: _149.ProposalStatus;
                    result?: _149.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    executorResult?: _149.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _149.Proposal;
            };
            TallyResult: {
                encode(message: _149.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.TallyResult;
                fromJSON(object: any): _149.TallyResult;
                toJSON(message: _149.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _149.TallyResult;
            };
            Vote: {
                encode(message: _149.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Vote;
                fromJSON(object: any): _149.Vote;
                toJSON(message: _149.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _149.VoteOption;
                    metadata?: string;
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _149.Vote;
            };
            execFromJSON(object: any): _148.Exec;
            execToJSON(object: _148.Exec): string;
            Exec: typeof _148.Exec;
            MsgCreateGroup: {
                encode(message: _148.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroup;
                fromJSON(object: any): _148.MsgCreateGroup;
                toJSON(message: _148.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    metadata?: string;
                }): _148.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _148.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupResponse;
                fromJSON(object: any): _148.MsgCreateGroupResponse;
                toJSON(message: _148.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _148.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _148.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMembers;
                fromJSON(object: any): _148.MsgUpdateGroupMembers;
                toJSON(message: _148.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _148.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _148.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _148.MsgUpdateGroupMembersResponse;
                toJSON(_: _148.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _148.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupAdmin;
                fromJSON(object: any): _148.MsgUpdateGroupAdmin;
                toJSON(message: _148.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _148.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _148.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _148.MsgUpdateGroupAdminResponse;
                toJSON(_: _148.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _148.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMetadata;
                fromJSON(object: any): _148.MsgUpdateGroupMetadata;
                toJSON(message: _148.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                }): _148.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _148.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _148.MsgUpdateGroupMetadataResponse;
                toJSON(_: _148.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _148.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupPolicy;
                fromJSON(object: any): _148.MsgCreateGroupPolicy;
                toJSON(message: _148.MsgCreateGroupPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _148.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _148.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _148.MsgCreateGroupPolicyResponse;
                toJSON(message: _148.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _148.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _148.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _148.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _148.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _148.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _148.MsgCreateGroupWithPolicy;
                toJSON(message: _148.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _148.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _148.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _148.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _148.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                    groupPolicyAddress?: string;
                }): _148.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _148.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _148.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _148.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _148.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _148.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _148.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _148.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _148.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _148.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: {}): _148.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _148.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSubmitProposal;
                fromJSON(object: any): _148.MsgSubmitProposal;
                toJSON(message: _148.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _148.Exec;
                }): _148.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _148.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSubmitProposalResponse;
                fromJSON(object: any): _148.MsgSubmitProposalResponse;
                toJSON(message: _148.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _148.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _148.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawProposal;
                fromJSON(object: any): _148.MsgWithdrawProposal;
                toJSON(message: _148.MsgWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                }): _148.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _148.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawProposalResponse;
                fromJSON(_: any): _148.MsgWithdrawProposalResponse;
                toJSON(_: _148.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: {}): _148.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _148.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgVote;
                fromJSON(object: any): _148.MsgVote;
                toJSON(message: _148.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _149.VoteOption;
                    metadata?: string;
                    exec?: _148.Exec;
                }): _148.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _148.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgVoteResponse;
                fromJSON(_: any): _148.MsgVoteResponse;
                toJSON(_: _148.MsgVoteResponse): unknown;
                fromPartial(_: {}): _148.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _148.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgExec;
                fromJSON(object: any): _148.MsgExec;
                toJSON(message: _148.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _148.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _148.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgExecResponse;
                fromJSON(_: any): _148.MsgExecResponse;
                toJSON(_: _148.MsgExecResponse): unknown;
                fromPartial(_: {}): _148.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _148.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgLeaveGroup;
                fromJSON(object: any): _148.MsgLeaveGroup;
                toJSON(message: _148.MsgLeaveGroup): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                }): _148.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _148.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgLeaveGroupResponse;
                fromJSON(_: any): _148.MsgLeaveGroupResponse;
                toJSON(_: _148.MsgLeaveGroupResponse): unknown;
                fromPartial(_: {}): _148.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _147.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupInfoRequest;
                fromJSON(object: any): _147.QueryGroupInfoRequest;
                toJSON(message: _147.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _147.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _147.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupInfoResponse;
                fromJSON(object: any): _147.QueryGroupInfoResponse;
                toJSON(message: _147.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _147.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _147.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _147.QueryGroupPolicyInfoRequest;
                toJSON(message: _147.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _147.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _147.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _147.QueryGroupPolicyInfoResponse;
                toJSON(message: _147.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _147.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _147.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupMembersRequest;
                fromJSON(object: any): _147.QueryGroupMembersRequest;
                toJSON(message: _147.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _147.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupMembersResponse;
                fromJSON(object: any): _147.QueryGroupMembersResponse;
                toJSON(message: _147.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _147.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupsByAdminRequest;
                fromJSON(object: any): _147.QueryGroupsByAdminRequest;
                toJSON(message: _147.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _147.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupsByAdminResponse;
                fromJSON(object: any): _147.QueryGroupsByAdminResponse;
                toJSON(message: _147.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _147.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _147.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _147.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _147.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _147.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _147.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _147.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _147.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _147.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _147.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _147.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _147.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _147.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryProposalRequest;
                fromJSON(object: any): _147.QueryProposalRequest;
                toJSON(message: _147.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _147.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _147.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryProposalResponse;
                fromJSON(object: any): _147.QueryProposalResponse;
                toJSON(message: _147.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _149.ProposalStatus;
                        result?: _149.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _149.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _147.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _147.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _147.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _147.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _147.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _147.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _147.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _149.ProposalStatus;
                        result?: _149.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _149.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _147.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _147.QueryVoteByProposalVoterRequest;
                toJSON(message: _147.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _147.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _147.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _147.QueryVoteByProposalVoterResponse;
                toJSON(message: _147.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _149.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _147.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _147.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVotesByProposalRequest;
                fromJSON(object: any): _147.QueryVotesByProposalRequest;
                toJSON(message: _147.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _147.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVotesByProposalResponse;
                fromJSON(object: any): _147.QueryVotesByProposalResponse;
                toJSON(message: _147.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _149.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _147.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVotesByVoterRequest;
                fromJSON(object: any): _147.QueryVotesByVoterRequest;
                toJSON(message: _147.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _147.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryVotesByVoterResponse;
                fromJSON(object: any): _147.QueryVotesByVoterResponse;
                toJSON(message: _147.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _149.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _147.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupsByMemberRequest;
                fromJSON(object: any): _147.QueryGroupsByMemberRequest;
                toJSON(message: _147.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _147.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _147.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGroupsByMemberResponse;
                fromJSON(object: any): _147.QueryGroupsByMemberResponse;
                toJSON(message: _147.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _147.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTallyResultRequest;
                fromJSON(object: any): _147.QueryTallyResultRequest;
                toJSON(message: _147.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _147.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _147.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTallyResultResponse;
                fromJSON(object: any): _147.QueryTallyResultResponse;
                toJSON(message: _147.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _147.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                    groupPolicySeq?: any;
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _149.ProposalStatus;
                        result?: _149.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _149.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _149.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _146.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _145.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventCreateGroup;
                fromJSON(object: any): _145.EventCreateGroup;
                toJSON(message: _145.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _145.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _145.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventUpdateGroup;
                fromJSON(object: any): _145.EventUpdateGroup;
                toJSON(message: _145.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _145.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _145.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventCreateGroupPolicy;
                fromJSON(object: any): _145.EventCreateGroupPolicy;
                toJSON(message: _145.EventCreateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _145.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _145.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventUpdateGroupPolicy;
                fromJSON(object: any): _145.EventUpdateGroupPolicy;
                toJSON(message: _145.EventUpdateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _145.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _145.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventSubmitProposal;
                fromJSON(object: any): _145.EventSubmitProposal;
                toJSON(message: _145.EventSubmitProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _145.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _145.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventWithdrawProposal;
                fromJSON(object: any): _145.EventWithdrawProposal;
                toJSON(message: _145.EventWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _145.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _145.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventVote;
                fromJSON(object: any): _145.EventVote;
                toJSON(message: _145.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _145.EventVote;
            };
            EventExec: {
                encode(message: _145.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventExec;
                fromJSON(object: any): _145.EventExec;
                toJSON(message: _145.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    result?: _149.ProposalExecutorResult;
                }): _145.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _145.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventLeaveGroup;
                fromJSON(object: any): _145.EventLeaveGroup;
                toJSON(message: _145.EventLeaveGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                    address?: string;
                }): _145.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromJSON(_: any): _152.QueryParamsRequest;
                toJSON(_: _152.QueryParamsRequest): unknown;
                fromPartial(_: {}): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _152.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _152.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInflationRequest;
                fromJSON(_: any): _152.QueryInflationRequest;
                toJSON(_: _152.QueryInflationRequest): unknown;
                fromPartial(_: {}): _152.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _152.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInflationResponse;
                fromJSON(object: any): _152.QueryInflationResponse;
                toJSON(message: _152.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _152.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _152.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _152.QueryAnnualProvisionsRequest;
                toJSON(_: _152.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _152.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _152.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _152.QueryAnnualProvisionsResponse;
                toJSON(message: _152.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _152.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _151.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Minter;
                fromJSON(object: any): _151.Minter;
                toJSON(message: _151.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _151.Minter;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromJSON(object: any): _151.Params;
                toJSON(message: _151.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _151.Params;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _150.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _158.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _158.MsgSend): {
                        typeUrl: string;
                        value: _158.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _158.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _158.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _158.MsgSend): {
                        typeUrl: string;
                        value: _158.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _158.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _158.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _158.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSend;
                fromJSON(object: any): _158.MsgSend;
                toJSON(message: _158.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _158.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _158.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSendResponse;
                fromJSON(_: any): _158.MsgSendResponse;
                toJSON(_: _158.MsgSendResponse): unknown;
                fromPartial(_: {}): _158.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _157.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryBalanceRequest;
                fromJSON(object: any): _157.QueryBalanceRequest;
                toJSON(message: _157.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _157.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _157.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryBalanceResponse;
                fromJSON(object: any): _157.QueryBalanceResponse;
                toJSON(message: _157.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _157.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _157.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryOwnerRequest;
                fromJSON(object: any): _157.QueryOwnerRequest;
                toJSON(message: _157.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _157.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _157.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryOwnerResponse;
                fromJSON(object: any): _157.QueryOwnerResponse;
                toJSON(message: _157.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _157.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _157.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QuerySupplyRequest;
                fromJSON(object: any): _157.QuerySupplyRequest;
                toJSON(message: _157.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _157.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _157.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QuerySupplyResponse;
                fromJSON(object: any): _157.QuerySupplyResponse;
                toJSON(message: _157.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _157.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _157.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryNFTsRequest;
                fromJSON(object: any): _157.QueryNFTsRequest;
                toJSON(message: _157.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _157.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _157.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryNFTsResponse;
                fromJSON(object: any): _157.QueryNFTsResponse;
                toJSON(message: _157.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
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
                }): _157.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _157.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryNFTRequest;
                fromJSON(object: any): _157.QueryNFTRequest;
                toJSON(message: _157.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _157.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _157.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryNFTResponse;
                fromJSON(object: any): _157.QueryNFTResponse;
                toJSON(message: _157.QueryNFTResponse): unknown;
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
                }): _157.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _157.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClassRequest;
                fromJSON(object: any): _157.QueryClassRequest;
                toJSON(message: _157.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _157.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _157.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClassResponse;
                fromJSON(object: any): _157.QueryClassResponse;
                toJSON(message: _157.QueryClassResponse): unknown;
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
                }): _157.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _157.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClassesRequest;
                fromJSON(object: any): _157.QueryClassesRequest;
                toJSON(message: _157.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _157.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _157.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClassesResponse;
                fromJSON(object: any): _157.QueryClassesResponse;
                toJSON(message: _157.QueryClassesResponse): unknown;
                fromPartial(object: {
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
                }): _157.QueryClassesResponse;
            };
            Class: {
                encode(message: _156.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Class;
                fromJSON(object: any): _156.Class;
                toJSON(message: _156.Class): unknown;
                fromPartial(object: {
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
                }): _156.Class;
            };
            NFT: {
                encode(message: _156.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.NFT;
                fromJSON(object: any): _156.NFT;
                toJSON(message: _156.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _156.NFT;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial(object: {
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
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _155.GenesisState;
            };
            Entry: {
                encode(message: _155.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Entry;
                fromJSON(object: any): _155.Entry;
                toJSON(message: _155.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _155.Entry;
            };
            EventSend: {
                encode(message: _154.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventSend;
                fromJSON(object: any): _154.EventSend;
                toJSON(message: _154.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _154.EventSend;
            };
            EventMint: {
                encode(message: _154.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventMint;
                fromJSON(object: any): _154.EventMint;
                toJSON(message: _154.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _154.EventMint;
            };
            EventBurn: {
                encode(message: _154.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventBurn;
                fromJSON(object: any): _154.EventBurn;
                toJSON(message: _154.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _154.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _159.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TableDescriptor;
                fromJSON(object: any): _159.TableDescriptor;
                toJSON(message: _159.TableDescriptor): unknown;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _159.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _159.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.PrimaryKeyDescriptor;
                fromJSON(object: any): _159.PrimaryKeyDescriptor;
                toJSON(message: _159.PrimaryKeyDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _159.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _159.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SecondaryIndexDescriptor;
                fromJSON(object: any): _159.SecondaryIndexDescriptor;
                toJSON(message: _159.SecondaryIndexDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _159.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _159.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SingletonDescriptor;
                fromJSON(object: any): _159.SingletonDescriptor;
                toJSON(message: _159.SingletonDescriptor): unknown;
                fromPartial(object: {
                    id?: number;
                }): _159.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _160.StorageType;
            storageTypeToJSON(object: _160.StorageType): string;
            StorageType: typeof _160.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _160.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ModuleSchemaDescriptor;
                fromJSON(object: any): _160.ModuleSchemaDescriptor;
                toJSON(message: _160.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _160.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _160.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _160.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _160.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _160.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _160.StorageType;
                }): _160.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
                fromJSON(object: any): _162.QueryParamsRequest;
                toJSON(message: _162.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _162.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
                fromJSON(object: any): _162.QueryParamsResponse;
                toJSON(message: _162.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _162.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _162.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySubspacesRequest;
                fromJSON(_: any): _162.QuerySubspacesRequest;
                toJSON(_: _162.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _162.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _162.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySubspacesResponse;
                fromJSON(object: any): _162.QuerySubspacesResponse;
                toJSON(message: _162.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _162.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _162.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Subspace;
                fromJSON(object: any): _162.Subspace;
                toJSON(message: _162.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _162.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _161.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ParameterChangeProposal;
                fromJSON(object: any): _161.ParameterChangeProposal;
                toJSON(message: _161.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _161.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _161.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ParamChange;
                fromJSON(object: any): _161.ParamChange;
                toJSON(message: _161.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _161.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _166.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _166.MsgUnjail): {
                        typeUrl: string;
                        value: _166.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _166.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _166.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _166.MsgUnjail): {
                        typeUrl: string;
                        value: _166.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _166.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _166.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _166.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgUnjail;
                fromJSON(object: any): _166.MsgUnjail;
                toJSON(message: _166.MsgUnjail): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _166.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _166.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgUnjailResponse;
                fromJSON(_: any): _166.MsgUnjailResponse;
                toJSON(_: _166.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _166.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _165.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ValidatorSigningInfo;
                fromJSON(object: any): _165.ValidatorSigningInfo;
                toJSON(message: _165.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _165.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _165.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Params;
                fromJSON(object: any): _165.Params;
                toJSON(message: _165.Params): unknown;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _165.Params;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromJSON(_: any): _164.QueryParamsRequest;
                toJSON(_: _164.QueryParamsRequest): unknown;
                fromPartial(_: {}): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponse;
                fromJSON(object: any): _164.QueryParamsResponse;
                toJSON(message: _164.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _164.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _164.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySigningInfoRequest;
                fromJSON(object: any): _164.QuerySigningInfoRequest;
                toJSON(message: _164.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    consAddress?: string;
                }): _164.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _164.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySigningInfoResponse;
                fromJSON(object: any): _164.QuerySigningInfoResponse;
                toJSON(message: _164.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _164.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _164.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySigningInfosRequest;
                fromJSON(object: any): _164.QuerySigningInfosRequest;
                toJSON(message: _164.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _164.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _164.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySigningInfosResponse;
                fromJSON(object: any): _164.QuerySigningInfosResponse;
                toJSON(message: _164.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _164.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                fromJSON(object: any): _163.GenesisState;
                toJSON(message: _163.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _163.GenesisState;
            };
            SigningInfo: {
                encode(message: _163.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SigningInfo;
                fromJSON(object: any): _163.SigningInfo;
                toJSON(message: _163.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _163.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _163.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ValidatorMissedBlocks;
                fromJSON(object: any): _163.ValidatorMissedBlocks;
                toJSON(message: _163.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _163.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _163.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MissedBlock;
                fromJSON(object: any): _163.MissedBlock;
                toJSON(message: _163.MissedBlock): unknown;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _163.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _171.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _171.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _171.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _171.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _171.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _171.MsgCreateValidator): {
                        typeUrl: string;
                        value: _171.MsgCreateValidator;
                    };
                    editValidator(value: _171.MsgEditValidator): {
                        typeUrl: string;
                        value: _171.MsgEditValidator;
                    };
                    delegate(value: _171.MsgDelegate): {
                        typeUrl: string;
                        value: _171.MsgDelegate;
                    };
                    beginRedelegate(value: _171.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _171.MsgBeginRedelegate;
                    };
                    undelegate(value: _171.MsgUndelegate): {
                        typeUrl: string;
                        value: _171.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _171.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _171.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _171.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _171.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _171.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _171.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _171.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _171.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _171.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _171.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _171.MsgCreateValidator): {
                        typeUrl: string;
                        value: _171.MsgCreateValidator;
                    };
                    editValidator(value: _171.MsgEditValidator): {
                        typeUrl: string;
                        value: _171.MsgEditValidator;
                    };
                    delegate(value: _171.MsgDelegate): {
                        typeUrl: string;
                        value: _171.MsgDelegate;
                    };
                    beginRedelegate(value: _171.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _171.MsgBeginRedelegate;
                    };
                    undelegate(value: _171.MsgUndelegate): {
                        typeUrl: string;
                        value: _171.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _171.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _171.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _171.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _171.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _171.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _171.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _171.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgCreateValidator;
                fromJSON(object: any): _171.MsgCreateValidator;
                toJSON(message: _171.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _171.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgCreateValidatorResponse;
                fromJSON(_: any): _171.MsgCreateValidatorResponse;
                toJSON(_: _171.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _171.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _171.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgEditValidator;
                fromJSON(object: any): _171.MsgEditValidator;
                toJSON(message: _171.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _171.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _171.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgEditValidatorResponse;
                fromJSON(_: any): _171.MsgEditValidatorResponse;
                toJSON(_: _171.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _171.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _171.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegate;
                fromJSON(object: any): _171.MsgDelegate;
                toJSON(message: _171.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _171.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegateResponse;
                fromJSON(_: any): _171.MsgDelegateResponse;
                toJSON(_: _171.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _171.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _171.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgBeginRedelegate;
                fromJSON(object: any): _171.MsgBeginRedelegate;
                toJSON(message: _171.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _171.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgBeginRedelegateResponse;
                fromJSON(object: any): _171.MsgBeginRedelegateResponse;
                toJSON(message: _171.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _171.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _171.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgUndelegate;
                fromJSON(object: any): _171.MsgUndelegate;
                toJSON(message: _171.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _171.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgUndelegateResponse;
                fromJSON(object: any): _171.MsgUndelegateResponse;
                toJSON(message: _171.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _171.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _170.BondStatus;
            bondStatusToJSON(object: _170.BondStatus): string;
            BondStatus: typeof _170.BondStatus;
            HistoricalInfo: {
                encode(message: _170.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.HistoricalInfo;
                fromJSON(object: any): _170.HistoricalInfo;
                toJSON(message: _170.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _170.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _170.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.CommissionRates;
                fromJSON(object: any): _170.CommissionRates;
                toJSON(message: _170.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _170.CommissionRates;
            };
            Commission: {
                encode(message: _170.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Commission;
                fromJSON(object: any): _170.Commission;
                toJSON(message: _170.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _170.Commission;
            };
            Description: {
                encode(message: _170.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Description;
                fromJSON(object: any): _170.Description;
                toJSON(message: _170.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _170.Description;
            };
            Validator: {
                encode(message: _170.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Validator;
                fromJSON(object: any): _170.Validator;
                toJSON(message: _170.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _170.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    minSelfDelegation?: string;
                }): _170.Validator;
            };
            ValAddresses: {
                encode(message: _170.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ValAddresses;
                fromJSON(object: any): _170.ValAddresses;
                toJSON(message: _170.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _170.ValAddresses;
            };
            DVPair: {
                encode(message: _170.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DVPair;
                fromJSON(object: any): _170.DVPair;
                toJSON(message: _170.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _170.DVPair;
            };
            DVPairs: {
                encode(message: _170.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DVPairs;
                fromJSON(object: any): _170.DVPairs;
                toJSON(message: _170.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _170.DVPairs;
            };
            DVVTriplet: {
                encode(message: _170.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DVVTriplet;
                fromJSON(object: any): _170.DVVTriplet;
                toJSON(message: _170.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _170.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _170.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DVVTriplets;
                fromJSON(object: any): _170.DVVTriplets;
                toJSON(message: _170.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _170.DVVTriplets;
            };
            Delegation: {
                encode(message: _170.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Delegation;
                fromJSON(object: any): _170.Delegation;
                toJSON(message: _170.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _170.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _170.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.UnbondingDelegation;
                fromJSON(object: any): _170.UnbondingDelegation;
                toJSON(message: _170.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _170.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _170.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.UnbondingDelegationEntry;
                fromJSON(object: any): _170.UnbondingDelegationEntry;
                toJSON(message: _170.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    balance?: string;
                }): _170.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _170.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RedelegationEntry;
                fromJSON(object: any): _170.RedelegationEntry;
                toJSON(message: _170.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    sharesDst?: string;
                }): _170.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _170.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Redelegation;
                fromJSON(object: any): _170.Redelegation;
                toJSON(message: _170.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _170.Redelegation;
            };
            Params: {
                encode(message: _170.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Params;
                fromJSON(object: any): _170.Params;
                toJSON(message: _170.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _170.Params;
            };
            DelegationResponse: {
                encode(message: _170.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DelegationResponse;
                fromJSON(object: any): _170.DelegationResponse;
                toJSON(message: _170.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _170.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RedelegationEntryResponse;
                fromJSON(object: any): _170.RedelegationEntryResponse;
                toJSON(message: _170.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _170.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _170.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RedelegationResponse;
                fromJSON(object: any): _170.RedelegationResponse;
                toJSON(message: _170.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _170.RedelegationResponse;
            };
            Pool: {
                encode(message: _170.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Pool;
                fromJSON(object: any): _170.Pool;
                toJSON(message: _170.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _170.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _169.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorsRequest;
                fromJSON(object: any): _169.QueryValidatorsRequest;
                toJSON(message: _169.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _169.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorsResponse;
                fromJSON(object: any): _169.QueryValidatorsResponse;
                toJSON(message: _169.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _169.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorRequest;
                fromJSON(object: any): _169.QueryValidatorRequest;
                toJSON(message: _169.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _169.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _169.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorResponse;
                fromJSON(object: any): _169.QueryValidatorResponse;
                toJSON(message: _169.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    };
                }): _169.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _169.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _169.QueryValidatorDelegationsRequest;
                toJSON(message: _169.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _169.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _169.QueryValidatorDelegationsResponse;
                toJSON(message: _169.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _169.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _169.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _169.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _169.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _169.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _169.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _169.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegationRequest;
                fromJSON(object: any): _169.QueryDelegationRequest;
                toJSON(message: _169.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _169.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _169.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegationResponse;
                fromJSON(object: any): _169.QueryDelegationResponse;
                toJSON(message: _169.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _169.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _169.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _169.QueryUnbondingDelegationRequest;
                toJSON(message: _169.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _169.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _169.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _169.QueryUnbondingDelegationResponse;
                toJSON(message: _169.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _169.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _169.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _169.QueryDelegatorDelegationsRequest;
                toJSON(message: _169.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _169.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _169.QueryDelegatorDelegationsResponse;
                toJSON(message: _169.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _169.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _169.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _169.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _169.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _169.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _169.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _169.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryRedelegationsRequest;
                fromJSON(object: any): _169.QueryRedelegationsRequest;
                toJSON(message: _169.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _169.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryRedelegationsResponse;
                fromJSON(object: any): _169.QueryRedelegationsResponse;
                toJSON(message: _169.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _169.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _169.QueryDelegatorValidatorsRequest;
                toJSON(message: _169.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _169.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _169.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _169.QueryDelegatorValidatorsResponse;
                toJSON(message: _169.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _169.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _169.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _169.QueryDelegatorValidatorRequest;
                toJSON(message: _169.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _169.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _169.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _169.QueryDelegatorValidatorResponse;
                toJSON(message: _169.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    };
                }): _169.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _169.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryHistoricalInfoRequest;
                fromJSON(object: any): _169.QueryHistoricalInfoRequest;
                toJSON(message: _169.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _169.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _169.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryHistoricalInfoResponse;
                fromJSON(object: any): _169.QueryHistoricalInfoResponse;
                toJSON(message: _169.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _170.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _169.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _169.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryPoolRequest;
                fromJSON(_: any): _169.QueryPoolRequest;
                toJSON(_: _169.QueryPoolRequest): unknown;
                fromPartial(_: {}): _169.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _169.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryPoolResponse;
                fromJSON(object: any): _169.QueryPoolResponse;
                toJSON(message: _169.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _169.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _169.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsRequest;
                fromJSON(_: any): _169.QueryParamsRequest;
                toJSON(_: _169.QueryParamsRequest): unknown;
                fromPartial(_: {}): _169.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _169.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsResponse;
                fromJSON(object: any): _169.QueryParamsResponse;
                toJSON(message: _169.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _169.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _170.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _168.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _168.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.LastValidatorPower;
                fromJSON(object: any): _168.LastValidatorPower;
                toJSON(message: _168.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _168.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _167.AuthorizationType;
            authorizationTypeToJSON(object: _167.AuthorizationType): string;
            AuthorizationType: typeof _167.AuthorizationType;
            StakeAuthorization: {
                encode(message: _167.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.StakeAuthorization;
                fromJSON(object: any): _167.StakeAuthorization;
                toJSON(message: _167.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _167.AuthorizationType;
                }): _167.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _167.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.StakeAuthorization_Validators;
                fromJSON(object: any): _167.StakeAuthorization_Validators;
                toJSON(message: _167.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _167.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _172.SignMode;
                signModeToJSON(object: _172.SignMode): string;
                SignMode: typeof _172.SignMode;
                SignatureDescriptors: {
                    encode(message: _172.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignatureDescriptors;
                    fromJSON(object: any): _172.SignatureDescriptors;
                    toJSON(message: _172.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _172.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _172.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _172.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignatureDescriptor;
                    fromJSON(object: any): _172.SignatureDescriptor;
                    toJSON(message: _172.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _172.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _172.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _172.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignatureDescriptor_Data;
                    fromJSON(object: any): _172.SignatureDescriptor_Data;
                    toJSON(message: _172.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _172.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _172.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _172.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _172.SignatureDescriptor_Data_Single;
                    toJSON(message: _172.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _172.SignMode;
                        signature?: Uint8Array;
                    }): _172.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _172.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _172.SignatureDescriptor_Data_Multi;
                    toJSON(message: _172.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _172.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _174.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Tx;
                fromJSON(object: any): _174.Tx;
                toJSON(message: _174.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _172.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _174.Tx;
            };
            TxRaw: {
                encode(message: _174.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TxRaw;
                fromJSON(object: any): _174.TxRaw;
                toJSON(message: _174.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _174.TxRaw;
            };
            SignDoc: {
                encode(message: _174.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SignDoc;
                fromJSON(object: any): _174.SignDoc;
                toJSON(message: _174.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _174.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _174.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SignDocDirectAux;
                fromJSON(object: any): _174.SignDocDirectAux;
                toJSON(message: _174.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _174.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _174.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.TxBody;
                fromJSON(object: any): _174.TxBody;
                toJSON(message: _174.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _174.TxBody;
            };
            AuthInfo: {
                encode(message: _174.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.AuthInfo;
                fromJSON(object: any): _174.AuthInfo;
                toJSON(message: _174.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _172.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _174.AuthInfo;
            };
            SignerInfo: {
                encode(message: _174.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SignerInfo;
                fromJSON(object: any): _174.SignerInfo;
                toJSON(message: _174.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _172.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _174.SignerInfo;
            };
            ModeInfo: {
                encode(message: _174.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ModeInfo;
                fromJSON(object: any): _174.ModeInfo;
                toJSON(message: _174.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _172.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _174.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _174.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ModeInfo_Single;
                fromJSON(object: any): _174.ModeInfo_Single;
                toJSON(message: _174.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _172.SignMode;
                }): _174.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _174.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ModeInfo_Multi;
                fromJSON(object: any): _174.ModeInfo_Multi;
                toJSON(message: _174.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _174.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _174.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Fee;
                fromJSON(object: any): _174.Fee;
                toJSON(message: _174.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _174.Fee;
            };
            Tip: {
                encode(message: _174.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Tip;
                fromJSON(object: any): _174.Tip;
                toJSON(message: _174.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _174.Tip;
            };
            AuxSignerData: {
                encode(message: _174.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.AuxSignerData;
                fromJSON(object: any): _174.AuxSignerData;
                toJSON(message: _174.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _172.SignMode;
                    sig?: Uint8Array;
                }): _174.AuxSignerData;
            };
            orderByFromJSON(object: any): _173.OrderBy;
            orderByToJSON(object: _173.OrderBy): string;
            broadcastModeFromJSON(object: any): _173.BroadcastMode;
            broadcastModeToJSON(object: _173.BroadcastMode): string;
            OrderBy: typeof _173.OrderBy;
            BroadcastMode: typeof _173.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _173.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetTxsEventRequest;
                fromJSON(object: any): _173.GetTxsEventRequest;
                toJSON(message: _173.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _173.OrderBy;
                }): _173.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _173.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetTxsEventResponse;
                fromJSON(object: any): _173.GetTxsEventResponse;
                toJSON(message: _173.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _172.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _173.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _173.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BroadcastTxRequest;
                fromJSON(object: any): _173.BroadcastTxRequest;
                toJSON(message: _173.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _173.BroadcastMode;
                }): _173.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _173.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BroadcastTxResponse;
                fromJSON(object: any): _173.BroadcastTxResponse;
                toJSON(message: _173.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _173.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _173.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.SimulateRequest;
                fromJSON(object: any): _173.SimulateRequest;
                toJSON(message: _173.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _172.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _173.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _173.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.SimulateResponse;
                fromJSON(object: any): _173.SimulateResponse;
                toJSON(message: _173.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _173.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _173.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetTxRequest;
                fromJSON(object: any): _173.GetTxRequest;
                toJSON(message: _173.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _173.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _173.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetTxResponse;
                fromJSON(object: any): _173.GetTxResponse;
                toJSON(message: _173.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _172.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _173.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _173.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetBlockWithTxsRequest;
                fromJSON(object: any): _173.GetBlockWithTxsRequest;
                toJSON(message: _173.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _173.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _173.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GetBlockWithTxsResponse;
                fromJSON(object: any): _173.GetBlockWithTxsResponse;
                toJSON(message: _173.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _172.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: {
                                                    seconds?: any;
                                                    nanos?: number;
                                                };
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _173.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _176.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _176.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _176.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _176.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _176.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _176.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _176.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _176.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _176.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _176.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _176.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _176.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _176.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _176.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _176.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _176.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _176.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _176.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _177.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Plan;
                fromJSON(object: any): _177.Plan;
                toJSON(message: _177.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _177.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _177.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SoftwareUpgradeProposal;
                fromJSON(object: any): _177.SoftwareUpgradeProposal;
                toJSON(message: _177.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _177.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _177.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _177.CancelSoftwareUpgradeProposal;
                toJSON(message: _177.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _177.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _177.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ModuleVersion;
                fromJSON(object: any): _177.ModuleVersion;
                toJSON(message: _177.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _177.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _176.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSoftwareUpgrade;
                fromJSON(object: any): _176.MsgSoftwareUpgrade;
                toJSON(message: _176.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _176.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _176.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _176.MsgSoftwareUpgradeResponse;
                toJSON(_: _176.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _176.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _176.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgCancelUpgrade;
                fromJSON(object: any): _176.MsgCancelUpgrade;
                toJSON(message: _176.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _176.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _176.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgCancelUpgradeResponse;
                fromJSON(_: any): _176.MsgCancelUpgradeResponse;
                toJSON(_: _176.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _176.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _175.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryCurrentPlanRequest;
                fromJSON(_: any): _175.QueryCurrentPlanRequest;
                toJSON(_: _175.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _175.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _175.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryCurrentPlanResponse;
                fromJSON(object: any): _175.QueryCurrentPlanResponse;
                toJSON(message: _175.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _175.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _175.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAppliedPlanRequest;
                fromJSON(object: any): _175.QueryAppliedPlanRequest;
                toJSON(message: _175.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _175.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _175.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAppliedPlanResponse;
                fromJSON(object: any): _175.QueryAppliedPlanResponse;
                toJSON(message: _175.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _175.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _175.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _175.QueryUpgradedConsensusStateRequest;
                toJSON(message: _175.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: any;
                }): _175.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _175.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _175.QueryUpgradedConsensusStateResponse;
                toJSON(message: _175.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _175.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _175.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryModuleVersionsRequest;
                fromJSON(object: any): _175.QueryModuleVersionsRequest;
                toJSON(message: _175.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _175.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _175.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryModuleVersionsResponse;
                fromJSON(object: any): _175.QueryModuleVersionsResponse;
                toJSON(message: _175.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _175.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _175.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAuthorityRequest;
                fromJSON(_: any): _175.QueryAuthorityRequest;
                toJSON(_: _175.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _175.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _175.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAuthorityResponse;
                fromJSON(object: any): _175.QueryAuthorityResponse;
                toJSON(message: _175.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _175.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _178.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _178.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _178.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _178.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _178.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _178.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _178.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _178.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _178.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _178.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _178.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _178.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _178.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _178.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _178.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _178.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _178.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _178.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _178.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _178.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _179.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.BaseVestingAccount;
                fromJSON(object: any): _179.BaseVestingAccount;
                toJSON(message: _179.BaseVestingAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _179.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _179.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ContinuousVestingAccount;
                fromJSON(object: any): _179.ContinuousVestingAccount;
                toJSON(message: _179.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                }): _179.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _179.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.DelayedVestingAccount;
                fromJSON(object: any): _179.DelayedVestingAccount;
                toJSON(message: _179.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _179.DelayedVestingAccount;
            };
            Period: {
                encode(message: _179.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Period;
                fromJSON(object: any): _179.Period;
                toJSON(message: _179.Period): unknown;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _179.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _179.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PeriodicVestingAccount;
                fromJSON(object: any): _179.PeriodicVestingAccount;
                toJSON(message: _179.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _179.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _179.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PermanentLockedAccount;
                fromJSON(object: any): _179.PermanentLockedAccount;
                toJSON(message: _179.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _179.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _178.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreateVestingAccount;
                fromJSON(object: any): _178.MsgCreateVestingAccount;
                toJSON(message: _178.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _178.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _178.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _178.MsgCreateVestingAccountResponse;
                toJSON(_: _178.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _178.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _178.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _178.MsgCreatePermanentLockedAccount;
                toJSON(message: _178.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _178.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _178.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _178.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _178.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: {}): _178.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _178.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _178.MsgCreatePeriodicVestingAccount;
                toJSON(message: _178.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _178.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _178.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _178.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _178.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _178.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
}
