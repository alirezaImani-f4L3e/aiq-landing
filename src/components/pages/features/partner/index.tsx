import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";
import Box from "./box";
import { PartnerItem } from "..";
import { Grid } from "@lobehub/ui";

const useSyles = createStyles(({ css, responsive }) => ({
  wrapper: css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    ${responsive.mobile} {
      padding: 0 24px;
    }
    ${responsive.tablet} {
      padding: 0 24px;
    }
  `,
  titleFirst: css`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgb(255, 248, 85) 0.04%,
      rgb(70, 227, 183) 100.04%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
  titleSecond: css`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    background:linear-gradient(106.62deg, rgb(232, 78, 56) 6.68%, rgb(186, 44, 184) 82.69%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
  titleThird: css`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    background:linear-gradient(124.31deg, rgb(70, 227, 183) 0.18%, rgb(82, 124, 172) 89.2%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
  content: css`
  width:70%;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 96px;
    text-align: center;
    color: #ffffff;
    opacity:0.6;
    
    ${responsive.mobile} {
      font-size: 18px;
    }
  `,
}));

type PartnerPropsTypes = {
  items: PartnerItem[];
  title: string;
  content: string;
  priority: string;
};
const Partner: React.FC<PartnerPropsTypes> = ({
  title,
  content,
  items,
  priority,
}) => {
  const { styles } = useSyles();

  return (
    <Flexbox className={styles.wrapper}>
      <h1 className={priority === "first" ? styles.titleFirst : priority === "second" ? styles.titleSecond : styles.titleThird }>{title}</h1>
      <h3 className={styles.content}>{content}</h3>

      {/* <Flexbox horizontal gap={"10px"} wrap="wrap" justify="center" style={{ marginTop: "80px" }}>
        {items?.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </Flexbox> */}
      <Grid width={"100%"}>
        {items?.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </Grid>
    </Flexbox>
  );
};

export default Partner;
