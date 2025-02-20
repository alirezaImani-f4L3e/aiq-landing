import { BRANDING_NAME } from "@/const/branding";
import { Button } from "antd";
import { createStyles } from "antd-style";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Flexbox } from "react-layout-kit";

const useStyles = createStyles(({ css, token }) => ({
    descContainer: css`
        --rows: 3;
        --max-item-width: 300px;
        --gap: 32px;
        display: grid !important;
        grid-template-columns: repeat(
          auto-fill,
          minmax(
            max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
            1fr
          )
        );
    `,
    slogan: css`
        font-size: 32px;
        font-weight: bold;
        line-height: 1.3;

        & >span{
            color: #ffb224;
        }
    `,
    mainDesc: css`
        font-size: 18px;
        font-weight: normal;
        line-height: 1.8;
    `,
    statBox: css`
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #ffb224;
    `,
    statBoxTitle: css`
        color: ${token.colorTextDescription};
        text-align: center;
    `
}))

const Descriptions = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation("landing");
    const [assistants, plugins] = [10, 12];
    return (
        <Flexbox className={styles.descContainer} horizontal style={{ position: "relative" }} gap={32} width={"100%"}>
            <Flexbox style={{ position: 'relative' }} gap={20} width={"100%"} align="start">
                <h2 className={styles.slogan}>
                    {t("features.slogan")}:
                    <span>{t("features.completion")}</span>
                </h2>

                <Flexbox style={{ position: 'relative' }} gap={12} width={"100%"} wrap="wrap" horizontal>
                    <Link href={'https://chat.aiqueue.ir/?utm_source_landing&utm_content=hero_get_started'}>
                        <Button type="primary" variant="solid" size="large" color="primary">
                            {t("getStarted")}
                        </Button>
                    </Link>
                </Flexbox>
            </Flexbox>

            <Flexbox style={{ gridColumn: "span 2" }} gap={16}>
                <p className={styles.mainDesc}>
                    {t("features.desc", {
                        appName: BRANDING_NAME
                    })}
                </p>

                <Flexbox gap={64} horizontal>
                    <Flexbox as={'h4'} align="center">
                        <div className={styles.statBox} style={{ color: "#8ae8ff" }}>
                            {t("features.free")}
                        </div>
                        <p className={styles.statBoxTitle}>{t("features.getStarted")}</p>
                    </Flexbox>

                    <Flexbox as={'h4'} align="center">
                        <div className={styles.statBox} style={{ color: "#f4416c" }}>
                            {assistants.toLocaleString("fa-IR")}+
                        </div>
                        <p className={styles.statBoxTitle}>{t("features.assistants")}</p>
                    </Flexbox>

                    <Flexbox as={'h4'} align="center">
                        <div className={styles.statBox} style={{ color: "#c4f042" }}>
                            {plugins.toLocaleString("fa-IR")}+
                        </div>
                        <p className={styles.statBoxTitle}>{t("features.plugins")}</p>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
})

export default Descriptions;