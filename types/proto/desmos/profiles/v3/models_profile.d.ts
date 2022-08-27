import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Profile represents a generic first on Desmos, containing the information of a
 * single user
 */
export interface Profile {
    /** Account represents the base Cosmos account associated with this profile */
    account: Any;
    /** DTag represents the unique tag of this profile */
    dtag: string;
    /** Nickname contains the custom human readable name of the profile */
    nickname: string;
    /** Bio contains the biography of the profile */
    bio: string;
    /** Pictures contains the data about the pictures associated with he profile */
    pictures: Pictures;
    /** CreationTime represents the time in which the profile has been created */
    creationDate: Date;
}
/** Pictures contains the data of a user profile's related pictures */
export interface Pictures {
    /** Profile contains the URL to the profile picture */
    profile: string;
    /** Cover contains the URL to the cover picture */
    cover: string;
}
export declare const Profile: {
    encode(message: Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Profile;
    fromJSON(object: any): Profile;
    toJSON(message: Profile): unknown;
    fromPartial(object: DeepPartial<Profile>): Profile;
};
export declare const Pictures: {
    encode(message: Pictures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pictures;
    fromJSON(object: any): Pictures;
    toJSON(message: Pictures): unknown;
    fromPartial(object: DeepPartial<Pictures>): Pictures;
};
