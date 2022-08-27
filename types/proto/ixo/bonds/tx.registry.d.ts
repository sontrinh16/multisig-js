import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBond, MsgEditBond, MsgSetNextAlpha, MsgUpdateBondState, MsgBuy, MsgSell, MsgSwap, MsgMakeOutcomePayment, MsgWithdrawShare, MsgWithdrawReserve } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createBond(value: MsgCreateBond): {
            typeUrl: string;
            value: Uint8Array;
        };
        editBond(value: MsgEditBond): {
            typeUrl: string;
            value: Uint8Array;
        };
        setNextAlpha(value: MsgSetNextAlpha): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBondState(value: MsgUpdateBondState): {
            typeUrl: string;
            value: Uint8Array;
        };
        buy(value: MsgBuy): {
            typeUrl: string;
            value: Uint8Array;
        };
        sell(value: MsgSell): {
            typeUrl: string;
            value: Uint8Array;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        makeOutcomePayment(value: MsgMakeOutcomePayment): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawShare(value: MsgWithdrawShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawReserve(value: MsgWithdrawReserve): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createBond(value: MsgCreateBond): {
            typeUrl: string;
            value: MsgCreateBond;
        };
        editBond(value: MsgEditBond): {
            typeUrl: string;
            value: MsgEditBond;
        };
        setNextAlpha(value: MsgSetNextAlpha): {
            typeUrl: string;
            value: MsgSetNextAlpha;
        };
        updateBondState(value: MsgUpdateBondState): {
            typeUrl: string;
            value: MsgUpdateBondState;
        };
        buy(value: MsgBuy): {
            typeUrl: string;
            value: MsgBuy;
        };
        sell(value: MsgSell): {
            typeUrl: string;
            value: MsgSell;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        makeOutcomePayment(value: MsgMakeOutcomePayment): {
            typeUrl: string;
            value: MsgMakeOutcomePayment;
        };
        withdrawShare(value: MsgWithdrawShare): {
            typeUrl: string;
            value: MsgWithdrawShare;
        };
        withdrawReserve(value: MsgWithdrawReserve): {
            typeUrl: string;
            value: MsgWithdrawReserve;
        };
    };
    toJSON: {
        createBond(value: MsgCreateBond): {
            typeUrl: string;
            value: unknown;
        };
        editBond(value: MsgEditBond): {
            typeUrl: string;
            value: unknown;
        };
        setNextAlpha(value: MsgSetNextAlpha): {
            typeUrl: string;
            value: unknown;
        };
        updateBondState(value: MsgUpdateBondState): {
            typeUrl: string;
            value: unknown;
        };
        buy(value: MsgBuy): {
            typeUrl: string;
            value: unknown;
        };
        sell(value: MsgSell): {
            typeUrl: string;
            value: unknown;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: unknown;
        };
        makeOutcomePayment(value: MsgMakeOutcomePayment): {
            typeUrl: string;
            value: unknown;
        };
        withdrawShare(value: MsgWithdrawShare): {
            typeUrl: string;
            value: unknown;
        };
        withdrawReserve(value: MsgWithdrawReserve): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createBond(value: any): {
            typeUrl: string;
            value: MsgCreateBond;
        };
        editBond(value: any): {
            typeUrl: string;
            value: MsgEditBond;
        };
        setNextAlpha(value: any): {
            typeUrl: string;
            value: MsgSetNextAlpha;
        };
        updateBondState(value: any): {
            typeUrl: string;
            value: MsgUpdateBondState;
        };
        buy(value: any): {
            typeUrl: string;
            value: MsgBuy;
        };
        sell(value: any): {
            typeUrl: string;
            value: MsgSell;
        };
        swap(value: any): {
            typeUrl: string;
            value: MsgSwap;
        };
        makeOutcomePayment(value: any): {
            typeUrl: string;
            value: MsgMakeOutcomePayment;
        };
        withdrawShare(value: any): {
            typeUrl: string;
            value: MsgWithdrawShare;
        };
        withdrawReserve(value: any): {
            typeUrl: string;
            value: MsgWithdrawReserve;
        };
    };
    fromPartial: {
        createBond(value: MsgCreateBond): {
            typeUrl: string;
            value: MsgCreateBond;
        };
        editBond(value: MsgEditBond): {
            typeUrl: string;
            value: MsgEditBond;
        };
        setNextAlpha(value: MsgSetNextAlpha): {
            typeUrl: string;
            value: MsgSetNextAlpha;
        };
        updateBondState(value: MsgUpdateBondState): {
            typeUrl: string;
            value: MsgUpdateBondState;
        };
        buy(value: MsgBuy): {
            typeUrl: string;
            value: MsgBuy;
        };
        sell(value: MsgSell): {
            typeUrl: string;
            value: MsgSell;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        makeOutcomePayment(value: MsgMakeOutcomePayment): {
            typeUrl: string;
            value: MsgMakeOutcomePayment;
        };
        withdrawShare(value: MsgWithdrawShare): {
            typeUrl: string;
            value: MsgWithdrawShare;
        };
        withdrawReserve(value: MsgWithdrawReserve): {
            typeUrl: string;
            value: MsgWithdrawReserve;
        };
    };
};
