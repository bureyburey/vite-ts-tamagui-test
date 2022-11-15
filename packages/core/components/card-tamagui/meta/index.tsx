import React from 'react';
import { Text, Tooltip, XStack, YStack } from 'tamagui';
import {
  BlogIcon,
  CameraIcon,
  ContentCreationIcon,
  FacebookPostIcon,
  InstagramPostIcon,
  MixedMediaIcon,
  PinterestPostIcon,
  SocialPostIcon,
  StoryPostIcon,
  TiktokPostIcon,
  TwitterPostIcon,
  VideoIcon,
  YoutubePostIcon
} from '../../icons';
import { CONSTANTS } from '../../../config/style';

const ICONS = {
  photo: <CameraIcon />,
  mixedMedia: <MixedMediaIcon />,
  blog: <BlogIcon />,
  blog_post: <BlogIcon />,
  video: <VideoIcon />,
  instagram: <InstagramPostIcon />,
  instagram_reel_post: <InstagramPostIcon />,
  story: <StoryPostIcon />,
  pinterest_post: <PinterestPostIcon />,
  youtube_post: <YoutubePostIcon />,
  facebook_post: <FacebookPostIcon />,
  tiktok_post: <TiktokPostIcon />,
  twitter_post: <TwitterPostIcon />,
  social: <SocialPostIcon />
};

function Requirement(props) {
  const { isDeliverable, label, type, hideCompletedAmount, completedAmount, requiredAmount } =
    props;

  return (
    <Tooltip placement="top" restMs={0} delay={0}>
      <Tooltip.Trigger>
        <XStack {...style.requirement}>
          <XStack {...style.requirementIcon}>{ICONS[type] || <Text>{type}</Text>}</XStack>
          {hideCompletedAmount ? (
            <Text style={style.requirementAmount}>{`${requiredAmount}`}</Text>
          ) : (
            <Text style={style.requirementAmount}>{`${completedAmount} / ${requiredAmount}`}</Text>
          )}
        </XStack>
      </Tooltip.Trigger>
      <Tooltip.Content style={{ backgroundColor: '#404040' }}>
        <Text style={{ color: '#fff' }}>{label}</Text>
        <Tooltip.Arrow style={{ backgroundColor: '#404040' }} />
      </Tooltip.Content>
    </Tooltip>
  );
}

const REQUIREMENTS_MAP = {
  photo: {
    label: (data) => 'Photo Uploads',
    type: (data) => 'photo',
    shouldDisplay: (data) => data.photos_to_upload > 0,
    completedAmount: (data) => data.photo_submissions_count,
    requiredAmount: (data) => data.photos_to_upload
  },
  blog: {
    label: (data) => 'Blog Uploads',
    type: (data) => 'blog',
    shouldDisplay: (data) => data.blogs_to_upload > 0,
    completedAmount: (data) => data.blog_submissions_count,
    requiredAmount: (data) => data.blogs_to_upload
  },
  video: {
    label: (data) => 'Video Uploads',
    type: (data) => 'video',
    shouldDisplay: (data) => data.videos_to_upload > 0,
    completedAmount: (data) => data.video_submissions_count,
    requiredAmount: (data) => data.videos_to_upload
  },
  mixedMedia: {
    label: (data) => 'Story Uploads',
    type: (data) => 'mixedMedia',
    shouldDisplay: (data) => data.mixed_media_to_upload > 0,
    completedAmount: (data) => data.mixed_media_submissions_count,
    requiredAmount: (data) => data.mixed_media_to_upload
  },
  network: {
    label: (data) => `{NetworkPlaceholder}`,
    type: (data) => data.social_network.id,
    shouldDisplay: (data) => data.required_feed_posts_count > 0,
    completedAmount: (data) => data.accepted_feed_posts_count,
    requiredAmount: (data) => data.required_feed_posts_count
  },
  story: {
    label: (data) => `${data.social_network.id} story posts`,
    type: (data) => 'story',
    shouldDisplay: (data) => data.required_story_posts_count > 0,
    completedAmount: (data) => data.accepted_story_posts_count,
    requiredAmount: (data) => data.required_story_posts_count
  },
  deliverable: {
    label: (data) => `${data.social_network.id} Post`,
    type: (data) => data.kind,
    shouldDisplay: (data) => true,
    completedAmount: (data) => 0,
    requiredAmount: (data) => data.quantity
  }
};

const REQUIREMENTS_ORDER = ['photo', 'blog', 'video', 'mixedMedia', 'network', 'story'];

export function CardMeta(props: any) {
  const { data, hideCompletedAmount } = props;
  return (
    <YStack {...style.container}>
      <XStack {...style.requirements}>
        {REQUIREMENTS_ORDER.map((requirementKey) => {
          const { label, type, shouldDisplay, completedAmount, requiredAmount } = REQUIREMENTS_MAP[requirementKey];
          if (!shouldDisplay(data)) {
            return null;
          }
          return (
            <Requirement
              key={requirementKey}
              label={label(data)}
              type={type(data)}
              hideCompletedAmount={hideCompletedAmount}
              completedAmount={completedAmount(data)}
              requiredAmount={requiredAmount(data)}
            />
          );
        })}
        {data.deliverables.map((deliverable, index) => {
          const { label, type, shouldDisplay, completedAmount, requiredAmount } =
            REQUIREMENTS_MAP.deliverable;
          if (!shouldDisplay(data)) {
            return null;
          }
          return (
            <Requirement
              key={`deliverable-${index}`}
              isDeliverable
              label={label(data)}
              type={type(deliverable)}
              hideCompletedAmount={hideCompletedAmount}
              completedAmount={completedAmount(data)}
              requiredAmount={requiredAmount(deliverable)}
            />
          );
        })}
      </XStack>
    </YStack>
  );
}

const style = {
  container: {},
  requirements: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  requirement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // need support of marginEnd in RNW to make this work properly
    marginRight: 8,
    // marginInlineEnd: 8,
    $sm: {
      transform: [{ scale: 0.7 }],
      marginEnd: -5,
      marginInlineEnd: -5
    }
  },
  requirementIcon: {
    marginRight: 4
    // marginInlineEnd: 4,
  },
  requirementAmount: {
    fontSize: CONSTANTS.$textMedium
  }
};
