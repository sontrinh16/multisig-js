import * as _276 from "../decentr/community/community";
import * as _277 from "../decentr/community/genesis";
import * as _278 from "../decentr/community/query";
import * as _279 from "../decentr/community/tx";
export declare const community: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createPost(value: _279.MsgCreatePost): {
                typeUrl: string;
                value: Uint8Array;
            };
            deletePost(value: _279.MsgDeletePost): {
                typeUrl: string;
                value: Uint8Array;
            };
            setLike(value: _279.MsgSetLike): {
                typeUrl: string;
                value: Uint8Array;
            };
            follow(value: _279.MsgFollow): {
                typeUrl: string;
                value: Uint8Array;
            };
            unfollow(value: _279.MsgUnfollow): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createPost(value: _279.MsgCreatePost): {
                typeUrl: string;
                value: _279.MsgCreatePost;
            };
            deletePost(value: _279.MsgDeletePost): {
                typeUrl: string;
                value: _279.MsgDeletePost;
            };
            setLike(value: _279.MsgSetLike): {
                typeUrl: string;
                value: _279.MsgSetLike;
            };
            follow(value: _279.MsgFollow): {
                typeUrl: string;
                value: _279.MsgFollow;
            };
            unfollow(value: _279.MsgUnfollow): {
                typeUrl: string;
                value: _279.MsgUnfollow;
            };
        };
        toJSON: {
            createPost(value: _279.MsgCreatePost): {
                typeUrl: string;
                value: unknown;
            };
            deletePost(value: _279.MsgDeletePost): {
                typeUrl: string;
                value: unknown;
            };
            setLike(value: _279.MsgSetLike): {
                typeUrl: string;
                value: unknown;
            };
            follow(value: _279.MsgFollow): {
                typeUrl: string;
                value: unknown;
            };
            unfollow(value: _279.MsgUnfollow): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createPost(value: any): {
                typeUrl: string;
                value: _279.MsgCreatePost;
            };
            deletePost(value: any): {
                typeUrl: string;
                value: _279.MsgDeletePost;
            };
            setLike(value: any): {
                typeUrl: string;
                value: _279.MsgSetLike;
            };
            follow(value: any): {
                typeUrl: string;
                value: _279.MsgFollow;
            };
            unfollow(value: any): {
                typeUrl: string;
                value: _279.MsgUnfollow;
            };
        };
        fromPartial: {
            createPost(value: _279.MsgCreatePost): {
                typeUrl: string;
                value: _279.MsgCreatePost;
            };
            deletePost(value: _279.MsgDeletePost): {
                typeUrl: string;
                value: _279.MsgDeletePost;
            };
            setLike(value: _279.MsgSetLike): {
                typeUrl: string;
                value: _279.MsgSetLike;
            };
            follow(value: _279.MsgFollow): {
                typeUrl: string;
                value: _279.MsgFollow;
            };
            unfollow(value: _279.MsgUnfollow): {
                typeUrl: string;
                value: _279.MsgUnfollow;
            };
        };
    };
    AminoConverter: {
        "/community.MsgCreatePost": {
            aminoType: string;
            toAmino: ({ post }: _279.MsgCreatePost) => {
                post: {
                    owner: string;
                    uuid: string;
                    title: string;
                    preview_image: string;
                    category: number;
                    text: string;
                };
            };
            fromAmino: ({ post }: {
                post: {
                    owner: string;
                    uuid: string;
                    title: string;
                    preview_image: string;
                    category: number;
                    text: string;
                };
            }) => _279.MsgCreatePost;
        };
        "/community.MsgDeletePost": {
            aminoType: string;
            toAmino: ({ postOwner, postUuid, owner }: _279.MsgDeletePost) => {
                post_owner: string;
                post_uuid: string;
                owner: string;
            };
            fromAmino: ({ post_owner, post_uuid, owner }: {
                post_owner: string;
                post_uuid: string;
                owner: string;
            }) => _279.MsgDeletePost;
        };
        "/community.MsgSetLike": {
            aminoType: string;
            toAmino: ({ like }: _279.MsgSetLike) => {
                like: {
                    owner: string;
                    post_owner: string;
                    post_uuid: string;
                    weight: number;
                };
            };
            fromAmino: ({ like }: {
                like: {
                    owner: string;
                    post_owner: string;
                    post_uuid: string;
                    weight: number;
                };
            }) => _279.MsgSetLike;
        };
        "/community.MsgFollow": {
            aminoType: string;
            toAmino: ({ owner, whom }: _279.MsgFollow) => {
                owner: string;
                whom: string;
            };
            fromAmino: ({ owner, whom }: {
                owner: string;
                whom: string;
            }) => _279.MsgFollow;
        };
        "/community.MsgUnfollow": {
            aminoType: string;
            toAmino: ({ owner, whom }: _279.MsgUnfollow) => {
                owner: string;
                whom: string;
            };
            fromAmino: ({ owner, whom }: {
                owner: string;
                whom: string;
            }) => _279.MsgUnfollow;
        };
    };
    MsgCreatePost: {
        encode(message: _279.MsgCreatePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgCreatePost;
        fromJSON(object: any): _279.MsgCreatePost;
        toJSON(message: _279.MsgCreatePost): unknown;
        fromPartial(object: {
            post?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _276.Category;
                text?: string;
            };
        }): _279.MsgCreatePost;
    };
    MsgCreatePostResponse: {
        encode(_: _279.MsgCreatePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgCreatePostResponse;
        fromJSON(_: any): _279.MsgCreatePostResponse;
        toJSON(_: _279.MsgCreatePostResponse): unknown;
        fromPartial(_: {}): _279.MsgCreatePostResponse;
    };
    MsgDeletePost: {
        encode(message: _279.MsgDeletePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgDeletePost;
        fromJSON(object: any): _279.MsgDeletePost;
        toJSON(message: _279.MsgDeletePost): unknown;
        fromPartial(object: {
            postOwner?: string;
            postUuid?: string;
            owner?: string;
        }): _279.MsgDeletePost;
    };
    MsgDeletePostResponse: {
        encode(_: _279.MsgDeletePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgDeletePostResponse;
        fromJSON(_: any): _279.MsgDeletePostResponse;
        toJSON(_: _279.MsgDeletePostResponse): unknown;
        fromPartial(_: {}): _279.MsgDeletePostResponse;
    };
    MsgSetLike: {
        encode(message: _279.MsgSetLike, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgSetLike;
        fromJSON(object: any): _279.MsgSetLike;
        toJSON(message: _279.MsgSetLike): unknown;
        fromPartial(object: {
            like?: {
                owner?: string;
                postOwner?: string;
                postUuid?: string;
                weight?: _276.LikeWeight;
            };
        }): _279.MsgSetLike;
    };
    MsgSetLikeResponse: {
        encode(_: _279.MsgSetLikeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgSetLikeResponse;
        fromJSON(_: any): _279.MsgSetLikeResponse;
        toJSON(_: _279.MsgSetLikeResponse): unknown;
        fromPartial(_: {}): _279.MsgSetLikeResponse;
    };
    MsgFollow: {
        encode(message: _279.MsgFollow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgFollow;
        fromJSON(object: any): _279.MsgFollow;
        toJSON(message: _279.MsgFollow): unknown;
        fromPartial(object: {
            owner?: string;
            whom?: string;
        }): _279.MsgFollow;
    };
    MsgFollowResponse: {
        encode(_: _279.MsgFollowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgFollowResponse;
        fromJSON(_: any): _279.MsgFollowResponse;
        toJSON(_: _279.MsgFollowResponse): unknown;
        fromPartial(_: {}): _279.MsgFollowResponse;
    };
    MsgUnfollow: {
        encode(message: _279.MsgUnfollow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgUnfollow;
        fromJSON(object: any): _279.MsgUnfollow;
        toJSON(message: _279.MsgUnfollow): unknown;
        fromPartial(object: {
            owner?: string;
            whom?: string;
        }): _279.MsgUnfollow;
    };
    MsgUnfollowResponse: {
        encode(_: _279.MsgUnfollowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgUnfollowResponse;
        fromJSON(_: any): _279.MsgUnfollowResponse;
        toJSON(_: _279.MsgUnfollowResponse): unknown;
        fromPartial(_: {}): _279.MsgUnfollowResponse;
    };
    GetPostRequest: {
        encode(message: _278.GetPostRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.GetPostRequest;
        fromJSON(object: any): _278.GetPostRequest;
        toJSON(message: _278.GetPostRequest): unknown;
        fromPartial(object: {
            postOwner?: string;
            postUuid?: string;
        }): _278.GetPostRequest;
    };
    GetPostResponse: {
        encode(message: _278.GetPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.GetPostResponse;
        fromJSON(object: any): _278.GetPostResponse;
        toJSON(message: _278.GetPostResponse): unknown;
        fromPartial(object: {
            post?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _276.Category;
                text?: string;
            };
        }): _278.GetPostResponse;
    };
    ListUserPostsRequest: {
        encode(message: _278.ListUserPostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ListUserPostsRequest;
        fromJSON(object: any): _278.ListUserPostsRequest;
        toJSON(message: _278.ListUserPostsRequest): unknown;
        fromPartial(object: {
            owner?: string;
            pagination?: {
                key?: Uint8Array;
                offset?: any;
                limit?: any;
                countTotal?: boolean;
                reverse?: boolean;
            };
        }): _278.ListUserPostsRequest;
    };
    ListUserPostsResponse: {
        encode(message: _278.ListUserPostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ListUserPostsResponse;
        fromJSON(object: any): _278.ListUserPostsResponse;
        toJSON(message: _278.ListUserPostsResponse): unknown;
        fromPartial(object: {
            posts?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _276.Category;
                text?: string;
            }[];
            pagination?: {
                nextKey?: Uint8Array;
                total?: any;
            };
        }): _278.ListUserPostsResponse;
    };
    ModeratorsRequest: {
        encode(_: _278.ModeratorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ModeratorsRequest;
        fromJSON(_: any): _278.ModeratorsRequest;
        toJSON(_: _278.ModeratorsRequest): unknown;
        fromPartial(_: {}): _278.ModeratorsRequest;
    };
    ModeratorsResponse: {
        encode(message: _278.ModeratorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ModeratorsResponse;
        fromJSON(object: any): _278.ModeratorsResponse;
        toJSON(message: _278.ModeratorsResponse): unknown;
        fromPartial(object: {
            moderators?: string[];
        }): _278.ModeratorsResponse;
    };
    ListFollowedRequest: {
        encode(message: _278.ListFollowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ListFollowedRequest;
        fromJSON(object: any): _278.ListFollowedRequest;
        toJSON(message: _278.ListFollowedRequest): unknown;
        fromPartial(object: {
            owner?: string;
            pagination?: {
                key?: Uint8Array;
                offset?: any;
                limit?: any;
                countTotal?: boolean;
                reverse?: boolean;
            };
        }): _278.ListFollowedRequest;
    };
    ListFollowedResponse: {
        encode(message: _278.ListFollowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ListFollowedResponse;
        fromJSON(object: any): _278.ListFollowedResponse;
        toJSON(message: _278.ListFollowedResponse): unknown;
        fromPartial(object: {
            followed?: string[];
            pagination?: {
                nextKey?: Uint8Array;
                total?: any;
            };
        }): _278.ListFollowedResponse;
    };
    GenesisState_FollowingEntry: {
        encode(message: _277.GenesisState_FollowingEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.GenesisState_FollowingEntry;
        fromJSON(object: any): _277.GenesisState_FollowingEntry;
        toJSON(message: _277.GenesisState_FollowingEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: any;
        }): _277.GenesisState_FollowingEntry;
    };
    GenesisState: {
        encode(message: _277.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.GenesisState;
        fromJSON(object: any): _277.GenesisState;
        toJSON(message: _277.GenesisState): unknown;
        fromPartial(object: {
            params?: {
                moderators?: string[];
                fixedGas?: {
                    createPost?: any;
                    deletePost?: any;
                    setLike?: any;
                    follow?: any;
                    unfollow?: any;
                };
            };
            posts?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _276.Category;
                text?: string;
            }[];
            likes?: {
                owner?: string;
                postOwner?: string;
                postUuid?: string;
                weight?: _276.LikeWeight;
            }[];
            following?: {
                [x: string]: {
                    address?: string[];
                };
            };
        }): _277.GenesisState;
    };
    GenesisState_AddressList: {
        encode(message: _277.GenesisState_AddressList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.GenesisState_AddressList;
        fromJSON(object: any): _277.GenesisState_AddressList;
        toJSON(message: _277.GenesisState_AddressList): unknown;
        fromPartial(object: {
            address?: string[];
        }): _277.GenesisState_AddressList;
    };
    categoryFromJSON(object: any): _276.Category;
    categoryToJSON(object: _276.Category): string;
    likeWeightFromJSON(object: any): _276.LikeWeight;
    likeWeightToJSON(object: _276.LikeWeight): string;
    Category: typeof _276.Category;
    LikeWeight: typeof _276.LikeWeight;
    Params: {
        encode(message: _276.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Params;
        fromJSON(object: any): _276.Params;
        toJSON(message: _276.Params): unknown;
        fromPartial(object: {
            moderators?: string[];
            fixedGas?: {
                createPost?: any;
                deletePost?: any;
                setLike?: any;
                follow?: any;
                unfollow?: any;
            };
        }): _276.Params;
    };
    FixedGasParams: {
        encode(message: _276.FixedGasParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.FixedGasParams;
        fromJSON(object: any): _276.FixedGasParams;
        toJSON(message: _276.FixedGasParams): unknown;
        fromPartial(object: {
            createPost?: any;
            deletePost?: any;
            setLike?: any;
            follow?: any;
            unfollow?: any;
        }): _276.FixedGasParams;
    };
    Post: {
        encode(message: _276.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Post;
        fromJSON(object: any): _276.Post;
        toJSON(message: _276.Post): unknown;
        fromPartial(object: {
            owner?: string;
            uuid?: string;
            title?: string;
            previewImage?: string;
            category?: _276.Category;
            text?: string;
        }): _276.Post;
    };
    Like: {
        encode(message: _276.Like, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Like;
        fromJSON(object: any): _276.Like;
        toJSON(message: _276.Like): unknown;
        fromPartial(object: {
            owner?: string;
            postOwner?: string;
            postUuid?: string;
            weight?: _276.LikeWeight;
        }): _276.Like;
    };
};
