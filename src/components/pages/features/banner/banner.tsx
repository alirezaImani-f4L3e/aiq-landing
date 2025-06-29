import { createStyles } from "antd-style";
import { Image, type ImageProps } from "@lobehub/ui";

const useStyles = createStyles(({ css }) => ({
  banner: css`
    width: 100vw;
    height: 65vh;
    padding-top:80px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  box: css`
    width: 1024px;
    height: 500px;
  `,

  image: css`
    width: 100%;
    height: 100%;
  `,
}));
const Banner:React.FC<ImageProps> = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.banner}>
      <div className={styles.box}>
        <Image
          className={styles.image}
          src="https://hub-apac-1.lobeobjects.space/landing/features-overview.webp"
          alt="LobeChat Features"
          preview={false}
          variant={"borderless"}
        />
      </div>
    </div>
  );
};

export default Banner;