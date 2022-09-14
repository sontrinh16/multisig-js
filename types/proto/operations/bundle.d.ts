import * as _280 from "../decentr/operations/genesis";
import * as _281 from "../decentr/operations/operations";
import * as _282 from "../decentr/operations/query";
import * as _283 from "../decentr/operations/tx";
export declare const operations: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            distributeRewards(value: _283.MsgDistributeRewards): {
                typeUrl: string;
                value: Uint8Array;
            };
            resetAccount(value: _283.MsgResetAccount): {
                typeUrl: string;
                value: Uint8Array;
            };
            mint(value: _283.MsgMint): {
                typeUrl: string;
                value: Uint8Array;
            };
            burn(value: _283.MsgBurn): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            distributeRewards(value: _283.MsgDistributeRewards): {
                typeUrl: string;
                value: _283.MsgDistributeRewards;
            };
            resetAccount(value: _283.MsgResetAccount): {
                typeUrl: string;
                value: _283.MsgResetAccount;
            };
            mint(value: _283.MsgMint): {
                typeUrl: string;
                value: _283.MsgMint;
            };
            burn(value: _283.MsgBurn): {
                typeUrl: string;
                value: _283.MsgBurn;
            };
        };
        toJSON: {
            distributeRewards(value: _283.MsgDistributeRewards): {
                typeUrl: string;
                value: unknown;
            };
            resetAccount(value: _283.MsgResetAccount): {
                typeUrl: string;
                value: unknown;
            };
            mint(value: _283.MsgMint): {
                typeUrl: string;
                value: unknown;
            };
            burn(value: _283.MsgBurn): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            distributeRewards(value: any): {
                typeUrl: string;
                value: _283.MsgDistributeRewards;
            };
            resetAccount(value: any): {
                typeUrl: string;
                value: _283.MsgResetAccount;
            };
            mint(value: any): {
                typeUrl: string;
                value: _283.MsgMint;
            };
            burn(value: any): {
                typeUrl: string;
                value: _283.MsgBurn;
            };
        };
        fromPartial: {
            distributeRewards(value: _283.MsgDistributeRewards): {
                typeUrl: string;
                value: _283.MsgDistributeRewards;
            };
            resetAccount(value: _283.MsgResetAccount): {
                typeUrl: string;
                value: _283.MsgResetAccount;
            };
            mint(value: _283.MsgMint): {
                typeUrl: string;
                value: _283.MsgMint;
            };
            burn(value: _283.MsgBurn): {
                typeUrl: string;
                value: _283.MsgBurn;
            };
        };
    };
    AminoConverter: {
        "/operations.MsgDistributeRewards": {
            aminoType: string;
            toAmino: ({ owner, rewards }: _283.MsgDistributeRewards) => {
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
            }) => _283.MsgDistributeRewards;
        };
        "/operations.MsgResetAccount": {
            aminoType: string;
            toAmino: ({ owner, address }: _283.MsgResetAccount) => {
                owner: string;
                address: string;
            };
            fromAmino: ({ owner, address }: {
                owner: string;
                address: string;
            }) => _283.MsgResetAccount;
        };
        "/operations.MsgMint": {
            aminoType: string;
            toAmino: ({ owner, coin }: _283.MsgMint) => {
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
            }) => _283.MsgMint;
        };
        "/operations.MsgBurn": {
            aminoType: string;
            toAmino: ({ owner, coin }: _283.MsgBurn) => {
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
            }) => _283.MsgBurn;
        };
    };
    Reward: {
        encode(message: _283.Reward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.Reward;
        fromJSON(object: any): _283.Reward;
        toJSON(message: _283.Reward): unknown;
        fromPartial(object: {
            receiver?: string;
            reward?: {
                dec?: string;
            };
        }): _283.Reward;
    };
    MsgDistributeRewards: {
        encode(message: _283.MsgDistributeRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgDistributeRewards;
        fromJSON(object: any): _283.MsgDistributeRewards;
        toJSON(message: _283.MsgDistributeRewards): unknown;
        fromPartial(object: {
            owner?: string;
            rewards?: {
                receiver?: string;
                reward?: {
                    dec?: string;
                };
            }[];
        }): _283.MsgDistributeRewards;
    };
    MsgDistributeRewardsResponse: {
        encode(_: _283.MsgDistributeRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgDistributeRewardsResponse;
        fromJSON(_: any): _283.MsgDistributeRewardsResponse;
        toJSON(_: _283.MsgDistributeRewardsResponse): unknown;
        fromPartial(_: {}): _283.MsgDistributeRewardsResponse;
    };
    MsgResetAccount: {
        encode(message: _283.MsgResetAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgResetAccount;
        fromJSON(object: any): _283.MsgResetAccount;
        toJSON(message: _283.MsgResetAccount): unknown;
        fromPartial(object: {
            owner?: string;
            address?: string;
        }): _283.MsgResetAccount;
    };
    MsgResetAccountResponse: {
        encode(_: _283.MsgResetAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgResetAccountResponse;
        fromJSON(_: any): _283.MsgResetAccountResponse;
        toJSON(_: _283.MsgResetAccountResponse): unknown;
        fromPartial(_: {}): _283.MsgResetAccountResponse;
    };
    MsgMint: {
        encode(message: _283.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgMint;
        fromJSON(object: any): _283.MsgMint;
        toJSON(message: _283.MsgMint): unknown;
        fromPartial(object: {
            owner?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
        }): _283.MsgMint;
    };
    MsgMintResponse: {
        encode(_: _283.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgMintResponse;
        fromJSON(_: any): _283.MsgMintResponse;
        toJSON(_: _283.MsgMintResponse): unknown;
        fromPartial(_: {}): _283.MsgMintResponse;
    };
    MsgBurn: {
        encode(message: _283.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgBurn;
        fromJSON(object: any): _283.MsgBurn;
        toJSON(message: _283.MsgBurn): unknown;
        fromPartial(object: {
            owner?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
        }): _283.MsgBurn;
    };
    MsgBurnResponse: {
        encode(_: _283.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgBurnResponse;
        fromJSON(_: any): _283.MsgBurnResponse;
        toJSON(_: _283.MsgBurnResponse): unknown;
        fromPartial(_: {}): _283.MsgBurnResponse;
    };
    MinGasPriceRequest: {
        encode(_: _282.MinGasPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MinGasPriceRequest;
        fromJSON(_: any): _282.MinGasPriceRequest;
        toJSON(_: _282.MinGasPriceRequest): unknown;
        fromPartial(_: {}): _282.MinGasPriceRequest;
    };
    MinGasPriceResponse: {
        encode(message: _282.MinGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MinGasPriceResponse;
        fromJSON(object: any): _282.MinGasPriceResponse;
        toJSON(message: _282.MinGasPriceResponse): unknown;
        fromPartial(object: {
            minGasPrice?: {
                denom?: string;
                amount?: string;
            };
        }): _282.MinGasPriceResponse;
    };
    Params: {
        encode(message: _281.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.Params;
        fromJSON(object: any): _281.Params;
        toJSON(message: _281.Params): unknown;
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
        }): _281.Params;
    };
    FixedGasParams: {
        encode(message: _281.FixedGasParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.FixedGasParams;
        fromJSON(object: any): _281.FixedGasParams;
        toJSON(message: _281.FixedGasParams): unknown;
        fromPartial(object: {
            resetAccount?: any;
            distributeRewards?: any;
        }): _281.FixedGasParams;
    };
    GenesisState: {
        encode(message: _280.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.GenesisState;
        fromJSON(object: any): _280.GenesisState;
        toJSON(message: _280.GenesisState): unknown;
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
        }): _280.GenesisState;
    };
};
