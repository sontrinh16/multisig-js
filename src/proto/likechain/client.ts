import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as likechainIscnTxRegistry from "./iscn/tx.registry";
import * as likechainLikenftV1TxRegistry from "./likenft/v1/tx.registry";
import * as likechainIscnTxAmino from "./iscn/tx.amino";
import * as likechainLikenftV1TxAmino from "./likenft/v1/tx.amino";
export const getSigningLikechainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...likechainIscnTxRegistry.registry, ...likechainLikenftV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...likechainIscnTxAmino.AminoConverter,
    ...likechainLikenftV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};