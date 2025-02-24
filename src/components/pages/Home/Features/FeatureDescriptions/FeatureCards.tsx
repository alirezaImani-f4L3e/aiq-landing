import { SpotlightCard } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BRANDING_NAME } from "@/const/branding";

const useStyles = createStyles(({ css, token }) => ({
    card: css`
        overflow: hidden;
        height: 100%;
        border-radius: 16px;
    `,
    cardDescContainer: css`
        height: 100%;
        padding: 16px;
    `,
    cardTitle: css`
        font-size: 18px;
        font-weight: bold;
    `,
    cardDesc: css`
        font-size: 16px;
        color: ${token.colorTextDescription};
    `
}))

export interface FeatureCard {
    imageUrl: string;
    id: "anywhere" | "see" | "hear" | "plugins" | "simple" | "team"
}

const features: FeatureCard[] = [
    {
        imageUrl: "/images/landing/overview/f1.webp",
        id: "anywhere"
    },
    {
        imageUrl: "/images/landing/overview/f2.webp",
        id: "simple"
    },
    {
        imageUrl: "/images/landing/overview/f3.webp",
        id: "team"
    },
    {
        imageUrl: "/images/landing/overview/f4.webp",
        id: "see"
    },
    {
        imageUrl: "/images/landing/overview/f5.webp",
        id: "hear"
    },
    {
        imageUrl: "/images/landing/overview/f6.webp",
        id: "plugins"
    }
]

const renderFeature = (feature: FeatureCard) => {
    const { styles } = useStyles();
    const { t } = useTranslation("landing");
    return (
        <Flexbox className={styles.card}>
            <Image width={360} height={180} style={{ color: 'transparent', height: 'auto', width: '100%' }} alt={t(`features.cards.${feature.id}.title`)} src={feature.imageUrl} />

            <Flexbox className={styles.cardDescContainer} justify="space-between">
                <Flexbox>
                    <h3 className={styles.cardTitle}>{t(`features.cards.${feature.id}.title`)}</h3>

                    <p className={styles.cardDesc}>
                        {t(`features.cards.${feature.id}.description`, { appName: BRANDING_NAME })}
                    </p>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}

const FeatureCards = memo(() => {
    return (
        <SpotlightCard id="feature_cards" columns={3} items={features} renderItem={renderFeature} />
    )
})

export default FeatureCards;