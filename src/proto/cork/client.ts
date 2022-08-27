import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as sommelierCorkV1TxRegistry from "../sommelier/cork/v1/tx.registry";
import * as sommelierCorkV1TxAmino from "../sommelier/cork/v1/tx.amino";
export const getSigningCorkClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...sommelierCorkV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...sommelierCorkV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};