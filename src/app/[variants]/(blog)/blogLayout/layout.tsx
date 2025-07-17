"use client";
import Explor from "@/components/pages/features/explor";
import { Menu } from "@lobehub/ui";
import { Divider } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface TemplateProps {
  children: ReactNode;
}
export default function Template({ children }: TemplateProps) {
  const { t } = useTranslation("blog");

  const items = [
    {
      key: "/blog",
      label: <Link href="/blog">{t("pageLayout.menu.allPosts")}</Link>,
    },
    {
      key: "/blog/category/product",
      label: (
        <Link href="/blog/category/product">
          {t("pageLayout.menu.product")}
        </Link>
      ),
    },
    {
      key: "/blog/category/community",
      label: (
        <Link href="/blog/category/community">
          {t("pageLayout.menu.community")}
        </Link>
      ),
    },
    {
      key: "/blog/category/engineering",
      label: (
        <Link href="/blog/category/engineering">
          {t("pageLayout.menu.engineer")}
        </Link>
      ),
    },
    {
      key: "/blog/category/company",
      label: (
        <Link href="/blog/category/company">
          {t("pageLayout.menu.company")}
        </Link>
      ),
    },
  ];

  const pathname = usePathname();

  const selectedKey = items.find((item) => pathname == item.key)?.key || "";
  return (
    <div
      className="special-template"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <Menu
        style={{ margin: "100px 0 0 0" }}
        mode="horizontal"
        items={items}
        selectedKeys={[selectedKey]}
      />

      {children}
      <Divider style={{ margin: "78px 0 48px 0" }} />

      <Explor />
    </div>
  );
}
