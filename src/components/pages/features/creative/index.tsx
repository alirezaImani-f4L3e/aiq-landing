"use client";
import { Image } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Center, Flexbox } from "react-layout-kit";
import { Typography } from "antd";
import EffectTyping from "./effectTyping";
import { useTranslation } from "react-i18next";

const useStyles = createStyles(({ css, responsive }) => ({
  wrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-size: 48px;
    font-weight: bold;
    font-style: italic;
    text-align: center;

    ${responsive.mobile} {
      font-size: 32px;
      padding: 0 16px;
    }
  `,
  aiWrapper: css`
    width: 100%;
    margin-top: 68px;
    padding: 0;

    ${responsive.mobile} {
      padding: 0 16px;
    }
  `,
  generationImage: css`
    width: 100%;
    height: 287px;
    background-color: #050505;
    margin-top: 16px;
    border: 1px solid #202020;
    border-radius: 16px;
  `,
  generationVideo: css`
    width: 100%;
    height: 374px;
    display: flex;
    gap: 16px;

    ${responsive.mobile} {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 120px;
    }
  `,
  generationContainer: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    transition: all 1s ease;
    border: 1px solid #202020;
    border-radius: 16px;

    &:hover {
      background-image: url("https://hub-apac-1.lobeobjects.space/landing/creativity/b1.webp");
    }

    ${responsive.mobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
  generationContainerImage: css`
    width: 55%;
    height: 100%;
    border-radius: 16px;

    ${responsive.mobile} {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      margin-top: 16px;
    }
  `,
  generationVideoBox: css`
    width: 50%;
    heigth: 100%;
    border-radius: 16px;

    ${responsive.mobile} {
      width: 100%;
      height: 100%;
    }

    &:hover {
      background: url(https://hub-apac-1.lobeobjects.space/landing/creativity/b2.webp)
        center center/cover;
    }
  `,
  generationVoiceBox: css`
    width: 50%;
    heigth: 100%;
    border-radius: 16px;

    ${responsive.mobile} {
      width: 100%;
      height: 100%;
    }

    &:hover {
      background: url(https://hub-apac-1.lobeobjects.space/landing/creativity/b3.webp)
        center center/cover;
    }
  `,

  wifiContainer: css`
    width: 100%;
    height: 152px;

    ${responsive.mobile} {
      height: 80px;
    }
  `,
  catContainer: css`
    width: 100%;
    height: 187px;

    ${responsive.mobile} {
      height: 80px;
    }
  `,
}));

const Creative = () => {
  const { styles } = useStyles();
  const { Paragraph, Title, Text } = Typography;
  const { t } = useTranslation("features");

  return (
    <Center className={styles.wrapper}>
      <Text className={styles.title}>{t("creative.title")}</Text>

      <EffectTyping
        speed={5}
        text={
          "در اینجا، می‌توانید از کلمات برای توصیف خلق هنر استفاده کنید. چه تصاویر، صدا یا حتی ویدئو باشد، آن را توصیف کنید"
        }
      />

      <Flexbox className={styles.aiWrapper}>
        <Center horizontal className={styles.generationContainer}>
          <Image
            className={styles.generationContainerImage}
            src="/images/features/gallery.webp"
            preview={false}
          />
          <Flexbox align="start" horizontal={false} style={{ padding: "20px" }}>
            <Title
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "#aaaaaa",
                textAlign: "start",
              }}
            >
              {t("creative.image.title")}
            </Title>
            <Paragraph
              style={{
                fontSize: "22px",
                fontWeight: "500",
                textAlign: "start",
                marginTop: "10px",
              }}
            >
              {t("creative.image.content")}
            </Paragraph>
          </Flexbox>
        </Center>

        <Center className={styles.generationVideo} horizontal>
          <Center className={styles.generationVoiceBox}>
            <Flexbox
              align="start"
              horizontal={false}
              style={{
                width: "100%",
                height: "100%",
                padding: "20px",
                border: "1px solid #202020",
                borderRadius: "16px",
              }}
            >
              <Title
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#aaaaaa",
                  textAlign: "start",
                }}
              >
                {t("creative.voice.title")}
              </Title>
              <Paragraph
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                {t("creative.voice.content")}
              </Paragraph>

              <Center className={styles.wifiContainer}>
                <Image
                  style={{ width: "100%", marginTop: "auto" }}
                  src="/images/features/wifi.webp"
                  variant="borderless"
                  preview={false}
                />
              </Center>
            </Flexbox>
          </Center>

          <Center className={styles.generationVideoBox}>
            <Flexbox
              align="start"
              horizontal={false}
              style={{
                width: "100%",
                height: "100%",
                padding: "20px",
                border: "1px solid #202020",
                borderRadius: "16px",
              }}
            >
              <Title
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#aaaaaa",
                  textAlign: "start",
                }}
              >
                {t("creative.video.title")}
              </Title>
              <Paragraph
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                {t("creative.video.content")}
              </Paragraph>

              <Center className={styles.catContainer}>
                <Image
                  style={{ width: "100%", marginTop: "auto" }}
                  src="/images/features/cat.webp"
                  variant="borderless"
                  preview={false}
                />
              </Center>
            </Flexbox>
          </Center>
        </Center>
      </Flexbox>
    </Center>
  );
};

export default Creative;
