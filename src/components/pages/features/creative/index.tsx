"use client";
import { Button, Image } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Fragment, useEffect, useState } from "react";
import { Flexbox } from "react-layout-kit";

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
  boxWrapper: css`
    position: relative;
    width: 90%;
    margin-top: 64px;
  `,
  tooltipButton: css`
    position: absolute;
    top: -40px;
    left: 225px;
    color: red;
    color: #aaaaaa;

    ${responsive.mobile} {
      top: -40px;
    }
    ${responsive.tablet} {
      top: -40px;
      left: 60px;
    }
  `,
  imagebox: css`,
    color: transparent; 
    flex: 0 0 auto;
    `,
  textbox: css`
    background-color: #0d0d0d;
    padding: 8px 24px;
    border-radius: 16px;
    ${responsive.mobile} {
      width: 80%;
    }
    ${responsive.tablet} {
      width: 90%;
    }
  `,
  pargh: css`
    font-size: 14px;
    text-align: end;
    overflow: hidden;
    white-space: wrap;
    width: fit-content;
    margin-left: auto;
  `,
  aiWrapper: css`
    width: 100%;
    margin-top: 68px;
    padding: 0 16px;
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
    margin-top: 16px;
    background-color: #050505;
    display: flex;
    gap: 16px;

    ${responsive.mobile} {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 200px;
    }
  `,
  generationContainer: css`
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 1s ease;

    &:hover {
      background-image: url("https://hub-apac-1.lobeobjects.space/landing/creativity/b1.webp");
    }

    ${responsive.mobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
  generationContainerImage: css`
    width: 60%;
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
}));

const Creative = () => {
  const { styles } = useStyles();
  const [displayedText, setDisplayedText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const fullText =
    "Here, you can use words to describe creating art. Whether it's images, audio, or even video, describe it\n.I will create it for you 👉";
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 0.00000000001);

    return () => clearInterval(typingInterval);
  }, []);

  // فقط یکبار زمان را هنگام لود کامپوننت می‌گیریم
  const tehranTime = new Date().toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        برای خدمات خلاقانه: پشتیبانی از چندین هوش مصنوعی تولیدمحور
      </span>

      <Flexbox
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={styles.boxWrapper}
        justify="center"
        align="start"
        horizontal
        gap={"16px"}
      >
        {showTooltip && (
          <span className={styles.tooltipButton}>{tehranTime}</span>
        )}

        <div className={styles.textbox}>
          <p className={styles.pargh}>
            {displayedText.split("\n").map((line, index) => (
              <Fragment key={index}>
                {line}
                {index < displayedText.split("\n").length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        </div>
        {/* <div className={styles.imagebox}>🧑‍🎨</div> */}
        <img
          alt="🧑‍🎨"
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          src="https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f9d1-200d-1f3a8.webp"
          // style="color: transparent; flex: 0 0 auto;"
          className={styles.imagebox}
        ></img>
      </Flexbox>

      <Flexbox className={styles.aiWrapper}>
        <div className={styles.generationImage}>
          <div
            className={styles.generationContainer}
            // style={{ width: "100%", height: "100%" }}
            // horizontal
            // justify="space-between"
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: "16px" }}
              src="/images/features/gallery.webp"
              preview={false}
            />
            <Flexbox
              align="start"
              horizontal={false}
              style={{ padding: "20px" }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#aaaaaa",
                  textAlign: "start",
                }}
              >
                تولید تصویر
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                ایده‌های درخشان خود را به آثار هنری دیجیتال خارق‌العاده تبدیل
                کنید
              </span>
            </Flexbox>
          </div>
        </div>

        <div className={styles.generationVideo}>
          <div className={styles.generationVoiceBox}>
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
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#aaaaaa",
                  textAlign: "start",
                }}
              >
                تولید صدا
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                با دستیار هوشمند خود به صورت رو در رو گفتگو کنید تا همکاری
                خلاقانه داشته باشید
              </span>

              <Image
                style={{ width: "100%", marginTop: "auto" }}
                src="/images/features/wifi.webp"
                variant="borderless"
                preview={false}
              />
            </Flexbox>
          </div>

          <div className={styles.generationVideoBox}>
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
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#aaaaaa",
                  textAlign: "start",
                }}
              >
                تولید ویدئو
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                تولید ویدیوهای خلاقانه باکیفیت با قدرت سورا
              </span>

              <Image
                style={{ width: "80%", marginTop: "auto" }}
                src="/images/features/cat.webp"
                variant="borderless"
                preview={false}
              />
            </Flexbox>
          </div>
        </div>
      </Flexbox>
    </div>
  );
};

export default Creative;
