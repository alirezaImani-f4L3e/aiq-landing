"use client";
import { Flexbox } from "react-layout-kit";
import { Text } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Avatar, type AvatarGroupProps } from '@lobehub/ui';

const useSyles = createStyles(({ css }) => ({
  tagName: css`
    font-size: 12px;
    font-weight: bold;
    color: #6f6f6f;
  `,
  title: css`
    font-size: 20px;
    font-weight: bold;
    color: white;
    line-height: 1.25;
  `,
  content: css`
    font-size: 14px;
    font-weight: thin;
    color: #aaaaaa;
  `,
  avatar: css`
    width: 24px;
    height: 24px;
    background-color: green;
    border-radius: 200px;
  `,
  datePaper: css`
    font-size: 12px;
    font-weight: thin;
    color: #6f6f6f;
  `,
}));

const PostBox = () => {
  const { styles } = useSyles();

  // const url = 'https://avatars.githubusercontent.com/u/17870709?v=4';
  const url = "/images/blog/tc.webp";

  const items: AvatarGroupProps['items'] = Array.from({ length: 2 }, (_, index) => {
    return {
      avatar: url,
      key: String(index),
      title: 'CanisMinor',
    };
  });

  return (
      <Flexbox horizontal={false}>
        <span className={styles.tagName}>مهندسی</span>
        <h1 className={styles.title}>
          ادغام OpenAI Responses API و تبدیل عامل‌ها
        </h1>
        <Text className={styles.content} ellipsis={{ rows: 2 }}>
          اگر Chat Completions API امکان ساخت «چت‌بات هوشمند» قدرتمند را فراهم
          کرد، Responses API دروازه‌ای به سوی «هوش مصنوعی عامل‌محور» گشوده است.
          این مقاله به صورت نظام‌مند به بررسی این موضوع می‌پردازد که چگونه
        </Text>

        <Flexbox horizontal align="center" gap={16} >
          <span className={styles.datePaper}>Jun 19, 2025</span>
          {/* <div className={styles.avatar}></div> */}
          <Avatar.Group size={24} items={items} onClick={console.log} />
        </Flexbox>
      </Flexbox>
  );
};

export default PostBox;
