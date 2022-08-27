import { ContentHash, DigestAlgorithm, RawMediaType, GraphCanonicalizationAlgorithm, GraphMerkleTree, ContentEntry, digestAlgorithmFromJSON, rawMediaTypeFromJSON, digestAlgorithmToJSON, rawMediaTypeToJSON, graphCanonicalizationAlgorithmFromJSON, graphMerkleTreeFromJSON, graphCanonicalizationAlgorithmToJSON, graphMerkleTreeToJSON } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;
}

/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponse {
  /** entry is the ContentEntry for the anchored data. */
  entry: ContentEntry;
}

/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash: ContentHash;
}

/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponse {
  /** entry is the ContentEntry for the anchored data. */
  entry: ContentEntry;
}

/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequest {
  /** attestor is the address of the attestor. */
  attestor: string;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponse {
  /** entries are the ContentEntries attested to by the attestor. */
  entries: ContentEntry[];

  /** pagination is the pagination PageResponse. */
  pagination: PageResponse;
}

/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash: ContentHash;
}

/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}

/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequest {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash: string;

  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;

  /** media_type represents the media type for raw data. */
  mediaType: RawMediaType;
}

/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}

/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequest {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash: string;

  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;

  /**
   * graph_canonicalization_algorithm represents the RDF graph
   * canonicalization algorithm.
   */
  canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;

  /** merkle_tree is the merkle tree type used for the graph hash, if any. */
  merkleTree: GraphMerkleTree;
}

/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}

/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequest {
  /** iri is the IRI for the content hash. */
  iri: string;
}

/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponse {
  /** content_hash is the ContentHash for the IRI. */
  contentHash: ContentHash;
}

/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponse {
  /** attestors are the addresses of the attestors. */
  attestors: string[];

  /** pagination is the pagination PageResponse. */
  pagination: PageResponse;
}

/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash: ContentHash;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponse {
  /** attestors are the addresses of the attestors. */
  attestors: string[];

  /** pagination is the pagination PageResponse. */
  pagination: PageResponse;
}

/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolverUrls: string[];

  /** pagination is the PageResponse to use for pagination. */
  pagination: PageResponse;
}

/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash: ContentHash;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolverUrls: string[];

  /** pagination is the PageResponse to use for pagination. */
  pagination: PageResponse;
}

/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequest {
  /** url is the resolver URL that has been registered. */
  url: string;
}

/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponse {
  /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
  id: Long;

  /** manager is the bech32 account address of the resolver manager. */
  manager: string;
}

function createBaseQueryByIRIRequest(): QueryByIRIRequest {
  return {
    iri: ""
  };
}

export const QueryByIRIRequest = {
  encode(message: QueryByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByIRIRequest>): QueryByIRIRequest {
    const message = createBaseQueryByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryByIRIResponse(): QueryByIRIResponse {
  return {
    entry: undefined
  };
}

export const QueryByIRIResponse = {
  encode(message: QueryByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByIRIResponse {
    return {
      entry: isSet(object.entry) ? ContentEntry.fromJSON(object.entry) : undefined
    };
  },

  toJSON(message: QueryByIRIResponse): unknown {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toJSON(message.entry) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByIRIResponse>): QueryByIRIResponse {
    const message = createBaseQueryByIRIResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  }

};

function createBaseQueryByHashRequest(): QueryByHashRequest {
  return {
    contentHash: undefined
  };
}

export const QueryByHashRequest = {
  encode(message: QueryByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: QueryByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByHashRequest>): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseQueryByHashResponse(): QueryByHashResponse {
  return {
    entry: undefined
  };
}

export const QueryByHashResponse = {
  encode(message: QueryByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByHashResponse {
    return {
      entry: isSet(object.entry) ? ContentEntry.fromJSON(object.entry) : undefined
    };
  },

  toJSON(message: QueryByHashResponse): unknown {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toJSON(message.entry) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByHashResponse>): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  }

};

function createBaseQueryByAttestorRequest(): QueryByAttestorRequest {
  return {
    attestor: "",
    pagination: undefined
  };
}

export const QueryByAttestorRequest = {
  encode(message: QueryByAttestorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestor !== "") {
      writer.uint32(10).string(message.attestor);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByAttestorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByAttestorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.attestor = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByAttestorRequest {
    return {
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryByAttestorRequest): unknown {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByAttestorRequest>): QueryByAttestorRequest {
    const message = createBaseQueryByAttestorRequest();
    message.attestor = object.attestor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryByAttestorResponse(): QueryByAttestorResponse {
  return {
    entries: [],
    pagination: undefined
  };
}

export const QueryByAttestorResponse = {
  encode(message: QueryByAttestorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByAttestorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByAttestorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContentEntry.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByAttestorResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContentEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryByAttestorResponse): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByAttestorResponse>): QueryByAttestorResponse {
    const message = createBaseQueryByAttestorResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIRIByHashRequest(): QueryIRIByHashRequest {
  return {
    contentHash: undefined
  };
}

export const QueryIRIByHashRequest = {
  encode(message: QueryIRIByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: QueryIRIByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByHashRequest>): QueryIRIByHashRequest {
    const message = createBaseQueryIRIByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseQueryIRIByHashResponse(): QueryIRIByHashResponse {
  return {
    iri: ""
  };
}

export const QueryIRIByHashResponse = {
  encode(message: QueryIRIByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryIRIByHashResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByHashResponse>): QueryIRIByHashResponse {
    const message = createBaseQueryIRIByHashResponse();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryIRIByRawHashRequest(): QueryIRIByRawHashRequest {
  return {
    hash: "",
    digestAlgorithm: 0,
    mediaType: 0
  };
}

export const QueryIRIByRawHashRequest = {
  encode(message: QueryIRIByRawHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.digestAlgorithm !== 0) {
      writer.uint32(16).int32(message.digestAlgorithm);
    }

    if (message.mediaType !== 0) {
      writer.uint32(24).int32(message.mediaType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByRawHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByRawHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.digestAlgorithm = (reader.int32() as any);
          break;

        case 3:
          message.mediaType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByRawHashRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      digestAlgorithm: isSet(object.digestAlgorithm) ? digestAlgorithmFromJSON(object.digestAlgorithm) : 0,
      mediaType: isSet(object.mediaType) ? rawMediaTypeFromJSON(object.mediaType) : 0
    };
  },

  toJSON(message: QueryIRIByRawHashRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.digestAlgorithm !== undefined && (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.mediaType !== undefined && (obj.mediaType = rawMediaTypeToJSON(message.mediaType));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByRawHashRequest>): QueryIRIByRawHashRequest {
    const message = createBaseQueryIRIByRawHashRequest();
    message.hash = object.hash ?? "";
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.mediaType = object.mediaType ?? 0;
    return message;
  }

};

function createBaseQueryIRIByRawHashResponse(): QueryIRIByRawHashResponse {
  return {
    iri: ""
  };
}

export const QueryIRIByRawHashResponse = {
  encode(message: QueryIRIByRawHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByRawHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByRawHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByRawHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryIRIByRawHashResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByRawHashResponse>): QueryIRIByRawHashResponse {
    const message = createBaseQueryIRIByRawHashResponse();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryIRIByGraphHashRequest(): QueryIRIByGraphHashRequest {
  return {
    hash: "",
    digestAlgorithm: 0,
    canonicalizationAlgorithm: 0,
    merkleTree: 0
  };
}

export const QueryIRIByGraphHashRequest = {
  encode(message: QueryIRIByGraphHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.digestAlgorithm !== 0) {
      writer.uint32(16).int32(message.digestAlgorithm);
    }

    if (message.canonicalizationAlgorithm !== 0) {
      writer.uint32(24).int32(message.canonicalizationAlgorithm);
    }

    if (message.merkleTree !== 0) {
      writer.uint32(32).int32(message.merkleTree);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByGraphHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByGraphHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.digestAlgorithm = (reader.int32() as any);
          break;

        case 3:
          message.canonicalizationAlgorithm = (reader.int32() as any);
          break;

        case 4:
          message.merkleTree = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByGraphHashRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      digestAlgorithm: isSet(object.digestAlgorithm) ? digestAlgorithmFromJSON(object.digestAlgorithm) : 0,
      canonicalizationAlgorithm: isSet(object.canonicalizationAlgorithm) ? graphCanonicalizationAlgorithmFromJSON(object.canonicalizationAlgorithm) : 0,
      merkleTree: isSet(object.merkleTree) ? graphMerkleTreeFromJSON(object.merkleTree) : 0
    };
  },

  toJSON(message: QueryIRIByGraphHashRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.digestAlgorithm !== undefined && (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.canonicalizationAlgorithm !== undefined && (obj.canonicalizationAlgorithm = graphCanonicalizationAlgorithmToJSON(message.canonicalizationAlgorithm));
    message.merkleTree !== undefined && (obj.merkleTree = graphMerkleTreeToJSON(message.merkleTree));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByGraphHashRequest>): QueryIRIByGraphHashRequest {
    const message = createBaseQueryIRIByGraphHashRequest();
    message.hash = object.hash ?? "";
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
    message.merkleTree = object.merkleTree ?? 0;
    return message;
  }

};

function createBaseQueryIRIByGraphHashResponse(): QueryIRIByGraphHashResponse {
  return {
    iri: ""
  };
}

export const QueryIRIByGraphHashResponse = {
  encode(message: QueryIRIByGraphHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByGraphHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByGraphHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIRIByGraphHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryIRIByGraphHashResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIRIByGraphHashResponse>): QueryIRIByGraphHashResponse {
    const message = createBaseQueryIRIByGraphHashResponse();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryHashByIRIRequest(): QueryHashByIRIRequest {
  return {
    iri: ""
  };
}

export const QueryHashByIRIRequest = {
  encode(message: QueryHashByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHashByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashByIRIRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHashByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryHashByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHashByIRIRequest>): QueryHashByIRIRequest {
    const message = createBaseQueryHashByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryHashByIRIResponse(): QueryHashByIRIResponse {
  return {
    contentHash: undefined
  };
}

export const QueryHashByIRIResponse = {
  encode(message: QueryHashByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHashByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashByIRIResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHashByIRIResponse {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: QueryHashByIRIResponse): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHashByIRIResponse>): QueryHashByIRIResponse {
    const message = createBaseQueryHashByIRIResponse();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseQueryAttestorsByIRIRequest(): QueryAttestorsByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}

export const QueryAttestorsByIRIRequest = {
  encode(message: QueryAttestorsByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByIRIRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAttestorsByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestorsByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAttestorsByIRIRequest>): QueryAttestorsByIRIRequest {
    const message = createBaseQueryAttestorsByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestorsByIRIResponse(): QueryAttestorsByIRIResponse {
  return {
    attestors: [],
    pagination: undefined
  };
}

export const QueryAttestorsByIRIResponse = {
  encode(message: QueryAttestorsByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestors) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByIRIResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.attestors.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAttestorsByIRIResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestorsByIRIResponse): unknown {
    const obj: any = {};

    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAttestorsByIRIResponse>): QueryAttestorsByIRIResponse {
    const message = createBaseQueryAttestorsByIRIResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestorsByHashRequest(): QueryAttestorsByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}

export const QueryAttestorsByHashRequest = {
  encode(message: QueryAttestorsByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAttestorsByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestorsByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAttestorsByHashRequest>): QueryAttestorsByHashRequest {
    const message = createBaseQueryAttestorsByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestorsByHashResponse(): QueryAttestorsByHashResponse {
  return {
    attestors: [],
    pagination: undefined
  };
}

export const QueryAttestorsByHashResponse = {
  encode(message: QueryAttestorsByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestors) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.attestors.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAttestorsByHashResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestorsByHashResponse): unknown {
    const obj: any = {};

    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAttestorsByHashResponse>): QueryAttestorsByHashResponse {
    const message = createBaseQueryAttestorsByHashResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByIRIRequest(): QueryResolversByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}

export const QueryResolversByIRIRequest = {
  encode(message: QueryResolversByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolversByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByIRIResponse(): QueryResolversByIRIResponse {
  return {
    resolverUrls: [],
    pagination: undefined
  };
}

export const QueryResolversByIRIResponse = {
  encode(message: QueryResolversByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resolverUrls) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resolverUrls.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolversByIRIResponse {
    return {
      resolverUrls: Array.isArray(object?.resolverUrls) ? object.resolverUrls.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByIRIResponse): unknown {
    const obj: any = {};

    if (message.resolverUrls) {
      obj.resolverUrls = message.resolverUrls.map(e => e);
    } else {
      obj.resolverUrls = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolverUrls = object.resolverUrls?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByHashRequest(): QueryResolversByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}

export const QueryResolversByHashRequest = {
  encode(message: QueryResolversByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolversByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByHashResponse(): QueryResolversByHashResponse {
  return {
    resolverUrls: [],
    pagination: undefined
  };
}

export const QueryResolversByHashResponse = {
  encode(message: QueryResolversByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resolverUrls) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resolverUrls.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolversByHashResponse {
    return {
      resolverUrls: Array.isArray(object?.resolverUrls) ? object.resolverUrls.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByHashResponse): unknown {
    const obj: any = {};

    if (message.resolverUrls) {
      obj.resolverUrls = message.resolverUrls.map(e => e);
    } else {
      obj.resolverUrls = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolverUrls = object.resolverUrls?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolverInfoRequest(): QueryResolverInfoRequest {
  return {
    url: ""
  };
}

export const QueryResolverInfoRequest = {
  encode(message: QueryResolverInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolverInfoRequest {
    return {
      url: isSet(object.url) ? String(object.url) : ""
    };
  },

  toJSON(message: QueryResolverInfoRequest): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolverInfoRequest>): QueryResolverInfoRequest {
    const message = createBaseQueryResolverInfoRequest();
    message.url = object.url ?? "";
    return message;
  }

};

function createBaseQueryResolverInfoResponse(): QueryResolverInfoResponse {
  return {
    id: Long.UZERO,
    manager: ""
  };
}

export const QueryResolverInfoResponse = {
  encode(message: QueryResolverInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.manager !== "") {
      writer.uint32(18).string(message.manager);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.manager = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolverInfoResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      manager: isSet(object.manager) ? String(object.manager) : ""
    };
  },

  toJSON(message: QueryResolverInfoResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.manager !== undefined && (obj.manager = message.manager);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResolverInfoResponse>): QueryResolverInfoResponse {
    const message = createBaseQueryResolverInfoResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.manager = object.manager ?? "";
    return message;
  }

};