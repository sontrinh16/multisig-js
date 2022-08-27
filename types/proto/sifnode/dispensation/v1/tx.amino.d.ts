import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export interface AminoMsgCreateDistribution extends AminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateDistribution";
    value: {
        distributor: string;
        authorized_runner: string;
        distribution_type: number;
        output: string[];
    };
}
export interface AminoMsgCreateUserClaim extends AminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateUserClaim";
    value: {
        user_claim_address: string;
        user_claim_type: number;
    };
}
export interface AminoMsgRunDistribution extends AminoMsg {
    type: "/sifnode.dispensation.v1.MsgRunDistribution";
    value: {
        authorized_runner: string;
        distribution_name: string;
        distribution_type: number;
        distribution_count: string;
    };
}
export declare const AminoConverter: {
    "/sifnode.dispensation.v1.MsgCreateDistribution": {
        aminoType: string;
        toAmino: ({ distributor, authorizedRunner, distributionType, output }: MsgCreateDistribution) => AminoMsgCreateDistribution["value"];
        fromAmino: ({ distributor, authorized_runner, distribution_type, output }: AminoMsgCreateDistribution["value"]) => MsgCreateDistribution;
    };
    "/sifnode.dispensation.v1.MsgCreateUserClaim": {
        aminoType: string;
        toAmino: ({ userClaimAddress, userClaimType }: MsgCreateUserClaim) => AminoMsgCreateUserClaim["value"];
        fromAmino: ({ user_claim_address, user_claim_type }: AminoMsgCreateUserClaim["value"]) => MsgCreateUserClaim;
    };
    "/sifnode.dispensation.v1.MsgRunDistribution": {
        aminoType: string;
        toAmino: ({ authorizedRunner, distributionName, distributionType, distributionCount }: MsgRunDistribution) => AminoMsgRunDistribution["value"];
        fromAmino: ({ authorized_runner, distribution_name, distribution_type, distribution_count }: AminoMsgRunDistribution["value"]) => MsgRunDistribution;
    };
};
