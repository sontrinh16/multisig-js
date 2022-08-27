import * as _218 from "./fees/v1/genesis";
import * as _219 from "./fees/v1/min_fee";
import * as _220 from "./fees/v1/params";
import * as _221 from "./fees/v1/query";
import * as _222 from "./posts/v1/models";
import * as _223 from "./posts/v2/genesis";
import * as _224 from "./posts/v2/models";
import * as _225 from "./posts/v2/msgs";
import * as _226 from "./posts/v2/query";
import * as _227 from "./profiles/v1beta1/models_app_links";
import * as _228 from "./profiles/v1beta1/models_chain_links";
import * as _229 from "./profiles/v1beta1/models_dtag_requests";
import * as _230 from "./profiles/v1beta1/models_profile";
import * as _231 from "./profiles/v1beta1/models_relationships";
import * as _232 from "./profiles/v2/models_app_links";
import * as _233 from "./profiles/v2/models_chain_links";
import * as _234 from "./profiles/v2/models_dtag_requests";
import * as _235 from "./profiles/v2/models_params";
import * as _236 from "./profiles/v2/models_profile";
import * as _237 from "./profiles/v3/genesis";
import * as _238 from "./profiles/v3/models_app_links";
import * as _239 from "./profiles/v3/models_chain_links";
import * as _240 from "./profiles/v3/models_dtag_requests";
import * as _241 from "./profiles/v3/models_packets";
import * as _242 from "./profiles/v3/models_params";
import * as _243 from "./profiles/v3/models_profile";
import * as _245 from "./profiles/v3/msgs_app_links";
import * as _246 from "./profiles/v3/msgs_chain_links";
import * as _247 from "./profiles/v3/msgs_dtag_requests";
import * as _248 from "./profiles/v3/msgs_profile";
import * as _249 from "./profiles/v3/query_app_links";
import * as _250 from "./profiles/v3/query_chain_links";
import * as _251 from "./profiles/v3/query_dtag_requests";
import * as _252 from "./profiles/v3/query_params";
import * as _253 from "./profiles/v3/query_profile";
import * as _255 from "./reactions/v1/genesis";
import * as _256 from "./reactions/v1/models";
import * as _257 from "./reactions/v1/msgs";
import * as _258 from "./reactions/v1/query";
import * as _259 from "./relationships/v1/genesis";
import * as _260 from "./relationships/v1/models";
import * as _261 from "./relationships/v1/msgs";
import * as _262 from "./relationships/v1/query";
import * as _263 from "./reports/v1/genesis";
import * as _264 from "./reports/v1/models";
import * as _265 from "./reports/v1/msgs";
import * as _266 from "./reports/v1/query";
import * as _267 from "./subspaces/v1/models";
import * as _268 from "./subspaces/v2/authz/authz";
import * as _269 from "./subspaces/v3/genesis";
import * as _270 from "./subspaces/v3/models";
import * as _271 from "./subspaces/v3/msgs";
import * as _272 from "./subspaces/v3/query";
import * as _273 from "./supply/v1/query";
export declare namespace desmos {
    namespace fees {
        const v1: {
            QueryParamsRequest: {
                encode(_: _221.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.QueryParamsRequest;
                fromJSON(_: any): _221.QueryParamsRequest;
                toJSON(_: _221.QueryParamsRequest): unknown;
                fromPartial(_: {}): _221.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _221.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.QueryParamsResponse;
                fromJSON(object: any): _221.QueryParamsResponse;
                toJSON(message: _221.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        minFees?: {
                            messageType?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                    };
                }): _221.QueryParamsResponse;
            };
            Params: {
                encode(message: _220.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Params;
                fromJSON(object: any): _220.Params;
                toJSON(message: _220.Params): unknown;
                fromPartial(object: {
                    minFees?: {
                        messageType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _220.Params;
            };
            MinFee: {
                encode(message: _219.MinFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MinFee;
                fromJSON(object: any): _219.MinFee;
                toJSON(message: _219.MinFee): unknown;
                fromPartial(object: {
                    messageType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _219.MinFee;
            };
            GenesisState: {
                encode(message: _218.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GenesisState;
                fromJSON(object: any): _218.GenesisState;
                toJSON(message: _218.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minFees?: {
                            messageType?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                    };
                }): _218.GenesisState;
            };
        };
    }
    namespace posts {
        const v1: {
            postReferenceTypeFromJSON(object: any): _222.PostReferenceType;
            postReferenceTypeToJSON(object: _222.PostReferenceType): string;
            replySettingFromJSON(object: any): _222.ReplySetting;
            replySettingToJSON(object: _222.ReplySetting): string;
            PostReferenceType: typeof _222.PostReferenceType;
            ReplySetting: typeof _222.ReplySetting;
            Post: {
                encode(message: _222.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Post;
                fromJSON(object: any): _222.Post;
                toJSON(message: _222.Post): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    id?: any;
                    externalId?: string;
                    text?: string;
                    entities?: {
                        hashtags?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        mentions?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        urls?: {
                            start?: any;
                            end?: any;
                            url?: string;
                            displayUrl?: string;
                        }[];
                    };
                    author?: string;
                    conversationId?: any;
                    referencedPosts?: {
                        type?: _222.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                    replySettings?: _222.ReplySetting;
                    creationDate?: Date;
                    lastEditedDate?: Date;
                }): _222.Post;
            };
            PostReference: {
                encode(message: _222.PostReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.PostReference;
                fromJSON(object: any): _222.PostReference;
                toJSON(message: _222.PostReference): unknown;
                fromPartial(object: {
                    type?: _222.PostReferenceType;
                    postId?: any;
                    position?: any;
                }): _222.PostReference;
            };
            Entities: {
                encode(message: _222.Entities, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Entities;
                fromJSON(object: any): _222.Entities;
                toJSON(message: _222.Entities): unknown;
                fromPartial(object: {
                    hashtags?: {
                        start?: any;
                        end?: any;
                        tag?: string;
                    }[];
                    mentions?: {
                        start?: any;
                        end?: any;
                        tag?: string;
                    }[];
                    urls?: {
                        start?: any;
                        end?: any;
                        url?: string;
                        displayUrl?: string;
                    }[];
                }): _222.Entities;
            };
            Tag: {
                encode(message: _222.Tag, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Tag;
                fromJSON(object: any): _222.Tag;
                toJSON(message: _222.Tag): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    tag?: string;
                }): _222.Tag;
            };
            Url: {
                encode(message: _222.Url, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Url;
                fromJSON(object: any): _222.Url;
                toJSON(message: _222.Url): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    url?: string;
                    displayUrl?: string;
                }): _222.Url;
            };
            Attachment: {
                encode(message: _222.Attachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Attachment;
                fromJSON(object: any): _222.Attachment;
                toJSON(message: _222.Attachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    postId?: any;
                    id?: number;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _222.Attachment;
            };
            Media: {
                encode(message: _222.Media, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Media;
                fromJSON(object: any): _222.Media;
                toJSON(message: _222.Media): unknown;
                fromPartial(object: {
                    uri?: string;
                    mimeType?: string;
                }): _222.Media;
            };
            Poll: {
                encode(message: _222.Poll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Poll;
                fromJSON(object: any): _222.Poll;
                toJSON(message: _222.Poll): unknown;
                fromPartial(object: {
                    question?: string;
                    providedAnswers?: {
                        text?: string;
                        attachments?: {
                            subspaceId?: any;
                            sectionId?: number;
                            postId?: any;
                            id?: number;
                            content?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                    endDate?: Date;
                    allowsMultipleAnswers?: boolean;
                    allowsAnswerEdits?: boolean;
                    finalTallyResults?: {
                        results?: {
                            answerIndex?: number;
                            votes?: any;
                        }[];
                    };
                }): _222.Poll;
            };
            Poll_ProvidedAnswer: {
                encode(message: _222.Poll_ProvidedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Poll_ProvidedAnswer;
                fromJSON(object: any): _222.Poll_ProvidedAnswer;
                toJSON(message: _222.Poll_ProvidedAnswer): unknown;
                fromPartial(object: {
                    text?: string;
                    attachments?: {
                        subspaceId?: any;
                        sectionId?: number;
                        postId?: any;
                        id?: number;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _222.Poll_ProvidedAnswer;
            };
            UserAnswer: {
                encode(message: _222.UserAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.UserAnswer;
                fromJSON(object: any): _222.UserAnswer;
                toJSON(message: _222.UserAnswer): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    user?: string;
                }): _222.UserAnswer;
            };
            PollTallyResults: {
                encode(message: _222.PollTallyResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.PollTallyResults;
                fromJSON(object: any): _222.PollTallyResults;
                toJSON(message: _222.PollTallyResults): unknown;
                fromPartial(object: {
                    results?: {
                        answerIndex?: number;
                        votes?: any;
                    }[];
                }): _222.PollTallyResults;
            };
            PollTallyResults_AnswerResult: {
                encode(message: _222.PollTallyResults_AnswerResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.PollTallyResults_AnswerResult;
                fromJSON(object: any): _222.PollTallyResults_AnswerResult;
                toJSON(message: _222.PollTallyResults_AnswerResult): unknown;
                fromPartial(object: {
                    answerIndex?: number;
                    votes?: any;
                }): _222.PollTallyResults_AnswerResult;
            };
            Params: {
                encode(message: _222.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Params;
                fromJSON(object: any): _222.Params;
                toJSON(message: _222.Params): unknown;
                fromPartial(object: {
                    maxTextLength?: number;
                }): _222.Params;
            };
        };
        const v2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPost(value: _225.MsgCreatePost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editPost(value: _225.MsgEditPost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deletePost(value: _225.MsgDeletePost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addPostAttachment(value: _225.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePostAttachment(value: _225.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    answerPoll(value: _225.MsgAnswerPoll): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPost(value: _225.MsgCreatePost): {
                        typeUrl: string;
                        value: _225.MsgCreatePost;
                    };
                    editPost(value: _225.MsgEditPost): {
                        typeUrl: string;
                        value: _225.MsgEditPost;
                    };
                    deletePost(value: _225.MsgDeletePost): {
                        typeUrl: string;
                        value: _225.MsgDeletePost;
                    };
                    addPostAttachment(value: _225.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: _225.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: _225.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: _225.MsgRemovePostAttachment;
                    };
                    answerPoll(value: _225.MsgAnswerPoll): {
                        typeUrl: string;
                        value: _225.MsgAnswerPoll;
                    };
                };
                toJSON: {
                    createPost(value: _225.MsgCreatePost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editPost(value: _225.MsgEditPost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deletePost(value: _225.MsgDeletePost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addPostAttachment(value: _225.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removePostAttachment(value: _225.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    answerPoll(value: _225.MsgAnswerPoll): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createPost(value: any): {
                        typeUrl: string;
                        value: _225.MsgCreatePost;
                    };
                    editPost(value: any): {
                        typeUrl: string;
                        value: _225.MsgEditPost;
                    };
                    deletePost(value: any): {
                        typeUrl: string;
                        value: _225.MsgDeletePost;
                    };
                    addPostAttachment(value: any): {
                        typeUrl: string;
                        value: _225.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: any): {
                        typeUrl: string;
                        value: _225.MsgRemovePostAttachment;
                    };
                    answerPoll(value: any): {
                        typeUrl: string;
                        value: _225.MsgAnswerPoll;
                    };
                };
                fromPartial: {
                    createPost(value: _225.MsgCreatePost): {
                        typeUrl: string;
                        value: _225.MsgCreatePost;
                    };
                    editPost(value: _225.MsgEditPost): {
                        typeUrl: string;
                        value: _225.MsgEditPost;
                    };
                    deletePost(value: _225.MsgDeletePost): {
                        typeUrl: string;
                        value: _225.MsgDeletePost;
                    };
                    addPostAttachment(value: _225.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: _225.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: _225.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: _225.MsgRemovePostAttachment;
                    };
                    answerPoll(value: _225.MsgAnswerPoll): {
                        typeUrl: string;
                        value: _225.MsgAnswerPoll;
                    };
                };
            };
            AminoConverter: {
                "/desmos.posts.v2.MsgCreatePost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, externalId, text, entities, tags, attachments, author, conversationId, replySettings, referencedPosts }: _225.MsgCreatePost) => {
                        subspace_id: string;
                        section_id: number;
                        external_id: string;
                        text: string;
                        entities: {
                            hashtags: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            mentions: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            urls: {
                                start: string;
                                end: string;
                                url: string;
                                display_url: string;
                            }[];
                        };
                        tags: string[];
                        attachments: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        author: string;
                        conversation_id: string;
                        reply_settings: number;
                        referenced_posts: {
                            type: number;
                            post_id: string;
                            position: string;
                        }[];
                    };
                    fromAmino: ({ subspace_id, section_id, external_id, text, entities, tags, attachments, author, conversation_id, reply_settings, referenced_posts }: {
                        subspace_id: string;
                        section_id: number;
                        external_id: string;
                        text: string;
                        entities: {
                            hashtags: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            mentions: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            urls: {
                                start: string;
                                end: string;
                                url: string;
                                display_url: string;
                            }[];
                        };
                        tags: string[];
                        attachments: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        author: string;
                        conversation_id: string;
                        reply_settings: number;
                        referenced_posts: {
                            type: number;
                            post_id: string;
                            position: string;
                        }[];
                    }) => _225.MsgCreatePost;
                };
                "/desmos.posts.v2.MsgEditPost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, text, entities, tags, editor }: _225.MsgEditPost) => {
                        subspace_id: string;
                        post_id: string;
                        text: string;
                        entities: {
                            hashtags: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            mentions: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            urls: {
                                start: string;
                                end: string;
                                url: string;
                                display_url: string;
                            }[];
                        };
                        tags: string[];
                        editor: string;
                    };
                    fromAmino: ({ subspace_id, post_id, text, entities, tags, editor }: {
                        subspace_id: string;
                        post_id: string;
                        text: string;
                        entities: {
                            hashtags: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            mentions: {
                                start: string;
                                end: string;
                                tag: string;
                            }[];
                            urls: {
                                start: string;
                                end: string;
                                url: string;
                                display_url: string;
                            }[];
                        };
                        tags: string[];
                        editor: string;
                    }) => _225.MsgEditPost;
                };
                "/desmos.posts.v2.MsgDeletePost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, signer }: _225.MsgDeletePost) => {
                        subspace_id: string;
                        post_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, post_id, signer }: {
                        subspace_id: string;
                        post_id: string;
                        signer: string;
                    }) => _225.MsgDeletePost;
                };
                "/desmos.posts.v2.MsgAddPostAttachment": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, content, editor }: _225.MsgAddPostAttachment) => {
                        subspace_id: string;
                        post_id: string;
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        editor: string;
                    };
                    fromAmino: ({ subspace_id, post_id, content, editor }: {
                        subspace_id: string;
                        post_id: string;
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        editor: string;
                    }) => _225.MsgAddPostAttachment;
                };
                "/desmos.posts.v2.MsgRemovePostAttachment": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, attachmentId, editor }: _225.MsgRemovePostAttachment) => {
                        subspace_id: string;
                        post_id: string;
                        attachment_id: number;
                        editor: string;
                    };
                    fromAmino: ({ subspace_id, post_id, attachment_id, editor }: {
                        subspace_id: string;
                        post_id: string;
                        attachment_id: number;
                        editor: string;
                    }) => _225.MsgRemovePostAttachment;
                };
                "/desmos.posts.v2.MsgAnswerPoll": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, pollId, answersIndexes, signer }: _225.MsgAnswerPoll) => {
                        subspace_id: string;
                        post_id: string;
                        poll_id: number;
                        answers_indexes: number[];
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, post_id, poll_id, answers_indexes, signer }: {
                        subspace_id: string;
                        post_id: string;
                        poll_id: number;
                        answers_indexes: number[];
                        signer: string;
                    }) => _225.MsgAnswerPoll;
                };
            };
            QuerySubspacePostsRequest: {
                encode(message: _226.QuerySubspacePostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QuerySubspacePostsRequest;
                fromJSON(object: any): _226.QuerySubspacePostsRequest;
                toJSON(message: _226.QuerySubspacePostsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _226.QuerySubspacePostsRequest;
            };
            QuerySubspacePostsResponse: {
                encode(message: _226.QuerySubspacePostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QuerySubspacePostsResponse;
                fromJSON(object: any): _226.QuerySubspacePostsResponse;
                toJSON(message: _226.QuerySubspacePostsResponse): unknown;
                fromPartial(object: {
                    posts?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: any;
                        externalId?: string;
                        text?: string;
                        entities?: {
                            hashtags?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            mentions?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            urls?: {
                                start?: any;
                                end?: any;
                                url?: string;
                                displayUrl?: string;
                            }[];
                        };
                        tags?: string[];
                        author?: string;
                        conversationId?: any;
                        referencedPosts?: {
                            type?: _224.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _224.ReplySetting;
                        creationDate?: Date;
                        lastEditedDate?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _226.QuerySubspacePostsResponse;
            };
            QuerySectionPostsRequest: {
                encode(message: _226.QuerySectionPostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QuerySectionPostsRequest;
                fromJSON(object: any): _226.QuerySectionPostsRequest;
                toJSON(message: _226.QuerySectionPostsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _226.QuerySectionPostsRequest;
            };
            QuerySectionPostsResponse: {
                encode(message: _226.QuerySectionPostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QuerySectionPostsResponse;
                fromJSON(object: any): _226.QuerySectionPostsResponse;
                toJSON(message: _226.QuerySectionPostsResponse): unknown;
                fromPartial(object: {
                    posts?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: any;
                        externalId?: string;
                        text?: string;
                        entities?: {
                            hashtags?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            mentions?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            urls?: {
                                start?: any;
                                end?: any;
                                url?: string;
                                displayUrl?: string;
                            }[];
                        };
                        tags?: string[];
                        author?: string;
                        conversationId?: any;
                        referencedPosts?: {
                            type?: _224.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _224.ReplySetting;
                        creationDate?: Date;
                        lastEditedDate?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _226.QuerySectionPostsResponse;
            };
            QueryPostRequest: {
                encode(message: _226.QueryPostRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPostRequest;
                fromJSON(object: any): _226.QueryPostRequest;
                toJSON(message: _226.QueryPostRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                }): _226.QueryPostRequest;
            };
            QueryPostResponse: {
                encode(message: _226.QueryPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPostResponse;
                fromJSON(object: any): _226.QueryPostResponse;
                toJSON(message: _226.QueryPostResponse): unknown;
                fromPartial(object: {
                    post?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: any;
                        externalId?: string;
                        text?: string;
                        entities?: {
                            hashtags?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            mentions?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            urls?: {
                                start?: any;
                                end?: any;
                                url?: string;
                                displayUrl?: string;
                            }[];
                        };
                        tags?: string[];
                        author?: string;
                        conversationId?: any;
                        referencedPosts?: {
                            type?: _224.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _224.ReplySetting;
                        creationDate?: Date;
                        lastEditedDate?: Date;
                    };
                }): _226.QueryPostResponse;
            };
            QueryPostAttachmentsRequest: {
                encode(message: _226.QueryPostAttachmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPostAttachmentsRequest;
                fromJSON(object: any): _226.QueryPostAttachmentsRequest;
                toJSON(message: _226.QueryPostAttachmentsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _226.QueryPostAttachmentsRequest;
            };
            QueryPostAttachmentsResponse: {
                encode(message: _226.QueryPostAttachmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPostAttachmentsResponse;
                fromJSON(object: any): _226.QueryPostAttachmentsResponse;
                toJSON(message: _226.QueryPostAttachmentsResponse): unknown;
                fromPartial(object: {
                    attachments?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _226.QueryPostAttachmentsResponse;
            };
            QueryPollAnswersRequest: {
                encode(message: _226.QueryPollAnswersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPollAnswersRequest;
                fromJSON(object: any): _226.QueryPollAnswersRequest;
                toJSON(message: _226.QueryPollAnswersRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    user?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _226.QueryPollAnswersRequest;
            };
            QueryPollAnswersResponse: {
                encode(message: _226.QueryPollAnswersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryPollAnswersResponse;
                fromJSON(object: any): _226.QueryPollAnswersResponse;
                toJSON(message: _226.QueryPollAnswersResponse): unknown;
                fromPartial(object: {
                    answers?: {
                        subspaceId?: any;
                        postId?: any;
                        pollId?: number;
                        answersIndexes?: number[];
                        user?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _226.QueryPollAnswersResponse;
            };
            QueryParamsRequest: {
                encode(_: _226.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryParamsRequest;
                fromJSON(_: any): _226.QueryParamsRequest;
                toJSON(_: _226.QueryParamsRequest): unknown;
                fromPartial(_: {}): _226.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _226.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryParamsResponse;
                fromJSON(object: any): _226.QueryParamsResponse;
                toJSON(message: _226.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxTextLength?: number;
                    };
                }): _226.QueryParamsResponse;
            };
            MsgCreatePost: {
                encode(message: _225.MsgCreatePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgCreatePost;
                fromJSON(object: any): _225.MsgCreatePost;
                toJSON(message: _225.MsgCreatePost): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    externalId?: string;
                    text?: string;
                    entities?: {
                        hashtags?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        mentions?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        urls?: {
                            start?: any;
                            end?: any;
                            url?: string;
                            displayUrl?: string;
                        }[];
                    };
                    tags?: string[];
                    attachments?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    author?: string;
                    conversationId?: any;
                    replySettings?: _224.ReplySetting;
                    referencedPosts?: {
                        type?: _224.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                }): _225.MsgCreatePost;
            };
            MsgCreatePostResponse: {
                encode(message: _225.MsgCreatePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgCreatePostResponse;
                fromJSON(object: any): _225.MsgCreatePostResponse;
                toJSON(message: _225.MsgCreatePostResponse): unknown;
                fromPartial(object: {
                    postId?: any;
                    creationDate?: Date;
                }): _225.MsgCreatePostResponse;
            };
            MsgEditPost: {
                encode(message: _225.MsgEditPost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgEditPost;
                fromJSON(object: any): _225.MsgEditPost;
                toJSON(message: _225.MsgEditPost): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    text?: string;
                    entities?: {
                        hashtags?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        mentions?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        urls?: {
                            start?: any;
                            end?: any;
                            url?: string;
                            displayUrl?: string;
                        }[];
                    };
                    tags?: string[];
                    editor?: string;
                }): _225.MsgEditPost;
            };
            MsgEditPostResponse: {
                encode(message: _225.MsgEditPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgEditPostResponse;
                fromJSON(object: any): _225.MsgEditPostResponse;
                toJSON(message: _225.MsgEditPostResponse): unknown;
                fromPartial(object: {
                    editDate?: Date;
                }): _225.MsgEditPostResponse;
            };
            MsgDeletePost: {
                encode(message: _225.MsgDeletePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgDeletePost;
                fromJSON(object: any): _225.MsgDeletePost;
                toJSON(message: _225.MsgDeletePost): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    signer?: string;
                }): _225.MsgDeletePost;
            };
            MsgDeletePostResponse: {
                encode(_: _225.MsgDeletePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgDeletePostResponse;
                fromJSON(_: any): _225.MsgDeletePostResponse;
                toJSON(_: _225.MsgDeletePostResponse): unknown;
                fromPartial(_: {}): _225.MsgDeletePostResponse;
            };
            MsgAddPostAttachment: {
                encode(message: _225.MsgAddPostAttachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgAddPostAttachment;
                fromJSON(object: any): _225.MsgAddPostAttachment;
                toJSON(message: _225.MsgAddPostAttachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    editor?: string;
                }): _225.MsgAddPostAttachment;
            };
            MsgAddPostAttachmentResponse: {
                encode(message: _225.MsgAddPostAttachmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgAddPostAttachmentResponse;
                fromJSON(object: any): _225.MsgAddPostAttachmentResponse;
                toJSON(message: _225.MsgAddPostAttachmentResponse): unknown;
                fromPartial(object: {
                    attachmentId?: number;
                    editDate?: Date;
                }): _225.MsgAddPostAttachmentResponse;
            };
            MsgRemovePostAttachment: {
                encode(message: _225.MsgRemovePostAttachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgRemovePostAttachment;
                fromJSON(object: any): _225.MsgRemovePostAttachment;
                toJSON(message: _225.MsgRemovePostAttachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    attachmentId?: number;
                    editor?: string;
                }): _225.MsgRemovePostAttachment;
            };
            MsgRemovePostAttachmentResponse: {
                encode(message: _225.MsgRemovePostAttachmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgRemovePostAttachmentResponse;
                fromJSON(object: any): _225.MsgRemovePostAttachmentResponse;
                toJSON(message: _225.MsgRemovePostAttachmentResponse): unknown;
                fromPartial(object: {
                    editDate?: Date;
                }): _225.MsgRemovePostAttachmentResponse;
            };
            MsgAnswerPoll: {
                encode(message: _225.MsgAnswerPoll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgAnswerPoll;
                fromJSON(object: any): _225.MsgAnswerPoll;
                toJSON(message: _225.MsgAnswerPoll): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    signer?: string;
                }): _225.MsgAnswerPoll;
            };
            MsgAnswerPollResponse: {
                encode(_: _225.MsgAnswerPollResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MsgAnswerPollResponse;
                fromJSON(_: any): _225.MsgAnswerPollResponse;
                toJSON(_: _225.MsgAnswerPollResponse): unknown;
                fromPartial(_: {}): _225.MsgAnswerPollResponse;
            };
            postReferenceTypeFromJSON(object: any): _224.PostReferenceType;
            postReferenceTypeToJSON(object: _224.PostReferenceType): string;
            replySettingFromJSON(object: any): _224.ReplySetting;
            replySettingToJSON(object: _224.ReplySetting): string;
            PostReferenceType: typeof _224.PostReferenceType;
            ReplySetting: typeof _224.ReplySetting;
            Post: {
                encode(message: _224.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Post;
                fromJSON(object: any): _224.Post;
                toJSON(message: _224.Post): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    id?: any;
                    externalId?: string;
                    text?: string;
                    entities?: {
                        hashtags?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        mentions?: {
                            start?: any;
                            end?: any;
                            tag?: string;
                        }[];
                        urls?: {
                            start?: any;
                            end?: any;
                            url?: string;
                            displayUrl?: string;
                        }[];
                    };
                    tags?: string[];
                    author?: string;
                    conversationId?: any;
                    referencedPosts?: {
                        type?: _224.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                    replySettings?: _224.ReplySetting;
                    creationDate?: Date;
                    lastEditedDate?: Date;
                }): _224.Post;
            };
            PostReference: {
                encode(message: _224.PostReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.PostReference;
                fromJSON(object: any): _224.PostReference;
                toJSON(message: _224.PostReference): unknown;
                fromPartial(object: {
                    type?: _224.PostReferenceType;
                    postId?: any;
                    position?: any;
                }): _224.PostReference;
            };
            Entities: {
                encode(message: _224.Entities, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Entities;
                fromJSON(object: any): _224.Entities;
                toJSON(message: _224.Entities): unknown;
                fromPartial(object: {
                    hashtags?: {
                        start?: any;
                        end?: any;
                        tag?: string;
                    }[];
                    mentions?: {
                        start?: any;
                        end?: any;
                        tag?: string;
                    }[];
                    urls?: {
                        start?: any;
                        end?: any;
                        url?: string;
                        displayUrl?: string;
                    }[];
                }): _224.Entities;
            };
            TextTag: {
                encode(message: _224.TextTag, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.TextTag;
                fromJSON(object: any): _224.TextTag;
                toJSON(message: _224.TextTag): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    tag?: string;
                }): _224.TextTag;
            };
            Url: {
                encode(message: _224.Url, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Url;
                fromJSON(object: any): _224.Url;
                toJSON(message: _224.Url): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    url?: string;
                    displayUrl?: string;
                }): _224.Url;
            };
            Attachment: {
                encode(message: _224.Attachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Attachment;
                fromJSON(object: any): _224.Attachment;
                toJSON(message: _224.Attachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    id?: number;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _224.Attachment;
            };
            Media: {
                encode(message: _224.Media, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Media;
                fromJSON(object: any): _224.Media;
                toJSON(message: _224.Media): unknown;
                fromPartial(object: {
                    uri?: string;
                    mimeType?: string;
                }): _224.Media;
            };
            Poll: {
                encode(message: _224.Poll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Poll;
                fromJSON(object: any): _224.Poll;
                toJSON(message: _224.Poll): unknown;
                fromPartial(object: {
                    question?: string;
                    providedAnswers?: {
                        text?: string;
                        attachments?: {
                            subspaceId?: any;
                            postId?: any;
                            id?: number;
                            content?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                    endDate?: Date;
                    allowsMultipleAnswers?: boolean;
                    allowsAnswerEdits?: boolean;
                    finalTallyResults?: {
                        results?: {
                            answerIndex?: number;
                            votes?: any;
                        }[];
                    };
                }): _224.Poll;
            };
            Poll_ProvidedAnswer: {
                encode(message: _224.Poll_ProvidedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Poll_ProvidedAnswer;
                fromJSON(object: any): _224.Poll_ProvidedAnswer;
                toJSON(message: _224.Poll_ProvidedAnswer): unknown;
                fromPartial(object: {
                    text?: string;
                    attachments?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _224.Poll_ProvidedAnswer;
            };
            UserAnswer: {
                encode(message: _224.UserAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.UserAnswer;
                fromJSON(object: any): _224.UserAnswer;
                toJSON(message: _224.UserAnswer): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    user?: string;
                }): _224.UserAnswer;
            };
            PollTallyResults: {
                encode(message: _224.PollTallyResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.PollTallyResults;
                fromJSON(object: any): _224.PollTallyResults;
                toJSON(message: _224.PollTallyResults): unknown;
                fromPartial(object: {
                    results?: {
                        answerIndex?: number;
                        votes?: any;
                    }[];
                }): _224.PollTallyResults;
            };
            PollTallyResults_AnswerResult: {
                encode(message: _224.PollTallyResults_AnswerResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.PollTallyResults_AnswerResult;
                fromJSON(object: any): _224.PollTallyResults_AnswerResult;
                toJSON(message: _224.PollTallyResults_AnswerResult): unknown;
                fromPartial(object: {
                    answerIndex?: number;
                    votes?: any;
                }): _224.PollTallyResults_AnswerResult;
            };
            Params: {
                encode(message: _224.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Params;
                fromJSON(object: any): _224.Params;
                toJSON(message: _224.Params): unknown;
                fromPartial(object: {
                    maxTextLength?: number;
                }): _224.Params;
            };
            GenesisState: {
                encode(message: _223.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.GenesisState;
                fromJSON(object: any): _223.GenesisState;
                toJSON(message: _223.GenesisState): unknown;
                fromPartial(object: {
                    subspacesData?: {
                        subspaceId?: any;
                        initialPostId?: any;
                    }[];
                    postsData?: {
                        subspaceId?: any;
                        postId?: any;
                        initialAttachmentId?: number;
                    }[];
                    posts?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: any;
                        externalId?: string;
                        text?: string;
                        entities?: {
                            hashtags?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            mentions?: {
                                start?: any;
                                end?: any;
                                tag?: string;
                            }[];
                            urls?: {
                                start?: any;
                                end?: any;
                                url?: string;
                                displayUrl?: string;
                            }[];
                        };
                        tags?: string[];
                        author?: string;
                        conversationId?: any;
                        referencedPosts?: {
                            type?: _224.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _224.ReplySetting;
                        creationDate?: Date;
                        lastEditedDate?: Date;
                    }[];
                    attachments?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    activePolls?: {
                        subspaceId?: any;
                        postId?: any;
                        pollId?: number;
                        endDate?: Date;
                    }[];
                    userAnswers?: {
                        subspaceId?: any;
                        postId?: any;
                        pollId?: number;
                        answersIndexes?: number[];
                        user?: string;
                    }[];
                    params?: {
                        maxTextLength?: number;
                    };
                }): _223.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _223.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SubspaceDataEntry;
                fromJSON(object: any): _223.SubspaceDataEntry;
                toJSON(message: _223.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    initialPostId?: any;
                }): _223.SubspaceDataEntry;
            };
            PostDataEntry: {
                encode(message: _223.PostDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.PostDataEntry;
                fromJSON(object: any): _223.PostDataEntry;
                toJSON(message: _223.PostDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    initialAttachmentId?: number;
                }): _223.PostDataEntry;
            };
            ActivePollData: {
                encode(message: _223.ActivePollData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.ActivePollData;
                fromJSON(object: any): _223.ActivePollData;
                toJSON(message: _223.ActivePollData): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    endDate?: Date;
                }): _223.ActivePollData;
            };
        };
    }
    namespace profiles {
        const v1beta1: {
            Relationship: {
                encode(message: _231.Relationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Relationship;
                fromJSON(object: any): _231.Relationship;
                toJSON(message: _231.Relationship): unknown;
                fromPartial(object: {
                    creator?: string;
                    recipient?: string;
                    subspaceId?: string;
                }): _231.Relationship;
            };
            UserBlock: {
                encode(message: _231.UserBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.UserBlock;
                fromJSON(object: any): _231.UserBlock;
                toJSON(message: _231.UserBlock): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: string;
                }): _231.UserBlock;
            };
            Profile: {
                encode(message: _230.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Profile;
                fromJSON(object: any): _230.Profile;
                toJSON(message: _230.Profile): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    dtag?: string;
                    nickname?: string;
                    bio?: string;
                    pictures?: {
                        profile?: string;
                        cover?: string;
                    };
                    creationDate?: Date;
                }): _230.Profile;
            };
            Pictures: {
                encode(message: _230.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Pictures;
                fromJSON(object: any): _230.Pictures;
                toJSON(message: _230.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _230.Pictures;
            };
            DTagTransferRequest: {
                encode(message: _229.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.DTagTransferRequest;
                fromJSON(object: any): _229.DTagTransferRequest;
                toJSON(message: _229.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _229.DTagTransferRequest;
            };
            ChainLink: {
                encode(message: _228.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ChainLink;
                fromJSON(object: any): _228.ChainLink;
                toJSON(message: _228.ChainLink): unknown;
                fromPartial(object: {
                    user?: string;
                    address?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: string;
                        plainText?: string;
                    };
                    chainConfig?: {
                        name?: string;
                    };
                    creationTime?: Date;
                }): _228.ChainLink;
            };
            ChainConfig: {
                encode(message: _228.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ChainConfig;
                fromJSON(object: any): _228.ChainConfig;
                toJSON(message: _228.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _228.ChainConfig;
            };
            Proof: {
                encode(message: _228.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Proof;
                fromJSON(object: any): _228.Proof;
                toJSON(message: _228.Proof): unknown;
                fromPartial(object: {
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    signature?: string;
                    plainText?: string;
                }): _228.Proof;
            };
            Bech32Address: {
                encode(message: _228.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Bech32Address;
                fromJSON(object: any): _228.Bech32Address;
                toJSON(message: _228.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _228.Bech32Address;
            };
            Base58Address: {
                encode(message: _228.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Base58Address;
                fromJSON(object: any): _228.Base58Address;
                toJSON(message: _228.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _228.Base58Address;
            };
            HexAddress: {
                encode(message: _228.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.HexAddress;
                fromJSON(object: any): _228.HexAddress;
                toJSON(message: _228.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _228.HexAddress;
            };
            applicationLinkStateFromJSON(object: any): _227.ApplicationLinkState;
            applicationLinkStateToJSON(object: _227.ApplicationLinkState): string;
            ApplicationLinkState: typeof _227.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _227.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.ApplicationLink;
                fromJSON(object: any): _227.ApplicationLink;
                toJSON(message: _227.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _227.ApplicationLinkState;
                    oracleRequest?: {
                        id?: any;
                        oracleScriptId?: any;
                        callData?: {
                            application?: string;
                            callData?: string;
                        };
                        clientId?: string;
                    };
                    result?: {
                        success?: {
                            value?: string;
                            signature?: string;
                        };
                        failed?: {
                            error?: string;
                        };
                    };
                    creationTime?: Date;
                }): _227.ApplicationLink;
            };
            Data: {
                encode(message: _227.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Data;
                fromJSON(object: any): _227.Data;
                toJSON(message: _227.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _227.Data;
            };
            OracleRequest: {
                encode(message: _227.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.OracleRequest;
                fromJSON(object: any): _227.OracleRequest;
                toJSON(message: _227.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _227.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _227.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.OracleRequest_CallData;
                fromJSON(object: any): _227.OracleRequest_CallData;
                toJSON(message: _227.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _227.OracleRequest_CallData;
            };
            Result: {
                encode(message: _227.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Result;
                fromJSON(object: any): _227.Result;
                toJSON(message: _227.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _227.Result;
            };
            Result_Success: {
                encode(message: _227.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Result_Success;
                fromJSON(object: any): _227.Result_Success;
                toJSON(message: _227.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _227.Result_Success;
            };
            Result_Failed: {
                encode(message: _227.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Result_Failed;
                fromJSON(object: any): _227.Result_Failed;
                toJSON(message: _227.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _227.Result_Failed;
            };
        };
        const v2: {
            Profile: {
                encode(message: _236.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Profile;
                fromJSON(object: any): _236.Profile;
                toJSON(message: _236.Profile): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    dtag?: string;
                    nickname?: string;
                    bio?: string;
                    pictures?: {
                        profile?: string;
                        cover?: string;
                    };
                    creationDate?: Date;
                }): _236.Profile;
            };
            Pictures: {
                encode(message: _236.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Pictures;
                fromJSON(object: any): _236.Pictures;
                toJSON(message: _236.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _236.Pictures;
            };
            Params: {
                encode(message: _235.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Params;
                fromJSON(object: any): _235.Params;
                toJSON(message: _235.Params): unknown;
                fromPartial(object: {
                    nickname?: {
                        minLength?: Uint8Array;
                        maxLength?: Uint8Array;
                    };
                    dtag?: {
                        regEx?: string;
                        minLength?: Uint8Array;
                        maxLength?: Uint8Array;
                    };
                    bio?: {
                        maxLength?: Uint8Array;
                    };
                    oracle?: {
                        scriptId?: any;
                        askCount?: any;
                        minCount?: any;
                        prepareGas?: any;
                        executeGas?: any;
                        feeAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _235.Params;
            };
            NicknameParams: {
                encode(message: _235.NicknameParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.NicknameParams;
                fromJSON(object: any): _235.NicknameParams;
                toJSON(message: _235.NicknameParams): unknown;
                fromPartial(object: {
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _235.NicknameParams;
            };
            DTagParams: {
                encode(message: _235.DTagParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.DTagParams;
                fromJSON(object: any): _235.DTagParams;
                toJSON(message: _235.DTagParams): unknown;
                fromPartial(object: {
                    regEx?: string;
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _235.DTagParams;
            };
            BioParams: {
                encode(message: _235.BioParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.BioParams;
                fromJSON(object: any): _235.BioParams;
                toJSON(message: _235.BioParams): unknown;
                fromPartial(object: {
                    maxLength?: Uint8Array;
                }): _235.BioParams;
            };
            OracleParams: {
                encode(message: _235.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.OracleParams;
                fromJSON(object: any): _235.OracleParams;
                toJSON(message: _235.OracleParams): unknown;
                fromPartial(object: {
                    scriptId?: any;
                    askCount?: any;
                    minCount?: any;
                    prepareGas?: any;
                    executeGas?: any;
                    feeAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _235.OracleParams;
            };
            DTagTransferRequest: {
                encode(message: _234.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DTagTransferRequest;
                fromJSON(object: any): _234.DTagTransferRequest;
                toJSON(message: _234.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _234.DTagTransferRequest;
            };
            ChainLink: {
                encode(message: _233.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.ChainLink;
                fromJSON(object: any): _233.ChainLink;
                toJSON(message: _233.ChainLink): unknown;
                fromPartial(object: {
                    user?: string;
                    address?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        plainText?: string;
                    };
                    chainConfig?: {
                        name?: string;
                    };
                    creationTime?: Date;
                }): _233.ChainLink;
            };
            ChainConfig: {
                encode(message: _233.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.ChainConfig;
                fromJSON(object: any): _233.ChainConfig;
                toJSON(message: _233.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _233.ChainConfig;
            };
            Proof: {
                encode(message: _233.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Proof;
                fromJSON(object: any): _233.Proof;
                toJSON(message: _233.Proof): unknown;
                fromPartial(object: {
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    signature?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    plainText?: string;
                }): _233.Proof;
            };
            Bech32Address: {
                encode(message: _233.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Bech32Address;
                fromJSON(object: any): _233.Bech32Address;
                toJSON(message: _233.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _233.Bech32Address;
            };
            Base58Address: {
                encode(message: _233.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Base58Address;
                fromJSON(object: any): _233.Base58Address;
                toJSON(message: _233.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _233.Base58Address;
            };
            HexAddress: {
                encode(message: _233.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.HexAddress;
                fromJSON(object: any): _233.HexAddress;
                toJSON(message: _233.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _233.HexAddress;
            };
            SingleSignatureData: {
                encode(message: _233.SingleSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.SingleSignatureData;
                fromJSON(object: any): _233.SingleSignatureData;
                toJSON(message: _233.SingleSignatureData): unknown;
                fromPartial(object: {
                    mode?: import("../cosmos/tx/signing/v1beta1/signing").SignMode;
                    signature?: Uint8Array;
                }): _233.SingleSignatureData;
            };
            MultiSignatureData: {
                encode(message: _233.MultiSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MultiSignatureData;
                fromJSON(object: any): _233.MultiSignatureData;
                toJSON(message: _233.MultiSignatureData): unknown;
                fromPartial(object: {
                    bitArray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    signatures?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _233.MultiSignatureData;
            };
            applicationLinkStateFromJSON(object: any): _232.ApplicationLinkState;
            applicationLinkStateToJSON(object: _232.ApplicationLinkState): string;
            ApplicationLinkState: typeof _232.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _232.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.ApplicationLink;
                fromJSON(object: any): _232.ApplicationLink;
                toJSON(message: _232.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _232.ApplicationLinkState;
                    oracleRequest?: {
                        id?: any;
                        oracleScriptId?: any;
                        callData?: {
                            application?: string;
                            callData?: string;
                        };
                        clientId?: string;
                    };
                    result?: {
                        success?: {
                            value?: string;
                            signature?: string;
                        };
                        failed?: {
                            error?: string;
                        };
                    };
                    creationTime?: Date;
                }): _232.ApplicationLink;
            };
            Data: {
                encode(message: _232.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Data;
                fromJSON(object: any): _232.Data;
                toJSON(message: _232.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _232.Data;
            };
            OracleRequest: {
                encode(message: _232.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.OracleRequest;
                fromJSON(object: any): _232.OracleRequest;
                toJSON(message: _232.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _232.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _232.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.OracleRequest_CallData;
                fromJSON(object: any): _232.OracleRequest_CallData;
                toJSON(message: _232.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _232.OracleRequest_CallData;
            };
            Result: {
                encode(message: _232.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Result;
                fromJSON(object: any): _232.Result;
                toJSON(message: _232.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _232.Result;
            };
            Result_Success: {
                encode(message: _232.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Result_Success;
                fromJSON(object: any): _232.Result_Success;
                toJSON(message: _232.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _232.Result_Success;
            };
            Result_Failed: {
                encode(message: _232.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Result_Failed;
                fromJSON(object: any): _232.Result_Failed;
                toJSON(message: _232.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _232.Result_Failed;
            };
        };
        const v3: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    saveProfile(value: _248.MsgSaveProfile): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProfile(value: _248.MsgDeleteProfile): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestDTagTransfer(value: _247.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDTagTransferRequest(value: _247.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptDTagTransferRequest(value: _247.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refuseDTagTransferRequest(value: _247.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    linkChainAccount(value: _246.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlinkChainAccount(value: _246.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDefaultExternalAddress(value: _246.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    linkApplication(value: _245.MsgLinkApplication): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlinkApplication(value: _245.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    saveProfile(value: _248.MsgSaveProfile): {
                        typeUrl: string;
                        value: _248.MsgSaveProfile;
                    };
                    deleteProfile(value: _248.MsgDeleteProfile): {
                        typeUrl: string;
                        value: _248.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: _247.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: _247.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: _247.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: _247.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: _247.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: _246.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: _246.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: _246.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: _246.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: _246.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: _246.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: _245.MsgLinkApplication): {
                        typeUrl: string;
                        value: _245.MsgLinkApplication;
                    };
                    unlinkApplication(value: _245.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: _245.MsgUnlinkApplication;
                    };
                };
                toJSON: {
                    saveProfile(value: _248.MsgSaveProfile): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProfile(value: _248.MsgDeleteProfile): {
                        typeUrl: string;
                        value: unknown;
                    };
                    requestDTagTransfer(value: _247.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelDTagTransferRequest(value: _247.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acceptDTagTransferRequest(value: _247.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    refuseDTagTransferRequest(value: _247.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    linkChainAccount(value: _246.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlinkChainAccount(value: _246.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDefaultExternalAddress(value: _246.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    linkApplication(value: _245.MsgLinkApplication): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlinkApplication(value: _245.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    saveProfile(value: any): {
                        typeUrl: string;
                        value: _248.MsgSaveProfile;
                    };
                    deleteProfile(value: any): {
                        typeUrl: string;
                        value: _248.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: any): {
                        typeUrl: string;
                        value: _247.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _247.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _247.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _247.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: any): {
                        typeUrl: string;
                        value: _246.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: any): {
                        typeUrl: string;
                        value: _246.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: any): {
                        typeUrl: string;
                        value: _246.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: any): {
                        typeUrl: string;
                        value: _245.MsgLinkApplication;
                    };
                    unlinkApplication(value: any): {
                        typeUrl: string;
                        value: _245.MsgUnlinkApplication;
                    };
                };
                fromPartial: {
                    saveProfile(value: _248.MsgSaveProfile): {
                        typeUrl: string;
                        value: _248.MsgSaveProfile;
                    };
                    deleteProfile(value: _248.MsgDeleteProfile): {
                        typeUrl: string;
                        value: _248.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: _247.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: _247.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: _247.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: _247.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: _247.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: _247.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: _246.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: _246.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: _246.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: _246.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: _246.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: _246.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: _245.MsgLinkApplication): {
                        typeUrl: string;
                        value: _245.MsgLinkApplication;
                    };
                    unlinkApplication(value: _245.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: _245.MsgUnlinkApplication;
                    };
                };
            };
            AminoConverter: {
                "/desmos.profiles.v3.MsgSaveProfile": {
                    aminoType: string;
                    toAmino: ({ dtag, nickname, bio, profilePicture, coverPicture, creator }: _248.MsgSaveProfile) => {
                        dtag: string;
                        nickname: string;
                        bio: string;
                        profile_picture: string;
                        cover_picture: string;
                        creator: string;
                    };
                    fromAmino: ({ dtag, nickname, bio, profile_picture, cover_picture, creator }: {
                        dtag: string;
                        nickname: string;
                        bio: string;
                        profile_picture: string;
                        cover_picture: string;
                        creator: string;
                    }) => _248.MsgSaveProfile;
                };
                "/desmos.profiles.v3.MsgDeleteProfile": {
                    aminoType: string;
                    toAmino: ({ creator }: _248.MsgDeleteProfile) => {
                        creator: string;
                    };
                    fromAmino: ({ creator }: {
                        creator: string;
                    }) => _248.MsgDeleteProfile;
                };
                "/desmos.profiles.v3.MsgRequestDTagTransfer": {
                    aminoType: string;
                    toAmino: ({ receiver, sender }: _247.MsgRequestDTagTransfer) => {
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ receiver, sender }: {
                        receiver: string;
                        sender: string;
                    }) => _247.MsgRequestDTagTransfer;
                };
                "/desmos.profiles.v3.MsgCancelDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ receiver, sender }: _247.MsgCancelDTagTransferRequest) => {
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ receiver, sender }: {
                        receiver: string;
                        sender: string;
                    }) => _247.MsgCancelDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgAcceptDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ newDtag, sender, receiver }: _247.MsgAcceptDTagTransferRequest) => {
                        new_dtag: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ new_dtag, sender, receiver }: {
                        new_dtag: string;
                        sender: string;
                        receiver: string;
                    }) => _247.MsgAcceptDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgRefuseDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ sender, receiver }: _247.MsgRefuseDTagTransferRequest) => {
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ sender, receiver }: {
                        sender: string;
                        receiver: string;
                    }) => _247.MsgRefuseDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgLinkChainAccount": {
                    aminoType: string;
                    toAmino: ({ chainAddress, proof, chainConfig, signer }: _246.MsgLinkChainAccount) => {
                        chain_address: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proof: {
                            pub_key: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signature: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            plain_text: string;
                        };
                        chain_config: {
                            name: string;
                        };
                        signer: string;
                    };
                    fromAmino: ({ chain_address, proof, chain_config, signer }: {
                        chain_address: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proof: {
                            pub_key: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signature: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            plain_text: string;
                        };
                        chain_config: {
                            name: string;
                        };
                        signer: string;
                    }) => _246.MsgLinkChainAccount;
                };
                "/desmos.profiles.v3.MsgUnlinkChainAccount": {
                    aminoType: string;
                    toAmino: ({ owner, chainName, target }: _246.MsgUnlinkChainAccount) => {
                        owner: string;
                        chain_name: string;
                        target: string;
                    };
                    fromAmino: ({ owner, chain_name, target }: {
                        owner: string;
                        chain_name: string;
                        target: string;
                    }) => _246.MsgUnlinkChainAccount;
                };
                "/desmos.profiles.v3.MsgSetDefaultExternalAddress": {
                    aminoType: string;
                    toAmino: ({ chainName, target, signer }: _246.MsgSetDefaultExternalAddress) => {
                        chain_name: string;
                        target: string;
                        signer: string;
                    };
                    fromAmino: ({ chain_name, target, signer }: {
                        chain_name: string;
                        target: string;
                        signer: string;
                    }) => _246.MsgSetDefaultExternalAddress;
                };
                "/desmos.profiles.v3.MsgLinkApplication": {
                    aminoType: string;
                    toAmino: ({ sender, linkData, callData, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp }: _245.MsgLinkApplication) => {
                        sender: string;
                        link_data: {
                            application: string;
                            username: string;
                        };
                        call_data: string;
                        source_port: string;
                        source_channel: string;
                        timeout_height: import("@osmonauts/helpers").AminoHeight;
                        timeout_timestamp: string;
                    };
                    fromAmino: ({ sender, link_data, call_data, source_port, source_channel, timeout_height, timeout_timestamp }: {
                        sender: string;
                        link_data: {
                            application: string;
                            username: string;
                        };
                        call_data: string;
                        source_port: string;
                        source_channel: string;
                        timeout_height: import("@osmonauts/helpers").AminoHeight;
                        timeout_timestamp: string;
                    }) => _245.MsgLinkApplication;
                };
                "/desmos.profiles.v3.MsgUnlinkApplication": {
                    aminoType: string;
                    toAmino: ({ application, username, signer }: _245.MsgUnlinkApplication) => {
                        application: string;
                        username: string;
                        signer: string;
                    };
                    fromAmino: ({ application, username, signer }: {
                        application: string;
                        username: string;
                        signer: string;
                    }) => _245.MsgUnlinkApplication;
                };
            };
            QueryProfileRequest: {
                encode(message: _253.QueryProfileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProfileRequest;
                fromJSON(object: any): _253.QueryProfileRequest;
                toJSON(message: _253.QueryProfileRequest): unknown;
                fromPartial(object: {
                    user?: string;
                }): _253.QueryProfileRequest;
            };
            QueryProfileResponse: {
                encode(message: _253.QueryProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProfileResponse;
                fromJSON(object: any): _253.QueryProfileResponse;
                toJSON(message: _253.QueryProfileResponse): unknown;
                fromPartial(object: {
                    profile?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _253.QueryProfileResponse;
            };
            QueryParamsRequest: {
                encode(_: _252.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.QueryParamsRequest;
                fromJSON(_: any): _252.QueryParamsRequest;
                toJSON(_: _252.QueryParamsRequest): unknown;
                fromPartial(_: {}): _252.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _252.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.QueryParamsResponse;
                fromJSON(object: any): _252.QueryParamsResponse;
                toJSON(message: _252.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        nickname?: {
                            minLength?: Uint8Array;
                            maxLength?: Uint8Array;
                        };
                        dtag?: {
                            regEx?: string;
                            minLength?: Uint8Array;
                            maxLength?: Uint8Array;
                        };
                        bio?: {
                            maxLength?: Uint8Array;
                        };
                        oracle?: {
                            scriptId?: any;
                            askCount?: any;
                            minCount?: any;
                            prepareGas?: any;
                            executeGas?: any;
                            feeAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        appLinks?: {
                            validityDuration?: string;
                        };
                    };
                }): _252.QueryParamsResponse;
            };
            QueryIncomingDTagTransferRequestsRequest: {
                encode(message: _251.QueryIncomingDTagTransferRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryIncomingDTagTransferRequestsRequest;
                fromJSON(object: any): _251.QueryIncomingDTagTransferRequestsRequest;
                toJSON(message: _251.QueryIncomingDTagTransferRequestsRequest): unknown;
                fromPartial(object: {
                    receiver?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryIncomingDTagTransferRequestsRequest;
            };
            QueryIncomingDTagTransferRequestsResponse: {
                encode(message: _251.QueryIncomingDTagTransferRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryIncomingDTagTransferRequestsResponse;
                fromJSON(object: any): _251.QueryIncomingDTagTransferRequestsResponse;
                toJSON(message: _251.QueryIncomingDTagTransferRequestsResponse): unknown;
                fromPartial(object: {
                    requests?: {
                        dtagToTrade?: string;
                        sender?: string;
                        receiver?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryIncomingDTagTransferRequestsResponse;
            };
            QueryChainLinksRequest: {
                encode(message: _250.QueryChainLinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryChainLinksRequest;
                fromJSON(object: any): _250.QueryChainLinksRequest;
                toJSON(message: _250.QueryChainLinksRequest): unknown;
                fromPartial(object: {
                    user?: string;
                    chainName?: string;
                    target?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _250.QueryChainLinksRequest;
            };
            QueryChainLinksResponse: {
                encode(message: _250.QueryChainLinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryChainLinksResponse;
                fromJSON(object: any): _250.QueryChainLinksResponse;
                toJSON(message: _250.QueryChainLinksResponse): unknown;
                fromPartial(object: {
                    links?: {
                        user?: string;
                        address?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: {
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            signature?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            plainText?: string;
                        };
                        chainConfig?: {
                            name?: string;
                        };
                        creationTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _250.QueryChainLinksResponse;
            };
            QueryChainLinkOwnersRequest: {
                encode(message: _250.QueryChainLinkOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryChainLinkOwnersRequest;
                fromJSON(object: any): _250.QueryChainLinkOwnersRequest;
                toJSON(message: _250.QueryChainLinkOwnersRequest): unknown;
                fromPartial(object: {
                    chainName?: string;
                    target?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _250.QueryChainLinkOwnersRequest;
            };
            QueryChainLinkOwnersResponse: {
                encode(message: _250.QueryChainLinkOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryChainLinkOwnersResponse;
                fromJSON(object: any): _250.QueryChainLinkOwnersResponse;
                toJSON(message: _250.QueryChainLinkOwnersResponse): unknown;
                fromPartial(object: {
                    owners?: {
                        user?: string;
                        chainName?: string;
                        target?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _250.QueryChainLinkOwnersResponse;
            };
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails: {
                encode(message: _250.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
                fromJSON(object: any): _250.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
                toJSON(message: _250.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails): unknown;
                fromPartial(object: {
                    user?: string;
                    chainName?: string;
                    target?: string;
                }): _250.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
            };
            QueryDefaultExternalAddressesRequest: {
                encode(message: _250.QueryDefaultExternalAddressesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryDefaultExternalAddressesRequest;
                fromJSON(object: any): _250.QueryDefaultExternalAddressesRequest;
                toJSON(message: _250.QueryDefaultExternalAddressesRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    chainName?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _250.QueryDefaultExternalAddressesRequest;
            };
            QueryDefaultExternalAddressesResponse: {
                encode(message: _250.QueryDefaultExternalAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryDefaultExternalAddressesResponse;
                fromJSON(object: any): _250.QueryDefaultExternalAddressesResponse;
                toJSON(message: _250.QueryDefaultExternalAddressesResponse): unknown;
                fromPartial(object: {
                    links?: {
                        user?: string;
                        address?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: {
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            signature?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            plainText?: string;
                        };
                        chainConfig?: {
                            name?: string;
                        };
                        creationTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _250.QueryDefaultExternalAddressesResponse;
            };
            QueryApplicationLinksRequest: {
                encode(message: _249.QueryApplicationLinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinksRequest;
                fromJSON(object: any): _249.QueryApplicationLinksRequest;
                toJSON(message: _249.QueryApplicationLinksRequest): unknown;
                fromPartial(object: {
                    user?: string;
                    application?: string;
                    username?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _249.QueryApplicationLinksRequest;
            };
            QueryApplicationLinksResponse: {
                encode(message: _249.QueryApplicationLinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinksResponse;
                fromJSON(object: any): _249.QueryApplicationLinksResponse;
                toJSON(message: _249.QueryApplicationLinksResponse): unknown;
                fromPartial(object: {
                    links?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _238.ApplicationLinkState;
                        oracleRequest?: {
                            id?: any;
                            oracleScriptId?: any;
                            callData?: {
                                application?: string;
                                callData?: string;
                            };
                            clientId?: string;
                        };
                        result?: {
                            success?: {
                                value?: string;
                                signature?: string;
                            };
                            failed?: {
                                error?: string;
                            };
                        };
                        creationTime?: Date;
                        expirationTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _249.QueryApplicationLinksResponse;
            };
            QueryApplicationLinkByClientIDRequest: {
                encode(message: _249.QueryApplicationLinkByClientIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinkByClientIDRequest;
                fromJSON(object: any): _249.QueryApplicationLinkByClientIDRequest;
                toJSON(message: _249.QueryApplicationLinkByClientIDRequest): unknown;
                fromPartial(object: {
                    clientId?: string;
                }): _249.QueryApplicationLinkByClientIDRequest;
            };
            QueryApplicationLinkByClientIDResponse: {
                encode(message: _249.QueryApplicationLinkByClientIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinkByClientIDResponse;
                fromJSON(object: any): _249.QueryApplicationLinkByClientIDResponse;
                toJSON(message: _249.QueryApplicationLinkByClientIDResponse): unknown;
                fromPartial(object: {
                    link?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _238.ApplicationLinkState;
                        oracleRequest?: {
                            id?: any;
                            oracleScriptId?: any;
                            callData?: {
                                application?: string;
                                callData?: string;
                            };
                            clientId?: string;
                        };
                        result?: {
                            success?: {
                                value?: string;
                                signature?: string;
                            };
                            failed?: {
                                error?: string;
                            };
                        };
                        creationTime?: Date;
                        expirationTime?: Date;
                    };
                }): _249.QueryApplicationLinkByClientIDResponse;
            };
            QueryApplicationLinkOwnersRequest: {
                encode(message: _249.QueryApplicationLinkOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinkOwnersRequest;
                fromJSON(object: any): _249.QueryApplicationLinkOwnersRequest;
                toJSON(message: _249.QueryApplicationLinkOwnersRequest): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _249.QueryApplicationLinkOwnersRequest;
            };
            QueryApplicationLinkOwnersResponse: {
                encode(message: _249.QueryApplicationLinkOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinkOwnersResponse;
                fromJSON(object: any): _249.QueryApplicationLinkOwnersResponse;
                toJSON(message: _249.QueryApplicationLinkOwnersResponse): unknown;
                fromPartial(object: {
                    owners?: {
                        user?: string;
                        application?: string;
                        username?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _249.QueryApplicationLinkOwnersResponse;
            };
            QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails: {
                encode(message: _249.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
                fromJSON(object: any): _249.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
                toJSON(message: _249.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails): unknown;
                fromPartial(object: {
                    user?: string;
                    application?: string;
                    username?: string;
                }): _249.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
            };
            MsgSaveProfile: {
                encode(message: _248.MsgSaveProfile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.MsgSaveProfile;
                fromJSON(object: any): _248.MsgSaveProfile;
                toJSON(message: _248.MsgSaveProfile): unknown;
                fromPartial(object: {
                    dtag?: string;
                    nickname?: string;
                    bio?: string;
                    profilePicture?: string;
                    coverPicture?: string;
                    creator?: string;
                }): _248.MsgSaveProfile;
            };
            MsgSaveProfileResponse: {
                encode(_: _248.MsgSaveProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.MsgSaveProfileResponse;
                fromJSON(_: any): _248.MsgSaveProfileResponse;
                toJSON(_: _248.MsgSaveProfileResponse): unknown;
                fromPartial(_: {}): _248.MsgSaveProfileResponse;
            };
            MsgDeleteProfile: {
                encode(message: _248.MsgDeleteProfile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.MsgDeleteProfile;
                fromJSON(object: any): _248.MsgDeleteProfile;
                toJSON(message: _248.MsgDeleteProfile): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _248.MsgDeleteProfile;
            };
            MsgDeleteProfileResponse: {
                encode(_: _248.MsgDeleteProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.MsgDeleteProfileResponse;
                fromJSON(_: any): _248.MsgDeleteProfileResponse;
                toJSON(_: _248.MsgDeleteProfileResponse): unknown;
                fromPartial(_: {}): _248.MsgDeleteProfileResponse;
            };
            MsgRequestDTagTransfer: {
                encode(message: _247.MsgRequestDTagTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRequestDTagTransfer;
                fromJSON(object: any): _247.MsgRequestDTagTransfer;
                toJSON(message: _247.MsgRequestDTagTransfer): unknown;
                fromPartial(object: {
                    receiver?: string;
                    sender?: string;
                }): _247.MsgRequestDTagTransfer;
            };
            MsgRequestDTagTransferResponse: {
                encode(_: _247.MsgRequestDTagTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRequestDTagTransferResponse;
                fromJSON(_: any): _247.MsgRequestDTagTransferResponse;
                toJSON(_: _247.MsgRequestDTagTransferResponse): unknown;
                fromPartial(_: {}): _247.MsgRequestDTagTransferResponse;
            };
            MsgCancelDTagTransferRequest: {
                encode(message: _247.MsgCancelDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelDTagTransferRequest;
                fromJSON(object: any): _247.MsgCancelDTagTransferRequest;
                toJSON(message: _247.MsgCancelDTagTransferRequest): unknown;
                fromPartial(object: {
                    receiver?: string;
                    sender?: string;
                }): _247.MsgCancelDTagTransferRequest;
            };
            MsgCancelDTagTransferRequestResponse: {
                encode(_: _247.MsgCancelDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelDTagTransferRequestResponse;
                fromJSON(_: any): _247.MsgCancelDTagTransferRequestResponse;
                toJSON(_: _247.MsgCancelDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _247.MsgCancelDTagTransferRequestResponse;
            };
            MsgAcceptDTagTransferRequest: {
                encode(message: _247.MsgAcceptDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgAcceptDTagTransferRequest;
                fromJSON(object: any): _247.MsgAcceptDTagTransferRequest;
                toJSON(message: _247.MsgAcceptDTagTransferRequest): unknown;
                fromPartial(object: {
                    newDtag?: string;
                    sender?: string;
                    receiver?: string;
                }): _247.MsgAcceptDTagTransferRequest;
            };
            MsgAcceptDTagTransferRequestResponse: {
                encode(_: _247.MsgAcceptDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgAcceptDTagTransferRequestResponse;
                fromJSON(_: any): _247.MsgAcceptDTagTransferRequestResponse;
                toJSON(_: _247.MsgAcceptDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _247.MsgAcceptDTagTransferRequestResponse;
            };
            MsgRefuseDTagTransferRequest: {
                encode(message: _247.MsgRefuseDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRefuseDTagTransferRequest;
                fromJSON(object: any): _247.MsgRefuseDTagTransferRequest;
                toJSON(message: _247.MsgRefuseDTagTransferRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    receiver?: string;
                }): _247.MsgRefuseDTagTransferRequest;
            };
            MsgRefuseDTagTransferRequestResponse: {
                encode(_: _247.MsgRefuseDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRefuseDTagTransferRequestResponse;
                fromJSON(_: any): _247.MsgRefuseDTagTransferRequestResponse;
                toJSON(_: _247.MsgRefuseDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _247.MsgRefuseDTagTransferRequestResponse;
            };
            MsgLinkChainAccount: {
                encode(message: _246.MsgLinkChainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgLinkChainAccount;
                fromJSON(object: any): _246.MsgLinkChainAccount;
                toJSON(message: _246.MsgLinkChainAccount): unknown;
                fromPartial(object: {
                    chainAddress?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        plainText?: string;
                    };
                    chainConfig?: {
                        name?: string;
                    };
                    signer?: string;
                }): _246.MsgLinkChainAccount;
            };
            MsgLinkChainAccountResponse: {
                encode(_: _246.MsgLinkChainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgLinkChainAccountResponse;
                fromJSON(_: any): _246.MsgLinkChainAccountResponse;
                toJSON(_: _246.MsgLinkChainAccountResponse): unknown;
                fromPartial(_: {}): _246.MsgLinkChainAccountResponse;
            };
            MsgUnlinkChainAccount: {
                encode(message: _246.MsgUnlinkChainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgUnlinkChainAccount;
                fromJSON(object: any): _246.MsgUnlinkChainAccount;
                toJSON(message: _246.MsgUnlinkChainAccount): unknown;
                fromPartial(object: {
                    owner?: string;
                    chainName?: string;
                    target?: string;
                }): _246.MsgUnlinkChainAccount;
            };
            MsgUnlinkChainAccountResponse: {
                encode(_: _246.MsgUnlinkChainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgUnlinkChainAccountResponse;
                fromJSON(_: any): _246.MsgUnlinkChainAccountResponse;
                toJSON(_: _246.MsgUnlinkChainAccountResponse): unknown;
                fromPartial(_: {}): _246.MsgUnlinkChainAccountResponse;
            };
            MsgSetDefaultExternalAddress: {
                encode(message: _246.MsgSetDefaultExternalAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgSetDefaultExternalAddress;
                fromJSON(object: any): _246.MsgSetDefaultExternalAddress;
                toJSON(message: _246.MsgSetDefaultExternalAddress): unknown;
                fromPartial(object: {
                    chainName?: string;
                    target?: string;
                    signer?: string;
                }): _246.MsgSetDefaultExternalAddress;
            };
            MsgSetDefaultExternalAddressResponse: {
                encode(_: _246.MsgSetDefaultExternalAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgSetDefaultExternalAddressResponse;
                fromJSON(_: any): _246.MsgSetDefaultExternalAddressResponse;
                toJSON(_: _246.MsgSetDefaultExternalAddressResponse): unknown;
                fromPartial(_: {}): _246.MsgSetDefaultExternalAddressResponse;
            };
            MsgLinkApplication: {
                encode(message: _245.MsgLinkApplication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgLinkApplication;
                fromJSON(object: any): _245.MsgLinkApplication;
                toJSON(message: _245.MsgLinkApplication): unknown;
                fromPartial(object: {
                    sender?: string;
                    linkData?: {
                        application?: string;
                        username?: string;
                    };
                    callData?: string;
                    sourcePort?: string;
                    sourceChannel?: string;
                    timeoutHeight?: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    };
                    timeoutTimestamp?: any;
                }): _245.MsgLinkApplication;
            };
            MsgLinkApplicationResponse: {
                encode(_: _245.MsgLinkApplicationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgLinkApplicationResponse;
                fromJSON(_: any): _245.MsgLinkApplicationResponse;
                toJSON(_: _245.MsgLinkApplicationResponse): unknown;
                fromPartial(_: {}): _245.MsgLinkApplicationResponse;
            };
            MsgUnlinkApplication: {
                encode(message: _245.MsgUnlinkApplication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUnlinkApplication;
                fromJSON(object: any): _245.MsgUnlinkApplication;
                toJSON(message: _245.MsgUnlinkApplication): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                    signer?: string;
                }): _245.MsgUnlinkApplication;
            };
            MsgUnlinkApplicationResponse: {
                encode(_: _245.MsgUnlinkApplicationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUnlinkApplicationResponse;
                fromJSON(_: any): _245.MsgUnlinkApplicationResponse;
                toJSON(_: _245.MsgUnlinkApplicationResponse): unknown;
                fromPartial(_: {}): _245.MsgUnlinkApplicationResponse;
            };
            Profile: {
                encode(message: _243.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Profile;
                fromJSON(object: any): _243.Profile;
                toJSON(message: _243.Profile): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    dtag?: string;
                    nickname?: string;
                    bio?: string;
                    pictures?: {
                        profile?: string;
                        cover?: string;
                    };
                    creationDate?: Date;
                }): _243.Profile;
            };
            Pictures: {
                encode(message: _243.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Pictures;
                fromJSON(object: any): _243.Pictures;
                toJSON(message: _243.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _243.Pictures;
            };
            Params: {
                encode(message: _242.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Params;
                fromJSON(object: any): _242.Params;
                toJSON(message: _242.Params): unknown;
                fromPartial(object: {
                    nickname?: {
                        minLength?: Uint8Array;
                        maxLength?: Uint8Array;
                    };
                    dtag?: {
                        regEx?: string;
                        minLength?: Uint8Array;
                        maxLength?: Uint8Array;
                    };
                    bio?: {
                        maxLength?: Uint8Array;
                    };
                    oracle?: {
                        scriptId?: any;
                        askCount?: any;
                        minCount?: any;
                        prepareGas?: any;
                        executeGas?: any;
                        feeAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    appLinks?: {
                        validityDuration?: string;
                    };
                }): _242.Params;
            };
            NicknameParams: {
                encode(message: _242.NicknameParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.NicknameParams;
                fromJSON(object: any): _242.NicknameParams;
                toJSON(message: _242.NicknameParams): unknown;
                fromPartial(object: {
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _242.NicknameParams;
            };
            DTagParams: {
                encode(message: _242.DTagParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.DTagParams;
                fromJSON(object: any): _242.DTagParams;
                toJSON(message: _242.DTagParams): unknown;
                fromPartial(object: {
                    regEx?: string;
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _242.DTagParams;
            };
            BioParams: {
                encode(message: _242.BioParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.BioParams;
                fromJSON(object: any): _242.BioParams;
                toJSON(message: _242.BioParams): unknown;
                fromPartial(object: {
                    maxLength?: Uint8Array;
                }): _242.BioParams;
            };
            OracleParams: {
                encode(message: _242.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.OracleParams;
                fromJSON(object: any): _242.OracleParams;
                toJSON(message: _242.OracleParams): unknown;
                fromPartial(object: {
                    scriptId?: any;
                    askCount?: any;
                    minCount?: any;
                    prepareGas?: any;
                    executeGas?: any;
                    feeAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _242.OracleParams;
            };
            AppLinksParams: {
                encode(message: _242.AppLinksParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.AppLinksParams;
                fromJSON(object: any): _242.AppLinksParams;
                toJSON(message: _242.AppLinksParams): unknown;
                fromPartial(object: {
                    validityDuration?: string;
                }): _242.AppLinksParams;
            };
            LinkChainAccountPacketData: {
                encode(message: _241.LinkChainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.LinkChainAccountPacketData;
                fromJSON(object: any): _241.LinkChainAccountPacketData;
                toJSON(message: _241.LinkChainAccountPacketData): unknown;
                fromPartial(object: {
                    sourceAddress?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    sourceProof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        plainText?: string;
                    };
                    sourceChainConfig?: {
                        name?: string;
                    };
                    destinationAddress?: string;
                    destinationProof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        plainText?: string;
                    };
                }): _241.LinkChainAccountPacketData;
            };
            LinkChainAccountPacketAck: {
                encode(message: _241.LinkChainAccountPacketAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.LinkChainAccountPacketAck;
                fromJSON(object: any): _241.LinkChainAccountPacketAck;
                toJSON(message: _241.LinkChainAccountPacketAck): unknown;
                fromPartial(object: {
                    sourceAddress?: string;
                }): _241.LinkChainAccountPacketAck;
            };
            DTagTransferRequest: {
                encode(message: _240.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.DTagTransferRequest;
                fromJSON(object: any): _240.DTagTransferRequest;
                toJSON(message: _240.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _240.DTagTransferRequest;
            };
            signatureValueTypeFromJSON(object: any): _239.SignatureValueType;
            signatureValueTypeToJSON(object: _239.SignatureValueType): string;
            SignatureValueType: typeof _239.SignatureValueType;
            ChainLink: {
                encode(message: _239.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ChainLink;
                fromJSON(object: any): _239.ChainLink;
                toJSON(message: _239.ChainLink): unknown;
                fromPartial(object: {
                    user?: string;
                    address?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proof?: {
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        plainText?: string;
                    };
                    chainConfig?: {
                        name?: string;
                    };
                    creationTime?: Date;
                }): _239.ChainLink;
            };
            ChainConfig: {
                encode(message: _239.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ChainConfig;
                fromJSON(object: any): _239.ChainConfig;
                toJSON(message: _239.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _239.ChainConfig;
            };
            Proof: {
                encode(message: _239.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Proof;
                fromJSON(object: any): _239.Proof;
                toJSON(message: _239.Proof): unknown;
                fromPartial(object: {
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    signature?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    plainText?: string;
                }): _239.Proof;
            };
            Bech32Address: {
                encode(message: _239.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Bech32Address;
                fromJSON(object: any): _239.Bech32Address;
                toJSON(message: _239.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _239.Bech32Address;
            };
            Base58Address: {
                encode(message: _239.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Base58Address;
                fromJSON(object: any): _239.Base58Address;
                toJSON(message: _239.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _239.Base58Address;
            };
            HexAddress: {
                encode(message: _239.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.HexAddress;
                fromJSON(object: any): _239.HexAddress;
                toJSON(message: _239.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _239.HexAddress;
            };
            SingleSignature: {
                encode(message: _239.SingleSignature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.SingleSignature;
                fromJSON(object: any): _239.SingleSignature;
                toJSON(message: _239.SingleSignature): unknown;
                fromPartial(object: {
                    valueType?: _239.SignatureValueType;
                    signature?: Uint8Array;
                }): _239.SingleSignature;
            };
            CosmosMultiSignature: {
                encode(message: _239.CosmosMultiSignature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.CosmosMultiSignature;
                fromJSON(object: any): _239.CosmosMultiSignature;
                toJSON(message: _239.CosmosMultiSignature): unknown;
                fromPartial(object: {
                    bitArray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    signatures?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _239.CosmosMultiSignature;
            };
            applicationLinkStateFromJSON(object: any): _238.ApplicationLinkState;
            applicationLinkStateToJSON(object: _238.ApplicationLinkState): string;
            ApplicationLinkState: typeof _238.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _238.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ApplicationLink;
                fromJSON(object: any): _238.ApplicationLink;
                toJSON(message: _238.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _238.ApplicationLinkState;
                    oracleRequest?: {
                        id?: any;
                        oracleScriptId?: any;
                        callData?: {
                            application?: string;
                            callData?: string;
                        };
                        clientId?: string;
                    };
                    result?: {
                        success?: {
                            value?: string;
                            signature?: string;
                        };
                        failed?: {
                            error?: string;
                        };
                    };
                    creationTime?: Date;
                    expirationTime?: Date;
                }): _238.ApplicationLink;
            };
            Data: {
                encode(message: _238.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Data;
                fromJSON(object: any): _238.Data;
                toJSON(message: _238.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _238.Data;
            };
            OracleRequest: {
                encode(message: _238.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.OracleRequest;
                fromJSON(object: any): _238.OracleRequest;
                toJSON(message: _238.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _238.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _238.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.OracleRequest_CallData;
                fromJSON(object: any): _238.OracleRequest_CallData;
                toJSON(message: _238.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _238.OracleRequest_CallData;
            };
            Result: {
                encode(message: _238.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Result;
                fromJSON(object: any): _238.Result;
                toJSON(message: _238.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _238.Result;
            };
            Result_Success: {
                encode(message: _238.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Result_Success;
                fromJSON(object: any): _238.Result_Success;
                toJSON(message: _238.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _238.Result_Success;
            };
            Result_Failed: {
                encode(message: _238.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Result_Failed;
                fromJSON(object: any): _238.Result_Failed;
                toJSON(message: _238.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _238.Result_Failed;
            };
            GenesisState: {
                encode(message: _237.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.GenesisState;
                fromJSON(object: any): _237.GenesisState;
                toJSON(message: _237.GenesisState): unknown;
                fromPartial(object: {
                    dtagTransferRequests?: {
                        dtagToTrade?: string;
                        sender?: string;
                        receiver?: string;
                    }[];
                    chainLinks?: {
                        user?: string;
                        address?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: {
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            signature?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            plainText?: string;
                        };
                        chainConfig?: {
                            name?: string;
                        };
                        creationTime?: Date;
                    }[];
                    applicationLinks?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _238.ApplicationLinkState;
                        oracleRequest?: {
                            id?: any;
                            oracleScriptId?: any;
                            callData?: {
                                application?: string;
                                callData?: string;
                            };
                            clientId?: string;
                        };
                        result?: {
                            success?: {
                                value?: string;
                                signature?: string;
                            };
                            failed?: {
                                error?: string;
                            };
                        };
                        creationTime?: Date;
                        expirationTime?: Date;
                    }[];
                    defaultExternalAddresses?: {
                        owner?: string;
                        chainName?: string;
                        target?: string;
                    }[];
                    ibcPortId?: string;
                    params?: {
                        nickname?: {
                            minLength?: Uint8Array;
                            maxLength?: Uint8Array;
                        };
                        dtag?: {
                            regEx?: string;
                            minLength?: Uint8Array;
                            maxLength?: Uint8Array;
                        };
                        bio?: {
                            maxLength?: Uint8Array;
                        };
                        oracle?: {
                            scriptId?: any;
                            askCount?: any;
                            minCount?: any;
                            prepareGas?: any;
                            executeGas?: any;
                            feeAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        appLinks?: {
                            validityDuration?: string;
                        };
                    };
                }): _237.GenesisState;
            };
            DefaultExternalAddressEntry: {
                encode(message: _237.DefaultExternalAddressEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.DefaultExternalAddressEntry;
                fromJSON(object: any): _237.DefaultExternalAddressEntry;
                toJSON(message: _237.DefaultExternalAddressEntry): unknown;
                fromPartial(object: {
                    owner?: string;
                    chainName?: string;
                    target?: string;
                }): _237.DefaultExternalAddressEntry;
            };
        };
    }
    namespace reactions {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addReaction(value: _257.MsgAddReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeReaction(value: _257.MsgRemoveReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRegisteredReaction(value: _257.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRegisteredReaction(value: _257.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeRegisteredReaction(value: _257.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setReactionsParams(value: _257.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addReaction(value: _257.MsgAddReaction): {
                        typeUrl: string;
                        value: _257.MsgAddReaction;
                    };
                    removeReaction(value: _257.MsgRemoveReaction): {
                        typeUrl: string;
                        value: _257.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: _257.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: _257.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: _257.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: _257.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: _257.MsgSetReactionsParams;
                    };
                };
                toJSON: {
                    addReaction(value: _257.MsgAddReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeReaction(value: _257.MsgRemoveReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addRegisteredReaction(value: _257.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRegisteredReaction(value: _257.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeRegisteredReaction(value: _257.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setReactionsParams(value: _257.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addReaction(value: any): {
                        typeUrl: string;
                        value: _257.MsgAddReaction;
                    };
                    removeReaction(value: any): {
                        typeUrl: string;
                        value: _257.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _257.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _257.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _257.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: any): {
                        typeUrl: string;
                        value: _257.MsgSetReactionsParams;
                    };
                };
                fromPartial: {
                    addReaction(value: _257.MsgAddReaction): {
                        typeUrl: string;
                        value: _257.MsgAddReaction;
                    };
                    removeReaction(value: _257.MsgRemoveReaction): {
                        typeUrl: string;
                        value: _257.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: _257.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: _257.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: _257.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: _257.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: _257.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: _257.MsgSetReactionsParams;
                    };
                };
            };
            AminoConverter: {
                "/desmos.reactions.v1.MsgAddReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, value, user }: _257.MsgAddReaction) => {
                        subspace_id: string;
                        post_id: string;
                        value: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        user: string;
                    };
                    fromAmino: ({ subspace_id, post_id, value, user }: {
                        subspace_id: string;
                        post_id: string;
                        value: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        user: string;
                    }) => _257.MsgAddReaction;
                };
                "/desmos.reactions.v1.MsgRemoveReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, reactionId, user }: _257.MsgRemoveReaction) => {
                        subspace_id: string;
                        post_id: string;
                        reaction_id: number;
                        user: string;
                    };
                    fromAmino: ({ subspace_id, post_id, reaction_id, user }: {
                        subspace_id: string;
                        post_id: string;
                        reaction_id: number;
                        user: string;
                    }) => _257.MsgRemoveReaction;
                };
                "/desmos.reactions.v1.MsgAddRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, shorthandCode, displayValue, user }: _257.MsgAddRegisteredReaction) => {
                        subspace_id: string;
                        shorthand_code: string;
                        display_value: string;
                        user: string;
                    };
                    fromAmino: ({ subspace_id, shorthand_code, display_value, user }: {
                        subspace_id: string;
                        shorthand_code: string;
                        display_value: string;
                        user: string;
                    }) => _257.MsgAddRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgEditRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReactionId, shorthandCode, displayValue, user }: _257.MsgEditRegisteredReaction) => {
                        subspace_id: string;
                        registered_reaction_id: number;
                        shorthand_code: string;
                        display_value: string;
                        user: string;
                    };
                    fromAmino: ({ subspace_id, registered_reaction_id, shorthand_code, display_value, user }: {
                        subspace_id: string;
                        registered_reaction_id: number;
                        shorthand_code: string;
                        display_value: string;
                        user: string;
                    }) => _257.MsgEditRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReactionId, user }: _257.MsgRemoveRegisteredReaction) => {
                        subspace_id: string;
                        registered_reaction_id: number;
                        user: string;
                    };
                    fromAmino: ({ subspace_id, registered_reaction_id, user }: {
                        subspace_id: string;
                        registered_reaction_id: number;
                        user: string;
                    }) => _257.MsgRemoveRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgSetReactionsParams": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReaction, freeText, user }: _257.MsgSetReactionsParams) => {
                        subspace_id: string;
                        registered_reaction: {
                            enabled: boolean;
                        };
                        free_text: {
                            enabled: boolean;
                            max_length: number;
                            reg_ex: string;
                        };
                        user: string;
                    };
                    fromAmino: ({ subspace_id, registered_reaction, free_text, user }: {
                        subspace_id: string;
                        registered_reaction: {
                            enabled: boolean;
                        };
                        free_text: {
                            enabled: boolean;
                            max_length: number;
                            reg_ex: string;
                        };
                        user: string;
                    }) => _257.MsgSetReactionsParams;
                };
            };
            QueryReactionsRequest: {
                encode(message: _258.QueryReactionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionsRequest;
                fromJSON(object: any): _258.QueryReactionsRequest;
                toJSON(message: _258.QueryReactionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    user?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _258.QueryReactionsRequest;
            };
            QueryReactionsResponse: {
                encode(message: _258.QueryReactionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionsResponse;
                fromJSON(object: any): _258.QueryReactionsResponse;
                toJSON(message: _258.QueryReactionsResponse): unknown;
                fromPartial(object: {
                    reactions?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        author?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _258.QueryReactionsResponse;
            };
            QueryReactionRequest: {
                encode(message: _258.QueryReactionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionRequest;
                fromJSON(object: any): _258.QueryReactionRequest;
                toJSON(message: _258.QueryReactionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                }): _258.QueryReactionRequest;
            };
            QueryReactionResponse: {
                encode(message: _258.QueryReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionResponse;
                fromJSON(object: any): _258.QueryReactionResponse;
                toJSON(message: _258.QueryReactionResponse): unknown;
                fromPartial(object: {
                    reaction?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        author?: string;
                    };
                }): _258.QueryReactionResponse;
            };
            QueryRegisteredReactionsRequest: {
                encode(message: _258.QueryRegisteredReactionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryRegisteredReactionsRequest;
                fromJSON(object: any): _258.QueryRegisteredReactionsRequest;
                toJSON(message: _258.QueryRegisteredReactionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _258.QueryRegisteredReactionsRequest;
            };
            QueryRegisteredReactionsResponse: {
                encode(message: _258.QueryRegisteredReactionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryRegisteredReactionsResponse;
                fromJSON(object: any): _258.QueryRegisteredReactionsResponse;
                toJSON(message: _258.QueryRegisteredReactionsResponse): unknown;
                fromPartial(object: {
                    registeredReactions?: {
                        subspaceId?: any;
                        id?: number;
                        shorthandCode?: string;
                        displayValue?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _258.QueryRegisteredReactionsResponse;
            };
            QueryRegisteredReactionRequest: {
                encode(message: _258.QueryRegisteredReactionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryRegisteredReactionRequest;
                fromJSON(object: any): _258.QueryRegisteredReactionRequest;
                toJSON(message: _258.QueryRegisteredReactionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reactionId?: number;
                }): _258.QueryRegisteredReactionRequest;
            };
            QueryRegisteredReactionResponse: {
                encode(message: _258.QueryRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryRegisteredReactionResponse;
                fromJSON(object: any): _258.QueryRegisteredReactionResponse;
                toJSON(message: _258.QueryRegisteredReactionResponse): unknown;
                fromPartial(object: {
                    registeredReaction?: {
                        subspaceId?: any;
                        id?: number;
                        shorthandCode?: string;
                        displayValue?: string;
                    };
                }): _258.QueryRegisteredReactionResponse;
            };
            QueryReactionsParamsRequest: {
                encode(message: _258.QueryReactionsParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionsParamsRequest;
                fromJSON(object: any): _258.QueryReactionsParamsRequest;
                toJSON(message: _258.QueryReactionsParamsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _258.QueryReactionsParamsRequest;
            };
            QueryReactionsParamsResponse: {
                encode(message: _258.QueryReactionsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryReactionsParamsResponse;
                fromJSON(object: any): _258.QueryReactionsParamsResponse;
                toJSON(message: _258.QueryReactionsParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        subspaceId?: any;
                        registeredReaction?: {
                            enabled?: boolean;
                        };
                        freeText?: {
                            enabled?: boolean;
                            maxLength?: number;
                            regEx?: string;
                        };
                    };
                }): _258.QueryReactionsParamsResponse;
            };
            MsgAddReaction: {
                encode(message: _257.MsgAddReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgAddReaction;
                fromJSON(object: any): _257.MsgAddReaction;
                toJSON(message: _257.MsgAddReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    user?: string;
                }): _257.MsgAddReaction;
            };
            MsgAddReactionResponse: {
                encode(message: _257.MsgAddReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgAddReactionResponse;
                fromJSON(object: any): _257.MsgAddReactionResponse;
                toJSON(message: _257.MsgAddReactionResponse): unknown;
                fromPartial(object: {
                    reactionId?: number;
                }): _257.MsgAddReactionResponse;
            };
            MsgRemoveReaction: {
                encode(message: _257.MsgRemoveReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgRemoveReaction;
                fromJSON(object: any): _257.MsgRemoveReaction;
                toJSON(message: _257.MsgRemoveReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                    user?: string;
                }): _257.MsgRemoveReaction;
            };
            MsgRemoveReactionResponse: {
                encode(_: _257.MsgRemoveReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgRemoveReactionResponse;
                fromJSON(_: any): _257.MsgRemoveReactionResponse;
                toJSON(_: _257.MsgRemoveReactionResponse): unknown;
                fromPartial(_: {}): _257.MsgRemoveReactionResponse;
            };
            MsgAddRegisteredReaction: {
                encode(message: _257.MsgAddRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgAddRegisteredReaction;
                fromJSON(object: any): _257.MsgAddRegisteredReaction;
                toJSON(message: _257.MsgAddRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    shorthandCode?: string;
                    displayValue?: string;
                    user?: string;
                }): _257.MsgAddRegisteredReaction;
            };
            MsgAddRegisteredReactionResponse: {
                encode(message: _257.MsgAddRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgAddRegisteredReactionResponse;
                fromJSON(object: any): _257.MsgAddRegisteredReactionResponse;
                toJSON(message: _257.MsgAddRegisteredReactionResponse): unknown;
                fromPartial(object: {
                    registeredReactionId?: number;
                }): _257.MsgAddRegisteredReactionResponse;
            };
            MsgEditRegisteredReaction: {
                encode(message: _257.MsgEditRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgEditRegisteredReaction;
                fromJSON(object: any): _257.MsgEditRegisteredReaction;
                toJSON(message: _257.MsgEditRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                    shorthandCode?: string;
                    displayValue?: string;
                    user?: string;
                }): _257.MsgEditRegisteredReaction;
            };
            MsgEditRegisteredReactionResponse: {
                encode(_: _257.MsgEditRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgEditRegisteredReactionResponse;
                fromJSON(_: any): _257.MsgEditRegisteredReactionResponse;
                toJSON(_: _257.MsgEditRegisteredReactionResponse): unknown;
                fromPartial(_: {}): _257.MsgEditRegisteredReactionResponse;
            };
            MsgRemoveRegisteredReaction: {
                encode(message: _257.MsgRemoveRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgRemoveRegisteredReaction;
                fromJSON(object: any): _257.MsgRemoveRegisteredReaction;
                toJSON(message: _257.MsgRemoveRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                    user?: string;
                }): _257.MsgRemoveRegisteredReaction;
            };
            MsgRemoveRegisteredReactionResponse: {
                encode(_: _257.MsgRemoveRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgRemoveRegisteredReactionResponse;
                fromJSON(_: any): _257.MsgRemoveRegisteredReactionResponse;
                toJSON(_: _257.MsgRemoveRegisteredReactionResponse): unknown;
                fromPartial(_: {}): _257.MsgRemoveRegisteredReactionResponse;
            };
            MsgSetReactionsParams: {
                encode(message: _257.MsgSetReactionsParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgSetReactionsParams;
                fromJSON(object: any): _257.MsgSetReactionsParams;
                toJSON(message: _257.MsgSetReactionsParams): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReaction?: {
                        enabled?: boolean;
                    };
                    freeText?: {
                        enabled?: boolean;
                        maxLength?: number;
                        regEx?: string;
                    };
                    user?: string;
                }): _257.MsgSetReactionsParams;
            };
            MsgSetReactionsParamsResponse: {
                encode(_: _257.MsgSetReactionsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.MsgSetReactionsParamsResponse;
                fromJSON(_: any): _257.MsgSetReactionsParamsResponse;
                toJSON(_: _257.MsgSetReactionsParamsResponse): unknown;
                fromPartial(_: {}): _257.MsgSetReactionsParamsResponse;
            };
            Reaction: {
                encode(message: _256.Reaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Reaction;
                fromJSON(object: any): _256.Reaction;
                toJSON(message: _256.Reaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    id?: number;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    author?: string;
                }): _256.Reaction;
            };
            RegisteredReactionValue: {
                encode(message: _256.RegisteredReactionValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RegisteredReactionValue;
                fromJSON(object: any): _256.RegisteredReactionValue;
                toJSON(message: _256.RegisteredReactionValue): unknown;
                fromPartial(object: {
                    registeredReactionId?: number;
                }): _256.RegisteredReactionValue;
            };
            FreeTextValue: {
                encode(message: _256.FreeTextValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.FreeTextValue;
                fromJSON(object: any): _256.FreeTextValue;
                toJSON(message: _256.FreeTextValue): unknown;
                fromPartial(object: {
                    text?: string;
                }): _256.FreeTextValue;
            };
            RegisteredReaction: {
                encode(message: _256.RegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RegisteredReaction;
                fromJSON(object: any): _256.RegisteredReaction;
                toJSON(message: _256.RegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    shorthandCode?: string;
                    displayValue?: string;
                }): _256.RegisteredReaction;
            };
            SubspaceReactionsParams: {
                encode(message: _256.SubspaceReactionsParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.SubspaceReactionsParams;
                fromJSON(object: any): _256.SubspaceReactionsParams;
                toJSON(message: _256.SubspaceReactionsParams): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReaction?: {
                        enabled?: boolean;
                    };
                    freeText?: {
                        enabled?: boolean;
                        maxLength?: number;
                        regEx?: string;
                    };
                }): _256.SubspaceReactionsParams;
            };
            FreeTextValueParams: {
                encode(message: _256.FreeTextValueParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.FreeTextValueParams;
                fromJSON(object: any): _256.FreeTextValueParams;
                toJSON(message: _256.FreeTextValueParams): unknown;
                fromPartial(object: {
                    enabled?: boolean;
                    maxLength?: number;
                    regEx?: string;
                }): _256.FreeTextValueParams;
            };
            RegisteredReactionValueParams: {
                encode(message: _256.RegisteredReactionValueParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RegisteredReactionValueParams;
                fromJSON(object: any): _256.RegisteredReactionValueParams;
                toJSON(message: _256.RegisteredReactionValueParams): unknown;
                fromPartial(object: {
                    enabled?: boolean;
                }): _256.RegisteredReactionValueParams;
            };
            GenesisState: {
                encode(message: _255.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GenesisState;
                fromJSON(object: any): _255.GenesisState;
                toJSON(message: _255.GenesisState): unknown;
                fromPartial(object: {
                    subspacesData?: {
                        subspaceId?: any;
                        registeredReactionId?: number;
                    }[];
                    registeredReactions?: {
                        subspaceId?: any;
                        id?: number;
                        shorthandCode?: string;
                        displayValue?: string;
                    }[];
                    postsData?: {
                        subspaceId?: any;
                        postId?: any;
                        reactionId?: number;
                    }[];
                    reactions?: {
                        subspaceId?: any;
                        postId?: any;
                        id?: number;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        author?: string;
                    }[];
                    subspacesParams?: {
                        subspaceId?: any;
                        registeredReaction?: {
                            enabled?: boolean;
                        };
                        freeText?: {
                            enabled?: boolean;
                            maxLength?: number;
                            regEx?: string;
                        };
                    }[];
                }): _255.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _255.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.SubspaceDataEntry;
                fromJSON(object: any): _255.SubspaceDataEntry;
                toJSON(message: _255.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                }): _255.SubspaceDataEntry;
            };
            PostDataEntry: {
                encode(message: _255.PostDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.PostDataEntry;
                fromJSON(object: any): _255.PostDataEntry;
                toJSON(message: _255.PostDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                }): _255.PostDataEntry;
            };
        };
    }
    namespace relationships {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRelationship(value: _261.MsgCreateRelationship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRelationship(value: _261.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockUser(value: _261.MsgBlockUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockUser(value: _261.MsgUnblockUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRelationship(value: _261.MsgCreateRelationship): {
                        typeUrl: string;
                        value: _261.MsgCreateRelationship;
                    };
                    deleteRelationship(value: _261.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: _261.MsgDeleteRelationship;
                    };
                    blockUser(value: _261.MsgBlockUser): {
                        typeUrl: string;
                        value: _261.MsgBlockUser;
                    };
                    unblockUser(value: _261.MsgUnblockUser): {
                        typeUrl: string;
                        value: _261.MsgUnblockUser;
                    };
                };
                toJSON: {
                    createRelationship(value: _261.MsgCreateRelationship): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRelationship(value: _261.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: unknown;
                    };
                    blockUser(value: _261.MsgBlockUser): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unblockUser(value: _261.MsgUnblockUser): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRelationship(value: any): {
                        typeUrl: string;
                        value: _261.MsgCreateRelationship;
                    };
                    deleteRelationship(value: any): {
                        typeUrl: string;
                        value: _261.MsgDeleteRelationship;
                    };
                    blockUser(value: any): {
                        typeUrl: string;
                        value: _261.MsgBlockUser;
                    };
                    unblockUser(value: any): {
                        typeUrl: string;
                        value: _261.MsgUnblockUser;
                    };
                };
                fromPartial: {
                    createRelationship(value: _261.MsgCreateRelationship): {
                        typeUrl: string;
                        value: _261.MsgCreateRelationship;
                    };
                    deleteRelationship(value: _261.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: _261.MsgDeleteRelationship;
                    };
                    blockUser(value: _261.MsgBlockUser): {
                        typeUrl: string;
                        value: _261.MsgBlockUser;
                    };
                    unblockUser(value: _261.MsgUnblockUser): {
                        typeUrl: string;
                        value: _261.MsgUnblockUser;
                    };
                };
            };
            AminoConverter: {
                "/desmos.relationships.v1.MsgCreateRelationship": {
                    aminoType: string;
                    toAmino: ({ signer, counterparty, subspaceId }: _261.MsgCreateRelationship) => {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ signer, counterparty, subspace_id }: {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    }) => _261.MsgCreateRelationship;
                };
                "/desmos.relationships.v1.MsgDeleteRelationship": {
                    aminoType: string;
                    toAmino: ({ signer, counterparty, subspaceId }: _261.MsgDeleteRelationship) => {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ signer, counterparty, subspace_id }: {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    }) => _261.MsgDeleteRelationship;
                };
                "/desmos.relationships.v1.MsgBlockUser": {
                    aminoType: string;
                    toAmino: ({ blocker, blocked, reason, subspaceId }: _261.MsgBlockUser) => {
                        blocker: string;
                        blocked: string;
                        reason: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ blocker, blocked, reason, subspace_id }: {
                        blocker: string;
                        blocked: string;
                        reason: string;
                        subspace_id: string;
                    }) => _261.MsgBlockUser;
                };
                "/desmos.relationships.v1.MsgUnblockUser": {
                    aminoType: string;
                    toAmino: ({ blocker, blocked, subspaceId }: _261.MsgUnblockUser) => {
                        blocker: string;
                        blocked: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ blocker, blocked, subspace_id }: {
                        blocker: string;
                        blocked: string;
                        subspace_id: string;
                    }) => _261.MsgUnblockUser;
                };
            };
            QueryRelationshipsRequest: {
                encode(message: _262.QueryRelationshipsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryRelationshipsRequest;
                fromJSON(object: any): _262.QueryRelationshipsRequest;
                toJSON(message: _262.QueryRelationshipsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    user?: string;
                    counterparty?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _262.QueryRelationshipsRequest;
            };
            QueryRelationshipsResponse: {
                encode(message: _262.QueryRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryRelationshipsResponse;
                fromJSON(object: any): _262.QueryRelationshipsResponse;
                toJSON(message: _262.QueryRelationshipsResponse): unknown;
                fromPartial(object: {
                    relationships?: {
                        creator?: string;
                        counterparty?: string;
                        subspaceId?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _262.QueryRelationshipsResponse;
            };
            QueryBlocksRequest: {
                encode(message: _262.QueryBlocksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryBlocksRequest;
                fromJSON(object: any): _262.QueryBlocksRequest;
                toJSON(message: _262.QueryBlocksRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    blocker?: string;
                    blocked?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _262.QueryBlocksRequest;
            };
            QueryBlocksResponse: {
                encode(message: _262.QueryBlocksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryBlocksResponse;
                fromJSON(object: any): _262.QueryBlocksResponse;
                toJSON(message: _262.QueryBlocksResponse): unknown;
                fromPartial(object: {
                    blocks?: {
                        blocker?: string;
                        blocked?: string;
                        reason?: string;
                        subspaceId?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _262.QueryBlocksResponse;
            };
            MsgCreateRelationship: {
                encode(message: _261.MsgCreateRelationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgCreateRelationship;
                fromJSON(object: any): _261.MsgCreateRelationship;
                toJSON(message: _261.MsgCreateRelationship): unknown;
                fromPartial(object: {
                    signer?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _261.MsgCreateRelationship;
            };
            MsgCreateRelationshipResponse: {
                encode(_: _261.MsgCreateRelationshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgCreateRelationshipResponse;
                fromJSON(_: any): _261.MsgCreateRelationshipResponse;
                toJSON(_: _261.MsgCreateRelationshipResponse): unknown;
                fromPartial(_: {}): _261.MsgCreateRelationshipResponse;
            };
            MsgDeleteRelationship: {
                encode(message: _261.MsgDeleteRelationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgDeleteRelationship;
                fromJSON(object: any): _261.MsgDeleteRelationship;
                toJSON(message: _261.MsgDeleteRelationship): unknown;
                fromPartial(object: {
                    signer?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _261.MsgDeleteRelationship;
            };
            MsgDeleteRelationshipResponse: {
                encode(_: _261.MsgDeleteRelationshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgDeleteRelationshipResponse;
                fromJSON(_: any): _261.MsgDeleteRelationshipResponse;
                toJSON(_: _261.MsgDeleteRelationshipResponse): unknown;
                fromPartial(_: {}): _261.MsgDeleteRelationshipResponse;
            };
            MsgBlockUser: {
                encode(message: _261.MsgBlockUser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgBlockUser;
                fromJSON(object: any): _261.MsgBlockUser;
                toJSON(message: _261.MsgBlockUser): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: any;
                }): _261.MsgBlockUser;
            };
            MsgBlockUserResponse: {
                encode(_: _261.MsgBlockUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgBlockUserResponse;
                fromJSON(_: any): _261.MsgBlockUserResponse;
                toJSON(_: _261.MsgBlockUserResponse): unknown;
                fromPartial(_: {}): _261.MsgBlockUserResponse;
            };
            MsgUnblockUser: {
                encode(message: _261.MsgUnblockUser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgUnblockUser;
                fromJSON(object: any): _261.MsgUnblockUser;
                toJSON(message: _261.MsgUnblockUser): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    subspaceId?: any;
                }): _261.MsgUnblockUser;
            };
            MsgUnblockUserResponse: {
                encode(_: _261.MsgUnblockUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MsgUnblockUserResponse;
                fromJSON(_: any): _261.MsgUnblockUserResponse;
                toJSON(_: _261.MsgUnblockUserResponse): unknown;
                fromPartial(_: {}): _261.MsgUnblockUserResponse;
            };
            Relationship: {
                encode(message: _260.Relationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Relationship;
                fromJSON(object: any): _260.Relationship;
                toJSON(message: _260.Relationship): unknown;
                fromPartial(object: {
                    creator?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _260.Relationship;
            };
            UserBlock: {
                encode(message: _260.UserBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.UserBlock;
                fromJSON(object: any): _260.UserBlock;
                toJSON(message: _260.UserBlock): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: any;
                }): _260.UserBlock;
            };
            GenesisState: {
                encode(message: _259.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.GenesisState;
                fromJSON(object: any): _259.GenesisState;
                toJSON(message: _259.GenesisState): unknown;
                fromPartial(object: {
                    relationships?: {
                        creator?: string;
                        counterparty?: string;
                        subspaceId?: any;
                    }[];
                    blocks?: {
                        blocker?: string;
                        blocked?: string;
                        reason?: string;
                        subspaceId?: any;
                    }[];
                }): _259.GenesisState;
            };
        };
    }
    namespace reports {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createReport(value: _265.MsgCreateReport): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteReport(value: _265.MsgDeleteReport): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    supportStandardReason(value: _265.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addReason(value: _265.MsgAddReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeReason(value: _265.MsgRemoveReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createReport(value: _265.MsgCreateReport): {
                        typeUrl: string;
                        value: _265.MsgCreateReport;
                    };
                    deleteReport(value: _265.MsgDeleteReport): {
                        typeUrl: string;
                        value: _265.MsgDeleteReport;
                    };
                    supportStandardReason(value: _265.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: _265.MsgSupportStandardReason;
                    };
                    addReason(value: _265.MsgAddReason): {
                        typeUrl: string;
                        value: _265.MsgAddReason;
                    };
                    removeReason(value: _265.MsgRemoveReason): {
                        typeUrl: string;
                        value: _265.MsgRemoveReason;
                    };
                };
                toJSON: {
                    createReport(value: _265.MsgCreateReport): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteReport(value: _265.MsgDeleteReport): {
                        typeUrl: string;
                        value: unknown;
                    };
                    supportStandardReason(value: _265.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addReason(value: _265.MsgAddReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeReason(value: _265.MsgRemoveReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createReport(value: any): {
                        typeUrl: string;
                        value: _265.MsgCreateReport;
                    };
                    deleteReport(value: any): {
                        typeUrl: string;
                        value: _265.MsgDeleteReport;
                    };
                    supportStandardReason(value: any): {
                        typeUrl: string;
                        value: _265.MsgSupportStandardReason;
                    };
                    addReason(value: any): {
                        typeUrl: string;
                        value: _265.MsgAddReason;
                    };
                    removeReason(value: any): {
                        typeUrl: string;
                        value: _265.MsgRemoveReason;
                    };
                };
                fromPartial: {
                    createReport(value: _265.MsgCreateReport): {
                        typeUrl: string;
                        value: _265.MsgCreateReport;
                    };
                    deleteReport(value: _265.MsgDeleteReport): {
                        typeUrl: string;
                        value: _265.MsgDeleteReport;
                    };
                    supportStandardReason(value: _265.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: _265.MsgSupportStandardReason;
                    };
                    addReason(value: _265.MsgAddReason): {
                        typeUrl: string;
                        value: _265.MsgAddReason;
                    };
                    removeReason(value: _265.MsgRemoveReason): {
                        typeUrl: string;
                        value: _265.MsgRemoveReason;
                    };
                };
            };
            AminoConverter: {
                "/desmos.reports.v1.MsgCreateReport": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reasonsIds, message, reporter, target }: _265.MsgCreateReport) => {
                        subspace_id: string;
                        reasons_ids: number[];
                        message: string;
                        reporter: string;
                        target: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ subspace_id, reasons_ids, message, reporter, target }: {
                        subspace_id: string;
                        reasons_ids: number[];
                        message: string;
                        reporter: string;
                        target: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _265.MsgCreateReport;
                };
                "/desmos.reports.v1.MsgDeleteReport": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reportId, signer }: _265.MsgDeleteReport) => {
                        subspace_id: string;
                        report_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, report_id, signer }: {
                        subspace_id: string;
                        report_id: string;
                        signer: string;
                    }) => _265.MsgDeleteReport;
                };
                "/desmos.reports.v1.MsgSupportStandardReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, standardReasonId, signer }: _265.MsgSupportStandardReason) => {
                        subspace_id: string;
                        standard_reason_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, standard_reason_id, signer }: {
                        subspace_id: string;
                        standard_reason_id: number;
                        signer: string;
                    }) => _265.MsgSupportStandardReason;
                };
                "/desmos.reports.v1.MsgAddReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, title, description, signer }: _265.MsgAddReason) => {
                        subspace_id: string;
                        title: string;
                        description: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, title, description, signer }: {
                        subspace_id: string;
                        title: string;
                        description: string;
                        signer: string;
                    }) => _265.MsgAddReason;
                };
                "/desmos.reports.v1.MsgRemoveReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reasonId, signer }: _265.MsgRemoveReason) => {
                        subspace_id: string;
                        reason_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, reason_id, signer }: {
                        subspace_id: string;
                        reason_id: number;
                        signer: string;
                    }) => _265.MsgRemoveReason;
                };
            };
            QueryReportsRequest: {
                encode(message: _266.QueryReportsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReportsRequest;
                fromJSON(object: any): _266.QueryReportsRequest;
                toJSON(message: _266.QueryReportsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    target?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    reporter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _266.QueryReportsRequest;
            };
            QueryReportsResponse: {
                encode(message: _266.QueryReportsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReportsResponse;
                fromJSON(object: any): _266.QueryReportsResponse;
                toJSON(message: _266.QueryReportsResponse): unknown;
                fromPartial(object: {
                    reports?: {
                        subspaceId?: any;
                        id?: any;
                        reasonsIds?: number[];
                        message?: string;
                        reporter?: string;
                        target?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        creationDate?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _266.QueryReportsResponse;
            };
            QueryReportRequest: {
                encode(message: _266.QueryReportRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReportRequest;
                fromJSON(object: any): _266.QueryReportRequest;
                toJSON(message: _266.QueryReportRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reportId?: any;
                }): _266.QueryReportRequest;
            };
            QueryReportResponse: {
                encode(message: _266.QueryReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReportResponse;
                fromJSON(object: any): _266.QueryReportResponse;
                toJSON(message: _266.QueryReportResponse): unknown;
                fromPartial(object: {
                    report?: {
                        subspaceId?: any;
                        id?: any;
                        reasonsIds?: number[];
                        message?: string;
                        reporter?: string;
                        target?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        creationDate?: Date;
                    };
                }): _266.QueryReportResponse;
            };
            QueryReasonsRequest: {
                encode(message: _266.QueryReasonsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReasonsRequest;
                fromJSON(object: any): _266.QueryReasonsRequest;
                toJSON(message: _266.QueryReasonsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _266.QueryReasonsRequest;
            };
            QueryReasonsResponse: {
                encode(message: _266.QueryReasonsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReasonsResponse;
                fromJSON(object: any): _266.QueryReasonsResponse;
                toJSON(message: _266.QueryReasonsResponse): unknown;
                fromPartial(object: {
                    reasons?: {
                        subspaceId?: any;
                        id?: number;
                        title?: string;
                        description?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _266.QueryReasonsResponse;
            };
            QueryReasonRequest: {
                encode(message: _266.QueryReasonRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReasonRequest;
                fromJSON(object: any): _266.QueryReasonRequest;
                toJSON(message: _266.QueryReasonRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                }): _266.QueryReasonRequest;
            };
            QueryReasonResponse: {
                encode(message: _266.QueryReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryReasonResponse;
                fromJSON(object: any): _266.QueryReasonResponse;
                toJSON(message: _266.QueryReasonResponse): unknown;
                fromPartial(object: {
                    reason?: {
                        subspaceId?: any;
                        id?: number;
                        title?: string;
                        description?: string;
                    };
                }): _266.QueryReasonResponse;
            };
            QueryParamsRequest: {
                encode(_: _266.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsRequest;
                fromJSON(_: any): _266.QueryParamsRequest;
                toJSON(_: _266.QueryParamsRequest): unknown;
                fromPartial(_: {}): _266.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _266.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsResponse;
                fromJSON(object: any): _266.QueryParamsResponse;
                toJSON(message: _266.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        standardReasons?: {
                            id?: number;
                            title?: string;
                            description?: string;
                        }[];
                    };
                }): _266.QueryParamsResponse;
            };
            MsgCreateReport: {
                encode(message: _265.MsgCreateReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgCreateReport;
                fromJSON(object: any): _265.MsgCreateReport;
                toJSON(message: _265.MsgCreateReport): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonsIds?: number[];
                    message?: string;
                    reporter?: string;
                    target?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _265.MsgCreateReport;
            };
            MsgCreateReportResponse: {
                encode(message: _265.MsgCreateReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgCreateReportResponse;
                fromJSON(object: any): _265.MsgCreateReportResponse;
                toJSON(message: _265.MsgCreateReportResponse): unknown;
                fromPartial(object: {
                    reportId?: any;
                    creationDate?: Date;
                }): _265.MsgCreateReportResponse;
            };
            MsgDeleteReport: {
                encode(message: _265.MsgDeleteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgDeleteReport;
                fromJSON(object: any): _265.MsgDeleteReport;
                toJSON(message: _265.MsgDeleteReport): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reportId?: any;
                    signer?: string;
                }): _265.MsgDeleteReport;
            };
            MsgDeleteReportResponse: {
                encode(_: _265.MsgDeleteReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgDeleteReportResponse;
                fromJSON(_: any): _265.MsgDeleteReportResponse;
                toJSON(_: _265.MsgDeleteReportResponse): unknown;
                fromPartial(_: {}): _265.MsgDeleteReportResponse;
            };
            MsgSupportStandardReason: {
                encode(message: _265.MsgSupportStandardReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgSupportStandardReason;
                fromJSON(object: any): _265.MsgSupportStandardReason;
                toJSON(message: _265.MsgSupportStandardReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    standardReasonId?: number;
                    signer?: string;
                }): _265.MsgSupportStandardReason;
            };
            MsgSupportStandardReasonResponse: {
                encode(message: _265.MsgSupportStandardReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgSupportStandardReasonResponse;
                fromJSON(object: any): _265.MsgSupportStandardReasonResponse;
                toJSON(message: _265.MsgSupportStandardReasonResponse): unknown;
                fromPartial(object: {
                    reasonsIds?: number;
                }): _265.MsgSupportStandardReasonResponse;
            };
            MsgAddReason: {
                encode(message: _265.MsgAddReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgAddReason;
                fromJSON(object: any): _265.MsgAddReason;
                toJSON(message: _265.MsgAddReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    title?: string;
                    description?: string;
                    signer?: string;
                }): _265.MsgAddReason;
            };
            MsgAddReasonResponse: {
                encode(message: _265.MsgAddReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgAddReasonResponse;
                fromJSON(object: any): _265.MsgAddReasonResponse;
                toJSON(message: _265.MsgAddReasonResponse): unknown;
                fromPartial(object: {
                    reasonId?: number;
                }): _265.MsgAddReasonResponse;
            };
            MsgRemoveReason: {
                encode(message: _265.MsgRemoveReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgRemoveReason;
                fromJSON(object: any): _265.MsgRemoveReason;
                toJSON(message: _265.MsgRemoveReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                    signer?: string;
                }): _265.MsgRemoveReason;
            };
            MsgRemoveReasonResponse: {
                encode(_: _265.MsgRemoveReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.MsgRemoveReasonResponse;
                fromJSON(_: any): _265.MsgRemoveReasonResponse;
                toJSON(_: _265.MsgRemoveReasonResponse): unknown;
                fromPartial(_: {}): _265.MsgRemoveReasonResponse;
            };
            Report: {
                encode(message: _264.Report, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.Report;
                fromJSON(object: any): _264.Report;
                toJSON(message: _264.Report): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: any;
                    reasonsIds?: number[];
                    message?: string;
                    reporter?: string;
                    target?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    creationDate?: Date;
                }): _264.Report;
            };
            UserTarget: {
                encode(message: _264.UserTarget, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.UserTarget;
                fromJSON(object: any): _264.UserTarget;
                toJSON(message: _264.UserTarget): unknown;
                fromPartial(object: {
                    user?: string;
                }): _264.UserTarget;
            };
            PostTarget: {
                encode(message: _264.PostTarget, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.PostTarget;
                fromJSON(object: any): _264.PostTarget;
                toJSON(message: _264.PostTarget): unknown;
                fromPartial(object: {
                    postId?: any;
                }): _264.PostTarget;
            };
            Reason: {
                encode(message: _264.Reason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.Reason;
                fromJSON(object: any): _264.Reason;
                toJSON(message: _264.Reason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    title?: string;
                    description?: string;
                }): _264.Reason;
            };
            Params: {
                encode(message: _264.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.Params;
                fromJSON(object: any): _264.Params;
                toJSON(message: _264.Params): unknown;
                fromPartial(object: {
                    standardReasons?: {
                        id?: number;
                        title?: string;
                        description?: string;
                    }[];
                }): _264.Params;
            };
            StandardReason: {
                encode(message: _264.StandardReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.StandardReason;
                fromJSON(object: any): _264.StandardReason;
                toJSON(message: _264.StandardReason): unknown;
                fromPartial(object: {
                    id?: number;
                    title?: string;
                    description?: string;
                }): _264.StandardReason;
            };
            GenesisState: {
                encode(message: _263.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.GenesisState;
                fromJSON(object: any): _263.GenesisState;
                toJSON(message: _263.GenesisState): unknown;
                fromPartial(object: {
                    subspacesData?: {
                        subspaceId?: any;
                        reasonId?: number;
                        reportId?: any;
                    }[];
                    reasons?: {
                        subspaceId?: any;
                        id?: number;
                        title?: string;
                        description?: string;
                    }[];
                    reports?: {
                        subspaceId?: any;
                        id?: any;
                        reasonsIds?: number[];
                        message?: string;
                        reporter?: string;
                        target?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        creationDate?: Date;
                    }[];
                    params?: {
                        standardReasons?: {
                            id?: number;
                            title?: string;
                            description?: string;
                        }[];
                    };
                }): _263.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _263.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.SubspaceDataEntry;
                fromJSON(object: any): _263.SubspaceDataEntry;
                toJSON(message: _263.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                    reportId?: any;
                }): _263.SubspaceDataEntry;
            };
        };
    }
    namespace subspaces {
        const v1: {
            Subspace: {
                encode(message: _267.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Subspace;
                fromJSON(object: any): _267.Subspace;
                toJSON(message: _267.Subspace): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                    creationTime?: Date;
                }): _267.Subspace;
            };
            UserGroup: {
                encode(message: _267.UserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.UserGroup;
                fromJSON(object: any): _267.UserGroup;
                toJSON(message: _267.UserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    name?: string;
                    description?: string;
                    permissions?: number;
                }): _267.UserGroup;
            };
            PermissionDetail: {
                encode(message: _267.PermissionDetail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PermissionDetail;
                fromJSON(object: any): _267.PermissionDetail;
                toJSON(message: _267.PermissionDetail): unknown;
                fromPartial(object: {
                    user?: {
                        user?: string;
                        permission?: number;
                    };
                    group?: {
                        groupId?: number;
                        permission?: number;
                    };
                }): _267.PermissionDetail;
            };
            PermissionDetail_User: {
                encode(message: _267.PermissionDetail_User, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PermissionDetail_User;
                fromJSON(object: any): _267.PermissionDetail_User;
                toJSON(message: _267.PermissionDetail_User): unknown;
                fromPartial(object: {
                    user?: string;
                    permission?: number;
                }): _267.PermissionDetail_User;
            };
            PermissionDetail_Group: {
                encode(message: _267.PermissionDetail_Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PermissionDetail_Group;
                fromJSON(object: any): _267.PermissionDetail_Group;
                toJSON(message: _267.PermissionDetail_Group): unknown;
                fromPartial(object: {
                    groupId?: number;
                    permission?: number;
                }): _267.PermissionDetail_Group;
            };
        };
        namespace v2 {
            const authz: {
                GenericSubspaceAuthorization: {
                    encode(message: _268.GenericSubspaceAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.GenericSubspaceAuthorization;
                    fromJSON(object: any): _268.GenericSubspaceAuthorization;
                    toJSON(message: _268.GenericSubspaceAuthorization): unknown;
                    fromPartial(object: {
                        subspacesIds?: any[];
                        msg?: string;
                    }): _268.GenericSubspaceAuthorization;
                };
            };
        }
        const v3: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSubspace(value: _271.MsgCreateSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editSubspace(value: _271.MsgEditSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSubspace(value: _271.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSection(value: _271.MsgCreateSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editSection(value: _271.MsgEditSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moveSection(value: _271.MsgMoveSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSection(value: _271.MsgDeleteSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserGroup(value: _271.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editUserGroup(value: _271.MsgEditUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moveUserGroup(value: _271.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUserGroupPermissions(value: _271.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteUserGroup(value: _271.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addUserToUserGroup(value: _271.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeUserFromUserGroup(value: _271.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUserPermissions(value: _271.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSubspace(value: _271.MsgCreateSubspace): {
                        typeUrl: string;
                        value: _271.MsgCreateSubspace;
                    };
                    editSubspace(value: _271.MsgEditSubspace): {
                        typeUrl: string;
                        value: _271.MsgEditSubspace;
                    };
                    deleteSubspace(value: _271.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: _271.MsgDeleteSubspace;
                    };
                    createSection(value: _271.MsgCreateSection): {
                        typeUrl: string;
                        value: _271.MsgCreateSection;
                    };
                    editSection(value: _271.MsgEditSection): {
                        typeUrl: string;
                        value: _271.MsgEditSection;
                    };
                    moveSection(value: _271.MsgMoveSection): {
                        typeUrl: string;
                        value: _271.MsgMoveSection;
                    };
                    deleteSection(value: _271.MsgDeleteSection): {
                        typeUrl: string;
                        value: _271.MsgDeleteSection;
                    };
                    createUserGroup(value: _271.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: _271.MsgCreateUserGroup;
                    };
                    editUserGroup(value: _271.MsgEditUserGroup): {
                        typeUrl: string;
                        value: _271.MsgEditUserGroup;
                    };
                    moveUserGroup(value: _271.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: _271.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: _271.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: _271.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: _271.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: _271.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: _271.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: _271.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: _271.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: _271.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: _271.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: _271.MsgSetUserPermissions;
                    };
                };
                toJSON: {
                    createSubspace(value: _271.MsgCreateSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editSubspace(value: _271.MsgEditSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSubspace(value: _271.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createSection(value: _271.MsgCreateSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editSection(value: _271.MsgEditSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    moveSection(value: _271.MsgMoveSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSection(value: _271.MsgDeleteSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createUserGroup(value: _271.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editUserGroup(value: _271.MsgEditUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    moveUserGroup(value: _271.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setUserGroupPermissions(value: _271.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteUserGroup(value: _271.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addUserToUserGroup(value: _271.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeUserFromUserGroup(value: _271.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setUserPermissions(value: _271.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createSubspace(value: any): {
                        typeUrl: string;
                        value: _271.MsgCreateSubspace;
                    };
                    editSubspace(value: any): {
                        typeUrl: string;
                        value: _271.MsgEditSubspace;
                    };
                    deleteSubspace(value: any): {
                        typeUrl: string;
                        value: _271.MsgDeleteSubspace;
                    };
                    createSection(value: any): {
                        typeUrl: string;
                        value: _271.MsgCreateSection;
                    };
                    editSection(value: any): {
                        typeUrl: string;
                        value: _271.MsgEditSection;
                    };
                    moveSection(value: any): {
                        typeUrl: string;
                        value: _271.MsgMoveSection;
                    };
                    deleteSection(value: any): {
                        typeUrl: string;
                        value: _271.MsgDeleteSection;
                    };
                    createUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgCreateUserGroup;
                    };
                    editUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgEditUserGroup;
                    };
                    moveUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: any): {
                        typeUrl: string;
                        value: _271.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: any): {
                        typeUrl: string;
                        value: _271.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: any): {
                        typeUrl: string;
                        value: _271.MsgSetUserPermissions;
                    };
                };
                fromPartial: {
                    createSubspace(value: _271.MsgCreateSubspace): {
                        typeUrl: string;
                        value: _271.MsgCreateSubspace;
                    };
                    editSubspace(value: _271.MsgEditSubspace): {
                        typeUrl: string;
                        value: _271.MsgEditSubspace;
                    };
                    deleteSubspace(value: _271.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: _271.MsgDeleteSubspace;
                    };
                    createSection(value: _271.MsgCreateSection): {
                        typeUrl: string;
                        value: _271.MsgCreateSection;
                    };
                    editSection(value: _271.MsgEditSection): {
                        typeUrl: string;
                        value: _271.MsgEditSection;
                    };
                    moveSection(value: _271.MsgMoveSection): {
                        typeUrl: string;
                        value: _271.MsgMoveSection;
                    };
                    deleteSection(value: _271.MsgDeleteSection): {
                        typeUrl: string;
                        value: _271.MsgDeleteSection;
                    };
                    createUserGroup(value: _271.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: _271.MsgCreateUserGroup;
                    };
                    editUserGroup(value: _271.MsgEditUserGroup): {
                        typeUrl: string;
                        value: _271.MsgEditUserGroup;
                    };
                    moveUserGroup(value: _271.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: _271.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: _271.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: _271.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: _271.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: _271.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: _271.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: _271.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: _271.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: _271.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: _271.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: _271.MsgSetUserPermissions;
                    };
                };
            };
            AminoConverter: {
                "/desmos.subspaces.v3.MsgCreateSubspace": {
                    aminoType: string;
                    toAmino: ({ name, description, treasury, owner, creator }: _271.MsgCreateSubspace) => {
                        name: string;
                        description: string;
                        treasury: string;
                        owner: string;
                        creator: string;
                    };
                    fromAmino: ({ name, description, treasury, owner, creator }: {
                        name: string;
                        description: string;
                        treasury: string;
                        owner: string;
                        creator: string;
                    }) => _271.MsgCreateSubspace;
                };
                "/desmos.subspaces.v3.MsgEditSubspace": {
                    aminoType: string;
                    toAmino: ({ subspaceId, name, description, treasury, owner, signer }: _271.MsgEditSubspace) => {
                        subspace_id: string;
                        name: string;
                        description: string;
                        treasury: string;
                        owner: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, name, description, treasury, owner, signer }: {
                        subspace_id: string;
                        name: string;
                        description: string;
                        treasury: string;
                        owner: string;
                        signer: string;
                    }) => _271.MsgEditSubspace;
                };
                "/desmos.subspaces.v3.MsgDeleteSubspace": {
                    aminoType: string;
                    toAmino: ({ subspaceId, signer }: _271.MsgDeleteSubspace) => {
                        subspace_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, signer }: {
                        subspace_id: string;
                        signer: string;
                    }) => _271.MsgDeleteSubspace;
                };
                "/desmos.subspaces.v3.MsgCreateSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, name, description, parentId, creator }: _271.MsgCreateSection) => {
                        subspace_id: string;
                        name: string;
                        description: string;
                        parent_id: number;
                        creator: string;
                    };
                    fromAmino: ({ subspace_id, name, description, parent_id, creator }: {
                        subspace_id: string;
                        name: string;
                        description: string;
                        parent_id: number;
                        creator: string;
                    }) => _271.MsgCreateSection;
                };
                "/desmos.subspaces.v3.MsgEditSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, name, description, editor }: _271.MsgEditSection) => {
                        subspace_id: string;
                        section_id: number;
                        name: string;
                        description: string;
                        editor: string;
                    };
                    fromAmino: ({ subspace_id, section_id, name, description, editor }: {
                        subspace_id: string;
                        section_id: number;
                        name: string;
                        description: string;
                        editor: string;
                    }) => _271.MsgEditSection;
                };
                "/desmos.subspaces.v3.MsgMoveSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, newParentId, signer }: _271.MsgMoveSection) => {
                        subspace_id: string;
                        section_id: number;
                        new_parent_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, section_id, new_parent_id, signer }: {
                        subspace_id: string;
                        section_id: number;
                        new_parent_id: number;
                        signer: string;
                    }) => _271.MsgMoveSection;
                };
                "/desmos.subspaces.v3.MsgDeleteSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, signer }: _271.MsgDeleteSection) => {
                        subspace_id: string;
                        section_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, section_id, signer }: {
                        subspace_id: string;
                        section_id: number;
                        signer: string;
                    }) => _271.MsgDeleteSection;
                };
                "/desmos.subspaces.v3.MsgCreateUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, name, description, defaultPermissions, initialMembers, creator }: _271.MsgCreateUserGroup) => {
                        subspace_id: string;
                        section_id: number;
                        name: string;
                        description: string;
                        default_permissions: string[];
                        initial_members: string[];
                        creator: string;
                    };
                    fromAmino: ({ subspace_id, section_id, name, description, default_permissions, initial_members, creator }: {
                        subspace_id: string;
                        section_id: number;
                        name: string;
                        description: string;
                        default_permissions: string[];
                        initial_members: string[];
                        creator: string;
                    }) => _271.MsgCreateUserGroup;
                };
                "/desmos.subspaces.v3.MsgEditUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, name, description, signer }: _271.MsgEditUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        name: string;
                        description: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, name, description, signer }: {
                        subspace_id: string;
                        group_id: number;
                        name: string;
                        description: string;
                        signer: string;
                    }) => _271.MsgEditUserGroup;
                };
                "/desmos.subspaces.v3.MsgMoveUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, newSectionId, signer }: _271.MsgMoveUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        new_section_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, new_section_id, signer }: {
                        subspace_id: string;
                        group_id: number;
                        new_section_id: number;
                        signer: string;
                    }) => _271.MsgMoveUserGroup;
                };
                "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, permissions, signer }: _271.MsgSetUserGroupPermissions) => {
                        subspace_id: string;
                        group_id: number;
                        permissions: string[];
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, permissions, signer }: {
                        subspace_id: string;
                        group_id: number;
                        permissions: string[];
                        signer: string;
                    }) => _271.MsgSetUserGroupPermissions;
                };
                "/desmos.subspaces.v3.MsgDeleteUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, signer }: _271.MsgDeleteUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, signer }: {
                        subspace_id: string;
                        group_id: number;
                        signer: string;
                    }) => _271.MsgDeleteUserGroup;
                };
                "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, user, signer }: _271.MsgAddUserToUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        user: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, user, signer }: {
                        subspace_id: string;
                        group_id: number;
                        user: string;
                        signer: string;
                    }) => _271.MsgAddUserToUserGroup;
                };
                "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, user, signer }: _271.MsgRemoveUserFromUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        user: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, user, signer }: {
                        subspace_id: string;
                        group_id: number;
                        user: string;
                        signer: string;
                    }) => _271.MsgRemoveUserFromUserGroup;
                };
                "/desmos.subspaces.v3.MsgSetUserPermissions": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, user, permissions, signer }: _271.MsgSetUserPermissions) => {
                        subspace_id: string;
                        section_id: number;
                        user: string;
                        permissions: string[];
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, section_id, user, permissions, signer }: {
                        subspace_id: string;
                        section_id: number;
                        user: string;
                        permissions: string[];
                        signer: string;
                    }) => _271.MsgSetUserPermissions;
                };
            };
            QuerySubspacesRequest: {
                encode(message: _272.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySubspacesRequest;
                fromJSON(object: any): _272.QuerySubspacesRequest;
                toJSON(message: _272.QuerySubspacesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _272.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _272.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySubspacesResponse;
                fromJSON(object: any): _272.QuerySubspacesResponse;
                toJSON(message: _272.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        id?: any;
                        name?: string;
                        description?: string;
                        treasury?: string;
                        owner?: string;
                        creator?: string;
                        creationTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _272.QuerySubspacesResponse;
            };
            QuerySubspaceRequest: {
                encode(message: _272.QuerySubspaceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySubspaceRequest;
                fromJSON(object: any): _272.QuerySubspaceRequest;
                toJSON(message: _272.QuerySubspaceRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _272.QuerySubspaceRequest;
            };
            QuerySubspaceResponse: {
                encode(message: _272.QuerySubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySubspaceResponse;
                fromJSON(object: any): _272.QuerySubspaceResponse;
                toJSON(message: _272.QuerySubspaceResponse): unknown;
                fromPartial(object: {
                    subspace?: {
                        id?: any;
                        name?: string;
                        description?: string;
                        treasury?: string;
                        owner?: string;
                        creator?: string;
                        creationTime?: Date;
                    };
                }): _272.QuerySubspaceResponse;
            };
            QuerySectionsRequest: {
                encode(message: _272.QuerySectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySectionsRequest;
                fromJSON(object: any): _272.QuerySectionsRequest;
                toJSON(message: _272.QuerySectionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _272.QuerySectionsRequest;
            };
            QuerySectionsResponse: {
                encode(message: _272.QuerySectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySectionsResponse;
                fromJSON(object: any): _272.QuerySectionsResponse;
                toJSON(message: _272.QuerySectionsResponse): unknown;
                fromPartial(object: {
                    sections?: {
                        subspaceId?: any;
                        id?: number;
                        parentId?: number;
                        name?: string;
                        description?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _272.QuerySectionsResponse;
            };
            QuerySectionRequest: {
                encode(message: _272.QuerySectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySectionRequest;
                fromJSON(object: any): _272.QuerySectionRequest;
                toJSON(message: _272.QuerySectionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                }): _272.QuerySectionRequest;
            };
            QuerySectionResponse: {
                encode(message: _272.QuerySectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QuerySectionResponse;
                fromJSON(object: any): _272.QuerySectionResponse;
                toJSON(message: _272.QuerySectionResponse): unknown;
                fromPartial(object: {
                    section?: {
                        subspaceId?: any;
                        id?: number;
                        parentId?: number;
                        name?: string;
                        description?: string;
                    };
                }): _272.QuerySectionResponse;
            };
            QueryUserGroupsRequest: {
                encode(message: _272.QueryUserGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupsRequest;
                fromJSON(object: any): _272.QueryUserGroupsRequest;
                toJSON(message: _272.QueryUserGroupsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _272.QueryUserGroupsRequest;
            };
            QueryUserGroupsResponse: {
                encode(message: _272.QueryUserGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupsResponse;
                fromJSON(object: any): _272.QueryUserGroupsResponse;
                toJSON(message: _272.QueryUserGroupsResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: number;
                        name?: string;
                        description?: string;
                        permissions?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _272.QueryUserGroupsResponse;
            };
            QueryUserGroupRequest: {
                encode(message: _272.QueryUserGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupRequest;
                fromJSON(object: any): _272.QueryUserGroupRequest;
                toJSON(message: _272.QueryUserGroupRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                }): _272.QueryUserGroupRequest;
            };
            QueryUserGroupResponse: {
                encode(message: _272.QueryUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupResponse;
                fromJSON(object: any): _272.QueryUserGroupResponse;
                toJSON(message: _272.QueryUserGroupResponse): unknown;
                fromPartial(object: {
                    group?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: number;
                        name?: string;
                        description?: string;
                        permissions?: string[];
                    };
                }): _272.QueryUserGroupResponse;
            };
            QueryUserGroupMembersRequest: {
                encode(message: _272.QueryUserGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupMembersRequest;
                fromJSON(object: any): _272.QueryUserGroupMembersRequest;
                toJSON(message: _272.QueryUserGroupMembersRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _272.QueryUserGroupMembersRequest;
            };
            QueryUserGroupMembersResponse: {
                encode(message: _272.QueryUserGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserGroupMembersResponse;
                fromJSON(object: any): _272.QueryUserGroupMembersResponse;
                toJSON(message: _272.QueryUserGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _272.QueryUserGroupMembersResponse;
            };
            QueryUserPermissionsRequest: {
                encode(message: _272.QueryUserPermissionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserPermissionsRequest;
                fromJSON(object: any): _272.QueryUserPermissionsRequest;
                toJSON(message: _272.QueryUserPermissionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                }): _272.QueryUserPermissionsRequest;
            };
            QueryUserPermissionsResponse: {
                encode(message: _272.QueryUserPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUserPermissionsResponse;
                fromJSON(object: any): _272.QueryUserPermissionsResponse;
                toJSON(message: _272.QueryUserPermissionsResponse): unknown;
                fromPartial(object: {
                    permissions?: string[];
                    details?: {
                        subspaceId?: any;
                        sectionId?: number;
                        user?: {
                            user?: string;
                            permission?: string[];
                        };
                        group?: {
                            groupId?: number;
                            permission?: string[];
                        };
                    }[];
                }): _272.QueryUserPermissionsResponse;
            };
            PermissionDetail: {
                encode(message: _272.PermissionDetail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.PermissionDetail;
                fromJSON(object: any): _272.PermissionDetail;
                toJSON(message: _272.PermissionDetail): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: {
                        user?: string;
                        permission?: string[];
                    };
                    group?: {
                        groupId?: number;
                        permission?: string[];
                    };
                }): _272.PermissionDetail;
            };
            PermissionDetail_User: {
                encode(message: _272.PermissionDetail_User, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.PermissionDetail_User;
                fromJSON(object: any): _272.PermissionDetail_User;
                toJSON(message: _272.PermissionDetail_User): unknown;
                fromPartial(object: {
                    user?: string;
                    permission?: string[];
                }): _272.PermissionDetail_User;
            };
            PermissionDetail_Group: {
                encode(message: _272.PermissionDetail_Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.PermissionDetail_Group;
                fromJSON(object: any): _272.PermissionDetail_Group;
                toJSON(message: _272.PermissionDetail_Group): unknown;
                fromPartial(object: {
                    groupId?: number;
                    permission?: string[];
                }): _272.PermissionDetail_Group;
            };
            MsgCreateSubspace: {
                encode(message: _271.MsgCreateSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateSubspace;
                fromJSON(object: any): _271.MsgCreateSubspace;
                toJSON(message: _271.MsgCreateSubspace): unknown;
                fromPartial(object: {
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                }): _271.MsgCreateSubspace;
            };
            MsgCreateSubspaceResponse: {
                encode(message: _271.MsgCreateSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateSubspaceResponse;
                fromJSON(object: any): _271.MsgCreateSubspaceResponse;
                toJSON(message: _271.MsgCreateSubspaceResponse): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _271.MsgCreateSubspaceResponse;
            };
            MsgEditSubspace: {
                encode(message: _271.MsgEditSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditSubspace;
                fromJSON(object: any): _271.MsgEditSubspace;
                toJSON(message: _271.MsgEditSubspace): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    signer?: string;
                }): _271.MsgEditSubspace;
            };
            MsgEditSubspaceResponse: {
                encode(_: _271.MsgEditSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditSubspaceResponse;
                fromJSON(_: any): _271.MsgEditSubspaceResponse;
                toJSON(_: _271.MsgEditSubspaceResponse): unknown;
                fromPartial(_: {}): _271.MsgEditSubspaceResponse;
            };
            MsgDeleteSubspace: {
                encode(message: _271.MsgDeleteSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteSubspace;
                fromJSON(object: any): _271.MsgDeleteSubspace;
                toJSON(message: _271.MsgDeleteSubspace): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    signer?: string;
                }): _271.MsgDeleteSubspace;
            };
            MsgDeleteSubspaceResponse: {
                encode(_: _271.MsgDeleteSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteSubspaceResponse;
                fromJSON(_: any): _271.MsgDeleteSubspaceResponse;
                toJSON(_: _271.MsgDeleteSubspaceResponse): unknown;
                fromPartial(_: {}): _271.MsgDeleteSubspaceResponse;
            };
            MsgCreateSection: {
                encode(message: _271.MsgCreateSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateSection;
                fromJSON(object: any): _271.MsgCreateSection;
                toJSON(message: _271.MsgCreateSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    name?: string;
                    description?: string;
                    parentId?: number;
                    creator?: string;
                }): _271.MsgCreateSection;
            };
            MsgCreateSectionResponse: {
                encode(message: _271.MsgCreateSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateSectionResponse;
                fromJSON(object: any): _271.MsgCreateSectionResponse;
                toJSON(message: _271.MsgCreateSectionResponse): unknown;
                fromPartial(object: {
                    sectionId?: number;
                }): _271.MsgCreateSectionResponse;
            };
            MsgEditSection: {
                encode(message: _271.MsgEditSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditSection;
                fromJSON(object: any): _271.MsgEditSection;
                toJSON(message: _271.MsgEditSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    name?: string;
                    description?: string;
                    editor?: string;
                }): _271.MsgEditSection;
            };
            MsgEditSectionResponse: {
                encode(_: _271.MsgEditSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditSectionResponse;
                fromJSON(_: any): _271.MsgEditSectionResponse;
                toJSON(_: _271.MsgEditSectionResponse): unknown;
                fromPartial(_: {}): _271.MsgEditSectionResponse;
            };
            MsgMoveSection: {
                encode(message: _271.MsgMoveSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgMoveSection;
                fromJSON(object: any): _271.MsgMoveSection;
                toJSON(message: _271.MsgMoveSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    newParentId?: number;
                    signer?: string;
                }): _271.MsgMoveSection;
            };
            MsgMoveSectionResponse: {
                encode(_: _271.MsgMoveSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgMoveSectionResponse;
                fromJSON(_: any): _271.MsgMoveSectionResponse;
                toJSON(_: _271.MsgMoveSectionResponse): unknown;
                fromPartial(_: {}): _271.MsgMoveSectionResponse;
            };
            MsgDeleteSection: {
                encode(message: _271.MsgDeleteSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteSection;
                fromJSON(object: any): _271.MsgDeleteSection;
                toJSON(message: _271.MsgDeleteSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    signer?: string;
                }): _271.MsgDeleteSection;
            };
            MsgDeleteSectionResponse: {
                encode(_: _271.MsgDeleteSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteSectionResponse;
                fromJSON(_: any): _271.MsgDeleteSectionResponse;
                toJSON(_: _271.MsgDeleteSectionResponse): unknown;
                fromPartial(_: {}): _271.MsgDeleteSectionResponse;
            };
            MsgCreateUserGroup: {
                encode(message: _271.MsgCreateUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateUserGroup;
                fromJSON(object: any): _271.MsgCreateUserGroup;
                toJSON(message: _271.MsgCreateUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    name?: string;
                    description?: string;
                    defaultPermissions?: string[];
                    initialMembers?: string[];
                    creator?: string;
                }): _271.MsgCreateUserGroup;
            };
            MsgCreateUserGroupResponse: {
                encode(message: _271.MsgCreateUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgCreateUserGroupResponse;
                fromJSON(object: any): _271.MsgCreateUserGroupResponse;
                toJSON(message: _271.MsgCreateUserGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: number;
                }): _271.MsgCreateUserGroupResponse;
            };
            MsgEditUserGroup: {
                encode(message: _271.MsgEditUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditUserGroup;
                fromJSON(object: any): _271.MsgEditUserGroup;
                toJSON(message: _271.MsgEditUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    name?: string;
                    description?: string;
                    signer?: string;
                }): _271.MsgEditUserGroup;
            };
            MsgEditUserGroupResponse: {
                encode(_: _271.MsgEditUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgEditUserGroupResponse;
                fromJSON(_: any): _271.MsgEditUserGroupResponse;
                toJSON(_: _271.MsgEditUserGroupResponse): unknown;
                fromPartial(_: {}): _271.MsgEditUserGroupResponse;
            };
            MsgMoveUserGroup: {
                encode(message: _271.MsgMoveUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgMoveUserGroup;
                fromJSON(object: any): _271.MsgMoveUserGroup;
                toJSON(message: _271.MsgMoveUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    newSectionId?: number;
                    signer?: string;
                }): _271.MsgMoveUserGroup;
            };
            MsgMoveUserGroupResponse: {
                encode(_: _271.MsgMoveUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgMoveUserGroupResponse;
                fromJSON(_: any): _271.MsgMoveUserGroupResponse;
                toJSON(_: _271.MsgMoveUserGroupResponse): unknown;
                fromPartial(_: {}): _271.MsgMoveUserGroupResponse;
            };
            MsgSetUserGroupPermissions: {
                encode(message: _271.MsgSetUserGroupPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgSetUserGroupPermissions;
                fromJSON(object: any): _271.MsgSetUserGroupPermissions;
                toJSON(message: _271.MsgSetUserGroupPermissions): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    permissions?: string[];
                    signer?: string;
                }): _271.MsgSetUserGroupPermissions;
            };
            MsgSetUserGroupPermissionsResponse: {
                encode(_: _271.MsgSetUserGroupPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgSetUserGroupPermissionsResponse;
                fromJSON(_: any): _271.MsgSetUserGroupPermissionsResponse;
                toJSON(_: _271.MsgSetUserGroupPermissionsResponse): unknown;
                fromPartial(_: {}): _271.MsgSetUserGroupPermissionsResponse;
            };
            MsgDeleteUserGroup: {
                encode(message: _271.MsgDeleteUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteUserGroup;
                fromJSON(object: any): _271.MsgDeleteUserGroup;
                toJSON(message: _271.MsgDeleteUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    signer?: string;
                }): _271.MsgDeleteUserGroup;
            };
            MsgDeleteUserGroupResponse: {
                encode(_: _271.MsgDeleteUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDeleteUserGroupResponse;
                fromJSON(_: any): _271.MsgDeleteUserGroupResponse;
                toJSON(_: _271.MsgDeleteUserGroupResponse): unknown;
                fromPartial(_: {}): _271.MsgDeleteUserGroupResponse;
            };
            MsgAddUserToUserGroup: {
                encode(message: _271.MsgAddUserToUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgAddUserToUserGroup;
                fromJSON(object: any): _271.MsgAddUserToUserGroup;
                toJSON(message: _271.MsgAddUserToUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                    signer?: string;
                }): _271.MsgAddUserToUserGroup;
            };
            MsgAddUserToUserGroupResponse: {
                encode(_: _271.MsgAddUserToUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgAddUserToUserGroupResponse;
                fromJSON(_: any): _271.MsgAddUserToUserGroupResponse;
                toJSON(_: _271.MsgAddUserToUserGroupResponse): unknown;
                fromPartial(_: {}): _271.MsgAddUserToUserGroupResponse;
            };
            MsgRemoveUserFromUserGroup: {
                encode(message: _271.MsgRemoveUserFromUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgRemoveUserFromUserGroup;
                fromJSON(object: any): _271.MsgRemoveUserFromUserGroup;
                toJSON(message: _271.MsgRemoveUserFromUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                    signer?: string;
                }): _271.MsgRemoveUserFromUserGroup;
            };
            MsgRemoveUserFromUserGroupResponse: {
                encode(_: _271.MsgRemoveUserFromUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgRemoveUserFromUserGroupResponse;
                fromJSON(_: any): _271.MsgRemoveUserFromUserGroupResponse;
                toJSON(_: _271.MsgRemoveUserFromUserGroupResponse): unknown;
                fromPartial(_: {}): _271.MsgRemoveUserFromUserGroupResponse;
            };
            MsgSetUserPermissions: {
                encode(message: _271.MsgSetUserPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgSetUserPermissions;
                fromJSON(object: any): _271.MsgSetUserPermissions;
                toJSON(message: _271.MsgSetUserPermissions): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                    permissions?: string[];
                    signer?: string;
                }): _271.MsgSetUserPermissions;
            };
            MsgSetUserPermissionsResponse: {
                encode(_: _271.MsgSetUserPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgSetUserPermissionsResponse;
                fromJSON(_: any): _271.MsgSetUserPermissionsResponse;
                toJSON(_: _271.MsgSetUserPermissionsResponse): unknown;
                fromPartial(_: {}): _271.MsgSetUserPermissionsResponse;
            };
            Subspace: {
                encode(message: _270.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Subspace;
                fromJSON(object: any): _270.Subspace;
                toJSON(message: _270.Subspace): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                    creationTime?: Date;
                }): _270.Subspace;
            };
            Section: {
                encode(message: _270.Section, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Section;
                fromJSON(object: any): _270.Section;
                toJSON(message: _270.Section): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    parentId?: number;
                    name?: string;
                    description?: string;
                }): _270.Section;
            };
            UserGroup: {
                encode(message: _270.UserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.UserGroup;
                fromJSON(object: any): _270.UserGroup;
                toJSON(message: _270.UserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    id?: number;
                    name?: string;
                    description?: string;
                    permissions?: string[];
                }): _270.UserGroup;
            };
            UserPermission: {
                encode(message: _270.UserPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.UserPermission;
                fromJSON(object: any): _270.UserPermission;
                toJSON(message: _270.UserPermission): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                    permissions?: string[];
                }): _270.UserPermission;
            };
            GenesisState: {
                encode(message: _269.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.GenesisState;
                fromJSON(object: any): _269.GenesisState;
                toJSON(message: _269.GenesisState): unknown;
                fromPartial(object: {
                    initialSubspaceId?: any;
                    subspacesData?: {
                        subspaceId?: any;
                        nextGroupId?: number;
                        nextSectionId?: number;
                    }[];
                    subspaces?: {
                        id?: any;
                        name?: string;
                        description?: string;
                        treasury?: string;
                        owner?: string;
                        creator?: string;
                        creationTime?: Date;
                    }[];
                    sections?: {
                        subspaceId?: any;
                        id?: number;
                        parentId?: number;
                        name?: string;
                        description?: string;
                    }[];
                    userPermissions?: {
                        subspaceId?: any;
                        sectionId?: number;
                        user?: string;
                        permissions?: string[];
                    }[];
                    userGroups?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: number;
                        name?: string;
                        description?: string;
                        permissions?: string[];
                    }[];
                    userGroupsMembers?: {
                        subspaceId?: any;
                        groupId?: number;
                        user?: string;
                    }[];
                }): _269.GenesisState;
            };
            SubspaceData: {
                encode(message: _269.SubspaceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SubspaceData;
                fromJSON(object: any): _269.SubspaceData;
                toJSON(message: _269.SubspaceData): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    nextGroupId?: number;
                    nextSectionId?: number;
                }): _269.SubspaceData;
            };
            UserGroupMemberEntry: {
                encode(message: _269.UserGroupMemberEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.UserGroupMemberEntry;
                fromJSON(object: any): _269.UserGroupMemberEntry;
                toJSON(message: _269.UserGroupMemberEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                }): _269.UserGroupMemberEntry;
            };
        };
    }
    namespace supply {
        const v1: {
            QueryTotalRequest: {
                encode(message: _273.QueryTotalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryTotalRequest;
                fromJSON(object: any): _273.QueryTotalRequest;
                toJSON(message: _273.QueryTotalRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    dividerExponent?: any;
                }): _273.QueryTotalRequest;
            };
            QueryTotalResponse: {
                encode(message: _273.QueryTotalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryTotalResponse;
                fromJSON(object: any): _273.QueryTotalResponse;
                toJSON(message: _273.QueryTotalResponse): unknown;
                fromPartial(object: {
                    totalSupply?: string;
                }): _273.QueryTotalResponse;
            };
            QueryCirculatingRequest: {
                encode(message: _273.QueryCirculatingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryCirculatingRequest;
                fromJSON(object: any): _273.QueryCirculatingRequest;
                toJSON(message: _273.QueryCirculatingRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    dividerExponent?: any;
                }): _273.QueryCirculatingRequest;
            };
            QueryCirculatingResponse: {
                encode(message: _273.QueryCirculatingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryCirculatingResponse;
                fromJSON(object: any): _273.QueryCirculatingResponse;
                toJSON(message: _273.QueryCirculatingResponse): unknown;
                fromPartial(object: {
                    circulatingSupply?: string;
                }): _273.QueryCirculatingResponse;
            };
        };
    }
}
