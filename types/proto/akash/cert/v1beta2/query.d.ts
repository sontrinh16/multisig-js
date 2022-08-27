import { CertificateFilter, Certificate } from "./cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
    certificate: Certificate;
    serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
    filter: CertificateFilter;
    pagination: PageRequest;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
    certificates: CertificateResponse[];
    pagination: PageResponse;
}
export declare const CertificateResponse: {
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse;
    fromJSON(object: any): CertificateResponse;
    toJSON(message: CertificateResponse): unknown;
    fromPartial(object: DeepPartial<CertificateResponse>): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesRequest;
    fromJSON(object: any): QueryCertificatesRequest;
    toJSON(message: QueryCertificatesRequest): unknown;
    fromPartial(object: DeepPartial<QueryCertificatesRequest>): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesResponse;
    fromJSON(object: any): QueryCertificatesResponse;
    toJSON(message: QueryCertificatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCertificatesResponse>): QueryCertificatesResponse;
};
