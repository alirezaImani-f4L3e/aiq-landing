"use client";
import { Grid, Image, Text } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";

const useStyles = createStyles(({ css, responsive }) => ({
  mainGrid: css`
    height: 80vh;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    
    ${responsive.tablet} {
      grid-template-columns: 1fr;
      height: 100vh;
      }
      ${responsive.mobile} {
        height: 140vh;
      grid-template-columns: 1fr;
    }
  `,
  title: css`
    font-size: 32px;
    font-weight: bold;
    margin-right:20px;

    ${responsive.tablet} {
      font-size: 28px;
    }
    ${responsive.mobile} {
      font-size: 28px;
    }
  `,
  openAi: css`
    border-radius: 16px;
    border: 1px solid #1a1a1a;
    overflow: hidden;

    ${responsive.tablet} {
      order: 1;
    }
  `,
  openAiTitle: css`
    font-size: 20px;
    font-weight: bold;
  `,
  openAiContent: css`
    font-size: 18px;
    font-weight: thin;
    color: #aaaaaa;
  `,
  openAiSubContent: css`
    width: 100%;
    padding: 0 16px 16px 16px;
    margin-top:-40px;
    background-color:rgba(0,0,0,1);
    z-index:4;
  `,
  openAiAvatar: css`
    width: 24px;
    height: 24px;
    border-radius: 200px;
    background-color: green;
  `,
  openAiAvatarTitle: css`
    font-size: 14px;
    color: #aaaaaa;
  `,
  openAiImage: css`
    height: 300px;
    border-t-radius: 16px;
    transition: all 1s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset-block-end: -1px;
      inset-inline-start: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 75%,
        #000 95%
      );
      opacity: 1;
      transition: opacity 1s ease;
    }

    &:hover {
      transform: scale(1.1);

      &::after {
        opacity: 0;
      }
    }
    ${responsive.tablet} {
      height: 204px;
    }
    ${responsive.mobile} {
      height: 204px;
    }
  `,

  chatsAi: css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
     border: 1px solid #1a1a1a;
    border-radius: 16px;
    overflow: hidden;

    ${responsive.tablet} {
      grid-template-columns: 1fr 1fr;
      order: 2;
    }
    ${responsive.mobile} {
      grid-template-columns: 1fr;
    }
  `,

  chatImage: css`
    height: 130px;
    border-t-radius: 16px;
    transition: all 1s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset-block-end: -1px;
      inset-inline-start: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 75%,
        #000 95%
      );
      opacity: 1;
      transition: opacity 1s ease;
    }

    &:hover {
      transform: scale(1.1);

      &::after {
        opacity: 0;
      }
    }

    ${responsive.tablet} {
      height: 160px;
    }
    ${responsive.mobile} {
      height: 160px;
    }
  `,
  // chatsAiGemini: css`
  //   border: 1px solid #1a1a1a;
  //   border-radius: 16px;
  //   overflow: hidden;
  // `,
  // chatsAiDeep: css`
  //   border: 1px solid #1a1a1a;
  //   border-radius: 16px;
  //   overflow: hidden;
  // `,
}));

type BlogBoxPropsTypes = {
  title:string;
}
const BlogBox:React.FC<BlogBoxPropsTypes> = ({title}) => {
  const { styles } = useStyles();

  return (
    <div style={{ maxWidth: "1200px", display: "flex", margin: "0 auto" }}>
      <div className="">
        <h1 className={styles.title}>{title}</h1>

        <Grid className={styles.mainGrid}>
          <Flexbox className={styles.chatsAi}>
            {/* <div className={styles.chatsAiGemini}> */}
              <Image
                className={styles.chatImage}
                preview={false}
                src="/images/blog/gemini.webp"
                variant="borderless"
              />

              <div className={styles.openAiSubContent}>
                <Text ellipsis={{ rows: 2 }} className={styles.openAiContent}>
                  جیمینی ۲.۰ فلش (آزمایشی) - API تولید تصویر: قابلیت‌ها
                </Text>

                <Flexbox
                  className=""
                  horizontal
                  justify="space-between"
                  align="center"
                >
                  <div
                    className=""
                    style={{ color: "#6F6F6F", fontSize: "12px" }}
                  >
                    <span>Community .</span> <span>Mar 16, 2025</span>
                  </div>

                  <Flexbox className="" horizontal gap={16} align="center">
                    <span className={styles.openAiAvatarTitle}>TC</span>
                    <div className={styles.openAiAvatar}></div>
                  </Flexbox>
                </Flexbox>
              </div>
            {/* </div> */}

            {/* <div className={styles.chatsAiDeep}> */}
              <Image
                className={styles.chatImage}
                preview={false}
                src="/images/blog/lobeChat.webp"
                variant="borderless"
              />

              <div className={styles.openAiSubContent}>
                <Text ellipsis={{ rows: 2 }} className={styles.openAiContent}>
                  DeepSeek R1: معیار جدید برای قابلیت‌های استدلال سیستم‌های باز
                </Text>

                <Flexbox horizontal justify="space-between" align="center">
                  <div
                    className=""
                    style={{ color: "#6F6F6F", fontSize: "12px" }}
                  >
                    <span>Community .</span> <span>Mar 16, 2025</span>
                  </div>

                  <Flexbox className="" horizontal gap={16} align="center">
                    <span className={styles.openAiAvatarTitle}>TC</span>
                    <div className={styles.openAiAvatar}></div>
                  </Flexbox>
                </Flexbox>
              </div>
            {/* </div> */}
          </Flexbox>

          {/************************* Left Side ********************************/}
          <Flexbox className={styles.openAi}>
            <Image
              className={styles.openAiImage}
              preview={false}
              src="/images/blog/openAi.webp"
              variant="borderless"
            />
            <div className={styles.openAiSubContent}>
              <h1 className={styles.openAiTitle}>
                ادغام API پاسخ‌های OpenAI و تبدیل عامل
              </h1>
              <Text ellipsis={{ rows: 2 }} className={styles.openAiContent}>
                اگر «Chat Completions API» به ما امکان ساخت «هوش مصنوعی
                گفت‌وگومحور» قدرتمند را داد، آنگاه «Responses API» دروازه‌ای به
                سوی «هوش مصنوعی عامل‌محور» می‌گشاید. این مقاله به شکلی نظام‌مند
                توضیح می‌دهد که چگونه به «Responses API» و نقش آن در «LobeChat»
                از سه جنبه می‌نگریم.
              </Text>

              <Flexbox horizontal justify="space-between" align="center">
                <div
                  className=""
                  style={{ color: "#6F6F6F", fontSize: "12px" }}
                >
                  <span>Engineering .</span> <span>Jun 19,2025</span>
                </div>

                <Flexbox className="" horizontal gap={16} align="center">
                  <span className={styles.openAiAvatarTitle}>Arvin Xu</span>
                  <div className={styles.openAiAvatar}></div>
                </Flexbox>
              </Flexbox>
            </div>
          </Flexbox>
        </Grid>
      </div>
    </div>
  );
};

export default BlogBox;
