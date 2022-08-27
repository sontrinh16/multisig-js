import * as _370 from "../ixo/bonds/bonds";
import * as _371 from "../ixo/bonds/genesis";
import * as _372 from "../ixo/bonds/query";
import * as _373 from "../ixo/bonds/tx";
export declare const bonds: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createBond(value: _373.MsgCreateBond): {
                typeUrl: string;
                value: Uint8Array;
            };
            editBond(value: _373.MsgEditBond): {
                typeUrl: string;
                value: Uint8Array;
            };
            setNextAlpha(value: _373.MsgSetNextAlpha): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateBondState(value: _373.MsgUpdateBondState): {
                typeUrl: string;
                value: Uint8Array;
            };
            buy(value: _373.MsgBuy): {
                typeUrl: string;
                value: Uint8Array;
            };
            sell(value: _373.MsgSell): {
                typeUrl: string;
                value: Uint8Array;
            };
            swap(value: _373.MsgSwap): {
                typeUrl: string;
                value: Uint8Array;
            };
            makeOutcomePayment(value: _373.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawShare(value: _373.MsgWithdrawShare): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawReserve(value: _373.MsgWithdrawReserve): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createBond(value: _373.MsgCreateBond): {
                typeUrl: string;
                value: _373.MsgCreateBond;
            };
            editBond(value: _373.MsgEditBond): {
                typeUrl: string;
                value: _373.MsgEditBond;
            };
            setNextAlpha(value: _373.MsgSetNextAlpha): {
                typeUrl: string;
                value: _373.MsgSetNextAlpha;
            };
            updateBondState(value: _373.MsgUpdateBondState): {
                typeUrl: string;
                value: _373.MsgUpdateBondState;
            };
            buy(value: _373.MsgBuy): {
                typeUrl: string;
                value: _373.MsgBuy;
            };
            sell(value: _373.MsgSell): {
                typeUrl: string;
                value: _373.MsgSell;
            };
            swap(value: _373.MsgSwap): {
                typeUrl: string;
                value: _373.MsgSwap;
            };
            makeOutcomePayment(value: _373.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: _373.MsgMakeOutcomePayment;
            };
            withdrawShare(value: _373.MsgWithdrawShare): {
                typeUrl: string;
                value: _373.MsgWithdrawShare;
            };
            withdrawReserve(value: _373.MsgWithdrawReserve): {
                typeUrl: string;
                value: _373.MsgWithdrawReserve;
            };
        };
        toJSON: {
            createBond(value: _373.MsgCreateBond): {
                typeUrl: string;
                value: unknown;
            };
            editBond(value: _373.MsgEditBond): {
                typeUrl: string;
                value: unknown;
            };
            setNextAlpha(value: _373.MsgSetNextAlpha): {
                typeUrl: string;
                value: unknown;
            };
            updateBondState(value: _373.MsgUpdateBondState): {
                typeUrl: string;
                value: unknown;
            };
            buy(value: _373.MsgBuy): {
                typeUrl: string;
                value: unknown;
            };
            sell(value: _373.MsgSell): {
                typeUrl: string;
                value: unknown;
            };
            swap(value: _373.MsgSwap): {
                typeUrl: string;
                value: unknown;
            };
            makeOutcomePayment(value: _373.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: unknown;
            };
            withdrawShare(value: _373.MsgWithdrawShare): {
                typeUrl: string;
                value: unknown;
            };
            withdrawReserve(value: _373.MsgWithdrawReserve): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createBond(value: any): {
                typeUrl: string;
                value: _373.MsgCreateBond;
            };
            editBond(value: any): {
                typeUrl: string;
                value: _373.MsgEditBond;
            };
            setNextAlpha(value: any): {
                typeUrl: string;
                value: _373.MsgSetNextAlpha;
            };
            updateBondState(value: any): {
                typeUrl: string;
                value: _373.MsgUpdateBondState;
            };
            buy(value: any): {
                typeUrl: string;
                value: _373.MsgBuy;
            };
            sell(value: any): {
                typeUrl: string;
                value: _373.MsgSell;
            };
            swap(value: any): {
                typeUrl: string;
                value: _373.MsgSwap;
            };
            makeOutcomePayment(value: any): {
                typeUrl: string;
                value: _373.MsgMakeOutcomePayment;
            };
            withdrawShare(value: any): {
                typeUrl: string;
                value: _373.MsgWithdrawShare;
            };
            withdrawReserve(value: any): {
                typeUrl: string;
                value: _373.MsgWithdrawReserve;
            };
        };
        fromPartial: {
            createBond(value: _373.MsgCreateBond): {
                typeUrl: string;
                value: _373.MsgCreateBond;
            };
            editBond(value: _373.MsgEditBond): {
                typeUrl: string;
                value: _373.MsgEditBond;
            };
            setNextAlpha(value: _373.MsgSetNextAlpha): {
                typeUrl: string;
                value: _373.MsgSetNextAlpha;
            };
            updateBondState(value: _373.MsgUpdateBondState): {
                typeUrl: string;
                value: _373.MsgUpdateBondState;
            };
            buy(value: _373.MsgBuy): {
                typeUrl: string;
                value: _373.MsgBuy;
            };
            sell(value: _373.MsgSell): {
                typeUrl: string;
                value: _373.MsgSell;
            };
            swap(value: _373.MsgSwap): {
                typeUrl: string;
                value: _373.MsgSwap;
            };
            makeOutcomePayment(value: _373.MsgMakeOutcomePayment): {
                typeUrl: string;
                value: _373.MsgMakeOutcomePayment;
            };
            withdrawShare(value: _373.MsgWithdrawShare): {
                typeUrl: string;
                value: _373.MsgWithdrawShare;
            };
            withdrawReserve(value: _373.MsgWithdrawReserve): {
                typeUrl: string;
                value: _373.MsgWithdrawReserve;
            };
        };
    };
    AminoConverter: {
        "/bonds.MsgCreateBond": {
            aminoType: string;
            toAmino: ({ bondDid, token, name, description, functionType, functionParameters, creatorDid, controllerDid, reserveTokens, txFeePercentage, exitFeePercentage, feeAddress, reserveWithdrawalAddress, maxSupply, orderQuantityLimits, sanityRate, sanityMarginPercentage, allowSells, allowReserveWithdrawals, alphaBond, batchBlocks, outcomePayment }: _373.MsgCreateBond) => {
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
            }) => _373.MsgCreateBond;
        };
        "/bonds.MsgEditBond": {
            aminoType: string;
            toAmino: ({ bondDid, name, description, orderQuantityLimits, sanityRate, sanityMarginPercentage, editorDid }: _373.MsgEditBond) => {
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
            }) => _373.MsgEditBond;
        };
        "/bonds.MsgSetNextAlpha": {
            aminoType: string;
            toAmino: ({ bondDid, alpha, editorDid }: _373.MsgSetNextAlpha) => {
                bond_did: string;
                alpha: string;
                editor_did: string;
            };
            fromAmino: ({ bond_did, alpha, editor_did }: {
                bond_did: string;
                alpha: string;
                editor_did: string;
            }) => _373.MsgSetNextAlpha;
        };
        "/bonds.MsgUpdateBondState": {
            aminoType: string;
            toAmino: ({ bondDid, state, editorDid }: _373.MsgUpdateBondState) => {
                bond_did: string;
                state: string;
                editor_did: string;
            };
            fromAmino: ({ bond_did, state, editor_did }: {
                bond_did: string;
                state: string;
                editor_did: string;
            }) => _373.MsgUpdateBondState;
        };
        "/bonds.MsgBuy": {
            aminoType: string;
            toAmino: ({ buyerDid, amount, maxPrices, bondDid }: _373.MsgBuy) => {
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
            }) => _373.MsgBuy;
        };
        "/bonds.MsgSell": {
            aminoType: string;
            toAmino: ({ sellerDid, amount, bondDid }: _373.MsgSell) => {
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
            }) => _373.MsgSell;
        };
        "/bonds.MsgSwap": {
            aminoType: string;
            toAmino: ({ swapperDid, bondDid, from, toToken }: _373.MsgSwap) => {
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
            }) => _373.MsgSwap;
        };
        "/bonds.MsgMakeOutcomePayment": {
            aminoType: string;
            toAmino: ({ senderDid, amount, bondDid }: _373.MsgMakeOutcomePayment) => {
                sender_did: string;
                amount: string;
                bond_did: string;
            };
            fromAmino: ({ sender_did, amount, bond_did }: {
                sender_did: string;
                amount: string;
                bond_did: string;
            }) => _373.MsgMakeOutcomePayment;
        };
        "/bonds.MsgWithdrawShare": {
            aminoType: string;
            toAmino: ({ recipientDid, bondDid }: _373.MsgWithdrawShare) => {
                recipient_did: string;
                bond_did: string;
            };
            fromAmino: ({ recipient_did, bond_did }: {
                recipient_did: string;
                bond_did: string;
            }) => _373.MsgWithdrawShare;
        };
        "/bonds.MsgWithdrawReserve": {
            aminoType: string;
            toAmino: ({ withdrawerDid, amount, bondDid }: _373.MsgWithdrawReserve) => {
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
            }) => _373.MsgWithdrawReserve;
        };
    };
    MsgCreateBond: {
        encode(message: _373.MsgCreateBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgCreateBond;
        fromJSON(object: any): _373.MsgCreateBond;
        toJSON(message: _373.MsgCreateBond): unknown;
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
        }): _373.MsgCreateBond;
    };
    MsgCreateBondResponse: {
        encode(_: _373.MsgCreateBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgCreateBondResponse;
        fromJSON(_: any): _373.MsgCreateBondResponse;
        toJSON(_: _373.MsgCreateBondResponse): unknown;
        fromPartial(_: {}): _373.MsgCreateBondResponse;
    };
    MsgEditBond: {
        encode(message: _373.MsgEditBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgEditBond;
        fromJSON(object: any): _373.MsgEditBond;
        toJSON(message: _373.MsgEditBond): unknown;
        fromPartial(object: {
            bondDid?: string;
            name?: string;
            description?: string;
            orderQuantityLimits?: string;
            sanityRate?: string;
            sanityMarginPercentage?: string;
            editorDid?: string;
        }): _373.MsgEditBond;
    };
    MsgEditBondResponse: {
        encode(_: _373.MsgEditBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgEditBondResponse;
        fromJSON(_: any): _373.MsgEditBondResponse;
        toJSON(_: _373.MsgEditBondResponse): unknown;
        fromPartial(_: {}): _373.MsgEditBondResponse;
    };
    MsgSetNextAlpha: {
        encode(message: _373.MsgSetNextAlpha, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSetNextAlpha;
        fromJSON(object: any): _373.MsgSetNextAlpha;
        toJSON(message: _373.MsgSetNextAlpha): unknown;
        fromPartial(object: {
            bondDid?: string;
            alpha?: string;
            editorDid?: string;
        }): _373.MsgSetNextAlpha;
    };
    MsgSetNextAlphaResponse: {
        encode(_: _373.MsgSetNextAlphaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSetNextAlphaResponse;
        fromJSON(_: any): _373.MsgSetNextAlphaResponse;
        toJSON(_: _373.MsgSetNextAlphaResponse): unknown;
        fromPartial(_: {}): _373.MsgSetNextAlphaResponse;
    };
    MsgUpdateBondState: {
        encode(message: _373.MsgUpdateBondState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgUpdateBondState;
        fromJSON(object: any): _373.MsgUpdateBondState;
        toJSON(message: _373.MsgUpdateBondState): unknown;
        fromPartial(object: {
            bondDid?: string;
            state?: string;
            editorDid?: string;
        }): _373.MsgUpdateBondState;
    };
    MsgUpdateBondStateResponse: {
        encode(_: _373.MsgUpdateBondStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgUpdateBondStateResponse;
        fromJSON(_: any): _373.MsgUpdateBondStateResponse;
        toJSON(_: _373.MsgUpdateBondStateResponse): unknown;
        fromPartial(_: {}): _373.MsgUpdateBondStateResponse;
    };
    MsgBuy: {
        encode(message: _373.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgBuy;
        fromJSON(object: any): _373.MsgBuy;
        toJSON(message: _373.MsgBuy): unknown;
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
        }): _373.MsgBuy;
    };
    MsgBuyResponse: {
        encode(_: _373.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgBuyResponse;
        fromJSON(_: any): _373.MsgBuyResponse;
        toJSON(_: _373.MsgBuyResponse): unknown;
        fromPartial(_: {}): _373.MsgBuyResponse;
    };
    MsgSell: {
        encode(message: _373.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSell;
        fromJSON(object: any): _373.MsgSell;
        toJSON(message: _373.MsgSell): unknown;
        fromPartial(object: {
            sellerDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
            bondDid?: string;
        }): _373.MsgSell;
    };
    MsgSellResponse: {
        encode(_: _373.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSellResponse;
        fromJSON(_: any): _373.MsgSellResponse;
        toJSON(_: _373.MsgSellResponse): unknown;
        fromPartial(_: {}): _373.MsgSellResponse;
    };
    MsgSwap: {
        encode(message: _373.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSwap;
        fromJSON(object: any): _373.MsgSwap;
        toJSON(message: _373.MsgSwap): unknown;
        fromPartial(object: {
            swapperDid?: string;
            bondDid?: string;
            from?: {
                denom?: string;
                amount?: string;
            };
            toToken?: string;
        }): _373.MsgSwap;
    };
    MsgSwapResponse: {
        encode(_: _373.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgSwapResponse;
        fromJSON(_: any): _373.MsgSwapResponse;
        toJSON(_: _373.MsgSwapResponse): unknown;
        fromPartial(_: {}): _373.MsgSwapResponse;
    };
    MsgMakeOutcomePayment: {
        encode(message: _373.MsgMakeOutcomePayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgMakeOutcomePayment;
        fromJSON(object: any): _373.MsgMakeOutcomePayment;
        toJSON(message: _373.MsgMakeOutcomePayment): unknown;
        fromPartial(object: {
            senderDid?: string;
            amount?: string;
            bondDid?: string;
        }): _373.MsgMakeOutcomePayment;
    };
    MsgMakeOutcomePaymentResponse: {
        encode(_: _373.MsgMakeOutcomePaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgMakeOutcomePaymentResponse;
        fromJSON(_: any): _373.MsgMakeOutcomePaymentResponse;
        toJSON(_: _373.MsgMakeOutcomePaymentResponse): unknown;
        fromPartial(_: {}): _373.MsgMakeOutcomePaymentResponse;
    };
    MsgWithdrawShare: {
        encode(message: _373.MsgWithdrawShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgWithdrawShare;
        fromJSON(object: any): _373.MsgWithdrawShare;
        toJSON(message: _373.MsgWithdrawShare): unknown;
        fromPartial(object: {
            recipientDid?: string;
            bondDid?: string;
        }): _373.MsgWithdrawShare;
    };
    MsgWithdrawShareResponse: {
        encode(_: _373.MsgWithdrawShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgWithdrawShareResponse;
        fromJSON(_: any): _373.MsgWithdrawShareResponse;
        toJSON(_: _373.MsgWithdrawShareResponse): unknown;
        fromPartial(_: {}): _373.MsgWithdrawShareResponse;
    };
    MsgWithdrawReserve: {
        encode(message: _373.MsgWithdrawReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgWithdrawReserve;
        fromJSON(object: any): _373.MsgWithdrawReserve;
        toJSON(message: _373.MsgWithdrawReserve): unknown;
        fromPartial(object: {
            withdrawerDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
            bondDid?: string;
        }): _373.MsgWithdrawReserve;
    };
    MsgWithdrawReserveResponse: {
        encode(_: _373.MsgWithdrawReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.MsgWithdrawReserveResponse;
        fromJSON(_: any): _373.MsgWithdrawReserveResponse;
        toJSON(_: _373.MsgWithdrawReserveResponse): unknown;
        fromPartial(_: {}): _373.MsgWithdrawReserveResponse;
    };
    QueryBondsRequest: {
        encode(_: _372.QueryBondsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondsRequest;
        fromJSON(_: any): _372.QueryBondsRequest;
        toJSON(_: _372.QueryBondsRequest): unknown;
        fromPartial(_: {}): _372.QueryBondsRequest;
    };
    QueryBondsResponse: {
        encode(message: _372.QueryBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondsResponse;
        fromJSON(object: any): _372.QueryBondsResponse;
        toJSON(message: _372.QueryBondsResponse): unknown;
        fromPartial(object: {
            bonds?: string[];
        }): _372.QueryBondsResponse;
    };
    QueryBondsDetailedRequest: {
        encode(_: _372.QueryBondsDetailedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondsDetailedRequest;
        fromJSON(_: any): _372.QueryBondsDetailedRequest;
        toJSON(_: _372.QueryBondsDetailedRequest): unknown;
        fromPartial(_: {}): _372.QueryBondsDetailedRequest;
    };
    QueryBondsDetailedResponse: {
        encode(message: _372.QueryBondsDetailedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondsDetailedResponse;
        fromJSON(object: any): _372.QueryBondsDetailedResponse;
        toJSON(message: _372.QueryBondsDetailedResponse): unknown;
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
        }): _372.QueryBondsDetailedResponse;
    };
    QueryBondRequest: {
        encode(message: _372.QueryBondRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondRequest;
        fromJSON(object: any): _372.QueryBondRequest;
        toJSON(message: _372.QueryBondRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryBondRequest;
    };
    QueryBondResponse: {
        encode(message: _372.QueryBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBondResponse;
        fromJSON(object: any): _372.QueryBondResponse;
        toJSON(message: _372.QueryBondResponse): unknown;
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
        }): _372.QueryBondResponse;
    };
    QueryBatchRequest: {
        encode(message: _372.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBatchRequest;
        fromJSON(object: any): _372.QueryBatchRequest;
        toJSON(message: _372.QueryBatchRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryBatchRequest;
    };
    QueryBatchResponse: {
        encode(message: _372.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBatchResponse;
        fromJSON(object: any): _372.QueryBatchResponse;
        toJSON(message: _372.QueryBatchResponse): unknown;
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
        }): _372.QueryBatchResponse;
    };
    QueryLastBatchRequest: {
        encode(message: _372.QueryLastBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryLastBatchRequest;
        fromJSON(object: any): _372.QueryLastBatchRequest;
        toJSON(message: _372.QueryLastBatchRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryLastBatchRequest;
    };
    QueryLastBatchResponse: {
        encode(message: _372.QueryLastBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryLastBatchResponse;
        fromJSON(object: any): _372.QueryLastBatchResponse;
        toJSON(message: _372.QueryLastBatchResponse): unknown;
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
        }): _372.QueryLastBatchResponse;
    };
    QueryCurrentPriceRequest: {
        encode(message: _372.QueryCurrentPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCurrentPriceRequest;
        fromJSON(object: any): _372.QueryCurrentPriceRequest;
        toJSON(message: _372.QueryCurrentPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryCurrentPriceRequest;
    };
    QueryCurrentPriceResponse: {
        encode(message: _372.QueryCurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCurrentPriceResponse;
        fromJSON(object: any): _372.QueryCurrentPriceResponse;
        toJSON(message: _372.QueryCurrentPriceResponse): unknown;
        fromPartial(object: {
            currentPrice?: {
                denom?: string;
                amount?: string;
            }[];
        }): _372.QueryCurrentPriceResponse;
    };
    QueryCurrentReserveRequest: {
        encode(message: _372.QueryCurrentReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCurrentReserveRequest;
        fromJSON(object: any): _372.QueryCurrentReserveRequest;
        toJSON(message: _372.QueryCurrentReserveRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryCurrentReserveRequest;
    };
    QueryCurrentReserveResponse: {
        encode(message: _372.QueryCurrentReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCurrentReserveResponse;
        fromJSON(object: any): _372.QueryCurrentReserveResponse;
        toJSON(message: _372.QueryCurrentReserveResponse): unknown;
        fromPartial(object: {
            currentReserve?: {
                denom?: string;
                amount?: string;
            }[];
        }): _372.QueryCurrentReserveResponse;
    };
    QueryAvailableReserveRequest: {
        encode(message: _372.QueryAvailableReserveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryAvailableReserveRequest;
        fromJSON(object: any): _372.QueryAvailableReserveRequest;
        toJSON(message: _372.QueryAvailableReserveRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryAvailableReserveRequest;
    };
    QueryAvailableReserveResponse: {
        encode(message: _372.QueryAvailableReserveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryAvailableReserveResponse;
        fromJSON(object: any): _372.QueryAvailableReserveResponse;
        toJSON(message: _372.QueryAvailableReserveResponse): unknown;
        fromPartial(object: {
            availableReserve?: {
                denom?: string;
                amount?: string;
            }[];
        }): _372.QueryAvailableReserveResponse;
    };
    QueryCustomPriceRequest: {
        encode(message: _372.QueryCustomPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCustomPriceRequest;
        fromJSON(object: any): _372.QueryCustomPriceRequest;
        toJSON(message: _372.QueryCustomPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _372.QueryCustomPriceRequest;
    };
    QueryCustomPriceResponse: {
        encode(message: _372.QueryCustomPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryCustomPriceResponse;
        fromJSON(object: any): _372.QueryCustomPriceResponse;
        toJSON(message: _372.QueryCustomPriceResponse): unknown;
        fromPartial(object: {
            price?: {
                denom?: string;
                amount?: string;
            }[];
        }): _372.QueryCustomPriceResponse;
    };
    QueryBuyPriceRequest: {
        encode(message: _372.QueryBuyPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBuyPriceRequest;
        fromJSON(object: any): _372.QueryBuyPriceRequest;
        toJSON(message: _372.QueryBuyPriceRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _372.QueryBuyPriceRequest;
    };
    QueryBuyPriceResponse: {
        encode(message: _372.QueryBuyPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryBuyPriceResponse;
        fromJSON(object: any): _372.QueryBuyPriceResponse;
        toJSON(message: _372.QueryBuyPriceResponse): unknown;
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
        }): _372.QueryBuyPriceResponse;
    };
    QuerySellReturnRequest: {
        encode(message: _372.QuerySellReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QuerySellReturnRequest;
        fromJSON(object: any): _372.QuerySellReturnRequest;
        toJSON(message: _372.QuerySellReturnRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            bondAmount?: string;
        }): _372.QuerySellReturnRequest;
    };
    QuerySellReturnResponse: {
        encode(message: _372.QuerySellReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QuerySellReturnResponse;
        fromJSON(object: any): _372.QuerySellReturnResponse;
        toJSON(message: _372.QuerySellReturnResponse): unknown;
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
        }): _372.QuerySellReturnResponse;
    };
    QuerySwapReturnRequest: {
        encode(message: _372.QuerySwapReturnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QuerySwapReturnRequest;
        fromJSON(object: any): _372.QuerySwapReturnRequest;
        toJSON(message: _372.QuerySwapReturnRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
            fromTokenWithAmount?: string;
            toToken?: string;
        }): _372.QuerySwapReturnRequest;
    };
    QuerySwapReturnResponse: {
        encode(message: _372.QuerySwapReturnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QuerySwapReturnResponse;
        fromJSON(object: any): _372.QuerySwapReturnResponse;
        toJSON(message: _372.QuerySwapReturnResponse): unknown;
        fromPartial(object: {
            totalReturns?: {
                denom?: string;
                amount?: string;
            }[];
            totalFees?: {
                denom?: string;
                amount?: string;
            }[];
        }): _372.QuerySwapReturnResponse;
    };
    QueryAlphaMaximumsRequest: {
        encode(message: _372.QueryAlphaMaximumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryAlphaMaximumsRequest;
        fromJSON(object: any): _372.QueryAlphaMaximumsRequest;
        toJSON(message: _372.QueryAlphaMaximumsRequest): unknown;
        fromPartial(object: {
            bondDid?: string;
        }): _372.QueryAlphaMaximumsRequest;
    };
    QueryAlphaMaximumsResponse: {
        encode(message: _372.QueryAlphaMaximumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryAlphaMaximumsResponse;
        fromJSON(object: any): _372.QueryAlphaMaximumsResponse;
        toJSON(message: _372.QueryAlphaMaximumsResponse): unknown;
        fromPartial(object: {
            maxSystemAlphaIncrease?: string;
            maxSystemAlpha?: string;
        }): _372.QueryAlphaMaximumsResponse;
    };
    QueryParamsRequest: {
        encode(_: _372.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryParamsRequest;
        fromJSON(_: any): _372.QueryParamsRequest;
        toJSON(_: _372.QueryParamsRequest): unknown;
        fromPartial(_: {}): _372.QueryParamsRequest;
    };
    QueryParamsResponse: {
        encode(message: _372.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.QueryParamsResponse;
        fromJSON(object: any): _372.QueryParamsResponse;
        toJSON(message: _372.QueryParamsResponse): unknown;
        fromPartial(object: {
            params?: {
                reservedBondTokens?: string[];
            };
        }): _372.QueryParamsResponse;
    };
    GenesisState: {
        encode(message: _371.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.GenesisState;
        fromJSON(object: any): _371.GenesisState;
        toJSON(message: _371.GenesisState): unknown;
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
        }): _371.GenesisState;
    };
    FunctionParam: {
        encode(message: _370.FunctionParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.FunctionParam;
        fromJSON(object: any): _370.FunctionParam;
        toJSON(message: _370.FunctionParam): unknown;
        fromPartial(object: {
            param?: string;
            value?: string;
        }): _370.FunctionParam;
    };
    BondDetails: {
        encode(message: _370.BondDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.BondDetails;
        fromJSON(object: any): _370.BondDetails;
        toJSON(message: _370.BondDetails): unknown;
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
        }): _370.BondDetails;
    };
    Bond: {
        encode(message: _370.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Bond;
        fromJSON(object: any): _370.Bond;
        toJSON(message: _370.Bond): unknown;
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
        }): _370.Bond;
    };
    BaseOrder: {
        encode(message: _370.BaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.BaseOrder;
        fromJSON(object: any): _370.BaseOrder;
        toJSON(message: _370.BaseOrder): unknown;
        fromPartial(object: {
            accountDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
            cancelled?: boolean;
            cancelReason?: string;
        }): _370.BaseOrder;
    };
    BuyOrder: {
        encode(message: _370.BuyOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.BuyOrder;
        fromJSON(object: any): _370.BuyOrder;
        toJSON(message: _370.BuyOrder): unknown;
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
        }): _370.BuyOrder;
    };
    SellOrder: {
        encode(message: _370.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.SellOrder;
        fromJSON(object: any): _370.SellOrder;
        toJSON(message: _370.SellOrder): unknown;
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
        }): _370.SellOrder;
    };
    SwapOrder: {
        encode(message: _370.SwapOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.SwapOrder;
        fromJSON(object: any): _370.SwapOrder;
        toJSON(message: _370.SwapOrder): unknown;
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
        }): _370.SwapOrder;
    };
    Batch: {
        encode(message: _370.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Batch;
        fromJSON(object: any): _370.Batch;
        toJSON(message: _370.Batch): unknown;
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
        }): _370.Batch;
    };
    Params: {
        encode(message: _370.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Params;
        fromJSON(object: any): _370.Params;
        toJSON(message: _370.Params): unknown;
        fromPartial(object: {
            reservedBondTokens?: string[];
        }): _370.Params;
    };
};
