import { createStyles } from "antd-style";
import Link from "next/link";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import Logo from "@/components/shared/Logo";
import { BRANDING_NAME } from "@/const/branding";
import { useTranslation } from "react-i18next";

const useStyles = createStyles(({ css, token }) => ({
    brandLink: css`
        display: flex;
        flex: none;
        -webkit-box-align: center;
        align-items: center;
        color: ${token.colorTextBase};
    `,
    brandTitle: css`
        font-size: 24px;
        font-weight: bold;
        line-height: 1.4;
    `,
    copyRight: css`
        color: ${token.colorTextDescription}
    `
}))

const BrandData = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation("common");
    return (
        <Flexbox style={{ gridColumn: 'span 3' }} gap={16}>
            <Link href={"/"} className={styles.brandLink}>
                <Flexbox align="center" flex={'none'} horizontal gap={6}>
                    <Logo />

                    <h2 className={styles.brandTitle}>
                        {BRANDING_NAME}
                    </h2>
                </Flexbox>
            </Link>

            <div>
                {t("footer.slogan")}
            </div>

            <div className={styles.copyRight}>
                © 2024-2025 AIQ
            </div>
        </Flexbox>
    )
})

export default BrandData;