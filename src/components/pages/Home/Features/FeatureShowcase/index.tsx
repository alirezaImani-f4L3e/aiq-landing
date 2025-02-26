import { createStyles } from "antd-style";
import { createRef, memo, useState } from "react";
import { Flexbox } from "react-layout-kit";
import Showcase from "./Showcase";
import { Segmented, SegmentedProps, Typography } from "antd";
import { useGeneralStore } from "@/store/general/Provider";
import { useTranslation } from "react-i18next";
import { CarouselRef } from "antd/es/carousel";

const useStyles = createStyles(({ css, token }) => ({
    container: css`
        z-index: 2;
        perspective: 1000px;
    `,
    featureSegmented: css`
        background: ${token.colorBgBlur};
        border: 1px solid ${token.colorBorder};
    `
}))

export enum ShowcaseSection {
    Overview,
    Assistants,
    TextToImage,
    TextToSpeech,
    Plugins,
    MultiModels
}

const FeatureShowcase = memo(() => {
    const { styles } = useStyles();
    const mobile = useGeneralStore(s => s.isMobile);
    const { t } = useTranslation("landing");
    const sliderRef = createRef<CarouselRef>();

    const showcaseOptions: SegmentedProps['options'] = [
        {
            value: ShowcaseSection.Overview,
            label: t("features.showcase.overview")
        },
        {
            value: ShowcaseSection.Assistants,
            label: t("features.showcase.assistants")
        },
        {
            value: ShowcaseSection.TextToImage,
            label: t("features.showcase.text-to-image")
        },
        {
            value: ShowcaseSection.TextToSpeech,
            label: t("features.showcase.text-to-speech")
        },
        {
            value: ShowcaseSection.Plugins,
            label: t("features.showcase.plugins")
        },
        {
            value: ShowcaseSection.MultiModels,
            label: t("features.showcase.multi-models")
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(ShowcaseSection.Overview);

    return (
        <Flexbox gap={24} align="center" className={styles.container}>
            {/* Segmented to show different features */}
            {!mobile ? <Segmented className={styles.featureSegmented} size="large" value={currentSlide} options={showcaseOptions} onChange={activeSlide => {
                console.log("active slide " , activeSlide);
                setCurrentSlide(activeSlide as number);
                if (sliderRef.current) {
                    sliderRef.current.goTo(activeSlide as number);
                }
            }} /> : <Typography.Title level={3}>{(showcaseOptions.find((v) => (v as any).value == currentSlide) as any)?.label}</Typography.Title>}

            <Showcase sliderRef={sliderRef} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        </Flexbox>
    )
})

export default FeatureShowcase;