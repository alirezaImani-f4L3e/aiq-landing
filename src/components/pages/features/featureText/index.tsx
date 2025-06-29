import { Flexbox } from "react-layout-kit";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import { Button } from "@lobehub/ui";
import { Book } from "lucide-react";

const useStyles = createStyles(({ css, responsive }) => ({
  wrapper: css`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  `,
  title: css`
    font-size: 24px;
    margin-bottom: 12px;
    ${responsive.mobile} {
      font-size: 18px;
    }
  `,
  subTitle: css`
    font-size: 48px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-style: italic;

    ${responsive.mobile} {
      font-size: 32px;
    }
    ${responsive.tablet} {
      font-size: 32px;
    }
  `,
  paragh: css`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 22px;
    color: #999999;

    ${responsive.mobile} {
      padding: 0px 32px;
    }

    ${responsive.tablet} {
      padding: 0px 32px;
    }
  `,
  btns: css`
    width: 200px;
    height: 45px;
  `,
}));

const FeatureText: React.FC = () => {
  const { Title } = Typography;
  const { styles } = useStyles();

  return (
    <Flexbox className={styles.wrapper}>
      <span className={styles.title}>ویژگی ها</span>
      <div className={styles.subTitle}>
        <span style={{ textAlign: "center" }}>در خط مقدم نوآوری بمانید و</span>
        <span style={{ textAlign: "center" }}>
          تجربیات چندوجهی را به آغوش بکشید.
        </span>
      </div>
      <span className={styles.paragh}>
        با نگاهی به آینده، LobeChat همچنان به رصد فناوری‌های پیشرفته ادامه
        می‌دهد و از انواع تعاملات از جمله صدا، تصویر و غیره پشتیبانی می‌کند تا
        سناریوهای کاربریِ بصری‌تر، راحت‌تر و جذاب‌تری بسازد.
      </span>

      <Flexbox style={{ padding: "0 16px" }} gap={"15px"} horizontal={false}>
        <Button className={styles.btns} type="primary">
          شروع کار
        </Button>
        <Button className={styles.btns} type="default" icon={<Book />}>
          کشف تمام قابلیت‌ ها
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default FeatureText;
