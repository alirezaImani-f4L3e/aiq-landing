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
      padding: 24px;
    }
    ${responsive.tablet} {
      padding: 24px;
    }
  `,
  title: css`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
  content: css`
    font-size: 24px;
    font-weight: 400;
    text-align: cener;
    margin-bottom: 24px;
    text-align: justify;
    color: #999999;
    ${responsive.mobile} {
      font-size: 18px;
    }
  `,
}));

type PartnerPropsTypes = {
  items: PartnerItem[];
  title: string;
  content: string;
};
const Partner: React.FC<PartnerPropsTypes> = ({ title, content, items }) => {
  const { styles } = useSyles();

  return (
    <Flexbox className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
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
