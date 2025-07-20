import { Image, Text } from "@lobehub/ui";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import { Center, Flexbox } from "react-layout-kit";

const useStyles = createStyles(({ css }) => ({
  avatar: css`
    width: 36px;
    height: 36px;
    border-radius: 200px;
  `,
  title: css`
    font-size: 14px;
    color: white;
  `,
  subTitle: css`
    font-size: 12px;
    color: #aaaaaa;
  `,
}));

const PostedBy = () => {
  const { styles } = useStyles();
  const { Title } = Typography;

  return (
    <Center style={{ width: "100%" }}>
      <Title
        style={{ color: "#aaaaaa", fontSize: "14px", marginLeft: "auto",marginBottom:"16px" }}
        level={3}
      >
        ارسال شده توسط
      </Title>

      <Flexbox horizontal justify="start" align="center" gap={8} style={{alignSelf:"start"}}>
        <Image className={styles.avatar} src="/images/blog/person.webp" />

        <Flexbox horizontal={false}>
          <Text className={styles.title}>محمد پورحسین</Text>
          <Text className={styles.subTitle}>بنیانگذار، مهندس طراح</Text>
        </Flexbox>
      </Flexbox>
    </Center>
  );
};

export default PostedBy;
