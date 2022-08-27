import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgSaveProfile represents a message to save a profile. */
export interface MsgSaveProfile {
    /**
     * DTag of the profile. If it shouldn't be changed, [do-no-modify] can be used
     * instead.
     */
    dtag: string;
    /**
     * Nickname of the profile. If it shouldn't be changed, [do-no-modify] can be
     * used instead.
     */
    nickname: string;
    /**
     * Bio of the profile. If it shouldn't be changed, [do-no-modify] can be used
     * instead.
     */
    bio: string;
    /**
     * URL to the profile picture. If it shouldn't be changed, [do-no-modify] can
     * be used instead.
     */
    profilePicture: string;
    /**
     * URL to the profile cover. If it shouldn't be changed, [do-no-modify] can be
     * used instead.
     */
    coverPicture: string;
    /** Address of the user associated to the profile */
    creator: string;
}
/** MsgSaveProfileResponse defines the Msg/SaveProfile response type. */
export interface MsgSaveProfileResponse {
}
/** MsgDeleteProfile represents the message used to delete an existing profile. */
export interface MsgDeleteProfile {
    /** Address associated to the profile to be deleted */
    creator: string;
}
/** MsgDeleteProfileResponse defines the Msg/DeleteProfile response type. */
export interface MsgDeleteProfileResponse {
}
export declare const MsgSaveProfile: {
    encode(message: MsgSaveProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveProfile;
    fromJSON(object: any): MsgSaveProfile;
    toJSON(message: MsgSaveProfile): unknown;
    fromPartial(object: DeepPartial<MsgSaveProfile>): MsgSaveProfile;
};
export declare const MsgSaveProfileResponse: {
    encode(_: MsgSaveProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveProfileResponse;
    fromJSON(_: any): MsgSaveProfileResponse;
    toJSON(_: MsgSaveProfileResponse): unknown;
    fromPartial(_: DeepPartial<MsgSaveProfileResponse>): MsgSaveProfileResponse;
};
export declare const MsgDeleteProfile: {
    encode(message: MsgDeleteProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProfile;
    fromJSON(object: any): MsgDeleteProfile;
    toJSON(message: MsgDeleteProfile): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProfile>): MsgDeleteProfile;
};
export declare const MsgDeleteProfileResponse: {
    encode(_: MsgDeleteProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProfileResponse;
    fromJSON(_: any): MsgDeleteProfileResponse;
    toJSON(_: MsgDeleteProfileResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProfileResponse>): MsgDeleteProfileResponse;
};
