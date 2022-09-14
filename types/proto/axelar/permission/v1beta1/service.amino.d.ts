import { AminoMsg } from "@cosmjs/amino";
import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export interface AminoRegisterControllerRequest extends AminoMsg {
    type: "/axelar.permission.v1beta1.RegisterControllerRequest";
    value: {
        sender: Uint8Array;
        controller: Uint8Array;
    };
}
export interface AminoDeregisterControllerRequest extends AminoMsg {
    type: "/axelar.permission.v1beta1.DeregisterControllerRequest";
    value: {
        sender: Uint8Array;
        controller: Uint8Array;
    };
}
export interface AminoUpdateGovernanceKeyRequest extends AminoMsg {
    type: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    value: {
        sender: Uint8Array;
        governance_key: {
            threshold: number;
            public_keys: {
                type_url: string;
                value: Uint8Array;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: RegisterControllerRequest) => AminoRegisterControllerRequest["value"];
        fromAmino: ({ sender, controller }: AminoRegisterControllerRequest["value"]) => RegisterControllerRequest;
    };
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: DeregisterControllerRequest) => AminoDeregisterControllerRequest["value"];
        fromAmino: ({ sender, controller }: AminoDeregisterControllerRequest["value"]) => DeregisterControllerRequest;
    };
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: string;
        toAmino: ({ sender, governanceKey }: UpdateGovernanceKeyRequest) => AminoUpdateGovernanceKeyRequest["value"];
        fromAmino: ({ sender, governance_key }: AminoUpdateGovernanceKeyRequest["value"]) => UpdateGovernanceKeyRequest;
    };
};
