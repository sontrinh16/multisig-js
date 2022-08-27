import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as passage3dClaimV1beta1TxRegistry from "./claim/v1beta1/tx.registry";
import * as passage3dClaimV1beta1TxAmino from "./claim/v1beta1/tx.amino";
export const getSigningPassage3dClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...passage3dClaimV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...passage3dClaimV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};