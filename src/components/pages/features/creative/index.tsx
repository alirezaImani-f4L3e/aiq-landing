import { Image } from "@lobehub/ui";
import { createStyles } from "antd-style";
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
    width: 100%;
    margin-top: 64px;
  `,
  imagebox: css`,
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    border-radius:50px;
  `,
  textbox: css`
    background-color: #0d0d0d;
    padding: 8px 24px;
    border-radius: 16px;
    ${responsive.mobile} {
      width: 70%;
    }
  `,
  pargh: css`
    font-size: 14px;
    text-align: end;
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
    ${responsive.mobile} {
      width: 100%;
      height: 100%;
    }
  `,
}));

const Creative = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        برای خدمات خلاقانه: پشتیبانی از چندین هوش مصنوعی تولیدمحور
      </span>

      <Flexbox
        className={styles.boxWrapper}
        justify="center"
        align="start"
        horizontal
        gap={"16px"}
      >
        <div className={styles.textbox}>
          <p className={styles.pargh}>
            Here, you can use words to describe creating art. Whether it's
            images, audio, or even video, describe it
            <span style={{ display: "block" }}>
              .I will create it for you 👉
            </span>
          </p>
        </div>
        <div className={styles.imagebox}>🧑‍🎨</div>
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
