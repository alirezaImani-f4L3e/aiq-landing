"use client";
import { Flexbox } from "react-layout-kit";
import { Text } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Avatar, type AvatarGroupProps } from "@lobehub/ui";
import { Typography } from "antd";
import Link from "next/link";

const useSyles = createStyles(({ css }) => ({
  title: css`
    font-size: 16px;
    font-weight: bold;
    color: white;
    line-height: 1.25;
    width: 80%;
    margin-bottom: 16px;
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

const RelatedPost = () => {
  const { styles } = useSyles();
  const { Title } = Typography;

  return (
    <Flexbox horizontal={false}>
      <Link href={""} className={styles.title}>
        MCP در Lobehub: چیست و چگونه آن را تنظیم کنیم
      </Link>

      <Flexbox horizontal align="center" justify="start" gap={8}>
        <Text className={styles.datePaper}>Jun 19, 2025</Text>
        <Avatar src={"/images/blog/tc.webp"} size={24} onClick={console.log} />
      </Flexbox>
    </Flexbox>
  );
};

export default RelatedPost;
