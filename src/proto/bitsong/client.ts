import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as bitsongFantokenV1beta1TxRegistry from "./fantoken/v1beta1/tx.registry";
import * as bitsongMerkledropV1beta1TxRegistry from "./merkledrop/v1beta1/tx.registry";
import * as bitsongFantokenV1beta1TxAmino from "./fantoken/v1beta1/tx.amino";
import * as bitsongMerkledropV1beta1TxAmino from "./merkledrop/v1beta1/tx.amino";
export const getSigningBitsongClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...bitsongFantokenV1beta1TxRegistry.registry, ...bitsongMerkledropV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...bitsongFantokenV1beta1TxAmino.AminoConverter,
    ...bitsongMerkledropV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};