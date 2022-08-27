import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as echelonErc20V1TxRegistry from "./erc20/v1/tx.registry";
import * as echelonVestingV1TxRegistry from "./vesting/v1/tx.registry";
import * as echelonVrfV1TxRegistry from "./vrf/v1/tx.registry";
import * as echelonErc20V1TxAmino from "./erc20/v1/tx.amino";
import * as echelonVestingV1TxAmino from "./vesting/v1/tx.amino";
import * as echelonVrfV1TxAmino from "./vrf/v1/tx.amino";
export const getSigningEchelonClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...echelonErc20V1TxRegistry.registry, ...echelonVestingV1TxRegistry.registry, ...echelonVrfV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...echelonErc20V1TxAmino.AminoConverter,
    ...echelonVestingV1TxAmino.AminoConverter,
    ...echelonVrfV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};