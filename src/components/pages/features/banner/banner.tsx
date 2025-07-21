import { createStyles } from "antd-style";
import { Image, type ImageProps } from "@lobehub/ui";
import { Center } from "react-layout-kit";

const useStyles = createStyles(({ css, responsive }) => ({
  banner: css`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;

    ${responsive.mobile} {
      padding-top: 100px;
      height: 65vh;
    }
  `,
}));
const Banner: React.FC<ImageProps> = () => {
  const { styles } = useStyles();

  return (
    <Center className={styles.banner}>
      <Center>
        <Image
          src="/images/features/features-overview.webp"
          alt="LobeChat Features"
          preview={false}
          variant={"borderless"}
          style={{ width: "1024px", height: "100%" }}
        />
      </Center>
    </Center>
  );
};

export default Banner;
