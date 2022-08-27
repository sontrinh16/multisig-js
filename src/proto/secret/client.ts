import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as secretIntertxV1beta1TxRegistry from "./intertx/v1beta1/tx.registry";
import * as secretIntertxV1beta1TxAmino from "./intertx/v1beta1/tx.amino";
export const getSigningSecretClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...secretIntertxV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...secretIntertxV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};