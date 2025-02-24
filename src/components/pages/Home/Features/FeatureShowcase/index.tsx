import { createStyles } from "antd-style";
import { createRef, memo, useRef } from "react";
import { Flexbox } from "react-layout-kit";
import Showcase from "./Showcase";
import { Segmented, SegmentedProps } from "antd";
import { useGeneralStore } from "@/store/general/Provider";
import { useTranslation } from "react-i18next";

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

enum ShowcaseSection {
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
    const sliderRef = createRef();

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

    return (
        <Flexbox gap={24} align="center" className={styles.container}>
            {/* Segmented to show different features */}
            {!mobile && <Segmented className={styles.featureSegmented} size="large" options={showcaseOptions} onChange={activeSlide => {
                if(sliderRef.current){
                    sliderRef.current.goTo(activeSlide);
                }
            }} />}

            <Showcase sliderRef={sliderRef} />
        </Flexbox>
    )
})

export default FeatureShowcase;