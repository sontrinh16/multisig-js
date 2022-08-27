import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as sifnodeAdminV1TxRegistry from "./admin/v1/tx.registry";
import * as sifnodeClpV1TxRegistry from "./clp/v1/tx.registry";
import * as sifnodeDispensationV1TxRegistry from "./dispensation/v1/tx.registry";
import * as sifnodeEthbridgeV1TxRegistry from "./ethbridge/v1/tx.registry";
import * as sifnodeMarginV1TxRegistry from "./margin/v1/tx.registry";
import * as sifnodeTokenregistryV1TxRegistry from "./tokenregistry/v1/tx.registry";
import * as sifnodeAdminV1TxAmino from "./admin/v1/tx.amino";
import * as sifnodeClpV1TxAmino from "./clp/v1/tx.amino";
import * as sifnodeDispensationV1TxAmino from "./dispensation/v1/tx.amino";
import * as sifnodeEthbridgeV1TxAmino from "./ethbridge/v1/tx.amino";
import * as sifnodeMarginV1TxAmino from "./margin/v1/tx.amino";
import * as sifnodeTokenregistryV1TxAmino from "./tokenregistry/v1/tx.amino";
export const getSigningSifnodeClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...sifnodeAdminV1TxRegistry.registry, ...sifnodeClpV1TxRegistry.registry, ...sifnodeDispensationV1TxRegistry.registry, ...sifnodeEthbridgeV1TxRegistry.registry, ...sifnodeMarginV1TxRegistry.registry, ...sifnodeTokenregistryV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...sifnodeAdminV1TxAmino.AminoConverter,
    ...sifnodeClpV1TxAmino.AminoConverter,
    ...sifnodeDispensationV1TxAmino.AminoConverter,
    ...sifnodeEthbridgeV1TxAmino.AminoConverter,
    ...sifnodeMarginV1TxAmino.AminoConverter,
    ...sifnodeTokenregistryV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};