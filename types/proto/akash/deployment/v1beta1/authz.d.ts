import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
    /**
     * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
     * the purpose of deployment.
     */
    spendLimit: Coin;
}
export declare const DepositDeploymentAuthorization: {
    encode(message: DepositDeploymentAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositDeploymentAuthorization;
    fromJSON(object: any): DepositDeploymentAuthorization;
    toJSON(message: DepositDeploymentAuthorization): unknown;
    fromPartial(object: DeepPartial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization;
};
