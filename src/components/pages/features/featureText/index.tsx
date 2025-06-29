import { Flexbox } from "react-layout-kit";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import { Button } from "@lobehub/ui";
import { Book } from "lucide-react";

const useStyles = createStyles(({ css }) => ({
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
  `,
  subTitle: css`
    font-size: 48px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-style: italic;
  `,
  paragh: css`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 12px;
  `,
}));

const FeatureText: React.FC = () => {
  const { Title } = Typography;
  const { styles } = useStyles();

  return (
    <Flexbox className={styles.wrapper}>
      <span className={styles.title}>ویژگی ها</span>
      <span className={styles.subTitle}>
        <div>در خط مقدم نوآوری بمانید و</div>
        <div>تجربیات چندوجهی را به آغوش بکشید.</div>
      </span>
      <span className={styles.paragh}>
        با نگاهی به آینده، LobeChat همچنان به رصد فناوری‌های پیشرفته ادامه
        می‌دهد و از انواع تعاملات از جمله صدا، تصویر و غیره پشتیبانی می‌کند تا
        سناریوهای کاربریِ بصری‌تر، راحت‌تر و جذاب‌تری بسازد.
      </span>

      <Flexbox gap={"15px"}>
        <Button
          style={{ padding: "20px 20px", fontSize: "16px" }}
          type="primary"
        >
          شروع کار
        </Button>
        <Button
          style={{ padding: "20px 20px", fontSize: "16px" }}
          type="default"
          icon={<Book />}
        >
          کشف تمام قابلیت‌ ها
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default FeatureText;
