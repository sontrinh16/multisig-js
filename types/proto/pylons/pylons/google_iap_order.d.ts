import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GoogleInAppPurchaseOrder {
    creator: string;
    productId: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export declare const GoogleInAppPurchaseOrder: {
    encode(message: GoogleInAppPurchaseOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchaseOrder;
    fromJSON(object: any): GoogleInAppPurchaseOrder;
    toJSON(message: GoogleInAppPurchaseOrder): unknown;
    fromPartial(object: DeepPartial<GoogleInAppPurchaseOrder>): GoogleInAppPurchaseOrder;
};
