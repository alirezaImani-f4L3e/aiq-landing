import { Github } from "@lobehub/icons";
import { Button } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";

const useStyle = createStyles(({ css, responsive }) => ({
  wrapper: css`
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    ${responsive.mobile} {
      display: flex;
      flex-direction: column;
    }
  `,
  title: css`
    font-size: 32px;
    text-align: center;
    padding: 0 16px;
    font-weight: bold;
    ${responsive.mobile} {
      font-size: 26px;
    }
    `,
    content: css`
    font-size: 18px;
    color: #6f6f6f;
    text-align: justify;
    padding: 0 32px;
    ${responsive.mobile} {
      font-size: 16px;
    }
  `,
}));

const Explor = () => {
  const { styles } = useStyle();

  return (
    <div className={styles.wrapper}>
      <Flexbox horizontal={false}>
        <span className={styles.title}>
          کارآیی فردی را فعال کنید. شور آفرینش را دوباره کشف نمایید.
        </span>

        <p className={styles.content}>
          اکوسیستم غنی دستیاران هوشمند را کاوش کنید و به سادگی گردش کار ایده‌آل
          خود را تنظیم نمایید. با LobeChat شگفتی‌ها خواهید آفرید.
        </p>
      </Flexbox>

      <Flexbox gap={"20px"}>
        <Button
          style={{ width: "200px", height: "45px", fontSize: "16px" }}
          type="primary"
        >
          نسخه آزمایشی
        </Button>
        <Button
          style={{ width: "200px", height: "45px", fontSize: "16px" }}
          type="default"
          icon={<Github />}
        >
          گیت هاب
        </Button>
      </Flexbox>
    </div>
  );
};

export default Explor;
