import * as _286 from "./fees/v1/genesis";
import * as _287 from "./fees/v1/min_fee";
import * as _288 from "./fees/v1/params";
import * as _289 from "./fees/v1/query";
import * as _290 from "./posts/v1/models";
import * as _291 from "./posts/v2/genesis";
import * as _292 from "./posts/v2/models";
import * as _293 from "./posts/v2/msgs";
import * as _294 from "./posts/v2/query";
import * as _295 from "./profiles/v1beta1/models_app_links";
import * as _296 from "./profiles/v1beta1/models_chain_links";
import * as _297 from "./profiles/v1beta1/models_dtag_requests";
import * as _298 from "./profiles/v1beta1/models_profile";
import * as _299 from "./profiles/v1beta1/models_relationships";
import * as _300 from "./profiles/v2/models_app_links";
import * as _301 from "./profiles/v2/models_chain_links";
import * as _302 from "./profiles/v2/models_dtag_requests";
import * as _303 from "./profiles/v2/models_params";
import * as _304 from "./profiles/v2/models_profile";
import * as _305 from "./profiles/v3/genesis";
import * as _306 from "./profiles/v3/models_app_links";
import * as _307 from "./profiles/v3/models_chain_links";
import * as _308 from "./profiles/v3/models_dtag_requests";
import * as _309 from "./profiles/v3/models_packets";
import * as _310 from "./profiles/v3/models_params";
import * as _311 from "./profiles/v3/models_profile";
import * as _313 from "./profiles/v3/msgs_app_links";
import * as _314 from "./profiles/v3/msgs_chain_links";
import * as _315 from "./profiles/v3/msgs_dtag_requests";
import * as _316 from "./profiles/v3/msgs_profile";
import * as _317 from "./profiles/v3/query_app_links";
import * as _318 from "./profiles/v3/query_chain_links";
import * as _319 from "./profiles/v3/query_dtag_requests";
import * as _320 from "./profiles/v3/query_params";
import * as _321 from "./profiles/v3/query_profile";
import * as _323 from "./reactions/v1/genesis";
import * as _324 from "./reactions/v1/models";
import * as _325 from "./reactions/v1/msgs";
import * as _326 from "./reactions/v1/query";
import * as _327 from "./relationships/v1/genesis";
import * as _328 from "./relationships/v1/models";
import * as _329 from "./relationships/v1/msgs";
import * as _330 from "./relationships/v1/query";
import * as _331 from "./reports/v1/genesis";
import * as _332 from "./reports/v1/models";
import * as _333 from "./reports/v1/msgs";
import * as _334 from "./reports/v1/query";
import * as _335 from "./subspaces/v1/models";
import * as _336 from "./subspaces/v2/authz/authz";
import * as _337 from "./subspaces/v3/genesis";
import * as _338 from "./subspaces/v3/models";
import * as _339 from "./subspaces/v3/msgs";
import * as _340 from "./subspaces/v3/query";
import * as _341 from "./supply/v1/query";
export declare namespace desmos {
    namespace fees {
        const v1: {
            QueryParamsRequest: {
                encode(_: _289.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryParamsRequest;
                fromJSON(_: any): _289.QueryParamsRequest;
                toJSON(_: _289.QueryParamsRequest): unknown;
                fromPartial(_: {}): _289.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _289.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryParamsResponse;
                fromJSON(object: any): _289.QueryParamsResponse;
                toJSON(message: _289.QueryParamsResponse): unknown;
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
                }): _289.QueryParamsResponse;
            };
            Params: {
                encode(message: _288.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Params;
                fromJSON(object: any): _288.Params;
                toJSON(message: _288.Params): unknown;
                fromPartial(object: {
                    minFees?: {
                        messageType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _288.Params;
            };
            MinFee: {
                encode(message: _287.MinFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.MinFee;
                fromJSON(object: any): _287.MinFee;
                toJSON(message: _287.MinFee): unknown;
                fromPartial(object: {
                    messageType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _287.MinFee;
            };
            GenesisState: {
                encode(message: _286.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.GenesisState;
                fromJSON(object: any): _286.GenesisState;
                toJSON(message: _286.GenesisState): unknown;
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
                }): _286.GenesisState;
            };
        };
    }
    namespace posts {
        const v1: {
            postReferenceTypeFromJSON(object: any): _290.PostReferenceType;
            postReferenceTypeToJSON(object: _290.PostReferenceType): string;
            replySettingFromJSON(object: any): _290.ReplySetting;
            replySettingToJSON(object: _290.ReplySetting): string;
            PostReferenceType: typeof _290.PostReferenceType;
            ReplySetting: typeof _290.ReplySetting;
            Post: {
                encode(message: _290.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Post;
                fromJSON(object: any): _290.Post;
                toJSON(message: _290.Post): unknown;
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
                        type?: _290.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                    replySettings?: _290.ReplySetting;
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastEditedDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _290.Post;
            };
            PostReference: {
                encode(message: _290.PostReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.PostReference;
                fromJSON(object: any): _290.PostReference;
                toJSON(message: _290.PostReference): unknown;
                fromPartial(object: {
                    type?: _290.PostReferenceType;
                    postId?: any;
                    position?: any;
                }): _290.PostReference;
            };
            Entities: {
                encode(message: _290.Entities, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Entities;
                fromJSON(object: any): _290.Entities;
                toJSON(message: _290.Entities): unknown;
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
                }): _290.Entities;
            };
            Tag: {
                encode(message: _290.Tag, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Tag;
                fromJSON(object: any): _290.Tag;
                toJSON(message: _290.Tag): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    tag?: string;
                }): _290.Tag;
            };
            Url: {
                encode(message: _290.Url, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Url;
                fromJSON(object: any): _290.Url;
                toJSON(message: _290.Url): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    url?: string;
                    displayUrl?: string;
                }): _290.Url;
            };
            Attachment: {
                encode(message: _290.Attachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Attachment;
                fromJSON(object: any): _290.Attachment;
                toJSON(message: _290.Attachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    postId?: any;
                    id?: number;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _290.Attachment;
            };
            Media: {
                encode(message: _290.Media, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Media;
                fromJSON(object: any): _290.Media;
                toJSON(message: _290.Media): unknown;
                fromPartial(object: {
                    uri?: string;
                    mimeType?: string;
                }): _290.Media;
            };
            Poll: {
                encode(message: _290.Poll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Poll;
                fromJSON(object: any): _290.Poll;
                toJSON(message: _290.Poll): unknown;
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
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    allowsMultipleAnswers?: boolean;
                    allowsAnswerEdits?: boolean;
                    finalTallyResults?: {
                        results?: {
                            answerIndex?: number;
                            votes?: any;
                        }[];
                    };
                }): _290.Poll;
            };
            Poll_ProvidedAnswer: {
                encode(message: _290.Poll_ProvidedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Poll_ProvidedAnswer;
                fromJSON(object: any): _290.Poll_ProvidedAnswer;
                toJSON(message: _290.Poll_ProvidedAnswer): unknown;
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
                }): _290.Poll_ProvidedAnswer;
            };
            UserAnswer: {
                encode(message: _290.UserAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.UserAnswer;
                fromJSON(object: any): _290.UserAnswer;
                toJSON(message: _290.UserAnswer): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    user?: string;
                }): _290.UserAnswer;
            };
            PollTallyResults: {
                encode(message: _290.PollTallyResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.PollTallyResults;
                fromJSON(object: any): _290.PollTallyResults;
                toJSON(message: _290.PollTallyResults): unknown;
                fromPartial(object: {
                    results?: {
                        answerIndex?: number;
                        votes?: any;
                    }[];
                }): _290.PollTallyResults;
            };
            PollTallyResults_AnswerResult: {
                encode(message: _290.PollTallyResults_AnswerResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.PollTallyResults_AnswerResult;
                fromJSON(object: any): _290.PollTallyResults_AnswerResult;
                toJSON(message: _290.PollTallyResults_AnswerResult): unknown;
                fromPartial(object: {
                    answerIndex?: number;
                    votes?: any;
                }): _290.PollTallyResults_AnswerResult;
            };
            Params: {
                encode(message: _290.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Params;
                fromJSON(object: any): _290.Params;
                toJSON(message: _290.Params): unknown;
                fromPartial(object: {
                    maxTextLength?: number;
                }): _290.Params;
            };
        };
        const v2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPost(value: _293.MsgCreatePost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editPost(value: _293.MsgEditPost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deletePost(value: _293.MsgDeletePost): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addPostAttachment(value: _293.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePostAttachment(value: _293.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    answerPoll(value: _293.MsgAnswerPoll): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPost(value: _293.MsgCreatePost): {
                        typeUrl: string;
                        value: _293.MsgCreatePost;
                    };
                    editPost(value: _293.MsgEditPost): {
                        typeUrl: string;
                        value: _293.MsgEditPost;
                    };
                    deletePost(value: _293.MsgDeletePost): {
                        typeUrl: string;
                        value: _293.MsgDeletePost;
                    };
                    addPostAttachment(value: _293.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: _293.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: _293.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: _293.MsgRemovePostAttachment;
                    };
                    answerPoll(value: _293.MsgAnswerPoll): {
                        typeUrl: string;
                        value: _293.MsgAnswerPoll;
                    };
                };
                toJSON: {
                    createPost(value: _293.MsgCreatePost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editPost(value: _293.MsgEditPost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deletePost(value: _293.MsgDeletePost): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addPostAttachment(value: _293.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removePostAttachment(value: _293.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    answerPoll(value: _293.MsgAnswerPoll): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createPost(value: any): {
                        typeUrl: string;
                        value: _293.MsgCreatePost;
                    };
                    editPost(value: any): {
                        typeUrl: string;
                        value: _293.MsgEditPost;
                    };
                    deletePost(value: any): {
                        typeUrl: string;
                        value: _293.MsgDeletePost;
                    };
                    addPostAttachment(value: any): {
                        typeUrl: string;
                        value: _293.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: any): {
                        typeUrl: string;
                        value: _293.MsgRemovePostAttachment;
                    };
                    answerPoll(value: any): {
                        typeUrl: string;
                        value: _293.MsgAnswerPoll;
                    };
                };
                fromPartial: {
                    createPost(value: _293.MsgCreatePost): {
                        typeUrl: string;
                        value: _293.MsgCreatePost;
                    };
                    editPost(value: _293.MsgEditPost): {
                        typeUrl: string;
                        value: _293.MsgEditPost;
                    };
                    deletePost(value: _293.MsgDeletePost): {
                        typeUrl: string;
                        value: _293.MsgDeletePost;
                    };
                    addPostAttachment(value: _293.MsgAddPostAttachment): {
                        typeUrl: string;
                        value: _293.MsgAddPostAttachment;
                    };
                    removePostAttachment(value: _293.MsgRemovePostAttachment): {
                        typeUrl: string;
                        value: _293.MsgRemovePostAttachment;
                    };
                    answerPoll(value: _293.MsgAnswerPoll): {
                        typeUrl: string;
                        value: _293.MsgAnswerPoll;
                    };
                };
            };
            AminoConverter: {
                "/desmos.posts.v2.MsgCreatePost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, externalId, text, entities, tags, attachments, author, conversationId, replySettings, referencedPosts }: _293.MsgCreatePost) => {
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
                    }) => _293.MsgCreatePost;
                };
                "/desmos.posts.v2.MsgEditPost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, text, entities, tags, editor }: _293.MsgEditPost) => {
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
                    }) => _293.MsgEditPost;
                };
                "/desmos.posts.v2.MsgDeletePost": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, signer }: _293.MsgDeletePost) => {
                        subspace_id: string;
                        post_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, post_id, signer }: {
                        subspace_id: string;
                        post_id: string;
                        signer: string;
                    }) => _293.MsgDeletePost;
                };
                "/desmos.posts.v2.MsgAddPostAttachment": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, content, editor }: _293.MsgAddPostAttachment) => {
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
                    }) => _293.MsgAddPostAttachment;
                };
                "/desmos.posts.v2.MsgRemovePostAttachment": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, attachmentId, editor }: _293.MsgRemovePostAttachment) => {
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
                    }) => _293.MsgRemovePostAttachment;
                };
                "/desmos.posts.v2.MsgAnswerPoll": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, pollId, answersIndexes, signer }: _293.MsgAnswerPoll) => {
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
                    }) => _293.MsgAnswerPoll;
                };
            };
            QuerySubspacePostsRequest: {
                encode(message: _294.QuerySubspacePostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QuerySubspacePostsRequest;
                fromJSON(object: any): _294.QuerySubspacePostsRequest;
                toJSON(message: _294.QuerySubspacePostsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _294.QuerySubspacePostsRequest;
            };
            QuerySubspacePostsResponse: {
                encode(message: _294.QuerySubspacePostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QuerySubspacePostsResponse;
                fromJSON(object: any): _294.QuerySubspacePostsResponse;
                toJSON(message: _294.QuerySubspacePostsResponse): unknown;
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
                            type?: _292.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _292.ReplySetting;
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastEditedDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _294.QuerySubspacePostsResponse;
            };
            QuerySectionPostsRequest: {
                encode(message: _294.QuerySectionPostsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QuerySectionPostsRequest;
                fromJSON(object: any): _294.QuerySectionPostsRequest;
                toJSON(message: _294.QuerySectionPostsRequest): unknown;
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
                }): _294.QuerySectionPostsRequest;
            };
            QuerySectionPostsResponse: {
                encode(message: _294.QuerySectionPostsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QuerySectionPostsResponse;
                fromJSON(object: any): _294.QuerySectionPostsResponse;
                toJSON(message: _294.QuerySectionPostsResponse): unknown;
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
                            type?: _292.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _292.ReplySetting;
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastEditedDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _294.QuerySectionPostsResponse;
            };
            QueryPostRequest: {
                encode(message: _294.QueryPostRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPostRequest;
                fromJSON(object: any): _294.QueryPostRequest;
                toJSON(message: _294.QueryPostRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                }): _294.QueryPostRequest;
            };
            QueryPostResponse: {
                encode(message: _294.QueryPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPostResponse;
                fromJSON(object: any): _294.QueryPostResponse;
                toJSON(message: _294.QueryPostResponse): unknown;
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
                            type?: _292.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _292.ReplySetting;
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastEditedDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _294.QueryPostResponse;
            };
            QueryPostAttachmentsRequest: {
                encode(message: _294.QueryPostAttachmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPostAttachmentsRequest;
                fromJSON(object: any): _294.QueryPostAttachmentsRequest;
                toJSON(message: _294.QueryPostAttachmentsRequest): unknown;
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
                }): _294.QueryPostAttachmentsRequest;
            };
            QueryPostAttachmentsResponse: {
                encode(message: _294.QueryPostAttachmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPostAttachmentsResponse;
                fromJSON(object: any): _294.QueryPostAttachmentsResponse;
                toJSON(message: _294.QueryPostAttachmentsResponse): unknown;
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
                }): _294.QueryPostAttachmentsResponse;
            };
            QueryPollAnswersRequest: {
                encode(message: _294.QueryPollAnswersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPollAnswersRequest;
                fromJSON(object: any): _294.QueryPollAnswersRequest;
                toJSON(message: _294.QueryPollAnswersRequest): unknown;
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
                }): _294.QueryPollAnswersRequest;
            };
            QueryPollAnswersResponse: {
                encode(message: _294.QueryPollAnswersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryPollAnswersResponse;
                fromJSON(object: any): _294.QueryPollAnswersResponse;
                toJSON(message: _294.QueryPollAnswersResponse): unknown;
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
                }): _294.QueryPollAnswersResponse;
            };
            QueryParamsRequest: {
                encode(_: _294.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryParamsRequest;
                fromJSON(_: any): _294.QueryParamsRequest;
                toJSON(_: _294.QueryParamsRequest): unknown;
                fromPartial(_: {}): _294.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _294.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryParamsResponse;
                fromJSON(object: any): _294.QueryParamsResponse;
                toJSON(message: _294.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxTextLength?: number;
                    };
                }): _294.QueryParamsResponse;
            };
            MsgCreatePost: {
                encode(message: _293.MsgCreatePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgCreatePost;
                fromJSON(object: any): _293.MsgCreatePost;
                toJSON(message: _293.MsgCreatePost): unknown;
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
                    replySettings?: _292.ReplySetting;
                    referencedPosts?: {
                        type?: _292.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                }): _293.MsgCreatePost;
            };
            MsgCreatePostResponse: {
                encode(message: _293.MsgCreatePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgCreatePostResponse;
                fromJSON(object: any): _293.MsgCreatePostResponse;
                toJSON(message: _293.MsgCreatePostResponse): unknown;
                fromPartial(object: {
                    postId?: any;
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _293.MsgCreatePostResponse;
            };
            MsgEditPost: {
                encode(message: _293.MsgEditPost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgEditPost;
                fromJSON(object: any): _293.MsgEditPost;
                toJSON(message: _293.MsgEditPost): unknown;
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
                }): _293.MsgEditPost;
            };
            MsgEditPostResponse: {
                encode(message: _293.MsgEditPostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgEditPostResponse;
                fromJSON(object: any): _293.MsgEditPostResponse;
                toJSON(message: _293.MsgEditPostResponse): unknown;
                fromPartial(object: {
                    editDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _293.MsgEditPostResponse;
            };
            MsgDeletePost: {
                encode(message: _293.MsgDeletePost, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgDeletePost;
                fromJSON(object: any): _293.MsgDeletePost;
                toJSON(message: _293.MsgDeletePost): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    signer?: string;
                }): _293.MsgDeletePost;
            };
            MsgDeletePostResponse: {
                encode(_: _293.MsgDeletePostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgDeletePostResponse;
                fromJSON(_: any): _293.MsgDeletePostResponse;
                toJSON(_: _293.MsgDeletePostResponse): unknown;
                fromPartial(_: {}): _293.MsgDeletePostResponse;
            };
            MsgAddPostAttachment: {
                encode(message: _293.MsgAddPostAttachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgAddPostAttachment;
                fromJSON(object: any): _293.MsgAddPostAttachment;
                toJSON(message: _293.MsgAddPostAttachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    editor?: string;
                }): _293.MsgAddPostAttachment;
            };
            MsgAddPostAttachmentResponse: {
                encode(message: _293.MsgAddPostAttachmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgAddPostAttachmentResponse;
                fromJSON(object: any): _293.MsgAddPostAttachmentResponse;
                toJSON(message: _293.MsgAddPostAttachmentResponse): unknown;
                fromPartial(object: {
                    attachmentId?: number;
                    editDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _293.MsgAddPostAttachmentResponse;
            };
            MsgRemovePostAttachment: {
                encode(message: _293.MsgRemovePostAttachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgRemovePostAttachment;
                fromJSON(object: any): _293.MsgRemovePostAttachment;
                toJSON(message: _293.MsgRemovePostAttachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    attachmentId?: number;
                    editor?: string;
                }): _293.MsgRemovePostAttachment;
            };
            MsgRemovePostAttachmentResponse: {
                encode(message: _293.MsgRemovePostAttachmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgRemovePostAttachmentResponse;
                fromJSON(object: any): _293.MsgRemovePostAttachmentResponse;
                toJSON(message: _293.MsgRemovePostAttachmentResponse): unknown;
                fromPartial(object: {
                    editDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _293.MsgRemovePostAttachmentResponse;
            };
            MsgAnswerPoll: {
                encode(message: _293.MsgAnswerPoll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgAnswerPoll;
                fromJSON(object: any): _293.MsgAnswerPoll;
                toJSON(message: _293.MsgAnswerPoll): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    signer?: string;
                }): _293.MsgAnswerPoll;
            };
            MsgAnswerPollResponse: {
                encode(_: _293.MsgAnswerPollResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgAnswerPollResponse;
                fromJSON(_: any): _293.MsgAnswerPollResponse;
                toJSON(_: _293.MsgAnswerPollResponse): unknown;
                fromPartial(_: {}): _293.MsgAnswerPollResponse;
            };
            postReferenceTypeFromJSON(object: any): _292.PostReferenceType;
            postReferenceTypeToJSON(object: _292.PostReferenceType): string;
            replySettingFromJSON(object: any): _292.ReplySetting;
            replySettingToJSON(object: _292.ReplySetting): string;
            PostReferenceType: typeof _292.PostReferenceType;
            ReplySetting: typeof _292.ReplySetting;
            Post: {
                encode(message: _292.Post, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Post;
                fromJSON(object: any): _292.Post;
                toJSON(message: _292.Post): unknown;
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
                        type?: _292.PostReferenceType;
                        postId?: any;
                        position?: any;
                    }[];
                    replySettings?: _292.ReplySetting;
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastEditedDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _292.Post;
            };
            PostReference: {
                encode(message: _292.PostReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.PostReference;
                fromJSON(object: any): _292.PostReference;
                toJSON(message: _292.PostReference): unknown;
                fromPartial(object: {
                    type?: _292.PostReferenceType;
                    postId?: any;
                    position?: any;
                }): _292.PostReference;
            };
            Entities: {
                encode(message: _292.Entities, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Entities;
                fromJSON(object: any): _292.Entities;
                toJSON(message: _292.Entities): unknown;
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
                }): _292.Entities;
            };
            TextTag: {
                encode(message: _292.TextTag, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.TextTag;
                fromJSON(object: any): _292.TextTag;
                toJSON(message: _292.TextTag): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    tag?: string;
                }): _292.TextTag;
            };
            Url: {
                encode(message: _292.Url, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Url;
                fromJSON(object: any): _292.Url;
                toJSON(message: _292.Url): unknown;
                fromPartial(object: {
                    start?: any;
                    end?: any;
                    url?: string;
                    displayUrl?: string;
                }): _292.Url;
            };
            Attachment: {
                encode(message: _292.Attachment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Attachment;
                fromJSON(object: any): _292.Attachment;
                toJSON(message: _292.Attachment): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    id?: number;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _292.Attachment;
            };
            Media: {
                encode(message: _292.Media, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Media;
                fromJSON(object: any): _292.Media;
                toJSON(message: _292.Media): unknown;
                fromPartial(object: {
                    uri?: string;
                    mimeType?: string;
                }): _292.Media;
            };
            Poll: {
                encode(message: _292.Poll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Poll;
                fromJSON(object: any): _292.Poll;
                toJSON(message: _292.Poll): unknown;
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
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    allowsMultipleAnswers?: boolean;
                    allowsAnswerEdits?: boolean;
                    finalTallyResults?: {
                        results?: {
                            answerIndex?: number;
                            votes?: any;
                        }[];
                    };
                }): _292.Poll;
            };
            Poll_ProvidedAnswer: {
                encode(message: _292.Poll_ProvidedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Poll_ProvidedAnswer;
                fromJSON(object: any): _292.Poll_ProvidedAnswer;
                toJSON(message: _292.Poll_ProvidedAnswer): unknown;
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
                }): _292.Poll_ProvidedAnswer;
            };
            UserAnswer: {
                encode(message: _292.UserAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.UserAnswer;
                fromJSON(object: any): _292.UserAnswer;
                toJSON(message: _292.UserAnswer): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    answersIndexes?: number[];
                    user?: string;
                }): _292.UserAnswer;
            };
            PollTallyResults: {
                encode(message: _292.PollTallyResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.PollTallyResults;
                fromJSON(object: any): _292.PollTallyResults;
                toJSON(message: _292.PollTallyResults): unknown;
                fromPartial(object: {
                    results?: {
                        answerIndex?: number;
                        votes?: any;
                    }[];
                }): _292.PollTallyResults;
            };
            PollTallyResults_AnswerResult: {
                encode(message: _292.PollTallyResults_AnswerResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.PollTallyResults_AnswerResult;
                fromJSON(object: any): _292.PollTallyResults_AnswerResult;
                toJSON(message: _292.PollTallyResults_AnswerResult): unknown;
                fromPartial(object: {
                    answerIndex?: number;
                    votes?: any;
                }): _292.PollTallyResults_AnswerResult;
            };
            Params: {
                encode(message: _292.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Params;
                fromJSON(object: any): _292.Params;
                toJSON(message: _292.Params): unknown;
                fromPartial(object: {
                    maxTextLength?: number;
                }): _292.Params;
            };
            GenesisState: {
                encode(message: _291.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.GenesisState;
                fromJSON(object: any): _291.GenesisState;
                toJSON(message: _291.GenesisState): unknown;
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
                            type?: _292.PostReferenceType;
                            postId?: any;
                            position?: any;
                        }[];
                        replySettings?: _292.ReplySetting;
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastEditedDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                }): _291.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _291.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.SubspaceDataEntry;
                fromJSON(object: any): _291.SubspaceDataEntry;
                toJSON(message: _291.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    initialPostId?: any;
                }): _291.SubspaceDataEntry;
            };
            PostDataEntry: {
                encode(message: _291.PostDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.PostDataEntry;
                fromJSON(object: any): _291.PostDataEntry;
                toJSON(message: _291.PostDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    initialAttachmentId?: number;
                }): _291.PostDataEntry;
            };
            ActivePollData: {
                encode(message: _291.ActivePollData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.ActivePollData;
                fromJSON(object: any): _291.ActivePollData;
                toJSON(message: _291.ActivePollData): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    pollId?: number;
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _291.ActivePollData;
            };
        };
    }
    namespace profiles {
        const v1beta1: {
            Relationship: {
                encode(message: _299.Relationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.Relationship;
                fromJSON(object: any): _299.Relationship;
                toJSON(message: _299.Relationship): unknown;
                fromPartial(object: {
                    creator?: string;
                    recipient?: string;
                    subspaceId?: string;
                }): _299.Relationship;
            };
            UserBlock: {
                encode(message: _299.UserBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.UserBlock;
                fromJSON(object: any): _299.UserBlock;
                toJSON(message: _299.UserBlock): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: string;
                }): _299.UserBlock;
            };
            Profile: {
                encode(message: _298.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Profile;
                fromJSON(object: any): _298.Profile;
                toJSON(message: _298.Profile): unknown;
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
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _298.Profile;
            };
            Pictures: {
                encode(message: _298.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Pictures;
                fromJSON(object: any): _298.Pictures;
                toJSON(message: _298.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _298.Pictures;
            };
            DTagTransferRequest: {
                encode(message: _297.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.DTagTransferRequest;
                fromJSON(object: any): _297.DTagTransferRequest;
                toJSON(message: _297.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _297.DTagTransferRequest;
            };
            ChainLink: {
                encode(message: _296.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.ChainLink;
                fromJSON(object: any): _296.ChainLink;
                toJSON(message: _296.ChainLink): unknown;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _296.ChainLink;
            };
            ChainConfig: {
                encode(message: _296.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.ChainConfig;
                fromJSON(object: any): _296.ChainConfig;
                toJSON(message: _296.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _296.ChainConfig;
            };
            Proof: {
                encode(message: _296.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Proof;
                fromJSON(object: any): _296.Proof;
                toJSON(message: _296.Proof): unknown;
                fromPartial(object: {
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    signature?: string;
                    plainText?: string;
                }): _296.Proof;
            };
            Bech32Address: {
                encode(message: _296.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Bech32Address;
                fromJSON(object: any): _296.Bech32Address;
                toJSON(message: _296.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _296.Bech32Address;
            };
            Base58Address: {
                encode(message: _296.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Base58Address;
                fromJSON(object: any): _296.Base58Address;
                toJSON(message: _296.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _296.Base58Address;
            };
            HexAddress: {
                encode(message: _296.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.HexAddress;
                fromJSON(object: any): _296.HexAddress;
                toJSON(message: _296.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _296.HexAddress;
            };
            applicationLinkStateFromJSON(object: any): _295.ApplicationLinkState;
            applicationLinkStateToJSON(object: _295.ApplicationLinkState): string;
            ApplicationLinkState: typeof _295.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _295.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.ApplicationLink;
                fromJSON(object: any): _295.ApplicationLink;
                toJSON(message: _295.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _295.ApplicationLinkState;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _295.ApplicationLink;
            };
            Data: {
                encode(message: _295.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Data;
                fromJSON(object: any): _295.Data;
                toJSON(message: _295.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _295.Data;
            };
            OracleRequest: {
                encode(message: _295.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.OracleRequest;
                fromJSON(object: any): _295.OracleRequest;
                toJSON(message: _295.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _295.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _295.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.OracleRequest_CallData;
                fromJSON(object: any): _295.OracleRequest_CallData;
                toJSON(message: _295.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _295.OracleRequest_CallData;
            };
            Result: {
                encode(message: _295.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Result;
                fromJSON(object: any): _295.Result;
                toJSON(message: _295.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _295.Result;
            };
            Result_Success: {
                encode(message: _295.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Result_Success;
                fromJSON(object: any): _295.Result_Success;
                toJSON(message: _295.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _295.Result_Success;
            };
            Result_Failed: {
                encode(message: _295.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Result_Failed;
                fromJSON(object: any): _295.Result_Failed;
                toJSON(message: _295.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _295.Result_Failed;
            };
        };
        const v2: {
            Profile: {
                encode(message: _304.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Profile;
                fromJSON(object: any): _304.Profile;
                toJSON(message: _304.Profile): unknown;
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
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _304.Profile;
            };
            Pictures: {
                encode(message: _304.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Pictures;
                fromJSON(object: any): _304.Pictures;
                toJSON(message: _304.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _304.Pictures;
            };
            Params: {
                encode(message: _303.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.Params;
                fromJSON(object: any): _303.Params;
                toJSON(message: _303.Params): unknown;
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
                }): _303.Params;
            };
            NicknameParams: {
                encode(message: _303.NicknameParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.NicknameParams;
                fromJSON(object: any): _303.NicknameParams;
                toJSON(message: _303.NicknameParams): unknown;
                fromPartial(object: {
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _303.NicknameParams;
            };
            DTagParams: {
                encode(message: _303.DTagParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.DTagParams;
                fromJSON(object: any): _303.DTagParams;
                toJSON(message: _303.DTagParams): unknown;
                fromPartial(object: {
                    regEx?: string;
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _303.DTagParams;
            };
            BioParams: {
                encode(message: _303.BioParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.BioParams;
                fromJSON(object: any): _303.BioParams;
                toJSON(message: _303.BioParams): unknown;
                fromPartial(object: {
                    maxLength?: Uint8Array;
                }): _303.BioParams;
            };
            OracleParams: {
                encode(message: _303.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.OracleParams;
                fromJSON(object: any): _303.OracleParams;
                toJSON(message: _303.OracleParams): unknown;
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
                }): _303.OracleParams;
            };
            DTagTransferRequest: {
                encode(message: _302.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.DTagTransferRequest;
                fromJSON(object: any): _302.DTagTransferRequest;
                toJSON(message: _302.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _302.DTagTransferRequest;
            };
            ChainLink: {
                encode(message: _301.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.ChainLink;
                fromJSON(object: any): _301.ChainLink;
                toJSON(message: _301.ChainLink): unknown;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _301.ChainLink;
            };
            ChainConfig: {
                encode(message: _301.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.ChainConfig;
                fromJSON(object: any): _301.ChainConfig;
                toJSON(message: _301.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _301.ChainConfig;
            };
            Proof: {
                encode(message: _301.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.Proof;
                fromJSON(object: any): _301.Proof;
                toJSON(message: _301.Proof): unknown;
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
                }): _301.Proof;
            };
            Bech32Address: {
                encode(message: _301.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.Bech32Address;
                fromJSON(object: any): _301.Bech32Address;
                toJSON(message: _301.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _301.Bech32Address;
            };
            Base58Address: {
                encode(message: _301.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.Base58Address;
                fromJSON(object: any): _301.Base58Address;
                toJSON(message: _301.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _301.Base58Address;
            };
            HexAddress: {
                encode(message: _301.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.HexAddress;
                fromJSON(object: any): _301.HexAddress;
                toJSON(message: _301.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _301.HexAddress;
            };
            SingleSignatureData: {
                encode(message: _301.SingleSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.SingleSignatureData;
                fromJSON(object: any): _301.SingleSignatureData;
                toJSON(message: _301.SingleSignatureData): unknown;
                fromPartial(object: {
                    mode?: import("../cosmos/tx/signing/v1beta1/signing").SignMode;
                    signature?: Uint8Array;
                }): _301.SingleSignatureData;
            };
            MultiSignatureData: {
                encode(message: _301.MultiSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MultiSignatureData;
                fromJSON(object: any): _301.MultiSignatureData;
                toJSON(message: _301.MultiSignatureData): unknown;
                fromPartial(object: {
                    bitArray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    signatures?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _301.MultiSignatureData;
            };
            applicationLinkStateFromJSON(object: any): _300.ApplicationLinkState;
            applicationLinkStateToJSON(object: _300.ApplicationLinkState): string;
            ApplicationLinkState: typeof _300.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _300.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.ApplicationLink;
                fromJSON(object: any): _300.ApplicationLink;
                toJSON(message: _300.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _300.ApplicationLinkState;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _300.ApplicationLink;
            };
            Data: {
                encode(message: _300.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.Data;
                fromJSON(object: any): _300.Data;
                toJSON(message: _300.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _300.Data;
            };
            OracleRequest: {
                encode(message: _300.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.OracleRequest;
                fromJSON(object: any): _300.OracleRequest;
                toJSON(message: _300.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _300.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _300.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.OracleRequest_CallData;
                fromJSON(object: any): _300.OracleRequest_CallData;
                toJSON(message: _300.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _300.OracleRequest_CallData;
            };
            Result: {
                encode(message: _300.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.Result;
                fromJSON(object: any): _300.Result;
                toJSON(message: _300.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _300.Result;
            };
            Result_Success: {
                encode(message: _300.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.Result_Success;
                fromJSON(object: any): _300.Result_Success;
                toJSON(message: _300.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _300.Result_Success;
            };
            Result_Failed: {
                encode(message: _300.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.Result_Failed;
                fromJSON(object: any): _300.Result_Failed;
                toJSON(message: _300.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _300.Result_Failed;
            };
        };
        const v3: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    saveProfile(value: _316.MsgSaveProfile): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProfile(value: _316.MsgDeleteProfile): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestDTagTransfer(value: _315.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDTagTransferRequest(value: _315.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptDTagTransferRequest(value: _315.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refuseDTagTransferRequest(value: _315.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    linkChainAccount(value: _314.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlinkChainAccount(value: _314.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDefaultExternalAddress(value: _314.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    linkApplication(value: _313.MsgLinkApplication): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlinkApplication(value: _313.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    saveProfile(value: _316.MsgSaveProfile): {
                        typeUrl: string;
                        value: _316.MsgSaveProfile;
                    };
                    deleteProfile(value: _316.MsgDeleteProfile): {
                        typeUrl: string;
                        value: _316.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: _315.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: _315.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: _315.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: _315.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: _315.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: _314.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: _314.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: _314.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: _314.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: _314.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: _314.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: _313.MsgLinkApplication): {
                        typeUrl: string;
                        value: _313.MsgLinkApplication;
                    };
                    unlinkApplication(value: _313.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: _313.MsgUnlinkApplication;
                    };
                };
                toJSON: {
                    saveProfile(value: _316.MsgSaveProfile): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProfile(value: _316.MsgDeleteProfile): {
                        typeUrl: string;
                        value: unknown;
                    };
                    requestDTagTransfer(value: _315.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelDTagTransferRequest(value: _315.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acceptDTagTransferRequest(value: _315.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    refuseDTagTransferRequest(value: _315.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    linkChainAccount(value: _314.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlinkChainAccount(value: _314.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDefaultExternalAddress(value: _314.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    linkApplication(value: _313.MsgLinkApplication): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlinkApplication(value: _313.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    saveProfile(value: any): {
                        typeUrl: string;
                        value: _316.MsgSaveProfile;
                    };
                    deleteProfile(value: any): {
                        typeUrl: string;
                        value: _316.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: any): {
                        typeUrl: string;
                        value: _315.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _315.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _315.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: any): {
                        typeUrl: string;
                        value: _315.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: any): {
                        typeUrl: string;
                        value: _314.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: any): {
                        typeUrl: string;
                        value: _314.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: any): {
                        typeUrl: string;
                        value: _314.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: any): {
                        typeUrl: string;
                        value: _313.MsgLinkApplication;
                    };
                    unlinkApplication(value: any): {
                        typeUrl: string;
                        value: _313.MsgUnlinkApplication;
                    };
                };
                fromPartial: {
                    saveProfile(value: _316.MsgSaveProfile): {
                        typeUrl: string;
                        value: _316.MsgSaveProfile;
                    };
                    deleteProfile(value: _316.MsgDeleteProfile): {
                        typeUrl: string;
                        value: _316.MsgDeleteProfile;
                    };
                    requestDTagTransfer(value: _315.MsgRequestDTagTransfer): {
                        typeUrl: string;
                        value: _315.MsgRequestDTagTransfer;
                    };
                    cancelDTagTransferRequest(value: _315.MsgCancelDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgCancelDTagTransferRequest;
                    };
                    acceptDTagTransferRequest(value: _315.MsgAcceptDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgAcceptDTagTransferRequest;
                    };
                    refuseDTagTransferRequest(value: _315.MsgRefuseDTagTransferRequest): {
                        typeUrl: string;
                        value: _315.MsgRefuseDTagTransferRequest;
                    };
                    linkChainAccount(value: _314.MsgLinkChainAccount): {
                        typeUrl: string;
                        value: _314.MsgLinkChainAccount;
                    };
                    unlinkChainAccount(value: _314.MsgUnlinkChainAccount): {
                        typeUrl: string;
                        value: _314.MsgUnlinkChainAccount;
                    };
                    setDefaultExternalAddress(value: _314.MsgSetDefaultExternalAddress): {
                        typeUrl: string;
                        value: _314.MsgSetDefaultExternalAddress;
                    };
                    linkApplication(value: _313.MsgLinkApplication): {
                        typeUrl: string;
                        value: _313.MsgLinkApplication;
                    };
                    unlinkApplication(value: _313.MsgUnlinkApplication): {
                        typeUrl: string;
                        value: _313.MsgUnlinkApplication;
                    };
                };
            };
            AminoConverter: {
                "/desmos.profiles.v3.MsgSaveProfile": {
                    aminoType: string;
                    toAmino: ({ dtag, nickname, bio, profilePicture, coverPicture, creator }: _316.MsgSaveProfile) => {
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
                    }) => _316.MsgSaveProfile;
                };
                "/desmos.profiles.v3.MsgDeleteProfile": {
                    aminoType: string;
                    toAmino: ({ creator }: _316.MsgDeleteProfile) => {
                        creator: string;
                    };
                    fromAmino: ({ creator }: {
                        creator: string;
                    }) => _316.MsgDeleteProfile;
                };
                "/desmos.profiles.v3.MsgRequestDTagTransfer": {
                    aminoType: string;
                    toAmino: ({ receiver, sender }: _315.MsgRequestDTagTransfer) => {
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ receiver, sender }: {
                        receiver: string;
                        sender: string;
                    }) => _315.MsgRequestDTagTransfer;
                };
                "/desmos.profiles.v3.MsgCancelDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ receiver, sender }: _315.MsgCancelDTagTransferRequest) => {
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ receiver, sender }: {
                        receiver: string;
                        sender: string;
                    }) => _315.MsgCancelDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgAcceptDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ newDtag, sender, receiver }: _315.MsgAcceptDTagTransferRequest) => {
                        new_dtag: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ new_dtag, sender, receiver }: {
                        new_dtag: string;
                        sender: string;
                        receiver: string;
                    }) => _315.MsgAcceptDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgRefuseDTagTransferRequest": {
                    aminoType: string;
                    toAmino: ({ sender, receiver }: _315.MsgRefuseDTagTransferRequest) => {
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ sender, receiver }: {
                        sender: string;
                        receiver: string;
                    }) => _315.MsgRefuseDTagTransferRequest;
                };
                "/desmos.profiles.v3.MsgLinkChainAccount": {
                    aminoType: string;
                    toAmino: ({ chainAddress, proof, chainConfig, signer }: _314.MsgLinkChainAccount) => {
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
                    }) => _314.MsgLinkChainAccount;
                };
                "/desmos.profiles.v3.MsgUnlinkChainAccount": {
                    aminoType: string;
                    toAmino: ({ owner, chainName, target }: _314.MsgUnlinkChainAccount) => {
                        owner: string;
                        chain_name: string;
                        target: string;
                    };
                    fromAmino: ({ owner, chain_name, target }: {
                        owner: string;
                        chain_name: string;
                        target: string;
                    }) => _314.MsgUnlinkChainAccount;
                };
                "/desmos.profiles.v3.MsgSetDefaultExternalAddress": {
                    aminoType: string;
                    toAmino: ({ chainName, target, signer }: _314.MsgSetDefaultExternalAddress) => {
                        chain_name: string;
                        target: string;
                        signer: string;
                    };
                    fromAmino: ({ chain_name, target, signer }: {
                        chain_name: string;
                        target: string;
                        signer: string;
                    }) => _314.MsgSetDefaultExternalAddress;
                };
                "/desmos.profiles.v3.MsgLinkApplication": {
                    aminoType: string;
                    toAmino: ({ sender, linkData, callData, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp }: _313.MsgLinkApplication) => {
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
                    }) => _313.MsgLinkApplication;
                };
                "/desmos.profiles.v3.MsgUnlinkApplication": {
                    aminoType: string;
                    toAmino: ({ application, username, signer }: _313.MsgUnlinkApplication) => {
                        application: string;
                        username: string;
                        signer: string;
                    };
                    fromAmino: ({ application, username, signer }: {
                        application: string;
                        username: string;
                        signer: string;
                    }) => _313.MsgUnlinkApplication;
                };
            };
            QueryProfileRequest: {
                encode(message: _321.QueryProfileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.QueryProfileRequest;
                fromJSON(object: any): _321.QueryProfileRequest;
                toJSON(message: _321.QueryProfileRequest): unknown;
                fromPartial(object: {
                    user?: string;
                }): _321.QueryProfileRequest;
            };
            QueryProfileResponse: {
                encode(message: _321.QueryProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.QueryProfileResponse;
                fromJSON(object: any): _321.QueryProfileResponse;
                toJSON(message: _321.QueryProfileResponse): unknown;
                fromPartial(object: {
                    profile?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _321.QueryProfileResponse;
            };
            QueryParamsRequest: {
                encode(_: _320.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _320.QueryParamsRequest;
                fromJSON(_: any): _320.QueryParamsRequest;
                toJSON(_: _320.QueryParamsRequest): unknown;
                fromPartial(_: {}): _320.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _320.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _320.QueryParamsResponse;
                fromJSON(object: any): _320.QueryParamsResponse;
                toJSON(message: _320.QueryParamsResponse): unknown;
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
                            validityDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    };
                }): _320.QueryParamsResponse;
            };
            QueryIncomingDTagTransferRequestsRequest: {
                encode(message: _319.QueryIncomingDTagTransferRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.QueryIncomingDTagTransferRequestsRequest;
                fromJSON(object: any): _319.QueryIncomingDTagTransferRequestsRequest;
                toJSON(message: _319.QueryIncomingDTagTransferRequestsRequest): unknown;
                fromPartial(object: {
                    receiver?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _319.QueryIncomingDTagTransferRequestsRequest;
            };
            QueryIncomingDTagTransferRequestsResponse: {
                encode(message: _319.QueryIncomingDTagTransferRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.QueryIncomingDTagTransferRequestsResponse;
                fromJSON(object: any): _319.QueryIncomingDTagTransferRequestsResponse;
                toJSON(message: _319.QueryIncomingDTagTransferRequestsResponse): unknown;
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
                }): _319.QueryIncomingDTagTransferRequestsResponse;
            };
            QueryChainLinksRequest: {
                encode(message: _318.QueryChainLinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryChainLinksRequest;
                fromJSON(object: any): _318.QueryChainLinksRequest;
                toJSON(message: _318.QueryChainLinksRequest): unknown;
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
                }): _318.QueryChainLinksRequest;
            };
            QueryChainLinksResponse: {
                encode(message: _318.QueryChainLinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryChainLinksResponse;
                fromJSON(object: any): _318.QueryChainLinksResponse;
                toJSON(message: _318.QueryChainLinksResponse): unknown;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _318.QueryChainLinksResponse;
            };
            QueryChainLinkOwnersRequest: {
                encode(message: _318.QueryChainLinkOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryChainLinkOwnersRequest;
                fromJSON(object: any): _318.QueryChainLinkOwnersRequest;
                toJSON(message: _318.QueryChainLinkOwnersRequest): unknown;
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
                }): _318.QueryChainLinkOwnersRequest;
            };
            QueryChainLinkOwnersResponse: {
                encode(message: _318.QueryChainLinkOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryChainLinkOwnersResponse;
                fromJSON(object: any): _318.QueryChainLinkOwnersResponse;
                toJSON(message: _318.QueryChainLinkOwnersResponse): unknown;
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
                }): _318.QueryChainLinkOwnersResponse;
            };
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails: {
                encode(message: _318.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
                fromJSON(object: any): _318.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
                toJSON(message: _318.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails): unknown;
                fromPartial(object: {
                    user?: string;
                    chainName?: string;
                    target?: string;
                }): _318.QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
            };
            QueryDefaultExternalAddressesRequest: {
                encode(message: _318.QueryDefaultExternalAddressesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryDefaultExternalAddressesRequest;
                fromJSON(object: any): _318.QueryDefaultExternalAddressesRequest;
                toJSON(message: _318.QueryDefaultExternalAddressesRequest): unknown;
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
                }): _318.QueryDefaultExternalAddressesRequest;
            };
            QueryDefaultExternalAddressesResponse: {
                encode(message: _318.QueryDefaultExternalAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.QueryDefaultExternalAddressesResponse;
                fromJSON(object: any): _318.QueryDefaultExternalAddressesResponse;
                toJSON(message: _318.QueryDefaultExternalAddressesResponse): unknown;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _318.QueryDefaultExternalAddressesResponse;
            };
            QueryApplicationLinksRequest: {
                encode(message: _317.QueryApplicationLinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinksRequest;
                fromJSON(object: any): _317.QueryApplicationLinksRequest;
                toJSON(message: _317.QueryApplicationLinksRequest): unknown;
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
                }): _317.QueryApplicationLinksRequest;
            };
            QueryApplicationLinksResponse: {
                encode(message: _317.QueryApplicationLinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinksResponse;
                fromJSON(object: any): _317.QueryApplicationLinksResponse;
                toJSON(message: _317.QueryApplicationLinksResponse): unknown;
                fromPartial(object: {
                    links?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _306.ApplicationLinkState;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        expirationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _317.QueryApplicationLinksResponse;
            };
            QueryApplicationLinkByClientIDRequest: {
                encode(message: _317.QueryApplicationLinkByClientIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinkByClientIDRequest;
                fromJSON(object: any): _317.QueryApplicationLinkByClientIDRequest;
                toJSON(message: _317.QueryApplicationLinkByClientIDRequest): unknown;
                fromPartial(object: {
                    clientId?: string;
                }): _317.QueryApplicationLinkByClientIDRequest;
            };
            QueryApplicationLinkByClientIDResponse: {
                encode(message: _317.QueryApplicationLinkByClientIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinkByClientIDResponse;
                fromJSON(object: any): _317.QueryApplicationLinkByClientIDResponse;
                toJSON(message: _317.QueryApplicationLinkByClientIDResponse): unknown;
                fromPartial(object: {
                    link?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _306.ApplicationLinkState;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        expirationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _317.QueryApplicationLinkByClientIDResponse;
            };
            QueryApplicationLinkOwnersRequest: {
                encode(message: _317.QueryApplicationLinkOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinkOwnersRequest;
                fromJSON(object: any): _317.QueryApplicationLinkOwnersRequest;
                toJSON(message: _317.QueryApplicationLinkOwnersRequest): unknown;
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
                }): _317.QueryApplicationLinkOwnersRequest;
            };
            QueryApplicationLinkOwnersResponse: {
                encode(message: _317.QueryApplicationLinkOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinkOwnersResponse;
                fromJSON(object: any): _317.QueryApplicationLinkOwnersResponse;
                toJSON(message: _317.QueryApplicationLinkOwnersResponse): unknown;
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
                }): _317.QueryApplicationLinkOwnersResponse;
            };
            QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails: {
                encode(message: _317.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
                fromJSON(object: any): _317.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
                toJSON(message: _317.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails): unknown;
                fromPartial(object: {
                    user?: string;
                    application?: string;
                    username?: string;
                }): _317.QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
            };
            MsgSaveProfile: {
                encode(message: _316.MsgSaveProfile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.MsgSaveProfile;
                fromJSON(object: any): _316.MsgSaveProfile;
                toJSON(message: _316.MsgSaveProfile): unknown;
                fromPartial(object: {
                    dtag?: string;
                    nickname?: string;
                    bio?: string;
                    profilePicture?: string;
                    coverPicture?: string;
                    creator?: string;
                }): _316.MsgSaveProfile;
            };
            MsgSaveProfileResponse: {
                encode(_: _316.MsgSaveProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.MsgSaveProfileResponse;
                fromJSON(_: any): _316.MsgSaveProfileResponse;
                toJSON(_: _316.MsgSaveProfileResponse): unknown;
                fromPartial(_: {}): _316.MsgSaveProfileResponse;
            };
            MsgDeleteProfile: {
                encode(message: _316.MsgDeleteProfile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.MsgDeleteProfile;
                fromJSON(object: any): _316.MsgDeleteProfile;
                toJSON(message: _316.MsgDeleteProfile): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _316.MsgDeleteProfile;
            };
            MsgDeleteProfileResponse: {
                encode(_: _316.MsgDeleteProfileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.MsgDeleteProfileResponse;
                fromJSON(_: any): _316.MsgDeleteProfileResponse;
                toJSON(_: _316.MsgDeleteProfileResponse): unknown;
                fromPartial(_: {}): _316.MsgDeleteProfileResponse;
            };
            MsgRequestDTagTransfer: {
                encode(message: _315.MsgRequestDTagTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgRequestDTagTransfer;
                fromJSON(object: any): _315.MsgRequestDTagTransfer;
                toJSON(message: _315.MsgRequestDTagTransfer): unknown;
                fromPartial(object: {
                    receiver?: string;
                    sender?: string;
                }): _315.MsgRequestDTagTransfer;
            };
            MsgRequestDTagTransferResponse: {
                encode(_: _315.MsgRequestDTagTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgRequestDTagTransferResponse;
                fromJSON(_: any): _315.MsgRequestDTagTransferResponse;
                toJSON(_: _315.MsgRequestDTagTransferResponse): unknown;
                fromPartial(_: {}): _315.MsgRequestDTagTransferResponse;
            };
            MsgCancelDTagTransferRequest: {
                encode(message: _315.MsgCancelDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgCancelDTagTransferRequest;
                fromJSON(object: any): _315.MsgCancelDTagTransferRequest;
                toJSON(message: _315.MsgCancelDTagTransferRequest): unknown;
                fromPartial(object: {
                    receiver?: string;
                    sender?: string;
                }): _315.MsgCancelDTagTransferRequest;
            };
            MsgCancelDTagTransferRequestResponse: {
                encode(_: _315.MsgCancelDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgCancelDTagTransferRequestResponse;
                fromJSON(_: any): _315.MsgCancelDTagTransferRequestResponse;
                toJSON(_: _315.MsgCancelDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _315.MsgCancelDTagTransferRequestResponse;
            };
            MsgAcceptDTagTransferRequest: {
                encode(message: _315.MsgAcceptDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgAcceptDTagTransferRequest;
                fromJSON(object: any): _315.MsgAcceptDTagTransferRequest;
                toJSON(message: _315.MsgAcceptDTagTransferRequest): unknown;
                fromPartial(object: {
                    newDtag?: string;
                    sender?: string;
                    receiver?: string;
                }): _315.MsgAcceptDTagTransferRequest;
            };
            MsgAcceptDTagTransferRequestResponse: {
                encode(_: _315.MsgAcceptDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgAcceptDTagTransferRequestResponse;
                fromJSON(_: any): _315.MsgAcceptDTagTransferRequestResponse;
                toJSON(_: _315.MsgAcceptDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _315.MsgAcceptDTagTransferRequestResponse;
            };
            MsgRefuseDTagTransferRequest: {
                encode(message: _315.MsgRefuseDTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgRefuseDTagTransferRequest;
                fromJSON(object: any): _315.MsgRefuseDTagTransferRequest;
                toJSON(message: _315.MsgRefuseDTagTransferRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    receiver?: string;
                }): _315.MsgRefuseDTagTransferRequest;
            };
            MsgRefuseDTagTransferRequestResponse: {
                encode(_: _315.MsgRefuseDTagTransferRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.MsgRefuseDTagTransferRequestResponse;
                fromJSON(_: any): _315.MsgRefuseDTagTransferRequestResponse;
                toJSON(_: _315.MsgRefuseDTagTransferRequestResponse): unknown;
                fromPartial(_: {}): _315.MsgRefuseDTagTransferRequestResponse;
            };
            MsgLinkChainAccount: {
                encode(message: _314.MsgLinkChainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgLinkChainAccount;
                fromJSON(object: any): _314.MsgLinkChainAccount;
                toJSON(message: _314.MsgLinkChainAccount): unknown;
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
                }): _314.MsgLinkChainAccount;
            };
            MsgLinkChainAccountResponse: {
                encode(_: _314.MsgLinkChainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgLinkChainAccountResponse;
                fromJSON(_: any): _314.MsgLinkChainAccountResponse;
                toJSON(_: _314.MsgLinkChainAccountResponse): unknown;
                fromPartial(_: {}): _314.MsgLinkChainAccountResponse;
            };
            MsgUnlinkChainAccount: {
                encode(message: _314.MsgUnlinkChainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgUnlinkChainAccount;
                fromJSON(object: any): _314.MsgUnlinkChainAccount;
                toJSON(message: _314.MsgUnlinkChainAccount): unknown;
                fromPartial(object: {
                    owner?: string;
                    chainName?: string;
                    target?: string;
                }): _314.MsgUnlinkChainAccount;
            };
            MsgUnlinkChainAccountResponse: {
                encode(_: _314.MsgUnlinkChainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgUnlinkChainAccountResponse;
                fromJSON(_: any): _314.MsgUnlinkChainAccountResponse;
                toJSON(_: _314.MsgUnlinkChainAccountResponse): unknown;
                fromPartial(_: {}): _314.MsgUnlinkChainAccountResponse;
            };
            MsgSetDefaultExternalAddress: {
                encode(message: _314.MsgSetDefaultExternalAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgSetDefaultExternalAddress;
                fromJSON(object: any): _314.MsgSetDefaultExternalAddress;
                toJSON(message: _314.MsgSetDefaultExternalAddress): unknown;
                fromPartial(object: {
                    chainName?: string;
                    target?: string;
                    signer?: string;
                }): _314.MsgSetDefaultExternalAddress;
            };
            MsgSetDefaultExternalAddressResponse: {
                encode(_: _314.MsgSetDefaultExternalAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgSetDefaultExternalAddressResponse;
                fromJSON(_: any): _314.MsgSetDefaultExternalAddressResponse;
                toJSON(_: _314.MsgSetDefaultExternalAddressResponse): unknown;
                fromPartial(_: {}): _314.MsgSetDefaultExternalAddressResponse;
            };
            MsgLinkApplication: {
                encode(message: _313.MsgLinkApplication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.MsgLinkApplication;
                fromJSON(object: any): _313.MsgLinkApplication;
                toJSON(message: _313.MsgLinkApplication): unknown;
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
                }): _313.MsgLinkApplication;
            };
            MsgLinkApplicationResponse: {
                encode(_: _313.MsgLinkApplicationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.MsgLinkApplicationResponse;
                fromJSON(_: any): _313.MsgLinkApplicationResponse;
                toJSON(_: _313.MsgLinkApplicationResponse): unknown;
                fromPartial(_: {}): _313.MsgLinkApplicationResponse;
            };
            MsgUnlinkApplication: {
                encode(message: _313.MsgUnlinkApplication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.MsgUnlinkApplication;
                fromJSON(object: any): _313.MsgUnlinkApplication;
                toJSON(message: _313.MsgUnlinkApplication): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                    signer?: string;
                }): _313.MsgUnlinkApplication;
            };
            MsgUnlinkApplicationResponse: {
                encode(_: _313.MsgUnlinkApplicationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.MsgUnlinkApplicationResponse;
                fromJSON(_: any): _313.MsgUnlinkApplicationResponse;
                toJSON(_: _313.MsgUnlinkApplicationResponse): unknown;
                fromPartial(_: {}): _313.MsgUnlinkApplicationResponse;
            };
            Profile: {
                encode(message: _311.Profile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.Profile;
                fromJSON(object: any): _311.Profile;
                toJSON(message: _311.Profile): unknown;
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
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _311.Profile;
            };
            Pictures: {
                encode(message: _311.Pictures, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.Pictures;
                fromJSON(object: any): _311.Pictures;
                toJSON(message: _311.Pictures): unknown;
                fromPartial(object: {
                    profile?: string;
                    cover?: string;
                }): _311.Pictures;
            };
            Params: {
                encode(message: _310.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Params;
                fromJSON(object: any): _310.Params;
                toJSON(message: _310.Params): unknown;
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
                        validityDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _310.Params;
            };
            NicknameParams: {
                encode(message: _310.NicknameParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.NicknameParams;
                fromJSON(object: any): _310.NicknameParams;
                toJSON(message: _310.NicknameParams): unknown;
                fromPartial(object: {
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _310.NicknameParams;
            };
            DTagParams: {
                encode(message: _310.DTagParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.DTagParams;
                fromJSON(object: any): _310.DTagParams;
                toJSON(message: _310.DTagParams): unknown;
                fromPartial(object: {
                    regEx?: string;
                    minLength?: Uint8Array;
                    maxLength?: Uint8Array;
                }): _310.DTagParams;
            };
            BioParams: {
                encode(message: _310.BioParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.BioParams;
                fromJSON(object: any): _310.BioParams;
                toJSON(message: _310.BioParams): unknown;
                fromPartial(object: {
                    maxLength?: Uint8Array;
                }): _310.BioParams;
            };
            OracleParams: {
                encode(message: _310.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.OracleParams;
                fromJSON(object: any): _310.OracleParams;
                toJSON(message: _310.OracleParams): unknown;
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
                }): _310.OracleParams;
            };
            AppLinksParams: {
                encode(message: _310.AppLinksParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.AppLinksParams;
                fromJSON(object: any): _310.AppLinksParams;
                toJSON(message: _310.AppLinksParams): unknown;
                fromPartial(object: {
                    validityDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _310.AppLinksParams;
            };
            LinkChainAccountPacketData: {
                encode(message: _309.LinkChainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.LinkChainAccountPacketData;
                fromJSON(object: any): _309.LinkChainAccountPacketData;
                toJSON(message: _309.LinkChainAccountPacketData): unknown;
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
                }): _309.LinkChainAccountPacketData;
            };
            LinkChainAccountPacketAck: {
                encode(message: _309.LinkChainAccountPacketAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.LinkChainAccountPacketAck;
                fromJSON(object: any): _309.LinkChainAccountPacketAck;
                toJSON(message: _309.LinkChainAccountPacketAck): unknown;
                fromPartial(object: {
                    sourceAddress?: string;
                }): _309.LinkChainAccountPacketAck;
            };
            DTagTransferRequest: {
                encode(message: _308.DTagTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.DTagTransferRequest;
                fromJSON(object: any): _308.DTagTransferRequest;
                toJSON(message: _308.DTagTransferRequest): unknown;
                fromPartial(object: {
                    dtagToTrade?: string;
                    sender?: string;
                    receiver?: string;
                }): _308.DTagTransferRequest;
            };
            signatureValueTypeFromJSON(object: any): _307.SignatureValueType;
            signatureValueTypeToJSON(object: _307.SignatureValueType): string;
            SignatureValueType: typeof _307.SignatureValueType;
            ChainLink: {
                encode(message: _307.ChainLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.ChainLink;
                fromJSON(object: any): _307.ChainLink;
                toJSON(message: _307.ChainLink): unknown;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _307.ChainLink;
            };
            ChainConfig: {
                encode(message: _307.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.ChainConfig;
                fromJSON(object: any): _307.ChainConfig;
                toJSON(message: _307.ChainConfig): unknown;
                fromPartial(object: {
                    name?: string;
                }): _307.ChainConfig;
            };
            Proof: {
                encode(message: _307.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.Proof;
                fromJSON(object: any): _307.Proof;
                toJSON(message: _307.Proof): unknown;
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
                }): _307.Proof;
            };
            Bech32Address: {
                encode(message: _307.Bech32Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.Bech32Address;
                fromJSON(object: any): _307.Bech32Address;
                toJSON(message: _307.Bech32Address): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _307.Bech32Address;
            };
            Base58Address: {
                encode(message: _307.Base58Address, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.Base58Address;
                fromJSON(object: any): _307.Base58Address;
                toJSON(message: _307.Base58Address): unknown;
                fromPartial(object: {
                    value?: string;
                }): _307.Base58Address;
            };
            HexAddress: {
                encode(message: _307.HexAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.HexAddress;
                fromJSON(object: any): _307.HexAddress;
                toJSON(message: _307.HexAddress): unknown;
                fromPartial(object: {
                    value?: string;
                    prefix?: string;
                }): _307.HexAddress;
            };
            SingleSignature: {
                encode(message: _307.SingleSignature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.SingleSignature;
                fromJSON(object: any): _307.SingleSignature;
                toJSON(message: _307.SingleSignature): unknown;
                fromPartial(object: {
                    valueType?: _307.SignatureValueType;
                    signature?: Uint8Array;
                }): _307.SingleSignature;
            };
            CosmosMultiSignature: {
                encode(message: _307.CosmosMultiSignature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.CosmosMultiSignature;
                fromJSON(object: any): _307.CosmosMultiSignature;
                toJSON(message: _307.CosmosMultiSignature): unknown;
                fromPartial(object: {
                    bitArray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    signatures?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _307.CosmosMultiSignature;
            };
            applicationLinkStateFromJSON(object: any): _306.ApplicationLinkState;
            applicationLinkStateToJSON(object: _306.ApplicationLinkState): string;
            ApplicationLinkState: typeof _306.ApplicationLinkState;
            ApplicationLink: {
                encode(message: _306.ApplicationLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.ApplicationLink;
                fromJSON(object: any): _306.ApplicationLink;
                toJSON(message: _306.ApplicationLink): unknown;
                fromPartial(object: {
                    user?: string;
                    data?: {
                        application?: string;
                        username?: string;
                    };
                    state?: _306.ApplicationLinkState;
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
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    expirationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _306.ApplicationLink;
            };
            Data: {
                encode(message: _306.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Data;
                fromJSON(object: any): _306.Data;
                toJSON(message: _306.Data): unknown;
                fromPartial(object: {
                    application?: string;
                    username?: string;
                }): _306.Data;
            };
            OracleRequest: {
                encode(message: _306.OracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.OracleRequest;
                fromJSON(object: any): _306.OracleRequest;
                toJSON(message: _306.OracleRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    oracleScriptId?: any;
                    callData?: {
                        application?: string;
                        callData?: string;
                    };
                    clientId?: string;
                }): _306.OracleRequest;
            };
            OracleRequest_CallData: {
                encode(message: _306.OracleRequest_CallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.OracleRequest_CallData;
                fromJSON(object: any): _306.OracleRequest_CallData;
                toJSON(message: _306.OracleRequest_CallData): unknown;
                fromPartial(object: {
                    application?: string;
                    callData?: string;
                }): _306.OracleRequest_CallData;
            };
            Result: {
                encode(message: _306.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Result;
                fromJSON(object: any): _306.Result;
                toJSON(message: _306.Result): unknown;
                fromPartial(object: {
                    success?: {
                        value?: string;
                        signature?: string;
                    };
                    failed?: {
                        error?: string;
                    };
                }): _306.Result;
            };
            Result_Success: {
                encode(message: _306.Result_Success, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Result_Success;
                fromJSON(object: any): _306.Result_Success;
                toJSON(message: _306.Result_Success): unknown;
                fromPartial(object: {
                    value?: string;
                    signature?: string;
                }): _306.Result_Success;
            };
            Result_Failed: {
                encode(message: _306.Result_Failed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Result_Failed;
                fromJSON(object: any): _306.Result_Failed;
                toJSON(message: _306.Result_Failed): unknown;
                fromPartial(object: {
                    error?: string;
                }): _306.Result_Failed;
            };
            GenesisState: {
                encode(message: _305.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.GenesisState;
                fromJSON(object: any): _305.GenesisState;
                toJSON(message: _305.GenesisState): unknown;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    applicationLinks?: {
                        user?: string;
                        data?: {
                            application?: string;
                            username?: string;
                        };
                        state?: _306.ApplicationLinkState;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        expirationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                            validityDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    };
                }): _305.GenesisState;
            };
            DefaultExternalAddressEntry: {
                encode(message: _305.DefaultExternalAddressEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.DefaultExternalAddressEntry;
                fromJSON(object: any): _305.DefaultExternalAddressEntry;
                toJSON(message: _305.DefaultExternalAddressEntry): unknown;
                fromPartial(object: {
                    owner?: string;
                    chainName?: string;
                    target?: string;
                }): _305.DefaultExternalAddressEntry;
            };
        };
    }
    namespace reactions {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addReaction(value: _325.MsgAddReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeReaction(value: _325.MsgRemoveReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRegisteredReaction(value: _325.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRegisteredReaction(value: _325.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeRegisteredReaction(value: _325.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setReactionsParams(value: _325.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addReaction(value: _325.MsgAddReaction): {
                        typeUrl: string;
                        value: _325.MsgAddReaction;
                    };
                    removeReaction(value: _325.MsgRemoveReaction): {
                        typeUrl: string;
                        value: _325.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: _325.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: _325.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: _325.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: _325.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: _325.MsgSetReactionsParams;
                    };
                };
                toJSON: {
                    addReaction(value: _325.MsgAddReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeReaction(value: _325.MsgRemoveReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addRegisteredReaction(value: _325.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRegisteredReaction(value: _325.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeRegisteredReaction(value: _325.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setReactionsParams(value: _325.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addReaction(value: any): {
                        typeUrl: string;
                        value: _325.MsgAddReaction;
                    };
                    removeReaction(value: any): {
                        typeUrl: string;
                        value: _325.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _325.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _325.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: any): {
                        typeUrl: string;
                        value: _325.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: any): {
                        typeUrl: string;
                        value: _325.MsgSetReactionsParams;
                    };
                };
                fromPartial: {
                    addReaction(value: _325.MsgAddReaction): {
                        typeUrl: string;
                        value: _325.MsgAddReaction;
                    };
                    removeReaction(value: _325.MsgRemoveReaction): {
                        typeUrl: string;
                        value: _325.MsgRemoveReaction;
                    };
                    addRegisteredReaction(value: _325.MsgAddRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgAddRegisteredReaction;
                    };
                    editRegisteredReaction(value: _325.MsgEditRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgEditRegisteredReaction;
                    };
                    removeRegisteredReaction(value: _325.MsgRemoveRegisteredReaction): {
                        typeUrl: string;
                        value: _325.MsgRemoveRegisteredReaction;
                    };
                    setReactionsParams(value: _325.MsgSetReactionsParams): {
                        typeUrl: string;
                        value: _325.MsgSetReactionsParams;
                    };
                };
            };
            AminoConverter: {
                "/desmos.reactions.v1.MsgAddReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, value, user }: _325.MsgAddReaction) => {
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
                    }) => _325.MsgAddReaction;
                };
                "/desmos.reactions.v1.MsgRemoveReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, postId, reactionId, user }: _325.MsgRemoveReaction) => {
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
                    }) => _325.MsgRemoveReaction;
                };
                "/desmos.reactions.v1.MsgAddRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, shorthandCode, displayValue, user }: _325.MsgAddRegisteredReaction) => {
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
                    }) => _325.MsgAddRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgEditRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReactionId, shorthandCode, displayValue, user }: _325.MsgEditRegisteredReaction) => {
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
                    }) => _325.MsgEditRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReactionId, user }: _325.MsgRemoveRegisteredReaction) => {
                        subspace_id: string;
                        registered_reaction_id: number;
                        user: string;
                    };
                    fromAmino: ({ subspace_id, registered_reaction_id, user }: {
                        subspace_id: string;
                        registered_reaction_id: number;
                        user: string;
                    }) => _325.MsgRemoveRegisteredReaction;
                };
                "/desmos.reactions.v1.MsgSetReactionsParams": {
                    aminoType: string;
                    toAmino: ({ subspaceId, registeredReaction, freeText, user }: _325.MsgSetReactionsParams) => {
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
                    }) => _325.MsgSetReactionsParams;
                };
            };
            QueryReactionsRequest: {
                encode(message: _326.QueryReactionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionsRequest;
                fromJSON(object: any): _326.QueryReactionsRequest;
                toJSON(message: _326.QueryReactionsRequest): unknown;
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
                }): _326.QueryReactionsRequest;
            };
            QueryReactionsResponse: {
                encode(message: _326.QueryReactionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionsResponse;
                fromJSON(object: any): _326.QueryReactionsResponse;
                toJSON(message: _326.QueryReactionsResponse): unknown;
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
                }): _326.QueryReactionsResponse;
            };
            QueryReactionRequest: {
                encode(message: _326.QueryReactionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionRequest;
                fromJSON(object: any): _326.QueryReactionRequest;
                toJSON(message: _326.QueryReactionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                }): _326.QueryReactionRequest;
            };
            QueryReactionResponse: {
                encode(message: _326.QueryReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionResponse;
                fromJSON(object: any): _326.QueryReactionResponse;
                toJSON(message: _326.QueryReactionResponse): unknown;
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
                }): _326.QueryReactionResponse;
            };
            QueryRegisteredReactionsRequest: {
                encode(message: _326.QueryRegisteredReactionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryRegisteredReactionsRequest;
                fromJSON(object: any): _326.QueryRegisteredReactionsRequest;
                toJSON(message: _326.QueryRegisteredReactionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _326.QueryRegisteredReactionsRequest;
            };
            QueryRegisteredReactionsResponse: {
                encode(message: _326.QueryRegisteredReactionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryRegisteredReactionsResponse;
                fromJSON(object: any): _326.QueryRegisteredReactionsResponse;
                toJSON(message: _326.QueryRegisteredReactionsResponse): unknown;
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
                }): _326.QueryRegisteredReactionsResponse;
            };
            QueryRegisteredReactionRequest: {
                encode(message: _326.QueryRegisteredReactionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryRegisteredReactionRequest;
                fromJSON(object: any): _326.QueryRegisteredReactionRequest;
                toJSON(message: _326.QueryRegisteredReactionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reactionId?: number;
                }): _326.QueryRegisteredReactionRequest;
            };
            QueryRegisteredReactionResponse: {
                encode(message: _326.QueryRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryRegisteredReactionResponse;
                fromJSON(object: any): _326.QueryRegisteredReactionResponse;
                toJSON(message: _326.QueryRegisteredReactionResponse): unknown;
                fromPartial(object: {
                    registeredReaction?: {
                        subspaceId?: any;
                        id?: number;
                        shorthandCode?: string;
                        displayValue?: string;
                    };
                }): _326.QueryRegisteredReactionResponse;
            };
            QueryReactionsParamsRequest: {
                encode(message: _326.QueryReactionsParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionsParamsRequest;
                fromJSON(object: any): _326.QueryReactionsParamsRequest;
                toJSON(message: _326.QueryReactionsParamsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _326.QueryReactionsParamsRequest;
            };
            QueryReactionsParamsResponse: {
                encode(message: _326.QueryReactionsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.QueryReactionsParamsResponse;
                fromJSON(object: any): _326.QueryReactionsParamsResponse;
                toJSON(message: _326.QueryReactionsParamsResponse): unknown;
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
                }): _326.QueryReactionsParamsResponse;
            };
            MsgAddReaction: {
                encode(message: _325.MsgAddReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgAddReaction;
                fromJSON(object: any): _325.MsgAddReaction;
                toJSON(message: _325.MsgAddReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    user?: string;
                }): _325.MsgAddReaction;
            };
            MsgAddReactionResponse: {
                encode(message: _325.MsgAddReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgAddReactionResponse;
                fromJSON(object: any): _325.MsgAddReactionResponse;
                toJSON(message: _325.MsgAddReactionResponse): unknown;
                fromPartial(object: {
                    reactionId?: number;
                }): _325.MsgAddReactionResponse;
            };
            MsgRemoveReaction: {
                encode(message: _325.MsgRemoveReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgRemoveReaction;
                fromJSON(object: any): _325.MsgRemoveReaction;
                toJSON(message: _325.MsgRemoveReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                    user?: string;
                }): _325.MsgRemoveReaction;
            };
            MsgRemoveReactionResponse: {
                encode(_: _325.MsgRemoveReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgRemoveReactionResponse;
                fromJSON(_: any): _325.MsgRemoveReactionResponse;
                toJSON(_: _325.MsgRemoveReactionResponse): unknown;
                fromPartial(_: {}): _325.MsgRemoveReactionResponse;
            };
            MsgAddRegisteredReaction: {
                encode(message: _325.MsgAddRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgAddRegisteredReaction;
                fromJSON(object: any): _325.MsgAddRegisteredReaction;
                toJSON(message: _325.MsgAddRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    shorthandCode?: string;
                    displayValue?: string;
                    user?: string;
                }): _325.MsgAddRegisteredReaction;
            };
            MsgAddRegisteredReactionResponse: {
                encode(message: _325.MsgAddRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgAddRegisteredReactionResponse;
                fromJSON(object: any): _325.MsgAddRegisteredReactionResponse;
                toJSON(message: _325.MsgAddRegisteredReactionResponse): unknown;
                fromPartial(object: {
                    registeredReactionId?: number;
                }): _325.MsgAddRegisteredReactionResponse;
            };
            MsgEditRegisteredReaction: {
                encode(message: _325.MsgEditRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgEditRegisteredReaction;
                fromJSON(object: any): _325.MsgEditRegisteredReaction;
                toJSON(message: _325.MsgEditRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                    shorthandCode?: string;
                    displayValue?: string;
                    user?: string;
                }): _325.MsgEditRegisteredReaction;
            };
            MsgEditRegisteredReactionResponse: {
                encode(_: _325.MsgEditRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgEditRegisteredReactionResponse;
                fromJSON(_: any): _325.MsgEditRegisteredReactionResponse;
                toJSON(_: _325.MsgEditRegisteredReactionResponse): unknown;
                fromPartial(_: {}): _325.MsgEditRegisteredReactionResponse;
            };
            MsgRemoveRegisteredReaction: {
                encode(message: _325.MsgRemoveRegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgRemoveRegisteredReaction;
                fromJSON(object: any): _325.MsgRemoveRegisteredReaction;
                toJSON(message: _325.MsgRemoveRegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                    user?: string;
                }): _325.MsgRemoveRegisteredReaction;
            };
            MsgRemoveRegisteredReactionResponse: {
                encode(_: _325.MsgRemoveRegisteredReactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgRemoveRegisteredReactionResponse;
                fromJSON(_: any): _325.MsgRemoveRegisteredReactionResponse;
                toJSON(_: _325.MsgRemoveRegisteredReactionResponse): unknown;
                fromPartial(_: {}): _325.MsgRemoveRegisteredReactionResponse;
            };
            MsgSetReactionsParams: {
                encode(message: _325.MsgSetReactionsParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgSetReactionsParams;
                fromJSON(object: any): _325.MsgSetReactionsParams;
                toJSON(message: _325.MsgSetReactionsParams): unknown;
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
                }): _325.MsgSetReactionsParams;
            };
            MsgSetReactionsParamsResponse: {
                encode(_: _325.MsgSetReactionsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.MsgSetReactionsParamsResponse;
                fromJSON(_: any): _325.MsgSetReactionsParamsResponse;
                toJSON(_: _325.MsgSetReactionsParamsResponse): unknown;
                fromPartial(_: {}): _325.MsgSetReactionsParamsResponse;
            };
            Reaction: {
                encode(message: _324.Reaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.Reaction;
                fromJSON(object: any): _324.Reaction;
                toJSON(message: _324.Reaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    id?: number;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    author?: string;
                }): _324.Reaction;
            };
            RegisteredReactionValue: {
                encode(message: _324.RegisteredReactionValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.RegisteredReactionValue;
                fromJSON(object: any): _324.RegisteredReactionValue;
                toJSON(message: _324.RegisteredReactionValue): unknown;
                fromPartial(object: {
                    registeredReactionId?: number;
                }): _324.RegisteredReactionValue;
            };
            FreeTextValue: {
                encode(message: _324.FreeTextValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.FreeTextValue;
                fromJSON(object: any): _324.FreeTextValue;
                toJSON(message: _324.FreeTextValue): unknown;
                fromPartial(object: {
                    text?: string;
                }): _324.FreeTextValue;
            };
            RegisteredReaction: {
                encode(message: _324.RegisteredReaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.RegisteredReaction;
                fromJSON(object: any): _324.RegisteredReaction;
                toJSON(message: _324.RegisteredReaction): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    shorthandCode?: string;
                    displayValue?: string;
                }): _324.RegisteredReaction;
            };
            SubspaceReactionsParams: {
                encode(message: _324.SubspaceReactionsParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.SubspaceReactionsParams;
                fromJSON(object: any): _324.SubspaceReactionsParams;
                toJSON(message: _324.SubspaceReactionsParams): unknown;
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
                }): _324.SubspaceReactionsParams;
            };
            FreeTextValueParams: {
                encode(message: _324.FreeTextValueParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.FreeTextValueParams;
                fromJSON(object: any): _324.FreeTextValueParams;
                toJSON(message: _324.FreeTextValueParams): unknown;
                fromPartial(object: {
                    enabled?: boolean;
                    maxLength?: number;
                    regEx?: string;
                }): _324.FreeTextValueParams;
            };
            RegisteredReactionValueParams: {
                encode(message: _324.RegisteredReactionValueParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.RegisteredReactionValueParams;
                fromJSON(object: any): _324.RegisteredReactionValueParams;
                toJSON(message: _324.RegisteredReactionValueParams): unknown;
                fromPartial(object: {
                    enabled?: boolean;
                }): _324.RegisteredReactionValueParams;
            };
            GenesisState: {
                encode(message: _323.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.GenesisState;
                fromJSON(object: any): _323.GenesisState;
                toJSON(message: _323.GenesisState): unknown;
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
                }): _323.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _323.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.SubspaceDataEntry;
                fromJSON(object: any): _323.SubspaceDataEntry;
                toJSON(message: _323.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    registeredReactionId?: number;
                }): _323.SubspaceDataEntry;
            };
            PostDataEntry: {
                encode(message: _323.PostDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.PostDataEntry;
                fromJSON(object: any): _323.PostDataEntry;
                toJSON(message: _323.PostDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    postId?: any;
                    reactionId?: number;
                }): _323.PostDataEntry;
            };
        };
    }
    namespace relationships {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRelationship(value: _329.MsgCreateRelationship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRelationship(value: _329.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockUser(value: _329.MsgBlockUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockUser(value: _329.MsgUnblockUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRelationship(value: _329.MsgCreateRelationship): {
                        typeUrl: string;
                        value: _329.MsgCreateRelationship;
                    };
                    deleteRelationship(value: _329.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: _329.MsgDeleteRelationship;
                    };
                    blockUser(value: _329.MsgBlockUser): {
                        typeUrl: string;
                        value: _329.MsgBlockUser;
                    };
                    unblockUser(value: _329.MsgUnblockUser): {
                        typeUrl: string;
                        value: _329.MsgUnblockUser;
                    };
                };
                toJSON: {
                    createRelationship(value: _329.MsgCreateRelationship): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRelationship(value: _329.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: unknown;
                    };
                    blockUser(value: _329.MsgBlockUser): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unblockUser(value: _329.MsgUnblockUser): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRelationship(value: any): {
                        typeUrl: string;
                        value: _329.MsgCreateRelationship;
                    };
                    deleteRelationship(value: any): {
                        typeUrl: string;
                        value: _329.MsgDeleteRelationship;
                    };
                    blockUser(value: any): {
                        typeUrl: string;
                        value: _329.MsgBlockUser;
                    };
                    unblockUser(value: any): {
                        typeUrl: string;
                        value: _329.MsgUnblockUser;
                    };
                };
                fromPartial: {
                    createRelationship(value: _329.MsgCreateRelationship): {
                        typeUrl: string;
                        value: _329.MsgCreateRelationship;
                    };
                    deleteRelationship(value: _329.MsgDeleteRelationship): {
                        typeUrl: string;
                        value: _329.MsgDeleteRelationship;
                    };
                    blockUser(value: _329.MsgBlockUser): {
                        typeUrl: string;
                        value: _329.MsgBlockUser;
                    };
                    unblockUser(value: _329.MsgUnblockUser): {
                        typeUrl: string;
                        value: _329.MsgUnblockUser;
                    };
                };
            };
            AminoConverter: {
                "/desmos.relationships.v1.MsgCreateRelationship": {
                    aminoType: string;
                    toAmino: ({ signer, counterparty, subspaceId }: _329.MsgCreateRelationship) => {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ signer, counterparty, subspace_id }: {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    }) => _329.MsgCreateRelationship;
                };
                "/desmos.relationships.v1.MsgDeleteRelationship": {
                    aminoType: string;
                    toAmino: ({ signer, counterparty, subspaceId }: _329.MsgDeleteRelationship) => {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ signer, counterparty, subspace_id }: {
                        signer: string;
                        counterparty: string;
                        subspace_id: string;
                    }) => _329.MsgDeleteRelationship;
                };
                "/desmos.relationships.v1.MsgBlockUser": {
                    aminoType: string;
                    toAmino: ({ blocker, blocked, reason, subspaceId }: _329.MsgBlockUser) => {
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
                    }) => _329.MsgBlockUser;
                };
                "/desmos.relationships.v1.MsgUnblockUser": {
                    aminoType: string;
                    toAmino: ({ blocker, blocked, subspaceId }: _329.MsgUnblockUser) => {
                        blocker: string;
                        blocked: string;
                        subspace_id: string;
                    };
                    fromAmino: ({ blocker, blocked, subspace_id }: {
                        blocker: string;
                        blocked: string;
                        subspace_id: string;
                    }) => _329.MsgUnblockUser;
                };
            };
            QueryRelationshipsRequest: {
                encode(message: _330.QueryRelationshipsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.QueryRelationshipsRequest;
                fromJSON(object: any): _330.QueryRelationshipsRequest;
                toJSON(message: _330.QueryRelationshipsRequest): unknown;
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
                }): _330.QueryRelationshipsRequest;
            };
            QueryRelationshipsResponse: {
                encode(message: _330.QueryRelationshipsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.QueryRelationshipsResponse;
                fromJSON(object: any): _330.QueryRelationshipsResponse;
                toJSON(message: _330.QueryRelationshipsResponse): unknown;
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
                }): _330.QueryRelationshipsResponse;
            };
            QueryBlocksRequest: {
                encode(message: _330.QueryBlocksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.QueryBlocksRequest;
                fromJSON(object: any): _330.QueryBlocksRequest;
                toJSON(message: _330.QueryBlocksRequest): unknown;
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
                }): _330.QueryBlocksRequest;
            };
            QueryBlocksResponse: {
                encode(message: _330.QueryBlocksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.QueryBlocksResponse;
                fromJSON(object: any): _330.QueryBlocksResponse;
                toJSON(message: _330.QueryBlocksResponse): unknown;
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
                }): _330.QueryBlocksResponse;
            };
            MsgCreateRelationship: {
                encode(message: _329.MsgCreateRelationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgCreateRelationship;
                fromJSON(object: any): _329.MsgCreateRelationship;
                toJSON(message: _329.MsgCreateRelationship): unknown;
                fromPartial(object: {
                    signer?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _329.MsgCreateRelationship;
            };
            MsgCreateRelationshipResponse: {
                encode(_: _329.MsgCreateRelationshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgCreateRelationshipResponse;
                fromJSON(_: any): _329.MsgCreateRelationshipResponse;
                toJSON(_: _329.MsgCreateRelationshipResponse): unknown;
                fromPartial(_: {}): _329.MsgCreateRelationshipResponse;
            };
            MsgDeleteRelationship: {
                encode(message: _329.MsgDeleteRelationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgDeleteRelationship;
                fromJSON(object: any): _329.MsgDeleteRelationship;
                toJSON(message: _329.MsgDeleteRelationship): unknown;
                fromPartial(object: {
                    signer?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _329.MsgDeleteRelationship;
            };
            MsgDeleteRelationshipResponse: {
                encode(_: _329.MsgDeleteRelationshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgDeleteRelationshipResponse;
                fromJSON(_: any): _329.MsgDeleteRelationshipResponse;
                toJSON(_: _329.MsgDeleteRelationshipResponse): unknown;
                fromPartial(_: {}): _329.MsgDeleteRelationshipResponse;
            };
            MsgBlockUser: {
                encode(message: _329.MsgBlockUser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgBlockUser;
                fromJSON(object: any): _329.MsgBlockUser;
                toJSON(message: _329.MsgBlockUser): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: any;
                }): _329.MsgBlockUser;
            };
            MsgBlockUserResponse: {
                encode(_: _329.MsgBlockUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgBlockUserResponse;
                fromJSON(_: any): _329.MsgBlockUserResponse;
                toJSON(_: _329.MsgBlockUserResponse): unknown;
                fromPartial(_: {}): _329.MsgBlockUserResponse;
            };
            MsgUnblockUser: {
                encode(message: _329.MsgUnblockUser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgUnblockUser;
                fromJSON(object: any): _329.MsgUnblockUser;
                toJSON(message: _329.MsgUnblockUser): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    subspaceId?: any;
                }): _329.MsgUnblockUser;
            };
            MsgUnblockUserResponse: {
                encode(_: _329.MsgUnblockUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.MsgUnblockUserResponse;
                fromJSON(_: any): _329.MsgUnblockUserResponse;
                toJSON(_: _329.MsgUnblockUserResponse): unknown;
                fromPartial(_: {}): _329.MsgUnblockUserResponse;
            };
            Relationship: {
                encode(message: _328.Relationship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.Relationship;
                fromJSON(object: any): _328.Relationship;
                toJSON(message: _328.Relationship): unknown;
                fromPartial(object: {
                    creator?: string;
                    counterparty?: string;
                    subspaceId?: any;
                }): _328.Relationship;
            };
            UserBlock: {
                encode(message: _328.UserBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.UserBlock;
                fromJSON(object: any): _328.UserBlock;
                toJSON(message: _328.UserBlock): unknown;
                fromPartial(object: {
                    blocker?: string;
                    blocked?: string;
                    reason?: string;
                    subspaceId?: any;
                }): _328.UserBlock;
            };
            GenesisState: {
                encode(message: _327.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.GenesisState;
                fromJSON(object: any): _327.GenesisState;
                toJSON(message: _327.GenesisState): unknown;
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
                }): _327.GenesisState;
            };
        };
    }
    namespace reports {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createReport(value: _333.MsgCreateReport): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteReport(value: _333.MsgDeleteReport): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    supportStandardReason(value: _333.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addReason(value: _333.MsgAddReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeReason(value: _333.MsgRemoveReason): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createReport(value: _333.MsgCreateReport): {
                        typeUrl: string;
                        value: _333.MsgCreateReport;
                    };
                    deleteReport(value: _333.MsgDeleteReport): {
                        typeUrl: string;
                        value: _333.MsgDeleteReport;
                    };
                    supportStandardReason(value: _333.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: _333.MsgSupportStandardReason;
                    };
                    addReason(value: _333.MsgAddReason): {
                        typeUrl: string;
                        value: _333.MsgAddReason;
                    };
                    removeReason(value: _333.MsgRemoveReason): {
                        typeUrl: string;
                        value: _333.MsgRemoveReason;
                    };
                };
                toJSON: {
                    createReport(value: _333.MsgCreateReport): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteReport(value: _333.MsgDeleteReport): {
                        typeUrl: string;
                        value: unknown;
                    };
                    supportStandardReason(value: _333.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addReason(value: _333.MsgAddReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeReason(value: _333.MsgRemoveReason): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createReport(value: any): {
                        typeUrl: string;
                        value: _333.MsgCreateReport;
                    };
                    deleteReport(value: any): {
                        typeUrl: string;
                        value: _333.MsgDeleteReport;
                    };
                    supportStandardReason(value: any): {
                        typeUrl: string;
                        value: _333.MsgSupportStandardReason;
                    };
                    addReason(value: any): {
                        typeUrl: string;
                        value: _333.MsgAddReason;
                    };
                    removeReason(value: any): {
                        typeUrl: string;
                        value: _333.MsgRemoveReason;
                    };
                };
                fromPartial: {
                    createReport(value: _333.MsgCreateReport): {
                        typeUrl: string;
                        value: _333.MsgCreateReport;
                    };
                    deleteReport(value: _333.MsgDeleteReport): {
                        typeUrl: string;
                        value: _333.MsgDeleteReport;
                    };
                    supportStandardReason(value: _333.MsgSupportStandardReason): {
                        typeUrl: string;
                        value: _333.MsgSupportStandardReason;
                    };
                    addReason(value: _333.MsgAddReason): {
                        typeUrl: string;
                        value: _333.MsgAddReason;
                    };
                    removeReason(value: _333.MsgRemoveReason): {
                        typeUrl: string;
                        value: _333.MsgRemoveReason;
                    };
                };
            };
            AminoConverter: {
                "/desmos.reports.v1.MsgCreateReport": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reasonsIds, message, reporter, target }: _333.MsgCreateReport) => {
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
                    }) => _333.MsgCreateReport;
                };
                "/desmos.reports.v1.MsgDeleteReport": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reportId, signer }: _333.MsgDeleteReport) => {
                        subspace_id: string;
                        report_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, report_id, signer }: {
                        subspace_id: string;
                        report_id: string;
                        signer: string;
                    }) => _333.MsgDeleteReport;
                };
                "/desmos.reports.v1.MsgSupportStandardReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, standardReasonId, signer }: _333.MsgSupportStandardReason) => {
                        subspace_id: string;
                        standard_reason_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, standard_reason_id, signer }: {
                        subspace_id: string;
                        standard_reason_id: number;
                        signer: string;
                    }) => _333.MsgSupportStandardReason;
                };
                "/desmos.reports.v1.MsgAddReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, title, description, signer }: _333.MsgAddReason) => {
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
                    }) => _333.MsgAddReason;
                };
                "/desmos.reports.v1.MsgRemoveReason": {
                    aminoType: string;
                    toAmino: ({ subspaceId, reasonId, signer }: _333.MsgRemoveReason) => {
                        subspace_id: string;
                        reason_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, reason_id, signer }: {
                        subspace_id: string;
                        reason_id: number;
                        signer: string;
                    }) => _333.MsgRemoveReason;
                };
            };
            QueryReportsRequest: {
                encode(message: _334.QueryReportsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReportsRequest;
                fromJSON(object: any): _334.QueryReportsRequest;
                toJSON(message: _334.QueryReportsRequest): unknown;
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
                }): _334.QueryReportsRequest;
            };
            QueryReportsResponse: {
                encode(message: _334.QueryReportsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReportsResponse;
                fromJSON(object: any): _334.QueryReportsResponse;
                toJSON(message: _334.QueryReportsResponse): unknown;
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
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _334.QueryReportsResponse;
            };
            QueryReportRequest: {
                encode(message: _334.QueryReportRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReportRequest;
                fromJSON(object: any): _334.QueryReportRequest;
                toJSON(message: _334.QueryReportRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reportId?: any;
                }): _334.QueryReportRequest;
            };
            QueryReportResponse: {
                encode(message: _334.QueryReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReportResponse;
                fromJSON(object: any): _334.QueryReportResponse;
                toJSON(message: _334.QueryReportResponse): unknown;
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
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _334.QueryReportResponse;
            };
            QueryReasonsRequest: {
                encode(message: _334.QueryReasonsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReasonsRequest;
                fromJSON(object: any): _334.QueryReasonsRequest;
                toJSON(message: _334.QueryReasonsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _334.QueryReasonsRequest;
            };
            QueryReasonsResponse: {
                encode(message: _334.QueryReasonsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReasonsResponse;
                fromJSON(object: any): _334.QueryReasonsResponse;
                toJSON(message: _334.QueryReasonsResponse): unknown;
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
                }): _334.QueryReasonsResponse;
            };
            QueryReasonRequest: {
                encode(message: _334.QueryReasonRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReasonRequest;
                fromJSON(object: any): _334.QueryReasonRequest;
                toJSON(message: _334.QueryReasonRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                }): _334.QueryReasonRequest;
            };
            QueryReasonResponse: {
                encode(message: _334.QueryReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryReasonResponse;
                fromJSON(object: any): _334.QueryReasonResponse;
                toJSON(message: _334.QueryReasonResponse): unknown;
                fromPartial(object: {
                    reason?: {
                        subspaceId?: any;
                        id?: number;
                        title?: string;
                        description?: string;
                    };
                }): _334.QueryReasonResponse;
            };
            QueryParamsRequest: {
                encode(_: _334.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryParamsRequest;
                fromJSON(_: any): _334.QueryParamsRequest;
                toJSON(_: _334.QueryParamsRequest): unknown;
                fromPartial(_: {}): _334.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _334.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryParamsResponse;
                fromJSON(object: any): _334.QueryParamsResponse;
                toJSON(message: _334.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        standardReasons?: {
                            id?: number;
                            title?: string;
                            description?: string;
                        }[];
                    };
                }): _334.QueryParamsResponse;
            };
            MsgCreateReport: {
                encode(message: _333.MsgCreateReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgCreateReport;
                fromJSON(object: any): _333.MsgCreateReport;
                toJSON(message: _333.MsgCreateReport): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonsIds?: number[];
                    message?: string;
                    reporter?: string;
                    target?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _333.MsgCreateReport;
            };
            MsgCreateReportResponse: {
                encode(message: _333.MsgCreateReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgCreateReportResponse;
                fromJSON(object: any): _333.MsgCreateReportResponse;
                toJSON(message: _333.MsgCreateReportResponse): unknown;
                fromPartial(object: {
                    reportId?: any;
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _333.MsgCreateReportResponse;
            };
            MsgDeleteReport: {
                encode(message: _333.MsgDeleteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgDeleteReport;
                fromJSON(object: any): _333.MsgDeleteReport;
                toJSON(message: _333.MsgDeleteReport): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reportId?: any;
                    signer?: string;
                }): _333.MsgDeleteReport;
            };
            MsgDeleteReportResponse: {
                encode(_: _333.MsgDeleteReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgDeleteReportResponse;
                fromJSON(_: any): _333.MsgDeleteReportResponse;
                toJSON(_: _333.MsgDeleteReportResponse): unknown;
                fromPartial(_: {}): _333.MsgDeleteReportResponse;
            };
            MsgSupportStandardReason: {
                encode(message: _333.MsgSupportStandardReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgSupportStandardReason;
                fromJSON(object: any): _333.MsgSupportStandardReason;
                toJSON(message: _333.MsgSupportStandardReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    standardReasonId?: number;
                    signer?: string;
                }): _333.MsgSupportStandardReason;
            };
            MsgSupportStandardReasonResponse: {
                encode(message: _333.MsgSupportStandardReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgSupportStandardReasonResponse;
                fromJSON(object: any): _333.MsgSupportStandardReasonResponse;
                toJSON(message: _333.MsgSupportStandardReasonResponse): unknown;
                fromPartial(object: {
                    reasonsIds?: number;
                }): _333.MsgSupportStandardReasonResponse;
            };
            MsgAddReason: {
                encode(message: _333.MsgAddReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgAddReason;
                fromJSON(object: any): _333.MsgAddReason;
                toJSON(message: _333.MsgAddReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    title?: string;
                    description?: string;
                    signer?: string;
                }): _333.MsgAddReason;
            };
            MsgAddReasonResponse: {
                encode(message: _333.MsgAddReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgAddReasonResponse;
                fromJSON(object: any): _333.MsgAddReasonResponse;
                toJSON(message: _333.MsgAddReasonResponse): unknown;
                fromPartial(object: {
                    reasonId?: number;
                }): _333.MsgAddReasonResponse;
            };
            MsgRemoveReason: {
                encode(message: _333.MsgRemoveReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgRemoveReason;
                fromJSON(object: any): _333.MsgRemoveReason;
                toJSON(message: _333.MsgRemoveReason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                    signer?: string;
                }): _333.MsgRemoveReason;
            };
            MsgRemoveReasonResponse: {
                encode(_: _333.MsgRemoveReasonResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.MsgRemoveReasonResponse;
                fromJSON(_: any): _333.MsgRemoveReasonResponse;
                toJSON(_: _333.MsgRemoveReasonResponse): unknown;
                fromPartial(_: {}): _333.MsgRemoveReasonResponse;
            };
            Report: {
                encode(message: _332.Report, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.Report;
                fromJSON(object: any): _332.Report;
                toJSON(message: _332.Report): unknown;
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
                    creationDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _332.Report;
            };
            UserTarget: {
                encode(message: _332.UserTarget, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.UserTarget;
                fromJSON(object: any): _332.UserTarget;
                toJSON(message: _332.UserTarget): unknown;
                fromPartial(object: {
                    user?: string;
                }): _332.UserTarget;
            };
            PostTarget: {
                encode(message: _332.PostTarget, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.PostTarget;
                fromJSON(object: any): _332.PostTarget;
                toJSON(message: _332.PostTarget): unknown;
                fromPartial(object: {
                    postId?: any;
                }): _332.PostTarget;
            };
            Reason: {
                encode(message: _332.Reason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.Reason;
                fromJSON(object: any): _332.Reason;
                toJSON(message: _332.Reason): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    title?: string;
                    description?: string;
                }): _332.Reason;
            };
            Params: {
                encode(message: _332.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.Params;
                fromJSON(object: any): _332.Params;
                toJSON(message: _332.Params): unknown;
                fromPartial(object: {
                    standardReasons?: {
                        id?: number;
                        title?: string;
                        description?: string;
                    }[];
                }): _332.Params;
            };
            StandardReason: {
                encode(message: _332.StandardReason, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.StandardReason;
                fromJSON(object: any): _332.StandardReason;
                toJSON(message: _332.StandardReason): unknown;
                fromPartial(object: {
                    id?: number;
                    title?: string;
                    description?: string;
                }): _332.StandardReason;
            };
            GenesisState: {
                encode(message: _331.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.GenesisState;
                fromJSON(object: any): _331.GenesisState;
                toJSON(message: _331.GenesisState): unknown;
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
                        creationDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    params?: {
                        standardReasons?: {
                            id?: number;
                            title?: string;
                            description?: string;
                        }[];
                    };
                }): _331.GenesisState;
            };
            SubspaceDataEntry: {
                encode(message: _331.SubspaceDataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.SubspaceDataEntry;
                fromJSON(object: any): _331.SubspaceDataEntry;
                toJSON(message: _331.SubspaceDataEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    reasonId?: number;
                    reportId?: any;
                }): _331.SubspaceDataEntry;
            };
        };
    }
    namespace subspaces {
        const v1: {
            Subspace: {
                encode(message: _335.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.Subspace;
                fromJSON(object: any): _335.Subspace;
                toJSON(message: _335.Subspace): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _335.Subspace;
            };
            UserGroup: {
                encode(message: _335.UserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.UserGroup;
                fromJSON(object: any): _335.UserGroup;
                toJSON(message: _335.UserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    name?: string;
                    description?: string;
                    permissions?: number;
                }): _335.UserGroup;
            };
            PermissionDetail: {
                encode(message: _335.PermissionDetail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.PermissionDetail;
                fromJSON(object: any): _335.PermissionDetail;
                toJSON(message: _335.PermissionDetail): unknown;
                fromPartial(object: {
                    user?: {
                        user?: string;
                        permission?: number;
                    };
                    group?: {
                        groupId?: number;
                        permission?: number;
                    };
                }): _335.PermissionDetail;
            };
            PermissionDetail_User: {
                encode(message: _335.PermissionDetail_User, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.PermissionDetail_User;
                fromJSON(object: any): _335.PermissionDetail_User;
                toJSON(message: _335.PermissionDetail_User): unknown;
                fromPartial(object: {
                    user?: string;
                    permission?: number;
                }): _335.PermissionDetail_User;
            };
            PermissionDetail_Group: {
                encode(message: _335.PermissionDetail_Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.PermissionDetail_Group;
                fromJSON(object: any): _335.PermissionDetail_Group;
                toJSON(message: _335.PermissionDetail_Group): unknown;
                fromPartial(object: {
                    groupId?: number;
                    permission?: number;
                }): _335.PermissionDetail_Group;
            };
        };
        namespace v2 {
            const authz: {
                GenericSubspaceAuthorization: {
                    encode(message: _336.GenericSubspaceAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.GenericSubspaceAuthorization;
                    fromJSON(object: any): _336.GenericSubspaceAuthorization;
                    toJSON(message: _336.GenericSubspaceAuthorization): unknown;
                    fromPartial(object: {
                        subspacesIds?: any[];
                        msg?: string;
                    }): _336.GenericSubspaceAuthorization;
                };
            };
        }
        const v3: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSubspace(value: _339.MsgCreateSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editSubspace(value: _339.MsgEditSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSubspace(value: _339.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSection(value: _339.MsgCreateSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editSection(value: _339.MsgEditSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moveSection(value: _339.MsgMoveSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSection(value: _339.MsgDeleteSection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserGroup(value: _339.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editUserGroup(value: _339.MsgEditUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moveUserGroup(value: _339.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUserGroupPermissions(value: _339.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteUserGroup(value: _339.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addUserToUserGroup(value: _339.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeUserFromUserGroup(value: _339.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUserPermissions(value: _339.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSubspace(value: _339.MsgCreateSubspace): {
                        typeUrl: string;
                        value: _339.MsgCreateSubspace;
                    };
                    editSubspace(value: _339.MsgEditSubspace): {
                        typeUrl: string;
                        value: _339.MsgEditSubspace;
                    };
                    deleteSubspace(value: _339.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: _339.MsgDeleteSubspace;
                    };
                    createSection(value: _339.MsgCreateSection): {
                        typeUrl: string;
                        value: _339.MsgCreateSection;
                    };
                    editSection(value: _339.MsgEditSection): {
                        typeUrl: string;
                        value: _339.MsgEditSection;
                    };
                    moveSection(value: _339.MsgMoveSection): {
                        typeUrl: string;
                        value: _339.MsgMoveSection;
                    };
                    deleteSection(value: _339.MsgDeleteSection): {
                        typeUrl: string;
                        value: _339.MsgDeleteSection;
                    };
                    createUserGroup(value: _339.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: _339.MsgCreateUserGroup;
                    };
                    editUserGroup(value: _339.MsgEditUserGroup): {
                        typeUrl: string;
                        value: _339.MsgEditUserGroup;
                    };
                    moveUserGroup(value: _339.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: _339.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: _339.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: _339.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: _339.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: _339.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: _339.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: _339.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: _339.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: _339.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: _339.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: _339.MsgSetUserPermissions;
                    };
                };
                toJSON: {
                    createSubspace(value: _339.MsgCreateSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editSubspace(value: _339.MsgEditSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSubspace(value: _339.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createSection(value: _339.MsgCreateSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editSection(value: _339.MsgEditSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    moveSection(value: _339.MsgMoveSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSection(value: _339.MsgDeleteSection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createUserGroup(value: _339.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editUserGroup(value: _339.MsgEditUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    moveUserGroup(value: _339.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setUserGroupPermissions(value: _339.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteUserGroup(value: _339.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addUserToUserGroup(value: _339.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeUserFromUserGroup(value: _339.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setUserPermissions(value: _339.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createSubspace(value: any): {
                        typeUrl: string;
                        value: _339.MsgCreateSubspace;
                    };
                    editSubspace(value: any): {
                        typeUrl: string;
                        value: _339.MsgEditSubspace;
                    };
                    deleteSubspace(value: any): {
                        typeUrl: string;
                        value: _339.MsgDeleteSubspace;
                    };
                    createSection(value: any): {
                        typeUrl: string;
                        value: _339.MsgCreateSection;
                    };
                    editSection(value: any): {
                        typeUrl: string;
                        value: _339.MsgEditSection;
                    };
                    moveSection(value: any): {
                        typeUrl: string;
                        value: _339.MsgMoveSection;
                    };
                    deleteSection(value: any): {
                        typeUrl: string;
                        value: _339.MsgDeleteSection;
                    };
                    createUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgCreateUserGroup;
                    };
                    editUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgEditUserGroup;
                    };
                    moveUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: any): {
                        typeUrl: string;
                        value: _339.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: any): {
                        typeUrl: string;
                        value: _339.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: any): {
                        typeUrl: string;
                        value: _339.MsgSetUserPermissions;
                    };
                };
                fromPartial: {
                    createSubspace(value: _339.MsgCreateSubspace): {
                        typeUrl: string;
                        value: _339.MsgCreateSubspace;
                    };
                    editSubspace(value: _339.MsgEditSubspace): {
                        typeUrl: string;
                        value: _339.MsgEditSubspace;
                    };
                    deleteSubspace(value: _339.MsgDeleteSubspace): {
                        typeUrl: string;
                        value: _339.MsgDeleteSubspace;
                    };
                    createSection(value: _339.MsgCreateSection): {
                        typeUrl: string;
                        value: _339.MsgCreateSection;
                    };
                    editSection(value: _339.MsgEditSection): {
                        typeUrl: string;
                        value: _339.MsgEditSection;
                    };
                    moveSection(value: _339.MsgMoveSection): {
                        typeUrl: string;
                        value: _339.MsgMoveSection;
                    };
                    deleteSection(value: _339.MsgDeleteSection): {
                        typeUrl: string;
                        value: _339.MsgDeleteSection;
                    };
                    createUserGroup(value: _339.MsgCreateUserGroup): {
                        typeUrl: string;
                        value: _339.MsgCreateUserGroup;
                    };
                    editUserGroup(value: _339.MsgEditUserGroup): {
                        typeUrl: string;
                        value: _339.MsgEditUserGroup;
                    };
                    moveUserGroup(value: _339.MsgMoveUserGroup): {
                        typeUrl: string;
                        value: _339.MsgMoveUserGroup;
                    };
                    setUserGroupPermissions(value: _339.MsgSetUserGroupPermissions): {
                        typeUrl: string;
                        value: _339.MsgSetUserGroupPermissions;
                    };
                    deleteUserGroup(value: _339.MsgDeleteUserGroup): {
                        typeUrl: string;
                        value: _339.MsgDeleteUserGroup;
                    };
                    addUserToUserGroup(value: _339.MsgAddUserToUserGroup): {
                        typeUrl: string;
                        value: _339.MsgAddUserToUserGroup;
                    };
                    removeUserFromUserGroup(value: _339.MsgRemoveUserFromUserGroup): {
                        typeUrl: string;
                        value: _339.MsgRemoveUserFromUserGroup;
                    };
                    setUserPermissions(value: _339.MsgSetUserPermissions): {
                        typeUrl: string;
                        value: _339.MsgSetUserPermissions;
                    };
                };
            };
            AminoConverter: {
                "/desmos.subspaces.v3.MsgCreateSubspace": {
                    aminoType: string;
                    toAmino: ({ name, description, treasury, owner, creator }: _339.MsgCreateSubspace) => {
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
                    }) => _339.MsgCreateSubspace;
                };
                "/desmos.subspaces.v3.MsgEditSubspace": {
                    aminoType: string;
                    toAmino: ({ subspaceId, name, description, treasury, owner, signer }: _339.MsgEditSubspace) => {
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
                    }) => _339.MsgEditSubspace;
                };
                "/desmos.subspaces.v3.MsgDeleteSubspace": {
                    aminoType: string;
                    toAmino: ({ subspaceId, signer }: _339.MsgDeleteSubspace) => {
                        subspace_id: string;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, signer }: {
                        subspace_id: string;
                        signer: string;
                    }) => _339.MsgDeleteSubspace;
                };
                "/desmos.subspaces.v3.MsgCreateSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, name, description, parentId, creator }: _339.MsgCreateSection) => {
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
                    }) => _339.MsgCreateSection;
                };
                "/desmos.subspaces.v3.MsgEditSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, name, description, editor }: _339.MsgEditSection) => {
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
                    }) => _339.MsgEditSection;
                };
                "/desmos.subspaces.v3.MsgMoveSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, newParentId, signer }: _339.MsgMoveSection) => {
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
                    }) => _339.MsgMoveSection;
                };
                "/desmos.subspaces.v3.MsgDeleteSection": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, signer }: _339.MsgDeleteSection) => {
                        subspace_id: string;
                        section_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, section_id, signer }: {
                        subspace_id: string;
                        section_id: number;
                        signer: string;
                    }) => _339.MsgDeleteSection;
                };
                "/desmos.subspaces.v3.MsgCreateUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, name, description, defaultPermissions, initialMembers, creator }: _339.MsgCreateUserGroup) => {
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
                    }) => _339.MsgCreateUserGroup;
                };
                "/desmos.subspaces.v3.MsgEditUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, name, description, signer }: _339.MsgEditUserGroup) => {
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
                    }) => _339.MsgEditUserGroup;
                };
                "/desmos.subspaces.v3.MsgMoveUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, newSectionId, signer }: _339.MsgMoveUserGroup) => {
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
                    }) => _339.MsgMoveUserGroup;
                };
                "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, permissions, signer }: _339.MsgSetUserGroupPermissions) => {
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
                    }) => _339.MsgSetUserGroupPermissions;
                };
                "/desmos.subspaces.v3.MsgDeleteUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, signer }: _339.MsgDeleteUserGroup) => {
                        subspace_id: string;
                        group_id: number;
                        signer: string;
                    };
                    fromAmino: ({ subspace_id, group_id, signer }: {
                        subspace_id: string;
                        group_id: number;
                        signer: string;
                    }) => _339.MsgDeleteUserGroup;
                };
                "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, user, signer }: _339.MsgAddUserToUserGroup) => {
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
                    }) => _339.MsgAddUserToUserGroup;
                };
                "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
                    aminoType: string;
                    toAmino: ({ subspaceId, groupId, user, signer }: _339.MsgRemoveUserFromUserGroup) => {
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
                    }) => _339.MsgRemoveUserFromUserGroup;
                };
                "/desmos.subspaces.v3.MsgSetUserPermissions": {
                    aminoType: string;
                    toAmino: ({ subspaceId, sectionId, user, permissions, signer }: _339.MsgSetUserPermissions) => {
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
                    }) => _339.MsgSetUserPermissions;
                };
            };
            QuerySubspacesRequest: {
                encode(message: _340.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySubspacesRequest;
                fromJSON(object: any): _340.QuerySubspacesRequest;
                toJSON(message: _340.QuerySubspacesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _340.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _340.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySubspacesResponse;
                fromJSON(object: any): _340.QuerySubspacesResponse;
                toJSON(message: _340.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        id?: any;
                        name?: string;
                        description?: string;
                        treasury?: string;
                        owner?: string;
                        creator?: string;
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _340.QuerySubspacesResponse;
            };
            QuerySubspaceRequest: {
                encode(message: _340.QuerySubspaceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySubspaceRequest;
                fromJSON(object: any): _340.QuerySubspaceRequest;
                toJSON(message: _340.QuerySubspaceRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _340.QuerySubspaceRequest;
            };
            QuerySubspaceResponse: {
                encode(message: _340.QuerySubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySubspaceResponse;
                fromJSON(object: any): _340.QuerySubspaceResponse;
                toJSON(message: _340.QuerySubspaceResponse): unknown;
                fromPartial(object: {
                    subspace?: {
                        id?: any;
                        name?: string;
                        description?: string;
                        treasury?: string;
                        owner?: string;
                        creator?: string;
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _340.QuerySubspaceResponse;
            };
            QuerySectionsRequest: {
                encode(message: _340.QuerySectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySectionsRequest;
                fromJSON(object: any): _340.QuerySectionsRequest;
                toJSON(message: _340.QuerySectionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _340.QuerySectionsRequest;
            };
            QuerySectionsResponse: {
                encode(message: _340.QuerySectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySectionsResponse;
                fromJSON(object: any): _340.QuerySectionsResponse;
                toJSON(message: _340.QuerySectionsResponse): unknown;
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
                }): _340.QuerySectionsResponse;
            };
            QuerySectionRequest: {
                encode(message: _340.QuerySectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySectionRequest;
                fromJSON(object: any): _340.QuerySectionRequest;
                toJSON(message: _340.QuerySectionRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                }): _340.QuerySectionRequest;
            };
            QuerySectionResponse: {
                encode(message: _340.QuerySectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QuerySectionResponse;
                fromJSON(object: any): _340.QuerySectionResponse;
                toJSON(message: _340.QuerySectionResponse): unknown;
                fromPartial(object: {
                    section?: {
                        subspaceId?: any;
                        id?: number;
                        parentId?: number;
                        name?: string;
                        description?: string;
                    };
                }): _340.QuerySectionResponse;
            };
            QueryUserGroupsRequest: {
                encode(message: _340.QueryUserGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupsRequest;
                fromJSON(object: any): _340.QueryUserGroupsRequest;
                toJSON(message: _340.QueryUserGroupsRequest): unknown;
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
                }): _340.QueryUserGroupsRequest;
            };
            QueryUserGroupsResponse: {
                encode(message: _340.QueryUserGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupsResponse;
                fromJSON(object: any): _340.QueryUserGroupsResponse;
                toJSON(message: _340.QueryUserGroupsResponse): unknown;
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
                }): _340.QueryUserGroupsResponse;
            };
            QueryUserGroupRequest: {
                encode(message: _340.QueryUserGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupRequest;
                fromJSON(object: any): _340.QueryUserGroupRequest;
                toJSON(message: _340.QueryUserGroupRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                }): _340.QueryUserGroupRequest;
            };
            QueryUserGroupResponse: {
                encode(message: _340.QueryUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupResponse;
                fromJSON(object: any): _340.QueryUserGroupResponse;
                toJSON(message: _340.QueryUserGroupResponse): unknown;
                fromPartial(object: {
                    group?: {
                        subspaceId?: any;
                        sectionId?: number;
                        id?: number;
                        name?: string;
                        description?: string;
                        permissions?: string[];
                    };
                }): _340.QueryUserGroupResponse;
            };
            QueryUserGroupMembersRequest: {
                encode(message: _340.QueryUserGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupMembersRequest;
                fromJSON(object: any): _340.QueryUserGroupMembersRequest;
                toJSON(message: _340.QueryUserGroupMembersRequest): unknown;
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
                }): _340.QueryUserGroupMembersRequest;
            };
            QueryUserGroupMembersResponse: {
                encode(message: _340.QueryUserGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserGroupMembersResponse;
                fromJSON(object: any): _340.QueryUserGroupMembersResponse;
                toJSON(message: _340.QueryUserGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _340.QueryUserGroupMembersResponse;
            };
            QueryUserPermissionsRequest: {
                encode(message: _340.QueryUserPermissionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserPermissionsRequest;
                fromJSON(object: any): _340.QueryUserPermissionsRequest;
                toJSON(message: _340.QueryUserPermissionsRequest): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                }): _340.QueryUserPermissionsRequest;
            };
            QueryUserPermissionsResponse: {
                encode(message: _340.QueryUserPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryUserPermissionsResponse;
                fromJSON(object: any): _340.QueryUserPermissionsResponse;
                toJSON(message: _340.QueryUserPermissionsResponse): unknown;
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
                }): _340.QueryUserPermissionsResponse;
            };
            PermissionDetail: {
                encode(message: _340.PermissionDetail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.PermissionDetail;
                fromJSON(object: any): _340.PermissionDetail;
                toJSON(message: _340.PermissionDetail): unknown;
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
                }): _340.PermissionDetail;
            };
            PermissionDetail_User: {
                encode(message: _340.PermissionDetail_User, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.PermissionDetail_User;
                fromJSON(object: any): _340.PermissionDetail_User;
                toJSON(message: _340.PermissionDetail_User): unknown;
                fromPartial(object: {
                    user?: string;
                    permission?: string[];
                }): _340.PermissionDetail_User;
            };
            PermissionDetail_Group: {
                encode(message: _340.PermissionDetail_Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.PermissionDetail_Group;
                fromJSON(object: any): _340.PermissionDetail_Group;
                toJSON(message: _340.PermissionDetail_Group): unknown;
                fromPartial(object: {
                    groupId?: number;
                    permission?: string[];
                }): _340.PermissionDetail_Group;
            };
            MsgCreateSubspace: {
                encode(message: _339.MsgCreateSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateSubspace;
                fromJSON(object: any): _339.MsgCreateSubspace;
                toJSON(message: _339.MsgCreateSubspace): unknown;
                fromPartial(object: {
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                }): _339.MsgCreateSubspace;
            };
            MsgCreateSubspaceResponse: {
                encode(message: _339.MsgCreateSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateSubspaceResponse;
                fromJSON(object: any): _339.MsgCreateSubspaceResponse;
                toJSON(message: _339.MsgCreateSubspaceResponse): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                }): _339.MsgCreateSubspaceResponse;
            };
            MsgEditSubspace: {
                encode(message: _339.MsgEditSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditSubspace;
                fromJSON(object: any): _339.MsgEditSubspace;
                toJSON(message: _339.MsgEditSubspace): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    signer?: string;
                }): _339.MsgEditSubspace;
            };
            MsgEditSubspaceResponse: {
                encode(_: _339.MsgEditSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditSubspaceResponse;
                fromJSON(_: any): _339.MsgEditSubspaceResponse;
                toJSON(_: _339.MsgEditSubspaceResponse): unknown;
                fromPartial(_: {}): _339.MsgEditSubspaceResponse;
            };
            MsgDeleteSubspace: {
                encode(message: _339.MsgDeleteSubspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteSubspace;
                fromJSON(object: any): _339.MsgDeleteSubspace;
                toJSON(message: _339.MsgDeleteSubspace): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    signer?: string;
                }): _339.MsgDeleteSubspace;
            };
            MsgDeleteSubspaceResponse: {
                encode(_: _339.MsgDeleteSubspaceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteSubspaceResponse;
                fromJSON(_: any): _339.MsgDeleteSubspaceResponse;
                toJSON(_: _339.MsgDeleteSubspaceResponse): unknown;
                fromPartial(_: {}): _339.MsgDeleteSubspaceResponse;
            };
            MsgCreateSection: {
                encode(message: _339.MsgCreateSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateSection;
                fromJSON(object: any): _339.MsgCreateSection;
                toJSON(message: _339.MsgCreateSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    name?: string;
                    description?: string;
                    parentId?: number;
                    creator?: string;
                }): _339.MsgCreateSection;
            };
            MsgCreateSectionResponse: {
                encode(message: _339.MsgCreateSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateSectionResponse;
                fromJSON(object: any): _339.MsgCreateSectionResponse;
                toJSON(message: _339.MsgCreateSectionResponse): unknown;
                fromPartial(object: {
                    sectionId?: number;
                }): _339.MsgCreateSectionResponse;
            };
            MsgEditSection: {
                encode(message: _339.MsgEditSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditSection;
                fromJSON(object: any): _339.MsgEditSection;
                toJSON(message: _339.MsgEditSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    name?: string;
                    description?: string;
                    editor?: string;
                }): _339.MsgEditSection;
            };
            MsgEditSectionResponse: {
                encode(_: _339.MsgEditSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditSectionResponse;
                fromJSON(_: any): _339.MsgEditSectionResponse;
                toJSON(_: _339.MsgEditSectionResponse): unknown;
                fromPartial(_: {}): _339.MsgEditSectionResponse;
            };
            MsgMoveSection: {
                encode(message: _339.MsgMoveSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgMoveSection;
                fromJSON(object: any): _339.MsgMoveSection;
                toJSON(message: _339.MsgMoveSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    newParentId?: number;
                    signer?: string;
                }): _339.MsgMoveSection;
            };
            MsgMoveSectionResponse: {
                encode(_: _339.MsgMoveSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgMoveSectionResponse;
                fromJSON(_: any): _339.MsgMoveSectionResponse;
                toJSON(_: _339.MsgMoveSectionResponse): unknown;
                fromPartial(_: {}): _339.MsgMoveSectionResponse;
            };
            MsgDeleteSection: {
                encode(message: _339.MsgDeleteSection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteSection;
                fromJSON(object: any): _339.MsgDeleteSection;
                toJSON(message: _339.MsgDeleteSection): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    signer?: string;
                }): _339.MsgDeleteSection;
            };
            MsgDeleteSectionResponse: {
                encode(_: _339.MsgDeleteSectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteSectionResponse;
                fromJSON(_: any): _339.MsgDeleteSectionResponse;
                toJSON(_: _339.MsgDeleteSectionResponse): unknown;
                fromPartial(_: {}): _339.MsgDeleteSectionResponse;
            };
            MsgCreateUserGroup: {
                encode(message: _339.MsgCreateUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateUserGroup;
                fromJSON(object: any): _339.MsgCreateUserGroup;
                toJSON(message: _339.MsgCreateUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    name?: string;
                    description?: string;
                    defaultPermissions?: string[];
                    initialMembers?: string[];
                    creator?: string;
                }): _339.MsgCreateUserGroup;
            };
            MsgCreateUserGroupResponse: {
                encode(message: _339.MsgCreateUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgCreateUserGroupResponse;
                fromJSON(object: any): _339.MsgCreateUserGroupResponse;
                toJSON(message: _339.MsgCreateUserGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: number;
                }): _339.MsgCreateUserGroupResponse;
            };
            MsgEditUserGroup: {
                encode(message: _339.MsgEditUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditUserGroup;
                fromJSON(object: any): _339.MsgEditUserGroup;
                toJSON(message: _339.MsgEditUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    name?: string;
                    description?: string;
                    signer?: string;
                }): _339.MsgEditUserGroup;
            };
            MsgEditUserGroupResponse: {
                encode(_: _339.MsgEditUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgEditUserGroupResponse;
                fromJSON(_: any): _339.MsgEditUserGroupResponse;
                toJSON(_: _339.MsgEditUserGroupResponse): unknown;
                fromPartial(_: {}): _339.MsgEditUserGroupResponse;
            };
            MsgMoveUserGroup: {
                encode(message: _339.MsgMoveUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgMoveUserGroup;
                fromJSON(object: any): _339.MsgMoveUserGroup;
                toJSON(message: _339.MsgMoveUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    newSectionId?: number;
                    signer?: string;
                }): _339.MsgMoveUserGroup;
            };
            MsgMoveUserGroupResponse: {
                encode(_: _339.MsgMoveUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgMoveUserGroupResponse;
                fromJSON(_: any): _339.MsgMoveUserGroupResponse;
                toJSON(_: _339.MsgMoveUserGroupResponse): unknown;
                fromPartial(_: {}): _339.MsgMoveUserGroupResponse;
            };
            MsgSetUserGroupPermissions: {
                encode(message: _339.MsgSetUserGroupPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSetUserGroupPermissions;
                fromJSON(object: any): _339.MsgSetUserGroupPermissions;
                toJSON(message: _339.MsgSetUserGroupPermissions): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    permissions?: string[];
                    signer?: string;
                }): _339.MsgSetUserGroupPermissions;
            };
            MsgSetUserGroupPermissionsResponse: {
                encode(_: _339.MsgSetUserGroupPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSetUserGroupPermissionsResponse;
                fromJSON(_: any): _339.MsgSetUserGroupPermissionsResponse;
                toJSON(_: _339.MsgSetUserGroupPermissionsResponse): unknown;
                fromPartial(_: {}): _339.MsgSetUserGroupPermissionsResponse;
            };
            MsgDeleteUserGroup: {
                encode(message: _339.MsgDeleteUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteUserGroup;
                fromJSON(object: any): _339.MsgDeleteUserGroup;
                toJSON(message: _339.MsgDeleteUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    signer?: string;
                }): _339.MsgDeleteUserGroup;
            };
            MsgDeleteUserGroupResponse: {
                encode(_: _339.MsgDeleteUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgDeleteUserGroupResponse;
                fromJSON(_: any): _339.MsgDeleteUserGroupResponse;
                toJSON(_: _339.MsgDeleteUserGroupResponse): unknown;
                fromPartial(_: {}): _339.MsgDeleteUserGroupResponse;
            };
            MsgAddUserToUserGroup: {
                encode(message: _339.MsgAddUserToUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgAddUserToUserGroup;
                fromJSON(object: any): _339.MsgAddUserToUserGroup;
                toJSON(message: _339.MsgAddUserToUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                    signer?: string;
                }): _339.MsgAddUserToUserGroup;
            };
            MsgAddUserToUserGroupResponse: {
                encode(_: _339.MsgAddUserToUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgAddUserToUserGroupResponse;
                fromJSON(_: any): _339.MsgAddUserToUserGroupResponse;
                toJSON(_: _339.MsgAddUserToUserGroupResponse): unknown;
                fromPartial(_: {}): _339.MsgAddUserToUserGroupResponse;
            };
            MsgRemoveUserFromUserGroup: {
                encode(message: _339.MsgRemoveUserFromUserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgRemoveUserFromUserGroup;
                fromJSON(object: any): _339.MsgRemoveUserFromUserGroup;
                toJSON(message: _339.MsgRemoveUserFromUserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                    signer?: string;
                }): _339.MsgRemoveUserFromUserGroup;
            };
            MsgRemoveUserFromUserGroupResponse: {
                encode(_: _339.MsgRemoveUserFromUserGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgRemoveUserFromUserGroupResponse;
                fromJSON(_: any): _339.MsgRemoveUserFromUserGroupResponse;
                toJSON(_: _339.MsgRemoveUserFromUserGroupResponse): unknown;
                fromPartial(_: {}): _339.MsgRemoveUserFromUserGroupResponse;
            };
            MsgSetUserPermissions: {
                encode(message: _339.MsgSetUserPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSetUserPermissions;
                fromJSON(object: any): _339.MsgSetUserPermissions;
                toJSON(message: _339.MsgSetUserPermissions): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                    permissions?: string[];
                    signer?: string;
                }): _339.MsgSetUserPermissions;
            };
            MsgSetUserPermissionsResponse: {
                encode(_: _339.MsgSetUserPermissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSetUserPermissionsResponse;
                fromJSON(_: any): _339.MsgSetUserPermissionsResponse;
                toJSON(_: _339.MsgSetUserPermissionsResponse): unknown;
                fromPartial(_: {}): _339.MsgSetUserPermissionsResponse;
            };
            Subspace: {
                encode(message: _338.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.Subspace;
                fromJSON(object: any): _338.Subspace;
                toJSON(message: _338.Subspace): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    description?: string;
                    treasury?: string;
                    owner?: string;
                    creator?: string;
                    creationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _338.Subspace;
            };
            Section: {
                encode(message: _338.Section, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.Section;
                fromJSON(object: any): _338.Section;
                toJSON(message: _338.Section): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    id?: number;
                    parentId?: number;
                    name?: string;
                    description?: string;
                }): _338.Section;
            };
            UserGroup: {
                encode(message: _338.UserGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.UserGroup;
                fromJSON(object: any): _338.UserGroup;
                toJSON(message: _338.UserGroup): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    id?: number;
                    name?: string;
                    description?: string;
                    permissions?: string[];
                }): _338.UserGroup;
            };
            UserPermission: {
                encode(message: _338.UserPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.UserPermission;
                fromJSON(object: any): _338.UserPermission;
                toJSON(message: _338.UserPermission): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    sectionId?: number;
                    user?: string;
                    permissions?: string[];
                }): _338.UserPermission;
            };
            GenesisState: {
                encode(message: _337.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.GenesisState;
                fromJSON(object: any): _337.GenesisState;
                toJSON(message: _337.GenesisState): unknown;
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
                        creationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                }): _337.GenesisState;
            };
            SubspaceData: {
                encode(message: _337.SubspaceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.SubspaceData;
                fromJSON(object: any): _337.SubspaceData;
                toJSON(message: _337.SubspaceData): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    nextGroupId?: number;
                    nextSectionId?: number;
                }): _337.SubspaceData;
            };
            UserGroupMemberEntry: {
                encode(message: _337.UserGroupMemberEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.UserGroupMemberEntry;
                fromJSON(object: any): _337.UserGroupMemberEntry;
                toJSON(message: _337.UserGroupMemberEntry): unknown;
                fromPartial(object: {
                    subspaceId?: any;
                    groupId?: number;
                    user?: string;
                }): _337.UserGroupMemberEntry;
            };
        };
    }
    namespace supply {
        const v1: {
            QueryTotalRequest: {
                encode(message: _341.QueryTotalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.QueryTotalRequest;
                fromJSON(object: any): _341.QueryTotalRequest;
                toJSON(message: _341.QueryTotalRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    dividerExponent?: any;
                }): _341.QueryTotalRequest;
            };
            QueryTotalResponse: {
                encode(message: _341.QueryTotalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.QueryTotalResponse;
                fromJSON(object: any): _341.QueryTotalResponse;
                toJSON(message: _341.QueryTotalResponse): unknown;
                fromPartial(object: {
                    totalSupply?: string;
                }): _341.QueryTotalResponse;
            };
            QueryCirculatingRequest: {
                encode(message: _341.QueryCirculatingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.QueryCirculatingRequest;
                fromJSON(object: any): _341.QueryCirculatingRequest;
                toJSON(message: _341.QueryCirculatingRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    dividerExponent?: any;
                }): _341.QueryCirculatingRequest;
            };
            QueryCirculatingResponse: {
                encode(message: _341.QueryCirculatingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.QueryCirculatingResponse;
                fromJSON(object: any): _341.QueryCirculatingResponse;
                toJSON(message: _341.QueryCirculatingResponse): unknown;
                fromPartial(object: {
                    circulatingSupply?: string;
                }): _341.QueryCirculatingResponse;
            };
        };
    }
}
