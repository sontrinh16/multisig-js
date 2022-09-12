import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { UserMap } from "./accounts";
import { Trade } from "./trade";
import { Params } from "./params";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Item } from "./item";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the pylons module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    redeemInfoList: RedeemInfo[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    paymentInfoList: PaymentInfo[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    accountList: UserMap[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    tradeList: Trade[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    tradeCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    entityCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    params: Params;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    googleInAppPurchaseOrderList: GoogleInAppPurchaseOrder[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    googleIapOrderCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    executionList: Execution[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    executionCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    pendingExecutionList: Execution[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    pendingExecutionCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    itemList: Item[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    recipeList: Recipe[];
    /**
     * this line is used by starport scaffolding # genesis/proto/stateField
     * this line is used by starport scaffolding # ibc/genesis/proto
     */
    cookbookList: Cookbook[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
