import { AminoMsg } from "@cosmjs/amino";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect } from "./tx";
export interface AminoMsgSell extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgSell";
    value: {
        owner: string;
        orders: {
            batch_denom: string;
            quantity: string;
            ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface AminoMsgUpdateSellOrders extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
    value: {
        owner: string;
        updates: {
            sell_order_id: string;
            new_quantity: string;
            new_ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            new_expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface AminoMsgCancelSellOrder extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
    value: {
        seller: string;
        sell_order_id: string;
    };
}
export interface AminoMsgBuyDirect extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
    value: {
        buyer: string;
        orders: {
            batch_denom: string;
            quantity: string;
            ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export declare const AminoConverter: {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: ({ owner, orders }: MsgSell) => AminoMsgSell["value"];
        fromAmino: ({ owner, orders }: AminoMsgSell["value"]) => MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: ({ owner, updates }: MsgUpdateSellOrders) => AminoMsgUpdateSellOrders["value"];
        fromAmino: ({ owner, updates }: AminoMsgUpdateSellOrders["value"]) => MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: ({ seller, sellOrderId }: MsgCancelSellOrder) => AminoMsgCancelSellOrder["value"];
        fromAmino: ({ seller, sell_order_id }: AminoMsgCancelSellOrder["value"]) => MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: ({ buyer, orders }: MsgBuyDirect) => AminoMsgBuyDirect["value"];
        fromAmino: ({ buyer, orders }: AminoMsgBuyDirect["value"]) => MsgBuyDirect;
    };
};
