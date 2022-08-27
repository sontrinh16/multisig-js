import * as _212 from "../decentr/operations/genesis";
import * as _213 from "../decentr/operations/operations";
import * as _214 from "../decentr/operations/query";
import * as _215 from "../decentr/operations/tx";
export declare const operations: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            distributeRewards(value: _215.MsgDistributeRewards): {
                typeUrl: string;
                value: Uint8Array;
            };
            resetAccount(value: _215.MsgResetAccount): {
                typeUrl: string;
                value: Uint8Array;
            };
            mint(value: _215.MsgMint): {
                typeUrl: string;
                value: Uint8Array;
            };
            burn(value: _215.MsgBurn): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            distributeRewards(value: _215.MsgDistributeRewards): {
                typeUrl: string;
                value: _215.MsgDistributeRewards;
            };
            resetAccount(value: _215.MsgResetAccount): {
                typeUrl: string;
                value: _215.MsgResetAccount;
            };
            mint(value: _215.MsgMint): {
                typeUrl: string;
                value: _215.MsgMint;
            };
            burn(value: _215.MsgBurn): {
                typeUrl: string;
                value: _215.MsgBurn;
            };
        };
        toJSON: {
            distributeRewards(value: _215.MsgDistributeRewards): {
                typeUrl: string;
                value: unknown;
            };
            resetAccount(value: _215.MsgResetAccount): {
                typeUrl: string;
                value: unknown;
            };
            mint(value: _215.MsgMint): {
                typeUrl: string;
                value: unknown;
            };
            burn(value: _215.MsgBurn): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            distributeRewards(value: any): {
                typeUrl: string;
                value: _215.MsgDistributeRewards;
            };
            resetAccount(value: any): {
                typeUrl: string;
                value: _215.MsgResetAccount;
            };
            mint(value: any): {
                typeUrl: string;
                value: _215.MsgMint;
            };
            burn(value: any): {
                typeUrl: string;
                value: _215.MsgBurn;
            };
        };
        fromPartial: {
            distributeRewards(value: _215.MsgDistributeRewards): {
                typeUrl: string;
                value: _215.MsgDistributeRewards;
            };
            resetAccount(value: _215.MsgResetAccount): {
                typeUrl: string;
                value: _215.MsgResetAccount;
            };
            mint(value: _215.MsgMint): {
                typeUrl: string;
                value: _215.MsgMint;
            };
            burn(value: _215.MsgBurn): {
                typeUrl: string;
                value: _215.MsgBurn;
            };
        };
    };
    AminoConverter: {
        "/operations.MsgDistributeRewards": {
            aminoType: string;
            toAmino: ({ owner, rewards }: _215.MsgDistributeRewards) => {
                owner: string;
                rewards: {
                    receiver: string;
                    reward: {
                        dec: string;
                    };
                }[];
            };
            fromAmino: ({ owner, rewards }: {
                owner: string;
                rewards: {
                    receiver: string;
                    reward: {
                        dec: string;
                    };
                }[];
            }) => _215.MsgDistributeRewards;
        };
        "/operations.MsgResetAccount": {
            aminoType: string;
            toAmino: ({ owner, address }: _215.MsgResetAccount) => {
                owner: string;
                address: string;
            };
            fromAmino: ({ owner, address }: {
                owner: string;
                address: string;
            }) => _215.MsgResetAccount;
        };
        "/operations.MsgMint": {
            aminoType: string;
            toAmino: ({ owner, coin }: _215.MsgMint) => {
                owner: string;
                coin: {
                    denom: string;
                    amount: string;
                };
            };
            fromAmino: ({ owner, coin }: {
                owner: string;
                coin: {
                    denom: string;
                    amount: string;
                };
            }) => _215.MsgMint;
        };
        "/operations.MsgBurn": {
            aminoType: string;
            toAmino: ({ owner, coin }: _215.MsgBurn) => {
                owner: string;
                coin: {
                    denom: string;
                    amount: string;
                };
            };
            fromAmino: ({ owner, coin }: {
                owner: string;
                coin: {
                    denom: string;
                    amount: string;
                };
            }) => _215.MsgBurn;
        };
    };
    Reward: {
        encode(message: _215.Reward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Reward;
        fromJSON(object: any): _215.Reward;
        toJSON(message: _215.Reward): unknown;
        fromPartial(object: {
            receiver?: string;
            reward?: {
                dec?: string;
            };
        }): _215.Reward;
    };
    MsgDistributeRewards: {
        encode(message: _215.MsgDistributeRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgDistributeRewards;
        fromJSON(object: any): _215.MsgDistributeRewards;
        toJSON(message: _215.MsgDistributeRewards): unknown;
        fromPartial(object: {
            owner?: string;
            rewards?: {
                receiver?: string;
                reward?: {
                    dec?: string;
                };
            }[];
        }): _215.MsgDistributeRewards;
    };
    MsgDistributeRewardsResponse: {
        encode(_: _215.MsgDistributeRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgDistributeRewardsResponse;
        fromJSON(_: any): _215.MsgDistributeRewardsResponse;
        toJSON(_: _215.MsgDistributeRewardsResponse): unknown;
        fromPartial(_: {}): _215.MsgDistributeRewardsResponse;
    };
    MsgResetAccount: {
        encode(message: _215.MsgResetAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgResetAccount;
        fromJSON(object: any): _215.MsgResetAccount;
        toJSON(message: _215.MsgResetAccount): unknown;
        fromPartial(object: {
            owner?: string;
            address?: string;
        }): _215.MsgResetAccount;
    };
    MsgResetAccountResponse: {
        encode(_: _215.MsgResetAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgResetAccountResponse;
        fromJSON(_: any): _215.MsgResetAccountResponse;
        toJSON(_: _215.MsgResetAccountResponse): unknown;
        fromPartial(_: {}): _215.MsgResetAccountResponse;
    };
    MsgMint: {
        encode(message: _215.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgMint;
        fromJSON(object: any): _215.MsgMint;
        toJSON(message: _215.MsgMint): unknown;
        fromPartial(object: {
            owner?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
        }): _215.MsgMint;
    };
    MsgMintResponse: {
        encode(_: _215.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgMintResponse;
        fromJSON(_: any): _215.MsgMintResponse;
        toJSON(_: _215.MsgMintResponse): unknown;
        fromPartial(_: {}): _215.MsgMintResponse;
    };
    MsgBurn: {
        encode(message: _215.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgBurn;
        fromJSON(object: any): _215.MsgBurn;
        toJSON(message: _215.MsgBurn): unknown;
        fromPartial(object: {
            owner?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
        }): _215.MsgBurn;
    };
    MsgBurnResponse: {
        encode(_: _215.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgBurnResponse;
        fromJSON(_: any): _215.MsgBurnResponse;
        toJSON(_: _215.MsgBurnResponse): unknown;
        fromPartial(_: {}): _215.MsgBurnResponse;
    };
    MinGasPriceRequest: {
        encode(_: _214.MinGasPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MinGasPriceRequest;
        fromJSON(_: any): _214.MinGasPriceRequest;
        toJSON(_: _214.MinGasPriceRequest): unknown;
        fromPartial(_: {}): _214.MinGasPriceRequest;
    };
    MinGasPriceResponse: {
        encode(message: _214.MinGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MinGasPriceResponse;
        fromJSON(object: any): _214.MinGasPriceResponse;
        toJSON(message: _214.MinGasPriceResponse): unknown;
        fromPartial(object: {
            minGasPrice?: {
                denom?: string;
                amount?: string;
            };
        }): _214.MinGasPriceResponse;
    };
    Params: {
        encode(message: _213.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Params;
        fromJSON(object: any): _213.Params;
        toJSON(message: _213.Params): unknown;
        fromPartial(object: {
            supervisors?: string[];
            fixedGas?: {
                resetAccount?: any;
                distributeRewards?: any;
            };
            minGasPrice?: {
                denom?: string;
                amount?: string;
            };
        }): _213.Params;
    };
    FixedGasParams: {
        encode(message: _213.FixedGasParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.FixedGasParams;
        fromJSON(object: any): _213.FixedGasParams;
        toJSON(message: _213.FixedGasParams): unknown;
        fromPartial(object: {
            resetAccount?: any;
            distributeRewards?: any;
        }): _213.FixedGasParams;
    };
    GenesisState: {
        encode(message: _212.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GenesisState;
        fromJSON(object: any): _212.GenesisState;
        toJSON(message: _212.GenesisState): unknown;
        fromPartial(object: {
            params?: {
                supervisors?: string[];
                fixedGas?: {
                    resetAccount?: any;
                    distributeRewards?: any;
                };
                minGasPrice?: {
                    denom?: string;
                    amount?: string;
                };
            };
        }): _212.GenesisState;
    };
};
