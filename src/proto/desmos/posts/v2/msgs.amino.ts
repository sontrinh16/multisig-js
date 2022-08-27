import { Entities, ReplySetting, PostReference, TextTag, Url, replySettingFromJSON, postReferenceTypeFromJSON } from "./models";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreatePost, MsgEditPost, MsgDeletePost, MsgAddPostAttachment, MsgRemovePostAttachment, MsgAnswerPoll } from "./msgs";
export interface AminoMsgCreatePost extends AminoMsg {
  type: "/desmos.posts.v2.MsgCreatePost";
  value: {
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
}
export interface AminoMsgEditPost extends AminoMsg {
  type: "/desmos.posts.v2.MsgEditPost";
  value: {
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
}
export interface AminoMsgDeletePost extends AminoMsg {
  type: "/desmos.posts.v2.MsgDeletePost";
  value: {
    subspace_id: string;
    post_id: string;
    signer: string;
  };
}
export interface AminoMsgAddPostAttachment extends AminoMsg {
  type: "/desmos.posts.v2.MsgAddPostAttachment";
  value: {
    subspace_id: string;
    post_id: string;
    content: {
      type_url: string;
      value: Uint8Array;
    };
    editor: string;
  };
}
export interface AminoMsgRemovePostAttachment extends AminoMsg {
  type: "/desmos.posts.v2.MsgRemovePostAttachment";
  value: {
    subspace_id: string;
    post_id: string;
    attachment_id: number;
    editor: string;
  };
}
export interface AminoMsgAnswerPoll extends AminoMsg {
  type: "/desmos.posts.v2.MsgAnswerPoll";
  value: {
    subspace_id: string;
    post_id: string;
    poll_id: number;
    answers_indexes: number[];
    signer: string;
  };
}
export const AminoConverter = {
  "/desmos.posts.v2.MsgCreatePost": {
    aminoType: "/desmos.posts.v2.MsgCreatePost",
    toAmino: ({
      subspaceId,
      sectionId,
      externalId,
      text,
      entities,
      tags,
      attachments,
      author,
      conversationId,
      replySettings,
      referencedPosts
    }: MsgCreatePost): AminoMsgCreatePost["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        section_id: sectionId,
        external_id: externalId,
        text,
        entities: {
          hashtags: entities.hashtags.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            tag: el0.tag
          })),
          mentions: entities.mentions.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            tag: el0.tag
          })),
          urls: entities.urls.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            url: el0.url,
            display_url: el0.displayUrl
          }))
        },
        tags,
        attachments: attachments.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        author,
        conversation_id: conversationId.toString(),
        reply_settings: replySettings,
        referenced_posts: referencedPosts.map(el0 => ({
          type: el0.type,
          post_id: el0.postId.toString(),
          position: el0.position.toString()
        }))
      };
    },
    fromAmino: ({
      subspace_id,
      section_id,
      external_id,
      text,
      entities,
      tags,
      attachments,
      author,
      conversation_id,
      reply_settings,
      referenced_posts
    }: AminoMsgCreatePost["value"]): MsgCreatePost => {
      return {
        subspaceId: Long.fromString(subspace_id),
        sectionId: section_id,
        externalId: external_id,
        text,
        entities: {
          hashtags: entities.hashtags.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            tag: el1.tag
          })),
          mentions: entities.mentions.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            tag: el1.tag
          })),
          urls: entities.urls.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            url: el1.url,
            displayUrl: el1.display_url
          }))
        },
        tags,
        attachments: attachments.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        author,
        conversationId: Long.fromString(conversation_id),
        replySettings: replySettingFromJSON(reply_settings),
        referencedPosts: referenced_posts.map(el0 => ({
          type: postReferenceTypeFromJSON(el0.type),
          postId: Long.fromString(el0.post_id),
          position: Long.fromString(el0.position)
        }))
      };
    }
  },
  "/desmos.posts.v2.MsgEditPost": {
    aminoType: "/desmos.posts.v2.MsgEditPost",
    toAmino: ({
      subspaceId,
      postId,
      text,
      entities,
      tags,
      editor
    }: MsgEditPost): AminoMsgEditPost["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        text,
        entities: {
          hashtags: entities.hashtags.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            tag: el0.tag
          })),
          mentions: entities.mentions.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            tag: el0.tag
          })),
          urls: entities.urls.map(el0 => ({
            start: el0.start.toString(),
            end: el0.end.toString(),
            url: el0.url,
            display_url: el0.displayUrl
          }))
        },
        tags,
        editor
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      text,
      entities,
      tags,
      editor
    }: AminoMsgEditPost["value"]): MsgEditPost => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        text,
        entities: {
          hashtags: entities.hashtags.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            tag: el1.tag
          })),
          mentions: entities.mentions.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            tag: el1.tag
          })),
          urls: entities.urls.map(el1 => ({
            start: Long.fromString(el1.start),
            end: Long.fromString(el1.end),
            url: el1.url,
            displayUrl: el1.display_url
          }))
        },
        tags,
        editor
      };
    }
  },
  "/desmos.posts.v2.MsgDeletePost": {
    aminoType: "/desmos.posts.v2.MsgDeletePost",
    toAmino: ({
      subspaceId,
      postId,
      signer
    }: MsgDeletePost): AminoMsgDeletePost["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      signer
    }: AminoMsgDeletePost["value"]): MsgDeletePost => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        signer
      };
    }
  },
  "/desmos.posts.v2.MsgAddPostAttachment": {
    aminoType: "/desmos.posts.v2.MsgAddPostAttachment",
    toAmino: ({
      subspaceId,
      postId,
      content,
      editor
    }: MsgAddPostAttachment): AminoMsgAddPostAttachment["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        content: {
          type_url: content.typeUrl,
          value: content.value
        },
        editor
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      content,
      editor
    }: AminoMsgAddPostAttachment["value"]): MsgAddPostAttachment => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        content: {
          typeUrl: content.type_url,
          value: content.value
        },
        editor
      };
    }
  },
  "/desmos.posts.v2.MsgRemovePostAttachment": {
    aminoType: "/desmos.posts.v2.MsgRemovePostAttachment",
    toAmino: ({
      subspaceId,
      postId,
      attachmentId,
      editor
    }: MsgRemovePostAttachment): AminoMsgRemovePostAttachment["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        attachment_id: attachmentId,
        editor
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      attachment_id,
      editor
    }: AminoMsgRemovePostAttachment["value"]): MsgRemovePostAttachment => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        attachmentId: attachment_id,
        editor
      };
    }
  },
  "/desmos.posts.v2.MsgAnswerPoll": {
    aminoType: "/desmos.posts.v2.MsgAnswerPoll",
    toAmino: ({
      subspaceId,
      postId,
      pollId,
      answersIndexes,
      signer
    }: MsgAnswerPoll): AminoMsgAnswerPoll["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        post_id: postId.toString(),
        poll_id: pollId,
        answers_indexes: answersIndexes,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      post_id,
      poll_id,
      answers_indexes,
      signer
    }: AminoMsgAnswerPoll["value"]): MsgAnswerPoll => {
      return {
        subspaceId: Long.fromString(subspace_id),
        postId: Long.fromString(post_id),
        pollId: poll_id,
        answersIndexes: answers_indexes,
        signer
      };
    }
  }
};