import { OfflineSigner, GeneratedType } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
export declare const getSigningPaymentsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
