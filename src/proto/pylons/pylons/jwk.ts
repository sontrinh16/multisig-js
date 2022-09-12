import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface JWK {
  /** algorithm name, e.g. RSA */
  kty: string;
  use: string;

  /** algorithm type, e.g. RSA256 */
  alg: string;

  /** app check decoding key id */
  kid: string;

  /** app check specific variable used to generate a public key to decode the token */
  n: string;
  e: string;
}

function createBaseJWK(): JWK {
  return {
    kty: "",
    use: "",
    alg: "",
    kid: "",
    n: "",
    e: ""
  };
}

export const JWK = {
  encode(message: JWK, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kty !== "") {
      writer.uint32(10).string(message.kty);
    }

    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }

    if (message.alg !== "") {
      writer.uint32(26).string(message.alg);
    }

    if (message.kid !== "") {
      writer.uint32(34).string(message.kid);
    }

    if (message.n !== "") {
      writer.uint32(42).string(message.n);
    }

    if (message.e !== "") {
      writer.uint32(50).string(message.e);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWK {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJWK();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kty = reader.string();
          break;

        case 2:
          message.use = reader.string();
          break;

        case 3:
          message.alg = reader.string();
          break;

        case 4:
          message.kid = reader.string();
          break;

        case 5:
          message.n = reader.string();
          break;

        case 6:
          message.e = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): JWK {
    return {
      kty: isSet(object.kty) ? String(object.kty) : "",
      use: isSet(object.use) ? String(object.use) : "",
      alg: isSet(object.alg) ? String(object.alg) : "",
      kid: isSet(object.kid) ? String(object.kid) : "",
      n: isSet(object.n) ? String(object.n) : "",
      e: isSet(object.e) ? String(object.e) : ""
    };
  },

  toJSON(message: JWK): unknown {
    const obj: any = {};
    message.kty !== undefined && (obj.kty = message.kty);
    message.use !== undefined && (obj.use = message.use);
    message.alg !== undefined && (obj.alg = message.alg);
    message.kid !== undefined && (obj.kid = message.kid);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    return obj;
  },

  fromPartial(object: DeepPartial<JWK>): JWK {
    const message = createBaseJWK();
    message.kty = object.kty ?? "";
    message.use = object.use ?? "";
    message.alg = object.alg ?? "";
    message.kid = object.kid ?? "";
    message.n = object.n ?? "";
    message.e = object.e ?? "";
    return message;
  }

};