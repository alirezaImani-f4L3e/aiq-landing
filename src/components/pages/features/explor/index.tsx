import { Github } from "@lobehub/icons";
import { Button } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";

const useStyle = createStyles(({ css }) => ({
  wrapper: css`
  padding:40px 0`,
}));

const Explor = () => {
  const { styles } = useStyle();

  return (
    <Flexbox
      horizontal
      justify="space-between"
      align="center"
      className={styles.wrapper}
    >
      <Flexbox horizontal={false}>
        <span style={{fontSize:"32px",fontWeight:"bold"}}>کارآیی فردی را فعال کنید. شور آفرینش را دوباره کشف نمایید.</span>

        <p style={{fontSize:"18px",color:"#6f6f6f"}}>
          اکوسیستم غنی دستیاران هوشمند را کاوش کنید و به سادگی گردش کار ایده‌آل
          خود را تنظیم نمایید. با LobeChat شگفتی‌ها خواهید آفرید.
        </p>
      </Flexbox>

      <Flexbox gap={"20px"}>
        <Button
          style={{ padding: "20px 20px", fontSize: "16px" }}
          type="primary"
        >
          نسخه آزمایشی
        </Button>
        <Button
          style={{ padding: "20px 20px", fontSize: "16px" }}
          type="default"
          icon={<Github />}
        >
          گیت هاب
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default Explor;
