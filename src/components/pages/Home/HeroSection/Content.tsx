import { BRANDING_NAME } from "@/const/branding";
import { Icon } from "@lobehub/ui";
import { Button, Typography } from "antd";
import { createStyles } from "antd-style";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Center, Flexbox } from "react-layout-kit";
import Slogan from "./Slogan";
import { useGeneralStore } from "@/store/general/Provider";

const useStyles = createStyles(({ css, token }) => ({
    container: css`
        position: relative;
        width: 100%;
        padding-inline: 24px;
        -webkit-transition: opacity 2s ease-in-out;
        transition: opacity 2s ease-in-out;
    `,
    featureTag: css`
        -webkit-backdrop-filter: saturate(180%) blur(10px);
        backdrop-filter:saturate(180%) blur(10px);
        position: relative;
        overflow: hidden;
        max-width: 100%;
        background: ${token.colorFillTertiary};
        border-radius: 24px;
        box-shadow: 0 0 0 1px ${token.colorFillSecondary} inset;
    `,
    newTag: css`
        flex: none;
        -webkit-flex: none;
        min-width: 64px;
        padding-block: 4px;
        padding-inline: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
        text-wrap: nowrap;
        border-radius: 16px;
    `,
    featureText: css`
        -webkit-flex:1;
        flex: 1;
        margin: 0 !important;
        font-size: 14px;
        color: ${token.colorText};
    `,
    arrowIcon: css`
        -webkit-margin-end:8px;
        margin-inline-end: 8px;
        color: ${token.colorText};
    `,
    title: css`
        position: relative;
        gap: 0.25em;
        margin-block-end: -0.1em;
        font-size: min(7vh, 40px);
    `,
    titleText: css`
        font-size: 1.5em;
        font-weight: 900;
        line-height: 1;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    `,
    getStartedButton: css`
        display: flex;
        gap: 4px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        height: 52px;
        padding-inline: 24px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: 0;
        border-radius: 10px;
    `
}))

const Content = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation(['common', 'landing']);

    const mobile = useGeneralStore(s => s.isMobile);
    return (
        <Flexbox id="hero" className={styles.container} align="center" gap={24} justify="center" style={{ maxWidth: '1200px', height: 'calc(var(--vh, 100vh) * 1)', overflow: 'hidden', width: '100%' }}>
            <Link href={'https://chat.aiqueue.ir/files'} style={{ marginBottom: '16px' , width: mobile ? "75%" : undefined }}>
                <Flexbox padding={8} gap={8} align="center" horizontal className={styles.featureTag}>
                    <Center style={{ background: '#ffb224', color: 'black' }} className={styles.newTag}>
                        {t("features.newFeature")}
                    </Center>
                    <Typography.Text ellipsis>
                        {t("features.knowledgeBase")}
                    </Typography.Text>

                    <Icon icon={ArrowLeft} className={styles.arrowIcon} />
                </Flexbox>
            </Link>

            {/* Symbol animation with three.js */}

            <Flexbox gap={24} align="center" style={{ width: "100%" }}>
                <div style={{ opacity: 1, transform: 'none' }}>
                    <Flexbox as={'h1'} horizontal gap={8} align="center" className={styles.title}>
                        <div className={styles.titleText}>
                            {BRANDING_NAME}
                        </div>
                    </Flexbox>
                </div>

                <Slogan />

                <div style={{ opacity: 1, transform: 'none' }}>
                    <Center gap={16} horizontal>
                        <Link style={{ height: "52px" }} href={'https://chat.aiqueue.ir/?utm_source=landing&utm_content=hero_get_started'}>
                            <Button className={styles.getStartedButton} type="primary" variant="solid" color="primary" size="large" style={{ minWidth: '250px' }}>
                                {t("getStarted", { ns: 'landing' })}
                            </Button>
                        </Link>
                    </Center>
                </div>
            </Flexbox>


            <div style={{ height: '48px' }}></div>
        </Flexbox>
    )
})

export default Content;