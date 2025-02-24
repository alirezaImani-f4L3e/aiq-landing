import useActivePage, { PageKey } from "@/hooks/useActivePage";
import { Tabs } from "antd";
import { createStyles } from "antd-style";
import Link from "next/link";
import { memo, ReactNode } from "react";
import { useTranslation } from "react-i18next";

export interface HeaderTabItem {
    label: string,
    key: number,
    children?: string
}

const useStyles = createStyles(({ css, token }) => ({
    navbar: css`
        & .ant-tabs-nav {
            margin-block-end: 0;
        }

        & .ant-tabs-tab:first-child {
            margin-block: 16px;
            margin-inline: 0 4px;
            padding-block: 6px!important;
            padding-inline: 6px!important;
        }

        & .ant-tabs-tab+.ant-tabs-tab {
            margin-block: 16px !important;
            margin-inline: 4px !important;
            padding-block: 0 !important;
            padding-inline: 12px !important;
        }

        & .ant-tabs-tab {
            color: #aaaaaa;
            transition: background-color 100ms ease-out;
        }

        & .ant-tabs-tab:hover {
            color: ${token.colorText} !important;
            background: ${token.colorBgTextHover};
            border-radius: 5px;
        }
    `
}))

export interface TabItem {
    label: ReactNode | string;
    key: PageKey;
}


const Navbar = memo(() => {
    const { t } = useTranslation("common");
    const { styles } = useStyles();
    const activePage = useActivePage();

    const tabItems: TabItem[] = [
        {
            label: <Link href={'#feature_cards'}>{t("header.tabs.features")}</Link>,
            key: 'features'
        },
        // {
        //     label: <Link href={'/pricing'}>{t("header.tabs.pricing")}</Link>,
        //     key: 'pricing'
        // }
    ]

    return (
        <nav>
            <Tabs activeKey={activePage} tabPosition="top" items={tabItems} className={styles.navbar} />
        </nav>
    )
})

export default Navbar;