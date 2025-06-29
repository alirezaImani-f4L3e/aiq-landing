import { Image } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";

const useStyles = createStyles(({ css }) => ({
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
  `,
  pargh: css`
    font-size: 14px;
    text-align: end;
  `,
  aiWrapper: css`
    width: 100%;
    margin-top: 68px;
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
          <Flexbox
            style={{ width: "100%", height: "100%" }}
            horizontal
            justify="space-between"
          >
            <Image
              style={{ width: "60%", height: "100%", borderRadius: "16px" }}
              src="/images/features/gallery.webp"
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
          </Flexbox>
        </div>

        <Flexbox className={styles.generationVideo} horizontal gap={"16px"}>
          <Flexbox style={{ width: "50%", height: "100%" }}>
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
              />
            </Flexbox>
          </Flexbox>

          <Flexbox style={{ width: "50%", height: "100%" }}>
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
              />
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </div>
  );
};

export default Creative;
