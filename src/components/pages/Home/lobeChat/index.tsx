import { Button, Flex } from "antd";
import { createStyles } from "antd-style";
import { GithubOutlined } from "@ant-design/icons";

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    max-width: 1200px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 25px;
    margin: 0 auto;
    position: relateive;
  `,

  container: css`
    width: 100%;
    border-radius: 25px;
    background-image: url("/images/lobeChat/waitlist-bg.webp");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  `,

  title: css`
    font-size: 48px;
    color: #ffffff;
    margin-top: 100px;
    margin-bottom: 0px;
    font-style: italic;
  `,
  subTitle: css`
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 40px;
    font-style: italic;
  `,
  buttonGroup: css`
    display: flex;
    flex-direction: row;
    flex-gap: 24px;
  `,
  lobechatLogo: css`
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -32%);
  `,
  lobechatLogoImage: css`
    width: 100%;
    height: 100%;
  `,
}));

const LobeChat = () => {
  const { styles } = useStyles();

  return (
    <Flex>
      <div className={styles.wrapper}>
        <div className={styles.lobechatLogo}>
          <img
            className={styles.lobechatLogoImage}
            src={"/images/lobeChat/lobeChat-logo.png"}
          />
        </div>

        <div className={styles.container}>
          <p className={styles.title}>
            با LobeChat به خودتان مغزی باهوش‌تر هدیه دهید
          </p>
          <p className={styles.subTitle}>
            خوشه‌های مغزی را فعال کنید، جرقه‌های تفکر را روشن کنید. دستیار
            هوشمند شما، همیشه اینجاست.
          </p>

          <Flex gap="large" wrap>
            <Button style={{ padding: "20px 60px" }} icon={<GithubOutlined />}>
              گیت هاب
            </Button>
            <Button style={{ padding: "20px 60px" }} type="primary">
              آزمایشی رایگان
            </Button>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

export default LobeChat;