import * as _208 from "../decentr/community/community";
import * as _209 from "../decentr/community/genesis";
import * as _210 from "../decentr/community/query";
import * as _211 from "../decentr/community/tx";
export declare const community: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createPost(value: _211.MsgCreatePost): {
                typeUrl: string;
                value: Uint8Array;
            };
            deletePost(value: _211.MsgDeletePost): {
                typeUrl: string;
                value: Uint8Array;
            };
            setLike(value: _211.MsgSetLike): {
                typeUrl: string;
                value: Uint8Array;
            };
            follow(value: _211.MsgFollow): {
                typeUrl: string;
                value: Uint8Array;
            };
            unfollow(value: _211.MsgUnfollow): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createPost(value: _211.MsgCreatePost): {
                typeUrl: string;
                value: _211.MsgCreatePost;
            };
            deletePost(value: _211.MsgDeletePost): {
                typeUrl: string;
                value: _211.MsgDeletePost;
            };
            setLike(value: _211.MsgSetLike): {
                typeUrl: string;
                value: _211.MsgSetLike;
            };
            follow(value: _211.MsgFollow): {
                typeUrl: string;
                value: _211.MsgFollow;
            };
            unfollow(value: _211.MsgUnfollow): {
                typeUrl: string;
                value: _211.MsgUnfollow;
            };
        };
        toJSON: {
            createPost(value: _211.MsgCreatePost): {
                typeUrl: string;
                value: unknown;
            };
            deletePost(value: _211.MsgDeletePost): {
                typeUrl: string;
                value: unknown;
            };
            setLike(value: _211.MsgSetLike): {
                typeUrl: string;
                value: unknown;
            };
            follow(value: _211.MsgFollow): {
                typeUrl: string;
                value: unknown;
            };
            unfollow(value: _211.MsgUnfollow): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createPost(value: any): {
                typeUrl: string;
                value: _211.MsgCreatePost;
            };
            deletePost(value: any): {
                typeUrl: string;
                value: _211.MsgDeletePost;
            };
            setLike(value: any): {
                typeUrl: string;
                value: _211.MsgSetLike;
            };
            follow(value: any): {
                typeUrl: string;
                value: _211.MsgFollow;
            };
            unfollow(value: any): {
                typeUrl: string;
                value: _211.MsgUnfollow;
            };
        };
        fromPartial: {
            createPost(value: _211.MsgCreatePost): {
                typeUrl: string;
                value: _211.MsgCreatePost;
            };
            deletePost(value: _211.MsgDeletePost): {
                typeUrl: string;
                value: _211.MsgDeletePost;
            };
            setLike(value: _211.MsgSetLike): {
                typeUrl: string;
                value: _211.MsgSetLike;
            };
            follow(value: _211.MsgFollow): {
                typeUrl: string;
                value: _211.MsgFollow;
            };
            unfollow(value: _211.MsgUnfollow): {
                typeUrl: string;
                value: _211.MsgUnfollow;
            };
        };
    };
    AminoConverter: {
        "/community.MsgCreatePost": {
            aminoType: string;
            toAmino: ({ post }: _211.MsgCreatePost) => {
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
            }) => _211.MsgCreatePost;
        };
        "/community.MsgDeletePost": {
            aminoType: string;
            toAmino: ({ postOwner, postUuid, owner }: _211.MsgDeletePost) => {
                post_owner: string;
                post_uuid: string;
                owner: string;
            };
            fromAmino: ({ post_owner, post_uuid, owner }: {
                post_owner: string;
                post_uuid: string;
                owner: string;
            }) => _211.MsgDeletePost;
        };
        "/community.MsgSetLike": {
            aminoType: string;
            toAmino: ({ like }: _211.MsgSetLike) => {
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
            }) => _211.MsgSetLike;
        };
        "/community.MsgFollow": {
            aminoType: string;
            toAmino: ({ owner, whom }: _211.MsgFollow) => {
                owner: string;
                whom: string;
            };
            fromAmino: ({ owner, whom }: {
                owner: string;
                whom: string;
            }) => _211.MsgFollow;
        };
        "/community.MsgUnfollow": {
            aminoType: string;
            toAmino: ({ owner, whom }: _211.MsgUnfollow) => {
                owner: string;
                whom: string;
            };
            fromAmino: ({ owner, whom }: {
                owner: string;
                whom: string;
            }) => _211.MsgUnfollow;
        };
    };
    MsgCreatePost: {
        encode(message: _211.MsgCreatePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreatePost;
        fromJSON(object: any): _211.MsgCreatePost;
        toJSON(message: _211.MsgCreatePost): unknown;
        fromPartial(object: {
            post?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _208.Category;
                text?: string;
            };
        }): _211.MsgCreatePost;
    };
    MsgCreatePostResponse: {
        encode(_: _211.MsgCreatePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreatePostResponse;
        fromJSON(_: any): _211.MsgCreatePostResponse;
        toJSON(_: _211.MsgCreatePostResponse): unknown;
        fromPartial(_: {}): _211.MsgCreatePostResponse;
    };
    MsgDeletePost: {
        encode(message: _211.MsgDeletePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgDeletePost;
        fromJSON(object: any): _211.MsgDeletePost;
        toJSON(message: _211.MsgDeletePost): unknown;
        fromPartial(object: {
            postOwner?: string;
            postUuid?: string;
            owner?: string;
        }): _211.MsgDeletePost;
    };
    MsgDeletePostResponse: {
        encode(_: _211.MsgDeletePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgDeletePostResponse;
        fromJSON(_: any): _211.MsgDeletePostResponse;
        toJSON(_: _211.MsgDeletePostResponse): unknown;
        fromPartial(_: {}): _211.MsgDeletePostResponse;
    };
    MsgSetLike: {
        encode(message: _211.MsgSetLike, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgSetLike;
        fromJSON(object: any): _211.MsgSetLike;
        toJSON(message: _211.MsgSetLike): unknown;
        fromPartial(object: {
            like?: {
                owner?: string;
                postOwner?: string;
                postUuid?: string;
                weight?: _208.LikeWeight;
            };
        }): _211.MsgSetLike;
    };
    MsgSetLikeResponse: {
        encode(_: _211.MsgSetLikeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgSetLikeResponse;
        fromJSON(_: any): _211.MsgSetLikeResponse;
        toJSON(_: _211.MsgSetLikeResponse): unknown;
        fromPartial(_: {}): _211.MsgSetLikeResponse;
    };
    MsgFollow: {
        encode(message: _211.MsgFollow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgFollow;
        fromJSON(object: any): _211.MsgFollow;
        toJSON(message: _211.MsgFollow): unknown;
        fromPartial(object: {
            owner?: string;
            whom?: string;
        }): _211.MsgFollow;
    };
    MsgFollowResponse: {
        encode(_: _211.MsgFollowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgFollowResponse;
        fromJSON(_: any): _211.MsgFollowResponse;
        toJSON(_: _211.MsgFollowResponse): unknown;
        fromPartial(_: {}): _211.MsgFollowResponse;
    };
    MsgUnfollow: {
        encode(message: _211.MsgUnfollow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgUnfollow;
        fromJSON(object: any): _211.MsgUnfollow;
        toJSON(message: _211.MsgUnfollow): unknown;
        fromPartial(object: {
            owner?: string;
            whom?: string;
        }): _211.MsgUnfollow;
    };
    MsgUnfollowResponse: {
        encode(_: _211.MsgUnfollowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgUnfollowResponse;
        fromJSON(_: any): _211.MsgUnfollowResponse;
        toJSON(_: _211.MsgUnfollowResponse): unknown;
        fromPartial(_: {}): _211.MsgUnfollowResponse;
    };
    GetPostRequest: {
        encode(message: _210.GetPostRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetPostRequest;
        fromJSON(object: any): _210.GetPostRequest;
        toJSON(message: _210.GetPostRequest): unknown;
        fromPartial(object: {
            postOwner?: string;
            postUuid?: string;
        }): _210.GetPostRequest;
    };
    GetPostResponse: {
        encode(message: _210.GetPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetPostResponse;
        fromJSON(object: any): _210.GetPostResponse;
        toJSON(message: _210.GetPostResponse): unknown;
        fromPartial(object: {
            post?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _208.Category;
                text?: string;
            };
        }): _210.GetPostResponse;
    };
    ListUserPostsRequest: {
        encode(message: _210.ListUserPostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ListUserPostsRequest;
        fromJSON(object: any): _210.ListUserPostsRequest;
        toJSON(message: _210.ListUserPostsRequest): unknown;
        fromPartial(object: {
            owner?: string;
            pagination?: {
                key?: Uint8Array;
                offset?: any;
                limit?: any;
                countTotal?: boolean;
                reverse?: boolean;
            };
        }): _210.ListUserPostsRequest;
    };
    ListUserPostsResponse: {
        encode(message: _210.ListUserPostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ListUserPostsResponse;
        fromJSON(object: any): _210.ListUserPostsResponse;
        toJSON(message: _210.ListUserPostsResponse): unknown;
        fromPartial(object: {
            posts?: {
                owner?: string;
                uuid?: string;
                title?: string;
                previewImage?: string;
                category?: _208.Category;
                text?: string;
            }[];
            pagination?: {
                nextKey?: Uint8Array;
                total?: any;
            };
        }): _210.ListUserPostsResponse;
    };
    ModeratorsRequest: {
        encode(_: _210.ModeratorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ModeratorsRequest;
        fromJSON(_: any): _210.ModeratorsRequest;
        toJSON(_: _210.ModeratorsRequest): unknown;
        fromPartial(_: {}): _210.ModeratorsRequest;
    };
    ModeratorsResponse: {
        encode(message: _210.ModeratorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ModeratorsResponse;
        fromJSON(object: any): _210.ModeratorsResponse;
        toJSON(message: _210.ModeratorsResponse): unknown;
        fromPartial(object: {
            moderators?: string[];
        }): _210.ModeratorsResponse;
    };
    ListFollowedRequest: {
        encode(message: _210.ListFollowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ListFollowedRequest;
        fromJSON(object: any): _210.ListFollowedRequest;
        toJSON(message: _210.ListFollowedRequest): unknown;
        fromPartial(object: {
            owner?: string;
            pagination?: {
                key?: Uint8Array;
                offset?: any;
                limit?: any;
                countTotal?: boolean;
                reverse?: boolean;
            };
        }): _210.ListFollowedRequest;
    };
    ListFollowedResponse: {
        encode(message: _210.ListFollowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ListFollowedResponse;
        fromJSON(object: any): _210.ListFollowedResponse;
        toJSON(message: _210.ListFollowedResponse): unknown;
        fromPartial(object: {
            followed?: string[];
            pagination?: {
                nextKey?: Uint8Array;
                total?: any;
            };
        }): _210.ListFollowedResponse;
    };
    GenesisState_FollowingEntry: {
        encode(message: _209.GenesisState_FollowingEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GenesisState_FollowingEntry;
        fromJSON(object: any): _209.GenesisState_FollowingEntry;
        toJSON(message: _209.GenesisState_FollowingEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: any;
        }): _209.GenesisState_FollowingEntry;
    };
    GenesisState: {
        encode(message: _209.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GenesisState;
        fromJSON(object: any): _209.GenesisState;
        toJSON(message: _209.GenesisState): unknown;
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
                category?: _208.Category;
                text?: string;
            }[];
            likes?: {
                owner?: string;
                postOwner?: string;
                postUuid?: string;
                weight?: _208.LikeWeight;
            }[];
            following?: {
                [x: string]: {
                    address?: string[];
                };
            };
        }): _209.GenesisState;
    };
    GenesisState_AddressList: {
        encode(message: _209.GenesisState_AddressList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GenesisState_AddressList;
        fromJSON(object: any): _209.GenesisState_AddressList;
        toJSON(message: _209.GenesisState_AddressList): unknown;
        fromPartial(object: {
            address?: string[];
        }): _209.GenesisState_AddressList;
    };
    categoryFromJSON(object: any): _208.Category;
    categoryToJSON(object: _208.Category): string;
    likeWeightFromJSON(object: any): _208.LikeWeight;
    likeWeightToJSON(object: _208.LikeWeight): string;
    Category: typeof _208.Category;
    LikeWeight: typeof _208.LikeWeight;
    Params: {
        encode(message: _208.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Params;
        fromJSON(object: any): _208.Params;
        toJSON(message: _208.Params): unknown;
        fromPartial(object: {
            moderators?: string[];
            fixedGas?: {
                createPost?: any;
                deletePost?: any;
                setLike?: any;
                follow?: any;
                unfollow?: any;
            };
        }): _208.Params;
    };
    FixedGasParams: {
        encode(message: _208.FixedGasParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.FixedGasParams;
        fromJSON(object: any): _208.FixedGasParams;
        toJSON(message: _208.FixedGasParams): unknown;
        fromPartial(object: {
            createPost?: any;
            deletePost?: any;
            setLike?: any;
            follow?: any;
            unfollow?: any;
        }): _208.FixedGasParams;
    };
    Post: {
        encode(message: _208.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Post;
        fromJSON(object: any): _208.Post;
        toJSON(message: _208.Post): unknown;
        fromPartial(object: {
            owner?: string;
            uuid?: string;
            title?: string;
            previewImage?: string;
            category?: _208.Category;
            text?: string;
        }): _208.Post;
    };
    Like: {
        encode(message: _208.Like, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Like;
        fromJSON(object: any): _208.Like;
        toJSON(message: _208.Like): unknown;
        fromPartial(object: {
            owner?: string;
            postOwner?: string;
            postUuid?: string;
            weight?: _208.LikeWeight;
        }): _208.Like;
    };
};
