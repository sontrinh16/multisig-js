import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as axelarPermissionV1beta1ServiceRegistry from "./permission/v1beta1/service.registry";
import * as axelarPermissionV1beta1ServiceAmino from "./permission/v1beta1/service.amino";
export const getSigningAxelarClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...axelarPermissionV1beta1ServiceRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...axelarPermissionV1beta1ServiceAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};