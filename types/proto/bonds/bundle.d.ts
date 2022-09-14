import * as _438 from "../ixo/bonds/bonds";
import * as _439 from "../ixo/bonds/genesis";
import * as _440 from "../ixo/bonds/query";
import * as _441 from "../ixo/bonds/tx";
export declare const bonds: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createBond(value: _441.MsgCreateBond): {
                typeUrl: string;
                value: Uint8Array;
            };
            editBond(value: _441.MsgEditBond): {
                typeUrl: string;
                value: Uint8Array;
            };
            setNextAlpha(value: _441.MsgSetNextAlpha): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateBondState(value: _441.MsgUpdateBondState): {
                typeUrl: string;
                value: Uint8Array;
            };
            buy(value: _441.MsgBuy): {
                typeUrl: string;
                value: Uint8Array;
            };
            sell(value: _441.MsgSell): {
                typeUrl: string;
                value: Uint8Array;
            };
            swap(value: _441.MsgSwap): {
                typeUrl: string;
                value: Uint8Array;
            };
            makeOutcomePayment(value: _441.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawShare(value: _441.MsgWithdrawShare): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawReserve(value: _441.MsgWithdrawReserve): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createBond(value: _441.MsgCreateBond): {
                typeUrl: string;
                value: _441.MsgCreateBond;
            };
            editBond(value: _441.MsgEditBond): {
                typeUrl: string;
                value: _441.MsgEditBond;
            };
            setNextAlpha(value: _441.MsgSetNextAlpha): {
                typeUrl: string;
                value: _441.MsgSetNextAlpha;
            };
            updateBondState(value: _441.MsgUpdateBondState): {
                typeUrl: string;
                value: _441.MsgUpdateBondState;
            };
            buy(value: _441.MsgBuy): {
                typeUrl: string;
                value: _441.MsgBuy;
            };
            sell(value: _441.MsgSell): {
                typeUrl: string;
                value: _441.MsgSell;
            };
            swap(value: _441.MsgSwap): {
                typeUrl: string;
                value: _441.MsgSwap;
            };
            makeOutcomePayment(value: _441.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: _441.MsgMakeOutcomePayment;
            };
            withdrawShare(value: _441.MsgWithdrawShare): {
                typeUrl: string;
                value: _441.MsgWithdrawShare;
            };
            withdrawReserve(value: _441.MsgWithdrawReserve): {
                typeUrl: string;
                value: _441.MsgWithdrawReserve;
            };
        };
        toJSON: {
            createBond(value: _441.MsgCreateBond): {
                typeUrl: string;
                value: unknown;
            };
            editBond(value: _441.MsgEditBond): {
                typeUrl: string;
                value: unknown;
            };
            setNextAlpha(value: _441.MsgSetNextAlpha): {
                typeUrl: string;
                value: unknown;
            };
            updateBondState(value: _441.MsgUpdateBondState): {
                typeUrl: string;
                value: unknown;
            };
            buy(value: _441.MsgBuy): {
                typeUrl: string;
                value: unknown;
            };
            sell(value: _441.MsgSell): {
                typeUrl: string;
                value: unknown;
            };
            swap(value: _441.MsgSwap): {
                typeUrl: string;
                value: unknown;
            };
            makeOutcomePayment(value: _441.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: unknown;
            };
            withdrawShare(value: _441.MsgWithdrawShare): {
                typeUrl: string;
                value: unknown;
            };
            withdrawReserve(value: _441.MsgWithdrawReserve): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createBond(value: any): {
                typeUrl: string;
                value: _441.MsgCreateBond;
            };
            editBond(value: any): {
                typeUrl: string;
                value: _441.MsgEditBond;
            };
            setNextAlpha(value: any): {
                typeUrl: string;
                value: _441.MsgSetNextAlpha;
            };
            updateBondState(value: any): {
                typeUrl: string;
                value: _441.MsgUpdateBondState;
            };
            buy(value: any): {
                typeUrl: string;
                value: _441.MsgBuy;
            };
            sell(value: any): {
                typeUrl: string;
                value: _441.MsgSell;
            };
            swap(value: any): {
                typeUrl: string;
                value: _441.MsgSwap;
            };
            makeOutcomePayment(value: any): {
                typeUrl: string;
                value: _441.MsgMakeOutcomePayment;
            };
            withdrawShare(value: any): {
                typeUrl: string;
                value: _441.MsgWithdrawShare;
            };
            withdrawReserve(value: any): {
                typeUrl: string;
                value: _441.MsgWithdrawReserve;
            };
        };
        fromPartial: {
            createBond(value: _441.MsgCreateBond): {
                typeUrl: string;
                value: _441.MsgCreateBond;
            };
            editBond(value: _441.MsgEditBond): {
                typeUrl: string;
                value: _441.MsgEditBond;
            };
            setNextAlpha(value: _441.MsgSetNextAlpha): {
                typeUrl: string;
                value: _441.MsgSetNextAlpha;
            };
            updateBondState(value: _441.MsgUpdateBondState): {
                typeUrl: string;
                value: _441.MsgUpdateBondState;
            };
            buy(value: _441.MsgBuy): {
                typeUrl: string;
                value: _441.MsgBuy;
            };
            sell(value: _441.MsgSell): {
                typeUrl: string;
                value: _441.MsgSell;
            };
            swap(value: _441.MsgSwap): {
                typeUrl: string;
                value: _441.MsgSwap;
            };
            makeOutcomePayment(value: _441.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: _441.MsgMakeOutcomePayment;
            };
            withdrawShare(value: _441.MsgWithdrawShare): {
                typeUrl: string;
                value: _441.MsgWithdrawShare;
            };
            withdrawReserve(value: _441.MsgWithdrawReserve): {
                typeUrl: string;
                value: _441.MsgWithdrawReserve;
            };
        };
    };
    AminoConverter: {
        "/bonds.MsgCreateBond": {
            aminoType: string;
            toAmino: ({ bondDid, token, name, description, functionType, functionParameters, creatorDid, controllerDid, reserveTokens, txFeePercentage, exitFeePercentage, feeAddress, reserveWithdrawalAddress, maxSupply, orderQuantityLimits, sanityRate, sanityMarginPercentage, allowSells, allowReserveWithdrawals, alphaBond, batchBlocks, outcomePayment }: _441.MsgCreateBond) => {
                bond_did: string;
                token: string;
                name: string;
                description: string;
                function_type: string;
                function_parameters: {
                    param: string;
                    value: string;
                }[];
                creator_did: string;
                controller_did: string;
                reserve_tokens: string[];
                tx_fee_percentage: string;
                exit_fee_percentage: string;
                fee_address: string;
                reserve_withdrawal_address: string;
                max_supply: {
                    denom: string;
                    amount: string;
                };
                order_quantity_limits: {
                    denom: string;
                    amount: string;
                }[];
                sanity_rate: string;
                sanity_margin_percentage: string;
                allow_sells: boolean;
                allow_reserve_withdrawals: boolean;
                alpha_bond: boolean;
                batch_blocks: string;
                outcome_payment: string;
            };
            fromAmino: ({ bond_did, token, name, description, function_type, function_parameters, creator_did, controller_did, reserve_tokens, tx_fee_percentage, exit_fee_percentage, fee_address, reserve_withdrawal_address, max_supply, order_quantity_limits, sanity_rate, sanity_margin_percentage, allow_sells, allow_reserve_withdrawals, alpha_bond, batch_blocks, outcome_payment }: {
                bond_did: string;
                token: string;
                name: string;
                description: string;
                function_type: string;
                function_parameters: {
                    param: string;
                    value: string;
                }[];
                creator_did: string;
                controller_did: string;
                reserve_tokens: string[];
                tx_fee_percentage: string;
                exit_fee_percentage: string;
                fee_address: string;
                reserve_withdrawal_address: string;
                max_supply: {
                    denom: string;
                    amount: string;
                };
                order_quantity_limits: {
                    denom: string;
                    amount: string;
                }[];
                sanity_rate: string;
                sanity_margin_percentage: string;
                allow_sells: boolean;
                allow_reserve_withdrawals: boolean;
                alpha_bond: boolean;
                batch_blocks: string;
                outcome_payment: string;
            }) => _441.MsgCreateBond;
        };
        "/bonds.MsgEditBond": {
            aminoType: string;
            toAmino: ({ bondDid, name, description, orderQuantityLimits, sanityRate, sanityMarginPercentage, editorDid }: _441.MsgEditBond) => {
                bond_did: string;
                name: string;
                description: string;
                order_quantity_limits: string;
                sanity_rate: string;
                sanity_margin_percentage: string;
                editor_did: string;
            };
            fromAmino: ({ bond_did, name, description, order_quantity_limits, sanity_rate, sanity_margin_percentage, editor_did }: {
                bond_did: string;
                name: string;
                description: string;
                order_quantity_limits: string;
                sanity_rate: string;
                sanity_margin_percentage: string;
                editor_did: string;
            }) => _441.MsgEditBond;
        };
        "/bonds.MsgSetNextAlpha": {
            aminoType: string;
            toAmino: ({ bondDid, alpha, editorDid }: _441.MsgSetNextAlpha) => {
                bond_did: string;
                alpha: string;
                editor_did: string;
            };
            fromAmino: ({ bond_did, alpha, editor_did }: {
                bond_did: string;
                alpha: string;
                editor_did: string;
            }) => _441.MsgSetNextAlpha;
        };
        "/bonds.MsgUpdateBondState": {
            aminoType: string;
            toAmino: ({ bondDid, state, editorDid }: _441.MsgUpdateBondState) => {
                bond_did: string;
                state: string;
                editor_did: string;
            };
            fromAmino: ({ bond_did, state, editor_did }: {
                bond_did: string;
                state: string;
                editor_did: string;
            }) => _441.MsgUpdateBondState;
        };
        "/bonds.MsgBuy": {
            aminoType: string;
            toAmino: ({ buyerDid, amount, maxPrices, bondDid }: _441.MsgBuy) => {
                buyer_did: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                max_prices: {
                    denom: string;
                    amount: string;
                }[];
                bond_did: string;
            };
            fromAmino: ({ buyer_did, amount, max_prices, bond_did }: {
                buyer_did: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                max_prices: {
                    denom: string;
                    amount: string;
                }[];
                bond_did: string;
            }) => _441.MsgBuy;
        };
        "/bonds.MsgSell": {
            aminoType: string;
            toAmino: ({ sellerDid, amount, bondDid }: _441.MsgSell) => {
                seller_did: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                bond_did: string;
            };
            fromAmino: ({ seller_did, amount, bond_did }: {
                seller_did: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                bond_did: string;
            }) => _441.MsgSell;
        };
        "/bonds.MsgSwap": {
            aminoType: string;
            toAmino: ({ swapperDid, bondDid, from, toToken }: _441.MsgSwap) => {
                swapper_did: string;
                bond_did: string;
                from: {
                    denom: string;
                    amount: string;
                };
                to_token: string;
            };
            fromAmino: ({ swapper_did, bond_did, from, to_token }: {
                swapper_did: string;
                bond_did: string;
                from: {
                    denom: string;
                    amount: string;
                };
                to_token: string;
            }) => _441.MsgSwap;
        };
        "/bonds.MsgMakeOutcomePayment": {
            aminoType: string;
            toAmino: ({ senderDid, amount, bondDid }: _441.MsgMakeOutcomePayment) => {
                sender_did: string;
                amount: string;
                bond_did: string;
            };
            fromAmino: ({ sender_did, amount, bond_did }: {
                sender_did: string;
                amount: string;
                bond_did: string;
            }) => _441.MsgMakeOutcomePayment;
        };
        "/bonds.MsgWithdrawShare": {
            aminoType: string;
            toAmino: ({ recipientDid, bondDid }: _441.MsgWithdrawShare) => {
                recipient_did: string;
                bond_did: string;
            };
            fromAmino: ({ recipient_did, bond_did }: {
                recipient_did: string;
                bond_did: string;
            }) => _441.MsgWithdrawShare;
        };
        "/bonds.MsgWithdrawReserve": {
            aminoType: string;
            toAmino: ({ withdrawerDid, amount, bondDid }: _441.MsgWithdrawReserve) => {
                withdrawer_did: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
                bond_did: string;
            };
            fromAmino: ({ withdrawer_did, amount, bond_did }: {
                withdrawer_did: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
                bond_did: string;
            }) => _441.MsgWithdrawReserve;
        };
    };
    MsgCreateBond: {
        encode(message: _441.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgCreateBond;
        fromJSON(object: any): _441.MsgCreateBond;
        toJSON(message: _441.MsgCreateBond): unknown;
        fromPartial(object: {
            bondDid?: string;
            token?: string;
            name?: string;
            description?: string;
            functionType?: string;
            functionParameters?: {
                param?: string;
                value?: string;
            }[];
            creatorDid?: string;
            controllerDid?: string;
            reserveTokens?: string[];
            txFeePercentage?: string;
            exitFeePercentage?: string;
            feeAddress?: string;
            reserveWithdrawalAddress?: string;
            maxSupply?: {
                denom?: string;
                amount?: string;
            };
            orderQuantityLimits?: {
                denom?: string;
                amount?: string;
            }[];
            sanityRate?: string;
            sanityMarginPercentage?: string;
            allowSells?: boolean;
            allowReserveWithdrawals?: boolean;
            alphaBond?: boolean;
            batchBlocks?: string;
            outcomePayment?: string;
        }): _441.MsgCreateBond;
    };
    MsgCreateBondResponse: {
        encode(_: _441.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgCreateBondResponse;
        fromJSON(_: any): _441.MsgCreateBondResponse;
        toJSON(_: _441.MsgCreateBondResponse): unknown;
        fromPartial(_: {}): _441.MsgCreateBondResponse;
    };
    MsgEditBond: {
        encode(message: _441.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgEditBond;
        fromJSON(object: any): _441.MsgEditBond;
        toJSON(message: _441.MsgEditBond): unknown;
        fromPartial(object: {
            bondDid?: string;
            name?: string;
            description?: string;
            orderQuantityLimits?: string;
            sanityRate?: string;
            sanityMarginPercentage?: string;
            editorDid?: string;
        }): _441.MsgEditBond;
    };
    MsgEditBondResponse: {
        encode(_: _441.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgEditBondResponse;
        fromJSON(_: any): _441.MsgEditBondResponse;
        toJSON(_: _441.MsgEditBondResponse): unknown;
        fromPartial(_: {}): _441.MsgEditBondResponse;
    };
    MsgSetNextAlpha: {
        encode(message: _441.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSetNextAlpha;
        fromJSON(object: any): _441.MsgSetNextAlpha;
        toJSON(message: _441.MsgSetNextAlpha): unknown;
        fromPartial(object: {
            bondDid?: string;
            alpha?: string;
            editorDid?: string;
        }): _441.MsgSetNextAlpha;
    };
    MsgSetNextAlphaResponse: {
        encode(_: _441.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSetNextAlphaResponse;
        fromJSON(_: any): _441.MsgSetNextAlphaResponse;
        toJSON(_: _441.MsgSetNextAlphaResponse): unknown;
        fromPartial(_: {}): _441.MsgSetNextAlphaResponse;
    };
    MsgUpdateBondState: {
        encode(message: _441.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgUpdateBondState;
        fromJSON(object: any): _441.MsgUpdateBondState;
        toJSON(message: _441.MsgUpdateBondState): unknown;
        fromPartial(object: {
            bondDid?: string;
            state?: string;
            editorDid?: string;
        }): _441.MsgUpdateBondState;
    };
    MsgUpdateBondStateResponse: {
        encode(_: _441.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgUpdateBondStateResponse;
        fromJSON(_: any): _441.MsgUpdateBondStateResponse;
        toJSON(_: _441.MsgUpdateBondStateResponse): unknown;
        fromPartial(_: {}): _441.MsgUpdateBondStateResponse;
    };
    MsgBuy: {
        encode(message: _441.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgBuy;
        fromJSON(object: any): _441.MsgBuy;
        toJSON(message: _441.MsgBuy): unknown;
        fromPartial(object: {
            buyerDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
            maxPrices?: {
                denom?: string;
                amount?: string;
            }[];
            bondDid?: string;
        }): _441.MsgBuy;
    };
    MsgBuyResponse: {
        encode(_: _441.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgBuyResponse;
        fromJSON(_: any): _441.MsgBuyResponse;
        toJSON(_: _441.MsgBuyResponse): unknown;
        fromPartial(_: {}): _441.MsgBuyResponse;
    };
    MsgSell: {
        encode(message: _441.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSell;
        fromJSON(object: any): _441.MsgSell;
        toJSON(message: _441.MsgSell): unknown;
        fromPartial(object: {
            sellerDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
            bondDid?: string;
        }): _441.MsgSell;
    };
    MsgSellResponse: {
        encode(_: _441.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSellResponse;
        fromJSON(_: any): _441.MsgSellResponse;
        toJSON(_: _441.MsgSellResponse): unknown;
        fromPartial(_: {}): _441.MsgSellResponse;
    };
    MsgSwap: {
        encode(message: _441.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwap;
        fromJSON(object: any): _441.MsgSwap;
        toJSON(message: _441.MsgSwap): unknown;
        fromPartial(object: {
            swapperDid?: string;
            bondDid?: string;
            from?: {
                denom?: string;
                amount?: string;
            };
            toToken?: string;
        }): _441.MsgSwap;
    };
    MsgSwapResponse: {
        encode(_: _441.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwapResponse;
        fromJSON(_: any): _441.MsgSwapResponse;
        toJSON(_: _441.MsgSwapResponse): unknown;
        fromPartial(_: {}): _441.MsgSwapResponse;
    };
    MsgMakeOutcomePayment: {
        encode(message: _441.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgMakeOutcomePayment;
        fromJSON(object: any): _441.MsgMakeOutcomePayment;
        toJSON(message: _441.MsgMakeOutcomePayment): unknown;
        fromPartial(object: {
            senderDid?: string;
            amount?: string;
            bondDid?: string;
        }): _441.MsgMakeOutcomePayment;
    };
    MsgMakeOutcomePaymentResponse: {
        encode(_: _441.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgMakeOutcomePaymentResponse;
        fromJSON(_: any): _441.MsgMakeOutcomePaymentResponse;
        toJSON(_: _441.MsgMakeOutcomePaymentResponse): unknown;
        fromPartial(_: {}): _441.MsgMakeOutcomePaymentResponse;
    };
    MsgWithdrawShare: {
        encode(message: _441.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdrawShare;
        fromJSON(object: any): _441.MsgWithdrawShare;
        toJSON(message: _441.MsgWithdrawShare): unknown;
        fromPartial(object: {
            recipientDid?: string;
            bondDid?: string;
        }): _441.MsgWithdrawShare;
    };
    MsgWithdrawShareResponse: {
        encode(_: _441.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdrawShareResponse;
        fromJSON(_: any): _441.MsgWithdrawShareResponse;
        toJSON(_: _441.MsgWithdrawShareResponse): unknown;
        fromPartial(_: {}): _441.MsgWithdrawShareResponse;
    };
    MsgWithdrawReserve: {
        encode(message: _441.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdrawReserve;
        fromJSON(object: any): _441.MsgWithdrawReserve;
        toJSON(message: _441.MsgWithdrawReserve): unknown;
        fromPartial(object: {
            withdrawerDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
            bondDid?: string;
        }): _441.MsgWithdrawReserve;
    };
    MsgWithdrawReserveResponse: {
        encode(_: _441.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdrawReserveResponse;
        fromJSON(_: any): _441.MsgWithdrawReserveResponse;
        toJSON(_: _441.MsgWithdrawReserveResponse): unknown;
        fromPartial(_: {}): _441.MsgWithdrawReserveResponse;
    };
    QueryBondsRequest: {
        encode(_: _440.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondsRequest;
        fromJSON(_: any): _440.QueryBondsRequest;
        toJSON(_: _440.QueryBondsRequest): unknown;
        fromPartial(_: {}): _440.QueryBondsRequest;
    };
    QueryBondsResponse: {
        encode(message: _440.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondsResponse;
        fromJSON(object: any): _440.QueryBondsResponse;
        toJSON(message: _440.QueryBondsResponse): unknown;
        fromPartial(object: {
            bonds?: string[];
        }): _440.QueryBondsResponse;
    };
    QueryBondsDetailedRequest: {
        encode(_: _440.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondsDetailedRequest;
        fromJSON(_: any): _440.QueryBondsDetailedRequest;
        toJSON(_: _440.QueryBondsDetailedRequest): unknown;
        fromPartial(_: {}): _440.QueryBondsDetailedRequest;
    };
    QueryBondsDetailedResponse: {
        encode(message: _440.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondsDetailedResponse;
        fromJSON(object: any): _440.QueryBondsDetailedResponse;
        toJSON(message: _440.QueryBondsDetailedResponse): unknown;
        fromPartial(object: {
            bondsDetailed?: {
                bondDid?: string;
                spotPrice?: {
                    denom?: string;
                    amount?: string;
                }[];
                supply?: {
                    denom?: string;
                    amount?: string;
                };
                reserve?: {
                    denom?: string;
                    amount?: string;
                }[];
            }[];
        }): _440.QueryBondsDetailedResponse;
    };
    QueryBondRequest: {
        encode(message: _440.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondRequest;
        fromJSON(object: any): _440.QueryBondRequest;
        toJSON(message: _440.QueryBondRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryBondRequest;
    };
    QueryBondResponse: {
        encode(message: _440.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBondResponse;
        fromJSON(object: any): _440.QueryBondResponse;
        toJSON(message: _440.QueryBondResponse): unknown;
        fromPartial(object: {
            bond?: {
                token?: string;
                name?: string;
                description?: string;
                creatorDid?: string;
                controllerDid?: string;
                functionType?: string;
                functionParameters?: {
                    param?: string;
                    value?: string;
                }[];
                reserveTokens?: string[];
                txFeePercentage?: string;
                exitFeePercentage?: string;
                feeAddress?: string;
                reserveWithdrawalAddress?: string;
                maxSupply?: {
                    denom?: string;
                    amount?: string;
                };
                orderQuantityLimits?: {
                    denom?: string;
                    amount?: string;
                }[];
                sanityRate?: string;
                sanityMarginPercentage?: string;
                currentSupply?: {
                    denom?: string;
                    amount?: string;
                };
                currentReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                availableReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                currentOutcomePaymentReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                allowSells?: boolean;
                allowReserveWithdrawals?: boolean;
                alphaBond?: boolean;
                batchBlocks?: string;
                outcomePayment?: string;
                state?: string;
                bondDid?: string;
            };
        }): _440.QueryBondResponse;
    };
    QueryBatchRequest: {
        encode(message: _440.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBatchRequest;
        fromJSON(object: any): _440.QueryBatchRequest;
        toJSON(message: _440.QueryBatchRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryBatchRequest;
    };
    QueryBatchResponse: {
        encode(message: _440.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBatchResponse;
        fromJSON(object: any): _440.QueryBatchResponse;
        toJSON(message: _440.QueryBatchResponse): unknown;
        fromPartial(object: {
            batch?: {
                bondDid?: string;
                blocksRemaining?: string;
                nextPublicAlpha?: string;
                totalBuyAmount?: {
                    denom?: string;
                    amount?: string;
                };
                totalSellAmount?: {
                    denom?: string;
                    amount?: string;
                };
                buyPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                sellPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                buys?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    maxPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                sells?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                }[];
                swaps?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    toToken?: string;
                }[];
            };
        }): _440.QueryBatchResponse;
    };
    QueryLastBatchRequest: {
        encode(message: _440.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryLastBatchRequest;
        fromJSON(object: any): _440.QueryLastBatchRequest;
        toJSON(message: _440.QueryLastBatchRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryLastBatchRequest;
    };
    QueryLastBatchResponse: {
        encode(message: _440.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryLastBatchResponse;
        fromJSON(object: any): _440.QueryLastBatchResponse;
        toJSON(message: _440.QueryLastBatchResponse): unknown;
        fromPartial(object: {
            lastBatch?: {
                bondDid?: string;
                blocksRemaining?: string;
                nextPublicAlpha?: string;
                totalBuyAmount?: {
                    denom?: string;
                    amount?: string;
                };
                totalSellAmount?: {
                    denom?: string;
                    amount?: string;
                };
                buyPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                sellPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                buys?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    maxPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                sells?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                }[];
                swaps?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    toToken?: string;
                }[];
            };
        }): _440.QueryLastBatchResponse;
    };
    QueryCurrentPriceRequest: {
        encode(message: _440.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCurrentPriceRequest;
        fromJSON(object: any): _440.QueryCurrentPriceRequest;
        toJSON(message: _440.QueryCurrentPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryCurrentPriceRequest;
    };
    QueryCurrentPriceResponse: {
        encode(message: _440.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCurrentPriceResponse;
        fromJSON(object: any): _440.QueryCurrentPriceResponse;
        toJSON(message: _440.QueryCurrentPriceResponse): unknown;
        fromPartial(object: {
            currentPrice?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QueryCurrentPriceResponse;
    };
    QueryCurrentReserveRequest: {
        encode(message: _440.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCurrentReserveRequest;
        fromJSON(object: any): _440.QueryCurrentReserveRequest;
        toJSON(message: _440.QueryCurrentReserveRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryCurrentReserveRequest;
    };
    QueryCurrentReserveResponse: {
        encode(message: _440.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCurrentReserveResponse;
        fromJSON(object: any): _440.QueryCurrentReserveResponse;
        toJSON(message: _440.QueryCurrentReserveResponse): unknown;
        fromPartial(object: {
            currentReserve?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QueryCurrentReserveResponse;
    };
    QueryAvailableReserveRequest: {
        encode(message: _440.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryAvailableReserveRequest;
        fromJSON(object: any): _440.QueryAvailableReserveRequest;
        toJSON(message: _440.QueryAvailableReserveRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryAvailableReserveRequest;
    };
    QueryAvailableReserveResponse: {
        encode(message: _440.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryAvailableReserveResponse;
        fromJSON(object: any): _440.QueryAvailableReserveResponse;
        toJSON(message: _440.QueryAvailableReserveResponse): unknown;
        fromPartial(object: {
            availableReserve?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QueryAvailableReserveResponse;
    };
    QueryCustomPriceRequest: {
        encode(message: _440.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCustomPriceRequest;
        fromJSON(object: any): _440.QueryCustomPriceRequest;
        toJSON(message: _440.QueryCustomPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _440.QueryCustomPriceRequest;
    };
    QueryCustomPriceResponse: {
        encode(message: _440.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryCustomPriceResponse;
        fromJSON(object: any): _440.QueryCustomPriceResponse;
        toJSON(message: _440.QueryCustomPriceResponse): unknown;
        fromPartial(object: {
            price?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QueryCustomPriceResponse;
    };
    QueryBuyPriceRequest: {
        encode(message: _440.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBuyPriceRequest;
        fromJSON(object: any): _440.QueryBuyPriceRequest;
        toJSON(message: _440.QueryBuyPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _440.QueryBuyPriceRequest;
    };
    QueryBuyPriceResponse: {
        encode(message: _440.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryBuyPriceResponse;
        fromJSON(object: any): _440.QueryBuyPriceResponse;
        toJSON(message: _440.QueryBuyPriceResponse): unknown;
        fromPartial(object: {
            adjustedSupply?: {
                denom?: string;
                amount?: string;
            };
            prices?: {
                denom?: string;
                amount?: string;
            }[];
            txFees?: {
                denom?: string;
                amount?: string;
            }[];
            totalPrices?: {
                denom?: string;
                amount?: string;
            }[];
            totalFees?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QueryBuyPriceResponse;
    };
    QuerySellReturnRequest: {
        encode(message: _440.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QuerySellReturnRequest;
        fromJSON(object: any): _440.QuerySellReturnRequest;
        toJSON(message: _440.QuerySellReturnRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _440.QuerySellReturnRequest;
    };
    QuerySellReturnResponse: {
        encode(message: _440.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QuerySellReturnResponse;
        fromJSON(object: any): _440.QuerySellReturnResponse;
        toJSON(message: _440.QuerySellReturnResponse): unknown;
        fromPartial(object: {
            adjustedSupply?: {
                denom?: string;
                amount?: string;
            };
            returns?: {
                denom?: string;
                amount?: string;
            }[];
            txFees?: {
                denom?: string;
                amount?: string;
            }[];
            exitFees?: {
                denom?: string;
                amount?: string;
            }[];
            totalReturns?: {
                denom?: string;
                amount?: string;
            }[];
            totalFees?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QuerySellReturnResponse;
    };
    QuerySwapReturnRequest: {
        encode(message: _440.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QuerySwapReturnRequest;
        fromJSON(object: any): _440.QuerySwapReturnRequest;
        toJSON(message: _440.QuerySwapReturnRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            fromTokenWithAmount?: string;
            toToken?: string;
        }): _440.QuerySwapReturnRequest;
    };
    QuerySwapReturnResponse: {
        encode(message: _440.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QuerySwapReturnResponse;
        fromJSON(object: any): _440.QuerySwapReturnResponse;
        toJSON(message: _440.QuerySwapReturnResponse): unknown;
        fromPartial(object: {
            totalReturns?: {
                denom?: string;
                amount?: string;
            }[];
            totalFees?: {
                denom?: string;
                amount?: string;
            }[];
        }): _440.QuerySwapReturnResponse;
    };
    QueryAlphaMaximumsRequest: {
        encode(message: _440.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryAlphaMaximumsRequest;
        fromJSON(object: any): _440.QueryAlphaMaximumsRequest;
        toJSON(message: _440.QueryAlphaMaximumsRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _440.QueryAlphaMaximumsRequest;
    };
    QueryAlphaMaximumsResponse: {
        encode(message: _440.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryAlphaMaximumsResponse;
        fromJSON(object: any): _440.QueryAlphaMaximumsResponse;
        toJSON(message: _440.QueryAlphaMaximumsResponse): unknown;
        fromPartial(object: {
            maxSystemAlphaIncrease?: string;
            maxSystemAlpha?: string;
        }): _440.QueryAlphaMaximumsResponse;
    };
    QueryParamsRequest: {
        encode(_: _440.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryParamsRequest;
        fromJSON(_: any): _440.QueryParamsRequest;
        toJSON(_: _440.QueryParamsRequest): unknown;
        fromPartial(_: {}): _440.QueryParamsRequest;
    };
    QueryParamsResponse: {
        encode(message: _440.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.QueryParamsResponse;
        fromJSON(object: any): _440.QueryParamsResponse;
        toJSON(message: _440.QueryParamsResponse): unknown;
        fromPartial(object: {
            params?: {
                reservedBondTokens?: string[];
            };
        }): _440.QueryParamsResponse;
    };
    GenesisState: {
        encode(message: _439.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.GenesisState;
        fromJSON(object: any): _439.GenesisState;
        toJSON(message: _439.GenesisState): unknown;
        fromPartial(object: {
            bonds?: {
                token?: string;
                name?: string;
                description?: string;
                creatorDid?: string;
                controllerDid?: string;
                functionType?: string;
                functionParameters?: {
                    param?: string;
                    value?: string;
                }[];
                reserveTokens?: string[];
                txFeePercentage?: string;
                exitFeePercentage?: string;
                feeAddress?: string;
                reserveWithdrawalAddress?: string;
                maxSupply?: {
                    denom?: string;
                    amount?: string;
                };
                orderQuantityLimits?: {
                    denom?: string;
                    amount?: string;
                }[];
                sanityRate?: string;
                sanityMarginPercentage?: string;
                currentSupply?: {
                    denom?: string;
                    amount?: string;
                };
                currentReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                availableReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                currentOutcomePaymentReserve?: {
                    denom?: string;
                    amount?: string;
                }[];
                allowSells?: boolean;
                allowReserveWithdrawals?: boolean;
                alphaBond?: boolean;
                batchBlocks?: string;
                outcomePayment?: string;
                state?: string;
                bondDid?: string;
            }[];
            batches?: {
                bondDid?: string;
                blocksRemaining?: string;
                nextPublicAlpha?: string;
                totalBuyAmount?: {
                    denom?: string;
                    amount?: string;
                };
                totalSellAmount?: {
                    denom?: string;
                    amount?: string;
                };
                buyPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                sellPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
                buys?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    maxPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                sells?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                }[];
                swaps?: {
                    baseOrder?: {
                        accountDid?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        cancelled?: boolean;
                        cancelReason?: string;
                    };
                    toToken?: string;
                }[];
            }[];
            params?: {
                reservedBondTokens?: string[];
            };
        }): _439.GenesisState;
    };
    FunctionParam: {
        encode(message: _438.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.FunctionParam;
        fromJSON(object: any): _438.FunctionParam;
        toJSON(message: _438.FunctionParam): unknown;
        fromPartial(object: {
            param?: string;
            value?: string;
        }): _438.FunctionParam;
    };
    BondDetails: {
        encode(message: _438.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.BondDetails;
        fromJSON(object: any): _438.BondDetails;
        toJSON(message: _438.BondDetails): unknown;
        fromPartial(object: {
            bondDid?: string;
            spotPrice?: {
                denom?: string;
                amount?: string;
            }[];
            supply?: {
                denom?: string;
                amount?: string;
            };
            reserve?: {
                denom?: string;
                amount?: string;
            }[];
        }): _438.BondDetails;
    };
    Bond: {
        encode(message: _438.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.Bond;
        fromJSON(object: any): _438.Bond;
        toJSON(message: _438.Bond): unknown;
        fromPartial(object: {
            token?: string;
            name?: string;
            description?: string;
            creatorDid?: string;
            controllerDid?: string;
            functionType?: string;
            functionParameters?: {
                param?: string;
                value?: string;
            }[];
            reserveTokens?: string[];
            txFeePercentage?: string;
            exitFeePercentage?: string;
            feeAddress?: string;
            reserveWithdrawalAddress?: string;
            maxSupply?: {
                denom?: string;
                amount?: string;
            };
            orderQuantityLimits?: {
                denom?: string;
                amount?: string;
            }[];
            sanityRate?: string;
            sanityMarginPercentage?: string;
            currentSupply?: {
                denom?: string;
                amount?: string;
            };
            currentReserve?: {
                denom?: string;
                amount?: string;
            }[];
            availableReserve?: {
                denom?: string;
                amount?: string;
            }[];
            currentOutcomePaymentReserve?: {
                denom?: string;
                amount?: string;
            }[];
            allowSells?: boolean;
            allowReserveWithdrawals?: boolean;
            alphaBond?: boolean;
            batchBlocks?: string;
            outcomePayment?: string;
            state?: string;
            bondDid?: string;
        }): _438.Bond;
    };
    BaseOrder: {
        encode(message: _438.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.BaseOrder;
        fromJSON(object: any): _438.BaseOrder;
        toJSON(message: _438.BaseOrder): unknown;
        fromPartial(object: {
            accountDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
            cancelled?: boolean;
            cancelReason?: string;
        }): _438.BaseOrder;
    };
    BuyOrder: {
        encode(message: _438.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.BuyOrder;
        fromJSON(object: any): _438.BuyOrder;
        toJSON(message: _438.BuyOrder): unknown;
        fromPartial(object: {
            baseOrder?: {
                accountDid?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
                cancelled?: boolean;
                cancelReason?: string;
            };
            maxPrices?: {
                denom?: string;
                amount?: string;
            }[];
        }): _438.BuyOrder;
    };
    SellOrder: {
        encode(message: _438.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.SellOrder;
        fromJSON(object: any): _438.SellOrder;
        toJSON(message: _438.SellOrder): unknown;
        fromPartial(object: {
            baseOrder?: {
                accountDid?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
                cancelled?: boolean;
                cancelReason?: string;
            };
        }): _438.SellOrder;
    };
    SwapOrder: {
        encode(message: _438.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.SwapOrder;
        fromJSON(object: any): _438.SwapOrder;
        toJSON(message: _438.SwapOrder): unknown;
        fromPartial(object: {
            baseOrder?: {
                accountDid?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
                cancelled?: boolean;
                cancelReason?: string;
            };
            toToken?: string;
        }): _438.SwapOrder;
    };
    Batch: {
        encode(message: _438.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.Batch;
        fromJSON(object: any): _438.Batch;
        toJSON(message: _438.Batch): unknown;
        fromPartial(object: {
            bondDid?: string;
            blocksRemaining?: string;
            nextPublicAlpha?: string;
            totalBuyAmount?: {
                denom?: string;
                amount?: string;
            };
            totalSellAmount?: {
                denom?: string;
                amount?: string;
            };
            buyPrices?: {
                denom?: string;
                amount?: string;
            }[];
            sellPrices?: {
                denom?: string;
                amount?: string;
            }[];
            buys?: {
                baseOrder?: {
                    accountDid?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    cancelled?: boolean;
                    cancelReason?: string;
                };
                maxPrices?: {
                    denom?: string;
                    amount?: string;
                }[];
            }[];
            sells?: {
                baseOrder?: {
                    accountDid?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    cancelled?: boolean;
                    cancelReason?: string;
                };
            }[];
            swaps?: {
                baseOrder?: {
                    accountDid?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    cancelled?: boolean;
                    cancelReason?: string;
                };
                toToken?: string;
            }[];
        }): _438.Batch;
    };
    Params: {
        encode(message: _438.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.Params;
        fromJSON(object: any): _438.Params;
        toJSON(message: _438.Params): unknown;
        fromPartial(object: {
            reservedBondTokens?: string[];
        }): _438.Params;
    };
};
