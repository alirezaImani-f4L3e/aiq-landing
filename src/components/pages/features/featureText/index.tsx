import { Flexbox } from "react-layout-kit";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import { Button, Text } from "@lobehub/ui";
import { Book } from "lucide-react";
import { useTranslation } from "react-i18next";

const useStyles = createStyles(({ css, responsive }) => ({
  wrapper: css`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  `,
  title: css`
    font-size: 24px;
    margin-bottom: 12px;
    ${responsive.mobile} {
      font-size: 18px;
    }
  `,
  subTitle: css`
    font-size: 48px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-style: italic;
    line-height: 1.2;

    ${responsive.mobile} {
      font-size: 32px;
    }
    ${responsive.tablet} {
      font-size: 32px;
    }
  `,
  paragh: css`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 22px;
    color: #999999;

    ${responsive.mobile} {
      padding: 0px 32px;
    }

    ${responsive.tablet} {
      padding: 0px 32px;
    }
  `,
  btns: css`
    width: 200px;
    height: 45px;
  `,
}));

const FeatureText: React.FC = () => {
  const { styles } = useStyles();
  const { Title, Paragraph } = Typography;
  const { t } = useTranslation("features");

  return (
    <Flexbox className={styles.wrapper}>
      <Title level={3} className={styles.title}>
        {t("featureText.title")}
      </Title>
      <Flexbox className={styles.subTitle}>
        <Text style={{ textAlign: "center" }}>
          {t("featureText.subTitle1")}
        </Text>
        <Text style={{ textAlign: "center" }}>
          {t("featureText.subTitle2")}
        </Text>
      </Flexbox>
      <Paragraph className={styles.paragh}>
        {t("featureText.content")}
      </Paragraph>

      <Flexbox style={{ padding: "0 16px" }} gap={"15px"} horizontal={false}>
        <Button
          className={styles.btns}
          style={{ borderRadius: "10px" }}
          type="primary"
        >
          {t("featureText.getStart")}
        </Button>
        <Button
          className={styles.btns}
          style={{ borderRadius: "10px" }}
          icon={<Book />}
        >
         {t("featureText.allFeatures")}
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default FeatureText;