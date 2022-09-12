import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AppleInAppPurchaseOrder {
    quantity: string;
    productId: string;
    purchaseId: string;
    purchaseDate: string;
    creator: string;
}
export declare const AppleInAppPurchaseOrder: {
    encode(message: AppleInAppPurchaseOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppleInAppPurchaseOrder;
    fromJSON(object: any): AppleInAppPurchaseOrder;
    toJSON(message: AppleInAppPurchaseOrder): unknown;
    fromPartial(object: DeepPartial<AppleInAppPurchaseOrder>): AppleInAppPurchaseOrder;
};
