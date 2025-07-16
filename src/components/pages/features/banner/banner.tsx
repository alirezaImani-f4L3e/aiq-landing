import { createStyles } from "antd-style";
import { Image, type ImageProps } from "@lobehub/ui";
import { Center } from "react-layout-kit";

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
    <Center className={styles.banner}>
      <Center>
        <Image
          src="/images/features/features-overview.webp"
          alt="LobeChat Features"
          preview={false}
          variant={"borderless"}
          style={{ width: "1024px", height: "430px" }}
        />
      </Center>
    </Center>
  );
};

export default Banner;