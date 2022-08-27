import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePost, MsgDeletePost, MsgSetLike, MsgFollow, MsgUnfollow } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: Uint8Array;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: Uint8Array;
        };
        setLike(value: MsgSetLike): {
            typeUrl: string;
            value: Uint8Array;
        };
        follow(value: MsgFollow): {
            typeUrl: string;
            value: Uint8Array;
        };
        unfollow(value: MsgUnfollow): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        setLike(value: MsgSetLike): {
            typeUrl: string;
            value: MsgSetLike;
        };
        follow(value: MsgFollow): {
            typeUrl: string;
            value: MsgFollow;
        };
        unfollow(value: MsgUnfollow): {
            typeUrl: string;
            value: MsgUnfollow;
        };
    };
    toJSON: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: unknown;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: unknown;
        };
        setLike(value: MsgSetLike): {
            typeUrl: string;
            value: unknown;
        };
        follow(value: MsgFollow): {
            typeUrl: string;
            value: unknown;
        };
        unfollow(value: MsgUnfollow): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createPost(value: any): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        deletePost(value: any): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        setLike(value: any): {
            typeUrl: string;
            value: MsgSetLike;
        };
        follow(value: any): {
            typeUrl: string;
            value: MsgFollow;
        };
        unfollow(value: any): {
            typeUrl: string;
            value: MsgUnfollow;
        };
    };
    fromPartial: {
        createPost(value: MsgCreatePost): {
            typeUrl: string;
            value: MsgCreatePost;
        };
        deletePost(value: MsgDeletePost): {
            typeUrl: string;
            value: MsgDeletePost;
        };
        setLike(value: MsgSetLike): {
            typeUrl: string;
            value: MsgSetLike;
        };
        follow(value: MsgFollow): {
            typeUrl: string;
            value: MsgFollow;
        };
        unfollow(value: MsgUnfollow): {
            typeUrl: string;
            value: MsgUnfollow;
        };
    };
};
