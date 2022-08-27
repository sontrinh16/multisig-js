import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as tgradeConfioPoeV1beta1TxRegistry from "../tgrade/confio/poe/v1beta1/tx.registry";
import * as tgradeConfioPoeV1beta1TxAmino from "../tgrade/confio/poe/v1beta1/tx.amino";
export const getSigningConfioClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...tgradeConfioPoeV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...tgradeConfioPoeV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};