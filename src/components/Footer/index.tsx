'use client'

import { Grid } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";
import BrandData from "./BrandData";
import FooterColumn, { FooterColumnItem } from "./FooterColumn";
import { useTranslation } from "react-i18next";
import { BRANDING_NAME } from "@/const/branding";

const useStyles = createStyles(({ css, token }) => ({
    container: css`
        position: relative;
        width: 100%;
        padding-inline: 24px;
        padding-block: 48px;
        border-top: 1px solid ${token.colorBorder};
        margin-top: 24px;
    `,
    innerContainer: css`
        row-gap: 2em;
        width: 100%;
    `
}))

const ProductColumnItems: FooterColumnItem[] = [
    {
        href: "/",
        linkTarget: "_blank",
        text: "newFeatures",
        type: "link"
    },
    {
        href: "/pricing",
        type: "link",
        text: "pricing"
    },
    {
        href: "/",
        type: "link",
        text: "assistantsMarket"
    },
    {
        href: "/",
        type: "link",
        text: "pluginsMarket"
    }
]

const AIQColumnItems: FooterColumnItem[] = [
    {
        href: "/about",
        text: "about",
        type: "link"
    },
    {
        href: "/contact",
        text: "contactUs",
        type: "link"
    }
]

const Footer = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation("common");
    return <Center>
        <Flexbox className={styles.container} as={'footer'} style={{ maxWidth: "1200px" }} gap={48}>
            <Grid style={{ rowGap: "2em", width: "100%" }} gap={'1em'} rows={7} maxItemWidth={72}>
                <BrandData />
                <FooterColumn title={t("footer.features")} items={ProductColumnItems} />

                <FooterColumn title={BRANDING_NAME} items={AIQColumnItems} />

            </Grid>
        </Flexbox>
    </Center>
});

export default Footer;