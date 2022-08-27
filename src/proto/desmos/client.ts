import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as desmosPostsV2MsgsRegistry from "./posts/v2/msgs.registry";
import * as desmosProfilesV3MsgServerRegistry from "./profiles/v3/msg_server.registry";
import * as desmosReactionsV1MsgsRegistry from "./reactions/v1/msgs.registry";
import * as desmosRelationshipsV1MsgsRegistry from "./relationships/v1/msgs.registry";
import * as desmosReportsV1MsgsRegistry from "./reports/v1/msgs.registry";
import * as desmosSubspacesV3MsgsRegistry from "./subspaces/v3/msgs.registry";
import * as desmosPostsV2MsgsAmino from "./posts/v2/msgs.amino";
import * as desmosProfilesV3MsgServerAmino from "./profiles/v3/msg_server.amino";
import * as desmosReactionsV1MsgsAmino from "./reactions/v1/msgs.amino";
import * as desmosRelationshipsV1MsgsAmino from "./relationships/v1/msgs.amino";
import * as desmosReportsV1MsgsAmino from "./reports/v1/msgs.amino";
import * as desmosSubspacesV3MsgsAmino from "./subspaces/v3/msgs.amino";
export const getSigningDesmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...desmosPostsV2MsgsRegistry.registry, ...desmosProfilesV3MsgServerRegistry.registry, ...desmosReactionsV1MsgsRegistry.registry, ...desmosRelationshipsV1MsgsRegistry.registry, ...desmosReportsV1MsgsRegistry.registry, ...desmosSubspacesV3MsgsRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...desmosPostsV2MsgsAmino.AminoConverter,
    ...desmosProfilesV3MsgServerAmino.AminoConverter,
    ...desmosReactionsV1MsgsAmino.AminoConverter,
    ...desmosRelationshipsV1MsgsAmino.AminoConverter,
    ...desmosReportsV1MsgsAmino.AminoConverter,
    ...desmosSubspacesV3MsgsAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};