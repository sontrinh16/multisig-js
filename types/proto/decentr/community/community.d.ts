import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum Category {
    CATEGORY_UNDEFINED = 0,
    CATEGORY_WORLD_NEWS = 1,
    CATEGORY_TRAVEL_AND_TOURISM = 2,
    CATEGORY_SCIENCE_AND_TECHNOLOGY = 3,
    CATEGORY_STRANGE_WORLD = 4,
    CATEGORY_ARTS_AND_ENTERTAINMENT = 5,
    CATEGORY_WRITERS_AND_WRITING = 6,
    CATEGORY_HEALTH_AND_FITNESS = 7,
    CATEGORY_CRYPTO_AND_BLOCKCHAIN = 8,
    CATEGORY_SPORTS = 9,
    UNRECOGNIZED = -1
}
export declare function categoryFromJSON(object: any): Category;
export declare function categoryToJSON(object: Category): string;
export declare enum LikeWeight {
    LIKE_WEIGHT_ZERO = 0,
    LIKE_WEIGHT_UP = 1,
    LIKE_WEIGHT_DOWN = -1,
    UNRECOGNIZED = -1
}
export declare function likeWeightFromJSON(object: any): LikeWeight;
export declare function likeWeightToJSON(object: LikeWeight): string;
export interface Params {
    moderators: string[];
    fixedGas: FixedGasParams;
}
export interface FixedGasParams {
    createPost: Long;
    deletePost: Long;
    setLike: Long;
    follow: Long;
    unfollow: Long;
}
export interface Post {
    owner: string;
    uuid: string;
    title: string;
    previewImage: string;
    category: Category;
    text: string;
}
export interface Like {
    owner: string;
    postOwner: string;
    postUuid: string;
    weight: LikeWeight;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const FixedGasParams: {
    encode(message: FixedGasParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixedGasParams;
    fromJSON(object: any): FixedGasParams;
    toJSON(message: FixedGasParams): unknown;
    fromPartial(object: DeepPartial<FixedGasParams>): FixedGasParams;
};
export declare const Post: {
    encode(message: Post, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Post;
    fromJSON(object: any): Post;
    toJSON(message: Post): unknown;
    fromPartial(object: DeepPartial<Post>): Post;
};
export declare const Like: {
    encode(message: Like, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Like;
    fromJSON(object: any): Like;
    toJSON(message: Like): unknown;
    fromPartial(object: DeepPartial<Like>): Like;
};
