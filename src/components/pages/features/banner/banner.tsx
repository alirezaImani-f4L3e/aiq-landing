import { createStyles } from "antd-style";
import { Image, type ImageProps } from "@lobehub/ui";

const useStyles = createStyles(({ css, responsive }) => ({
  banner: css`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsive.mobile} {
      height: 100vh;
    }
  `,
}));
const Banner: React.FC<ImageProps> = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.banner}>
      <div>
        <Image
          // src="https://hub-apac-1.lobeobjects.space/landing/features-overview.webp"
          src="/images/features/features-overview.webp"
          alt="LobeChat Features"
          preview={false}
          variant={"borderless"}
          style={{ width: "1024px", height: "430px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
