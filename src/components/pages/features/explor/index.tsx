"use client";
import { Github } from "@lobehub/icons";
import { Button, Text } from "@lobehub/ui";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import { useTranslation } from "react-i18next";
import { Center, Flexbox } from "react-layout-kit";

const useStyle = createStyles(({ css, responsive }) => ({
  wrapper: css`
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    align-items: center;

    ${responsive.mobile} {
      display: flex;
      flex-direction: column;
    }
  `,
  title: css`
    font-size: 32px;
    text-align: start;
    padding: 0 32px 0 0;
    font-weight: bold;
    display:flex;
    
    ${responsive.mobile} {
      display:flex;
      flex-direction:column;
      font-size: 26px;
      text-align: center;
    }
  `,
  animationText: css`
    font-size: 32px;
    text-align: start;
    padding: 0 16px;
    font-weight: bold;
    background-image: linear-gradient(
      -45deg,
      #ffb224,
      #e34ba9,
      #0072f5,
      #95f3d9
    );
    -webkit-background-size: 400% 400%;
    background-size: 400% 400%;
    border-radius: inherit;
    -webkit-animation: 5s animation-1gj30q7 5s ease infinite;
    animation: 5s animation-1gj30q7 5s ease infinite;
    position: relative;
    z-index: 5;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
    ${responsive.mobile} {
      font-size: 26px;
      text-align: center;
    }
  `,
  content: css`
    font-size: 18px;
    color: #6f6f6f;
    text-align: justify;
    padding: 0 32px;
    ${responsive.mobile} {
      font-size: 16px;
    }
  `,
  githubBtn: css`
    font-size: 16px;
    width: 200px;
    height: 45px;
    position: relative;
    border-radius: 8px;
    color: white;
    border: none;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2px;
      background: linear-gradient(-45deg, #ffb224, #e34ba9, #0072f5, #95f3d9);
      background-size: 400% 400%;
      border-radius: inherit;
      z-index: -1;
      animation: gradientBorder 5s ease infinite;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    @keyframes gradientBorder {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
}));

const Explor = () => {
  const { t } = useTranslation("features");
  const { styles } = useStyle();
  const { Paragraph } = Typography;

  return (
    <Center className={styles.wrapper}>
      <Flexbox horizontal={false}>
        <Text className={styles.title} style={{ marginBottom: "30px" }}>
          {t("explor.title")}
          <Text className={styles.animationText}>{t("explor.subTitle")}</Text>
        </Text>

        <Paragraph className={styles.content}>{t("explor.content")}</Paragraph>
      </Flexbox>

      <Flexbox gap={"20px"}>
        <Button
          style={{ width: "200px", height: "45px", fontSize: "16px" }}
          type="primary"
        >
          {t("explor.freeTrial")}
        </Button>
        <Button className={styles.githubBtn} type="default" icon={<Github />}>
          {t("explor.gitHub")}
        </Button>
      </Flexbox>
    </Center>
  );
};

export default Explor;
