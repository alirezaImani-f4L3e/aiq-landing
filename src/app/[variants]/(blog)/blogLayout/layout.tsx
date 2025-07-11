"use client";
import Explor from "@/components/pages/features/explor";
import { Menu } from "@lobehub/ui";
import { Divider } from "antd";
import Link from "next/link";
import { Flexbox } from "react-layout-kit";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "@lobehub/ui";
import { type ThemeMode } from "antd-style";
import { useState } from "react";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}
export default function Template({ children }: TemplateProps) {
  const items = [
    {
      key: "/blog",
      label: <Link href="/blog">همه پست ها</Link>,
    },
    {
      key: "/product",
      label: <Link href="/product">محصول</Link>,
    },
    {
      key: "/community",
      label: <Link href="/community">اجتماع</Link>,
    },
    {
      key: "/engineering",
      label: <Link href="/engineering">مهندسی</Link>,
    },
    {
      key: "/company",
      label: <Link href="/company">اخبار شرکت</Link>,
    },
  ];

  const [themeMode, setThemeMode] = useState<ThemeMode>("auto");
  const pathname = usePathname();
  const selectedKey =
    items.find((item) => pathname.startsWith(item.key))?.key || "";
  return (
    <div
      className="special-template"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <Flexbox
        width={"100%"}
        style={{ margin: "100px 0 0 0" }}
        horizontal
        justify="space-between"
        align="center"
      >
        <Menu mode="horizontal" items={items} selectedKeys={[selectedKey]} />

        <ThemeSwitch variant="filled" onThemeSwitch={setThemeMode} themeMode={themeMode} />
      </Flexbox>

      {children}
      <Divider style={{ margin: "78px 0 48px 0" }} />

      <Explor />
    </div>
  );
}
