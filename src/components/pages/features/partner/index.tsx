import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";
import Box from "./box";
import { PartnerItem } from "..";

const useSyles = createStyles(({ css }) => ({
  wrapper: css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  `,
  content: css`
    font-size: 24px;
    font-weight: 400;
    text-align: cener;
    margin-bottom: 24px;
    text-align: center;
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

      <Flexbox horizontal gap={"10px"} style={{ marginTop: "80px" }}>
        {items?.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </Flexbox>
    </Flexbox>
  );
};

export default Partner;
