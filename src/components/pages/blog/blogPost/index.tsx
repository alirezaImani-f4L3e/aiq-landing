"use client";
import { Grid, Icon, IconProvider, Image, Text } from "@lobehub/ui";
import Link from "next/link";
import { Center, Flexbox } from "react-layout-kit";
import { ArrowRight } from "lucide-react";
import { Typography } from "antd";
import { createStyles } from "antd-style";
import Explor from "../../features/explor";
import PostedBy from "./postedBy";
import ShareTo from "./shareTo";
import RelatedPost from "./relatedPost";

const useStyles = createStyles(({ css, responsive }) => ({
  category: css`
    color: white;
    font-size: 14px;
    background-color: #535760;
    padding: 6px 12px;
    border-radius: 20px;
  `,

  timePublished: css`
    font-size: 14px;
    color: #aaaaaa;
  `,
  subTitle: css`
    opacity: 0.75;
  `,
  gridMain: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 64px;

    ${responsive.mobile} {
      grid-template-columns: 1fr;
      & > *:first-child {
        order: 2;
      }
      & > *:last-child {
        order: 1;
      }
    }
  `,
  mainLeft: css`
    order: 1;

    ${responsive.mobile} {
    }
  `,
  mainImage: css`
    width: 100%;
    height: 300px;

    ${responsive.mobile} {
      max-height: 140px;
    }
  `,
  postedByDesktop: css`
    display: flex;

    ${responsive.mobile} {
      display: none;
    }
  `,
  postedByMobile: css`
    display: none;

    ${responsive.mobile} {
      width: 100%;
      padding-bottom: 40px;
      display: flex;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  `,
  mainRight: css`
    border-left: 1px solid rgba(255, 255, 255, 0.1);

    ${responsive.mobile} {
      border-left: none;
    }
  `,
  explor: css`
    width: 100%;
    heigth: 1px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 40px 0;
  `,
}));

const BlogPost = () => {
  const { styles } = useStyles();
  const { Title } = Typography;

  return (
    <Center style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
      <Link
        href={"/blog"}
        style={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: "start",
          alignItems: "center",
          gap: "8px",
          marginTop: "100px",
          marginBottom: "40px",
        }}
      >
        <IconProvider config={{ color: "#6f6f6f", size: "small" }}>
          <Icon icon={ArrowRight} />
        </IconProvider>

        <Title level={2} style={{ color: "#6f6f6f", fontSize: "14px" }}>
          بازگشت به بلاگ
        </Title>
      </Link>

      <Flexbox
        horizontal
        gap={24}
        align="center"
        style={{ marginLeft: "auto" }}
      >
        <Center className={styles.timePublished} horizontal>
          منتشر شده در
          <time style={{ marginRight: "8px" }}>پنجشنبه، ۱۹ ژوئن ۲۰۲۵</time>
        </Center>

        <Center className={styles.category}>مهندسی</Center>
      </Flexbox>

      <Flexbox style={{ marginBottom: "32px" }}>
        <Title level={1}>
          ادغام API پاسخ‌های OpenAI و تبدیل عامل شبکه را بررسی کنید و دوباره
          امتحان کنید.
        </Title>

        <Text className={styles.subTitle}>
          اگر API تکمیل چت ما را قادر به ساخت "هوش مصنوعی چت" قدرتمند کرد، API
          پاسخ‌ها دری را به روی "هوش مصنوعی عامل‌دار" می‌گشاید. این مقاله به طور
          سیستماتیک توضیح می‌دهد که چگونه API پاسخ‌ها و نقش آن را در LobeChat از
          سه منظر می‌بینیم: انگیزه، جزئیات پیاده‌سازی و تکامل آینده.
        </Text>
      </Flexbox>

      <Center
        className={styles.postedByMobile}
        style={{ alignSelf: "start", margin: "20px 0 40px 0" }}
      >
        <PostedBy />
      </Center>

      <Grid className={styles.gridMain}>
        <Flexbox className={styles.mainRight} gap={42}>
          <Center className={styles.postedByDesktop}>
            <PostedBy />
          </Center>

          <ShareTo />

          <Title
            style={{
              color: "#aaaaaa",
              fontSize: "14px",
              marginLeft: "auto",
              marginBottom: "-20px",
            }}
            level={3}
          >
            خواندن مرتبط
          </Title>

          <RelatedPost />
          <RelatedPost />
        </Flexbox>
        {/* End Right Side */}
        <Flexbox className={styles.mainLeft}>
          <Center style={{ marginBottom: "32px" }}>
            <Image
              className={styles.mainImage}
              src="/images/blog/openAi.webp"
            />
          </Center>

          <Text>
            در ماه مارس امسال، OpenAI رسماً API Responses را منتشر کرد و به وضوح
            بیان کرد که هدف آن جایگزینی API موجود Chat Completions نیست، بلکه
            فراهم کردن زیرساخت سیستماتیک برای سناریوهای کاربردی Agentic AI مانند
            استدلال چند نوبتی، فراخوانی‌های ابزار داخلی و فراخوانی‌های MCP از
            راه دور است. اگر API Chat Completions ما را قادر به ساخت "هوش مصنوعی
            مکالمه‌ای" قدرتمند کند، آنگاه Responses API راه را برای "هوش مصنوعی
            عامل" هموار می‌کند. LobeChat امسال به تدریج از استفاده از عامل هوش
            مصنوعی پشتیبانی خواهد کرد و پشتیبانی از Responses API فقط یک سازگاری
            با رابط‌های مدل جریان اصلی نیست، بلکه یک همسویی فعال با Agentic AI
            است. در LobeChat PR #8048، ما پشتیبانی اولیه از Responses API را
            پیاده‌سازی کردیم که به طور کامل با تمام قابلیت‌های رابط Chat
            Completions موجود همسو بود و قابلیت زنجیره فکری جریان را برای
            مدل‌های سری O بر این اساس اضافه کردیم. این مقاله قصد دارد به طور
            سیستماتیک توضیح دهد که چگونه Responses API و نقش آن را در LobeChat
            از سه منظر می‌بینیم: انگیزه، جزئیات پیاده‌سازی و تکامل آینده. چرا
            API پاسخ‌ها؟ API دستیار "سنگین" در مقابل API تکمیل چت "سبک" قبل از
            بحث در مورد مزایای API پاسخ‌ها، لازم است ویژگی‌های API دستیار و API
            تکمیل چت را بررسی کنیم. API دستیار، تلاش اولیه OpenAI برای API عامل
            بود. این یک ساختار API حالت‌مند است که مکالمه و وضعیت زمینه را در
            سمت سرور مدیریت می‌کند. این طراحی برای توسعه‌دهندگان مناسب است و
            دردسر مدیریت زمینه‌های پیچیده را از بین می‌برد. اما مشکلات آن نیز به
            همان اندازه آشکار است: سرویس‌های حالت‌مند به سختی به صورت افقی
            مقیاس‌پذیر می‌شوند و هنگامی که حجم درخواست‌ها افزایش می‌یابد، مدیریت
            وضعیت پیچیده سرور به یک گلوگاه عملکرد تبدیل می‌شود. در مقابل، API
            تکمیل چت یک API کاملاً بدون حالت است. هر درخواست مستقل است و به هیچ
            اطلاعات جلسه قبلی وابسته نیست، هر درخواست شامل متن کامل (پیام‌ها)
            است و سرور هیچ وضعیت مکالمه‌ای را ذخیره نمی‌کند. این ویژگی بدون
            حالت، API تکمیل چت را در سطح درخواست برنامه، مقیاس‌پذیری بسیار
            بالایی می‌دهد و به راحتی حجم زیادی از درخواست‌های همزمان را مدیریت
            می‌کند. دقیقاً به دلیل مزیت بزرگ مقیاس‌پذیری API تکمیل چت است که به
            موفقیت گسترده‌ای در کاربردهای عملی دست یافته و به استاندارد جهانی
            قالب رابط هوش مصنوعی امروزی تبدیل شده و بر لایه رابط API تسلط یافته
            است. استاد همه چیز: API پاسخ‌ها
          </Text>
        </Flexbox>
      </Grid>

      <Center className={styles.explor}></Center>

      <Explor />
    </Center>
  );
};

export default BlogPost;
