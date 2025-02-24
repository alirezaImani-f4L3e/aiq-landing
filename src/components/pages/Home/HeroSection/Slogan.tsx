import { createStyles } from "antd-style";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Center } from "react-layout-kit";

const useStyles = createStyles(({ css }) => ({
    container: css`
        height: min(8.5vw, 110px);
        font-size: min(10vw, 80px);
        font-weight: 900;
        font-style: italic;
        line-height: 1;
        text-align: center;
        letter-spacing: -0.06em;
    `,
    desc: css`
        width: 80%;
        max-width: 760px;
        margin-block: 24px;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.5;
        text-align: center;
        text-wrap: balance;
    `
}))

const Slogan = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation("landing");
    return (
        <>
            <div style={{ opacity: 1, transform: 'none' }}>
                <Center as={'h2'}>
                    <div className={styles.container}>
                        {t("mainSlogan")}
                    </div>
                </Center>
            </div>

            <p className={styles.desc} style={{ opacity: 1, transform: 'none' }}>
                {t("sloganDesc")}
            </p>
        </>
    )
});

export default Slogan;