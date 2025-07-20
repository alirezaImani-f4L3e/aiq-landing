"use client";
import { Flexbox } from "react-layout-kit";
import Banner from "./banner/banner";
import FeatureText from "./featureText";
import Partner from "./partner";
import { Divider } from "antd";
import Creative from "./creative";
import Explor from "./explor";
import { useTranslation } from "react-i18next";

export interface PartnerItem {
  id: number;
  image: string;
  title: string;
  content: string;
}

const firstPartner: PartnerItem[] = [
  {
    id: 1,
    image: "/images/features/img-1.webp",
    title: "هرجایی، هر سوالی داشتید",
    content:
      "فراتر از زمان و مکان، بدون محدودیت موضوعی، چه پشت کامپیوتر باشید و چه در حرکت، دستیار هوشمند شما همیشه در دسترس است.",
  },
  {
    id: 2,
    image: "/images/features/img-2.webp",
    title: "ساده و شگفت‌انگیز، دقیقاً مثل یک پیام‌رسان!",
    content:
      "سادگی یک برنامه چت معمولی را تجربه کنید، به راحتی بین دستیارها جابجا شوید و از گفتگوهای منظم لذت ببرید.",
  },
  {
    id: 3,
    image: "/images/features/img-3.webp",
    title: "دستیاران هوشمند خود را بسازید",
    content:
      "پا به دنیای گسترده‌ای از دستیاران هوشمند بگذارید، همراه با ویرایشگری آسان که به شما امکان می‌دهد بدون هیچ زحمتی، گروه ایده‌آل هوش مصنوعی خود را بسازید.",
  },
];
const secondPartner: PartnerItem[] = [
  {
    id: 4,
    image: "/images/features/img-4.webp",
    title: "ببین و بفهم",
    content:
      "وقتی کلمات کافی نیستند، بگذارید تصاویر صحنه را هدایت کنند. یک عکس آپلود کنید و شاهد باشید که فناوری پیشرفته تشخیص تصویر ما، صحنه را برای شما روشن می‌کند.",
  },
  {
    id: 5,
    image: "/images/features/img-5.webp",
    title: "بشنو و سخن بگو!",
    content:
      "مکالمات صوتی را آغاز کنید و با انتخاب تُن صدای کارشناس، گفت‌وگویی منحصربه‌فرد تجربه نمایید.",
  },
  {
    id: 6,
    image: "/images/features/img-6.webp",
    title: "تصاویر و حتی ویدیو تولید کنید",
    content:
      "از قدرت خلاقانه فناوری‌های DALL·E، MidJourney و Sora استفاده کنید و با تنها یک اشاره، افکارتان را به تصاویر خیره‌کننده و ویدیوهای جذاب تبدیل نمایید.",
  },
];
const thirdPartner: PartnerItem[] = [
  {
    id: 7,
    image: "/images/features/img-7.webp",
    title: "مدل موردعلاقه‌تان را انتخاب کنید",
    content:
      "پا به سکویی بگذارید که شما را به پیشرفته‌ترین مدل‌های زبانی جهان متصل می‌کند و تجربه‌ای بی‌مرز و روان ارائه می‌دهد.",
  },
  {
    id: 8,
    image: "/images/features/img-8.webp",
    title: "بشنو و سخن بگو!",
    content:
      "مکالمات صوتی را آغاز کنید و با انتخاب تُن صدای کارشناس، گفت‌وگویی منحصربه‌فرد تجربه نمایید.",
  },
  {
    id: 9,
    image: "/images/features/img-9.webp",
    title: "قابلیت‌های نمایندگان (Agents) را ارتقا دهید",
    content:
      "هوش نماینده‌ی خود را با مجموعه‌ای گسترده از افزونه‌ها در حوزه‌های جستجو، دانشگاهی، مالی و بازی تقویت کنید و ابعاد جدیدی از قابلیت‌ها را فعال نمایید.",
  },
];

const Features = () => {
  const { t } = useTranslation("features");

  return (
    <Flexbox
      style={{
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
      horizontal={false}
      align="center"
      justify="center"
    >
      <Banner />
      <FeatureText />
      <Divider style={{ margin: "48px 0" }} />
      <Partner
        items={firstPartner}
        title={t("partner.one.title")}
        content={t("partner.one.content")}
        priority="first"
      />
      <Divider style={{ margin: "48px 0" }} />
      <Partner
        items={secondPartner}
        title={t("partner.two.title")}
        content={t("partner.two.content")}
        priority="second"
      />
      <Divider style={{ margin: "48px 0" }} />
      <Partner
        items={thirdPartner}
        title={t("partner.three.title")}
        content={t("partner.three.content")}
        priority="third"
      />
      <Divider style={{ margin: "48px 0" }} />

      <Creative />
      <Divider style={{ margin: "48px 0" }} />
      <Explor />
    </Flexbox>
  );
};

export default Features;
